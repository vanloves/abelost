import type { GuideDefinition } from "@/lib/types";

export const expandedGuides: GuideDefinition[] = [
  {
    slug: "how-many-sheets-of-drywall-do-i-need",
    title: "How Many Sheets of Drywall Do I Need?",
    category: "home",
    calculatorSlugs: ["drywall"],
    description: "Measure walls and ceilings, subtract major openings, convert area into sheets, and plan a realistic drywall waste allowance.",
    intro: "A drywall estimate starts with surface area, but the final sheet count also depends on panel size, room layout, openings, and how efficiently seams can be arranged.",
    readTime: "7 min read",
    reviewed: "June 10, 2026",
    sections: [
      {
        heading: "Measure every surface that will receive drywall",
        paragraphs: [
          "For four rectangular walls, multiply the room perimeter by wall height. Add ceiling area separately if the ceiling is part of the project. Rooms with sloped ceilings, soffits, closets, or partial-height walls should be divided into simple rectangles.",
          "Subtract large doors and windows, but avoid spending time on tiny deductions. A small amount of extra material is useful for damaged cuts and later repairs."
        ],
        bullets: [
          "Wall area = 2 × (length + width) × wall height",
          "Ceiling area = length × width",
          "Net area = wall area + ceiling area − major openings"
        ]
      },
      {
        heading: "Convert square feet into panel count",
        paragraphs: [
          "A 4-by-8-foot panel covers 32 square feet before cuts. Divide net area by panel coverage, apply the waste allowance, and round up to a whole sheet.",
          "Longer panels may reduce butt joints in some rooms, but they are heavier and harder to move. Confirm the panel dimensions, thickness, edge type, and intended application before ordering."
        ]
      },
      {
        heading: "Let the layout determine waste",
        paragraphs: [
          "A simple rectangular room with full-height walls can use sheets efficiently. Short walls, many openings, stairways, angled ceilings, and decorative details create more offcuts.",
          "The Abelost calculator uses an editable waste percentage. It does not optimize sheet orientation or produce a hanging plan, so use the result as an ordering check rather than a cut list."
        ]
      },
      {
        heading: "Keep other materials separate",
        paragraphs: [
          "Sheet count does not include joint compound, tape, fasteners, corner bead, adhesive, texture, primer, or specialty panels. Moisture, fire, impact, and sound requirements can change the panel specification.",
          "Follow the selected manufacturer's installation instructions and applicable building requirements. Ceiling and fire-rated assemblies may have fastening and framing rules that a quantity calculator cannot evaluate."
        ]
      }
    ],
    takeaway: "Measure walls and ceilings separately, divide by the selected panel coverage, add layout-based waste, and round up to whole sheets.",
    sources: [
      {
        label: "USG Sheetrock Gypsum Panels",
        href: "https://www.usg.com/en-US/p/product/sheetrock-brand-gypsum-panels-141010",
        note: "Manufacturer panel dimensions, applications, specifications, and installation documents."
      }
    ]
  },
  {
    slug: "how-much-topsoil-or-gravel-do-i-need",
    title: "How Much Topsoil or Gravel Do I Need?",
    category: "yard",
    calculatorSlugs: ["soil", "gravel"],
    description: "Convert landscape area and depth into cubic yards, understand settling and density, and prepare a practical bulk-material order.",
    intro: "Topsoil and gravel are normally purchased by volume, while delivery limits and some supplier quotes may use weight. Start with cubic yards, then use material-specific information for the final order.",
    readTime: "7 min read",
    reviewed: "June 10, 2026",
    sections: [
      {
        heading: "Calculate volume from finished dimensions",
        paragraphs: [
          "Multiply length by width to find square feet. Convert depth from inches to feet, multiply by area for cubic feet, and divide by 27 for cubic yards.",
          "Measure irregular spaces as several rectangles or use an average width. Calculate sections separately when the planned depth changes."
        ],
        bullets: [
          "Cubic feet = length × width × (depth in inches ÷ 12)",
          "Cubic yards = cubic feet ÷ 27",
          "One cubic yard covers about 108 square feet at 3 inches deep"
        ]
      },
      {
        heading: "Choose depth for the actual job",
        paragraphs: [
          "A topdressing layer, a raised bed, and replacement soil after excavation require very different depths. Gravel depth also depends on stone size, traffic, drainage, base preparation, and the intended use.",
          "The calculator reports the volume you describe; it does not prescribe a construction section or planting depth. Use project specifications or local professional guidance for structural and drainage work."
        ]
      },
      {
        heading: "Allow for settling and compaction deliberately",
        paragraphs: [
          "Loose topsoil can settle after placement, while gravel bases are commonly compacted. The amount of change depends on material grading, moisture, placement method, and the existing surface.",
          "Avoid applying one universal adjustment to every material. Ask the supplier whether quoted volume is loose, screened, compacted, or measured by loader bucket, and add an allowance that matches the job."
        ]
      },
      {
        heading: "Do not convert volume to weight with a generic constant",
        paragraphs: [
          "Gravel density varies with rock type, particle size, void space, and moisture. Soil weight also changes substantially with composition and water content.",
          "Use the supplier's tons-per-yard figure for the exact product. Confirm delivery-truck capacity, minimum quantities, access, dump location, and whether multiple loads will be required."
        ]
      }
    ],
    takeaway: "Calculate cubic yards from area and finished depth, then confirm density, compaction, and delivery rules with the material supplier.",
    sources: [
      {
        label: "USDA Natural Resources Conservation Service: Soil Health",
        href: "https://www.nrcs.usda.gov/conservation-basics/natural-resource-concerns/soils/soil-health",
        note: "Official background on soil properties and management considerations."
      },
      {
        label: "National Institute of Standards and Technology: Volume",
        href: "https://www.nist.gov/pml/owm/si-units-volume",
        note: "Official measurement guidance on volume and cubic units."
      }
    ]
  },
  {
    slug: "grass-seed-vs-sod-how-much-to-buy",
    title: "Grass Seed vs. Sod: How Much Should You Buy?",
    category: "yard",
    calculatorSlugs: ["sod", "lawn-seed"],
    description: "Measure lawn area, apply product-specific seed rates or pallet coverage, and compare the practical ordering differences between seed and sod.",
    intro: "Seed and sod cover the same measured lawn, but they are purchased differently. Seed uses a rate per thousand square feet; sod is sold by pieces, rolls, pallets, or total square footage.",
    readTime: "7 min read",
    reviewed: "June 10, 2026",
    sections: [
      {
        heading: "Measure the lawn in sections",
        paragraphs: [
          "Break the site into rectangles, circles, or other simple shapes and add their areas. Exclude patios, planting beds, buildings, and other spaces that will not receive turf.",
          "Slopes have more surface area than a flat plan view. For a steep or irregular site, field measurements and installer confirmation are more reliable than a map estimate."
        ]
      },
      {
        heading: "Use the seed label's application rate",
        paragraphs: [
          "Seed quantity equals lawn area divided by 1,000 and multiplied by the application rate. Rates differ by grass species, mixture, and whether the project is a new lawn or overseeding.",
          "Do not use a generic rate after selecting a product. The producer's label should control the calculation, and local climate and planting season affect whether the seed is appropriate."
        ],
        bullets: [
          "Seed pounds = lawn square feet ÷ 1,000 × label rate",
          "Use the new-lawn rate for bare soil",
          "Use the overseeding rate only for an existing lawn"
        ]
      },
      {
        heading: "Confirm sod coverage with the supplier",
        paragraphs: [
          "Sod quantity equals measured area plus a cutting allowance. Pallet coverage is not universal, so replace the calculator default with the farm or retailer's stated square footage.",
          "Curves, narrow strips, diagonal cuts, and damaged pieces can increase waste. Schedule delivery so fresh sod can be installed promptly."
        ]
      },
      {
        heading: "Quantity is only part of establishment",
        paragraphs: [
          "University of Minnesota Extension notes that both seeding and sodding require good soil preparation. Seed generally costs less but takes longer to establish; sod creates faster cover but costs more and requires timely installation.",
          "Soil testing, grading, seed-to-soil contact, watering, and suitable turf selection can matter more than purchasing a small amount of extra material."
        ]
      }
    ],
    takeaway: "Measure the same net lawn area for both options, then use the selected seed rate or the supplier's actual sod coverage.",
    sources: [
      {
        label: "University of Minnesota Extension: Seeding and Sodding Home Lawns",
        href: "https://extension.umn.edu/lawn-care/seeding-and-sodding-home-lawns",
        note: "University guidance on selection, preparation, installation, and early care."
      }
    ]
  },
  {
    slug: "space-heater-electricity-cost",
    title: "How Much Electricity Does a Space Heater Use?",
    category: "energy",
    calculatorSlugs: ["space-heater-cost"],
    description: "Estimate portable heater kWh and operating cost from wattage, active runtime, electricity price, and thermostat cycling.",
    intro: "Electric resistance heaters make cost estimation straightforward: convert watts to kilowatts, multiply by active runtime, and apply the electricity rate. The difficult input is how long the heater actually draws full power.",
    readTime: "6 min read",
    reviewed: "June 10, 2026",
    sections: [
      {
        heading: "Read the heater's wattage",
        paragraphs: [
          "Use the rating label or product documentation. Many portable electric heaters have more than one setting, so enter the wattage for the mode you expect to use.",
          "A 1,500-watt heater equals 1.5 kilowatts. If it draws full power for one hour, it consumes 1.5 kilowatt-hours."
        ],
        bullets: [
          "Kilowatts = watts ÷ 1,000",
          "kWh = kilowatts × active hours",
          "Cost = kWh × electricity rate"
        ]
      },
      {
        heading: "Separate elapsed time from active runtime",
        paragraphs: [
          "A thermostat-controlled heater may cycle off after the room warms. Six hours in the room does not always mean six hours at full wattage.",
          "For a planning range, calculate a full-runtime case and a lower-duty-cycle case. A plug-in energy meter can provide a better measurement for the exact heater and room."
        ]
      },
      {
        heading: "Use your marginal electricity rate",
        paragraphs: [
          "The energy portion of the utility bill is usually expressed in dollars per kWh. Time-of-use pricing may require separate calculations for different hours.",
          "Fixed customer charges normally do not rise because the heater ran for another hour. Taxes, tiers, and demand charges can make an exact bill estimate more complicated."
        ]
      },
      {
        heading: "Cost does not answer the heating question",
        paragraphs: [
          "The Department of Energy explains that a small heater can make sense for heating one occupied room instead of overheating an entire home. That does not mean every portable heater will cost less than every central system.",
          "Room size, insulation, outdoor temperature, central-system efficiency, fuel price, and how much of the home is heated all affect the comparison. Follow current manufacturer and fire-safety instructions."
        ]
      }
    ],
    takeaway: "Multiply rated kilowatts by active heater hours and your electricity rate; use a range when thermostat cycling is unknown.",
    sources: [
      {
        label: "U.S. Department of Energy: Small Space Heaters",
        href: "https://www.energy.gov/energysaver/small-space-heaters",
        note: "Official guidance on appropriate use, heater types, selection, and safety."
      }
    ]
  },
  {
    slug: "how-to-calculate-car-cost-per-mile",
    title: "How to Calculate the Real Cost per Mile of a Car",
    category: "auto",
    calculatorSlugs: ["cost-per-mile"],
    description: "Combine annual fuel, insurance, maintenance, registration, depreciation, and mileage into a practical vehicle cost-per-mile estimate.",
    intro: "Fuel is visible at every fill-up, but it is only one part of vehicle cost. A useful cost-per-mile estimate combines recurring operating expenses with ownership costs such as depreciation.",
    readTime: "7 min read",
    reviewed: "June 10, 2026",
    sections: [
      {
        heading: "Choose one consistent period",
        paragraphs: [
          "Annual figures are usually easiest. Add costs incurred over the year and divide by miles driven during the same year. Mixing a monthly insurance payment with annual mileage produces an invalid result.",
          "Use records when possible: odometer readings, fuel receipts, insurance statements, registration charges, service invoices, and tire purchases."
        ]
      },
      {
        heading: "Include operating and ownership costs",
        paragraphs: [
          "Operating costs include fuel, routine maintenance, repairs, and tires. Ownership costs can include insurance, registration, taxes, financing interest, and depreciation.",
          "Depreciation is the change in vehicle value over the period. It can be estimated from purchase price and expected resale value, or from market values at the beginning and end of the year."
        ],
        bullets: [
          "Annual vehicle cost = fuel + insurance + maintenance + registration + depreciation + other included costs",
          "Cost per mile = annual vehicle cost ÷ annual miles",
          "Label exclusions such as parking, tolls, or financing"
        ]
      },
      {
        heading: "Expect cost per mile to change with mileage",
        paragraphs: [
          "Driving more miles spreads fixed annual costs across a larger denominator, but it also increases fuel, maintenance, tire wear, and depreciation. The relationship is not perfectly linear.",
          "Run low-, expected-, and high-mileage scenarios when comparing a commute, delivery route, or vehicle purchase."
        ]
      },
      {
        heading: "Do not confuse actual cost with a mileage rate",
        paragraphs: [
          "The IRS publishes optional standard mileage rates for certain tax uses. That rate is not a measurement of your specific vehicle's actual expenses and can change by year.",
          "Use tax rules and current IRS guidance for deductions or reimbursement questions. Use your own cost records when the decision is whether a vehicle, route, or service is economically sustainable."
        ]
      }
    ],
    takeaway: "Add all costs from one period, divide by miles from that same period, and state clearly which expenses the result includes.",
    sources: [
      {
        label: "Internal Revenue Service: Standard Mileage Rates",
        href: "https://www.irs.gov/tax-professionals/standard-mileage-rates",
        note: "Official annual mileage-rate information and links to applicable tax guidance."
      }
    ]
  },
  {
    slug: "what-is-roas-and-how-to-calculate-it",
    title: "What Is ROAS and How Do You Calculate It?",
    category: "business",
    calculatorSlugs: ["roas"],
    description: "Calculate return on ad spend, choose a consistent attribution window, and understand why revenue ROAS is not the same as advertising profit.",
    intro: "ROAS compares attributed conversion value with advertising spend. It is useful for campaign efficiency, but only when revenue attribution and the comparison period are defined consistently.",
    readTime: "7 min read",
    reviewed: "June 10, 2026",
    sections: [
      {
        heading: "Divide attributed revenue by ad spend",
        paragraphs: [
          "If a campaign produces $5,000 in attributed revenue from $1,000 in advertising spend, ROAS is 5.0, often written as 5× or 500%.",
          "Use the same currency and date range for both values. Decide whether spend includes only media cost or also agency fees, creative production, and advertising software."
        ],
        bullets: [
          "ROAS = attributed conversion value ÷ advertising spend",
          "ROAS percentage = ROAS × 100",
          "5× ROAS and 500% ROAS describe the same ratio"
        ]
      },
      {
        heading: "Define attribution before comparing campaigns",
        paragraphs: [
          "Platforms can assign revenue using different attribution models and conversion windows. A click today may produce a purchase days later, so recent periods can appear weaker before delayed conversions arrive.",
          "Compare campaigns using consistent conversion actions, values, attribution settings, and reporting windows. Imported or modeled values should be documented."
        ]
      },
      {
        heading: "ROAS is not profit",
        paragraphs: [
          "Revenue must still cover product cost, fulfillment, payment fees, returns, discounts, sales labor, overhead, and taxes. A campaign can have a positive ROAS and still lose money.",
          "Estimate a break-even ROAS from contribution margin. If only 25% of revenue remains available to pay for advertising, the simplified break-even ROAS is 1 ÷ 0.25, or 4×."
        ]
      },
      {
        heading: "Use targets as operating constraints, not guarantees",
        paragraphs: [
          "Google Ads describes target ROAS as the average conversion value desired for each dollar spent. Setting a target too high can reduce traffic or conversion volume.",
          "Evaluate volume, profit contribution, cash flow, new-customer value, and measurement quality alongside ROAS. A higher ratio is not automatically better if it prevents profitable scale."
        ]
      }
    ],
    takeaway: "Calculate ROAS with consistent attributed value and spend, then compare the result with contribution margin rather than treating revenue as profit.",
    sources: [
      {
        label: "Google Ads Help: About Target ROAS Bidding",
        href: "https://support.google.com/google-ads/answer/6268637",
        note: "Official definition, formula example, conversion-value requirements, and target-setting guidance."
      }
    ]
  },
  {
    slug: "how-to-set-a-freelance-hourly-rate",
    title: "How to Set a Freelance Hourly Rate",
    category: "business",
    calculatorSlugs: ["freelance-rate"],
    description: "Turn income goals, business expenses, benefits, tax reserves, and realistic billable hours into a sustainable freelance rate.",
    intro: "A freelance rate must pay for more than the hours spent delivering client work. It also supports unpaid administration, sales, time off, business expenses, benefits, and taxes.",
    readTime: "8 min read",
    reviewed: "June 10, 2026",
    sections: [
      {
        heading: "Build an annual revenue requirement",
        paragraphs: [
          "Start with the personal income you need, then add business expenses and the benefits an employer might otherwise provide. Examples include software, equipment, insurance, accounting, training, health coverage, and retirement contributions.",
          "Separate one-time startup purchases from recurring annual costs. Replace broad guesses with actual records as the business develops."
        ]
      },
      {
        heading: "Estimate billable hours honestly",
        paragraphs: [
          "Working hours are not the same as billable hours. Marketing, proposals, bookkeeping, email, project setup, professional development, and gaps between projects consume time without appearing on an invoice.",
          "Multiply available working hours by a realistic billable-utilization percentage. Run a conservative scenario because an optimistic utilization assumption pushes the calculated rate too low."
        ],
        bullets: [
          "Available hours = hours per week × working weeks",
          "Billable hours = available hours × utilization rate",
          "Base rate = annual revenue requirement ÷ billable hours"
        ]
      },
      {
        heading: "Treat the tax input as a reserve",
        paragraphs: [
          "The calculator's tax percentage is a planning reserve, not a tax return calculation. Actual obligations depend on entity type, location, deductions, credits, filing status, and current law.",
          "The IRS notes that self-employed individuals generally handle income and self-employment taxes through filing and, when applicable, estimated payments. State and local obligations may be separate."
        ]
      },
      {
        heading: "Use the calculated rate as a floor for decisions",
        paragraphs: [
          "The formula identifies what the business model requires under the entered assumptions. Market demand, specialization, urgency, project risk, scope clarity, payment terms, and intellectual property can justify a different price.",
          "For fixed-fee work, estimate hours and risk internally, then compare the effective hourly rate with the required floor. Review the model whenever expenses, utilization, or income goals change."
        ]
      }
    ],
    takeaway: "Divide the complete annual revenue requirement by conservative billable hours, then use that result as a pricing floor rather than a universal market rate.",
    sources: [
      {
        label: "Internal Revenue Service: Self-employed Individuals Tax Center",
        href: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center",
        note: "Official overview of federal filing and tax responsibilities for self-employed people."
      },
      {
        label: "U.S. Small Business Administration: Calculate Startup Costs",
        href: "https://www.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs",
        note: "Official guidance on identifying one-time and recurring business expenses."
      }
    ]
  }
];
