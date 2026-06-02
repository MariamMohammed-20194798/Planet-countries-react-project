import { Link, useParams, useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import useFetch from "./useFetch";
import classes from "./CountryInfo.module.css";
import Button from "./ui/Button";
import StatePanel from "./ui/StatePanel";
import { CountryDetailSkeleton } from "./ui/Skeleton";
import Reveal from "./ui/Reveal";

const CountryInfo = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoding } = useFetch(
    `https://restcountries.com/v2/alpha/${code}`
  );

  const languages =
    data?.languages?.map((language) => language.name).join(", ") ?? "—";

  const currencies =
    data?.currencies?.map((currency) => currency.name).join(", ") ?? "—";

  return (
    <div className={classes.page}>
      <Reveal>
        <div className={classes.backRow}>
          <Button
            variant="secondary"
            className={classes.backBtn}
            onClick={() => navigate(-1)}
          >
            <HiArrowLeft aria-hidden="true" />
            Back
          </Button>
        </div>
      </Reveal>

      {isLoding && <CountryDetailSkeleton />}

      {error && !isLoding && (
        <StatePanel
          variant="error"
          title="Country not found"
          message={error}
        />
      )}

      {data && !isLoding && (
        <Reveal delay={80}>
          <div className={classes.detail}>
            <div className={classes.flagColumn}>
              <img
                className={classes.flag}
                src={data.flags.png}
                alt={`Flag of ${data.name}`}
              />
            </div>
            <div className={classes.infoColumn}>
              <h1 className={classes.name}>{data.name}</h1>
              <dl className={classes.factsGrid}>
                <div className={classes.fact}>
                  <dt>Native Name</dt>
                  <dd>{data.nativeName ?? "—"}</dd>
                </div>
                <div className={classes.fact}>
                  <dt>Population</dt>
                  <dd>{data.population?.toLocaleString("en-US") ?? "—"}</dd>
                </div>
                <div className={classes.fact}>
                  <dt>Region</dt>
                  <dd>{data.region ?? "—"}</dd>
                </div>
                <div className={classes.fact}>
                  <dt>Sub Region</dt>
                  <dd>{data.subregion ?? "—"}</dd>
                </div>
                <div className={classes.fact}>
                  <dt>Capital</dt>
                  <dd>{data.capital ?? "—"}</dd>
                </div>
                <div className={classes.fact}>
                  <dt>Top Level Domain</dt>
                  <dd>{data.topLevelDomain?.join(", ") ?? "—"}</dd>
                </div>
                <div className={classes.fact}>
                  <dt>Currencies</dt>
                  <dd>{currencies}</dd>
                </div>
                <div className={classes.fact}>
                  <dt>Languages</dt>
                  <dd>{languages}</dd>
                </div>
                {data.area != null && (
                  <div className={classes.fact}>
                    <dt>Area</dt>
                    <dd>{data.area.toLocaleString("en-US")} km²</dd>
                  </div>
                )}
              </dl>

              {data.borders?.length > 0 && (
                <div className={classes.borders}>
                  <span className={classes.bordersLabel}>Border Countries</span>
                  <div className={classes.borderChips}>
                    {data.borders.map((border) => (
                      <Link
                        key={border}
                        to={`/${border}`}
                        className={classes.borderLink}
                      >
                        {border}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      )}
    </div>
  );
};

export default CountryInfo;
