import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "home",
    name: "Home Improvement",
    shortName: "Home",
    description: "Estimate materials and budgets for renovation and building projects.",
    accent: "#ff7a59",
    textAccent: "#9a3d28",
    icon: "⌂"
  },
  {
    id: "yard",
    name: "Yard & Garden",
    shortName: "Yard",
    description: "Plan landscaping materials, lawn coverage, and outdoor projects.",
    accent: "#70c174",
    textAccent: "#2f7138",
    icon: "◇"
  },
  {
    id: "energy",
    name: "Home Energy",
    shortName: "Energy",
    description: "Understand electricity use, appliance costs, and charging expenses.",
    accent: "#f4bd4f",
    textAccent: "#7a5600",
    icon: "ϟ"
  },
  {
    id: "auto",
    name: "Auto & Travel",
    shortName: "Auto",
    description: "Compare fuel, mileage, trip, and vehicle ownership costs.",
    accent: "#65a7ff",
    textAccent: "#245f9e",
    icon: "→"
  },
  {
    id: "business",
    name: "Small Business",
    shortName: "Business",
    description: "Work through pricing, profitability, advertising, and freelance rates.",
    accent: "#b590ff",
    textAccent: "#6942a6",
    icon: "%"
  }
];

export const categoryMap = Object.fromEntries(
  categories.map((category) => [category.id, category])
) as Record<Category["id"], Category>;
