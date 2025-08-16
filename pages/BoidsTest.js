import BoidsBackground from "@/components/BoidsBackground";

export default function BoidsTestPage() {
  return (
    <div className="relative h-screen">
      {/* Boids Background */}
      <BoidsBackground />

      {/* Overlay content */}
      <div className="relative z-10 flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-[#1DB954]">Boids Background Test</h1>
      </div>
    </div>
  );
}