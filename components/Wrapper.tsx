"use client";

import React, { useState, useEffect, useRef } from "react";
import Loading from "./Loading";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

type wrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: wrapperProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    setIsLoading(true);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          duration: 0.6,
        },
      });
      tl.to(".loading", {
        opacity: 1,
      });

      tl.from("#rect1", {
        opacity: 0,
        scale: 0,
        ease: "power2",
      });

      tl.from("#rect3", {
        opacity: 0,
        y: 100,
        ease: "back",
      });

      tl.from("#rect2", {
        opacity: 0,
        xPercent: 100,
        ease: "power3.out",
      });

      tl.to(".loading", {
        delay: 0.4,
        opacity: 0,
        scale: 0,
        ease: "expo.in",
        onComplete: () => setIsLoading(false),
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div className="wrapper flex w-full" ref={ref}>
      {isLoading ? <Loading /> : children}
    </div>
  );
};

export default Wrapper;
