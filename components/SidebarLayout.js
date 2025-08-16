import React from "react";

export default function SidebarLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#0f1117] text-[#fcffe9]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#11141c] p-6 flex flex-col gap-6">
        <h2 className="text-xl font-bold text-[#1DB954]">Navigation</h2>
        <nav className="flex flex-col gap-3">
          <a href="/" className="hover:text-[#1DB954] transition">Home</a>
          <a href="/projects" className="hover:text-[#1DB954] transition">Projects</a>
          <a href="/about" className="hover:text-[#1DB954] transition">About</a>
          <a href="/contact" className="hover:text-[#1DB954] transition">Contact</a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}