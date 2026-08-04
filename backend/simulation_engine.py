def simulate_future_score(
    current_skills,
    required_skills,
    new_skills
):

    if len(required_skills) == 0:
        return 0

    future_skills = current_skills + new_skills

    matched = 0

    for skill in required_skills:

        if skill in future_skills:
            matched += 1

    score = (matched / len(required_skills)) * 100

    return round(score, 2)