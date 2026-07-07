import SidebarLayout from "@/components/SidebarLayout";

export default function Transcripts() {
  return (
    <SidebarLayout>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-[#fcffe9]">
            Academic Transcripts
          </h1>
          <p className="text-gray-400 mt-1">
            Official academic records from Cardiff University and Aberystwyth University.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Cardiff (Live) */}
          <div className="border border-gray-700 rounded-lg p-6 bg-[#11141c]">
            <h2 className="text-xl text-[#fcffe9] mb-4">
              MSc Mathematics - Cardiff University
            </h2>

            <iframe
              src="/documents/cardiff_transcript.pdf"
              className="w-full h-[70vh] rounded border border-gray-700"
            />

            <a
              href="/documents/cardiff_transcript.pdf"
              download
              className="mt-4 inline-block px-4 py-2 rounded bg-[#1DB954]/10 hover:bg-[#1DB954]/20 text-[#1DB954] transition"
            >
              Download Transcript
            </a>
          </div>

          {/* Aberystwyth (Live) */}
          <div className="border border-gray-700 rounded-lg p-6 bg-[#11141c]">
            <h2 className="text-xl text-[#fcffe9] mb-4">
              BSc Mathematics - Aberystwyth University
            </h2>

            <iframe
              src="/documents/aberystwyth_transcript.pdf"
              className="w-full h-[70vh] rounded border border-gray-700"
            />

            <a
              href="/documents/aberystwyth_transcript.pdf"
              download
              className="mt-4 inline-block px-4 py-2 rounded bg-[#1DB954]/10 hover:bg-[#1DB954]/20 text-[#1DB954] transition"
            >
              Download Transcript
            </a>
          </div>

        </div>
      </div>
    </SidebarLayout>
  );
}