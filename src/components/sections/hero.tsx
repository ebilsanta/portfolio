"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import { motion } from "framer-motion";
import { socialsData } from "@/lib/data";

export default function Hero() {
  return (
    <section className="max-w-[70rem] mb-20 mt-16 sm:mt-48 sm:mb-96">
      <div className="flex flex-col sm:flex-row gap-0 sm:gap-8 lg:gap-24 items-center justify-center">
        <div className="relative">
          <Image
            src="/portrait.png"
            alt="portrait photo"
            width="192"
            height="192"
            className="h-64 w-64 rounded-full object-cover border-[0.35rem]"
          />
        </div>
        <div className="flex flex-col gap-2 lg:gap-16">
          <motion.h1
            className="text-xl text-center my-4 sm:text-2xl sm:my-0 sm:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hello! I am <br />
            <span className="text-rose-500 text-3xl sm:text-5xl font-bold">
              Thaddeus
            </span>{" "}
            <br />
            <span>an aspiring full-stack software engineer.</span>
          </motion.h1>
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-end gap-6 md:gap-4 lg:gap-2 text-lg font-medium"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="#contact"
              className="group text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none transition border-2 border-rose-400 shadow-lg hover:shadow-rose-500/50 focus:scale-105 hover:scale-105"
            >
              Contact me here{" "}
              <BsArrowDown className="group-hover:translate-y-1 transition" />
            </Link>
            <div className="flex items-center gap-2">
              <a
                className="group text-white bg-rose-500 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition hover:shadow-red-500/50 shadow-lg"
                href="/Lee Zhexian Thaddeus Resume.pdf"
                target="_blank"
              >
                Resume
                <MdOpenInNew className="group-hover:-translate-y-1 transition" />
              </a>
              {socialsData.map((social, index) => (
                <a
                  className="text-white bg-rose-500 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition hover:shadow-red-500/50 shadow-lg"
                  href={social.link}
                  target="_blank"
                  key={index}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
