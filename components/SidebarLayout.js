import React, { useState } from "react";
import { Geist_Mono } from "next/font/google";
import { ChevronLeft, ChevronRight, Home, Grid, Info, Mail, FileText, ScrollText, Github, Linkedin  } from "lucide-react";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function SidebarLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: <Home size={18} /> },
    { href: "/about", label: "About", icon: <Info size={18} /> },
    { href: "/projects", label: "Projects", icon: <Grid size={18} /> },
    { href: "/cv", label: "CV", icon: <FileText size={18} /> },
    { href: "/transcripts", label: "Transcript", icon: <ScrollText size={18} /> }
  ];

  const socialLinks = [
  {
    href: "https://github.com/skermind",
    icon: <Github size={18} />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/daniel-skerman/",
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
  },
  {
    href: "mailto:danielskerman2000@gmail.com",
    icon: <Mail size={18} />,
    label: "Email",
  },
];

  const projectLinks = [
    { href: "/projects/postertoplaylist", label: "PosterToPlaylist" }
  ];

  return (
    <div className={`${geistMono.className} flex min-h-screen bg-[#0f1117] text-[#fcffe9]`}>
      {/* Sidebar */}
      <aside
        className={`sticky top-0 h-screen transition-all duration-300 bg-[#11141c] flex flex-col gap-6 overflow-hidden border-r border-gray-700 ${
          sidebarOpen ? "w-64 p-4 items-start" : "w-16 p-4 items-center"
        }`}
      >
        <button
          onClick={() => setSidebarOpen((open) => !open)}
          className="text-[#1DB954] p-2 hover:bg-[#1DB954]/10 rounded transition"
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
        </button>

        <nav className="flex flex-col gap-3 mt-4 w-full">
          {navLinks.map((link) => {
            if (link.label === "Projects") {
              return (
                <div key={link.href} className="flex flex-col w-full">
                  {sidebarOpen ? (
                    <>
                      <div className="flex items-center justify-between w-full">
                        <a
                          href={link.href}
                          className="flex items-center gap-2 px-2 py-1 w-full rounded hover:bg-[#1DB954]/20 hover:text-[#1DB954] transition"
                        >
                          {link.icon}
                          {link.label}
                        </a>
                        <button
                          onClick={() => setProjectsOpen(!projectsOpen)}
                          className="text-[#1DB954] px-2 py-1 rounded hover:bg-[#1DB954]/20 transition"
                          aria-label="Toggle projects dropdown"
                        >
                          {projectsOpen ? "-" : "+"}
                        </button>
                      </div>

                      {projectsOpen && (
                        <div className="ml-6 mt-2 flex flex-col gap-1">
                          {projectLinks.map((proj) => (
                            <a key={proj.href} href={proj.href} className="hover:text-[#1DB954] transition px-1 py-0.5 rounded text-sm">
                              {proj.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className="flex items-center justify-center w-full px-2 py-1 rounded hover:bg-[#1DB954]/20 hover:text-[#1DB954] transition"
                    >
                      {link.icon}
                    </a>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-2 py-1 rounded hover:bg-[#1DB954]/20 hover:text-[#1DB954] transition ${
                  sidebarOpen ? "justify-start" : "justify-center"
                }`}
              >
                {link.icon}
                {sidebarOpen && link.label}
              </a>
            );
          })}
        </nav>

        {/* Social Links */}
        <div className="mt-auto w-full flex flex-col gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-2 py-1 rounded hover:bg-[#1DB954]/20 hover:text-[#1DB954] transition ${
                sidebarOpen ? "justify-start" : "justify-center"
              }`}
            >
              {link.icon}
              {sidebarOpen && link.label}
            </a>
          ))}
        </div>

        {/* Footer */}
        {sidebarOpen && (
          <div className="text-sm text-gray-500 px-2 mt-4">
            &copy; 2026 Daniel Skerman
          </div>
        )}
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
