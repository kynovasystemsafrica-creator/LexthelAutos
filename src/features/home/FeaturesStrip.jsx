import React from "react";
import { FEATURES } from "../../constants/data";
import { NAVY } from "../../constants/colors";

export function FeaturesStrip() {
  return (
    <section className="mx-auto max-w-full px-2 sm:px-4 lg:px-20 mt-16">
      <div className="rounded-2xl bg-slate-50 px-6 sm:px-10 py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURES.map((f) => (
          <div key={f.title} className="flex items-start gap-3">
            <f.icon size={22} color={NAVY} className="mt-0.5" />
            <div>
              <div className="text-sm font-bold text-slate-900">{f.title}</div>
              <div className="text-xs text-slate-500 mt-0.5">{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
