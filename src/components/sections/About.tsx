'use client';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-36 bg-white" aria-label="About">
      <div className="section-container">
        {/* Asymmetric layout: 7 cols narrative / 5 cols quick facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-zinc-700 text-base leading-relaxed">
            <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight mb-8">
              About me
            </h2>

            <p className="text-lg text-zinc-900 font-normal leading-relaxed">
              I am an AI &amp; Data Science Engineer who spends most of my time connecting computer vision models with real-world drone and embedded hardware.
            </p>

            <p>
              My hands-on work centers on deploying vision systems using Python, YOLO, and OpenCV onto resource-constrained companion computers like Raspberry Pi. Rather than treating machine learning as purely abstract software, I configure flight controllers, flash MCU firmware, and design physical payload release systems so algorithms can act in the physical environment.
            </p>

            <div className="border-l-2 border-zinc-950 pl-4 py-1 text-zinc-900 font-medium">
              I have worked directly with defense personnel during live field deployments in high-altitude and harsh conditions — including Leh and Jaipur — to calibrate flight parameters and validate operational payloads.
            </div>

            <p>
              Alongside drone integration, I build practical backend pipelines and document intelligence systems using LangChain, FAISS, and Google Gemini API to eliminate model hallucinations, as well as lightweight monitoring applications with Flask and Streamlit.
            </p>

            <p>
              I am currently completing my Bachelor of Engineering in Artificial Intelligence &amp; Data Science at SNJB&apos;s College of Engineering Chandwad, Nashik, with a CGPA of 7.65.
            </p>
          </div>

          {/* Quick Facts (5 cols) */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-zinc-200 pt-8 lg:pt-0 lg:pl-12 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Details &amp; Field Work
            </h3>

            <div className="space-y-4 text-sm divide-y divide-zinc-100">
              <div className="pt-2">
                <span className="text-xs font-mono text-zinc-400 block">Name</span>
                <span className="text-zinc-900 font-medium">Mohit Rajendra Gorhe</span>
              </div>

              <div className="pt-3">
                <span className="text-xs font-mono text-zinc-400 block">Current position</span>
                <span className="text-zinc-900 font-medium">UAS Integration Engineer</span>
                <span className="text-xs text-zinc-500 block">Eulerian Bots</span>
              </div>

              <div className="pt-3">
                <span className="text-xs font-mono text-zinc-400 block">Field deployment locations</span>
                <span className="text-zinc-900 font-medium">Leh, Jaipur, Nashik</span>
              </div>

              <div className="pt-3">
                <span className="text-xs font-mono text-zinc-400 block">Education</span>
                <span className="text-zinc-900 font-medium">B.E. Artificial Intelligence &amp; Data Science</span>
                <span className="text-xs text-zinc-500 block">SNJB&apos;s COE Chandwad (2022–2026) • CGPA: 7.65</span>
              </div>

              <div className="pt-3">
                <span className="text-xs font-mono text-zinc-400 block">Core technical tools</span>
                <span className="text-zinc-700 text-xs font-mono block mt-1 leading-relaxed">
                  Python • OpenCV • YOLO • Raspberry Pi • LangChain • C++ • MAVLink • Betaflight • INAV
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
