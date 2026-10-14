
"use client";

import { useState } from "react";
import WorkoutSchedule from "./WorkoutSchedule";

const BenchCalculator = () => {
  const [max, setMax] = useState("");
  const [increment, setIncrement] = useState(5);
  const [generatedMax, setGeneratedMax] = useState(null);
  const [generatedIncrement, setGeneratedIncrement] = useState(null);
  const [error, setError] = useState("");

  const handleGenerate = () => {
    const benchMax = Number(max);

    if (
      benchMax >= 45 &&
      benchMax <= 1500 &&
      Number.isInteger(benchMax)
    ) {
      setGeneratedMax(benchMax);
      setGeneratedIncrement(increment);
      setError("");
    } else {
      setError(
        "Please enter a whole-number bench press max between 45 and 1500 lbs."
      );
    }
  };


return (
  <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">

    {/* Header */}
    <div className="mb-10">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#D62828]">
        PowerLifting Program
      </p>

      <h1 className="mb-4 text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
        Build Your <span className="text-[#D62828]">Strength.</span>
      </h1>

      <p className="max-w-xl text-base leading-relaxed text-gray-400">
        Generate your personalized 3-week Smolov Jr. bench press
        program based on your current one-rep max.
      </p>
    </div>

    {/* Calculator Form */}
    <div className="max-w-2xl border border-white/10 bg-[#1C1E21] p-6 md:p-8">

      <h2 className="mb-8 text-xl font-bold uppercase tracking-wide text-white">
        Program Setup
      </h2>

      <div className="mb-6">
        <label
          htmlFor="benchMax"
          className="mb-3 block text-sm font-medium text-gray-300"
        >
          Bench Press 1RM (lbs)
        </label>

        <input
          id="benchMax"
          type="number"
          placeholder="Enter your bench press max"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          className="w-full border border-white/15 bg-[#101113] px-4 py-4 text-lg text-white outline-none transition focus:border-[#D62828]"
        />
      </div>

      <div className="mb-8">
        <label
          htmlFor="increment"
          className="mb-3 block text-sm font-medium text-gray-300"
        >
          Weekly Weight Increase
        </label>

        <select
          id="increment"
          value={increment}
          onChange={(e) => setIncrement(Number(e.target.value))}
          className="w-full border border-white/15 bg-[#101113] px-4 py-4 text-white outline-none transition focus:border-[#D62828]"
        >
          <option value="5">+5 lbs per week</option>
          <option value="10">+10 lbs per week</option>
        </select>
      </div>

      <button
        type="button"
        onClick={handleGenerate}
        className="flex w-full items-center justify-center gap-3 bg-[#D62828] px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#B91C1C]"
      >
        Generate Program
        <span aria-hidden="true">→</span>
      </button>

      {error && (
        <p role="alert" className="mt-4 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>

    {/* Generated Schedule */}
    {generatedMax !== null && (
      <div className="mt-12">
        <WorkoutSchedule
          generatedMax={generatedMax}
          generatedIncrement={generatedIncrement}
        />
      </div>
    )}

  </section>
)};


export default BenchCalculator;
