import { fadeIn, staggerContainer, textVariant } from "../../utility/Animation";
import { styles } from "../../utility/styles";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const ProjectCart = ({
  title,
  description,
  img,
  technologies,
  index,
  url,
  gitUrl,
}) => {
  return (
    <motion.div
      className={`project-cart min-w-full snap-center py-6 flex gap-x-4 gap-y-8 items-center flex-col ${
        index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
      id={`${index}`}
      variants={staggerContainer(0.3, 0)}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div
        variants={fadeIn("up", "spring", 1, 0.5)}
        className="w-full md:w-1/2 [&_.bd]:hover:border-primary [&_.bd]:hover:-left-6 [&_.bd]:hover:top-6 [&_.img]:hover:-translate-y-1 [&_.img]:hover:translate-x-1 "
      >
        <div className="relative img w-3/4 max-h-[300px] h-[250px] mx-auto rounded-lg bg-transparent">
          <div className="bd w-full h-full border-4 border-secondary rounded-lg absolute top-5 -left-5 transition-all" />
          <div className="img overflow-y-hidden h-full w-full rounded-lg relative z-10 bg-transparent transition-all">
            <img src={img} alt="project" className="" />
          </div>
        </div>
      </motion.div>

      {/* content */}

      <div className="content w-full md:w-1/2 flex flex-col gap-3 py-8 px-6">
        <motion.h3
          variants={textVariant(1)}
          className={`text-gradient text-2xl font-semibold`}
        >
          {title}
        </motion.h3>
        <motion.p variants={textVariant(1.2)}>{description}</motion.p>
        <motion.p variants={textVariant(1.4)} className="text-[#9CA7C4]">
          <span className="text-primary capitalize text-lg">Built with: </span>
          {technologies}
        </motion.p>

        {/* buttons */}

        <motion.div
          variants={textVariant(1.6)}
          className="flex justify-between mt-4"
        >
          <a
            href={url}
            className={`${styles.button}`}
            target="_blank"
            rel="noreferrer"
          >
            Live preview
          </a>

          <a
            href={gitUrl}
            className={`${styles.button} flex gap-3 items-center`}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            <span>Code</span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCart;
