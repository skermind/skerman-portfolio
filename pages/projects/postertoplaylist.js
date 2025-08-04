import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function PosterToPlaylistInfo() {
  return (
    <main
      className={`${geistSans.className} ${geistMono.className} min-h-screen bg-[#0f1117] text-[#fcffe9] p-8`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
        <img
            src="/images/PosterToPlaylist.png"
            alt="PosterToPlaylist Logo"
            className="h-16 w-auto"
        />
        <h1 className="text-4xl font-bold text-[#1DB954]">
            PosterToPlaylist
        </h1>
        </div>

        <p className="mb-6">
          PosterToPlaylist is a web application that generates Spotify playlists
          from festival posters. Using AI and API integrations, it saves music
          fans time and effort by turning lineup posters into curated playlists.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-[#1DB954]">
          How It Works
        </h2>
        <ol className="list-decimal list-inside mb-6 space-y-2">
          <li>
            <strong>Search for a Poster:</strong> Enter a festival name, and the
            app finds the official poster online.
          </li>
          <li>
            <strong>Analyse the Poster:</strong> AI extracts artist names and
            their lineup positions.
          </li>
          <li>
            <strong>Create a Playlist:</strong> Spotify API selects random top
            tracks for each artist to build your playlist.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mb-3 text-[#1DB954]">
          Features
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Google Search API for poster finding</li>
          <li>OpenAI GPT-4o for text extraction and artist detection</li>
          <li>Spotify API for playlist generation</li>
          <li>Streamlit frontend hosted on Google Cloud Run</li>
          <li>PostgreSQL database hosted on a Raspberry Pi to track search queries and created playlists</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-3 text-[#1DB954]">
        Challenges & Solutions
        </h2>
        <p className="mb-4">
        Developing PosterToPlaylist presented several key challenges:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2 text-[#fcffe9]">
        <li>
            <strong>Spotify API Changes:</strong> User login and song metrics were removed, so we shifted to a shared Spotify account that generates playlists from artists' top tracks.
        </li>
        <li>
            <strong>SEO Limitations:</strong> Streamlit’s client-side rendering hinders search engine indexing. We solved this by serving a static landing page for bots and proxying users to the app.
        </li>
        <li>
            <strong>Poster Image Search:</strong> Diverse poster designs make automated search tough; allowing manual poster selection improved accuracy.
        </li>
        <li>
            <strong>Ad Approval:</strong> Strict policies require thorough landing pages and legal info, making monetization a work in progress.
        </li>
        <li>
            <strong>Hosting Costs:</strong> We moved to cost-effective cloud hosting and are exploring self-hosting on a Raspberry Pi.
        </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 text-[#1DB954]">
          Future Plans
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            Enable distinguishing concerts vs. festivals to customize playlist
            song count.
          </li>
          <li>Add image upload for direct poster analysis.</li>
          <li>Expand online presence with branding, stickers, and posters.</li>
          <li>Monetization through ad approvals and sponsorships.</li>
          <li>
            Host the app on a Raspberry Pi for dedicated, cost-effective
            personal hosting.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 text-[#1DB954]">
          Try It Out
        </h2>
        <div className="flex items-center gap-4 mb-6">
          <img
            src="/images/PosterToPlaylistLogo.png"
            alt="PosterToPlaylist Square Logo"
            className="h-10 w-10"
          />
        <a
            href="https://app.postertoplaylist.com"
            className="text-[#1DB954] underline"
        >
            postertoplaylist.com
        </a>
        </div>
      </div>
    </main>
  );
}