'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-white"
      aria-label="Introduction"
    >
      <div className="section-container">
        {/* Asymmetrical Top Section: Headline on left, location/role on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12 sm:mb-16">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-4">
              AI &amp; Data Science Engineer — Nashik, India
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-zinc-950 leading-[1.08]">
              Mohit Rajendra Gorhe
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-zinc-600 font-light leading-relaxed max-w-2xl">
              I build systems where computer vision, edge AI, and unmanned aerial hardware work together in the real world.
            </p>
          </div>

          <div className="lg:col-span-4 pt-2 lg:pt-8 text-sm text-zinc-600 space-y-4">
            <div className="border-t border-zinc-200 pt-3">
              <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">Current role</span>
              <p className="text-zinc-900 font-medium">UAS Integration Engineer at Eulerian Bots</p>
              <p className="text-xs text-zinc-500 mt-0.5">Field deployments with defense personnel in Leh &amp; Jaipur</p>
            </div>
            <div className="border-t border-zinc-200 pt-3">
              <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">Background</span>
              <p className="text-zinc-900 font-medium">Edge AI Engineer at Xrone Tech</p>
              <p className="text-xs text-zinc-500 mt-0.5">B.E. in Artificial Intelligence &amp; Data Science (CGPA: 7.65)</p>
            </div>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-black text-white text-xs font-mono font-medium hover:bg-zinc-800 transition-colors"
              >
                View projects →
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-zinc-300 text-zinc-900 text-xs font-mono font-medium hover:border-black transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>

        {/* Editorial Real Photography Showcase */}
        <div className="mt-8 border-t border-zinc-200 pt-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/images/hero-drone.jpg"
              alt="Editorial 35mm photograph of an autonomous quadcopter on a hardware workbench with telemetry display"
              fill
              priority
              className="object-cover grayscale contrast-105"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
          <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-zinc-500">
            <span>UAV workbench testing: onboard companion computing, flight telemetry, and payload release mechanics</span>
            <span className="text-zinc-400 font-light">Documentary photography</span>
          </div>
        </div>
      </div>
    </section>
  );
}
