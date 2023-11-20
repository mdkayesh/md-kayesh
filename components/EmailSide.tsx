"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const EmailSide = () => {
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
      className="email sticky right-0 top-0 hidden h-screen flex-col items-center justify-center gap-4 px-5 sm:flex"
      ref={ref}
    >
      <div className="h-1/3 w-0.5 rounded-lg"></div>
      <a
        title="mdkayesh777@gmail.com"
        href="mailto:mdkayesh777@gmail.com"
        className="vertical-rl tracking-widest transition-all duration-300 hover:-translate-y-3 hover:text-primary"
      >
        mdkayesh777@gmail.com
      </a>
      <div className="h-1/3 min-h-[100px] w-0.5 rounded-lg bg-primary"></div>
    </div>
  );
};

export default EmailSide;
