"use client";

import React from "react";
import { Carousel } from "./Carousel";
import { Card } from "./Card";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your Versity.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...Array(3)].map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem.
            Langotiya jeetu ka mara hua yaar is ready to capture every
            thought.
          </p>
          <img
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      ))}
    </>
  );
};

const data  = [
  {
    category: "Stanford University",
    title: "Stanford University",
    src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqH-zMwVt4xVT4KfMOqO1-tABnS5OmO86koeUZAnC_Olfres9poEdGwq9NXyswkFZK2Vt_tOrBjR8zcMcQ134s5hRObYxsNfVG0kQLCyacZNesHEZD8ZDfFnYqirUTCxqTG8fq3=s1360-w1360-h1020-rw",
  },
  {
    category: "Harbard University ",
    title: "Harvard University",
    src: "https://money-assets.money.com/mcp/2025/243744.jpg",
  },
  {
    category: "University of Chittagong",
    title: "University of Oxford",
    src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrE3LbcmVn1K5COjKb6BJTVf0jKO00ewWSe76ehZSiVMtSI6kbHTox1Z3LsucvvV6RLZGlo51ekY-YA10bC0NsjNsOVvfWIj_xJsazrCXqgchYp3DEVSDzwBQ9W8jx5gBucXxkMMQ=s1360-w1360-h1020-rw",
  },
  {
    category: "University",
    title: "Massachusetts Institute of Technology (MIT)",
    src: "https://imageio.forbes.com/specials-images/imageserve//620ba39ca87ddcbad6bf109e/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
  },
  {
    category: "University",
    title: "University of Cambridge",
    src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr65JJTK7OpVAxWFCvDYRTnRHfifce_BOuP3qX2vPPh3RmbReFfLsdlEqmgN1Coy15bya-AyNkMUnI1v-BVw97ceOo33cvDsqHud3zC4s6siiophJnbZwPVlLjk_TYTG0rZ8XaJmA=s1360-w1360-h1020-rw",
  },
];

