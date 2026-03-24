"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
}

export const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
  return (
    <div className={cn("relative w-[65px] aspect-square", className)}>
      <span className="absolute rounded-[50px] animate-loaderAnim shadow-[inset_0_0_0_3px] shadow-maroon dark:shadow-gold" />
      <span className="absolute rounded-[50px] animate-loaderAnim animation-delay shadow-[inset_0_0_0_3px] shadow-gold dark:shadow-maroon" />
    </div>
  );
};

export const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-sand/80 backdrop-blur-md">
      <LoadingSpinner />
    </div>
  );
};
