def calculate_readiness(user_skills, required_skills):

    if len(required_skills) == 0:
        return 0

    matched = 0

    for skill in required_skills:

        if skill in user_skills:
            matched += 1

    score = (matched / len(required_skills)) * 100

    return round(score, 2)