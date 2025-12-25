import DottedGlow from "@/ui/DottedGlow";
import styles from "./banner.module.css";
const Banner = () => {
  return (
    <section className={`${styles.banner_container} container border-x`}>
      <DottedGlow />
    </section>
  );
};

export default Banner;
