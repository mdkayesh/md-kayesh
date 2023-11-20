import React from "react";
import SectionTitle from "../SectionTitle";
import ServiceSlider from "../ServiceSlider";

const Services = () => {
  return (
    <section className="section-padding w-full" id="services">
      <div className="w-full">
        <SectionTitle subTitle="What Services" title="I Provide" />
        <div className="mt-10 w-full">
          <ServiceSlider />
        </div>
      </div>
    </section>
  );
};

export default Services;
