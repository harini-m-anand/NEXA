"use client";

import { useEffect, useState } from "react";

export default function ResultsPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("analysis");

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        console.log("Analysis Data:", parsed);
        setData(parsed);
        if (stored) {
  try {
    const parsed = JSON.parse(stored);
    console.log("Loaded Analysis:", parsed);
    setData(parsed);
  } catch (error) {
    console.error(error);
  }
}
      } catch (error) {
        console.error("Invalid analysis data", error);
      }
    }
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <h1 className="text-2xl font-semibold text-gray-700">
          Loading Analysis...
        </h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Resume Analysis
      </h1>

      {/* Top Cards */}

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Career Goal</p>

          <h2 className="text-3xl font-bold text-blue-600 mt-2">
            {data.career ?? "Not Available"}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Readiness Score</p>

          <div className="w-full bg-gray-200 rounded-full h-4 mt-4">

            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{
                width: `${data.readiness_score ?? 0}%`,
              }}
            />

          </div>

          <p className="text-3xl font-bold mt-4 text-gray-800">
            {data.readiness_score ?? 0}%
          </p>
        </div>

      </div>

      {/* Skills */}

      <div className="bg-white rounded-xl shadow p-6 mt-8">

        <h2 className="text-2xl font-bold text-gray-800 mb-5">
          Extracted Skills
        </h2>

        <div className="flex flex-wrap gap-3">

          {(data.skills ?? []).map((skill: string) => (

            <span
              key={skill}
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium"
            >
              {skill}
            </span>

          ))}

        </div>

      </div>

      {/* Missing Skills */}

      <div className="bg-white rounded-xl shadow p-6 mt-8">

        <h2 className="text-2xl font-bold text-gray-800 mb-5">
          Missing Skills
        </h2>

        {(data.missing_skills ?? []).length === 0 ? (

          <div className="bg-green-100 text-green-700 p-4 rounded-lg">
            <p className="font-semibold">
              🎉 Excellent!
            </p>

            <p>
              No major skill gaps found.
            </p>
          </div>

        ) : (

          <div className="flex flex-wrap gap-3">

            {(data.missing_skills ?? []).map((skill: string) => (

              <span
                key={skill}
                className="bg-red-100 text-red-700 px-4 py-2 rounded-full"
              >
                {skill}
              </span>

            ))}

          </div>

        )}

      </div>

      {/* Learning Roadmap */}

      <div className="bg-white rounded-xl shadow p-6 mt-8">

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Learning Roadmap
        </h2>

        {(data.roadmap ?? []).length === 0 ? (

          <div className="bg-blue-50 p-5 rounded-lg">

            <p className="font-semibold text-blue-700">
              Recommended Next Steps
            </p>

            <ul className="list-disc ml-5 mt-3 text-gray-700 space-y-2">
              <li>Build portfolio projects</li>
              <li>Contribute to GitHub</li>
              <li>Practice DSA</li>
              <li>Apply for internships</li>
            </ul>

          </div>

        ) : (

          <div className="space-y-6">

            {(data.roadmap ?? []).map(
              (step: string, index: number) => (

                <div
                  key={index}
                  className="flex gap-4 items-start"
                >

                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

                    {index + 1}

                  </div>

                  <div>

                    <h3 className="font-semibold">
                      Week {index + 1}
                    </h3>

                    <p className="text-gray-600">
                      {step}
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        )}

      </div>

      {/* Alternative Careers */}

      <div className="bg-white rounded-xl shadow p-6 mt-8">

        <h2 className="text-2xl font-bold text-gray-800 mb-5">
          Alternative Careers
        </h2>

        <div className="flex flex-wrap gap-3">

          {(data.alternative_careers ?? []).map(
            (career: string) => (

              <span
                key={career}
                className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium"
              >
                {career}
              </span>

            )
          )}

        </div>

      </div>

    </main>
  );
}