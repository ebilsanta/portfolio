"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowDown, BsLinkedin } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="max-w-[50rem]">
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <div className="relative">
          <Image
            src="/portrait.png"
            alt="portrait photo"
            width="192"
            height="192"
            className="h-48 w-48 rounded-full object-cover border-[0.35rem]"
          />
        </div>
        <h1 className="text-xl text-center px-4 my-4 sm:text-2xl  sm:my-0 sm:text-left">
          Hello! I am <br />
          <span className="text-rose-500 text-3xl sm:text-5xl font-bold">
            Thaddeus
          </span>{" "}
          <span className="text-white text-3xl sm:text-5xl font-bold hover:text-black transition duration-300">
            (Lee)
          </span>
          <br />
          <span>an aspiring full-stack software engineer.</span>
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-end gap-4 sm:gap-2 text-lg font-medium">
        <Link
          href="#contact"
          className="group text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none transition border-2 border-red-200 shadow-lg hover:shadow-red-500/50 focus:scale-105 hover:scale-105"
        >
          Contact me here{" "}
          <BsArrowDown className="group-hover:translate-y-1 transition" />
        </Link>
        <div
          className="flex items-center gap-2"
        >
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
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </section>
  );
}
