import { Car, Play, Tag, Users, ShieldCheck, MapPin, ShieldCheckIcon, Handshake, Wallet, Headphones } from "lucide-react";
import { NAVY, GOLD } from "./colors";

export const SEARCH_TABS = [
  { key: "buy", label: "Buy Cars", icon: Car },
  { key: "rent", label: "Rent a Car", icon: Tag },
];

export const SOLUTIONS = [
  {
    key: "buy",
    title: "Buy Cars",
    desc: "Explore our wide range of quality new and used cars at the best prices.",
    cta: "Explore Cars",
    accent: NAVY,
  },
  {
    key: "rent",
    title: "Rentals",
    desc: "Flexible rental options for every occasion. Daily, weekly or monthly.",
    cta: "View Rentals",
    accent: GOLD,
  },
];

export const STATS = [
  { icon: Users, value: "100+", label: "Happy Customers" },
  { icon: Car, value: "50+", label: "Cars Sold" },
  { icon: ShieldCheck, value: "100%", label: "Trusted & Verified" },
  { icon: MapPin, value: "Proudly Based in", label: "Accra, Ghana", isText: true },
];

export const CARS = [
  {
    id: 1,
    name: "Toyota Land Cruiser 2022",
    tag: "Featured",
    specs: "Automatic • Diesel • 15,000 km",
    price: "GH¢ 650,000",
  },
  {
    id: 2,
    name: "BMW X5 2021",
    tag: "New Arrival",
    specs: "Automatic • Petrol • 22,000 km",
    price: "GH¢ 520,000",
  },
  {
    id: 3,
    name: "Mercedes-Benz GLE 2020",
    tag: "Featured",
    specs: "Automatic • Diesel • 18,000 km",
    price: "GH¢ 480,000",
  },
  {
    id: 4,
    name: "Honda CR-V 2021",
    tag: "New Arrival",
    specs: "Automatic • Petrol • 20,000 km",
    price: "GH¢ 210,000",
  },
];

export const FEATURES = [
  { icon: ShieldCheckIcon, title: "Quality Assurance", desc: "All cars are inspected and certified." },
  { icon: Handshake, title: "Easy Process", desc: "Simple steps to buy, sell or rent." },
  { icon: Wallet, title: "Best Prices", desc: "Competitive prices guaranteed." },
  { icon: Headphones, title: "24/7 Support", desc: "We're here to help you anytime." },
];
