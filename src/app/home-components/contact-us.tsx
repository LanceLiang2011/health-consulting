"use client";
import React from "react";
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
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Contact us
        </button>
      </div>
    </div>
  );
}
