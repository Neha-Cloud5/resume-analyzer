ROLE_TECH = {
    "cloud": ["terraform", "kubernetes", "ci/cd"],
    "backend": ["system design", "redis", "docker"],
    "frontend": ["typescript", "next.js", "tailwind"],
    "data": ["pandas", "numpy", "power bi"]
}

def generate_suggestions(resume_skills, jd_skills, role):
    suggestions = []

    missing_jd = set(jd_skills) - set(resume_skills)
    for skill in missing_jd:
        suggestions.append(f"Consider learning {skill}")

    role = role.lower()
    if role in ROLE_TECH:
        for tech in ROLE_TECH[role]:
            if tech not in resume_skills:
                suggestions.append(f"Recommended for {role}: {tech}")

    if not suggestions:
        suggestions.append("No major gaps found 🎉")

    return suggestions
