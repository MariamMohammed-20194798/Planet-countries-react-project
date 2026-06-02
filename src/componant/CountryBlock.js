import classes from "./CountryBlock.module.css";

const CountryBlock = ({ img, capital, population, region, name }) => (
  <article className={classes.card}>
    <div className={classes.imageWrap}>
      <img
        src={img}
        className={classes.img}
        alt={`Flag of ${name}`}
        loading="lazy"
      />
    </div>
    <div className={classes.body}>
      <h2 className={classes.name}>{name}</h2>
      <dl className={classes.facts}>
        <div className={classes.fact}>
          <dt>Population</dt>
          <dd>{population?.toLocaleString("en-US") ?? "—"}</dd>
        </div>
        <div className={classes.fact}>
          <dt>Region</dt>
          <dd>{region ?? "—"}</dd>
        </div>
        <div className={classes.fact}>
          <dt>Capital</dt>
          <dd>{capital ?? "—"}</dd>
        </div>
      </dl>
    </div>
  </article>
);

export default CountryBlock;
