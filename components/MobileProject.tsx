"use client";

import { docData } from "@/firebase/firebase";
import { ExternalIcon, GitHub } from "@/utils/icons";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import React from "react";

type ProjectItemProps = {
  item: docData;
};

const MobileProject = ({ item }: ProjectItemProps) => {
  const [seeMore, setSeeMore] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        y: 70,
        opacity: 0,
        ease: "power3",
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
      className="mobile-item overflow-hidden rounded-lg bg-bg_secondary bg-cover bg-center shadow-lg md:hidden"
      style={{
        backgroundImage: `url(${item.img})`,
      }}
      ref={ref}
    >
      <div className="bg-bg_light px-5 py-7">
        <h4 className="text-sm text-primary">Featured Project</h4>
        <h1 className="mt-2 w-fit text-2xl font-semibold text-heading_color transition-all duration-300 hover:text-primary">
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        </h1>
        <div className="mt-3">
          <p className={`${!seeMore ? "line-clamp-3" : ""}`}>
            {item.description}
          </p>
          {item.description.length > 280 && (
            <button
              type="button"
              onClick={() => setSeeMore(!seeMore)}
              className="_underline relative text-primary"
            >
              {!seeMore ? "See More" : "See Less"}
            </button>
          )}
        </div>
        <div className="mt-4">
          <p className="flex flex-wrap items-center gap-3 font-semibold">
            {item.technologies.split(",").map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </p>
        </div>

        <div className="mt-4 flex items-center gap-4 text-2xl">
          <a
            href={item.gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="gitHub"
            className="transition-all duration-300 hover:text-primary"
            data-cursor="-hidden invisible"
          >
            <GitHub />
          </a>

          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title="Live preview"
            className="transition-all duration-300 hover:text-primary"
            data-cursor="-hidden invisible"
          >
            <ExternalIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileProject;
