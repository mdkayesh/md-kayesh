"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { serviceItems } from "@/public/data/data";
import gsap from "gsap";

export default function ServiceSlider() {
  const [seeMore, setSeeMore] = useState<number | null>(null);
  const ref = useRef(null);

  const handleActive = (index: number) => {
    setSeeMore(index !== seeMore ? index : null);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-item", {
        y: 70,
        opacity: 0,
        ease: "power3",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <Swiper
      ref={ref}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        500: {
          slidesPerView: 1,
        },

        768: {
          slidesPerView: 2,
        },

        991: {
          slidesPerView: 3,
        },
      }}
      modules={[Pagination]}
      className="mySwiper w-full"
    >
      {serviceItems.map((item, index) => (
        <SwiperSlide key={index} className="pt-3">
          <div className="service-item">
            <div className="h-full w-full rounded-lg bg-bg_secondary p-5 shadow-lg transition-all duration-300 hover:-translate-y-3">
              <div className="text-4xl [&_path]:stroke-text_color">
                {item.icon}
              </div>
              <h2 className="mt-4 text-xl font-semibold text-heading_color">
                {item.title}
              </h2>
              <p className={`${index === seeMore ? "" : "line-clamp-4"} mt-4`}>
                {item.text}
              </p>
              <button
                type="button"
                className="_underline relative mt-2 text-primary"
                onClick={() => handleActive(index)}
              >
                {index === seeMore ? "See less" : "See more"}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
