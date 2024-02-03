"use client";

import React from "react";
import { skillsData } from "@/lib/data";
import SectionHeading from "../section-heading";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-72"
    >
      <SectionHeading>Skills</SectionHeading>
      {Object.keys(skillsData).map((section, index) => (
        <React.Fragment key={index}>
          <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
          <ul className="flex flex-wrap justify-center gap-2 text-sm text-black mt-2 mb-4">
            {skillsData[section as keyof typeof skillsData].map(
              (skill, index) => (
                <motion.li
                  className="border-rose-500 border-2 rounded-full px-3 py-1 flex gap-2 items-center"
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                >
                  {skill.name}{" "}
                  <span className="text-rose-500">{skill.icon}</span>
                </motion.li>
              )
            )}
          </ul>
        </React.Fragment>
      ))}
    </section>
  );
}
