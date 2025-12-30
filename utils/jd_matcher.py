ROLE_SKILLS = {
    "frontend": [
        "html", "css", "javascript", "react", "typescript",
        "tailwind", "redux", "next.js", "api", "ui", "ux"
    ],
    "backend": [
        "python", "java", "node", "express", "flask",
        "django", "sql", "mongodb", "api"
    ],
    "cloud": [
        "aws", "ec2", "s3", "iam", "docker",
        "kubernetes", "linux", "terraform"
    ],
}

def extract_jd_skills(jd_text, role):
    jd_text = jd_text.lower()
    role = role.lower()

    skills = ROLE_SKILLS.get(role, [])
    extracted = []

    for skill in skills:
        if skill in jd_text:
            extracted.append(skill)

    return list(set(extracted))


def calculate_jd_score(resume_skills, jd_skills):
    if not jd_skills:
        return 0

    matched = set(resume_skills).intersection(set(jd_skills))
    score = int((len(matched) / len(jd_skills)) * 100)

    return score, list(matched)
