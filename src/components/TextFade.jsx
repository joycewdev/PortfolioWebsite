"use client";

import { motion, useInView } from "framer-motion";
import * as React from "react";

export function TextFade({
  direction,
  children,
  className = "",
  staggerChildren = 0.1,
}) {
  const FADE_VARIANTS = {
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.4 },
    },
    hidden: {
      opacity: 0,
      y: direction === "down" ? -18 : 18,
    },
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // Track only once when it first comes into view

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
          },
        },
      }}
      className={className}
    >
      {/* Apply animation to each child element */}
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={FADE_VARIANTS}>{child}</motion.div>
        ) : (
          child
        ),
      )}
    </motion.div>
  );
}
