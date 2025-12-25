import { DotProps } from "./dottedglow.types";
import styles from "./dottedglow.module.css";
const Dot: React.FC<DotProps> = ({
  size = 1,
  color = "211,211,211",
  delay = 0,
}) => {
  return (
    <span
      className={styles.dot}
      style={
        {
          "--dot-size": `${size}px`,
          "--dot-color": color,
          "--pulse-delay": `${delay}s`,
        } as React.CSSProperties
      }
    />
  );
};

export default Dot;
