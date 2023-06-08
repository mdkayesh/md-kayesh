import { navData } from "../Data/Data";
import { styles } from "../../utility/styles";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Humburger from "../../utility/Humburger";
import { useEffect, useRef, useState } from "react";
import { clickToClose } from "../../utility/Functions";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utility/Animation";
import { useContextValues } from "../../Context/ContextProvider";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isScroll, setIsScroll] = useState("");
  const mobileNav = useRef(null);
  const { loader } = useContextValues();

  useEffect(() => {
    let prevScrollpos = window.scrollY;
    window.onscroll = () => {
      let currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        currentScrollPos < 100
          ? setIsScroll("top-0")
          : setIsScroll("bg-gradient-to-tr from-bgColor to-secondary top-0");
      } else {
        setIsScroll("-top-full");
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <header
      className={`py-3 px-3 w-full fixed left-0 z-20 transition-all duration-500 ${isScroll}`}
    >
      <motion.div
        className="container flex justify-between items-center lg:block"
        variants={staggerContainer(0, 0)}
        initial="hidden"
        animate="visible"
      >
        {loader === 100 && (
          <nav className="flex justify-between items-center">
            <motion.a
              className="logo h-[40px] w-[120px] flex justify-center items-center"
              href="#"
              variants={fadeIn("down", "spring", 0, 0.5)}
            >
              {/* <Logo className={"w-[100px] h-[100px]"} /> */}
              <img src={logo} alt="logo" className="w-full" />
            </motion.a>

            {/* links */}
            <ul className="gap-4 items-center hidden lg:flex">
              {navData.map((link, index) => (
                <motion.li
                  variants={textVariant(0 + 0.2 * index)}
                  key={link.title}
                  className={`relative [&_.line]:hover:scale-100 [&_.line]:hover:origin-left`}
                >
                  <a
                    href={link.url}
                    className={`hover:text-white transition-colors duration-500`}
                  >
                    {link.title}
                  </a>
                  <div className="absolute top-full left-0 w-full h-[2px] rounded overflow-hidden">
                    <div className="line w-full h-full bg-primary scale-x-0 transition-transform duration-500 origin-right"></div>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* socialLinks */}
            <ul className="hidden gap-4 items-center lg:flex">
              <li>
                <a
                  href="https://www.linkedin.com/in/md-kayesh-37b0a1276/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialButton}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/KayesKhanAkash"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialButton}
                >
                  <FaGithub />
                </a>
              </li>

              <li className="border-primary border-solid border px-5 py-1 rounded-md">
                <a
                  href="#contact"
                  className={`flex gap-2 items-center [&_span]:hover:text-primary`}
                >
                  <span>Contact me</span>
                  <span className={`${styles.socialButton}`}>
                    <MdEmail />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        )}

        {/* mobileNav for mobile */}

        <div className="mobileNav relative block lg:hidden" ref={mobileNav}>
          <Humburger
            show={show}
            onclick={() =>
              clickToClose(show, setShow, mobileNav, ".mobileNav", ".humberger")
            }
          />
          <nav
            className={`bg-secondary p-3 absolute top-[200%] -left-40 transition-all duration-500 border border-primary ${
              show ? "animateShow show" : "animateClose hide"
            }`}
          >
            <ul className="w-[150px] flex flex-col gap-2">
              {navData.map((link) => (
                <li key={link.title} className="[&.active]:text-primary">
                  <a
                    href={link.url}
                    className={"hover:text-primary transition-colors"}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* social links */}

            <ul className="flex gap-4 items-center mt-10">
              <li>
                <a
                  href="https://www.linkedin.com/in/md-kayesh-37b0a1276/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialButton}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/KayesKhanAkash"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialButton}
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="#contact" className={styles.socialButton}>
                  <MdEmail />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
