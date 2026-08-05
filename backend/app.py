from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import traceback
from datetime import datetime

from resume_parser import extract_text
from skill_extractor import extract_skills
from career_similarity import predict_career
from gap_analyzer import find_skill_gap
from roadmap_generator import generate_roadmap
from resume_summary import generate_summary
from feedback_engine import generate_feedback
from skill_category import categorize

app = FastAPI(title="NEXA API")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "NEXA Backend Running"
    }


@app.post("/analyze")
async def analyze(
    resume: UploadFile = File(...),
    career: str = Form(...)
):

    try:

        # Read resume
        text = extract_text(resume.file)

        # Extract skills
        skills = extract_skills(text)

        # Predict similarity score
        _, score = predict_career(skills)

        # Skill Gap
        missing = find_skill_gap(career, skills)

        # Learning roadmap
        roadmap = generate_roadmap(missing)
        feedback = generate_feedback(skills)

        # AI Summary
        summary = generate_summary(skills, score)

        # Skill Categories
        categories = categorize(skills)

        return {
            "feedback": feedback,

            "career": career,

            "skills": skills,

            "skill_categories": categories,

            "summary": summary,

            "readiness_score": score,

            "missing_skills": missing,

            "roadmap": roadmap,

            "analysis_date": datetime.now().strftime("%d %B %Y"),

            "alternative_careers": [

                "Machine Learning Engineer",

                "Data Scientist",

                "Backend Developer"
                

            ]

        }

    except Exception as e:

        traceback.print_exc()

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )