const DIRECT_API_BASE = "https://api.restcountries.com/countries/v5";

// Dev server proxies API calls to avoid browser CORS restrictions.
export const USE_PROXY = process.env.NODE_ENV === "development";
export const API_BASE = USE_PROXY
  ? "/api/restcountries/countries/v5"
  : DIRECT_API_BASE;
export const API_KEY = process.env.REACT_APP_REST_COUNTRIES_API_KEY;
export function buildCountriesUrl(path) {
  if (path === "all") {
    return API_BASE;
  }

  if (path.startsWith("region/")) {
    return `${API_BASE}/${path}`;
  }

  if (path.startsWith("name/")) {
    const query = path.slice("name/".length);
    return `${API_BASE}/name?q=${encodeURIComponent(query)}`;
  }

  return API_BASE;
}

export function buildCountryUrl(code) {
  return `${API_BASE}/codes.alpha_3/${encodeURIComponent(code)}`;
}
