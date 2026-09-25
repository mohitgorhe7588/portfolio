'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, ShieldCheck, Cpu, Terminal } from 'lucide-react';

const systemLines = [
  'SYS.ID: MOHIT_RAJENDRA_GORHE',
  'ROLE: AI & DATA SCIENCE ENGINEER',
  'FOCUS: COMPUTER VISION × EDGE AI × UAS',
  'STATUS: ACTIVE / DEPLOYED',
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-white pt-24 pb-16 border-b border-zinc-200"
      aria-label="Hero introduction"
    >
      {/* Background dot grid - subtle technical paper texture */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      {/* Decorative Corner Metadata */}
      <div
        className="absolute top-24 left-6 lg:left-16 font-mono text-[11px] text-zinc-500 hidden sm:block select-none"
        aria-hidden="true"
      >
        <div className="flex flex-col gap-1 border-l-2 border-black pl-3">
          <span className="font-semibold text-black">MOHIT RAJENDRA GORHE</span>
          <span>DISCIPLINE: AI & DATA SCIENCE</span>
          <span>DEPLOYMENTS: LEH / JAIPUR / NASHIK</span>
        </div>
      </div>

      {/* System status — right side */}
      <div
        className="absolute top-24 right-6 lg:right-16 font-mono text-[11px] hidden sm:block select-none"
        aria-hidden="true"
      >
        <div className="flex flex-col items-end gap-1 border-r-2 border-black pr-3">
          {systemLines.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              className="text-zinc-600"
            >
              {line}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 section-container text-center flex flex-col items-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black bg-zinc-50 font-mono text-xs font-semibold text-black tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            AI & Data Science Engineer
          </span>
        </motion.div>

        {/* Primary Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-mono font-black tracking-tight text-black leading-none"
        >
          MOHIT
          <br />
          <span className="text-black underline decoration-zinc-300 decoration-4 underline-offset-8">
            GORHE
          </span>
        </motion.h1>

        {/* Core Narrative / CV Summary */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 max-w-3xl text-lg sm:text-xl text-zinc-700 leading-relaxed font-sans"
        >
          Building intelligent, autonomous and connected physical systems — specializing in{' '}
          <strong className="text-black font-semibold">Computer Vision</strong> (YOLO, OpenCV, pose estimation),{' '}
          <strong className="text-black font-semibold">Edge AI</strong> on companion computers (Raspberry Pi), and{' '}
          <strong className="text-black font-semibold">UAS Integration</strong> for agricultural &amp; defense platforms.
        </motion.p>

        {/* Technical Domain Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-8 flex flex-wrap justify-center gap-2 max-w-2xl"
        >
          {[
            'Computer Vision & YOLO',
            'Edge AI (Raspberry Pi)',
            'UAS Integration',
            'Flight Controller Tuning',
            'GenAI & LangChain',
            'Agriculture Automation',
          ].map((domain) => (
            <span
              key={domain}
              className="px-3 py-1 font-mono text-xs text-zinc-800 border border-zinc-300 rounded bg-white shadow-2xs font-medium"
            >
              {domain}
            </span>
          ))}
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 font-mono text-sm text-white bg-black rounded-lg hover:bg-zinc-800 transition-all font-semibold shadow-md cursor-pointer"
          >
            Explore Projects
            <ArrowRight size={16} />
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-7 py-3.5 font-mono text-sm text-black border border-black rounded-lg hover:bg-zinc-100 transition-all font-semibold cursor-pointer"
          >
            Work Experience
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 font-mono text-sm text-zinc-600 hover:text-black border border-zinc-300 rounded-lg hover:border-black transition-all cursor-pointer"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={22} className="text-zinc-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
