"use client";

import Image from "next/image";
import { styles } from "./styles";
import { navData } from "@/public/Data/data";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Humburger from "./Humburger";
import { useEffect, useRef, useState } from "react";
import useOutsideClick from "./customHooks/useOutsideClick";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/utils/Animation";

const Header = () => {
  const mobileNav = useRef(null);
  const [show, setShow] = useState(false);
  const [_title, setTitle] = useState(null);
  const [className, setClassName] = useState("");

  useOutsideClick(mobileNav, () => {
    setShow(false);
  });

  const toggleDropdown = () => {
    setShow(!show);
  };

  useEffect(() => {
    let prevScrollpos =
      window.scrollY ||
      document.body.scrollTop ||
      document.documentElement.scrollTop;
    const handleScroll = () => {
      let currentScrollPos =
        window.scrollY ||
        document.body.scrollTop ||
        document.documentElement.scrollTop;
      if (prevScrollpos > currentScrollPos) {
        currentScrollPos < 100
          ? setClassName("top-0")
          : setClassName("bg-gradient-to-tr from-bgColor to-secondary top-0");
      } else {
        setClassName("-top-full");
      }
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseOver = (title) => {
    setTitle(title !== _title ? title : title);
  };

  return (
    <header
      className={`header fixed left-0 w-full py-2 z-50 transition-all duration-500 ${styles.paddingX} ${className}`}
    >
      <motion.div
        className="flex gap-4 items-center justify-between container"
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.a className="logo" href="#" variants={textVariant()}>
          <Image
            src={"/logo.png"}
            width={120}
            height={100}
            alt="logo"
            priority={true}
          />
        </motion.a>
        <nav className="hidden lg:block">
          <ul className="flex items-center">
            {navData.map((link, index) => (
              <motion.li
                variants={textVariant(0.4 + 0.2 * index)}
                key={link.title}
                className="pr-4"
                onMouseOver={() => handleMouseOver(link.title)}
                onMouseLeave={() => handleMouseOver(null)}
              >
                <a
                  href={link.url}
                  className="relative hover:text-white transition-colors"
                >
                  <span>{link.title}</span>
                  {link.title === _title && (
                    <motion.div
                      className="absolute top-[120%] w-full h-[2px] rounded-lg bg-primary"
                      animate={{
                        x: 0,
                      }}
                      initial={{ x: "-100%" }}
                      transition={{
                        type: "spring",
                        damping: 10,
                        stiffness: 80,
                      }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* social links */}
        <ul className="hidden gap-4 items-center lg:flex">
          <motion.li variants={fadeIn("left", "tween", 1.2, 0.3)}>
            <a
              href="https://www.linkedin.com/in/md-kayesh-37b0a1276/"
              target="_blank"
              rel="noreferrer"
              className={styles.socialButton}
            >
              <FaLinkedinIn />
            </a>
          </motion.li>
          <motion.li variants={fadeIn("left", "tween", 1.4, 0.3)}>
            <a
              href="https://github.com/KayesKhanAkash"
              target="_blank"
              rel="noreferrer"
              className={styles.socialButton}
            >
              <FaGithub />
            </a>
          </motion.li>

          <motion.li
            variants={fadeIn("left", "tween", 1.6, 0.3)}
            className="border-primary border-solid border px-5 py-1 rounded-md"
          >
            <a
              href="#contact"
              className={`flex gap-2 items-center [&_span]:hover:text-primary`}
            >
              <span>Contact me</span>
              <span className={`${styles.socialButton}`}>
                <MdEmail />
              </span>
            </a>
          </motion.li>
        </ul>

        {/* mobile nav */}

        <div className="mobileNav relative block lg:hidden" ref={mobileNav}>
          <Humburger show={show} onclick={toggleDropdown} />
          <nav
            className={`bg-secondary p-3 absolute top-[200%] -left-40 transition-all duration-500 border border-primary ${
              show ? "animateShow show" : "animateClose hide"
            }`}
          >
            <motion.ul
              className="w-[150px] flex flex-col gap-2"
              variants={staggerContainer(0, 0)}
              initial="hidden"
              whileInView="visible"
            >
              {navData.map((link, index) => (
                <motion.li
                  key={link.title}
                  className="[&.active]:text-primary"
                  variants={fadeIn("up", "tween", 0.2 * index, 0.3)}
                >
                  <a href={link.url} className={"hover:text-primary"}>
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            {/* social links */}

            <motion.ul
              className="flex gap-4 items-center mt-10 overflow-hidden"
              variants={staggerContainer(0, 0.8)}
              initial="hidden"
              whileInView="visible"
            >
              <motion.li variants={fadeIn("up", "tween", 0.2, 0.3)}>
                <a
                  href="https://www.linkedin.com/in/md-kayesh-37b0a1276/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialButton}
                >
                  <FaLinkedinIn />
                </a>
              </motion.li>
              <motion.li variants={fadeIn("up", "tween", 0.4, 0.3)}>
                <a
                  href="https://github.com/KayesKhanAkash"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialButton}
                >
                  <FaGithub />
                </a>
              </motion.li>
              <motion.li variants={fadeIn("up", "tween", 0.6, 0.3)}>
                <a href="#contact" className={styles.socialButton}>
                  <MdEmail />
                </a>
              </motion.li>
            </motion.ul>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
