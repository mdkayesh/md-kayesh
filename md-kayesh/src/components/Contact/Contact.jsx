import { styles } from "../../utility/styles";
import { motion } from "framer-motion";
import EarthCanvas from "./EarthCanvas";
import { fadeIn, staggerContainer, textVariant } from "../../utility/Animation";
import ContactForm from "./ContactForm";
import { socialMedias } from "../Data/Data";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section
      className={`${styles.paddingX} pt-10 pb-[70px] overflow-x-hidden`}
      id="contact"
    >
      <motion.div
        className="container"
        variants={staggerContainer(0, 1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex gap-3 flex-col justify-center">
          <motion.p
            variants={textVariant()}
            className="text-center text-primary"
          >
            What's next?
          </motion.p>
          <motion.h1
            variants={textVariant(0.2)}
            className={`${styles.sectionHeading}`}
          >
            Get In Touch
          </motion.h1>
          <motion.p variants={textVariant(0.4)} className="text-center">
            I like to create things with fun, open-minded people. Feel free to
            say hello!
          </motion.p>
        </div>

        {/* Contact form  */}

        <div className="w-full mt-0 rounded-lg py-10">
          <div className="flex gap-6 items-center flex-col-reverse md:flex-row">
            <motion.div
              variants={fadeIn("right", "spring", 0.5, 0.4)}
              className="w-full bg-gradient-to-br to-bgColor from-secondary shadow-card rounded-lg p-5 md:w-1/2"
            >
              <h2 className="text-2xl text-primary mb-3 capitalize">
                Let's work together<span className="text-tertiary">!</span>
              </h2>

              <ContactForm />

              <div className="flex justify-center items-center gap-2 mt-5">
                <hr className="w-1/3 border-primary border-1" />
                <h1 className="text-2xl text-center text-gradient font-bold">
                  <span>Or</span>
                </h1>
                <hr className="w-1/3 border-primary border-1" />
              </div>

              <ul className="flex justify-center gap-3 items-center mt-10">
                {socialMedias.map((media) => (
                  <li key={media.url}>
                    <a
                      href={media.url}
                      className={`${styles.socialButton}`}
                      title={media.title}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {media.icon}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:mdkayesh777@gmail.com"
                className="flex gap-1 items-center mt-6 text-sm w-fit text-gradient mx-auto hover:text-primary"
              >
                <span className="text-2xl">
                  <MdEmail />
                </span>
                mdkayesh777@gmail.com
              </a>
            </motion.div>

            {/* right */}

            <motion.div
              variants={fadeIn("left", "spring", 0.8, 0.4)}
              className="w-full h-[450px] md:w-1/2 relative"
            >
              <EarthCanvas />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
