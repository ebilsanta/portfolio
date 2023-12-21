"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 mb-28 sm:mb-72 max-w-[64rem] text-center"
    >
      <h1 className="">My Experience</h1>
      <VerticalTimeline lineColor="rgba(244, 63, 94, 0.2)">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                fontSize: "1.5rem",
                border: "#f43f5e 0.2rem solid",
                boxShadow: "0 0 12px #f43f5e",
                backgroundColor: "white"
              }}
              visible={true}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.company}</p>
              <ul>
                {item.description.map((desc, index) => (
                  <li key={index} className="relative pl-5 !mt-1 !font-normal text-gray-700">
                    <span className="absolute left-0 top-1 transform rotate-180 border-y-transparent border-s-transparent border-e-rose-500 border-[8px] border-solid"></span>
                    {desc}
                  </li>
                ))}
              </ul>
              
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
