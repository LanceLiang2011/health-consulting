"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Mehrdad Farahani",
    designation: "Chief Executive Officer",
    image: "/images/teams/mehrdad.jpeg",
  },
  {
    id: 2,
    name: "Anjanaa Dattani",
    designation: "Chief Innovation Officer",
    image: "/images/teams/anjanaa.jpeg",
  },
  {
    id: 3,
    name: "Alexander Moore",
    designation: "Chief Operating Officer",
    image: "/images/teams/alex.jpeg",
  },
  {
    id: 4,
    name: "Yomna Ahmed",
    designation: "Chief Marketing Officer",
    image: "/images/teams/yomna.jpeg",
  },
  {
    id: 5,
    name: "Lance Liang",
    designation: "Chief Technology Officer",
    image: "/images/teams/lance.png",
  },
  {
    id: 6,
    name: "Geil Astorga",
    designation: "Chief Experience Officer",
    image: "/images/teams/geil.jpeg",
  },
];

export default function TeamMembers() {
  return (
    <div>
      <h2 className="my-8 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Meet our team
      </h2>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
}
