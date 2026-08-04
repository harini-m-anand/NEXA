def calculate_confidence(
    detected_skills,
    inferred_skills
):

    score = 70

    score += min(len(detected_skills) * 2, 20)

    score += min(
        len(inferred_skills) - len(detected_skills),
        10
    )

    return min(score, 100)