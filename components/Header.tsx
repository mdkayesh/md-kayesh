"use client";

import { navlinks } from "@/public/data/data";
import Button from "@/utils/Button";
import Logo from "@/utils/Logo";
import React, { useEffect, useRef, useState } from "react";
import HumbergerMenu from "./HumbergerMenu";
import MobileNav from "./MobileNav";
import useNavAnimation from "@/hooks/useNavAnimation";
import { ScrollTo } from "@/utils/functions";
import Link from "next/link";
import gsap from "gsap";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [active, setActive] = useState("Home");
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLHeadElement | null>(null);

  const handleClick = (title: string, index: number) => {
    setActive(title !== active ? title : title);
    indicatorRef.current!.style.transform = `translateX(${index * 86}px`;
  };

  useNavAnimation(navRef);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.inOut",
        },
      });

      tl.from(".logo", {
        x: -30,
        opacity: 0,
      });

      tl.from(["ul .nav-link", ".button"], {
        opacity: 0,
        y: -30,
        stagger: 0.15,
      });

      tl.to(".indicator", {
        height: "90%",
        opacity: 1,
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500`}
        ref={navRef}
      >
        <nav className="nav flex items-center justify-between px-4 py-3 md:py-0">
          <Link href="/" className="logo">
            <Logo className="h-fit w-32" />
          </Link>
          {/* navlinks */}

          <div className="hidden items-center gap-8 md:flex">
            <ul className="relative flex items-center gap-4 py-7">
              <div
                className="indicator absolute left-0 top-0 z-[1] h-0 w-[70px] opacity-0"
                ref={indicatorRef}
              >
                <div className="h-1 w-full rounded-lg bg-primary"></div>
              </div>
              {navlinks.map((link, index) => (
                <li
                  key={link.title}
                  onClick={() => handleClick(link.title, index)}
                  className="nav-link relative z-10"
                >
                  <Link
                    // type="button"
                    href={link.url}
                    className={`${
                      link.title === active ? "text-primary" : ""
                    } block w-[70px] text-center text-heading_color transition-all duration-300 hover:text-primary`}
                    onClick={(e) => {
                      e.preventDefault();
                      ScrollTo(link.url);
                    }}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="button flex">
              <Button tag="a" href="/resume/resume.pdf" target="_blank">
                Resume
              </Button>
            </div>
          </div>
          <div className="menu md:hidden">
            <HumbergerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </nav>
      </header>

      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
