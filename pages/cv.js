import SidebarLayout from "@/components/SidebarLayout";

export default function CV() {
  return (
    <SidebarLayout>
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-semibold text-[#fcffe9]">
              Curriculum Vitae
            </h1>
            <p className="text-gray-400 mt-1">
              View my experience, education, and technical background.
            </p>
          </div>

          {/* Download button */}
          <a
            href="/documents/Daniel_Skerman_CV.pdf"
            download
            className="mt-4 md:mt-0 inline-block px-4 py-2 rounded bg-[#1DB954]/10 hover:bg-[#1DB954]/20 text-[#1DB954] transition"
          >
            Download PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="w-full h-[80vh] rounded-lg overflow-hidden border border-gray-700">
          <iframe
            src="/documents/Daniel_Skerman_CV.pdf"
            className="w-full h-full"
          />
        </div>

      </div>
    </SidebarLayout>
  );
}