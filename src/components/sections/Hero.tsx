'use client';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100vh] flex items-end overflow-hidden"
      aria-label="Introduction"
    >
      {/* Full-screen background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover grayscale contrast-75 brightness-50"
        poster="/images/hero-drone.jpg"
      >
        <source src="/images/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content pinned to bottom */}
      <div className="relative z-10 section-container w-full pb-16 sm:pb-24 pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-end">
          {/* Left: Name & tagline */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-4">
              AI &amp; Data Science Engineer — Nashik, India
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08]">
              Mohit Rajendra Gorhe
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl">
              I build systems where computer vision, edge AI, and unmanned aerial hardware work together in the real world.
            </p>
          </div>

          {/* Right: Quick details */}
          <div className="lg:col-span-5 space-y-4 text-sm">
            <div className="pt-3">
              <span className="text-xs font-mono uppercase text-zinc-500 block mb-1">Current role</span>
              <p className="text-white font-medium">UAS Integration Engineer at Eulerian Bots</p>
              <p className="text-xs text-zinc-400 mt-0.5">Field deployments with defense personnel in Leh &amp; Jaipur</p>
            </div>
            <div className="pt-3">
              <span className="text-xs font-mono uppercase text-zinc-500 block mb-1">Background</span>
              <p className="text-white font-medium">Edge AI Engineer at Xrone Tech</p>
              <p className="text-xs text-zinc-400 mt-0.5">B.E. in Artificial Intelligence &amp; Data Science (CGPA: 7.65)</p>
            </div>
            <div className="pt-3 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-black text-xs font-mono font-medium hover:bg-zinc-200 transition-colors"
              >
                View projects →
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-zinc-500 text-white text-xs font-mono font-medium hover:border-white transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
