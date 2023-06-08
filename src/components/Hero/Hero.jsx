import { useContextValues } from "../../Context/ContextProvider";
import { fadeIn, staggerContainer } from "../../utility/Animation";
import AutoType from "../../utility/AutoType";
import { styles } from "../../utility/styles";
import Navbar from "../Navbar/Navbar";
import ComputerCanvas from "./Computer";
import { motion } from "framer-motion";

const Hero = () => {
  const { loader } = useContextValues();

  return (
    <motion.section
      variants={staggerContainer(0, 1)}
      initial="hidden"
      animate="visible"
      className={`hero ${styles.paddingX} w-full overflow-x-hidden bg-[url(./assets/bg-6.jpg)] bg-cover bg-center bg-no-repeat relative bg-fixed`}
    >
      <div className="bg-heroBg w-full h-full absolute top-0 left-0 z-0" />
      <Navbar />

      <div className="container pt-14 mt-[70px] relative z-[1]">
        <div className="flex gap-10">
          <div className="flex flex-col items-center w-fit">
            <div className="h-4 w-4 rounded-full bg-gradient-to-t from-primary to-black animate-glow" />
            <div className="h-48 w-1 bg-gradient-to-t from-black to-primary overflow-hidden relative">
              <span className="w-full h-5 bg-gradient-to-t from-white to-[#70e0ffb0] absolute top-0 left-0 rounded-full animate-shine"></span>
            </div>
          </div>
          {loader === 100 && (
            <div className="content text-sm w-full">
              <motion.p
                variants={fadeIn("up", "tween", 2, 0.5)}
                className="mb-3"
              >
                Transforming ideas into reality through code
              </motion.p>
              <motion.h1
                variants={fadeIn("up", "tween", 2 + 0.2, 0.5)}
                className="text-3xl font-bold text-white flex gap-2.5 min-[360px]:text-4xl sm:text-5xl md:text-6xl"
              >
                <span className="whitespace-nowrap">{`Hi, I'm`}</span>{" "}
                <AutoType />
              </motion.h1>
              <motion.p
                variants={fadeIn("up", "tween", 2 + 0.4, 0.5)}
                className="mt-3"
              >
                I love to Develop user interfaces and web applications with
                latest technologies.
              </motion.p>
            </div>
          )}
        </div>
      </div>

      <div className="relative -top-20 h-[300px]">
        <ComputerCanvas />
      </div>
    </motion.section>
  );
};

export default Hero;
