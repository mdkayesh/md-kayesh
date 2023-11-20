export const splitText = (text: string): string[] => {
  let text_arr = text.split("");
  return text_arr;
};

import gsap, { Expo } from "gsap";

export const ScrollTo = (url: string) => {
  if (!url.includes("#") || !url) return;
  gsap.to(window, {
    scrollTo: url,
    duration: 2,
    ease: Expo.easeInOut,
  });
};
