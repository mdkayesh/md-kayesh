"use client";

import { docData } from "@/firebase/firebase";
import { ExternalIcon, GitHub } from "@/utils/icons";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

type ProjectItemProps = {
  item: docData;
  index: number;
};

const ProjectItem = ({ item, index }: ProjectItemProps) => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([".left", ".right"], {
        y: 70,
        opacity: 0,
        ease: "power3",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="portfolio-item relative hidden grid-cols-12 items-center md:grid"
      ref={ref}
    >
      <div
        className={`${
          index % 2 ? "col-[7/13]" : "col-[1/7]"
        } left group relative row-[1/-1] overflow-hidden rounded-lg`}
      >
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          title={item.url}
          className="block aspect-[6/4] h-fit shadow-lg"
        >
          <Image
            width={500}
            height={500}
            src={item.img}
            alt={`${item.title} md kayesh's projects`}
            priority={true}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 left-0 top-0 z-10 h-full w-full bg-[#286f90] mix-blend-hard-light transition-all duration-300 content-[''] group-hover:opacity-0" />
        </a>
      </div>

      {/* ----right---- */}
      <div
        className={`${
          index % 2 ? "col-[1/8]" : "col-[5/13] items-end text-right"
        } right relative z-10 col-[-1/6] row-[1/-1] flex flex-col`}
      >
        <h4 className="text-primary">Featured Project</h4>
        <h1 className="mt-2 w-fit text-3xl font-semibold text-heading_color transition-colors duration-300 hover:text-primary">
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        </h1>
        <div className="mt-4 rounded-lg bg-bg_secondary p-6 transition-all duration-300 hover:shadow-xl">
          <p className="">{item.description}</p>
        </div>
        <div className="mt-4">
          <p
            className={`${
              index % 2 ? "" : "justify-end"
            } flex flex-wrap items-center gap-2 font-semibold`}
          >
            {item.technologies.split(",").map((tech, index) => (
              <span
                key={index}
                className="flex items-center after:ml-2 after:inline-block after:h-1.5 after:w-1.5 after:rounded-full after:bg-primary after:content-[''] after:last:hidden"
              >
                {tech}
              </span>
            ))}
          </p>
        </div>

        <div className="mt-4 flex items-center gap-4 text-2xl">
          <a
            href={item.gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="github"
            data-cursor="-hidden invisible"
            className="hover:text-primary"
          >
            <GitHub />
          </a>

          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title="Live preview"
            data-cursor="-hidden invisible"
            className="hover:text-primary"
          >
            <ExternalIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
