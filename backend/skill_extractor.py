SKILLS = [

    "python",
    "java",
    "c",
    "c++",

    "sql",
    "mysql",

    "fastapi",
    "flask",

    "tensorflow",
    "pytorch",

    "machine learning",
    "deep learning",

    "nlp",

    "git",

    "github",

    "docker",

    "neo4j",

    "streamlit",

    "pandas",

    "numpy",

    "opencv"

]


def extract_skills(text):

    found = []

    for skill in SKILLS:

        if skill in text:

            found.append(skill.title())

    return sorted(list(set(found)))