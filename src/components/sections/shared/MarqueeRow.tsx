"use client";

interface MarqueeRowProps {
  speed?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function MarqueeRow({
  reverse = false,
  pauseOnHover = true,
  className = "",
  children,
}: MarqueeRowProps) {
  const animClass = reverse ? "animate-marquee-reverse" : "animate-marquee";
  const hoverClass = pauseOnHover ? "group-hover:[animation-play-state:paused]" : "";

  return (
    <div className={`overflow-hidden group ${className}`}>
      <div className={`flex w-max ${animClass} ${hoverClass}`}>
        {/* Duplicate for seamless loop */}
        <div className="flex">{children}</div>
        <div className="flex">{children}</div>
      </div>
    </div>
  );
}
