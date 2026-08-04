const API_URL = "http://127.0.0.1:8000";

export async function analyzeResume(
  file: File,
  career: string
) {
  const formData = new FormData();

  formData.append("resume", file);
  formData.append("career", career);

  const response = await fetch(`${API_URL}/analyze`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Analysis failed");
  }

  return response.json();
}