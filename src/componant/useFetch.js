import { useEffect, useState } from "react";
import { API_KEY, USE_PROXY } from "../config/api";
import { normalizeCountry } from "../utils/countryAdapter";

const PAGE_SIZE = 100;

const getErrorMessage = (json, status) => {
  if (json?.errors?.[0]?.message) {
    return json.errors[0].message;
  }

  if (status === 401) {
    return "Invalid or missing API key.";
  }

  return "Could not fetch data. Please try again.";
};

const withPaginationParams = (url, limit, offset) => {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}limit=${limit}&offset=${offset}`;
};

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoding, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        let allCountries = [];
        let offset = 0;

        while (true) {
          const paginatedUrl = withPaginationParams(url, PAGE_SIZE, offset);
          const headers = {};
          if (API_KEY && !USE_PROXY) {
            headers.Authorization = `Bearer ${API_KEY}`;
          }

          const res = await fetch(paginatedUrl, { headers });
          const json = await res.json();

          if (!res.ok || json.errors) {
            throw new Error(getErrorMessage(json, res.status));
          }

          const { objects = [], meta } = json.data ?? {};
          allCountries = allCountries.concat(objects.map(normalizeCountry));

          if (!meta?.more) {
            break;
          }

          offset += meta.count;
        }

        if (!cancelled) {
          setData(allCountries);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setData(null);
          setLoading(false);
          setError(err.message);
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [url]);

  return { data, isLoding, error };
};

export default useFetch;
