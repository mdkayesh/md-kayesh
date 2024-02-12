"use client";

// import { projects } from "@/public/Data/data";
import Heading from "../Heading";
import { styles } from "../styles";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { fadeIn, staggerContainer } from "@/utils/Animation";
import { motion } from "framer-motion";
import { getNoteWorthyProject } from "@/firebase/firebase";

const NoteWorthyProjects = () => {
  const [activeIndx, setActiveIndx] = useState();
  const [projects, setProjects] = useState([]);

  const handleActiveIndx = (index) => {
    setActiveIndx(index !== activeIndx ? index : null);
  };

  useEffect(() => {
    getNoteWorthyProject()
      .then((res) => {
        setProjects(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section
      id="note-projects"
      className={`${styles.sectionPadding} ${styles.paddingX}`}
    >
      <div className="container">
        <Heading
          title={"Projects"}
          subTitle={"Other Noteworthy"}
          className={"items-center mb-32"}
        />

        <motion.div
          variants={staggerContainer(0, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              variants={fadeIn("up", "tween", 0.4 + 0.3 * index, 0.4)}
              key={project.url}
            >
              <div className="bg-gradient-to-br w-full h-full from-secondary to-transparent p-6 rounded-lg relative flex flex-col justify-between hover:-translate-y-2 transition-transform shadow-lg shadow-[#000000c5]">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-0 left-0 w-full h-full z-10"
                />
                <header className="header">
                  <div className="aspect-[2/1.4]">
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={300}
                      height={300}
                      className="object-cover w-full aspect-[2/1.4]"
                      priority={true}
                    />
                  </div>

                  {/* ---content--- */}

                  <div className="content mt-4">
                    <h3 className="text-primary font-semibold text-xl">
                      {project.title}
                    </h3>
                    <p
                      className={`mt-3 ${
                        index === activeIndx ? "" : "text-overflow-line-4"
                      }`}
                    >
                      {project.description}
                    </p>

                    <p className="mt-3 text-slate-400 font-bold">
                      {project.technologies.split(",").join(" -")}
                    </p>
                  </div>
                </header>
                <footer className="flex justify-between items-center mt-4 w-full">
                  {project.description.length > 200 && (
                    <button
                      type="button"
                      className="text-base text-primary w-fit relative z-20 hover:underline"
                      onClick={() => handleActiveIndx(index)}
                    >
                      {index === activeIndx ? "Read Less" : "Read More"}
                    </button>
                  )}

                  <div className="flex gap-3 relative z-20">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xl hover:text-primary transition-colors duration-300"
                      title="Live preview"
                    >
                      <BiLinkExternal />
                    </a>
                    <a
                      href={project.gitUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xl hover:text-primary transition-colors duration-300"
                      title="See code"
                    >
                      <BsGithub />
                    </a>
                  </div>
                </footer>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NoteWorthyProjects;
