"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import React from "react";

export const Card = ({ card, index }) => {
  return (
    <motion.div
      className="snap-center shrink-0 w-[90%] md:w-[70%] xl:w-[50%] bg-white dark:bg-neutral-900 rounded-3xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <img
          src={card.src}
          alt={card.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white dark:bg-black px-3 py-1 text-sm rounded-full shadow">
          {card.category}
        </div>
      </div>
    
    </motion.div>
  );
};
