"use client";

import { services } from "@/public/Data/data";
import Heading from "../Heading";
import { Tilt } from "react-tilt";
import Image from "next/image";
import { styles } from "../styles";
import { useRef, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/Animation";

const Services = () => {
  const [activeIndx, setActiveIndx] = useState();
  const itemRef = useRef(null);
  const containerRef = useRef(null);

  const handleActiveIndx = (index) => {
    setActiveIndx(index !== activeIndx ? index : null);
  };

  const handleClick = (direction) => {
    console.log("clicked:", itemRef.current.clientWidth);
    if (direction === "prev") {
      containerRef.current.scrollLeft -= itemRef.current.clientWidth;
    } else {
      containerRef.current.scrollLeft += itemRef.current.clientWidth;
    }
  };

  return (
    <section
      className={`${styles.sectionPadding} ${styles.paddingX}`}
      id="services"
    >
      <div className="container">
        <Heading
          title={"My Services"}
          subTitle={"Area Of"}
          className={"items-center"}
        />

        <motion.div
          variants={staggerContainer(0, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="service flex gap-5 w-full scroll-smooth overflow-x-scroll overflow-y-hidden pt-20 pb-5 px-3 snap-mandatory snap-x xl:gap-6"
          ref={containerRef}
        >
          {services.map((service, index) => (
            <motion.div
              variants={fadeIn("up", "tween", 0.3 + 0.3 * index, 0.5)}
              key={service.title}
              ref={itemRef}
              className="snap-center min-w-[100%] sm:snap-end sm:min-w-[49%] lg:min-w-[32.33333%]"
            >
              <Tilt
                className={`shadow-inner py-6 px-5 rounded-lg flex flex-col items-left gap-4 w-full h-full`}
                options={{
                  scale: 1,
                }}
              >
                <div className="rounded-full w-[60px] h-[60px] shadow-inner p-3">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={"auto"}
                    height={"auto"}
                    className="w-full h-full"
                  />
                </div>

                <h3 className="text-gradient text-xl font-semibold">
                  {service.title}
                </h3>
                <p
                  className={`text-sm ${
                    index === activeIndx ? "" : "text-overflow-line-4"
                  }`}
                >
                  {service.text}
                </p>
                <button
                  type="button"
                  className="text-base text-primary w-fit hover:underline"
                  onClick={() => handleActiveIndx(index)}
                >
                  {index === activeIndx ? "Read Less" : "Read More"}
                </button>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex gap-4 justify-center">
          <button
            type="button"
            className={`${styles.socialButton}`}
            onClick={() => handleClick("prev")}
          >
            <MdArrowForwardIos className="rotate-180" />
          </button>
          <button
            type="button"
            className={`${styles.socialButton}`}
            onClick={() => handleClick("next")}
          >
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
