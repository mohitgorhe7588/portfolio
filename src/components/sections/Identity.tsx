'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Eye,
  Zap,
  Plane,
  Wifi,
  Network,
  CircuitBoard,
  Sprout,
} from 'lucide-react';
import { engineeringDomains } from '@/data/tech-stack';

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Eye,
  Zap,
  Plane,
  Wifi,
  Network,
  CircuitBoard,
  Sprout,
};

export default function Identity() {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  const activeConnections = activeDomain
    ? engineeringDomains.find((d) => d.id === activeDomain)?.connections ?? []
    : [];

  return (
    <section id="identity" className="relative py-24 sm:py-32" aria-label="Engineering identity">
      <div className="section-container">
        {/* Section label */}
        <div className="section-label">Engineering Domains</div>
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-text-primary mb-4">
          Systems That Think & Act
        </h2>
        <p className="max-w-2xl text-text-secondary mb-16">
          I work across the full spectrum from AI and machine learning to physical hardware
          and embedded systems — building technology where intelligence meets the real world.
        </p>

        {/* Domain Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {engineeringDomains.map((domain, index) => {
            const Icon = iconMap[domain.icon] || Brain;
            const isActive = activeDomain === domain.id;
            const isConnected = activeConnections.includes(domain.id);
            const isDimmed = activeDomain !== null && !isActive && !isConnected;

            return (
              <motion.button
                key={domain.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                onClick={() =>
                  setActiveDomain(activeDomain === domain.id ? null : domain.id)
                }
                className={`group relative p-5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'border-white bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.08)]'
                    : isConnected
                    ? 'border-zinc-400 bg-bg-surface'
                    : isDimmed
                    ? 'border-border-subtle bg-bg-surface/30 opacity-30'
                    : 'border-border-primary bg-bg-surface hover:border-zinc-500'
                }`}
                aria-pressed={isActive}
                aria-label={`${domain.label}: ${domain.description}`}
              >
                {/* Connection indicator */}
                {isConnected && (
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_6px_#fff] animate-pulse" />
                )}

                <Icon
                  size={24}
                  className={`mb-3 transition-colors duration-300 ${
                    isActive
                      ? 'text-white'
                      : isConnected
                      ? 'text-zinc-300'
                      : 'text-zinc-500 group-hover:text-white'
                  }`}
                />
                <h3 className="font-mono text-sm font-semibold mb-1 text-white">
                  {domain.label}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {domain.description}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Connection hint */}
        <p className="mt-6 text-center font-mono text-xs text-zinc-500">
          Click a domain to see connections
        </p>

        {/* Engineering narrative */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-6 rounded-xl border border-border-primary bg-bg-surface/50"
        >
          <div className="font-mono text-xs text-zinc-400 mb-3 tracking-wider">CAREER.TRAJECTORY</div>
          <div className="flex flex-wrap items-center gap-2 font-mono text-sm text-text-secondary">
            {[
              'Hardware',
              'Embedded Systems',
              'UAS',
              'Autonomous Systems',
              'Computer Vision',
              'AI/ML',
              'Distributed Systems',
              'IoT & Agriculture Automation',
              'Intelligent Physical Systems',
            ].map((stage, i, arr) => (
              <span key={stage} className="flex items-center gap-2">
                <span className="text-white font-medium">{stage}</span>
                {i < arr.length - 1 && <span className="text-zinc-400">→</span>}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
