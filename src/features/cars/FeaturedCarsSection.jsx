import React, { useState } from "react";
import { Heart } from "lucide-react";
import { CARS } from "../../constants/data";
import { NAVY, GOLD } from "../../constants/colors";
import { CarThumb } from "../../components/ui/CarThumb";

export function FeaturedCarsSection() {
  const [favorites, setFavorites] = useState(() => new Set());

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section className="mx-auto max-w-full px-2 sm:px-4 lg:px-20 mt-16">
      <div className="flex items-end justify-between">
        <div>
          <span className="text-xs font-bold tracking-wide" style={{ color: GOLD }}>
            FEATURED CARS
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold" style={{ color: NAVY }}>
            Handpicked For You
          </h2>
        </div>
        <a
          href="#"
          className="text-sm font-semibold hidden sm:block"
          style={{ color: GOLD }}
        >
          View All Cars →
        </a>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {CARS.map((car) => {
          const isFav = favorites.has(car.id);
          return (
            <div key={car.id} className="rounded-xl border border-slate-200 overflow-hidden">
              <div className="relative">
                <CarThumb tone="light" className="h-40 w-full" />
                <span
                  className="absolute top-2 left-2 rounded-md px-2 py-1 text-[10px] font-bold text-white"
                  style={{
                    backgroundColor: car.tag === "Featured" ? GOLD : NAVY,
                  }}
                >
                  {car.tag.toUpperCase()}
                </span>
                <button
                  onClick={() => toggleFavorite(car.id)}
                  className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow"
                  aria-label="Toggle favorite"
                >
                  <Heart
                    size={14}
                    color={isFav ? "#e11d48" : "#94a3b8"}
                    fill={isFav ? "#e11d48" : "none"}
                  />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-900">{car.name}</h3>
                <p className="mt-1 text-xs text-slate-400">{car.specs}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-extrabold text-sm text-slate-900">
                    {car.price}
                  </span>
                  <button
                    className="rounded-md px-3 py-1.5 text-xs font-semibold text-white"
                    style={{ backgroundColor: GOLD }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
