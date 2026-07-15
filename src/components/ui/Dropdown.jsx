import React from "react";
import { ChevronDown } from "lucide-react";
import { GOLD } from "../../constants/colors";

export function Dropdown({ label, value, onChange, options }) {
  return (
    <label className="flex flex-col gap-1 w-full">
      <span className="text-xs font-medium text-slate-500">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-1"
          style={{ "--tw-ring-color": GOLD }}
        >
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>
    </label>
  );
}
