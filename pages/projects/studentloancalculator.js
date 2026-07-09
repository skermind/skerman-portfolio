import { Geist, Geist_Mono } from "next/font/google";
import SidebarLayout from "@/components/SidebarLayout";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function StudentLoanCalculatorInfo() {
  return (
    <SidebarLayout>
      <main
        className={`${geistSans.className} ${geistMono.className} min-h-screen bg-[#0f1117] text-[#fcffe9] p-8`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <img
              src="/images/StudentLoanCalcuatorLogo.png"
              alt="Student Loan Calculator Logo"
              className="h-16 w-auto"
            />
            <h1 className="text-4xl font-bold text-[#1DB954]">
              Student Loan Calculator
            </h1>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <Link
              href="https://github.com/skermind/student-loan-calculator"
              className="text-[#1DB954] underline"
            >
              GitHub Repository
            </Link>
            <Link
              href="https://studentloancalculator.danielskerman.com/"
              className="text-[#1DB954] underline"
            >
              Live Site
            </Link>
          </div>

          <p className="mb-6">
            A financial mathematics web application that helps users understand
            the long-term cost of UK student loans and evaluate whether
            voluntary overpayments are worth making.
          </p>

          <p className="mb-6">
            I started by deriving analytical repayment formulas, validated the
            logic in Excel, and then implemented a Python numerical solver with
            an interactive web interface.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-[#1DB954]">
            Methodology
          </h2>
          <ol className="list-decimal list-inside mb-6 space-y-2">
            <li>
              <strong>Analytical maths first:</strong> repayment logic and
              payoff behaviour derived mathematically.
            </li>
            <li>
              <strong>Excel prototyping:</strong> formulas validated against
              interactions and edge cases.
            </li>
            <li>
              <strong>Python numerical solver:</strong> year-by-year simulation
              for flexible scenario analysis.
            </li>
          </ol>

          <h2 className="text-2xl font-semibold mb-3 text-[#1DB954]">
            Repayment Insights
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Baseline repayment path vs overpayment scenario comparison.</li>
            <li>Highlights when overpaying clears debt sooner.</li>
            <li>Shows total savings and cases where overpaying costs more.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3 text-[#1DB954]">
            Tech Stack
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Frontend: Next.js, React, TypeScript, Tailwind CSS</li>
            <li>Backend: FastAPI, Python</li>
            <li>Visualisation: Recharts, Chart.js</li>
            <li>Infrastructure: Docker, Docker Compose, Nginx, DigitalOcean</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3 text-[#1DB954]">
            Architecture
          </h2>
          <p className="mb-4">
            Domain -&gt; Nginx (SSL + reverse proxy) -&gt; Next.js frontend -&gt;
            FastAPI backend -&gt; JSON loan plan config + Python solver.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-[#1DB954]">
            API Endpoints
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              <code>POST /calculate</code> - yearly repayment projection
            </li>
            <li>
              <code>POST /calculate-summary</code> - aggregate totals
            </li>
            <li>
              <code>POST /calculate-overpayment</code> - overpayment comparison
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3 text-[#1DB954]">
            Why I Built It
          </h2>
          <p className="mb-6">
            The core question was: &quot;At what salary level does making
            voluntary student loan overpayments become worthwhile?&quot; The app
            is designed for transparent scenario analysis rather than claiming
            to predict the future.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-[#1DB954]">
            Try It Out
          </h2>
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/images/StudentLoanCalcuatorLogo.png"
              alt="Student Loan Calculator Roundel"
              className="h-10 w-10"
            />
            <Link
              href="https://studentloancalculator.danielskerman.com/"
              className="text-[#1DB954] underline"
            >
              studentloancalculator.danielskerman.com
            </Link>
          </div>
        </div>
      </main>
    </SidebarLayout>
  );
}
