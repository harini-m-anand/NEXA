CAREERS = {

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


def predict_career(skills):

    best_career = ""

    best_score = 0

    for career, required in CAREERS.items():

        matched = len(set(required) & set(skills))

        score = int((matched / len(required)) * 100)

        if score > best_score:

            best_score = score

            best_career = career

    return best_career, best_score
CAREER_SKILLS = {

    "AI Engineer":[
        "Python",
        "Machine Learning",
        "Deep Learning",
        "Tensorflow",
        "Pytorch",
        "Nlp"
    ],

    "Machine Learning Engineer":[
        "Python",
        "Machine Learning",
        "Tensorflow",
        "Pytorch"
    ],

    "Data Scientist":[
        "Python",
        "Pandas",
        "Numpy",
        "Sql"
    ],

    "Backend Developer":[
        "Python",
        "Fastapi",
        "Git",
        "Sql"
    ],

    "Full Stack Developer":[
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Git"
    ],

    "Data Analyst":[
        "Python",
        "SQL",
        "Excel",
        "Power BI"
    ],

    "NLP Engineer":[
        "Python",
        "NLP",
        "Transformers",
        "Pytorch"
    ]

}