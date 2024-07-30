"use client";
import React from "react";
import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function Services() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full my-24">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Needs Assessment
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            We identify current problems to uncover areas for improvement.
          </p>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            We identify your specific needs to develop tailored solutions.
          </p>
        </div>
        <Image
          src="/images/x-ray-ok.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[35%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          System Dynamics Exploration
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          We explore the dynamics of your systems to better address needs in a
          broader context.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Solution Development and Implementation
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            We develop and test solutions tailored to your identified needs.
          </p>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            We ensure solutions are sustainable and applicable to real-world
            settings.
          </p>
        </div>
        <Image
          src="/images/office.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
