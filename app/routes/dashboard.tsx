import { useState } from "react";
import { FaHome, FaFileUpload } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const navigate = useNavigate();

  const [file, setFile] = useState<File | null>(null);
  const [role, setRole] = useState("");
  const [jd, setJd] = useState("");

  const handleSubmit = async () => {
    if (!file || !role || !jd) {
      alert("Please upload resume, select role and add job description");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("role", role);
    formData.append("job_description", jd);

    const res = await fetch("http://127.0.0.1:5000/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    navigate("/result", { state: data });
  };

  return (
    <main className="min-h-screen bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat">
      
      {/* Home Icon */}
      <div className="p-6">
        <FaHome
          onClick={() => navigate("/")}
          className="text-3xl cursor-pointer text-black hover:text-blue-600"
        />
      </div>

      <section className="flex justify-center items-center px-4">
        <div className="w-full max-w-3xl bg-white bg-opacity-85 rounded-xl shadow-xl p-8">

          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-3">
              Upload Resume
            </h2>
            <p className="text-gray-700">
              Analyze your resume against job description
            </p>
          </div>

          {/* Role */}
          <div className="mb-5">
            <label className="font-semibold block mb-2">Target Role</label>
            <select
              className="w-full border rounded-md p-2"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select role</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="cloud">Cloud / DevOps</option>
              <option value="data">Data Analyst</option>
            </select>
          </div>

          {/* JD */}
          <div className="mb-5">
            <label className="font-semibold block mb-2">Job Description</label>
            <textarea
              rows={4}
              className="w-full border rounded-md p-2"
              value={jd}
              onChange={(e) => setJd(e.target.value)}
              placeholder="Paste job description here"
            />
          </div>

          {/* Resume Upload */}
          <div className="mb-6">
            <label className="font-semibold block mb-2">Upload Resume (PDF)</label>

            <label
              htmlFor="resume-upload"
              className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer block hover:border-blue-500"
            >
              <FaFileUpload className="mx-auto text-3xl text-blue-600 mb-2" />
              <p>{file ? file.name : "Click to upload resume"}</p>
            </label>

            <input
              id="resume-upload"
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
            />
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Analyze Resume
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
