def generate_feedback(skills):

    feedback = []

    skills_lower = [s.lower() for s in skills]

    if "python" in skills_lower:
        feedback.append("✅ Strong Python programming skills.")

    else:
        feedback.append("⚠ Add Python projects to strengthen your resume.")

    if "sql" not in skills_lower:
        feedback.append("⚠ Learn SQL for better employability.")

    if "git" not in skills_lower:
        feedback.append("⚠ Add Git/GitHub experience.")

    if "machine learning" not in skills_lower:
        feedback.append("⚠ Learn Machine Learning fundamentals.")

    feedback.append("💡 Include measurable achievements in your projects.")

    feedback.append("💡 Keep your resume limited to one page.")

    return feedback