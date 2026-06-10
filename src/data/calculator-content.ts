import type { CalculatorPageContent } from "@/lib/types";

export const calculatorPageContent: Record<string, CalculatorPageContent> = {
  paint: {
    steps: ["Measure room length, width, and wall height.", "Subtract major doors and windows.", "Enter coats, product coverage, waste, and local price."],
    mistakes: ["Using floor area instead of wall area.", "Forgetting a second coat or primer.", "Assuming every surface achieves label coverage."],
    tip: { heading: "Use the selected paint's coverage.", body: "Porous walls, texture, spraying, and dramatic color changes can reduce practical coverage. Check the product data before purchasing." }
  },
  flooring: {
    steps: ["Measure each floor section separately.", "Add the sections to get net square footage.", "Choose waste for the layout and enter carton price per square foot."],
    mistakes: ["Omitting closets or connected spaces.", "Using too little waste for diagonal or complex layouts.", "Forgetting to round up to full cartons."],
    tip: { heading: "Separate installation waste from repair stock.", body: "Extra matching material for future repairs is a separate choice after calculating the amount needed for installation." }
  },
  tile: {
    steps: ["Measure the surface dimensions.", "Enter the actual tile length and width.", "Apply a layout-based waste percentage and material price."],
    mistakes: ["Mixing tile inches with surface feet.", "Ignoring cuts around edges and fixtures.", "Treating the raw tile count as a purchasable box count."],
    tip: { heading: "Confirm box coverage before ordering.", body: "Tile is often sold by the carton. Divide the adjusted square footage by the printed box coverage and round up." }
  },
  concrete: {
    steps: ["Measure the pour in separate rectangular sections.", "Enter the finished concrete depth in inches.", "Add an allowance and the supplier's price per cubic yard."],
    mistakes: ["Multiplying inch depth as though it were feet.", "Ignoring thickened edges, footings, or uneven excavation.", "Ordering exactly the geometric volume with no field allowance."],
    tip: { heading: "Confirm the order with the ready-mix supplier.", body: "Minimum loads, short-load fees, mix specification, access, and real excavation conditions affect the final order." }
  },
  drywall: {
    steps: ["Measure four walls and ceiling area.", "Subtract major openings.", "Enter waste and the price of a standard 4 × 8 sheet."],
    mistakes: ["Leaving out the ceiling.", "Using the wrong panel size or thickness.", "Assuming offcuts will fit every remaining opening."],
    tip: { heading: "Plan panel orientation before finalizing quantity.", body: "Longer panels may reduce seams, while stairs, soffits, and short walls create more offcuts than a simple area estimate shows." }
  },
  mulch: {
    steps: ["Measure each planting bed.", "Choose the desired final depth.", "Enter bulk price and combine separate bed results."],
    mistakes: ["Adding a full new layer without measuring existing mulch.", "Using inches directly as feet.", "Piling mulch against trunks and plant crowns."],
    tip: { heading: "Order for final depth, not annual habit.", body: "Measure what remains from earlier applications and add only the amount required to reach the intended depth." }
  },
  soil: {
    steps: ["Measure the area receiving soil.", "Choose the finished depth in inches.", "Calculate sections separately when depth varies."],
    mistakes: ["Confusing square yards with cubic yards.", "Ignoring settlement or compaction.", "Using fill dirt pricing for screened topsoil or compost."],
    tip: { heading: "Match the material to the planting use.", body: "Volume alone does not indicate soil quality. Confirm composition, screening, drainage, and amendment needs with the supplier." }
  },
  gravel: {
    steps: ["Measure the finished gravel area.", "Enter compacted depth and product density.", "Use the supplier's price and tons-per-yard figure."],
    mistakes: ["Using a generic density for every stone.", "Ignoring base layers and compaction.", "Assuming truck capacity equals the quantity delivered."],
    tip: { heading: "Use product-specific density.", body: "Stone type, grading, void space, and moisture change weight. The supplier's conversion is more reliable than a generic constant." }
  },
  sod: {
    steps: ["Measure the net lawn area.", "Add cutting waste for the site shape.", "Replace the pallet coverage default with the farm's figure."],
    mistakes: ["Assuming every pallet covers the same area.", "Ignoring curves and narrow strips.", "Scheduling delivery before the site is ready."],
    tip: { heading: "Fresh sod is time-sensitive.", body: "Confirm delivery coverage and prepare the soil before arrival so the material can be installed and watered promptly." }
  },
  "lawn-seed": {
    steps: ["Measure bare or overseeded lawn area.", "Use the product label's application rate.", "Enter the price per pound for the selected mixture."],
    mistakes: ["Using a new-lawn rate for overseeding.", "Applying one rate to every grass mixture.", "Buying seed before checking climate and site suitability."],
    tip: { heading: "The label rate controls the estimate.", body: "Species, mixture, and project type change pounds per thousand square feet. Replace the default with the selected product's instructions." }
  },
  "electricity-cost": {
    steps: ["Find device wattage.", "Estimate active hours per day.", "Enter the number of days and energy rate from your bill."],
    mistakes: ["Treating watts as kilowatt-hours.", "Using elapsed time for a cycling device.", "Applying the full utility bill average without understanding fixed charges."],
    tip: { heading: "Measure cycling devices when possible.", body: "A plug-in energy meter can capture thermostats, standby use, and variable power more accurately than nameplate wattage." }
  },
  "appliance-energy": {
    steps: ["Enter rated or measured wattage.", "Estimate daily active runtime.", "Apply the relevant billing-period rate."],
    mistakes: ["Assuming maximum wattage is the average.", "Leaving out standby consumption when it matters.", "Comparing appliances over different time periods."],
    tip: { heading: "Compare equal periods.", body: "Use monthly kWh for both appliances and include realistic cycles so the comparison reflects actual use." }
  },
  "ac-running-cost": {
    steps: ["Estimate average system power draw.", "Enter compressor-on runtime rather than thermostat availability.", "Apply cooling days and the local electricity rate."],
    mistakes: ["Counting every thermostat-on hour as full-power runtime.", "Leaving out the indoor blower.", "Projecting one extreme day across the entire season."],
    tip: { heading: "Model mild and extreme weather separately.", body: "Runtime changes substantially with temperature, humidity, insulation, equipment sizing, and thermostat settings." }
  },
  "space-heater-cost": {
    steps: ["Read wattage for the selected heat setting.", "Estimate active heater hours.", "Enter days used and the marginal electricity rate."],
    mistakes: ["Assuming every hour plugged in is full-power use.", "Comparing room heating with whole-home heating without defining the heated area.", "Using the estimate as a safety or load assessment."],
    tip: { heading: "Calculate a runtime range.", body: "Compare continuous full-power operation with a lower thermostat duty cycle when actual active hours are unknown." }
  },
  "ev-charging": {
    steps: ["Enter miles driven for one period.", "Use observed miles per kWh.", "Include charging efficiency and the rate paid at home."],
    mistakes: ["Ignoring charging losses.", "Using ideal vehicle efficiency.", "Mixing home and public charging prices."],
    tip: { heading: "Separate charging locations.", body: "Calculate home, workplace, and public charging independently when their rates differ, then add the costs." }
  },
  "fuel-cost": {
    steps: ["Enter total distance.", "Use realistic average MPG.", "Enter the fuel grade and route price you expect to pay."],
    mistakes: ["Using one-way distance for a round trip.", "Using dashboard MPG from an unusually efficient drive.", "Leaving out idling, towing, or detours."],
    tip: { heading: "Use observed MPG for similar driving.", body: "Several fill-ups provide a stronger average than one tank or a standardized rating alone." }
  },
  "trip-cost": {
    steps: ["Add outbound, return, and destination miles.", "Use route-appropriate MPG.", "Apply an average fuel price across the trip."],
    mistakes: ["Entering one-way miles.", "Using the cheapest local fuel price for the whole route.", "Calling fuel cost the total trip budget."],
    tip: { heading: "Keep budget categories separate.", body: "Add tolls, parking, lodging, food, and vehicle wear outside the fuel calculation so each assumption remains visible." }
  },
  mpg: {
    steps: ["Fill the tank consistently.", "Reset or record the trip odometer.", "At the next fill-up, divide miles driven by gallons added."],
    mistakes: ["Using tank capacity instead of gallons added.", "Mixing partial fill-ups.", "Judging long-term economy from one unusual tank."],
    tip: { heading: "Average several complete fill-ups.", body: "Pump shutoff, weather, traffic, and trip mix can distort a single result. A rolling average is more useful." }
  },
  "cost-per-mile": {
    steps: ["Choose a consistent annual period.", "Add fuel, insurance, maintenance, registration, and depreciation.", "Divide by miles driven in the same period."],
    mistakes: ["Leaving out depreciation.", "Mixing monthly and annual costs.", "Confusing an IRS mileage rate with actual vehicle cost."],
    tip: { heading: "State what the result includes.", body: "Parking, tolls, financing, and unexpected repairs can materially change the result if they are outside the entered fields." }
  },
  "ev-vs-gas": {
    steps: ["Use the same annual mileage for both vehicles.", "Enter real-world EV and gasoline efficiency.", "Apply representative electricity and fuel prices."],
    mistakes: ["Treating energy savings as total ownership savings.", "Ignoring charging loss or public charging.", "Comparing vehicles under different mileage assumptions."],
    tip: { heading: "This is an energy comparison.", body: "Purchase price, depreciation, insurance, maintenance, taxes, equipment, and financing require a broader ownership model." }
  },
  "profit-margin": {
    steps: ["Choose a consistent revenue period.", "Enter costs from that same period.", "Review both dollar profit and margin percentage."],
    mistakes: ["Mixing gross and net cost definitions.", "Leaving refunds or discounts outside revenue.", "Comparing margins calculated with different cost scopes."],
    tip: { heading: "Label the margin definition.", body: "Gross, contribution, operating, and net margin include different costs. A percentage is meaningful only when its scope is clear." }
  },
  markup: {
    steps: ["Enter unit cost.", "Enter actual or proposed selling price.", "Compare markup on cost with margin on revenue."],
    mistakes: ["Treating markup and margin as interchangeable.", "Using incomplete unit cost.", "Ignoring payment fees, returns, and overhead."],
    tip: { heading: "Use full decision-relevant cost.", body: "A markup rule can produce an unsustainable price when direct cost omits fees, labor, or overhead needed to serve the sale." }
  },
  "break-even": {
    steps: ["Add fixed costs for one period.", "Enter selling price per unit.", "Subtract complete variable cost per unit to find contribution."],
    mistakes: ["Mixing monthly fixed costs with annual sales.", "Leaving variable fees out of unit cost.", "Treating break-even as a profit target."],
    tip: { heading: "Test more than one scenario.", body: "Run lower-price and higher-cost cases. A plan that only breaks even under optimistic assumptions needs more margin." }
  },
  roas: {
    steps: ["Choose a consistent attribution window.", "Enter attributed conversion value.", "Enter advertising spend from the same scope and period."],
    mistakes: ["Calling revenue ROAS profit.", "Comparing different attribution models.", "Ignoring conversion delay in recent data."],
    tip: { heading: "Compare ROAS with contribution margin.", body: "Product cost, fulfillment, fees, returns, and overhead determine whether the attributed revenue actually creates profit." }
  },
  "freelance-rate": {
    steps: ["Set an annual take-home target.", "Add business expenses and self-funded benefits.", "Estimate conservative billable hours and a tax reserve."],
    mistakes: ["Treating all working hours as billable.", "Leaving time off and benefits unfunded.", "Using the tax reserve as a tax calculation."],
    tip: { heading: "Use the result as a pricing floor.", body: "Market value and project risk may support a higher price, but consistently charging below the required rate makes the plan unsustainable." }
  }
};
