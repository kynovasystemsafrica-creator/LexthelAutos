import React from "react";
import { Car } from "lucide-react";
import { NAVY } from "../../constants/colors";

export function CarThumb({ tone = "light", className = "" }) {
  const bg = tone === "dark" ? NAVY : "#EDEFF3";
  const fg = tone === "dark" ? "#fff" : NAVY;
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ backgroundColor: bg }}
    >
      <Car size={56} color={fg} strokeWidth={1.5} />
    </div>
  );
}
