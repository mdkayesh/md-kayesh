"use client";

import Image from "next/image";
import Heading from "../Heading";
import { styles } from "../styles";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/Animation";
import { getFeaturedProjects } from "@/firebase/firebase";
import { useEffect, useState } from "react";
import TextAnimation from "../TextAnimation";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);

  const widthVarient = {
    hidden: {
      width: 0,
    },
    visible: {
      width: "50%",
      transition: {
        duration: 0.5,
        delay: 0.9,
      },
    },
  };

  useEffect(() => {
    getFeaturedProjects()
      .then((res) => {
        setProjects(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section
      id="projects"
      className={`${styles.sectionPadding} ${styles.paddingX} overflow-hidden`}
    >
      <div className="container">
        <div className="flex items-center mb-20 gap-4">
          <Heading title={`I've Built`} subTitle={`Some things`} />

          <motion.hr
            className="w-[50%] mt-4 border-none h-[1px] bg-gradient-to-l from-primary to-tertiary"
            variants={widthVarient}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </div>

        <div className="flex flex-col gap-28">
          {projects.map((project, index) => (
            <div
              className={`flex gap-x-4 gap-y-7 items-center ${
                index % 2 === 0
                  ? "flex-col md:flex-row"
                  : "flex-col md:flex-row-reverse"
              }`}
              key={project.id}
            >
              <motion.div
                className="flex-[0.5]"
                variants={fadeIn("right", "spring", 0.4, 0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="relative">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute top-0 left-0 w-full h-full bg-[#0508165e] hover:bg-transparent transition-colors duration-500"
                  />
                  <div className="rounded-lg overflow-hidden shadow-[#000000c5] shadow-lg bg-secondary p-4">
                    <Image
                      src={project.img}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                      alt={project.title}
                    />
                  </div>
                </div>
              </motion.div>
              {/* ----- */}
              <motion.div
                variants={fadeIn("left", "spring", 0.7, 0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`flex-[0.5] text-[15px] ${
                  index % 2 === 0
                    ? "items-end text-right"
                    : "text-left flex flex-col items-start"
                }`}
              >
                <h3 className="text-base text-primary">Featured Project</h3>
                <div
                  className={`flex w-full  ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  }`}
                >
                  <h2 className="text-2xl text-gradient hover:text-primary font-semibold">
                    <a href={project.url} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  </h2>
                </div>
                <p className="mt-3 leading-relaxed">{project.description}</p>
                <p className="flex gap-2 justify-end mt-4 text-slate-400 font-bold">
                  <TextAnimation text={project.technologies} />
                </p>
                {/* ---button--- */}
                <div className="flex justify-end mt-4 gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.socialButton}`}
                    title="Live Preview"
                  >
                    <BiLinkExternal />
                  </a>
                  <a
                    href={project.gitUrl}
                    className={`${styles.socialButton}`}
                    title="See Code"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub />
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
