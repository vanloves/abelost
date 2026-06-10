import type { ContentFaq } from "@/lib/types";

export const guideFaq: Record<string, ContentFaq[]> = {
  "how-much-paint-do-i-need": [
    { question: "How much area does one gallon of paint cover?", answer: "Many wall paints list roughly 350 to 400 square feet per gallon, but the selected product label should control. Texture, porosity, color change, and application method can reduce practical coverage." },
    { question: "Should doors and windows be subtracted from paint area?", answer: "Subtract large openings when you can measure them reliably. Small deductions are often left in the estimate because the remaining paint supports touch-ups and measurement variation." }
  ],
  "how-to-calculate-concrete": [
    { question: "How do you convert slab dimensions to cubic yards?", answer: "Multiply length and width in feet by depth in feet to get cubic feet, then divide by 27. Convert an inch depth to feet by dividing it by 12 before multiplying." },
    { question: "How much extra concrete should be ordered?", answer: "There is no universal allowance. Uneven excavation, forms, thickened edges, and supplier rules affect the amount, so use a modest project-specific buffer and confirm the order with the supplier." }
  ],
  "how-deep-should-mulch-be": [
    { question: "Is three inches of mulch enough?", answer: "Three inches sits within the common 2-to-4-inch planning range, but existing mulch, material type, drainage, and plant needs determine the appropriate final depth." },
    { question: "Should old mulch be removed before adding more?", answer: "Not automatically. Measure the existing layer and add only enough to reach the intended final depth unless the material is matted, contaminated, or otherwise unsuitable." }
  ],
  "how-to-calculate-electricity-cost": [
    { question: "How do I convert watts to electricity cost?", answer: "Divide watts by 1,000, multiply by active hours to get kWh, and multiply kWh by the electricity rate from the applicable billing period." },
    { question: "Does appliance wattage equal actual energy use?", answer: "Not always. Thermostats, cycles, variable-speed operation, and standby modes make average consumption different from the maximum nameplate wattage." }
  ],
  "air-conditioner-running-cost": [
    { question: "Does an AC use full power whenever the thermostat is on?", answer: "No. The compressor and fan cycle or modulate. Cost estimates should use representative active runtime and average system power rather than the total time cooling is available." },
    { question: "Can an AC cost estimate predict my exact bill?", answer: "It can estimate incremental energy cost, but fixed fees, tiered rates, weather, humidity, equipment condition, and household use prevent it from reproducing an exact bill." }
  ],
  "ev-charging-cost-at-home": [
    { question: "Why is grid energy higher than battery energy?", answer: "Charging equipment, conversion, battery conditioning, and other processes lose some energy. Dividing battery energy by charging efficiency estimates what the utility meter sees." },
    { question: "Should public charging be included in a home charging estimate?", answer: "Calculate it separately because public charging can use different per-kWh, per-minute, session, or idle fees. Combine the totals only after each charging location is modeled." }
  ],
  "how-to-calculate-trip-fuel-cost": [
    { question: "Should trip distance be one way or round trip?", answer: "Use the complete distance you expect to drive, including the return route, local driving, and planned detours. A mapping result may show only one direction." },
    { question: "Which MPG should I use for a road trip?", answer: "Use observed fuel economy under similar speed, terrain, weather, load, and towing conditions. A multi-tank average is usually stronger than one dashboard reading." }
  ],
  "flooring-waste-factor": [
    { question: "Is 10% flooring waste always enough?", answer: "No. A simple straight layout may need less than a diagonal, patterned, narrow, or highly irregular installation. Product instructions and the actual layout should determine waste." },
    { question: "Should extra flooring for future repairs count as waste?", answer: "Repair stock is a separate decision. First calculate installation quantity and cutting waste, then add matching attic stock if future replacement is important." }
  ],
  "markup-vs-margin": [
    { question: "Is a 50% markup the same as a 50% margin?", answer: "No. A 50% markup on a $40 cost produces a $60 price and a 33.3% margin. Markup divides profit by cost; margin divides profit by selling price." },
    { question: "Which percentage should be used for pricing?", answer: "Markup can build a price from cost, while margin evaluates how much revenue remains after the defined cost. Neither replaces a complete profitability and market analysis." }
  ],
  "break-even-analysis-guide": [
    { question: "Does breaking even mean the business is profitable?", answer: "Break-even means modeled revenue equals modeled cost, producing zero operating profit. A target profit requires additional contribution beyond the break-even point." },
    { question: "What happens if selling price is below variable cost?", answer: "Every additional sale increases the loss, so there is no positive unit break-even point. Price must exceed variable cost before contribution can cover fixed costs." }
  ],
  "how-many-sheets-of-drywall-do-i-need": [
    { question: "How many square feet does a 4 × 8 drywall sheet cover?", answer: "A full 4-by-8-foot panel covers 32 square feet before cuts. The practical number of sheets also depends on orientation, openings, room shape, and waste." },
    { question: "Should a drywall estimate include the ceiling?", answer: "Include it when the ceiling will receive drywall. Measure it separately and confirm the required panel thickness, fastening, and assembly specification." }
  ],
  "how-much-topsoil-or-gravel-do-i-need": [
    { question: "How much area does one cubic yard cover at three inches deep?", answer: "One cubic yard covers about 108 square feet at a uniform depth of three inches. Irregular grades, settling, and compaction can change the delivered amount needed." },
    { question: "Can cubic yards be converted to tons with one standard number?", answer: "No. Weight varies with material type, grading, void space, and moisture. Use the supplier's product-specific tons-per-yard figure." }
  ],
  "grass-seed-vs-sod-how-much-to-buy": [
    { question: "Is seed quantity based on lawn area alone?", answer: "Area is multiplied by the selected product's application rate. New-lawn and overseeding rates differ, and grass mixtures do not all use the same pounds per thousand square feet." },
    { question: "Does every pallet of sod cover the same square footage?", answer: "No. Pallet and roll coverage varies by farm, region, turf type, and cutting format. Replace any default with the supplier's stated coverage." }
  ],
  "space-heater-electricity-cost": [
    { question: "How much does a 1,500-watt heater use per hour?", answer: "At continuous full power it uses 1.5 kWh per hour. Multiply 1.5 by the electricity rate for hourly energy cost." },
    { question: "Will a thermostat reduce space-heater cost?", answer: "It can reduce active runtime after the room reaches temperature. The savings depend on room heat loss, setting, heater controls, and how often the element cycles." }
  ],
  "how-to-calculate-car-cost-per-mile": [
    { question: "Should depreciation be included in cost per mile?", answer: "Yes when estimating full ownership cost. Depreciation is often a major cost even though it is not paid at each trip or service visit." },
    { question: "Is the IRS mileage rate my actual vehicle cost?", answer: "No. It is an optional rate for specified tax purposes. Actual cost per mile depends on your vehicle, expenses, and mileage." }
  ],
  "what-is-roas-and-how-to-calculate-it": [
    { question: "What does a 5× ROAS mean?", answer: "It means the reporting system attributed five dollars of conversion value for each dollar of advertising spend. It can also be written as 500% ROAS." },
    { question: "Is a high ROAS always profitable?", answer: "No. The attributed revenue must still cover product cost, fulfillment, fees, returns, labor, and overhead. Profitability depends on contribution margin and measurement quality." }
  ],
  "how-to-set-a-freelance-hourly-rate": [
    { question: "Why are billable hours lower than working hours?", answer: "Freelancers also spend time on sales, proposals, administration, bookkeeping, training, and gaps between projects. Those hours still need to be funded by client revenue." },
    { question: "Is the calculator's tax reserve an estimated tax payment?", answer: "No. It is a planning allowance. Actual federal, state, and local obligations depend on current law and personal circumstances and may require professional guidance." }
  ]
};
