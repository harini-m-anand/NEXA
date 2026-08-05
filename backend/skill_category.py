def categorize(skills):

    categories = {
        "Programming": [],
        "AI / ML": [],
        "Database": [],
        "Tools": []
    }

    for skill in skills:

        s = skill.lower()

        if s in ["python","c","java"]:
            categories["Programming"].append(skill)

        elif s in ["machine learning","deep learning","nlp"]:
            categories["AI / ML"].append(skill)

        elif s in ["mysql","sql","neo4j"]:
            categories["Database"].append(skill)

        else:
            categories["Tools"].append(skill)

    return categories