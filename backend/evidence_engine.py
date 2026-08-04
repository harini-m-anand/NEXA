def generate_evidence(
    missing_skills,
    career_goal="Career"
):

    evidence = []

    explanations = {

        "SQL":
        "SQL is needed for querying datasets and building AI pipelines.",

        "FastAPI":
        "FastAPI is widely used for deploying AI and ML applications.",

        "Git":
        "Git is required for version control and team collaboration."
    }

    for skill in missing_skills:

        evidence.append({

            "skill": skill,

            "reason":
            explanations.get(
                skill,
                f"{skill} is important for {career_goal}"
            )
        })

    return evidence