'use client';

import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-white border-b border-zinc-200" aria-label="About Mohit Rajendra Gorhe">
      <div className="section-container">
        <div className="section-label">Engineering Perspective</div>
        <h2 className="text-3xl sm:text-5xl font-mono font-bold text-black tracking-tight mb-4">
          Where Intelligence Meets Physical Hardware
        </h2>
        <p className="max-w-3xl text-zinc-600 text-base sm:text-lg leading-relaxed mb-16">
          Bridging deep learning, computer vision, and language models with physical microcontrollers,
          UAV airframes, and rigorous field testing under harsh operational constraints.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-zinc-700 text-base leading-relaxed font-sans">
            <p className="text-lg text-black font-medium leading-relaxed">
              I am an <strong className="font-bold underline decoration-zinc-300">AI &amp; Data Science Engineer</strong> with
              hands-on experience building real-time Computer Vision systems using Python, YOLO, OpenCV, and CNNs
              for object detection, tracking, and pose estimation.
            </p>

            <p>
              My engineering work is rooted in deploying machine intelligence onto resource-constrained edge hardware like{' '}
              <strong className="text-black font-semibold">Raspberry Pi</strong> and embedded microcontrollers. Beyond pure software,
              I work actively across <strong className="text-black font-semibold">UAS Integration</strong> — configuring and calibrating
              flight controllers, updating MCU firmware and bootloaders, designing payload release mechanics, and conducting
              GCS-based autonomous mission planning.
            </p>

            <div className="p-6 rounded-xl border border-black bg-zinc-50 font-mono text-xs sm:text-sm text-black space-y-2.5 shadow-2xs">
              <div className="text-xs uppercase tracking-wider font-bold text-zinc-500">
                FIELD-VALIDATED CREDENTIALS
              </div>
              <p className="text-zinc-800 leading-relaxed font-sans">
                Experienced working directly with defense personnel during live field deployments in high-altitude and harsh
                terrains (including <strong>Leh</strong> and <strong>Jaipur</strong>) to validate operational UAV and payload requirements.
              </p>
            </div>

            <p>
              Additionally, I develop backend services and interactive prototypes using Flask, Django, and Streamlit,
              and build practical GenAI applications leveraging LangChain, FAISS vector search, and Google Gemini API for
              strictly grounded, hallucination-free document intelligence.
            </p>

            <p>
              My goal is to build intelligent physical systems where software, sensory perception, and physical machines
              interact reliably in unpredictable real-world environments.
            </p>
          </div>

          {/* Technical Metadata & Snapshot (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="card p-6 sm:p-7 border border-zinc-200 bg-zinc-50/70 shadow-sm">
              <div className="flex items-center gap-2 font-mono text-xs text-black mb-5 uppercase tracking-wider font-bold pb-3 border-b border-zinc-200">
                <Terminal size={16} />
                ENGINEERING PROFILE SNAPSHOT
              </div>

              <div className="space-y-3.5 font-mono text-xs">
                <div className="flex justify-between pb-2 border-b border-zinc-200">
                  <span className="text-zinc-500">FULL NAME</span>
                  <span className="text-black font-bold">Mohit Rajendra Gorhe</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-zinc-200">
                  <span className="text-zinc-500">PRIMARY ROLE</span>
                  <span className="text-black font-semibold">AI &amp; Data Science Engineer</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-zinc-200">
                  <span className="text-zinc-500">CURRENT POSITION</span>
                  <span className="text-black font-semibold">UAS Integration Engineer @ Eulerian Bots</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-zinc-200">
                  <span className="text-zinc-500">EXPERIENCE</span>
                  <span className="text-black font-semibold">Xrone Tech Pvt. Ltd. (AI &amp; Edge AI)</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-zinc-200">
                  <span className="text-zinc-500">EDUCATION</span>
                  <span className="text-black font-semibold">B.E. AI &amp; Data Science (CGPA: 7.65)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">FIELD LOCATIONS</span>
                  <span className="text-black font-semibold">Leh, Jaipur, Nashik (India)</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-zinc-200 bg-white hover:border-black transition-colors">
                <Cpu size={20} className="text-black mb-2" />
                <div className="font-mono text-sm font-bold text-black">Silicon to System</div>
                <div className="text-xs text-zinc-500 mt-1 font-sans">
                  From solder and firmware to deep learning inference
                </div>
              </div>
              <div className="p-5 rounded-xl border border-zinc-200 bg-white hover:border-black transition-colors">
                <Shield size={20} className="text-black mb-2" />
                <div className="font-mono text-sm font-bold text-black">Defense Field Validated</div>
                <div className="text-xs text-zinc-500 mt-1 font-sans">
                  Proven in high altitude and tactical operational environments
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
