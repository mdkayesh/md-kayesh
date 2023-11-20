import React from "react";

const Skeleton = () => {
  return (
    <div className="animate-pulse rounded-lg bg-bg_secondary p-5">
      <div className="aspect-[3/2] bg-bg_tertiary"></div>
      <div className="mt-6 h-7 w-4/5 rounded-full bg-bg_tertiary"></div>
      <div className="mt-6 h-4 rounded-full bg-bg_tertiary"></div>
      <div className="mt-3 h-4 rounded-full bg-bg_tertiary"></div>
      <div className="mt-3 h-4 rounded-full bg-bg_tertiary"></div>
      <div className="mt-6 flex items-center justify-between">
        <div className="mt-3 h-4 w-20 rounded-full bg-bg_tertiary"></div>
        <div className="mt-3 h-4 w-20 rounded-full bg-bg_tertiary"></div>
      </div>
    </div>
  );
};

export default Skeleton;
