import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Smart Resume Analyzer with Job Description Matching & Improvement Suggestions" },
    {
      name: "description",
      content: "Analyze your resume against job descriptions and get improvement suggestions.",
    },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat">
      <Navbar />
      <section className="main-section">
        <div className="page-heading text-center text-black px-4">
          <h1 className="text-16xl font-bold mb-4">Smart Resume Analyzer</h1>
          <p className="text-lg">
            Analyze your resume against job descriptions and get improvement suggestions.
          </p>
        </div>
      </section>
    </main>
  );
}
