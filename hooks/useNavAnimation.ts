import { useEffect } from "react";

const useNavAnimation = (
  ref: React.MutableRefObject<HTMLHeadElement | null>,
) => {
  useEffect(() => {
    if (!ref.current) return;
    let prevScrollpos =
      window.scrollY ||
      document.body.scrollTop ||
      document.documentElement.scrollTop;
    let nav = ref.current as HTMLHeadElement;

    nav.style.top = "0";

    const handleScroll = () => {
      let currentScrollPos =
        window.scrollY ||
        document.body.scrollTop ||
        document.documentElement.scrollTop;

      if (prevScrollpos > currentScrollPos) {
        if (currentScrollPos < 150) {
          nav.style.top = "0";
          nav.style.backdropFilter = "none";
          nav.style.backgroundColor = "";
        } else {
          nav.style.top = "0";
          nav.style.backdropFilter = "blur(8px)";
          nav.style.backgroundColor = "var(--bg-light)";
        }
      } else {
        nav.style.top = "-100%";
      }
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

export default useNavAnimation;
