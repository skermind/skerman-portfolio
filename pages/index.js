import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import SidebarLayout from "@/components/SidebarLayout";

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
      <div
        className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
      >
        <main className="flex flex-col gap-[32px] row-start-2 items-center">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm Daniel Skerman
          </h1>
          <p className="text-lg mb-6 text-center max-w-xl font-sans">
            I'm a mathematics student working in data.
            <br />
            Welcome to my portfolio!
          </p>
          <div className="flex gap-4">
            <a
              href="/projects"
              className="bg-gradient-to-br from-green-500 to-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:from-green-400 hover:to-green-500 transition-all duration-200 font-medium"
            >
              View Projects
            </a>
            <a
              href="/about"
              className="bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-600 transition-all duration-200 font-medium border border-gray-600"
            >
              About Me
            </a>
          </div>
        </main>
      </div>
    </SidebarLayout>
  );
}
