import type { CalculatorDefinition, CalculatorInput, CategoryId } from "@/lib/types";

const numberInput = (
  key: string,
  label: string,
  defaultValue: number,
  unit?: string,
  options: Partial<CalculatorInput> = {}
): CalculatorInput => ({
  key,
  label,
  defaultValue,
  unit,
  type: "number",
  min: 0,
  step: 0.01,
  ...options
});

const dimensions = [
  numberInput("length", "Length", 20, "ft"),
  numberInput("width", "Width", 15, "ft")
];

function define(
  slug: string,
  name: string,
  category: CategoryId,
  summary: string,
  inputs: CalculatorInput[],
  formula: string,
  example: string,
  assumptions: string[]
): CalculatorDefinition {
  return {
    slug,
    name,
    category,
    summary,
    description: `${summary} Change the default values to match your project and the results update instantly in your browser.`,
    inputs,
    formula,
    example,
    assumptions,
    keywords: [name.toLowerCase(), `${category} calculator`, "free online calculator"],
    faq: [
      {
        question: `How accurate is the ${name}?`,
        answer: "The result is a planning estimate based on the measurements and rates you enter. Verify package coverage, local prices, and project conditions before purchasing."
      },
      {
        question: "Should I round the result up?",
        answer: "For materials sold only in whole packages, round up to the next available package size. A waste allowance can also cover cuts, breakage, and measurement variation."
      },
      {
        question: "Does Abelost store my inputs?",
        answer: "No. The calculation runs locally in your browser and your project values are not sent to Abelost."
      }
    ]
  };
}

export const calculators: CalculatorDefinition[] = [
  define(
    "paint",
    "Paint Calculator",
    "home",
    "Estimate gallons of paint and material cost for a rectangular room.",
    [
      ...dimensions,
      numberInput("height", "Wall height", 8, "ft"),
      numberInput("openings", "Doors and windows", 42, "sq ft"),
      numberInput("coats", "Number of coats", 2, "", { min: 1, step: 1 }),
      numberInput("coverage", "Coverage per gallon", 350, "sq ft"),
      numberInput("waste", "Waste allowance", 10, "%"),
      numberInput("price", "Price per gallon", 42, "$")
    ],
    "Gallons = ((wall area − openings) × coats × (1 + waste rate)) ÷ coverage per gallon.",
    "A 20 × 15 ft room with 8 ft walls, 42 sq ft of openings, two coats, and 350 sq ft/gal coverage needs about 3.3 gallons before rounding to purchasable cans.",
    ["The room is rectangular.", "Ceilings and trim are excluded.", "Coverage varies with surface texture, color change, and application method."]
  ),
  define(
    "flooring",
    "Flooring Calculator",
    "home",
    "Calculate floor area, waste allowance, and estimated material cost.",
    [...dimensions, numberInput("waste", "Waste allowance", 10, "%"), numberInput("price", "Price per sq ft", 4.5, "$")],
    "Order area = length × width × (1 + waste rate).",
    "A 20 × 15 ft room is 300 sq ft. With 10% waste, plan to order 330 sq ft.",
    ["The floor is rectangular.", "Installation labor, underlayment, trim, and taxes are excluded.", "Complex layouts may require more waste."]
  ),
  define(
    "tile",
    "Tile Calculator",
    "home",
    "Estimate individual tiles, coverage with waste, and material cost.",
    [
      ...dimensions,
      numberInput("tileLength", "Tile length", 12, "in"),
      numberInput("tileWidth", "Tile width", 12, "in"),
      numberInput("waste", "Waste allowance", 12, "%"),
      numberInput("price", "Price per sq ft", 5.25, "$")
    ],
    "Tiles = surface area × (1 + waste rate) ÷ tile area.",
    "A 20 × 15 ft surface using 12-inch square tiles with 12% waste requires 336 tiles.",
    ["Grout-joint area is not deducted.", "Tiles are assumed to have uniform dimensions.", "Labor, mortar, grout, and edge pieces are excluded."]
  ),
  define(
    "concrete",
    "Concrete Calculator",
    "home",
    "Estimate cubic yards of concrete for slabs, patios, and footings.",
    [
      ...dimensions,
      numberInput("depth", "Depth", 4, "in"),
      numberInput("waste", "Extra allowance", 10, "%"),
      numberInput("price", "Price per cubic yard", 155, "$")
    ],
    "Cubic yards = length × width × (depth ÷ 12) ÷ 27 × (1 + extra rate).",
    "A 20 × 15 ft slab, 4 inches thick, is about 3.7 cubic yards before the extra allowance.",
    ["Dimensions describe a uniform rectangular pour.", "Subgrade, reinforcement, delivery, short-load fees, and labor are excluded.", "Confirm the order with the concrete supplier."]
  ),
  define(
    "drywall",
    "Drywall Calculator",
    "home",
    "Estimate 4 × 8 drywall sheets for room walls and ceiling.",
    [
      ...dimensions,
      numberInput("height", "Wall height", 8, "ft"),
      numberInput("openings", "Doors and windows", 42, "sq ft"),
      numberInput("waste", "Waste allowance", 10, "%"),
      numberInput("price", "Price per sheet", 15, "$")
    ],
    "Sheets = ((wall area + ceiling area − openings) × (1 + waste rate)) ÷ 32.",
    "A 20 × 15 ft room with 8 ft walls and one typical door plus windows needs about 34 standard sheets including waste.",
    ["Includes four walls and the ceiling.", "Uses 4 × 8 ft sheets.", "Joint compound, fasteners, specialty board, and labor are excluded."]
  ),
  define(
    "mulch",
    "Mulch Calculator",
    "yard",
    "Find the cubic yards of mulch needed for a garden bed.",
    [...dimensions, numberInput("depth", "Mulch depth", 3, "in"), numberInput("price", "Price per cubic yard", 45, "$")],
    "Cubic yards = length × width × (depth ÷ 12) ÷ 27.",
    "A 20 × 15 ft bed covered 3 inches deep needs about 2.8 cubic yards.",
    ["The bed is rectangular and level.", "Compaction and settlement are not added.", "Bulk suppliers may require whole or half-yard orders."]
  ),
  define(
    "soil",
    "Topsoil Calculator",
    "yard",
    "Estimate topsoil or compost volume and bulk material cost.",
    [...dimensions, numberInput("depth", "Soil depth", 4, "in"), numberInput("price", "Price per cubic yard", 38, "$")],
    "Cubic yards = length × width × (depth ÷ 12) ÷ 27.",
    "A 20 × 15 ft area filled 4 inches deep needs about 3.7 cubic yards.",
    ["The area has a uniform depth.", "Settling and compaction can increase the amount needed.", "Delivery and site preparation are excluded."]
  ),
  define(
    "gravel",
    "Gravel Calculator",
    "yard",
    "Estimate gravel volume, weight, and material cost.",
    [
      ...dimensions,
      numberInput("depth", "Gravel depth", 3, "in"),
      numberInput("density", "Tons per cubic yard", 1.4, "tons"),
      numberInput("price", "Price per cubic yard", 55, "$")
    ],
    "Cubic yards = length × width × (depth ÷ 12) ÷ 27; tons = cubic yards × density.",
    "A 20 × 15 ft area at 3 inches deep needs about 2.8 cubic yards, or roughly 3.9 tons at 1.4 tons per yard.",
    ["Density varies by stone type, size, and moisture.", "The base is level and already compacted.", "Delivery, fabric, edging, and labor are excluded."]
  ),
  define(
    "sod",
    "Sod Calculator",
    "yard",
    "Calculate sod coverage, pallets, waste, and estimated cost.",
    [
      ...dimensions,
      numberInput("waste", "Waste allowance", 5, "%"),
      numberInput("palletCoverage", "Coverage per pallet", 450, "sq ft"),
      numberInput("price", "Price per sq ft", 0.55, "$")
    ],
    "Sod area = length × width × (1 + waste rate); pallets = sod area ÷ pallet coverage.",
    "A 20 × 15 ft lawn with 5% waste requires 315 sq ft, normally one pallet at 450 sq ft per pallet.",
    ["The lawn is rectangular.", "Pallet coverage varies by farm and sod type.", "Soil preparation, delivery, and installation are excluded."]
  ),
  define(
    "lawn-seed",
    "Lawn Seed Calculator",
    "yard",
    "Estimate grass seed quantity from lawn area and application rate.",
    [
      ...dimensions,
      numberInput("rate", "Application rate", 6, "lb/1,000 sq ft"),
      numberInput("price", "Price per pound", 4.25, "$")
    ],
    "Seed pounds = lawn area ÷ 1,000 × application rate.",
    "A 20 × 15 ft lawn seeded at 6 lb per 1,000 sq ft needs about 1.8 lb of seed.",
    ["Use the seed producer's rate for new lawns or overseeding.", "Irregular areas should be measured in sections.", "Germination depends on seed quality, weather, soil, and watering."]
  ),
  define(
    "electricity-cost",
    "Electricity Cost Calculator",
    "energy",
    "Estimate appliance electricity use and operating cost over time.",
    [
      numberInput("watts", "Device power", 1000, "W"),
      numberInput("hours", "Hours used per day", 4, "hr"),
      numberInput("days", "Number of days", 30, "days", { min: 1, step: 1 }),
      numberInput("rate", "Electricity rate", 0.17, "$/kWh")
    ],
    "Cost = (watts ÷ 1,000) × hours per day × days × electricity rate.",
    "A 1,000 W device used four hours daily for 30 days consumes 120 kWh and costs $20.40 at $0.17/kWh.",
    ["The device runs continuously at the entered wattage.", "Taxes, fees, and tiered utility pricing are excluded.", "Use the wattage label or a plug-in power meter for better accuracy."]
  ),
  define(
    "appliance-energy",
    "Appliance Energy Calculator",
    "energy",
    "Calculate monthly appliance energy consumption and electricity cost.",
    [
      numberInput("watts", "Appliance wattage", 1500, "W"),
      numberInput("hours", "Hours used per day", 1, "hr"),
      numberInput("days", "Days used", 30, "days", { min: 1, step: 1 }),
      numberInput("rate", "Electricity rate", 0.17, "$/kWh")
    ],
    "Energy = watts ÷ 1,000 × daily hours × days; cost = energy × rate.",
    "A 1,500 W appliance used one hour a day consumes 45 kWh over 30 days.",
    ["Rated wattage may differ from average consumption.", "Standby power is excluded.", "Cycles, thermostats, and variable-speed motors reduce actual runtime."]
  ),
  define(
    "ac-running-cost",
    "AC Running Cost Calculator",
    "energy",
    "Estimate the electricity cost of running an air conditioner.",
    [
      numberInput("watts", "AC power draw", 1500, "W"),
      numberInput("hours", "Runtime per day", 8, "hr"),
      numberInput("days", "Cooling days", 30, "days", { min: 1, step: 1 }),
      numberInput("rate", "Electricity rate", 0.17, "$/kWh")
    ],
    "Operating cost = AC watts ÷ 1,000 × runtime × days × electricity rate.",
    "A 1,500 W unit running eight hours daily costs about $61.20 over 30 days at $0.17/kWh.",
    ["Runtime means compressor-on time, not simply thermostat-on time.", "Fan-only operation and demand charges are excluded.", "Actual use depends on climate, insulation, sizing, and thermostat settings."]
  ),
  define(
    "space-heater-cost",
    "Space Heater Cost Calculator",
    "energy",
    "Estimate daily and monthly portable heater electricity cost.",
    [
      numberInput("watts", "Heater wattage", 1500, "W"),
      numberInput("hours", "Hours per day", 6, "hr"),
      numberInput("days", "Number of days", 30, "days", { min: 1, step: 1 }),
      numberInput("rate", "Electricity rate", 0.17, "$/kWh")
    ],
    "Cost = heater watts ÷ 1,000 × hours per day × days × rate.",
    "A 1,500 W heater used six hours daily consumes 270 kWh in 30 days.",
    ["The heater draws the entered power while active.", "Thermostat cycling can reduce consumption.", "This is an energy-cost estimate, not a heating-load calculation."]
  ),
  define(
    "ev-charging",
    "EV Charging Cost Calculator",
    "energy",
    "Estimate home charging energy, cost, and cost per mile.",
    [
      numberInput("miles", "Miles driven", 1000, "mi"),
      numberInput("efficiency", "Vehicle efficiency", 3.5, "mi/kWh"),
      numberInput("chargingEfficiency", "Charging efficiency", 90, "%", { max: 100 }),
      numberInput("rate", "Electricity rate", 0.17, "$/kWh")
    ],
    "Grid energy = miles ÷ vehicle efficiency ÷ charging efficiency; cost = grid energy × rate.",
    "Driving 1,000 miles at 3.5 mi/kWh with 90% charging efficiency requires about 317 kWh from the grid.",
    ["Vehicle efficiency is the driving average.", "Charging losses are represented by the efficiency input.", "Time-of-use rates, public charging, and fixed utility fees are excluded."]
  ),
  define(
    "fuel-cost",
    "Fuel Cost Calculator",
    "auto",
    "Estimate gasoline needed and fuel cost for any distance.",
    [
      numberInput("miles", "Distance", 1000, "mi"),
      numberInput("mpg", "Fuel economy", 28, "MPG"),
      numberInput("price", "Fuel price", 3.5, "$/gal")
    ],
    "Gallons = miles ÷ MPG; fuel cost = gallons × price per gallon.",
    "Driving 1,000 miles at 28 MPG uses about 35.7 gallons and costs $125 at $3.50/gal.",
    ["MPG is an average for the trip.", "Idling, detours, towing, and elevation can change fuel use.", "Tolls, parking, and vehicle wear are excluded."]
  ),
  define(
    "trip-cost",
    "Road Trip Cost Calculator",
    "auto",
    "Plan the fuel portion of a road trip budget.",
    [
      numberInput("miles", "Round-trip distance", 850, "mi"),
      numberInput("mpg", "Vehicle fuel economy", 30, "MPG"),
      numberInput("price", "Average fuel price", 3.5, "$/gal")
    ],
    "Trip fuel cost = round-trip miles ÷ MPG × average fuel price.",
    "An 850-mile trip at 30 MPG and $3.50/gal uses about 28.3 gallons and costs about $99.",
    ["Enter round-trip distance.", "Fuel price and MPG are averaged across the route.", "Food, lodging, tolls, parking, and maintenance are excluded."]
  ),
  define(
    "mpg",
    "MPG Calculator",
    "auto",
    "Calculate actual miles per gallon from a fill-up.",
    [numberInput("miles", "Miles driven", 360, "mi"), numberInput("gallons", "Gallons used", 12, "gal")],
    "MPG = miles driven ÷ gallons used.",
    "Driving 360 miles and adding 12 gallons at the next fill-up equals 30 MPG.",
    ["For best results, fill the tank to a similar level each time.", "Use trip-odometer miles between fill-ups.", "One tank can be distorted by driving conditions or pump shutoff variation."]
  ),
  define(
    "cost-per-mile",
    "Car Cost Per Mile Calculator",
    "auto",
    "Estimate full vehicle ownership cost per mile.",
    [
      numberInput("miles", "Annual miles", 12000, "mi"),
      numberInput("fuel", "Annual fuel", 1600, "$"),
      numberInput("insurance", "Annual insurance", 1800, "$"),
      numberInput("maintenance", "Maintenance and tires", 900, "$"),
      numberInput("registration", "Registration and taxes", 350, "$"),
      numberInput("depreciation", "Annual depreciation", 3500, "$")
    ],
    "Cost per mile = annual fuel, insurance, maintenance, registration, and depreciation ÷ annual miles.",
    "A vehicle costing $8,150 per year and driven 12,000 miles costs about $0.68 per mile.",
    ["Financing interest and parking are excluded unless included in another field.", "Depreciation is the estimated annual loss in vehicle value.", "Unexpected repairs can make actual cost higher."]
  ),
  define(
    "ev-vs-gas",
    "EV vs Gas Cost Calculator",
    "auto",
    "Compare annual EV electricity cost with gasoline vehicle fuel cost.",
    [
      numberInput("miles", "Annual miles", 12000, "mi"),
      numberInput("evEfficiency", "EV efficiency", 3.5, "mi/kWh"),
      numberInput("electricityRate", "Electricity rate", 0.17, "$/kWh"),
      numberInput("mpg", "Gas vehicle economy", 30, "MPG"),
      numberInput("gasPrice", "Gas price", 3.5, "$/gal")
    ],
    "EV cost = miles ÷ mi/kWh × electric rate; gas cost = miles ÷ MPG × gas price.",
    "At 12,000 miles, 3.5 mi/kWh and $0.17/kWh, EV energy costs about $583 versus $1,400 for a 30 MPG car at $3.50/gal.",
    ["Compares energy only.", "Charging losses, public charging prices, maintenance, insurance, taxes, and purchase price are excluded.", "Rates and efficiency should reflect your own driving."]
  ),
  define(
    "profit-margin",
    "Profit Margin Calculator",
    "business",
    "Calculate gross profit and profit margin from revenue and cost.",
    [numberInput("revenue", "Revenue", 10000, "$"), numberInput("cost", "Cost", 6500, "$")],
    "Gross profit = revenue − cost; margin = gross profit ÷ revenue × 100.",
    "$10,000 revenue minus $6,500 cost produces $3,500 gross profit and a 35% margin.",
    ["Revenue must be greater than zero.", "Use costs from the same period as revenue.", "This is not a substitute for accounting, tax, or financial advice."]
  ),
  define(
    "markup",
    "Markup Calculator",
    "business",
    "Compare markup, selling margin, and profit per unit.",
    [numberInput("cost", "Unit cost", 40, "$"), numberInput("price", "Selling price", 65, "$")],
    "Markup = (price − cost) ÷ cost; margin = (price − cost) ÷ price.",
    "An item costing $40 and selling for $65 has a 62.5% markup and about a 38.5% margin.",
    ["Cost and selling price are measured per unit.", "Payment fees, overhead, returns, and taxes are excluded unless included in cost.", "Markup and margin use different denominators."]
  ),
  define(
    "break-even",
    "Break-even Calculator",
    "business",
    "Find the sales volume and revenue needed to cover costs.",
    [
      numberInput("fixedCosts", "Fixed costs", 12000, "$"),
      numberInput("price", "Selling price per unit", 80, "$"),
      numberInput("variableCost", "Variable cost per unit", 35, "$")
    ],
    "Break-even units = fixed costs ÷ (selling price − variable cost).",
    "With $12,000 fixed costs and $45 contribution per sale, break-even is 267 units after rounding up.",
    ["Selling price must exceed variable cost.", "Demand and capacity are not modeled.", "Taxes, financing, and changing costs are excluded."]
  ),
  define(
    "roas",
    "ROAS Calculator",
    "business",
    "Calculate return on ad spend from attributed revenue and advertising cost.",
    [numberInput("revenue", "Attributed revenue", 15000, "$"), numberInput("spend", "Ad spend", 3000, "$")],
    "ROAS = attributed revenue ÷ advertising spend.",
    "$15,000 attributed revenue from $3,000 ad spend equals 5× ROAS, or 500%.",
    ["Revenue attribution is assumed to be accurate.", "ROAS is not profit and excludes product cost, fees, labor, and overhead.", "Compare performance using a consistent attribution window."]
  ),
  define(
    "freelance-rate",
    "Freelance Hourly Rate Calculator",
    "business",
    "Estimate an hourly rate from income goals, costs, taxes, and billable time.",
    [
      numberInput("income", "Target take-home income", 70000, "$"),
      numberInput("expenses", "Annual business expenses", 12000, "$"),
      numberInput("benefits", "Benefits and retirement", 15000, "$"),
      numberInput("tax", "Tax reserve", 25, "%", { max: 90 }),
      numberInput("hours", "Working hours per week", 40, "hr"),
      numberInput("weeks", "Working weeks per year", 48, "weeks", { max: 52 }),
      numberInput("utilization", "Billable utilization", 60, "%", { max: 100 })
    ],
    "Rate = (income goal + expenses + benefits) ÷ billable hours ÷ (1 − tax reserve).",
    "A $70,000 income goal plus $27,000 in costs, with 1,152 billable hours and a 25% reserve, suggests about $112/hour.",
    ["The tax reserve is a planning percentage, not a tax calculation.", "Billable utilization accounts for sales, admin, and unpaid time.", "Seek professional tax and business advice for your circumstances."]
  )
];

export const calculatorMap = Object.fromEntries(
  calculators.map((calculator) => [calculator.slug, calculator])
) as Record<string, CalculatorDefinition>;

export const calculatorsByCategory = (category: CategoryId) =>
  calculators.filter((calculator) => calculator.category === category);
