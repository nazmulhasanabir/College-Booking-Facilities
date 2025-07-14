"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Carousel = ({ items }) => {
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const width = container.clientWidth;
      const index = Math.round(scrollLeft / width);
      setCurrent(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide space-x-6 px-6 py-10"
      >
        {items}
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {items.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === current ? "bg-black dark:bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
