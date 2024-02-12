"use client";

import { fadeIn, staggerContainer } from "@/utils/Animation";
import { motion } from "framer-motion";

const Heading = ({ title, subTitle, className }) => {
  const widthVarient = {
    hidden: {
      width: 0,
    },
    visible: {
      width: "60px",
      transition: {
        duration: 0.5,
        delay: 0.9,
      },
    },
  };

  return (
    <motion.div
      className={`${className} flex flex-col gap-1`}
      variants={staggerContainer(0, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h3
        className="text-lg text-primary capitalize"
        variants={fadeIn("left", "spring", 0.3, 0.5)}
      >
        {subTitle}
      </motion.h3>
      <motion.h2
        className="text-4xl text-gradient font-bold capitalize"
        variants={fadeIn("right", "spring", 0.6, 0.5)}
      >
        {title}
      </motion.h2>
      <motion.div
        className="w-[50px] h-[3px] rounded-lg bg-primary mt-3"
        variants={widthVarient}
      ></motion.div>
    </motion.div>
  );
};

export default Heading;
