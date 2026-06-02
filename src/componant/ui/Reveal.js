import { useInView } from "../../hooks/useInView";
import styles from "./Reveal.module.css";

const Reveal = ({ children, className = "", delay = 0, as: Tag = "div" }) => {
  const [ref, isInView] = useInView({ once: true });

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${isInView ? styles.visible : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
