"use client";

import Image from "next/image";
import { styles } from "../styles";
import Heading from "../Heading";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/Animation";

const About = () => {
  return (
    <section
      className={`pt-20 mb-32 ${styles.paddingX} bg-secondary overflow-hidden md:rounded-bl-[300px]`}
      id="about"
    >
      <motion.div
        className="flex gap-5 items-center flex-col container md:flex-row"
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="left w-full md:w-1/2"
          variants={fadeIn("right", "spring", 0.4, 0.3)}
        >
          <div className="img">
            <Image
              src="/me2.png"
              alt="img"
              height={400}
              width={400}
              className="mx-auto"
            />
          </div>
        </motion.div>
        <motion.div
          className="right w-full md:w-1/2 pb-10"
          variants={fadeIn("left", "spring", 0.6, 0.3)}
        >
          <Heading title={"About me"} subTitle={"Know"} />
          <p className="mt-6 leading-relaxed">
            As a frontend developer, I have expertise in HTML, CSS, Javascript
            and popular frameworks such as Reactjs. I create visually appealing
            and user-fridenly interfaces with a focus on detail, and stay
            up-todate with the latest frontend technologies and best practices.
            I am skilled in troubleshooting and debugging, and have passion for
            creating seamless user experiences. I have strong communication
            skills and a proven ability to collaborate with designers and
            developers.
          </p>
          <div className="flex gap-4 items-center justify-end mt-6 md:justify-start">
            <a
              href="#contact"
              type="button"
              className={`relative overflow-hidden border border-primary border-solid px-6 py-2 rounded-[99px] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primary after:-z-0  after:-translate-y-full hover:after:translate-y-0 after:transition-all after:duration-300 hover:text-black`}
            >
              <span className="relative z-10">Contact me</span>
            </a>
            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className={`relative overflow-hidden border border-primary border-solid px-6 py-2 rounded-[99px] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primary after:-z-0  hover:after:translate-y-full after:translate-y-0 after:transition-all after:duration-300 text-black hover:text-textColor`}
            >
              <span className="relative z-10">Download CV</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
