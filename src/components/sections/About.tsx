'use client';

import FadeInUp, { StaggerContainer, StaggerItem } from '@/components/ui/FadeInUp';
import CountUp from '@/components/ui/CountUp';

const stats = [
  { value: 7.65, label: 'CGPA', decimals: 2 },
  { value: 2, label: 'Years Experience', decimals: 0, suffix: '+' },
  { value: 3, label: 'Field Locations', decimals: 0 },
  { value: 10, label: 'Projects Built', decimals: 0, suffix: '+' },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-36" aria-label="About">
      <div className="section-container">
        {/* Stats row */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-20 pb-16 border-b border-zinc-200">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-light text-zinc-950 tracking-tight">
                  <CountUp to={stat.value} decimals={stat.decimals ?? 0} suffix={stat.suffix ?? ''} duration={2.2} />
                </div>
                <p className="text-xs font-mono uppercase text-zinc-400 tracking-wider">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative */}
          <div className="lg:col-span-7 space-y-6 text-zinc-700 text-base leading-relaxed">
            <FadeInUp>
              <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight mb-8">About me</h2>
            </FadeInUp>
            <FadeInUp delay={0.08}>
              <p className="text-lg text-zinc-900 font-normal leading-relaxed">
                I am an AI &amp; Data Science Engineer who spends most of my time connecting computer vision models with real-world drone and embedded hardware.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.14}>
              <p>
                My hands-on work centers on deploying vision systems using Python, YOLO, and OpenCV onto resource-constrained companion computers like Raspberry Pi. Rather than treating machine learning as purely abstract software, I configure flight controllers, flash MCU firmware, and design physical payload release systems so algorithms can act in the physical environment.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="pl-4 py-1 border-l-2 border-zinc-900 text-zinc-900 font-medium">
                I have worked directly with defense personnel during live field deployments in high-altitude and harsh conditions — including Leh and Jaipur — to calibrate flight parameters and validate operational payloads.
              </div>
            </FadeInUp>
            <FadeInUp delay={0.26}>
              <p>
                Alongside drone integration, I build practical backend pipelines and document intelligence systems using LangChain, FAISS, and Google Gemini API to eliminate model hallucinations, as well as lightweight monitoring applications with Flask and Streamlit.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.32}>
              <p>
                I am currently completing my Bachelor of Engineering in Artificial Intelligence &amp; Data Science at SNJB&apos;s College of Engineering Chandwad, Nashik, with a CGPA of 7.65.
              </p>
            </FadeInUp>
          </div>

          {/* Quick Facts */}
          <FadeInUp delay={0.15} className="lg:col-span-5 pt-8 lg:pt-0 lg:pl-12 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Details &amp; Field Work</h3>
            <div className="space-y-6 text-sm">
              <div>
                <span className="text-xs font-mono text-zinc-400 block">Name</span>
                <span className="text-zinc-900 font-medium">Mohit Rajendra Gorhe</span>
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-400 block">Current position</span>
                <span className="text-zinc-900 font-medium">UAS Integration Engineer</span>
                <span className="text-xs text-zinc-500 block">Eulerian Bots</span>
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-400 block">Field deployment locations</span>
                <span className="text-zinc-900 font-medium">Leh, Jaipur, Nashik</span>
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-400 block">Education</span>
                <span className="text-zinc-900 font-medium">B.E. Artificial Intelligence &amp; Data Science</span>
                <span className="text-xs text-zinc-500 block">SNJB&apos;s COE Chandwad (2022–2026) · CGPA: 7.65</span>
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-400 block">Core technical tools</span>
                <span className="text-zinc-700 text-xs font-mono block mt-1 leading-relaxed">
                  Python · OpenCV · YOLO · Raspberry Pi · LangChain · C++ · MAVLink · Betaflight · INAV
                </span>
              </div>

              {/* Wipe-up button — matches Contact section style */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-xs font-mono font-medium overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                    Get in touch →
                  </span>
                </a>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
