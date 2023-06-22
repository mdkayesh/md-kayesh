import { styles } from "../../utility/styles";
import img from "../../assets/me.png";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utility/Animation";

// version two

const About = () => {
  return (
    <section
      className={`${styles.paddingX} ${styles.sectionPadding} pt-8`}
      id="about"
    >
      <motion.h1
        className={`${styles.sectionHeading} mb-10`}
        variants={textVariant()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        About me
      </motion.h1>

      <motion.div
        variants={staggerContainer(0.3, 0.5)}
        initial="hidden"
        whileInView="visible"
        className="container flex gap-5 gap-y-10 flex-col items-center md:flex-row"
        viewport={{ once: true }}
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.3, 0.4)}
          className="img w-full md:w-3/5 rounded-lg bg-transparent [&_.bd]:hover:border-primary [&_.bd]:hover:-left-6 [&_.bd]:hover:top-6 [&_.img]:hover:-translate-y-1 [&_.img]:hover:translate-x-1"
        >
          <div className="max-w-[300px] relative mx-auto">
            <div className="bd w-full h-full border-4 border-secondary rounded-lg absolute top-5 -left-5 transition-all" />
            <div className="img overflow-y-hidden rounded-lg relative z-10 bg-transparent transition-all w-fit">
              <img src={img} alt="project" className="" />
            </div>
          </div>
        </motion.div>

        {/* content */}

        <div className="py-3 px-4 w-full md:w-3/5">
          <motion.h2
            variants={textVariant(0.4)}
            className={`text-gradient mb-4 text-3xl font-bold capitalize`}
          >
            Know More about me
          </motion.h2>
          <motion.p variants={textVariant(0.8)}>
            As a frontend developer, I have expertise in HTML, CSS, Javascript
            and popular frameworks such as Reactjs. I create visually appealing
            and user-fridenly interfaces with a focus on detail, and stay
            up-todate with the latest frontend technologies and best practices.
            I am skilled in troubleshooting and debugging, and have passion for
            creating seamless user experiences. I have strong communication
            skills and a proven ability to collaborate with designers and
            developers.
          </motion.p>

          {/* buttons */}

          <div className="mt-8">
            <a href="#contact" className={`${styles.button}`}>
              Hire me now
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
