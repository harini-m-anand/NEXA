from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware

from resume_parser import extract_text
from skill_extractor import extract_skills
from career_similarity import predict_career
from gap_analyzer import find_skill_gap
from roadmap_generator import generate_roadmap

app = FastAPI(title="NEXA API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/analyze")
async def analyze(
    resume: UploadFile = File(...),
    career: str = Form(...)
):
    text = extract_text(resume.file)

    skills = extract_skills(text)

    # Calculate score using existing logic
    _, score = predict_career(skills)

    # Use the career selected by the user
    missing = find_skill_gap(career, skills)

    roadmap = generate_roadmap(missing)

    return {
        "career": career,
        "skills": skills,
        "readiness_score": score,
        "missing_skills": missing,
        "roadmap": roadmap,
        "alternative_careers": [
            "Machine Learning Engineer",
            "Data Scientist",
            "Backend Developer"
        ]
    }