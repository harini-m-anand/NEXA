def generate_summary(skills, score):
    strengths = ", ".join(skills[:5])

    if score >= 80:
        level = "Highly prepared for internships."
    elif score >= 60:
        level = "Good foundation with room for improvement."
    else:
        level = "Needs more learning before applying."

    return (
        f"The candidate demonstrates knowledge in {strengths}. "
        f"{level}"
    )