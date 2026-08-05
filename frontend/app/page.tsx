import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl p-10">

        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-600">
            NEXA
          </h1>

          <p className="mt-4 text-xl text-gray-700">
            AI-Powered Career Roadmap Generator
          </p>

          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Upload your resume, analyze your skills, discover your career
            readiness, identify skill gaps, and receive a personalized learning
            roadmap powered by AI.
          </p>

          <Link href="/upload">
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition">
              Get Started
            </button>
          </Link>
        </div>

        {/* Features */}

        <div className="grid md:grid-cols-3 gap-6 mt-14">

          <div className="bg-slate-50 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              📄 Resume Analysis
            </h3>

            <p className="text-gray-600 mt-3">
              Extract technical skills automatically from your resume.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              🎯 Career Readiness
            </h3>

            <p className="text-gray-600 mt-3">
              Compare your skills against your target career and calculate your
              readiness score.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              🚀 Learning Roadmap
            </h3>

            <p className="text-gray-600 mt-3">
              Receive a personalized week-by-week roadmap to improve your skills.
            </p>
          </div>

        </div>

        {/* How it Works */}

        <div className="mt-14">

          <h2 className="text-3xl font-bold text-center text-gray-800">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-8 text-center">

            <div className="bg-blue-50 rounded-xl p-5">
              <div className="text-4xl">📤</div>
              <h3 className="font-semibold mt-3">Upload Resume</h3>
            </div>

            <div className="bg-blue-50 rounded-xl p-5">
              <div className="text-4xl">🧠</div>
              <h3 className="font-semibold mt-3">Analyze Skills</h3>
            </div>

            <div className="bg-blue-50 rounded-xl p-5">
              <div className="text-4xl">📊</div>
              <h3 className="font-semibold mt-3">View Readiness</h3>
            </div>

            <div className="bg-blue-50 rounded-xl p-5">
              <div className="text-4xl">🗺️</div>
              <h3 className="font-semibold mt-3">Get Roadmap</h3>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}