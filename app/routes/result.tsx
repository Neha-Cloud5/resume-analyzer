import { Link, useLocation } from "react-router";
import { FaHome } from "react-icons/fa";

export default function Result() {
  const { state } = useLocation();

  if (!state) {
    return <p className="text-center mt-10">No result found</p>;
  }

  const { matchedSkills, jdScore, suggestions, role } = state;

  return (
    <main className="min-h-screen bg-[url('/images/bg.jpg')] bg-cover bg-center flex items-center justify-center relative">

      {/* Home Icon */}
      <Link to="/" className="absolute top-6 left-6 text-2xl">
        <FaHome />
      </Link>

      <section className="bg-white bg-opacity-90 p-10 rounded-xl shadow-xl w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Analysis Result</h2>

        <p className="mb-4">
          <strong>Target Role:</strong> {role}
        </p>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Matched Skills</h3>
          <ul className="list-disc ml-6">
            {matchedSkills.length > 0 ? (
              matchedSkills.map((s: string, i: number) => (
                <li key={i}>{s}</li>
              ))
            ) : (
              <li>No skills matched</li>
            )}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Suggestions to Improve</h3>
          <ul className="list-disc ml-6 text-red-600">
            {suggestions.map((s: string, i: number) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
