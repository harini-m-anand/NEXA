def explain_missing_skills(
    missing_skills
):

    explanations = {

        "SQL":
        "You have AI skills but lack database querying skills.",

        "FastAPI":
        "You have ML knowledge but no deployment framework detected.",

        "Git":
        "Version control experience was not detected."
    }

    result = []

    for skill in missing_skills:

        result.append({

            "skill": skill,

            "explanation":
            explanations.get(
                skill,
                "Skill not detected in resume."
            )
        })

    return result