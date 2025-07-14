// components/magicui/blur-fade.jsx
"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export function BlurFade({ 
  children, 
  className, 
  variant, 
  duration = 0.4, 
  delay = 0, 
  yOffset = 6, 
  inView = false, 
  inViewMargin = "-50px", 
  blur = "6px" 
}) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { margin: inViewMargin });
  const isInView = !inView || inViewResult;
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: {
      y: yOffset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}