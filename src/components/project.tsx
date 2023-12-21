"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  mainImageUrl,
  mainWidth,
  mainHeight,
  secondaryImageUrl,
  secondaryWidth,
  secondaryHeight,
  links,
}: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);
  const imageUrl = isHovered ? secondaryImageUrl : mainImageUrl;
  const imageWidth = isHovered ? secondaryWidth : mainWidth;
  const imageHeight = isHovered ? secondaryHeight : mainHeight;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className="group mb-3 sm:mb-8 last:mb-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <section className="bg-gradient-to-r group-even:bg-gradient-to-l from-gray-100 max-w-[36rem] md:max-w-[64rem] rounded-s-lg overflow-hidden sm:pr-8 relative md:h-[22rem] hover:bg-gray-200 transition">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 lg:pt-8 md:max-w-[60%] lg:max-w-[50%] flex flex-col h-full md:group-even:ml-[16rem] lg:group-even:ml-[30rem] xl:group-even:ml-[32rem]">
          <h3 className="text-2xl font-semibold group-hover:text-rose-500 transition">
            {title}
          </h3>
          <p
            className="mt-2 leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <ul className="flex flex-wrap mt-4 gap-2 mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-rose-500 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-4 gap-4 flex">
            {links.map((link, index) => (
              <a
                href={link.url}
                aria-label={link.label}
                className="outline-none focus:scale-110 hover:scale-110 active:scale-110 transition hover:text-rose-500"
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          width={imageWidth}
          height={imageHeight}
          className={`absolute hidden md:block top-8 -right-64 md:-right-72 lg:-right-20 xl:right-0 w-[32rem] rounded-lg
          transition group-hover:-translate-x-2 group-even:group-hover:translate-x-2
          group-even:right-[initial] group-even:-left-64 group-even:md:-left-72 group-even:lg:-left-20 group-even:xl:left-0`}
        />
      </section>
    </motion.div>
  );
}
