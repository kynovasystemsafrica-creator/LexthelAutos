import React from "react";
import { Car } from "lucide-react";
import { SOLUTIONS } from "../../constants/data";
import { NAVY, GOLD } from "../../constants/colors";
import { CarThumb } from "../../components/ui/CarThumb";

export function SolutionsSection() {
  return (
    <section className="mx-auto max-w-full px-2 sm:px-4 lg:px-20 pt-20 text-center">
      <span className="text-xs font-bold tracking-wide" style={{ color: GOLD }}>
        WHAT WE DO
      </span>
      <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold" style={{ color: NAVY }}>
        Complete Automotive Solutions
      </h2>
      <p className="mt-3 text-slate-500 max-w-xl mx-auto">
        Everything you need under one roof. Buy, sell or rent with confidence.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-6 text-left">
        {SOLUTIONS.map((s) => (
          <div key={s.key} className="rounded-2xl bg-slate-50 overflow-hidden">
            <div className="p-6">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg mb-4"
                style={{ backgroundColor: s.accent }}
              >
                <Car size={18} color="#fff" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{s.desc}</p>
              <a
                href="#"
                className="mt-3 inline-block text-sm font-semibold"
                style={{ color: s.accent === GOLD ? GOLD : NAVY }}
              >
                {s.cta} →
              </a>
            </div>
            <CarThumb tone={s.key === "sell" ? "dark" : "light"} className="h-40 w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}

