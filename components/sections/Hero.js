"use client";

import { styles } from "../styles";
import AutoType from "@/utils/AutoType";
import { FaLongArrowAltDown } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  textVariant,
  zoomIn,
} from "@/utils/Animation";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative hero h-[120vh] w-full">
      <video
        src="/hero.mp4"
        className="w-full h-full object-cover"
        muted
        loop
        autoPlay
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-heroBg text-center pt-20 flex justify-center items-center flex-col gap-3 px-3"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer(0, 0)}
        viewport={{ once: true }}
      >
        <motion.div
          className="img relative rounded-full min-w-[150px] min-h-[150px] max-h-[150px] max-w-[150px] overflow-hidden"
          variants={zoomIn(0.3, 0.5)}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-tertiary to-primary z-0 animate-spin" />
          <Image
            src={"/hero-me.jpg"}
            width={100}
            height={100}
            className="object-cover rounded-full p-1.5 w-full h-full relative z-10"
            alt={"mdKayesh"}
          />
        </motion.div>

        <motion.h1
          variants={fadeIn("up", "tween", 1.4, 0.5)}
          className={`text-2xl sm:text-4xl md:text-5xl font-bold text-white flex gap-2`}
        >
          <span>Hi, {`I'm`}</span>
          {/* <span className="">front-end-developer</span> */}
          <AutoType />
        </motion.h1>
        <motion.p
          variants={fadeIn("up", "tween", 1.6, 0.5)}
          className="flex flex-col text-base"
        >
          <span>
            I love to Develop user interfaces and web applications with latest
            technologies.
          </span>{" "}
          <span>Transforming ideas into reality through code.</span>
        </motion.p>
        <motion.a
          href="#projects"
          variants={fadeIn("up", "tween", 1.8, 0.5)}
          type="button"
          className={`${styles.button} mt-2`}
        >
          My work
        </motion.a>

        <motion.div variants={textVariant(2)}>
          <FaLongArrowAltDown className="h-10 w-10 mt-7 text-primary animate-bounce" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
