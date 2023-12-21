"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowDown, BsLinkedin } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

export default function Intro() {
  return (
    <section className="max-w-[70rem] mb-20 sm:mt-48 sm:mb-96">
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
          <h1 className="text-xl text-center my-4 sm:text-2xl sm:my-0 sm:text-left">
            Hello! I am <br />
            <span className="text-rose-500 text-3xl sm:text-5xl font-bold">
              Thaddeus
            </span>{" "}
            <br />
            <span>an aspiring full-stack software engineer.</span>
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-end gap-6 md:gap-4 lg:gap-2 text-lg font-medium">
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
                href="https://drive.google.com/file/d/1JD0GlKL4tvNN9qwrgutFLcUYt9oip0ks/view?usp=sharing"
                target="_blank"
              >
                Resume
                <MdOpenInNew className="group-hover:-translate-y-1 transition" />
              </a>
              <a
                className="text-white bg-rose-500 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition hover:shadow-red-500/50 shadow-lg"
                href="https://linkedin.com/in/thaddeusleezx"
                target="_blank"
              >
                <BsLinkedin />
              </a>
              <a
                className="text-white bg-rose-500 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition hover:shadow-red-500/50 shadow-lg"
                href="https://github.com/ebilsanta"
                target="_blank"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
