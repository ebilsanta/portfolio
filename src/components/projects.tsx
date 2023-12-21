"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import SectionHeading from "./section-heading";

export default function Projects() {

  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Projects</SectionHeading>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
    </section>
  );
}