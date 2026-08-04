"use client";

import { useState } from "react";
import { analyzeResume } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function UploadCard() {

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleUpload() {

    if (!file) return;

    try {

      setLoading(true);

      const result = await analyzeResume(file);

      localStorage.setItem(
        "analysis",
        JSON.stringify(result)
      );

      router.push("/results");

    } catch (err) {

      alert("Analysis failed");

    } finally {

      setLoading(false);

    }
  }

  return (

    <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg mx-auto">

      <h2 className="text-2xl font-bold mb-6">
        Upload Resume
      </h2>

      <input

        type="file"
        accept=".pdf"

        onChange={(e) => {

          if (e.target.files)
            setFile(e.target.files[0]);

        }}

      />

      {file && (

        <p className="mt-4 text-green-600">

          Selected:

          {" "}

          {file.name}

        </p>

      )}

      <button

        onClick={handleUpload}

        disabled={loading}

        className="mt-8 w-full bg-blue-600 text-white py-3 rounded-xl"

      >

        {loading

          ? "Analyzing..."

          : "Analyze Resume"}

      </button>

    </div>
  );
}