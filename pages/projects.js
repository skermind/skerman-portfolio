import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Projects() {
  const projects = [
    {
      title: "PosterToPlaylist",
      description: "Scan festival posters and generate Spotify playlists.",
      link: "/postertoplaylistapp",
      linkText: "Launch App",
      moreInfo: "/projects/postertoplaylist",
      moreInfoText: "More Info",
      image: "/images/PosterToPlaylist.png",
    },
    {
      title: "Coming Soon",
      description: "Placeholder for my next project.",
      link: "#",
      linkText: "Preview",
      moreInfo: "#",
      moreInfoText: "Details",
      // no image property here or set image: null
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <main className={`${geistSans.className} ${geistMono.className} min-h-screen flex flex-col items-center justify-center p-8 bg-[#0f1117]`}>
      <h1 className="text-4xl font-bold mb-8 text-[#1DB954]">Projects</h1>
      <div className="relative w-full max-w-lg">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-[-3rem] top-1/2 -translate-y-1/2 p-2 bg-[#1DB954] text-black rounded-full hover:bg-[#17a84f] transition"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Project Card with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="bg-[#11141c] rounded-xl shadow-lg p-6 flex flex-col items-center min-h-[320px]"
          >
            {projects[index].image ? (
              <div className="relative w-full h-64 mb-4 bg-black rounded-md flex items-center justify-center">
                <Image
                  src={projects[index].image}
                  alt={projects[index].title}
                  fill
                  className="object-contain p-2 rounded-md"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center mb-6 w-full h-64 text-[#fcffe9] text-3xl font-semibold bg-black rounded-md">
                {projects[index].title}
              </div>
            )}

            <h2 className="text-2xl font-semibold mb-2 text-[#1DB954]">{projects[index].title}</h2>
            <p className="flex-grow text-center mb-4 text-[#fcffe9]">{projects[index].description}</p>

            <div className="mt-4 flex gap-3 w-full">
              <a
                href={projects[index].link}
                className="${geistSans.className} bg-[#1DB954] text-[#fcffe9] flex-1 text-center px-5 py-2 rounded-xl transition transform hover:scale-110 hover:bg-[#1DB954] hover:text-[#fcffe9]"
              >
                {projects[index].linkText}
              </a>
              <a
                href={projects[index].moreInfo}
                className="${geistSans.className} bg-black text-[#fcffe9] flex-1 text-center px-5 py-2 rounded-xl transition hover:bg-[#1DB954] hover:text-[#fcffe9]"
              >
                {projects[index].moreInfoText}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-[-3rem] top-1/2 -translate-y-1/2 p-2 bg-[#1DB954] text-black rounded-full hover:bg-[#17a84f] transition"
        >
          <ChevronRight size={28} />
        </button>
        <p className="text-[#fcffe9] mb-6 text-center">
          {index + 1} / {projects.length}
        </p>
      </div>
    </main>
  );
}