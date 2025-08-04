import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

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
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-4xl font-bold mb-4">
          Hi, I’m Daniel Skerman
        </h1>
        <p className="text-lg mb-6 text-center max-w-xl font-sans">
          I’m a mathematics student working in data.
          <br />
          Welcome to my portfolio!
        </p>
        <div className="flex gap-4">
          <a
            href="/projects"
            className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            View Projects
          </a>
          <a
            href="mailto:you@example.com"
            className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
      </main>
    </div>
  );
}