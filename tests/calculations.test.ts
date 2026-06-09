import { describe, expect, it } from "vitest";
import { calculate } from "../src/lib/calculations";
import { calculators } from "../src/data/calculators";
import { guides } from "../src/data/guides";

const primary = (slug: string, values: Record<string, number>) =>
  calculate(slug, values).find((item) => item.primary)?.value;

describe("home and yard calculations", () => {
  it("calculates paint gallons", () => {
    expect(primary("paint", {
      length: 20, width: 15, height: 8, openings: 42,
      coats: 2, coverage: 350, waste: 10, price: 42
    })).toBe(3.26);
  });

  it("calculates flooring with waste", () => {
    expect(primary("flooring", { length: 20, width: 15, waste: 10, price: 4.5 })).toBe(330);
  });

  it("calculates concrete cubic yards", () => {
    expect(primary("concrete", { length: 20, width: 15, depth: 4, waste: 10, price: 155 })).toBe(4.07);
  });

  it("calculates mulch volume", () => {
    expect(primary("mulch", { length: 20, width: 15, depth: 3, price: 45 })).toBe(2.78);
  });
});

describe("energy and vehicle calculations", () => {
  it("calculates electricity cost", () => {
    expect(primary("electricity-cost", { watts: 1000, hours: 4, days: 30, rate: 0.17 })).toBe(20.4);
  });

  it("includes EV charging loss", () => {
    expect(primary("ev-charging", {
      miles: 1000, efficiency: 3.5, chargingEfficiency: 90, rate: 0.17
    })).toBe(53.97);
  });

  it("calculates fuel cost", () => {
    expect(primary("fuel-cost", { miles: 1000, mpg: 28, price: 3.5 })).toBe(125);
  });

  it("compares EV and gas energy cost", () => {
    expect(primary("ev-vs-gas", {
      miles: 12000, evEfficiency: 3.5, electricityRate: 0.17,
      mpg: 30, gasPrice: 3.5
    })).toBe(817.14);
  });
});

describe("business calculations", () => {
  it("calculates profit margin", () => {
    expect(primary("profit-margin", { revenue: 10000, cost: 6500 })).toBe(35);
  });

  it("calculates markup", () => {
    expect(primary("markup", { cost: 40, price: 65 })).toBe(62.5);
  });

  it("rounds break-even units up", () => {
    expect(primary("break-even", { fixedCosts: 12000, price: 80, variableCost: 35 })).toBe(267);
  });

  it("calculates ROAS", () => {
    expect(primary("roas", { revenue: 15000, spend: 3000 })).toBe(5);
  });
});

describe("calculator catalog", () => {
  it("has 25 unique calculators", () => {
    expect(calculators).toHaveLength(25);
    expect(new Set(calculators.map((item) => item.slug)).size).toBe(25);
  });

  it.each(calculators)("$name returns finite defaults", (calculator) => {
    const values = Object.fromEntries(
      calculator.inputs.map((input) => [input.key, input.defaultValue])
    );
    const results = calculate(calculator.slug, values);
    expect(results.length).toBeGreaterThan(0);
    for (const item of results) expect(Number.isFinite(item.value)).toBe(true);
  });
});

describe("guide catalog", () => {
  it("has 10 unique, sourced guides", () => {
    expect(guides).toHaveLength(10);
    expect(new Set(guides.map((guide) => guide.slug)).size).toBe(10);
    for (const guide of guides) {
      expect(guide.sections.length).toBeGreaterThanOrEqual(4);
      expect(guide.sources.length).toBeGreaterThan(0);
    }
  });

  it("only links existing calculators", () => {
    const calculatorSlugs = new Set(calculators.map((calculator) => calculator.slug));
    for (const guide of guides) {
      for (const slug of guide.calculatorSlugs) expect(calculatorSlugs.has(slug)).toBe(true);
    }
  });
});
