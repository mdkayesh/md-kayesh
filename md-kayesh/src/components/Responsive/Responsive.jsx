import { styles } from "../../utility/styles";
import MoblieCanvas from "./MobileCanvas";

const Responsive = () => {
  return (
    <section className={`${styles.sectionPadding} ${styles.paddingX} w-full`}>
      <h1 className={`${styles.sectionHeading} mb-10`}>
        Make Your Websites fully responsive
      </h1>
      <div className="h-[400px]">
        <MoblieCanvas />
      </div>
    </section>
  );
};

export default Responsive;
