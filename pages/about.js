import { Geist, Geist_Mono } from 'next/font/google';
import SidebarLayout from "@/components/SidebarLayout";

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export default function About() {
  return (
    <SidebarLayout>
        <main className={`${geistSans.className} ${geistMono.className} min-h-screen bg-[#0f1117] text-[#fcffe9] p-8`}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-start md:gap-12">
            {/* Photo & Skills Sidebar */}
            <div className="flex-shrink-0 md:sticky md:top-8">
            <img 
                src="/images/daniel.png" 
                alt="Daniel Skerman" 
                className="w-40 h-40 rounded-full border-4 border-[#1DB954] object-cover shadow-lg"
            />

            {/* Skills grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                { src: "/images/MathsLogo.svg", label: "Maths" },
                { src: "/images/PythonLogo.svg", label: "Python" },
                { src: "/images/SqlLogo.svg", label: "SQL" },
                { src: "/images/CSharpLogo.svg", label: "C#" },
                ].map((skill, idx) => (
                <div key={idx} className="relative w-16 h-16 flex items-center justify-center group">
                    <img src={skill.src} alt={`${skill.label} Logo`} className="w-10 h-10 object-contain" />
                    <span className="absolute top-full mt-1 opacity-0 group-hover:opacity-100 transition bg-[#1DB954] text-black text-xs rounded px-2 py-1 pointer-events-none shadow-md">
                    {skill.label}
                    </span>
                </div>
                ))}
            </div>
            </div>

            {/* Content Sections */}
            <div className="flex-1 space-y-10">
            <h1 className="text-5xl font-bold">About Me</h1>

            {/* Background Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-[#1DB954] mb-4">Background</h2>
              <p className="leading-relaxed text-gray-100">
                Hello! I'm <strong>Daniel Skerman</strong>, an aspiring mathematician and data analyst with a love for coding and problem-solving. Originally from The West Midlands, I grew up understanding the value of perseverance and curiosity, which has shaped my approach to both learning and work.
              </p>
            </section>

            {/* Education Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-[#1DB954] mb-4">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">MSc in Mathematics</h3>
                  <p className="text-sm text-gray-400">Cardiff University (In Progress)</p>
                  <p className="leading-relaxed text-gray-100 mt-2">
                    Pursuing advanced mathematical knowledge and contributing to meaningful projects.
                  </p>
                </div>
                <div className="border-t border-gray-600 pt-4">
                  <h3 className="font-semibold text-lg">BSc in Mathematics with First-Class Honours</h3>
                  <p className="text-sm text-gray-400">Aberystwyth University</p>
                  <p className="leading-relaxed text-gray-100 mt-2">
                    Developed strong interest in applied mathematics, statistics, and computing during my studies.
                  </p>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-[#1DB954] mb-4">Professional Experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Data Analyst</h3>
                  <p className="text-sm text-gray-400">LGIM</p>
                </div>
                <div className="border-t border-gray-600 pt-4">
                  <h3 className="font-semibold text-lg">Fraud Data Analyst</h3>
                  <p className="text-sm text-gray-400">Admiral Insurance</p>
                </div>
              </div>
              <p className="leading-relaxed text-gray-100 mt-6">
                Applied mathematical and programming skills in real-world scenarios, using tools like <strong>SQL</strong>, <strong>Python</strong>, and <strong>Tableau</strong>. Also built personal coding projects including this portfolio website and <strong>PosterToPlaylist</strong>.
              </p>
            </section>

            {/* Interests Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-[#1DB954] mb-4">Interests & Goals</h2>
              <p className="leading-relaxed text-gray-100 mb-4">
                Outside of work, I enjoy cycling, playing guitar, and losing at Magic: The Gathering 😉.
              </p>
              <p className="leading-relaxed text-gray-100">
                My goal is to pursue a mathematically rigorous career, whether in academia or applied industries like engineering and aerospace.
              </p>
            </section>
            </div>
        </div>
        </main>
    </SidebarLayout>
  );
}
