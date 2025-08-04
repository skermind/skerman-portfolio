import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "PosterToPlaylist",
      description: "Scan festival posters and generate Spotify playlists.",
      link: "/postertoplaylist",
      linkText: "Launch App",
      moreInfo: "/projects/postertoplaylist",
      moreInfoText: "More Info",
      image: "/images/PosterToPlaylist.png",
    },
    // You can add more projects here with custom button text
  ];

  return (
    <main className="min-h-screen p-8"> 
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#11141c] rounded-xl shadow-lg hover:shadow-xl transition p-5 flex flex-col"
          >
            {project.image && (
              <div className="relative w-full h-64 mb-4 bg-black rounded-md flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-2"
                />
              </div>
            )}
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="flex-grow">{project.description}</p>

            {/* Buttons styled like index.js */}
            <div className="mt-4 flex gap-3">
              <a
                href={project.link}
                className="bg-black text-[#fcffe9] flex-1 text-center px-5 py-2 rounded-xl transition hover:bg-[#1DB954] hover:text-[#fcffe9]"
              >
                {project.linkText}
              </a>
              <a
                href={project.moreInfo}
                className="bg-black text-[#fcffe9] flex-1 text-center px-5 py-2 rounded-xl transition hover:bg-[#1DB954] hover:text-[#fcffe9]"
              >
                {project.moreInfoText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}