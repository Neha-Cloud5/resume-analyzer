ROLE_SKILLS = {
    "frontend": ["html", "css", "javascript", "react", "typescript", "tailwind"],
    "backend": ["python", "java", "node", "express", "django", "sql"],
    "cloud": ["aws", "ec2", "s3", "docker", "linux", "terraform"],
    "data": ["python", "sql", "pandas", "numpy", "excel"]
}

def match_skills(resume_text, role):
    resume_text = resume_text.lower()
    required_skills = ROLE_SKILLS.get(role, [])

    matched = [skill for skill in required_skills if skill in resume_text]
    missing = [skill for skill in required_skills if skill not in resume_text]

    return matched, missing


