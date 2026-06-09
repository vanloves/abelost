import type { CalculatorResult } from "./types";

type Values = Record<string, number>;

export class CalculationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CalculationError";
  }
}

const requirePositive = (values: Values, fields: Array<[string, string]>) => {
  for (const [key, label] of fields) {
    if (!(values[key] > 0)) throw new CalculationError(`${label} must be greater than zero.`);
  }
};

const validate = (slug: string, values: Values) => {
  for (const value of Object.values(values)) {
    if (!Number.isFinite(value)) throw new CalculationError("Enter a valid number in every field.");
    if (value < 0) throw new CalculationError("Values cannot be negative.");
  }

  const positiveBySlug: Record<string, Array<[string, string]>> = {
    paint: [["length", "Length"], ["width", "Width"], ["height", "Wall height"], ["coats", "Number of coats"], ["coverage", "Coverage"]],
    flooring: [["length", "Length"], ["width", "Width"]],
    tile: [["length", "Length"], ["width", "Width"], ["tileLength", "Tile length"], ["tileWidth", "Tile width"]],
    concrete: [["length", "Length"], ["width", "Width"], ["depth", "Depth"]],
    drywall: [["length", "Length"], ["width", "Width"], ["height", "Wall height"]],
    mulch: [["length", "Length"], ["width", "Width"], ["depth", "Depth"]],
    soil: [["length", "Length"], ["width", "Width"], ["depth", "Depth"]],
    gravel: [["length", "Length"], ["width", "Width"], ["depth", "Depth"]],
    sod: [["length", "Length"], ["width", "Width"], ["palletCoverage", "Pallet coverage"]],
    "lawn-seed": [["length", "Length"], ["width", "Width"], ["rate", "Application rate"]],
    "electricity-cost": [["watts", "Device power"], ["hours", "Hours"], ["days", "Days"]],
    "appliance-energy": [["watts", "Appliance wattage"], ["hours", "Hours"], ["days", "Days"]],
    "ac-running-cost": [["watts", "AC power draw"], ["hours", "Runtime"], ["days", "Cooling days"]],
    "space-heater-cost": [["watts", "Heater wattage"], ["hours", "Hours"], ["days", "Days"]],
    "ev-charging": [["miles", "Miles"], ["efficiency", "Vehicle efficiency"], ["chargingEfficiency", "Charging efficiency"]],
    "fuel-cost": [["miles", "Distance"], ["mpg", "Fuel economy"]],
    "trip-cost": [["miles", "Distance"], ["mpg", "Fuel economy"]],
    mpg: [["miles", "Miles"], ["gallons", "Gallons"]],
    "cost-per-mile": [["miles", "Annual miles"]],
    "ev-vs-gas": [["miles", "Annual miles"], ["evEfficiency", "EV efficiency"], ["mpg", "Gas vehicle economy"]],
    "profit-margin": [["revenue", "Revenue"]],
    markup: [["cost", "Unit cost"], ["price", "Selling price"]],
    "break-even": [["price", "Selling price"]],
    roas: [["spend", "Ad spend"]],
    "freelance-rate": [["hours", "Working hours"], ["weeks", "Working weeks"], ["utilization", "Billable utilization"]]
  };

  requirePositive(values, positiveBySlug[slug] ?? []);

  if (slug === "paint") {
    const wallArea = 2 * (values.length + values.width) * values.height;
    if (values.openings >= wallArea) throw new CalculationError("Doors and windows must be smaller than the total wall area.");
  }
  if (slug === "drywall") {
    const surfaceArea = 2 * (values.length + values.width) * values.height + values.length * values.width;
    if (values.openings >= surfaceArea) throw new CalculationError("Doors and windows must be smaller than the total surface area.");
  }
  if (slug === "ev-charging" && values.chargingEfficiency > 100) {
    throw new CalculationError("Charging efficiency cannot exceed 100%.");
  }
  if (slug === "break-even" && values.price <= values.variableCost) {
    throw new CalculationError("Selling price must be greater than variable cost.");
  }
  if (slug === "freelance-rate" && values.tax >= 100) {
    throw new CalculationError("Tax reserve must be less than 100%.");
  }
};

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
  validate(slug, v);
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
