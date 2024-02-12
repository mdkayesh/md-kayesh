"use client";

import { skills } from "@/public/Data/data";
import Heading from "../Heading";
import SkillCart from "../SkillCart";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/Animation";

const Skills = () => {
  return (
    <section
      className={`skills ${styles.paddingX} ${styles.sectionPadding}`}
      id="skills"
    >
      <div className="container">
        <Heading
          title={"Expertise"}
          subTitle={"Area of"}
          className={"items-center mb-10"}
        />
      </div>

      <div className="bubble-items justify-center hidden gap-6 mt-36 flex-wrap md:flex">
        {skills.map((skill) => (
          <motion.div
            key={skill.title}
            className={`item relative flex flex-col items-center gap-7 [&_.skill-cart]:hover:opacity-100 [&_.skill-cart]:hover:visible`}
            style={{
              top: skill.top || "auto",
              left: skill.left || "auto",
              right: skill.right || "auto",
              bottom: skill.bottom || "auto",
              animationDelay: `${Number(Math.random().toFixed(1))}s`,
            }}
            drag
            dragConstraints={{
              right: 50,
              left: -50,
              top: -30,
              bottom: 50,
            }}
            whileHover={{ scale: 1.2 }}
            initial={{ scale: 0 }}
            whileInView={{
              scale: skill.bigBubble ? 1.2 : skill.mediumBubble ? 0.9 : 0.7,
            }}
          >
            <SkillCart lavel={skill.lavel} experience={skill.experience} />
            <div className="ball [&_.title]:hover:opacity-100 [&_.line]:hover:opacity-100 relative cursor-grab flex justify-center items-center p-2 text-4xl text-[#0F3054]">
              <div className="line border-dashed opacity-0 border-primary absolute h-4 top-0 -left-3 border-l w-1 rotate-12" />
              <div
                className="line border-dashed opacity-0 border-primary absolute h-5 top-3
                -left-1.5 border-l w-1 -rotate-45"
              />
              <span className="span-1 absolute top-[20%] left-3 h-[0px] w-[0px] rounded bg-transparent"></span>
              <span className="span-2 absolute top-[38%] left-8 h-[0px] w-[0px] rounded bg-transparent"></span>
              {skill.icon}
              <span className="span-3 absolute top-[80%] right-6 h-[0px] w-[0px] rounded bg-transparent"></span>
              <span className="span-4 absolute top-[94%] left-7 h-[0px] w-[0px] rounded bg-transparent"></span>
              <span className="span-4 absolute top-[7%] left-7 h-[0px] w-[0px] rounded bg-transparent"></span>
              <span className="title opacity-0 absolute -bottom-8 text-[10px] text-primary">
                {skill.title}
              </span>
            </div>
            {/* <div className="shadow"></div> */}
          </motion.div>
        ))}
      </div>

      {/* formobile */}

      <div className="bubble-items justify-center flex gap-4 mt-36 flex-wrap gap-y-8 md:hidden">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            className={`item relative flex flex-col items-center gap-7 [&_.skill-cart]:hover:opacity-100 [&_.skill-cart]:hover:visible`}
            drag
            dragConstraints={{
              right: 50,
              left: -50,
              top: -30,
              bottom: 50,
            }}
            whileHover={{ scale: 1.2 }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
          >
            <SkillCart lavel={skill.lavel} experience={skill.experience} />
            <div className="ball [&_.title]:hover:opacity-100 [&_.line]:hover:opacity-100 relative cursor-grab flex justify-center items-center p-2 text-4xl text-[#0F3054]">
              <div className="line border-dashed opacity-0 border-primary absolute h-4 top-0 -left-3 border-l w-1 rotate-12" />
              <div
                className="line border-dashed opacity-0 border-primary absolute h-5 top-3
                -left-1.5 border-l w-1 -rotate-45"
              />
              <span className="span-1 absolute top-[20%] left-3 h-[0px] w-[0px] rounded bg-transparent"></span>
              <span className="span-2 absolute top-[38%] left-8 h-[0px] w-[0px] rounded bg-transparent"></span>
              {skill.icon}
              <span className="span-3 absolute top-[80%] right-6 h-[0px] w-[0px] rounded bg-transparent"></span>
              <span className="span-4 absolute top-[94%] left-7 h-[0px] w-[0px] rounded bg-transparent"></span>
              <span className="span-4 absolute top-[7%] left-7 h-[0px] w-[0px] rounded bg-transparent"></span>
              <span className="title opacity-0 absolute -bottom-8 text-[10px] text-primary">
                {skill.title}
              </span>
            </div>
            {/* <div className="shadow"></div> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
