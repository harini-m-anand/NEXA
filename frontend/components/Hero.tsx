"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <div className="text-center py-24">

      <h1 className="text-6xl font-bold text-blue-600">
        NEXA
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        AI Career Roadmap Generator
      </p>

      <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
        Upload your resume and receive AI-powered career analysis,
        skill gap detection, and a personalized learning roadmap.
      </p>

      <Link href="/upload">

        <button className="mt-10 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">

          Upload Resume

        </button>

      </Link>

    </div>
  );
}