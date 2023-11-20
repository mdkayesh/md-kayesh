import { useEffect } from "react";
import { navLinksType, navlinks } from "@/public/data/data";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const useActiveSection = (
  ref: React.MutableRefObject<HTMLElement | null>,
  navLinks: navLinksType[],
  className: string,
) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      navLinks.forEach((link) => {
        const _link: HTMLAnchorElement[] = gsap.utils.toArray(
          `.${link.title}-link`,
        ); // find the nav

        // check whether the link or link url and sections are available or not

        const sections: HTMLElement[] = gsap.utils.toArray(`${link.url}`);

        if (!_link[0] || !link.url || !sections[0]) return;

        ScrollTrigger.create({
          trigger: link.url,
          start: "top center",
          end: "bottom center",

          onEnter: () => {
            _link.forEach((link) => {
              link.classList.add(className);
            });
          },
          onEnterBack: () => {
            _link.forEach((link) => {
              link.classList.add(className);
            });
          },
          onLeave: () => {
            _link.forEach((link) => {
              link.classList.remove(className);
            });
          },
          onLeaveBack: () => {
            _link.forEach((link) => {
              link.classList.remove(className);
            });
          },
        });
      });
    }, ref);

    return () => {
      ctx.revert();
    };
  }, [className, ref, navLinks]);
};

export default useActiveSection;
