import { describe, expect, it } from "vitest";
import { calculate } from "../src/lib/calculations";
import { calculators } from "../src/data/calculators";
import { guides } from "../src/data/guides";
import { calculatorPageContent } from "../src/data/calculator-content";
import { guideFaq } from "../src/data/guide-faq";

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

  it("rejects invalid denominators and impossible relationships", () => {
    expect(() => calculate("fuel-cost", { miles: 100, mpg: 0, price: 3.5 })).toThrow("Fuel economy must be greater than zero.");
    expect(() => calculate("break-even", { fixedCosts: 1000, price: 20, variableCost: 20 })).toThrow("Selling price must be greater than variable cost.");
    expect(() => calculate("paint", {
      length: 10, width: 10, height: 8, openings: 400,
      coats: 2, coverage: 350, waste: 10, price: 40
    })).toThrow("Doors and windows must be smaller than the total wall area.");
  });

  it("provides specific page guidance for every calculator", () => {
    expect(Object.keys(calculatorPageContent).sort()).toEqual(
      calculators.map((calculator) => calculator.slug).sort()
    );
    for (const content of Object.values(calculatorPageContent)) {
      expect(content.steps.length).toBeGreaterThanOrEqual(3);
      expect(content.mistakes.length).toBeGreaterThanOrEqual(3);
      expect(content.tip.heading.length).toBeGreaterThan(0);
      expect(content.tip.body.length).toBeGreaterThan(0);
    }
  });
});

describe("guide catalog", () => {
  it("has 17 unique, sourced guides", () => {
    expect(guides).toHaveLength(17);
    expect(new Set(guides.map((guide) => guide.slug)).size).toBe(17);
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

  it("provides at least one guide for every calculator", () => {
    const coveredSlugs = new Set(guides.flatMap((guide) => guide.calculatorSlugs));
    for (const calculator of calculators) expect(coveredSlugs.has(calculator.slug)).toBe(true);
  });

  it("provides visible FAQ content for every guide", () => {
    expect(Object.keys(guideFaq).sort()).toEqual(guides.map((guide) => guide.slug).sort());
    for (const faq of Object.values(guideFaq)) {
      expect(faq.length).toBeGreaterThanOrEqual(2);
      for (const item of faq) {
        expect(item.question.length).toBeGreaterThan(0);
        expect(item.answer.length).toBeGreaterThan(0);
      }
    }
  });
});
