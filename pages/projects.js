export default function Projects() {
  return (
    <main className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-semibold mb-4">Projects</h1>
      <ul className="space-y-4">
        <li className="p-4 border rounded-xl shadow">
          <h2 className="text-xl font-bold">PosterToPlaylist</h2>
          <p>Scan festival posters and generate Spotify playlists.</p>
          <a
            href="/postertoplaylist"
            className="text-green-600 underline"
          >
            Launch App
          </a>
        </li>
        {/* Add more projects as you go */}
      </ul>
    </main>
  );
}