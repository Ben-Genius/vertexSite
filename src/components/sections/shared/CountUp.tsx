"use client";

import { useRef, useState, useEffect } from "react";
import { useInView, animate } from "framer-motion";

export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const num = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const ctrl = animate(0, num, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setCurrent(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [isInView, num]);

  return <span ref={ref}>{current}{suffix}</span>;
}
