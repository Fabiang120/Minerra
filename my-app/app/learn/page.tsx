"use client";
import { useState } from "react";

export default function Learn() {
  const [experience] = useState(["All", "Basics", "Intermediate", "Advanced", "Research"]);
  const [selectedExperience, setSelectedExperience] = useState("All");
  const handleSelectedExperience = (exp: string) => {
    setSelectedExperience(exp);
  }
  return (
    <section>
      <h4>LEARN BITCOIN</h4>
      <h2>Start here.</h2>
      <p>Hand-Picked resources that explain Bitcoin honestly, from the absolute basics to advanced montetary thesis material and protocol internals.</p>
      <div className="grid grid-flow-col auto-cols-fr gap-2">
        {experience.map((e) => {
          return <button className="w-full py-2 rounded-sm bg-button-gray" key={e} onClick={() => handleSelectedExperience(e)}>{e}</button>
        })}
      </div>
    </section>
  );
}