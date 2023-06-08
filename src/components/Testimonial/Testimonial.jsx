import { styles } from "../../utility/styles";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utility/Animation";
import { clients } from "../Data/Data";

const Testimonial = () => {
  const clientRef = useRef(null);
  const containerRef = useRef(null);
  const [letter, setLetter] = useState(200);

  const handleClick = (direction) => {
    if (direction === "prev") {
      containerRef.current.scrollLeft -= clientRef.current.clientWidth;
    } else {
      containerRef.current.scrollLeft += clientRef.current.clientWidth;
    }
  };

  const handleSeeMore = () => {
    letter > 200 ? setLetter(200) : setLetter(400);
  };

  return (
    <section
      className={`${styles.sectionPadding} ${styles.paddingX}`}
      id="testimonial"
    >
      <motion.h1
        className={`${styles.sectionHeading}`}
        variants={textVariant()}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
      >
        What Clients Say
      </motion.h1>

      <div className="container mt-16">
        <motion.div
          className="flex gap-4 items-start overflow-x-scroll snap-mandatory snap-x scroll-hidden scroll-smooth"
          ref={containerRef}
          variants={staggerContainer(0.4, 1)}
          whileInView={"visible"}
          initial="hidden"
          viewport={{ once: true }}
        >
          {clients.map((item, index) => (
            <motion.div
              variants={fadeIn("up", "spring", 0.2 * index, 0.7)}
              className="client min-w-full md:min-w-[49%] lg:min-w-[32.333333%] snap-end min-h-[320px]"
              ref={clientRef}
              key={index}
            >
              <Tilt options={{ scale: 1 }}>
                <div className="flex flex-col gap-2 justify-center items-left rounded-3xl p-6 bg-gradient-to-b from-secondary to-transparent text-left">
                  <img
                    src={item.img}
                    alt="cliint"
                    className="rounded-full h-20 w-20 object-cover mb-2"
                  />

                  <h3 className="text-xl text-white font-semibold">
                    {item.name}.
                  </h3>
                  <p className="text-gray-400">{item.bio}</p>
                  <p className="flex gap-1 items-center text-yellow-500">
                    {new Array(item.stars).fill(0).map((item, index) => (
                      <span key={index}>
                        <AiFillStar />
                      </span>
                    ))}
                  </p>

                  <p className="text-[14px]">
                    {item.comment.slice(0, letter)}{" "}
                    {item.comment.length > 200 ? (
                      <button
                        type="button"
                        className="hover:underline transition-all hover:text-primary ml-1 text-white"
                        onClick={handleSeeMore}
                      >
                        {letter > 200 ? " See Less" : "...See More"}
                      </button>
                    ) : null}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex gap-4 mx-auto w-fit mt-5">
          <button
            type="button"
            className={styles.socialButton}
            onClick={() => handleClick("prev")}
          >
            <AiOutlineLeft />
          </button>
          <button
            type="button"
            className={styles.socialButton}
            onClick={() => handleClick("next")}
          >
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
