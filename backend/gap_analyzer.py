CAREER_SKILLS = {
    "AI Engineer": [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "Tensorflow",
        "Pytorch",
        "Nlp"
    ],

    "Data Scientist": [
        "Python",
        "Pandas",
        "Numpy",
        "Machine Learning",
        "Sql"
    ],

    "Backend Developer": [
        "Python",
        "Fastapi",
        "Sql",
        "Git"
    ]
}


def find_skill_gap(career, user_skills):

    required = CAREER_SKILLS.get(career, [])

    missing = []

    for skill in required:
        if skill not in user_skills:
            missing.append(skill)

    return missing