"use client";

import { MdEmail } from "react-icons/md";
import ContactForm from "../ContactForm";
import { socialMedias } from "@/public/Data/data";
import { styles } from "../styles";
import Heading from "../Heading";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/Animation";

const Contact = () => {
  return (
    <section
      id="contact"
      //   variants={fadeIn("right", "spring", 0.5, 0.4)}
      className={`${styles.sectionPadding} ${styles.paddingX}`}
    >
      <div className="container">
        <div className="flex gap-4 mb-20 flex-col items-center">
          <Heading
            title={`Get in Touch`}
            subTitle={`What's next?`}
            className={"items-center"}
          />
          <p className="text-center">
            I like to create things with fun, open-minded people. Feel free to
            say hello!
          </p>
        </div>

        <motion.div
          className="w-full bg-gradient-to-br to-bgColor from-secondary shadow-lg shadow-[#000000c5] rounded-lg py-7 px-8 max-w-2xl mx-auto"
          variants={fadeIn("up", "spring", 0.3, 0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl text-primary mb-3 capitalize">
            {`Let's work together`}
            <span className="text-tertiary">!</span>
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
      </div>
    </section>
  );
};

export default Contact;
