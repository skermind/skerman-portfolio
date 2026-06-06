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

export default function PosterToPlaylistUnderConstruction() {
  return (
    <SidebarLayout>
      <main
        className={`${geistSans.className} ${geistMono.className} min-h-screen bg-[#0f1117] text-[#fcffe9] p-8`}
      >
        <div className="max-w-4xl mx-auto">

          <div className="flex items-center justify-between mb-8">
            <img
              src="/images/PosterToPlaylist.png"
              alt="PosterToPlaylist Logo"
              className="h-16 w-auto"
            />
            <h1 className="text-4xl font-bold text-[#1DB954]">
              Rebuild in Progress
            </h1>
          </div>

          <div className="border border-[#1DB954] rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#1DB954]">
              PosterToPlaylist is Currently Offline
            </h2>

            <p className="mb-4">
              PosterToPlaylist was my first major full-stack application and
              played a significant role in my development as a software engineer.
            </p>

            <p className="mb-4">
              The original application successfully used AI to analyse festival
              posters and generate Spotify playlists automatically. During the
              project I worked with APIs, databases, cloud deployment, SEO,
              analytics, and infrastructure management.
            </p>

            <p>
              Development is currently paused while I complete my MSc in
              Mathematics. The application is being redesigned with a modern
              architecture and will return in a future release.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-3 text-[#1DB954]">
            What I Learned
          </h2>

          <ul className="list-disc list-inside mb-8 space-y-2">
            <li>Building production web applications from scratch</li>
            <li>OpenAI, Spotify and Google API integrations</li>
            <li>PostgreSQL database design and management</li>
            <li>Cloud deployment and infrastructure</li>
            <li>SEO, analytics and monetisation strategies</li>
            <li>Product ownership and technical decision making</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3 text-[#1DB954]">
            Planned Rebuild
          </h2>

          <ul className="list-disc list-inside mb-8 space-y-2">
            <li>Next.js frontend</li>
            <li>FastAPI backend</li>
            <li>User accounts and saved playlists</li>
            <li>Direct image uploads</li>
            <li>Improved artist detection</li>
            <li>Scalable cloud infrastructure</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3 text-[#1DB954]">
            Project Page
          </h2>

          <a
            href="/projects/postertoplaylist"
            className="text-[#1DB954] underline"
          >
            View project details
          </a>

        </div>
      </main>
    </SidebarLayout>
  );
}