import { useRef, useState } from "react";
import { styles } from "../../utility/styles";
import { projects } from "../Data/Data";
import ProjectCart from "./ProjectCart";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { textVariant } from "../../utility/Animation";

const Projects = () => {
  const [scrollCount, setScrollCount] = useState(0);

  const onScroll = (e) => {
    setScrollCount(Math.floor(e.target.scrollLeft / e.target.clientWidth));
  };

  const projectRef = useRef(null);

  const handleClick = (direction) => {
    if (direction === "prev") {
      projectRef.current.scrollLeft -= projectRef.current.clientWidth;
      if (scrollCount === 0) return;
      setScrollCount((prev) => prev - 1);
    } else if (direction === "next") {
      projectRef.current.scrollLeft += projectRef.current.clientWidth;
      if (projects.length - 1 === scrollCount) return;
      setScrollCount((prev) => prev + 1);
    } else {
      projectRef.current.scrollLeft =
        projectRef.current.clientWidth * direction;
      setScrollCount(direction);
    }
  };

  return (
    <section
      className={`${styles.sectionPadding} ${styles.paddingX}`}
      id="projects"
    >
      <motion.h1
        className={`${styles.sectionHeading}`}
        initial={"hidden"}
        whileInView={"visible"}
        variants={textVariant()}
        viewport={{ once: true }}
      >
        Some things I've built
      </motion.h1>
      <motion.p
        initial={"hidden"}
        whileInView={"visible"}
        variants={textVariant(0.3)}
        viewport={{ once: true }}
        className={styles.subHeading}
      >
        Each project is briefly described with links to code repositories and
        live demos in it. It reflects my ability to solve complex problems, work
        with technologies, and manage projects effectively.
      </motion.p>
      <div className={`container mt-4`}>
        <div
          className="scroll-hidden flex gap-4 pt-0 snap-x snap-mandatory overflow-x-scroll overflow-y-hidden scroll-smooth"
          ref={projectRef}
          onScroll={onScroll}
        >
          {projects.map((project, index) => (
            <ProjectCart {...project} key={index} index={index} />
          ))}
        </div>

        {/* buttons */}
        <div className="flex gap-3 justify-center items-center mt-4">
          <button
            className="text-3xl font-semibold hover:text-primary"
            onClick={() => handleClick("prev")}
          >
            <BsArrowLeft />
          </button>
          {projects.map((project, index) => (
            <button
              key={project.url}
              className={`${
                scrollCount === index ? "bg-primary scale-150" : "bg-secondary"
              } h-2.5 w-2.5 rounded-full block transition-all`}
              onClick={() => handleClick(index)}
            ></button>
          ))}
          <button
            className="text-3xl font-semibold hover:text-primary"
            onClick={() => handleClick("next")}
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
