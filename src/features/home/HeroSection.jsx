import React from "react";
import { Car, Play } from "lucide-react";
import { NAVY, GOLD } from "../../constants/colors";
import { CarThumb } from "../../components/ui/CarThumb";

export function HeroSection() {
  return (
    <section className="w-full px-10 sm:px-12 lg:px-20 pt-6 sm:pt-8">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wide text-slate-500">
            WELCOME TO LEXTHEL AUTOS
          </span>
          <h1
            className="mt-4 text-5xl sm:text-6xl font-extrabold leading-[1.05]"
            style={{ color: NAVY }}
          >
            Buy. Rent.
            <br />
            <span style={{ color: GOLD }}>Drive.</span>
          </h1>
          <p className="mt-5 max-w-md text-slate-500">
            Your trusted automotive partner in Tema for quality cars, unbeatable deals, and premium rentals.
            Drive the best. Drive with Lexthel.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              className="flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: NAVY }}
            >
              <Car size={16} /> Browse Cars
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700">
              <Play size={16} /> Watch Video
            </button>
          </div>
          <div className="mt-9 grid grid-cols-3 gap-4 max-w-md">
            {[
              { title: "Wide Selection", sub: "Quality Cars" },
              { title: "Trusted Dealer", sub: "Fair & Transparent" },
              { title: "Customer First", sub: "Satisfaction Guaranteed" },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-2">
                <div
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md"
                  style={{ backgroundColor: "#FBEFD9" }}
                >
                  <Car size={16} color={GOLD} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800 leading-tight">
                    {f.title}
                  </div>
                  <div className="text-xs text-slate-400 leading-tight">
                    {f.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-full overflow-hidden">
          <div
            className="absolute inset-4 rounded-full border"
            style={{ borderColor: GOLD + "80" }}
          />
          <CarThumb tone="light" className="absolute inset-8 rounded-full" />
        </div>
      </div>
    </section>
  );
}
