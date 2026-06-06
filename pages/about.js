import { Geist, Geist_Mono } from 'next/font/google';
import SidebarLayout from "@/components/SidebarLayout";
import { FileText, ScrollText } from 'lucide-react';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export default function About() {
  return (
    <SidebarLayout>
        <main className={`${geistSans.className} ${geistMono.className} min-h-screen bg-[#0f1117] text-[#fcffe9] p-8 font-sans`}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-start md:gap-12">
            
        {/* Photo & Skills Sidebar */}
        <div className="flex-shrink-0 md:sticky md:top-8">
            {/* Profile Image */}
            <img 
                src="/images/daniel.png" 
                alt="Daniel Skerman" 
                className="w-40 h-40 rounded-full border-4 border-[#1DB954] object-cover shadow-lg"
            />

            {/* Skills grid: 2 columns, clean floating icons */}
            <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                    { src: "/images/MathsLogo.svg", label: "Maths" },
                    { src: "/images/PythonLogo.svg", label: "Python" },
                    { src: "/images/CSharpLogo.svg", label: "C#" },
                    { src: "/images/LaTeXLogo.svg", label: "LaTeX" }, 
                    { src: "/images/RLogo.svg", label: "R" },
                    { src: "/images/PostgresLogo.svg", label: "PostgreSQL" },
                    { src: "/images/DockerLogo.svg", label: "Docker" },
                    { src: "/images/ReactLogo.svg", label: "React" },
                    { src: "/images/GCPLogo.svg", label: "Google Cloud" },
                ].map((skill, idx) => (
                    <div key={idx} className="relative w-16 h-16 flex items-center justify-center group">
                        {/* Clean icon with subtle hover zoom and conditional LaTeX invert */}
                        <img 
                            src={skill.src} 
                            alt={`${skill.label} Logo`} 
                            className={`w-10 h-10 object-contain transition-transform group-hover:scale-110 ${
                                skill.label === 'LaTeX' ? 'filter brightness-0 invert' : ''
                            }`} 
                        />
                        
                        {/* Tooltip */}
                        <span className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-all bg-[#1DB954] text-black text-xs font-bold rounded px-2 py-1 pointer-events-none shadow-md whitespace-nowrap z-10">
                            {skill.label}
                        </span>
                    </div>
                ))}
            </div>

            {/* ========================================== */}
            {/* NEW: Documents Section (CV & Transcript)   */}
            {/* ========================================== */}
            <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="grid grid-cols-2 gap-6">
                    {[
                        { href: "/documents/CV_Daniel_Skerman.pdf", label: "CV", icon: <FileText size={32} /> },
                        { href: "/documents/Transcript.pdf", label: "Transcript", icon: <ScrollText size={32} /> },
                    ].map((doc, idx) => (
                        <a 
                            key={idx} 
                            href={doc.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="relative w-16 h-16 flex items-center justify-center group"
                        >
                            {/* Icon wrapper with hover color change and zoom */}
                            <div className="text-gray-300 transition-all group-hover:text-[#1DB954] group-hover:scale-110">
                                {doc.icon}
                            </div>
                            
                            {/* Tooltip */}
                            <span className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-all bg-[#1DB954] text-black text-xs font-bold rounded px-2 py-1 pointer-events-none shadow-md whitespace-nowrap z-10">
                                {doc.label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>

        </div>

            {/* Content Sections */}
            <div className="flex-1 space-y-10">
                <h1 className="text-5xl font-bold text-[#fcffe9]">About Me</h1>

                {/* Background Section */}
                <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-700">
                    <h2 className="text-2xl font-bold text-[#1DB954] mb-4">Background</h2>
                    <div className="space-y-4 text-sm md:text-base text-gray-100 leading-relaxed">
                        <p>
                            I am a Finance Data Engineer and MSc Mathematics candidate with 5 years of experience in the financial sector. Currently, I balance my work at Legal & General (Asset Management) with my postgraduate studies, where I am writing my dissertation on the <strong className="text-[#fcffe9]">Direct Method of the Calculus of Variations</strong>.
                        </p>
                        <p>
                            Alongside this, I am actively building new portfolio projects to accelerate my technical growth. As a <strong className="text-[#fcffe9]">first-generation university student</strong>, I am deeply passionate about making mathematics accessible and practical. I bring a powerful combination of mathematics and software engineering, and I am looking to join a forward-thinking team where I can continue to grow and do more maths.
                        </p>
                    </div>
                </section>

                {/* Education Section */}
                <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-700">
                    <h2 className="text-2xl font-bold text-[#1DB954] mb-4">Education</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-lg text-[#fcffe9]">MSc in Mathematics (Expected Distinction)</h3>
                            <p className="text-sm text-gray-400 mb-2">Cardiff University | Sep. 2025 – Sep. 2026</p>
                            <ul className="list-disc list-inside text-gray-100 space-y-1 text-sm md:text-base">
                                <li><strong>Dissertation:</strong> Applications of the Direct Method of the Calculus of Variations to solve optimisation problems in financial and applied mathematics.</li>
                                <li><strong>Selected Modules:</strong> Financial Mathematics, Time Series Analysis, Stochastic Optimisation, Calculus of Variations, Mathematical Methods for Data Mining.</li>
                            </ul>
                        </div>
                        <div className="border-t border-gray-600 pt-4">
                            <h3 className="font-semibold text-lg text-[#fcffe9]">BSc in Mathematics (First-Class Honours)</h3>
                            <p className="text-sm text-gray-400 mb-2">Aberystwyth University | Sep. 2018 – Jun. 2021</p>
                            <ul className="list-disc list-inside text-gray-100 space-y-1 text-sm md:text-base">
                                <li>Graduated with First-Class Honours, building a strong foundation in quantitative modelling and scientific computing.</li>
                                <li><strong>Top Modules:</strong> Linear Statistical Models (92%), Numerical Analysis (88%), Hydrodynamics II (83%), Partial Differential Equations (77%).</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-700">
                    <h2 className="text-2xl font-bold text-[#1DB954] mb-4">Professional Experience</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-lg text-[#fcffe9]">Finance Data Engineer</h3>
                            <p className="text-sm text-gray-400 mb-2">Legal & General (Asset Management) | Sep. 2023 – Present</p>
                            <ul className="list-disc list-inside text-gray-100 space-y-1 text-sm md:text-base">
                                <li>Investigate and resolve multi-million-pound financial discrepancies under high-pressure conditions.</li>
                                <li>Refactor legacy Alteryx workflows into scalable, production-grade C# and SQL Server solutions.</li>
                                <li>Independently executed a full architectural rebuild of the critical ESG data pipeline to satisfy strict audit requirements.</li>
                            </ul>
                        </div>
                        <div className="border-t border-gray-600 pt-4">
                            <h3 className="font-semibold text-lg text-[#fcffe9]">Fraud Data Analyst</h3>
                            <p className="text-sm text-gray-400 mb-2">Admiral Group | Jul. 2021 – Sep. 2023</p>
                            <ul className="list-disc list-inside text-gray-100 space-y-1 text-sm md:text-base">
                                <li>Led the migration of legacy fraud detection pipelines from SAS DI to Google Cloud Platform (GCP).</li>
                                <li>Partnered with data science to deploy a fraud prediction ML model, directly contributing to the recovery of over £500,000 in fraudulent claims.</li>
                                <li>Engineered SQL-based detection rules and designed Looker dashboards for non-technical stakeholders.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Interests & Goals Section */}
                <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-700">
                    <h2 className="text-2xl font-bold text-[#1DB954] mb-6">Interests & Goals</h2>
                    
                    {/* True 2x2 Grid for perfect alignment */}
                    <div className="grid md:grid-cols-2 gap-6">
                        
                        {/* 1. Personal Interests */}
                        <div className="bg-gray-800/40 rounded-lg p-5 border border-gray-700/50 h-full flex flex-col">
                            <h3 className="font-semibold text-[#fcffe9] mb-3 flex items-center gap-2">
                                <span className="text-[#1DB954] text-xl">🎯</span> Personal Interests
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                Outside of work and study, I enjoy cycling, playing guitar, and <strong className="text-[#fcffe9]">Magic: The Gathering</strong>. Like many in tech, I also enjoy gaming (and may have spent a bit too much time on <em className="text-[#1DB954]">Cookie Clicker</em> while revising for my MSc exams!).
                            </p>
                        </div>

                        {/* 2. Long-Term Vision */}
                        <div className="bg-gray-800/40 rounded-lg p-5 border border-gray-700/50 h-full flex flex-col">
                            <h3 className="font-semibold text-[#fcffe9] mb-3 flex items-center gap-2">
                                <span className="text-[#1DB954] text-xl">🚀</span> Long-Term Vision
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                My goal is to find a mathematically stimulating role where I can make a tangible difference. While I’d love to pursue a PhD eventually, my current focus is on an industry role where I can apply my skills directly. I firmly believe you don't need a formal institution to discover and enjoy mathematics.
                            </p>
                        </div>

                        {/* 3. Professional Motivation */}
                        <div className="bg-gray-800/40 rounded-lg p-5 border border-gray-700/50 h-full flex flex-col">
                            <h3 className="font-semibold text-[#fcffe9] mb-3 flex items-center gap-2">
                                <span className="text-[#1DB954] text-xl">🤝</span> Professional Motivation
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                I love building tools that genuinely help people—like automating tedious workflows so colleagues can get home to their families. I want to be challenged by hard problems so I can proudly point to a finished system and say, <em className="text-[#1DB954]">"I built that."</em>
                            </p>
                        </div>

                        {/* 4. Outreach & Advocacy */}
                        <div className="bg-gray-800/40 rounded-lg p-5 border border-gray-700/50 h-full flex flex-col">
                            <h3 className="font-semibold text-[#fcffe9] mb-3 flex items-center gap-2">
                                <span className="text-[#1DB954] text-xl">🌍</span> Outreach & Advocacy
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                Coming from a single-parent, low-income household as a <strong className="text-[#fcffe9]">first-generation university student</strong>, I understand the transformative power of education on social mobility. I hope to get involved in STEM outreach soon, as I strongly believe UK math education needs reform to be more accessible and engaging.
                            </p>
                        </div>

                    </div>
                </section>
            </div>
        </div>
        </main>
    </SidebarLayout>
  );
}