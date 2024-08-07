"use client";
import React from "react";
import Link from "next/link";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function ContactUs() {
  const words = [
    {
      text: "Contact",
    },
    {
      text: "us",
    },
    {
      text: "now",
    },
    {
      text: "for",
    },
    {
      text: "more.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center my-24">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to a better health starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link
          href="/contact"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-semibold rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
