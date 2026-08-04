ROADMAP = {

    "Python": "Practice Python fundamentals",

    "Machine Learning": "Learn Regression and Classification",

    "Deep Learning": "Learn Neural Networks using TensorFlow",

    "Tensorflow": "Build image classification projects",

    "Pytorch": "Implement CNN and RNN models",

    "Nlp": "Build sentiment analysis and chatbot projects",

    "Fastapi": "Develop REST APIs",

    "Sql": "Practice SQL queries and joins",

    "Git": "Learn Git branching and GitHub workflows",

    "Pandas": "Data cleaning and preprocessing",

    "Numpy": "Numerical computing basics"
}


def generate_roadmap(missing_skills):

    roadmap = []

    for skill in missing_skills:

        roadmap.append(
            ROADMAP.get(skill, f"Learn {skill}")
        )

    return roadmap