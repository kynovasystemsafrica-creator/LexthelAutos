import React, { useState } from "react";
import { Search } from "lucide-react";
import { SEARCH_TABS } from "../../constants/data";
import { NAVY, GOLD } from "../../constants/colors";
import { Dropdown } from "../../components/ui/Dropdown";

export function SearchWidget() {
  const [searchTab, setSearchTab] = useState("buy");
  const [make, setMake] = useState("Any Make");
  const [model, setModel] = useState("Any Model");
  const [bodyType, setBodyType] = useState("Any Body Type");
  const [priceRange, setPriceRange] = useState("Any Price");
  const [searchNotice, setSearchNotice] = useState("");

  const handleSearch = () => {
    const parts = [
      searchTab === "buy"
        ? "Buying"
        : searchTab === "rent"
        ? "Renting"
        : null,
      make !== "Any Make" ? make : null,
      model !== "Any Model" ? model : null,
      bodyType !== "Any Body Type" ? bodyType : null,
      priceRange !== "Any Price" ? priceRange : null,
    ].filter(Boolean);
    setSearchNotice(`Searching: ${parts.join(" · ")}`);
  };

  return (
    <section className="w-full px-10 sm:px-12 lg:px-20 mt-4">
      <div className="rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {SEARCH_TABS.map((tab) => {
          const active = searchTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setSearchTab(tab.key)}
              className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold border transition-colors"
              style={
                active
                  ? {
                      backgroundColor: NAVY,
                      color: "#fff",
                      borderColor: NAVY,
                    }
                  : {
                      backgroundColor: "#fff",
                      color: "#334155",
                      borderColor: "#E2E8F0",
                    }
              }
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        <Dropdown
          label="Make"
          value={make}
          onChange={setMake}
          options={[
            "Any Make",
            "Toyota",
            "BMW",
            "Mercedes-Benz",
            "Honda",
            "Lexus",
          ]}
        />
        <Dropdown
          label="Model"
          value={model}
          onChange={setModel}
          options={[
            "Any Model",
            "Land Cruiser",
            "X5",
            "GLE",
            "CR-V",
            "RX",
          ]}
        />
        <Dropdown
          label="Body Type"
          value={bodyType}
          onChange={setBodyType}
          options={["Any Body Type", "SUV", "Sedan", "Pickup", "Hatchback"]}
        />
        <Dropdown
          label="Price Range"
          value={priceRange}
          onChange={setPriceRange}
          options={[
            "Any Price",
            "Under GH¢200,000",
            "GH¢200,000–500,000",
            "Above GH¢500,000",
          ]}
        />
        <button
          onClick={handleSearch}
          className="flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white h-[42px]"
          style={{ backgroundColor: NAVY }}
        >
          <Search size={16} /> Search Cars
        </button>
      </div>
      {searchNotice && (
        <p className="mt-3 text-xs font-medium" style={{ color: GOLD }}>
          {searchNotice}
        </p>
      )}
      </div>
    </section>
  );
}
