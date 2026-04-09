"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  triggerStart?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function WordReveal({
  text,
  className = "",
  delay = 0,
  triggerStart = "top 85%",
  as: Tag = "h1",
}: WordRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll(".word-inner");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power4.out",
          stagger: 0.06,
          delay,
          scrollTrigger: {
            trigger: container,
            start: triggerStart,
            once: true,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [delay, triggerStart]);

  const wordList = text.split(" ");

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`} aria-label={text}>
      <Tag className="flex flex-wrap gap-x-[0.25em] gap-y-0">
        {wordList.map((word, i) => (
          <span key={i} className="overflow-hidden inline-block">
            <span className="word-inner inline-block">{word}</span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
