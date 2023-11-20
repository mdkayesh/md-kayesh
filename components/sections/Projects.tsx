import React from "react";
import SectionTitle from "../SectionTitle";
import { docData, getFeaturedProjects } from "@/firebase/firebase";
import ProjectItem from "../ProjectItem";
import MobileProject from "../MobileProject";

const Projects = async () => {
  const projects: docData[] = await getFeaturedProjects();

  return (
    <section id="projects" className="section-padding">
      <SectionTitle subTitle="Some things" title="I've Built" />
      <div className="mt-10 flex flex-col gap-10 md:gap-24">
        {projects?.map((item, index) => (
          <ProjectItem item={item} key={index} index={index} />
        ))}

        {/* for mobile device */}

        {projects?.map((item) => <MobileProject key={item.id} item={item} />)}
      </div>
    </section>
  );
};

export default Projects;
