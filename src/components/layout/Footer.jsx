import React from "react";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { FOOTER_COLUMNS, NAV_LINKS } from "../../constants/navigation";
import { NAVY, GOLD, DULL_GOLD } from "../../constants/colors";

export function Footer() {
  return (
    <footer
      className="mx-auto max-w-full px-6 sm:px-8 lg:px-14 mt-16 bg-slate-900 shadow-[0_24px_80px_-48px_rgba(14,30,63,0.9)]"
      style={{ backgroundColor: NAVY }}
    >
      {/* Contact Section */}
      <div className="text-center py-12">
        <span className="text-xs font-bold tracking-wide text-slate-300">
          GET IN TOUCH
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
          Connect With Us
        </h2>
        <p className="mt-3 text-white/70 max-w-xl mx-auto">
          Have questions? Reach out to us via WhatsApp or Telegram and we'll get back to you right away.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto justify-items-center items-center">
        {/* WhatsApp */}
        <a
          href="https://wa.me/233274000334"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full sm:max-w-[520px] bg-transparent p-6 sm:p-8 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] transition-all duration-300 cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white group-hover:scale-110 transition-transform">
              <MessageCircle size={32} />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-white">WhatsApp</h3>
              <p className="text-sm text-slate-200 mt-1">+233 27 400 0334</p>
              <p className="text-xs font-semibold mt-2" style={{ color: GOLD }}>
                Chat with us now →
              </p>
            </div>
          </div>
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/lexthelautos"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full sm:max-w-[520px] bg-transparent p-6 sm:p-8 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] transition-all duration-300 cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0c2461] text-white group-hover:scale-110 transition-transform">
              <MessageCircle size={32} />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-white">Telegram</h3>
              <p className="text-sm text-slate-200 mt-1">@lexthelautos</p>
              <p className="text-xs font-semibold mt-2" style={{ color: GOLD }}>
                Join our channel →
              </p>
            </div>
          </div>
        </a>
      </div>

      <div className="border-t border-white/10 pt-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-md text-white font-bold text-sm"
                style={{ backgroundColor: GOLD }}
              >
                LA
              </div>
              <div className="leading-none">
                <div className="font-extrabold text-sm text-white">
                  LEXTHEL
                </div>
                <div className="text-[10px] font-semibold" style={{ color: GOLD }}>
                  AUTOS
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-white/70 max-w-[220px]">
              Lexthel Autos is Tema's trusted automotive partner for car sales and rentals. Quality cars. Trusted
              service.
            </p>
            <div className="mt-4 flex gap-3">
              {[Facebook, Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white hover:text-slate-300"
                >
                  <Icon size={14} />
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-white">{col.title}</h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-xs text-white/70 hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-full px-2 sm:px-4 lg:px-6 py-5 text-center text-xs text-white/50">
            © 2024 Lexthel Autos. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
