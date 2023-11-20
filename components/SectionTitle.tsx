import React from "react";

type sectionTitleProps = {
  title: string;
  subTitle: string;
  line?: boolean;
};

const SectionTitle = ({ subTitle, title, line = true }: sectionTitleProps) => {
  return (
    <div>
      <h3 className="text-subtitle_color font-semibold">{subTitle}</h3>
      <div className="mt-1 flex items-center gap-5">
        <h1 className="text-heading_color whitespace-nowrap text-4xl font-semibold">
          {title}
        </h1>
        {line && <div className="h-[1px] w-1/2 rounded-lg bg-gray-700"></div>}
      </div>
    </div>
  );
};

export default SectionTitle;
