'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Eye,
  Plane,
  Cpu,
  CircuitBoard,
  Sprout,
  ArrowRight,
} from 'lucide-react';
import { engineeringDomains } from '@/data/tech-stack';

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Eye,
  Plane,
  Cpu,
  CircuitBoard,
  Sprout,
};

export default function Identity() {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  const activeConnections = activeDomain
    ? engineeringDomains.find((d) => d.id === activeDomain)?.connections ?? []
    : [];

  return (
    <section id="identity" className="relative py-24 sm:py-32 bg-white border-b border-zinc-200" aria-label="Engineering identity">
      <div className="section-container">
        {/* Section label */}
        <div className="section-label">Engineering Architecture</div>
        <h2 className="text-3xl sm:text-5xl font-mono font-bold text-black tracking-tight mb-4">
          Core Engineering Domains
        </h2>
        <p className="max-w-3xl text-zinc-600 text-base sm:text-lg mb-16 leading-relaxed">
          Spanning the full spectrum from raw silicon, microcontrollers, and UAV mechanics to computer vision models,
          onboard edge AI, and generative architectures.
        </p>

        {/* Domain Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {engineeringDomains.map((domain, index) => {
            const Icon = iconMap[domain.icon] || Cpu;
            const isActive = activeDomain === domain.id;
            const isConnected = activeConnections.includes(domain.id);
            const isDimmed = activeDomain !== null && !isActive && !isConnected;

            return (
              <motion.button
                key={domain.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.06, duration: 0.3 }}
                onClick={() =>
                  setActiveDomain(activeDomain === domain.id ? null : domain.id)
                }
                className={`group relative p-6 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'border-black bg-black text-white shadow-lg'
                    : isConnected
                    ? 'border-black bg-zinc-50 text-black shadow-sm'
                    : isDimmed
                    ? 'border-zinc-100 bg-zinc-50/50 opacity-40'
                    : 'border-zinc-200 bg-white hover:border-black text-black'
                }`}
                aria-pressed={isActive}
                aria-label={`${domain.label}: ${domain.description}`}
              >
                {/* Active Connected Indicator Badge */}
                {isConnected && (
                  <div className="absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded bg-black text-white font-semibold">
                    CONNECTED
                  </div>
                )}
                {isActive && (
                  <div className="absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded bg-white text-black font-semibold">
                    ACTIVE
                  </div>
                )}

                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                    isActive ? 'bg-zinc-800 text-white' : 'bg-zinc-100 text-black group-hover:bg-black group-hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                </div>

                <h3
                  className={`font-mono text-base font-bold mb-1.5 ${
                    isActive ? 'text-white' : 'text-black'
                  }`}
                >
                  {domain.label}
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed font-sans ${
                    isActive ? 'text-zinc-300' : 'text-zinc-600'
                  }`}
                >
                  {domain.description}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Interaction Hint */}
        <p className="mt-6 text-center font-mono text-xs text-zinc-500">
          • Click any domain card to highlight cross-disciplinary system connections •
        </p>

        {/* Career Trajectory Roadmap */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 p-6 sm:p-8 rounded-xl border border-zinc-200 bg-zinc-50/70"
        >
          <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3 font-semibold">
            CAREER &amp; TECHNICAL TRAJECTORY
          </div>
          <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs sm:text-sm text-zinc-700">
            {[
              'Hardware',
              'Embedded Systems',
              'UAS & Flight Control',
              'Autonomous Systems',
              'Computer Vision (YOLO/OpenCV)',
              'Edge AI (Raspberry Pi)',
              'GenAI & RAG',
              'Agriculture Automation',
              'Intelligent Physical Systems',
            ].map((stage, i, arr) => (
              <span key={stage} className="flex items-center gap-2">
                <span className="text-black font-semibold bg-white px-2.5 py-1 rounded border border-zinc-200">
                  {stage}
                </span>
                {i < arr.length - 1 && <span className="text-black font-bold">→</span>}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
