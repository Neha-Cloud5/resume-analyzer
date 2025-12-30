from flask import Flask, request, jsonify
from flask_cors import CORS

from utils.resume_parser import extract_text_from_pdf
from utils.skill_matcher import match_skills, ROLE_SKILLS
from utils.jd_matcher import extract_jd_skills, calculate_jd_score

app = Flask(__name__)
CORS(app)


@app.route("/analyze", methods=["POST"])
def analyze_resume():
    file = request.files.get("resume")
    role = request.form.get("role")
    jd_text = request.form.get("jobDescription", "")

    if not file or not role:
        return jsonify({"error": "Resume and role are required"}), 400

    # Extract resume text
    resume_text = extract_text_from_pdf(file)

    # Role-based skills
    matched_skills, missing_skills = match_skills(resume_text, role)

    # Suggestions = missing role skills
    suggestions = missing_skills

    return jsonify({
        "role": role,
        "matchedSkills": matched_skills,
        "missingSkills": missing_skills,
        "suggestions": suggestions
    })


if __name__ == "__main__":
    app.run(debug=True)
