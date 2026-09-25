'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const systemLines = [
  'SYS.INIT: MOHIT_GORHE',
  'DOMAIN: AI × Autonomous Systems × IoT × Engineering',
  'STATUS: ACTIVE',
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero introduction"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-bg-primary" />
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 212, 255, 0.06) 0%, transparent 60%)',
        }}
      />

      {/* Corner coordinates — decorative telemetry */}
      <div className="absolute top-24 left-6 lg:left-16 font-mono text-xs text-text-muted hidden sm:block select-none" aria-hidden="true">
        <div className="flex flex-col gap-1 opacity-40">
          <span>LAT 00.0000°</span>
          <span>LNG 00.0000°</span>
          <span>ALT ████ m</span>
        </div>
      </div>

      {/* System status — right side */}
      <div className="absolute top-24 right-6 lg:right-16 font-mono text-xs hidden sm:block select-none" aria-hidden="true">
        <div className="flex flex-col items-end gap-1 opacity-40">
          {systemLines.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 0.4, x: 0 }}
              transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
              className="text-text-muted"
            >
              {line}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 section-container text-center flex flex-col items-center">
        {/* System label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-3 font-mono text-xs tracking-widest text-accent-cyan uppercase">
            <span className="w-8 h-px bg-accent-cyan opacity-50" />
            AI & Data Science Engineer
            <span className="w-8 h-px bg-accent-cyan opacity-50" />
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-mono font-bold tracking-tight text-text-primary leading-none"
        >
          MOHIT
          <br />
          <span className="bg-gradient-to-r from-accent-cyan to-blue-400 bg-clip-text text-transparent">
            GORHE
          </span>
        </motion.h1>

        {/* Supporting message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 max-w-2xl text-lg sm:text-xl text-text-secondary leading-relaxed"
        >
          Building intelligent, autonomous and connected systems
          <span className="text-text-muted">
            {' '}— where software, intelligence, networks, and physical machines interact.
          </span>
        </motion.p>

        {/* Domain tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {['AI / ML', 'Autonomous Systems', 'UAS', 'IoT', 'Computer Vision', 'Agriculture Automation'].map(
            (domain) => (
              <span
                key={domain}
                className="px-3 py-1.5 font-mono text-xs text-text-secondary border border-border-primary rounded-md bg-bg-surface/50 hover:border-accent-cyan-dim hover:text-accent-cyan transition-all duration-200"
              >
                {domain}
              </span>
            )
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-12 flex items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm text-bg-primary bg-accent-cyan rounded-lg hover:bg-accent-cyan/90 transition-colors font-medium"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm text-text-secondary border border-border-primary rounded-lg hover:border-accent-cyan-dim hover:text-text-primary transition-all"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-text-muted" />
        </motion.div>
      </motion.div>

      {/* Bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-primary to-transparent" />
    </section>
  );
}
