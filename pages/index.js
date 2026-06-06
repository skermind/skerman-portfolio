import { Geist, Geist_Mono } from "next/font/google";
import SidebarLayout from "@/components/SidebarLayout";
import { ArrowRight, FileText } from "lucide-react"; // Add these icons for polish
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <SidebarLayout>
      <main className={`${geistSans.className} ${geistMono.className} min-h-screen bg-[#0f1117] text-[#fcffe9] flex items-center justify-center p-8`}>
        <div className="max-w-3xl w-full text-center space-y-8">
          
          {/* Greeting & Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Hi, I&apos;m <span className="text-[#1DB954]">Daniel Skerman</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 font-medium">
              Finance Data Engineer & MSc Mathematics Candidate
            </h2>
          </div>

          {/* Value Proposition / Bio */}
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Welcome to my portfolio where I document my projects and technical ramblings.
            <span className="block mt-2 text-[#fcffe9] font-medium">
              Currently writing a dissertation on the Direct Method of Calculus of Variations, while continuing my technical growth
              </span>
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link
            href="/projects"
            className="group flex items-center gap-2 bg-[#1DB954] text-black px-8 py-3.5 rounded-lg font-semibold shadow-lg hover:bg-[#1ed760] hover:shadow-[0_0_20px_rgba(29,185,84,0.4)] transition-all duration-200"
          >
            View Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 bg-gray-800 text-[#fcffe9] px-8 py-3.5 rounded-lg font-semibold border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all duration-200"
            >
              About Me
            </Link>
          <Link
            href="/cv"
            className="flex items-center gap-2 text-gray-400 hover:text-[#1DB954] transition-colors duration-200 font-medium mt-2 sm:mt-0"
          >
            <FileText className="w-4 h-4" />
            View CV
          </Link>
          </div>

          {/* Subtle Status Indicator */}
          <div className="pt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 rounded-full bg-[#1DB954] animate-pulse"></span>
            Open to opportunities in Software Enigeering, Quantitative Finance & Data Science
          </div>

        </div>
      </main>
    </SidebarLayout>
  );
}