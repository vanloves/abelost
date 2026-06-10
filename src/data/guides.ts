import type { GuideDefinition } from "@/lib/types";
import { expandedGuides } from "./guide-expansion";

const coreGuides: GuideDefinition[] = [
  {
    slug: "how-much-paint-do-i-need",
    title: "How Much Paint Do I Need?",
    category: "home",
    calculatorSlugs: ["paint"],
    description: "Measure wall area, account for doors and windows, choose a realistic coverage rate, and estimate gallons without buying far too much.",
    intro: "Paint estimates become manageable when you separate geometry from product performance. First find the surface area. Then apply coats, coverage, and a modest buffer for the conditions of the job.",
    readTime: "6 min read",
    reviewed: "June 9, 2026",
    sections: [
      {
        heading: "Start with paintable wall area",
        paragraphs: [
          "For a rectangular room, add the length and width, double that number, and multiply by wall height. That gives the gross area of all four walls.",
          "Subtract large openings such as doors, windows, built-in cabinets, and tiled sections. Small deductions are often not worth the measuring time because the remaining paint helps cover touch-ups."
        ],
        bullets: [
          "Wall area = 2 × (room length + room width) × wall height",
          "Paintable area = wall area − doors and windows",
          "Treat ceilings, trim, doors, and cabinets as separate surfaces"
        ]
      },
      {
        heading: "Coverage is not the same on every wall",
        paragraphs: [
          "Sherwin-Williams says a gallon typically covers about 350 to 400 square feet, while noting that application method and surface condition change product requirements. Use the specific label or data sheet when you have selected a paint.",
          "Fresh drywall, porous masonry, rough texture, dramatic color changes, and spraying can reduce practical coverage. Primer and finish paint also have different coverage rates."
        ]
      },
      {
        heading: "Multiply by coats before dividing by coverage",
        paragraphs: [
          "A two-coat project requires twice the paintable area. Divide that coated area by the expected square feet per gallon, then add a buffer. The calculator applies the buffer before converting the result to gallons.",
          "Purchase sizes matter. A result of 3.3 gallons does not mean a store will sell exactly 3.3 gallons. Compare combinations of gallons and quarts, and keep enough matching paint for touch-ups."
        ]
      },
      {
        heading: "Common estimating mistakes",
        paragraphs: ["Most large errors come from mixing units or applying the coat multiplier in the wrong place."],
        bullets: [
          "Using floor area as wall area",
          "Forgetting the second coat",
          "Assuming primer covers exactly like finish paint",
          "Using a generic coverage number after choosing a specialty coating",
          "Ignoring textured or damaged surfaces"
        ]
      }
    ],
    takeaway: "Measure the actual surfaces, use the selected product's coverage figure, and round the final result to practical container sizes.",
    sources: [
      {
        label: "Sherwin-Williams Paint Calculator FAQ",
        href: "https://www.sherwin-williams.com/en-us/color/color-tools/paint-calculator",
        note: "Typical gallon and primer coverage, plus surface-condition limitations."
      }
    ]
  },
  {
    slug: "how-to-calculate-concrete",
    title: "How to Calculate Concrete for a Slab",
    category: "home",
    calculatorSlugs: ["concrete"],
    description: "Convert slab dimensions into cubic yards, understand depth, and add an appropriate ordering allowance.",
    intro: "Concrete is ordered by volume, not surface area. A slab that looks simple in square feet still needs a third measurement: thickness. Converting all three dimensions into cubic yards is the core of the estimate.",
    readTime: "6 min read",
    reviewed: "June 9, 2026",
    sections: [
      {
        heading: "Convert thickness to feet",
        paragraphs: [
          "Length and width are normally measured in feet, while slab depth is often specified in inches. Divide inches by 12 before multiplying. A 4-inch slab is one-third of a foot thick.",
          "Multiply length, width, and depth in feet to get cubic feet. Divide by 27 because one cubic yard contains 27 cubic feet."
        ],
        bullets: [
          "Cubic feet = length × width × (depth in inches ÷ 12)",
          "Cubic yards = cubic feet ÷ 27"
        ]
      },
      {
        heading: "Measure the excavation, not the drawing alone",
        paragraphs: [
          "Forms, subgrade variation, slopes, thickened edges, footings, and trenches can make the real volume different from a simple rectangle. Measure separate sections when the depth changes and add their volumes.",
          "Do not reduce structural thickness to save material. Slab design, reinforcement, base preparation, drainage, and local code requirements belong with a qualified contractor or engineer."
        ]
      },
      {
        heading: "Plan for approximate yield and uneven conditions",
        paragraphs: [
          "QUIKRETE describes its bag yields as approximate and notes that its calculator does not allow for uneven substrate or waste. Ready-mix orders have similar practical uncertainty because excavation is rarely perfect.",
          "A modest extra allowance can prevent a short pour, but the right percentage depends on the job. Confirm the final quantity and minimum-load rules with the supplier."
        ]
      },
      {
        heading: "Bagged mix versus ready-mix",
        paragraphs: [
          "Small repairs and post holes may be practical with bags. Larger slabs quickly require many bags, repeated mixing, and consistent placement. Use product-specific yield data when converting cubic volume into bag count.",
          "The Abelost calculator reports cubic yards and an editable material price. It does not choose the concrete mix, strength, reinforcement, or delivery method."
        ]
      }
    ],
    takeaway: "Keep all dimensions in compatible units, split irregular pours into sections, and verify approximate yield with the selected supplier.",
    sources: [
      {
        label: "QUIKRETE Concrete Calculator",
        href: "https://www.quikrete.com/calculator/main.asp",
        note: "Bag calculations, common slab depths, and approximate-yield caveats."
      },
      {
        label: "QUIKRETE Concrete Mix",
        href: "https://www.quikrete.com/ProductLines/ConcreteMixPro.asp",
        note: "Available package sizes and common general-concrete applications."
      }
    ]
  },
  {
    slug: "how-deep-should-mulch-be",
    title: "How Deep Should Mulch Be?",
    category: "yard",
    calculatorSlugs: ["mulch"],
    description: "Choose a practical mulch depth, calculate cubic yards, and avoid piling material against trunks and stems.",
    intro: "Mulch quantity depends as much on depth as on bed size. An extra inch across a large bed can add several cubic yards, so choose the horticultural depth before ordering.",
    readTime: "5 min read",
    reviewed: "June 9, 2026",
    sections: [
      {
        heading: "Use 2 to 4 inches as a general planning range",
        paragraphs: [
          "University of Minnesota Extension recommends applying mulch 2 to 4 inches deep to balance weed suppression with soil aeration. Material type, existing mulch, soil drainage, and the plants in the bed affect the final choice.",
          "Measure existing mulch before adding more. The goal is the final depth, not automatically another full layer every season."
        ]
      },
      {
        heading: "Calculate cubic yards",
        paragraphs: [
          "Multiply bed length by width to find square feet. Convert depth from inches to feet, multiply by area for cubic feet, and divide by 27 for cubic yards.",
          "For curved beds, divide the space into rough rectangles or measure several representative widths. A careful approximation is more useful than false precision."
        ],
        bullets: [
          "Cubic yards = length × width × (depth ÷ 12) ÷ 27",
          "Subtract patios, rocks, dense groundcover, and other unmulched areas",
          "Measure each bed separately when depths differ"
        ]
      },
      {
        heading: "Keep mulch away from trunks and stems",
        paragraphs: [
          "Mulch piled against a trunk traps moisture and can contribute to disease and pest problems. Minnesota Extension advises leaving a mulch-free ring around trunks; its general guidance specifies six inches, while tree-watering guidance recommends beginning farther out for established trees.",
          "Spread mulch as an even layer rather than a cone. The bed should be shallowest near plant crowns and trunks."
        ]
      },
      {
        heading: "Bulk ordering and settling",
        paragraphs: [
          "Bulk mulch is commonly sold in whole or half cubic yards. Organic material settles and decomposes, but that does not justify applying an excessively deep initial layer.",
          "Confirm whether delivery fees, minimum orders, and loader bucket sizes affect the practical amount you purchase."
        ]
      }
    ],
    takeaway: "Choose the final depth first, subtract existing material, and keep the application even and clear of trunks.",
    sources: [
      {
        label: "University of Minnesota Extension: Mulching for soil and garden health",
        href: "https://extension.umn.edu/managing-soil-and-nutrients/mulching-soil-and-garden-health",
        note: "Benefits, material selection, recommended depth, and trunk-clearance guidance."
      }
    ]
  },
  {
    slug: "how-to-calculate-electricity-cost",
    title: "How to Calculate Electricity Cost",
    category: "energy",
    calculatorSlugs: ["electricity-cost", "appliance-energy"],
    description: "Turn watts and runtime into kilowatt-hours, then apply the electricity rate shown on your utility bill.",
    intro: "Electricity cost is a multiplication problem, but each input must represent the same period. Device power becomes energy only after you account for how long the device runs.",
    readTime: "6 min read",
    reviewed: "June 9, 2026",
    sections: [
      {
        heading: "Convert watts into kilowatts",
        paragraphs: [
          "A watt measures power at a moment in time. Utilities normally bill electricity in kilowatt-hours. Divide watts by 1,000 to convert the device's power rating into kilowatts.",
          "The U.S. Department of Energy describes a kilowatt-hour as 1,000 watt-hours and explains that utility bills charge for the kilowatt-hours consumed."
        ]
      },
      {
        heading: "Multiply power by runtime",
        paragraphs: [
          "Energy in kWh equals kilowatts multiplied by hours. A 1,500-watt heater is 1.5 kW. If it draws that power for four hours, it uses 6 kWh.",
          "Thermostats, duty cycles, variable-speed motors, and standby modes make nameplate wattage different from average consumption. A plug-in power meter gives a better measurement for cycling appliances."
        ],
        bullets: [
          "kWh = watts ÷ 1,000 × hours",
          "Period cost = kWh × electricity rate",
          "Monthly use = daily kWh × number of days"
        ]
      },
      {
        heading: "Use the right utility rate",
        paragraphs: [
          "Find the energy rate on a recent bill. A simple calculator generally uses dollars per kWh, but the full bill may also include fixed customer charges, taxes, demand charges, minimums, or tiered and time-of-use pricing.",
          "For comparing two devices, the energy-only rate is often enough. For predicting the exact bill, model the utility tariff and fixed charges separately."
        ]
      },
      {
        heading: "Avoid confusing power and energy",
        paragraphs: [
          "A high-wattage device used briefly can consume less energy than a low-wattage device running all day. Compare kWh over the same period, not wattage alone.",
          "The calculator does not estimate carbon emissions or total household consumption unless those values are entered as separate devices."
        ]
      }
    ],
    takeaway: "Convert watts to kilowatts, multiply by actual runtime, and use the energy rate from your own bill.",
    sources: [
      {
        label: "U.S. Department of Energy: Energy Saver Guide",
        href: "https://www.energy.gov/sites/default/files/2022-08/energy-saver-guide-2022.pdf",
        note: "Household energy-use guidance and the role of utility rates and usage."
      },
      {
        label: "U.S. Department of Energy electricity lesson",
        href: "https://www1.eere.energy.gov/education/pdfs/lesson301.pdf",
        note: "Watts, watt-hours, and the kWh calculation."
      }
    ]
  },
  {
    slug: "air-conditioner-running-cost",
    title: "How Much Does an Air Conditioner Cost to Run?",
    category: "energy",
    calculatorSlugs: ["ac-running-cost"],
    description: "Estimate AC electricity cost using power draw, compressor runtime, cooling days, and your utility rate.",
    intro: "The most important AC cost input is not how many hours the thermostat is switched on. It is how long the compressor actually draws power, together with the system's average electrical demand.",
    readTime: "6 min read",
    reviewed: "June 9, 2026",
    sections: [
      {
        heading: "Estimate power draw",
        paragraphs: [
          "Use measured watts when possible. A product label, technical sheet, smart thermostat, whole-home monitor, or clamp meter may provide a usable number. Rated maximum power can overstate average use for variable-speed equipment.",
          "For central systems, include the outdoor unit and indoor blower if your measurement does not already cover both."
        ]
      },
      {
        heading: "Estimate compressor runtime",
        paragraphs: [
          "An AC may be available for eight hours but cycle on for only part of that time. Runtime changes with outdoor temperature, humidity, insulation, air leakage, thermostat setting, equipment sizing, and maintenance.",
          "Use a representative hot-day runtime and multiply by the number of similar days. For seasonal estimates, calculate mild and extreme periods separately."
        ]
      },
      {
        heading: "Apply the electricity formula",
        paragraphs: [
          "Divide watts by 1,000, multiply by compressor runtime, and multiply by the number of days. Apply your electricity rate to the resulting kWh.",
          "The Department of Energy notes that actual cost depends on both utility rates and use. Fixed charges on a bill do not normally change because the AC ran another hour, so keep them separate when evaluating incremental operating cost."
        ]
      },
      {
        heading: "What this estimate cannot diagnose",
        paragraphs: [
          "A cost calculator cannot determine whether equipment is correctly sized, charged, ducted, or safe. Large unexplained changes in consumption may justify professional inspection.",
          "Do not infer savings from a replacement system using wattage alone. Climate, capacity, part-load behavior, installation quality, and usage changes all matter."
        ]
      }
    ],
    takeaway: "Use measured or realistic average power and compressor-on time; thermostat-on time alone usually overstates consumption.",
    sources: [
      {
        label: "U.S. Department of Energy: Energy Saver Guide",
        href: "https://www.energy.gov/sites/default/files/2022-08/energy-saver-guide-2022.pdf",
        note: "Energy-cost guidance and efficiency considerations for household systems."
      }
    ]
  },
  {
    slug: "ev-charging-cost-at-home",
    title: "How to Estimate EV Charging Cost at Home",
    category: "energy",
    calculatorSlugs: ["ev-charging", "ev-vs-gas"],
    description: "Estimate grid energy and home charging cost from miles driven, vehicle efficiency, charging losses, and electricity rates.",
    intro: "An EV's dashboard efficiency describes energy used by the vehicle, while the utility meter sees additional charging losses. A useful home-cost estimate connects both sides.",
    readTime: "7 min read",
    reviewed: "June 9, 2026",
    sections: [
      {
        heading: "Start with miles per kWh",
        paragraphs: [
          "Divide miles driven by vehicle efficiency in miles per kWh. That estimates energy delivered from the battery for driving. Use a long-term average rather than a single ideal trip.",
          "Weather, speed, cabin heating, air conditioning, elevation, tires, payload, and towing can all move the efficiency number."
        ]
      },
      {
        heading: "Account for charging loss",
        paragraphs: [
          "Energy is lost in the charging process and in battery conditioning. Divide battery energy by charging efficiency to estimate energy drawn from the grid. At 90% efficiency, delivering 90 kWh to the vehicle requires about 100 kWh from the utility.",
          "Charging efficiency varies with vehicle, equipment, power level, temperature, and battery state. Treat a default percentage as a planning assumption rather than a vehicle specification."
        ],
        bullets: [
          "Battery energy = miles ÷ miles per kWh",
          "Grid energy = battery energy ÷ charging efficiency",
          "Charging cost = grid energy × electricity rate"
        ]
      },
      {
        heading: "Model the tariff you actually use",
        paragraphs: [
          "A flat electricity rate is straightforward. Time-of-use plans require separating charging into rate periods. Some plans also include demand charges or special EV rates.",
          "Fixed household utility charges usually should not be assigned to the EV unless adding the vehicle caused the charge. Equipment purchase and installation are separate ownership costs."
        ]
      },
      {
        heading: "Compare EV and gasoline fairly",
        paragraphs: [
          "Compare the same annual mileage and realistic efficiency for each vehicle. Energy cost is only one part of ownership; purchase price, depreciation, insurance, maintenance, taxes, and public charging may be more significant.",
          "The Abelost comparison tool intentionally labels its result as energy savings, not total ownership savings."
        ]
      }
    ],
    takeaway: "Use real-world miles per kWh, include charging loss, and separate home electricity from higher-priced public charging.",
    sources: [
      {
        label: "U.S. Department of Energy Alternative Fuels Data Center",
        href: "https://afdc.energy.gov/fuels/electricity_charging_home.html",
        note: "Official background on residential EV charging and charging equipment."
      },
      {
        label: "FuelEconomy.gov",
        href: "https://www.fueleconomy.gov/",
        note: "Official vehicle efficiency and fuel-economy comparison information."
      }
    ]
  },
  {
    slug: "how-to-calculate-trip-fuel-cost",
    title: "How to Calculate Fuel Cost for a Trip",
    category: "auto",
    calculatorSlugs: ["fuel-cost", "trip-cost", "mpg"],
    description: "Estimate gallons and trip fuel cost using round-trip distance, realistic MPG, and an average route price.",
    intro: "Trip fuel cost rests on three inputs: distance, fuel economy, and price per gallon. The arithmetic is simple; getting representative inputs is the useful part.",
    readTime: "5 min read",
    reviewed: "June 9, 2026",
    sections: [
      {
        heading: "Use complete trip distance",
        paragraphs: [
          "Add the outbound and return route, local driving at the destination, planned detours, and a modest distance buffer. Mapping tools may show one-way distance by default.",
          "If several vehicles or route options are under consideration, hold distance constant so the MPG comparison remains meaningful."
        ]
      },
      {
        heading: "Use real-world MPG",
        paragraphs: [
          "The most relevant MPG is your vehicle's observed consumption under similar conditions. Divide miles between fill-ups by gallons added to calculate actual MPG.",
          "EPA fuel-economy values provide a standardized comparison, but speed, weather, elevation, idling, tires, cargo, roof boxes, and towing affect a specific trip."
        ]
      },
      {
        heading: "Estimate an average fuel price",
        paragraphs: [
          "Fuel price may change along the route. Use a representative average rather than the cheapest station at home. Vehicles requiring premium fuel should use that grade.",
          "Gallons equal miles divided by MPG. Multiply gallons by dollars per gallon for fuel cost."
        ],
        bullets: [
          "Gallons required = trip miles ÷ MPG",
          "Fuel cost = gallons × average price per gallon",
          "Cost per mile = fuel cost ÷ miles"
        ]
      },
      {
        heading: "Keep fuel separate from total trip cost",
        paragraphs: [
          "Tolls, parking, lodging, meals, rental fees, and vehicle wear are not gasoline. Keeping categories separate makes route and vehicle comparisons easier.",
          "For reimbursement or ownership decisions, use the broader cost-per-mile calculator rather than fuel alone."
        ]
      }
    ],
    takeaway: "Enter round-trip miles, observed MPG, and a route-wide fuel price; keep tolls and vehicle ownership costs separate.",
    sources: [
      {
        label: "FuelEconomy.gov",
        href: "https://www.fueleconomy.gov/",
        note: "Official standardized vehicle fuel-economy information and comparison tools."
      }
    ]
  },
  {
    slug: "flooring-waste-factor",
    title: "How Much Extra Flooring Should You Order?",
    category: "home",
    calculatorSlugs: ["flooring", "tile"],
    description: "Calculate net floor area, understand waste allowance, and adjust for room shape, layout, pattern, and replacement stock.",
    intro: "Floor area is only the beginning of a flooring order. Cuts, defects, pattern alignment, room shape, and future repairs create a difference between measured area and purchasable quantity.",
    readTime: "6 min read",
    reviewed: "June 9, 2026",
    sections: [
      {
        heading: "Measure net installation area",
        paragraphs: [
          "Break the floor plan into rectangles, multiply length by width for each, and add them. Include closets and connected areas that receive the same flooring.",
          "Do not subtract small cabinets or obstructions unless you are certain flooring will not extend beneath them. Record measurements and room labels so the installer can verify them."
        ]
      },
      {
        heading: "Waste depends on layout",
        paragraphs: [
          "A simple straight installation in a rectangular room usually produces less waste than diagonal layouts, herringbone, borders, small tiles, narrow rooms, stairs, or many doorways.",
          "The calculator offers an editable percentage rather than prescribing one universal factor. Product instructions and the installer's layout plan should guide the final allowance."
        ]
      },
      {
        heading: "Convert area into boxes or pieces",
        paragraphs: [
          "Multiply measured area by one plus the waste rate. Divide by the coverage printed on each carton and round up to a whole carton.",
          "For tile sold individually, divide adjusted area by tile area. Confirm whether the listed tile dimensions are nominal and whether the seller packages only full boxes."
        ]
      },
      {
        heading: "Decide whether to keep attic stock",
        paragraphs: [
          "Extra matching material can help with future repairs because dye lots, finishes, and product lines change. Keep unopened material according to manufacturer storage guidance.",
          "Repair stock is not the same as installation waste. If long-term matching is important, add it as a separate decision after calculating installation quantity."
        ]
      }
    ],
    takeaway: "Calculate the measured area first, then choose a waste factor based on the actual layout and round up to whole packages.",
    sources: [
      {
        label: "Tile Council of North America",
        href: "https://tcnatile.com/resource-center/faq/",
        note: "Industry technical background and installation considerations for ceramic tile."
      }
    ]
  },
  {
    slug: "markup-vs-margin",
    title: "Markup vs. Margin: What Is the Difference?",
    category: "business",
    calculatorSlugs: ["markup", "profit-margin"],
    description: "Understand why markup and profit margin produce different percentages even when cost, price, and profit are identical.",
    intro: "Markup and margin both describe profit relative to another number. The difference is the denominator: markup compares profit with cost, while margin compares profit with selling price.",
    readTime: "6 min read",
    reviewed: "June 9, 2026",
    sections: [
      {
        heading: "Markup starts with cost",
        paragraphs: [
          "Markup equals selling price minus cost, divided by cost. If an item costs $40 and sells for $60, profit is $20 and markup is 50%.",
          "Markup is useful when building a price from a known unit cost, but the selected markup must still cover overhead, payment fees, returns, and other costs not included in the unit figure."
        ]
      },
      {
        heading: "Margin starts with revenue",
        paragraphs: [
          "Margin equals selling price minus cost, divided by selling price. For the same $40 cost and $60 price, the margin is 33.3%.",
          "A 50% markup therefore does not create a 50% margin. Confusing them can produce prices that miss profitability targets."
        ],
        bullets: [
          "Markup % = profit ÷ cost × 100",
          "Margin % = profit ÷ selling price × 100",
          "Profit per unit = selling price − unit cost"
        ]
      },
      {
        heading: "Define cost consistently",
        paragraphs: [
          "A gross margin calculation commonly uses cost of goods sold, while net profit incorporates broader operating expenses. Label the metric so readers know which costs are included.",
          "For service work, direct labor and subcontractor costs may play the role of unit cost. Owner compensation, nonbillable time, software, insurance, and taxes still need deliberate treatment."
        ]
      },
      {
        heading: "Use the percentage for the decision",
        paragraphs: [
          "Use markup when applying a pricing rule to cost. Use margin when evaluating how much revenue remains after the defined cost. Use break-even analysis when deciding whether total sales can cover fixed expenses.",
          "No single percentage proves that a price is good. Customer value, competition, capacity, demand, cash flow, and risk remain part of the decision."
        ]
      }
    ],
    takeaway: "Markup divides by cost; margin divides by selling price. Always state which costs are included.",
    sources: [
      {
        label: "U.S. Small Business Administration: Break-even point",
        href: "https://www.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs/break-even-point",
        note: "Contribution margin and the role of price, variable cost, and fixed cost."
      }
    ]
  },
  {
    slug: "break-even-analysis-guide",
    title: "How to Calculate Your Break-even Point",
    category: "business",
    calculatorSlugs: ["break-even"],
    description: "Separate fixed and variable costs, calculate contribution per sale, and estimate the units and revenue needed to break even.",
    intro: "Break-even is the point where total revenue equals total cost. It does not mean the business has generated a target profit; it means the modeled period has reached zero operating profit.",
    readTime: "7 min read",
    reviewed: "June 9, 2026",
    sections: [
      {
        heading: "Separate fixed and variable costs",
        paragraphs: [
          "Fixed costs do not change directly with each additional unit during the modeled period. Examples may include rent, salaried administration, insurance, and software subscriptions.",
          "Variable costs rise with each unit or sale. Examples may include materials, packaging, transaction fees, shipping paid by the seller, and direct piece-rate labor. Mixed costs should be separated when practical."
        ]
      },
      {
        heading: "Calculate contribution per unit",
        paragraphs: [
          "Subtract variable cost per unit from selling price. The remainder is the contribution available to cover fixed costs and then profit.",
          "If price is $80 and variable cost is $35, each sale contributes $45. Discounts, refunds, and channel fees may reduce the effective selling price."
        ]
      },
      {
        heading: "Divide fixed costs by contribution",
        paragraphs: [
          "The SBA gives the unit formula as fixed costs divided by price minus variable costs. Round up because a fraction of a sale normally cannot cover the remaining cost.",
          "Multiply the rounded units by price to estimate break-even revenue. Keep all inputs in the same period, such as monthly fixed costs and monthly unit sales."
        ],
        bullets: [
          "Contribution per unit = price − variable cost",
          "Break-even units = fixed costs ÷ contribution per unit",
          "Break-even revenue = break-even units × selling price"
        ]
      },
      {
        heading: "Run scenarios instead of trusting one forecast",
        paragraphs: [
          "Test lower price, higher variable cost, and higher fixed cost cases. A result that only works under the optimistic scenario deserves more investigation.",
          "The SBA emphasizes break-even as an estimate for planning rather than a perfectly accurate accounting determination. Actual costs and production become known over time."
        ]
      },
      {
        heading: "Know the model's limits",
        paragraphs: [
          "A single-product model assumes constant price and variable cost. Multiple products require a stable sales mix or separate calculations. Capacity limits and step costs can also change the relationship.",
          "Break-even does not address cash timing, loan principal, taxes, inventory purchases, or the owner's required return unless those items are deliberately modeled."
        ]
      }
    ],
    takeaway: "Use consistent periods, include all meaningful variable costs, and test several scenarios before treating break-even as a sales target.",
    sources: [
      {
        label: "U.S. Small Business Administration: Break-even point",
        href: "https://www.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs/break-even-point",
        note: "Official formula, definitions, benefits, and limitations of break-even analysis."
      }
    ]
  }
];

export const guides: GuideDefinition[] = [...coreGuides, ...expandedGuides];

export const guideMap = Object.fromEntries(
  guides.map((guide) => [guide.slug, guide])
) as Record<string, GuideDefinition>;

export const guidesForCalculator = (calculatorSlug: string) =>
  guides.filter((guide) => guide.calculatorSlugs.includes(calculatorSlug));
