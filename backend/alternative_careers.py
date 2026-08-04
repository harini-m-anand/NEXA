import json


def find_alternative_careers(user_skills):

    with open(
        "data/career_skills.json",
        "r"
    ) as f:

        careers = json.load(f)

    results = []

    for career, skills in careers.items():

        matches = 0

        for skill in skills:

            if skill in user_skills:
                matches += 1

        score = round(
            matches / len(skills) * 100,
            2
        )

        results.append({
            "career": career,
            "score": score
        })

    results.sort(
        key=lambda x: x["score"],
        reverse=True
    )

    return results[:3]