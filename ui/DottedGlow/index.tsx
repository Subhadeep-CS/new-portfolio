import Dot from "./Dot";
import styles from "./dottedglow.module.css";
const DottedGlow = () => {
  return (
    <div className={styles.dot_banner}>
      {Array.from({ length: 405 }).map((_, i) => (
        <Dot key={i} size={4} delay={(i % 30) * 0.1} />
      ))}
    </div>
  );
};

export default DottedGlow;
