"use client";

import Heading from "../Heading";
import { MdWorkHistory } from "react-icons/md";
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "@/utils/Animation";

const Experience = () => {
  return (
    <section
      className={`${styles.sectionPadding} ${styles.paddingX}`}
      id="experience"
    >
      <div className="container">
        <Heading
          title={"Experience"}
          subTitle={"My Work"}
          className={"items-center mb-20"}
        />

        <div className="relative pt-28">
          <div className="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center h-full">
            <div className="rounded-full w-fit p-2 border-primary border border-solid text-3xl text-primary">
              <MdWorkHistory />
            </div>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="line w-[2px] h-full bg-gradient-to-b from-primary to-tertiary"
            />
          </div>

          <motion.div
            className="flex flex-col gap-16 overflow-hidden pb-5"
            variants={staggerContainer(0, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <Tilt
                options={{
                  scale: 1,
                }}
                className="flex items-left gap-20 flex-col pl-11 md:pl-0 md:flex-row md:items-center"
              >
                <motion.div
                  className="relative rounded-lg shadow-inner flex flex-col gap-2 p-5 w-full md:w-1/2 items-start md:items-end md:text-right"
                  variants={zoomIn(0.3, 0.5)}
                >
                  <p className="text-gradient font-bold text-xs md:hidden">
                    May 2020 - February 2022
                  </p>
                  <h3 className="text-primary font-semibold text-2xl">
                    Large It Solution
                  </h3>
                  <h4 className="text-gradient font-bold text-xl">
                    Front-End-Developer
                  </h4>
                  <p>
                    Developed responsive web applications using HTML5, CSS3, and
                    JavaScript. Utilized React.js to build reusable and modular
                    components for enhanced user interfaces. Implemented Sass
                    and Tailwind CSS for efficient styling and rapid
                    prototyping.
                  </p>
                  <div className="flex items-center absolute top-1/2 rotate-180 -translate-y-1/2 w-[26px] -left-[26px] md:w-11 md:rotate-0 md:-right-11 md:left-auto">
                    <div className="h-[2px] bg-primary flex-1" />
                    <div className="h-3 rounded-full bg-primary w-3" />
                  </div>
                </motion.div>

                {/* ----- */}
                <div className="hidden md:block w-1/2">
                  <p className="text-gradient font-bold">
                    May 2020 - February 2022
                  </p>
                </div>
              </Tilt>
            </div>
            {/* item 2 */}

            <div>
              <Tilt
                options={{
                  scale: 1,
                }}
                className="flex items-left gap-20 flex-col pl-11 md:pl-0 md:flex-row-reverse md:items-center"
              >
                <motion.div
                  className="relative rounded-lg shadow-inner flex flex-col gap-2 p-5 w-full md:w-1/2 items-start"
                  variants={zoomIn(1, 0.5)}
                >
                  <p className="text-gradient font-bold text-xs md:hidden">
                    June 2022 - April 2023
                  </p>
                  <h3 className="text-primary font-semibold text-2xl w-full">
                    Southtech Group
                  </h3>
                  <h4 className="text-gradient font-bold text-xl">
                    Senior Front-End-Developer
                  </h4>
                  <p>
                    Assisted in the development of responsive web pages using
                    HTML, CSS, and JavaScript. Worked closely with the front-end
                    development team to implement new features and enhancements.
                  </p>
                  <div className="flex items-center absolute top-1/2 rotate-180 -translate-y-1/2 w-[26px] -left-[26px] md:w-11 md:-left-11">
                    <div className="h-[2px] bg-primary flex-1" />
                    <div className="h-3 rounded-full bg-primary w-3" />
                  </div>
                </motion.div>

                {/* ----- */}
                <div className="hidden md:flex w-1/2 justify-end">
                  <p className="text-gradient font-bold">
                    June 2022 - April 2023
                  </p>
                </div>
              </Tilt>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
