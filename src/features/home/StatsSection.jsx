import React from "react";
import { STATS } from "../../constants/data";
import { NAVY, GOLD } from "../../constants/colors";

export function StatsSection() {
  return (
    <section className="mx-auto max-w-full px-2 sm:px-4 lg:px-20 mt-16">
      <div
        className="rounded-2xl px-6 sm:px-10 py-8 grid grid-cols-2 lg:grid-cols-4 gap-8"
        style={{ backgroundColor: NAVY }}
      >
        {STATS.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <s.icon size={26} color={GOLD} />
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-300">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
