def calculate_score(matched_skills, total_skills):
    if total_skills == 0:
        return 0
    return int((len(matched_skills) / total_skills) * 100)
