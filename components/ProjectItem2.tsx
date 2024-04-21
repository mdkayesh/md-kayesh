"use client";

import { docData } from "@/firebase/firebase";
import { ExternalIcon, GitHub } from "@/utils/icons";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ProjectItem2Props = {
  item: docData;
  index: number;
};

const ProjectItem2 = ({ item, index }: ProjectItem2Props) => {
  const [seeMore, setSeeMore] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        y: 70,
        opacity: 0,
        ease: "power3",
        delay: 0.08 * index,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });
    }, ref);

    setSeeMore(true);

    return () => ctx.revert();
  }, [item]);

  return (
    <div className="project-item" ref={ref}>
      <div className="flex h-full flex-col justify-between rounded-md bg-bg_secondary p-5 shadow-lg transition-all duration-300 hover:-translate-y-3">
        <div className="header">
          <div className="img">
            <Image
              src={item.img}
              width={300}
              height={300}
              alt={`${item.title} md kayesh's projects`}
              priority={true}
              className="aspect-[3/2] w-full object-cover"
            />
          </div>

          <div className="content mt-4">
            <h2 className="text-xl font-semibold text-heading_color hover:text-primary">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </h2>
            <p className={`${seeMore ? "line-clamp-3" : ""} mt-4`}>
              {item.description}
            </p>
          </div>
        </div>

        <div className="footer mt-4">
          <hr className="border-gray-700" />
          <div className="mt-4">
            <p className="text-subtitle_color">
              {item.technologies.split(",").join(" - ")}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            {item.description.length > 160 && (
              <button
                type="button"
                className="_underline relative text-primary"
              >
                {seeMore ? "See More" : "See Less"}
              </button>
            )}

            <div className="flex items-center gap-4 text-2xl">
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
      </div>
    </div>
  );
};

export default ProjectItem2;
