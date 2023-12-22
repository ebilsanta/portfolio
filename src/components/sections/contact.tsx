"use client";

import React from "react";
import { MdEmail } from "react-icons/md";
import SectionHeading from "../section-heading";

export default function Contact() {

  return (
    <section
      id="contact"
      className="mb-20 sm:mb-28 text-center"
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="text-gray-700 mb-12">
        Please email me directly at{" "}
        <span className="underline">thaddeusleezx@gmail.com</span>
        {" "} or connect with me on my socials!
      </p>
      <a
        className="inline-flex text-white bg-rose-500 justify-center px-7 py-3 items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition hover:shadow-red-500/50 shadow-lg"
        href="mailto:thaddeusleezx@gmail.com"
      >
        Drop me an email <MdEmail />
      </a>
    </section>
  );
}