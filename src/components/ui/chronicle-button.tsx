"use client";
import React from "react";
import { cn } from "@/lib/utils";

const styles = `
.chronicleButton {
  --chronicle-button-default-hover-color: var(--theme-color);
  --chronicle-button-border-radius: var(--general-rounding, 8px);
  border-radius: var(--chronicle-button-border-radius);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  line-height: 1.2;
  padding: 1.25rem 2rem;
  cursor: pointer;
  border: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  background: var(--chronicle-button-background);
  color: var(--chronicle-button-foreground);
  transition: background 0.4s cubic-bezier(0.23, 1, 0.32, 1), color 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: background, color;
  position: relative;
}

.chronicleButton:hover {
  background: var(--chronicle-button-hover-background);
  color: var(--chronicle-button-hover-foreground);
}

.chronicleButton-container {
  display: block;
  position: relative;
  overflow: hidden;
  height: 1.2em; /* Ensure the container has height based on font size */
}

.chronicleButton span {
  display: flex;
  perspective: 400px;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.chronicleButton span:nth-of-type(2) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.chronicleButton em {
  font-style: normal;
  display: inline-block;
  font-size: 0.875rem; 
  color: inherit;
  will-change: transform, opacity;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s ease;
}

.chronicleButton span:nth-of-type(1) em {
  transform-origin: top;
  opacity: 1;
}

.chronicleButton span:nth-of-type(2) em {
  opacity: 0;
  transform: rotateX(-90deg) translate3d(0, 15px, 0);
  transform-origin: bottom;
}

.chronicleButton:hover span:nth-of-type(1) em {
  opacity: 0;
  transform: rotateX(90deg) translate3d(0, -15px, 0);
}

.chronicleButton:hover span:nth-of-type(2) em {
  opacity: 1;
  transform: rotateX(0deg) translate3d(0, 0, 0);
}

.chronicleButton.outlined {
  background: transparent !important;
  border: 1px solid var(--chronicle-button-background);
  color: var(--chronicle-button-background);
}

.chronicleButton.outlined:hover {
  border-color: var(--chronicle-button-hover-background);
  color: var(--chronicle-button-hover-foreground);
}
`;

interface ChronicleButtonProps {
  text: string;
  onClick?: () => void;
  hoverColor?: string;
  width?: string;
  outlined?: boolean;
  borderRadius?: string;
  customBackground?: string;
  customForeground?: string;
  hoverForeground?: string;
  className?: string;
}

export const ChronicleButton: React.FC<ChronicleButtonProps> = ({
  text,
  onClick,
  hoverColor = "#E8B923", // gold
  width = "auto",
  outlined = false,
  borderRadius = "12px",
  customBackground = "#9C2A2A", // maroon
  customForeground = "#ffffff",
  hoverForeground = "#ffffff",
  className,
}) => {
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const existing = document.getElementById("chronicle-button-style");
    if (!existing) {
      const style = document.createElement("style");
      style.id = "chronicle-button-style";
      style.innerHTML = styles;
      document.head.appendChild(style);
    } else {
      existing.innerHTML = styles;
    }
  }, []);

  const buttonStyle = {
    "--chronicle-button-background": customBackground,
    "--chronicle-button-foreground": customForeground,
    "--chronicle-button-hover-background": hoverColor,
    "--chronicle-button-hover-foreground": hoverForeground,
    "--chronicle-button-border-radius": borderRadius,
    width: width,
    minWidth: width === "auto" ? "160px" : width,
  } as React.CSSProperties;

  const characters = text.split("");

  return (
    <button
      className={cn("chronicleButton", outlined && "outlined", className)}
      onClick={onClick}
      style={buttonStyle}
      type="button"
    >
      <div className="chronicleButton-container">
        <span>
          {characters.map((char, i) => (
            <em key={i} style={{ transitionDelay: `${i * 0.02}s` }}>
              {char === " " ? "\u00A0" : char}
            </em>
          ))}
        </span>
        <span aria-hidden="true">
          {characters.map((char, i) => (
            <em key={i} style={{ transitionDelay: `${i * 0.02}s` }}>
              {char === " " ? "\u00A0" : char}
            </em>
          ))}
        </span>
      </div>
    </button>
  );
};
