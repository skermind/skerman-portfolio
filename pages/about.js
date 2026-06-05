import { Geist, Geist_Mono } from 'next/font/google';
import SidebarLayout from "@/components/SidebarLayout";

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export default function About() {
  return (
    <SidebarLayout>
        <main className={`${geistSans.className} ${geistMono.className} min-h-screen bg-[#0f1117] text-[#fcffe9] p-8`}>
        <div className="max-w-4xl mx-auto space-y-6 flex flex-col md:flex-row md:items-start md:gap-8">
            {/* Photo & Skills */}
            <div className="flex-shrink-0">
            <img 
                src="/images/daniel.png" 
                alt="Daniel Skerman" 
                className="w-40 h-40 rounded-full border-4 border-[#1DB954] object-cover shadow-lg"
            />

            {/* Skills grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
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

            {/* Text */}
            <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>

            <p>
                Hello! I'm <strong>Daniel Skerman</strong>, an aspiring mathematician and data analyst with a love for coding and problem-solving. Originally from The West Midlands, I grew up understanding the value of perseverance and curiosity, which has shaped my approach to both learning and work. 
            </p>

            <p>
                My academic journey led me to Aberystwyth University, where I earned a <strong>BSc in Mathematics with First-Class Honours</strong>. During my studies, I developed a strong interest in applied mathematics, statistics, and computing, which I've carried into my professional career.
            </p>

            <p>
                Professionally, I have worked as a Fraud Data Analyst at Admiral Insurance and as a Data Analyst at LGIM. These roles allowed me to apply mathematical and programming skills in real-world scenarios, using tools like SQL, Python, and Tableau. I've also enjoyed building personal coding projects, including this portfolio website and <strong>PosterToPlaylist</strong>, which merge my interest in mathematics, data, and technology.
            </p>

            <p>
                Outside of work, I enjoy cycling, playing guitar, and losing at Magic: The Gathering 😉.
            </p>

            <p>
                I'm currently pursuing an MSc in Mathematics at Cardiff University, aiming to deepen my mathematical knowledge and contribute to meaningful projects. My goal is to pursue a mathematically rigorous career, whether in academia or applied industries like engineering and aerospace.
            </p>
            </div>
        </div>
        </main>
    </SidebarLayout>
  );
}
