"use client";

import { socialIcons } from "@/public/data/data";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const SocialSide = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        y: 50,
        opacity: 0,
        delay: 4,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="social sticky left-0 top-0 hidden h-screen flex-col items-center justify-center gap-4 pt-10 sm:flex"
      ref={ref}
    >
      <div className="h-1/3 w-0.5 rounded-lg"></div>
      <ul className="flex flex-col justify-center px-5">
        {socialIcons.map((icon) => (
          <li key={icon.url} className="social-icon">
            <a
              title={icon.title}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2.5 text-2xl text-subtitle_color transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:text-primary"
            >
              {icon.icon}
            </a>
          </li>
        ))}
      </ul>
      <div className="h-1/3 min-h-[100px] w-0.5 rounded-lg bg-primary"></div>
    </div>
  );
};

export default SocialSide;
