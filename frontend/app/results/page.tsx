"use client";

import { useEffect, useState } from "react";

import SkillsCard from "@/components/SkillsCard";
import ScoreCard from "@/components/ScoreCard";
import GapCard from "@/components/GapCard";
import RoadmapCard from "@/components/RoadmapCard";
import CareerCard from "@/components/CareerCard";

export default function ResultsPage() {

  const [data, setData] = useState<any>(null);

  useEffect(() => {

    const stored = localStorage.getItem("analysis");

    if (stored) {
      setData(JSON.parse(stored));
    }

  }, []);

  if (!data) {

    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );

  }

  return (

    <main className="min-h-screen bg-gray-100 p-10 text-gray-900">

      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
        Resume Analysis
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <SkillsCard skills={data.skills} />

        <CareerCard
          career={data.career}
          alternatives={data.alternative_careers}
        />

        <ScoreCard score={data.readiness_score} />

        <GapCard gaps={data.missing_skills} />

        <RoadmapCard roadmap={data.roadmap} />

      </div>

    </main>

  );
}