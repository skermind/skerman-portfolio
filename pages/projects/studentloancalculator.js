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

          <p className="mb-6">
            This page is a placeholder for the full Student Loan Calculator
            project write-up. I&apos;ll add architecture, calculations, and
            implementation details soon.
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
