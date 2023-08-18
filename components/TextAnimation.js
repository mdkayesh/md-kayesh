import React from "react";
import { motion } from "framer-motion";

const TextAnimation = ({ text }) => {
  const textArr = text.split(",");

  console.log(text);
  const conatainerVarients = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const textVarients = {
    hidden: {
      y: 20,
      x: -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <motion.div
      variants={conatainerVarients}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-wrap"
    >
      {textArr.map((letter, index) => (
        <motion.span
          variants={textVarients}
          className="flex items-center whitespace-nowrap before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary before:inline-block before:mx-2 first:before:hidden"
          key={index}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextAnimation;
