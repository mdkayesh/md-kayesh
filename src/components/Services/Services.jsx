import { useEffect, useState } from "react";
import { styles } from "../../utility/styles";
import { services } from "../Data/Data";
import { Tilt } from "react-tilt";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utility/Animation";

const Services = () => {
  const [showItems, setshowItems] = useState(3);
  const [width, setWidth] = useState(window.innerWidth);

  const handleSeeMore = () => {
    if (services.length === showItems) {
      setshowItems(3);
    } else {
      setshowItems((prev) => prev + 3);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleScroll);

    width >= 1280
      ? setshowItems(4)
      : width >= 992
      ? setshowItems(3)
      : setshowItems(4);

    return () => {
      removeEventListener("resize", handleScroll);
    };
  }, [width]);

  return (
    <motion.section
      className={`${styles.sectionPadding} ${styles.paddingX}`}
      id="services"
      variants={staggerContainer(0, 1)}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
    >
      <motion.h1
        variants={fadeIn("up", "spring", 0.3, 0.3)}
        className={`${styles.sectionHeading}`}
      >
        Secvices I provide
      </motion.h1>
      <motion.p
        variants={fadeIn("up", "spring", 0.5, 0.3)}
        className={styles.subHeading}
      >
        Crafting visually stunning websites with powerful functionality to
        elevate your brand.
      </motion.p>
      <motion.div
        variants={fadeIn("up", "spring", 0.7, 0.4)}
        className="container grid gap-x-4 gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10"
      >
        <AnimatePresence>
          {services.slice(0, showItems).map((service) => (
            <motion.div
              layout
              key={service.title}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Tilt
                options={{ scale: 1 }}
                className="rounded-3xl shadow-inner bg-gradient-to-bl from-secondary to-transparent h-full"
              >
                <div className="item flex items-center gap-4 flex-col px-4 py-6 text-center">
                  <div className="img shadow-inner w-16 h-16 rounded-full p-4 hover:shadow-innerHover transition-shadow duration-500">
                    <img
                      src={service.icon}
                      alt="icon"
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl text-gradient font-bold">
                    {service.title}
                  </h3>
                  <p className="text-[15px]">{service.text}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <div className="flex justify-center mt-10">
        <button className={styles.button} onClick={handleSeeMore}>
          {showItems === services.length ? "See Less" : "See More"}
        </button>
      </div>
    </motion.section>
  );
};

export default Services;
