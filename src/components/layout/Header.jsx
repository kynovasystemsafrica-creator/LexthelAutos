import React, { useState } from "react";
import { Menu, X, MapPin, Phone } from "lucide-react";
import { NAV_LINKS } from "../../constants/navigation";
import { NAVY, DULL_GOLD } from "../../constants/colors";
import { useHeaderScroll } from "../../hooks/useHeaderScroll";

export function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const showHeader = useHeaderScroll();

  return (
    <header
      className={`sticky top-0 z-30 backdrop-blur border-b transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        backgroundColor: "rgba(14,30,63,0.75)",
        borderColor: "rgba(255,255,255,0.06)",
        boxShadow: "0 8px 24px rgba(14,30,63,0.35)",
      }}
    >
      <div className="w-full px-10 sm:px-12 lg:px-14 mx-0">
        <div className="flex h-[90px] items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-md text-white font-bold"
              style={{ backgroundColor: NAVY }}
            >
              LA
            </div>
            <div className="leading-none">
              <div className="font-extrabold tracking-tight text-white">
                LEXTHEL
              </div>
              <div className="text-xs font-semibold" style={{ color: DULL_GOLD }}>
                AUTOS
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className={`text-sm font-medium text-white border-b-2 border-transparent pb-1 transition-all duration-200 hover:border-[#8E6F2A] ${
                  link === "Home" ? "border-[#8E6F2A]" : ""
                }`}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-sm text-white/90">
              <MapPin size={16} />
              Tema, Ghana
            </div>
            <div className="flex items-center gap-1.5 text-sm text-white/90">
              <Phone size={16} />
              +233 27 400 0334
            </div>
            <button
              className="rounded-lg px-4 py-2 text-sm font-semibold"
              style={{ backgroundColor: NAVY, color: DULL_GOLD }}
            >
              Book a Car
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white transform transition-transform duration-300"
            onClick={() => setNavOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className={`inline-block transform transition-transform duration-300 ${
                navOpen ? "rotate-12 scale-95" : "rotate-0 scale-100"
              }`}
            >
              {navOpen ? <X size={24} /> : <Menu size={24} />}
            </span>
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        <div
          className={`lg:hidden pb-4 flex flex-col gap-3 transform transition-all duration-300 ${
            navOpen
              ? "translate-y-0 opacity-100 max-h-[420px]"
              : "-translate-y-4 opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-white"
            >
              {link}
            </a>
          ))}
          <button
            className="rounded-lg px-4 py-2 text-sm font-semibold text-white w-full"
            style={{ backgroundColor: DULL_GOLD }}
          >
            Book a Car
          </button>
        </div>
      </div>
    </header>
  );
}
