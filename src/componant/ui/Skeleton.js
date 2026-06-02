import styles from "./Skeleton.module.css";

export const Skeleton = ({ className = "" }) => (
  <span className={`${styles.skeleton} ${className}`} aria-hidden="true" />
);

export const CountryCardSkeleton = () => (
  <article className={styles.cardSkeleton} aria-hidden="true">
    <Skeleton className={styles.cardImage} />
    <div className={styles.cardBody}>
      <Skeleton className={styles.lineTitle} />
      <Skeleton className={styles.line} />
      <Skeleton className={styles.line} />
      <Skeleton className={styles.lineShort} />
    </div>
  </article>
);

export const CountryGridSkeleton = ({ count = 8 }) => (
  <div className={styles.grid} role="status" aria-label="Loading countries">
    {Array.from({ length: count }, (_, i) => (
      <CountryCardSkeleton key={i} />
    ))}
    <span className="sr-only">Loading countries…</span>
  </div>
);

export const CountryDetailSkeleton = () => (
  <div className={styles.detail} role="status" aria-label="Loading country details">
    <div className={styles.detailGrid}>
      <Skeleton className={styles.detailImage} />
      <div className={styles.detailText}>
        <Skeleton className={styles.lineTitle} />
        <div className={styles.detailFacts}>
          {Array.from({ length: 6 }, (_, i) => (
            <Skeleton key={i} className={styles.line} />
          ))}
        </div>
      </div>
    </div>
    <span className="sr-only">Loading country details…</span>
  </div>
);
