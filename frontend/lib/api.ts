const API_URL = "http://127.0.0.1:8000";

export async function analyzeResume(
  file: File,
  career: string
) {

  const formData = new FormData();

  formData.append("resume", file);

  formData.append("career", career);

  try {

    const response = await fetch(`${API_URL}/analyze`, {

      method: "POST",

      body: formData,

    });

    const data = await response.text();

    console.log("Backend Response:");

    console.log(data);

    if (!response.ok) {

      throw new Error(data);

    }

    return JSON.parse(data);

  }

  catch (error) {

    console.error("API Error:", error);

    throw error;

  }

}