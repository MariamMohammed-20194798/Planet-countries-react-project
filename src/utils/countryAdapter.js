const getNativeName = (nativeNames) => {
  if (!nativeNames || typeof nativeNames !== "object") {
    return undefined;
  }

  const first = Object.values(nativeNames)[0];
  return first?.common ?? first?.official;
};

export function normalizeCountry(country) {
  return {
    name: country.names?.common ?? "—",
    alpha3Code: country.codes?.alpha_3,
    flags: { png: country.flag?.url_png },
    capital: country.capitals?.[0]?.name,
    population: country.population,
    region: country.region,
    subregion: country.subregion,
    nativeName: getNativeName(country.names?.native),
    topLevelDomain: country.tlds,
    languages: country.languages,
    currencies: country.currencies,
    area: country.area?.kilometers,
    borders: country.borders,
  };
}
