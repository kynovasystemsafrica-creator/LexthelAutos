import React from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./features/home/HeroSection";
import { SearchWidget } from "./features/search/SearchWidget";
import { SolutionsSection } from "./features/home/SolutionsSection";
import { StatsSection } from "./features/home/StatsSection";
import { FeaturedCarsSection } from "./features/cars/FeaturedCarsSection";
import { FeaturesStrip } from "./features/home/FeaturesStrip";

export default function LexthelAutos() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900 font-sans">
      <Header />

      <HeroSection />
      <SearchWidget />

      <SolutionsSection />
      <StatsSection />
      <FeaturedCarsSection />
      <FeaturesStrip />

      <Footer />
    </div>
  );
}
