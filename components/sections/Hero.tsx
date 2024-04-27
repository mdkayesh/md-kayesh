"use client";

import Button from "@/utils/Button";
import { ScrollTo } from "@/utils/functions";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  const ref = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia(ref);
    const breakPoint = 768;
    mm.add(
      {
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
      },
      (ctx) => {
        let duration = ctx.isReverted ? 0 : 0.5;

        gsap.from(["h4", "h1", "h2", "p", ".button"], {
          delay: ctx.conditions?.isMobile ? 1.5 : 3,
          y: 70,
          opacity: 0,
          ease: "power2.out",
          stagger: 0.12,
          duration,
        });

        return () => {};
      },
    );

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div className="hero pt-28" id="home" ref={ref}>
      <h4 className="mb-4 text-xl text-primary">Hi, my name is</h4>
      <h1 className="text-gradient pb-1 text-6xl font-semibold capitalize md:text-7xl">
        Md Kayesh.
      </h1>
      <h2 className="mt-3 text-5xl font-semibold md:text-6xl">
        I Love to build things for the web.
      </h2>
      <p className="mt-6 max-w-xl">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. I love to Develop user
        interfaces and web applications with latest technologies. Transforming
        ideas into reality through code.
      </p>

      <div className="button mt-8 flex flex-wrap items-center gap-5">
        <Button
          tag="button"
          type="button"
          onClick={() => ScrollTo("#projects")}
        >
          Check out my portfolio
        </Button>
        <Button
          tag="a"
          href="/resume/resume.pdf"
          target="_blank"
          className="!bg-primary !text-bg_primary"
        >
          Resume
        </Button>
      </div>
    </div>
  );
};

export default Hero;
