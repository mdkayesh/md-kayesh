"use client";

import { docData, getNoteWorthyProject } from "@/firebase/firebase";
import React, { useState, useEffect } from "react";
import Skeleton from "../Skeleton";
import ProjectItem2 from "../ProjectItem2";

const NoteWorthy = () => {
  const [projects, setProjects] = useState<docData[] | null>(null);
  const [seeMore, setSeeMore] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const handleActive = (index: number) => {
    setSeeMore(index !== seeMore ? index : null);
  };

  useEffect(() => {
    setLoading(true);
    const handleRes = async () => {
      try {
        const _proj = await getNoteWorthyProject();

        setProjects(_proj);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    handleRes();

    return () => {};
  }, []);

  return (
    <section id="NoteWorthy" className="section-padding">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-subtitle_color">Other</h3>
        <h1 className="text-4xl font-semibold text-heading_color">
          Note Worthy Projects
        </h1>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {loading
          ? [...Array(6)].map((_, index) => <Skeleton key={index} />)
          : projects?.map((item, index) => (
              <ProjectItem2
                index={index}
                item={item}
                seeMore={seeMore}
                key={item.id}
                handleActive={handleActive}
              />
            ))}
      </div>
    </section>
  );
};

export default NoteWorthy;
