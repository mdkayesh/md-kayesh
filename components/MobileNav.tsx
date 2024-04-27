"use client";

import { navlinks, socialIcons } from "@/public/data/data";
import Button from "@/utils/Button";
import { ScrollTo, splitText } from "@/utils/functions";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import HumbergerMenu from "./HumbergerMenu";

type mobileNavProps = {
  isOpen: boolean | null;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean | null>>;
};

const MobileNav = ({ isOpen, setIsOpen }: mobileNavProps) => {
  const [windowHeight, setwindowHeight] = useState(window.innerHeight);
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen === null) return;
      if (isOpen) {
        const tl = gsap.timeline();

        gsap.to(".svg-curve path", {
          attr: {
            d: `M100 0 L100 ${windowHeight} Q100 ${windowHeight / 2} 100 0`,
          },
          ease: "expo.inOut",
          duration: 1.3,
        });

        gsap.from(".link", {
          x: 30,
          stagger: 0.1,
          ease: "expo.inOut",
          duration: 1,
        });

        tl.to(ref.current, {
          right: 0,
          ease: "expo.inOut",
          duration: 1,
        });
      } else {
        // when isopen = false
        const tl = gsap.timeline();

        gsap.from(".svg-curve path", {
          attr: {
            d: `M100 0 L100 ${windowHeight} Q100 ${windowHeight / 2} 100 0`,
            ease: "expo.inOut",
            duration: 1,
          },
        });

        gsap.to(".link", {
          x: 30,
          stagger: 0.1,
          ease: "expo.inOut",
          duration: 1,
        });

        tl.from(ref.current, {
          right: 0,
          ease: "expo.inOut",
          duration: 1,
        });
      }
    }, ref);

    return () => ctx.revert();
  }, [isOpen]);

  useEffect(() => {
    setwindowHeight(window.innerHeight);
    const handleResize = () => {
      setwindowHeight(window.innerHeight);
    };

    if (isOpen) {
      window.addEventListener("resize", handleResize);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className="mobile-nav fixed -right-[calc(100%+100px)] top-0 z-50 h-screen w-[250px] bg-bg_secondary md:hidden"
        ref={ref}
      >
        <nav className="relative z-10 flex h-full flex-col justify-between gap-4 overflow-auto p-5">
          <div className="absolute right-3 top-2">
            <HumbergerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <ul className="mt-3 flex h-full w-full flex-1 flex-col items-center gap-4">
            {navlinks.map((link) => (
              <li key={link.title} className="link">
                <Link
                  href={link.url}
                  onClick={() => {
                    ScrollTo(link.url);
                    setIsOpen(false);
                  }}
                  className="block text-lg font-bold tracking-wide transition-all duration-300 hover:tracking-widest hover:text-primary"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex w-full flex-col-reverse items-center justify-center gap-4 border-t border-gray-600 pt-5 text-center">
            <ul className="flex gap-4">
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
        {/* svg curve */}
        <svg
          className={"svg-curve absolute left-[-99px] top-0 h-full w-[100px]"}
        >
          <path
            d={`M100 0 L100 ${windowHeight} Q-100 ${windowHeight / 2} 100 0`}
            className="fill-bg_secondary"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default MobileNav;
