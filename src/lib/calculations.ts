import type { CalculatorResult } from "./types";

type Values = Record<string, number>;

const round = (value: number, digits = 2) => {
  const factor = 10 ** digits;
  return Math.round((value + Number.EPSILON) * factor) / factor;
};

const result = (
  label: string,
  value: number,
  unit = "",
  format: CalculatorResult["format"] = "number",
  primary = false
): CalculatorResult => ({ label, value: round(value), unit, format, primary });

export function calculate(slug: string, v: Values): CalculatorResult[] {
  switch (slug) {
    case "paint": {
      const area = 2 * (v.length + v.width) * v.height - v.openings;
      const adjusted = Math.max(0, area) * v.coats * (1 + v.waste / 100);
      return [
        result("Paint required", adjusted / v.coverage, "gal", "decimal", true),
        result("Paintable area", Math.max(0, area), "sq ft"),
        result("Estimated paint cost", (adjusted / v.coverage) * v.price, "", "currency")
      ];
    }
    case "flooring": {
      const area = v.length * v.width;
      const order = area * (1 + v.waste / 100);
      return [
        result("Flooring to order", order, "sq ft", "number", true),
        result("Room area", area, "sq ft"),
        result("Material cost", order * v.price, "", "currency")
      ];
    }
    case "tile": {
      const area = v.length * v.width;
      const order = area * (1 + v.waste / 100);
      const tileArea = (v.tileLength * v.tileWidth) / 144;
      return [
        result("Tiles required", Math.ceil(order / tileArea), "tiles", "number", true),
        result("Area with waste", order, "sq ft"),
        result("Estimated cost", order * v.price, "", "currency")
      ];
    }
    case "concrete": {
      const cubicYards = (v.length * v.width * (v.depth / 12)) / 27;
      const order = cubicYards * (1 + v.waste / 100);
      return [
        result("Concrete to order", order, "cu yd", "decimal", true),
        result("Concrete volume", order * 27, "cu ft"),
        result("Estimated cost", order * v.price, "", "currency")
      ];
    }
    case "drywall": {
      const wallArea = 2 * (v.length + v.width) * v.height + v.length * v.width;
      const net = Math.max(0, wallArea - v.openings);
      const sheets = Math.ceil((net * (1 + v.waste / 100)) / 32);
      return [
        result("4 × 8 sheets", sheets, "sheets", "number", true),
        result("Surface area", net, "sq ft"),
        result("Estimated sheet cost", sheets * v.price, "", "currency")
      ];
    }
    case "mulch":
    case "soil":
    case "gravel": {
      const cubicYards = (v.length * v.width * (v.depth / 12)) / 27;
      const tons = cubicYards * (slug === "gravel" ? v.density : 0);
      return [
        result(slug === "gravel" ? "Volume required" : "Material required", cubicYards, "cu yd", "decimal", true),
        ...(slug === "gravel" ? [result("Estimated weight", tons, "tons", "decimal")] : []),
        result("Estimated cost", cubicYards * v.price, "", "currency")
      ];
    }
    case "sod": {
      const area = v.length * v.width;
      const order = area * (1 + v.waste / 100);
      return [
        result("Sod to order", order, "sq ft", "number", true),
        result("Estimated pallets", Math.ceil(order / v.palletCoverage), "pallets"),
        result("Estimated cost", order * v.price, "", "currency")
      ];
    }
    case "lawn-seed": {
      const area = v.length * v.width;
      const pounds = (area / 1000) * v.rate;
      return [
        result("Seed required", pounds, "lb", "decimal", true),
        result("Lawn area", area, "sq ft"),
        result("Estimated cost", pounds * v.price, "", "currency")
      ];
    }
    case "electricity-cost":
    case "appliance-energy":
    case "ac-running-cost":
    case "space-heater-cost": {
      const kwh = (v.watts / 1000) * v.hours * v.days;
      return [
        result("Estimated cost", kwh * v.rate, "", "currency", true),
        result("Energy use", kwh, "kWh", "decimal"),
        result("Daily cost", (kwh * v.rate) / v.days, "", "currency")
      ];
    }
    case "ev-charging": {
      const energy = (v.miles / v.efficiency) / (v.chargingEfficiency / 100);
      return [
        result("Charging cost", energy * v.rate, "", "currency", true),
        result("Grid energy needed", energy, "kWh", "decimal"),
        result("Cost per mile", (energy * v.rate) / v.miles, "", "currency")
      ];
    }
    case "fuel-cost":
    case "trip-cost": {
      const gallons = v.miles / v.mpg;
      return [
        result("Fuel cost", gallons * v.price, "", "currency", true),
        result("Fuel needed", gallons, "gal", "decimal"),
        result("Cost per mile", (gallons * v.price) / v.miles, "", "currency")
      ];
    }
    case "mpg": {
      return [
        result("Fuel economy", v.miles / v.gallons, "MPG", "decimal", true),
        result("Fuel used per 100 miles", (v.gallons / v.miles) * 100, "gal", "decimal")
      ];
    }
    case "cost-per-mile": {
      const annual = v.fuel + v.insurance + v.maintenance + v.registration + v.depreciation;
      return [
        result("Total cost per mile", annual / v.miles, "", "currency", true),
        result("Annual ownership cost", annual, "", "currency"),
        result("Monthly average", annual / 12, "", "currency")
      ];
    }
    case "ev-vs-gas": {
      const ev = (v.miles / v.evEfficiency) * v.electricityRate;
      const gas = (v.miles / v.mpg) * v.gasPrice;
      return [
        result("Annual savings with EV", gas - ev, "", "currency", true),
        result("EV energy cost", ev, "", "currency"),
        result("Gas vehicle fuel cost", gas, "", "currency")
      ];
    }
    case "profit-margin": {
      const profit = v.revenue - v.cost;
      return [
        result("Profit margin", (profit / v.revenue) * 100, "%", "percent", true),
        result("Gross profit", profit, "", "currency"),
        result("Cost share", (v.cost / v.revenue) * 100, "%", "percent")
      ];
    }
    case "markup": {
      const profit = v.price - v.cost;
      return [
        result("Markup", (profit / v.cost) * 100, "%", "percent", true),
        result("Margin", (profit / v.price) * 100, "%", "percent"),
        result("Profit per unit", profit, "", "currency")
      ];
    }
    case "break-even": {
      const contribution = v.price - v.variableCost;
      const units = v.fixedCosts / contribution;
      return [
        result("Break-even volume", Math.ceil(units), "units", "number", true),
        result("Break-even revenue", Math.ceil(units) * v.price, "", "currency"),
        result("Contribution per unit", contribution, "", "currency")
      ];
    }
    case "roas": {
      const profit = v.revenue - v.spend;
      return [
        result("Return on ad spend", v.revenue / v.spend, "×", "decimal", true),
        result("ROAS percentage", (v.revenue / v.spend) * 100, "%", "percent"),
        result("Revenue minus ad spend", profit, "", "currency")
      ];
    }
    case "freelance-rate": {
      const billableHours = v.hours * v.weeks * (v.utilization / 100);
      const requiredRevenue = v.income + v.expenses + v.benefits;
      const rate = requiredRevenue / billableHours / (1 - v.tax / 100);
      return [
        result("Suggested hourly rate", rate, "/hr", "currency", true),
        result("Annual billable hours", billableHours, "hours"),
        result("Required gross revenue", rate * billableHours, "", "currency")
      ];
    }
    default:
      throw new Error(`Unknown calculator: ${slug}`);
  }
}
