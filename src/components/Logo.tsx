"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import logoImg from "@/assets/images/logo.png";
import logo from "@/assets/images/logo1.png";
interface LogoProps {
  className?: string;
  showText?: boolean;
  isScrolled?: boolean;
}

export function Logo({ className = "", showText = true, isScrolled = false }: LogoProps) {
  // Dimension logic based on state
  const containerHeight = showText ? (isScrolled ? "h-12" : "h-14") : "h-10";

  return (
    <motion.div
      className={`flex items-center justify-center ${containerHeight} ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`relative ${showText ? "w-auto h-full" : "w-10 h-10 overflow-hidden rounded-lg bg-white/10 p-1"}`}>
        <Image
          src={logoImg}
          alt="Vertex Ridge Limited"
          className={`h-[4rem] w-[5rem] pr-2 pb-1 ${isScrolled ? "mb-6" : ""} object-cover transition-all duration-300 bg-white mx-auto rounded-md ${!showText ? "scale-[2.5] -translate-y-[15%]" : ""}`}
          priority
        />
      </div>
    </motion.div>
  );
}

export function LogoCompact({ className = "" }: { className?: string }) {
  return (
    <div className={`h-10 w-10 overflow-hidden rounded-lg bg-white/5 p-1 ${className}`}>
      <Image
        src={logo}
        alt="Vertex Ridge"
        className="h-full w-auto object-contain scale-[2.5] -translate-y-[15%]"
        priority
      />
    </div>
  );
}



