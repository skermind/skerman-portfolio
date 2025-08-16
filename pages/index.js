import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import SidebarLayout from "@/components/SidebarLayout";
import { useEffect, useRef } from "react";

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
      <div className="relative min-h-screen flex items-center justify-center p-8 bg-gradient-to-b from-[#0f1117] to-[#1a1c22]">
        {/* Hero content */}
        <div className="max-w-4xl text-center space-y-6 relative z-10">
          <h1 className="text-5xl font-bold text-[#1DB954] drop-shadow-lg">
            Hi, I’m Daniel Skerman
          </h1>
          <p className="text-lg text-[#fcffe9] max-w-xl mx-auto">
            I’m a mathematics student working in data.<br />
            Welcome to my portfolio!
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center mt-4">
            <a
              href="/projects"
              className="bg-black text-[#fcffe9] px-6 py-3 rounded-xl transition hover:bg-[#1DB954] hover:text-[#fcffe9]"
            >
              View Projects
            </a>
            <a
              href="mailto:you@example.com"
              className="bg-black text-[#fcffe9] px-6 py-3 rounded-xl transition hover:bg-[#1DB954] hover:text-[#fcffe9]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}