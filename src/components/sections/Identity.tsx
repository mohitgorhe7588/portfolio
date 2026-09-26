'use client';

import { engineeringDomains } from '@/data/tech-stack';

export default function Identity() {
  return (
    <section id="identity" className="py-24 sm:py-36" aria-label="Systems approach">
      <div className="section-container">
        {/* Asymmetric: sticky left label + scrollable right panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left — sticky heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight">
              Systems approach
            </h2>
            <p className="mt-4 text-base text-zinc-600 leading-relaxed font-light">
              Rather than specializing solely in model training or isolated drone mechanics, I connect physical hardware, embedded firmware, and vision algorithms into one closed loop.
            </p>
          </div>

          {/* Right — scrollable panel */}
          <div className="lg:col-span-8 lg:max-h-[70vh] scroll-panel space-y-10">
            {/* Pipeline tags */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase text-zinc-400 block mb-4">
                Engineering pipeline
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-800">
                {[
                  'Hardware & Soldering',
                  'Embedded Firmware',
                  'Flight Controllers',
                  'Computer Vision',
                  'Edge Inference (Pi)',
                  'GenAI & RAG',
                  'Field Deployment',
                ].map((step, i, arr) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="bg-white px-2.5 py-1 font-medium">
                      {step}
                    </span>
                    {i < arr.length - 1 && <span className="text-zinc-400">→</span>}
                  </span>
                ))}
              </div>
            </div>

            {/* Engineering areas — spacing instead of divider lines */}
            <div className="space-y-8">
              {engineeringDomains.map((domain, i) => (
                <div key={domain.id} className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline">
                  <div className="sm:col-span-4 font-mono text-xs text-zinc-400">
                    {(i + 1).toString().padStart(2, '0')}. <span className="text-zinc-900 font-medium">{domain.label}</span>
                  </div>
                  <div className="sm:col-span-8 text-sm text-zinc-600 leading-relaxed">
                    {domain.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
