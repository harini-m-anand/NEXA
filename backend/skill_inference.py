SKILL_RELATIONS = {

    "GitHub": ["Git"],

    "FastAPI": ["Python"],

    "RAG": ["NLP"],

    "NLP": ["Machine Learning"],

    "Machine Learning": ["Python"],

    "Embeddings": ["NLP"],

    "Semantic Search": ["NLP"],

    "Vector Databases": ["RAG"]
}


def infer_skills(detected_skills):

    final_skills = set(detected_skills)

    for skill in detected_skills:

        if skill in SKILL_RELATIONS:

            related_skills = SKILL_RELATIONS[skill]

            for related in related_skills:
                final_skills.add(related)

    return list(final_skills)