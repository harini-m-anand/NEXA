"use client";

import { useEffect, useState } from "react";

export default function ResultsPage() {

  const [data, setData] = useState<any>(null);

  useEffect(() => {

    const stored = localStorage.getItem("analysis");

    if (stored) {

      try {

        const parsed = JSON.parse(stored);

        console.log("Loaded Analysis:", parsed);

        setData(parsed);

      }

      catch (error) {

        console.error(error);

      }

    }

  }, []);

  if (!data) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-slate-100">

        <h1 className="text-2xl font-semibold">

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

          <p className="text-gray-500">

            Career Goal

          </p>

          <h2 className="text-3xl font-bold text-blue-600 mt-2">

            {data.career}

          </h2>

        </div>

        <div className="bg-white rounded-xl shadow p-6">

          <p className="text-gray-500">

            Readiness Score

          </p>

          <div className="w-full bg-gray-200 rounded-full h-4 mt-4">

            <div

              className="bg-blue-600 h-4 rounded-full"

              style={{

                width: `${data.readiness_score}%`

              }}

            />

          </div>

          <p className="text-3xl font-bold mt-4 text-gray-800">

            {data.readiness_score}%

          </p>

        </div>

      </div>

      {/* Resume Summary */}

      <div className="bg-white rounded-xl shadow p-6 mt-8">

        <h2 className="text-2xl font-bold text-gray-800">

          Professional Summary

        </h2>

        <p className="mt-4 text-gray-700 leading-8">

          {data.summary}

        </p>

      </div>

      {/* Skills */}

      <div className="bg-white rounded-xl shadow p-6 mt-8">

        <h2 className="text-2xl font-bold text-gray-800">

          Extracted Skills

        </h2>

        <div className="flex flex-wrap gap-3 mt-6">

          {data.skills.map((skill: string) => (

            <span

              key={skill}

              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"

            >

              {skill}

            </span>

          ))}

        </div>

      </div>

      {/* Missing Skills */}

      <div className="bg-white rounded-xl shadow p-6 mt-8">

        <h2 className="text-2xl font-bold text-gray-800">

          Missing Skills

        </h2>

        <div className="flex flex-wrap gap-3 mt-6">

          {data.missing_skills.length === 0 ?

            <p className="text-green-600">

              Excellent!

              No major skill gaps found.

            </p>

            :

            data.missing_skills.map((skill: string) => (

              <span

                key={skill}

                className="bg-red-100 text-red-700 px-4 py-2 rounded-full"

              >

                {skill}

              </span>

            ))

          }

        </div>

      </div>

      {/* Learning Roadmap */}

      <div className="bg-white rounded-xl shadow p-6 mt-8">

        <h2 className="text-2xl font-bold text-gray-800">

          Learning Roadmap

        </h2>

        <div className="mt-8 space-y-6">

          {data.roadmap.map((step: string, index: number) => (

            <div

              key={index}

              className="flex gap-4"

            >

              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex justify-center items-center">

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

          ))}

        </div>

      </div>
            {/* Skill Categories */}

      {data.skill_categories && (

        <div className="bg-white rounded-xl shadow p-6 mt-8">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">

            Skill Categories

          </h2>

          <div className="space-y-6">

            {Object.entries(data.skill_categories).map(

              ([category, skills]: any) => (

                <div key={category}>

                  <h3 className="font-semibold text-lg text-blue-700">

                    {category}

                  </h3>

                  <div className="flex flex-wrap gap-3 mt-3">

                    {skills.length === 0 ? (

                      <span className="text-gray-400">

                        No skills

                      </span>

                    ) : (

                      skills.map((skill: string) => (

                        <span

                          key={skill}

                          className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full"

                        >

                          {skill}

                        </span>

                      ))

                    )}

                  </div>

                </div>

              )

            )}

          </div>

        </div>

      )}

      {/* Alternative Careers */}

      <div className="bg-white rounded-xl shadow p-6 mt-8">

        <h2 className="text-2xl font-bold text-gray-800 mb-5">

          Alternative Careers

        </h2>

        <div className="flex flex-wrap gap-3">

          {data.alternative_careers.map(

            (career: string) => (

              <span

                key={career}

                className="bg-green-100 text-green-700 px-4 py-2 rounded-full"

              >

                {career}

              </span>

            )

          )}

        </div>

      </div>

      {/* AI Resume Feedback */}

      <div className="bg-white rounded-xl shadow p-6 mt-8">

        <h2 className="text-2xl font-bold text-gray-800 mb-6">

          AI Resume Feedback

        </h2>

        <div className="space-y-4">

          {(data.feedback ?? []).length === 0 ? (

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">

              No feedback available.

            </div>

          ) : (

            data.feedback.map(

              (item: string, index: number) => (

                <div

                  key={index}

                  className="bg-slate-100 border-l-4 border-blue-600 rounded-lg p-4"

                >

                  {item}

                </div>

              )

            )

          )}

        </div>

      </div>

      {/* Analysis Date */}

      {data.analysis_date && (

        <div className="text-center text-gray-500 mt-8">

          Analysis completed on

          <span className="font-semibold">

            {" "}

            {data.analysis_date}

          </span>

        </div>

      )}

    </main>

  );

}