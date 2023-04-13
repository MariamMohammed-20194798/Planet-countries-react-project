import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  const [isLoding, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw Error("Can not get data");
        }
        const data = await res.json();
        setData(data);
        setLoading(false);
        setError(null);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    })();
  }, [url]);

  return { data, isLoding, error };
};

export default useFetch;
