"use client";

import { useRef, useState } from "react";
import { FileText, Upload } from "lucide-react";
import { analyzeResume } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function UploadCard() {
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [career, setCareer] = useState("AI Engineer");
  const [loading, setLoading] = useState(false);
<div className="mt-6">

  <label className="block font-semibold text-gray-700 mb-2">

    Target Career

  </label>

  <select

    value={career}

    onChange={(e)=>setCareer(e.target.value)}

    className="w-full border rounded-lg p-3"

  >

    <option>AI Engineer</option>

    <option>Machine Learning Engineer</option>

    <option>Data Scientist</option>

    <option>Backend Developer</option>

    <option>Full Stack Developer</option>

    <option>Data Analyst</option>

    <option>NLP Engineer</option>

  </select>

</div>
  async function handleAnalyze() {
    if (!file) {
      alert("Please select a PDF resume.");
      return;
    }

    try {
      setLoading(true);

      const result = await analyzeResume(
  file,
  career
);

      localStorage.setItem(
        "analysis",
        JSON.stringify(result)
      );

      router.push("/results");
    } catch (err) {
      alert("Failed to analyze resume.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-center text-gray-800">
        Upload Resume
      </h2>

      <p className="text-center text-gray-500 mt-2">
        Upload your resume in PDF format.
      </p>

      <div
        onClick={() => inputRef.current?.click()}
        className="mt-8 border-2 border-dashed border-blue-400 rounded-xl p-10 cursor-pointer hover:bg-blue-50 transition"
      >

        <div className="flex justify-center">

          <Upload size={55} className="text-blue-600" />

        </div>

        <p className="mt-4 text-center font-semibold text-gray-700">

          Drag & Drop Resume

        </p>

        <p className="text-center text-gray-500">

          or click to browse

        </p>

      </div>

      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        hidden
        onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
      />

      {file && (

        <div className="mt-6 flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg p-3">

          <FileText className="text-green-600" />

          <div>

            <p className="font-medium text-gray-800">

              {file.name}

            </p>

            <p className="text-sm text-green-600">

              Ready to analyze

            </p>

          </div>

        </div>

      )}

      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
      >

        {loading ? "Analyzing..." : "Analyze Resume"}

      </button>

    </div>
  );
}