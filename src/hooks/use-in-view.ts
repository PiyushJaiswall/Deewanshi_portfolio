"use client";

import { useRef } from "react";
import { useInView as useFramerInView } from "framer-motion";

export function useInView() {
  const ref = useRef(null);
  const isInView = useFramerInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return { ref, isInView };
}
