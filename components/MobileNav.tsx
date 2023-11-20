"use client";

import { navlinks, socialIcons } from "@/public/data/data";
import Button from "@/utils/Button";
import { ScrollTo, splitText } from "@/utils/functions";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

type mobileNavProps = {
  isOpen: boolean | null;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean | null>>;
};

const MobileNav = ({ isOpen, setIsOpen }: mobileNavProps) => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen === null) return;
      if (isOpen) {
        const tl = gsap.timeline();
        tl.to(ref.current, {
          left: 0,
          visibility: "visible",
          ease: "power3.inOut",
        });

        tl.to("nav", {
          width: "100%",
          padding: "24px",
        });

        tl.from("a span", {
          rotateX: "90deg",
          stagger: 0.02,
          ease: "back",
          duration: 0.7,
        });

        tl.from(".right", {
          opacity: 0,
        });

        tl.from(".social-icon", {
          x: -30,
          y: 20,
          opacity: 0,
          stagger: 0.1,
        });
      } else {
        const tl = gsap.timeline();

        tl.to([".right", "a span"], {
          opacity: 0,
        });

        tl.from("nav", {
          width: "100%",
          padding: "24px",
        });

        tl.from(ref.current, {
          left: 0,
          visibility: "visible",
        });
      }
    }, ref);

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <div
      className="mobile-nav invisible fixed -left-full top-0 h-screen w-full bg-bg_light"
      ref={ref}
    >
      <nav className="flex h-full w-0 gap-4 overflow-hidden bg-bg_primary p-0">
        <ul className="h-full w-1/2">
          {navlinks.map((link) => (
            <li
              key={link.title}
              style={{ height: `${100 / navlinks.length}%` }}
            >
              <Link
                href={link.url}
                onClick={() => {
                  ScrollTo(link.url);
                  setIsOpen(false);
                }}
                className="block text-[200%] font-bold tracking-wide transition-all duration-300 hover:tracking-widest hover:text-primary"
              >
                {splitText(link.title).map((text, index) => (
                  <span className="inline-block origin-bottom" key={index}>
                    {text}
                  </span>
                ))}
              </Link>
            </li>
          ))}
        </ul>
        <div className="right flex w-1/2 flex-col-reverse items-center justify-center gap-4 text-center">
          <ul className="flex gap-4 max-[400px]:hidden">
            {socialIcons.map((icon) => (
              <li key={icon.url} className="social-icon">
                <a
                  title={icon.title}
                  href={icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-subtitle_color transition-colors duration-300 hover:text-primary"
                >
                  {icon.icon}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:mdkayesh777@gmail.com"
            className="text-lg hover:text-primary"
          >
            mdkayesh777@gmail.com
          </a>
          <Button tag="a" href="/resume/resume.pdf" target="_blank">
            Resume
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
