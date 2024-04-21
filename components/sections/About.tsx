"use client";

import React, { useEffect, useRef } from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import { Arrow } from "@/utils/icons";
import { ScrollTo } from "@/utils/functions";
import gsap from "gsap";

const technologies = [
  {
    title: "JavaScript (ES6+)",
  },
  {
    title: "React",
  },
  {
    title: "TypeScript",
  },
  {
    title: "Next.js",
  },
  {
    title: "Tailwind CSS",
  },
  {
    title: "Angular",
  },
  {
    title: "Vue.js",
  },
  {
    title: "Bootstrap",
  },
];

const About = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("article", {
        y: 70,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "article",
          start: "top 80%",
        },
      });

      gsap.from(".right", {
        y: 80,
        opacity: 0,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".right",
          start: "top 80%",
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".tech",
          start: "top 80%",
        },
      });
      tl.from(".tech h4", {
        y: 80,
        opacity: 0,
      });

      tl.from(".tech ul li", {
        y: 20,
        x: -20,
        opacity: 0,
        stagger: 0.15,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padding" id="about" ref={ref}>
      <SectionTitle subTitle="No More" title="About Me" />

      <div className="mt-10 flex flex-col gap-10 min-[800px]:flex-row">
        {/* left */}
        <div className="left w-full leading-relaxed text-text_color min-[800px]:w-2/3">
          <article>
            Hey there! I'm Md Kayesh, and I love making cool stuff on the
            internet. I got into web development around 2020, and it's been a
            blast! I started with basic things like HTML, CSS, and JavaScript to
            create good-looking and interactive web pages.
          </article>
          <article className="mt-6">
            Over time, I've learned fancier tools like <strong>React</strong>,{" "}
            <strong>Nextjs</strong> and <strong>TypeScript</strong> which let me
            make websites that not only look awesome but also do cool things
            when you click on them. I'm all about making websites that are not
            just pretty but also super easy for people to use.
          </article>

          <article className="mt-6">
            I've been teaming up with other developers and keeping up with the
            latest trends to stay on top of the game. If you're curious about
            what I've been up to, check out my{" "}
            <button
              type="button"
              className="_underline relative text-primary"
              onClick={() => ScrollTo("#projects")}
            >
              digital portfolio
            </button>
            . It's like a showcase of all the neat projects I've worked on as a
            <strong className="capitalize"> front-end developer</strong>.
            There's more cool stuff coming, so stay tuned for updates as I keep
            exploring the exciting world of web development!{" "}
            <strong>Let's make the internet awesome together!</strong>
          </article>

          <div className="tech mt-6">
            <h4 className="text-lg">
              Here are a few technologies I’ve been working with recently:
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {technologies.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 font-semibold"
                >
                  <span className="text-primary">
                    <Arrow />
                  </span>

                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* right */}
        <div className="right w-full pr-3 min-[800px]:w-1/3">
          <div className="group relative mx-auto max-w-xs after:absolute after:left-0 after:top-0 after:z-[1] after:h-full after:w-full after:translate-x-5 after:translate-y-5 after:rounded-lg after:border-4 after:border-primary after:transition-all after:duration-300 after:content-[''] hover:after:translate-y-7">
            <Image
              src="/assets/me.png"
              alt="md kayesh a expert front end developer and freelancer"
              width={500}
              height={500}
              className="relative z-10 block rounded-lg transition-all duration-300 group-hover:-translate-x-3"
            />
            <div className="absolute inset-0 left-0 top-0 z-10 h-full w-full rounded-lg bg-[#286f90] mix-blend-hard-light transition-all duration-300 content-[''] group-hover:-translate-x-3 group-hover:opacity-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
