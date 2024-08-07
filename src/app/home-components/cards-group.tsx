import React from "react";

import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

const cards = [
  {
    id: "01",
    title: "People-centric",
    content:
      "Our solutions prioritize the needs and well-being of individuals.",
    key: "People-centric",
  },
  {
    id: "02",
    title: "Holistic",
    content:
      "We consider all aspects and interconnected factors in our solutions.",
    key: "Holistic Approach",
  },
  {
    id: "03",
    title: "Impact-driven",
    content:
      "We focus on creating meaningful and measurable positive outcomes.",
    key: "Impact-driven",
  },
];

export default function CardsGroup() {
  return (
    <div className=" my-24 flex flex-col gap-12 md:flex-row md:flex-wrap">
      {cards.map((card) => (
        <div
          key={card.id}
          className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]"
        >
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

          <EvervaultCard text={card.title} />

          <h2 className="dark:text-white text-black mt-4 text-sm font-light">
            {card.content}
          </h2>
          <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
            {card.key}
          </p>
        </div>
      ))}
    </div>
  );
}
