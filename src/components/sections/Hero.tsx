'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Individual word that slides up on mount
function AnimatedWord({ word, delay }: { word: string; delay: number }) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {word}
      </motion.span>
    </span>
  );
}

// Typewriter effect for the role label
function Typewriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    setDisplayed('');
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && started && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}

export default function Hero() {
  const nameWords = ['Mohit', 'Rajendra', 'Gorhe'];

  return (
    <section
      id="top"
      className="relative min-h-[100vh] flex items-end overflow-hidden"
      aria-label="Introduction"
    >
      {/* Full-screen background video — desktop only */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video-desktop absolute inset-0 w-full h-full object-cover grayscale contrast-75 brightness-50"
        poster="/images/hero-drone.jpg"
      >
        <source src="/images/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Mobile: static background image (no video buffering) */}
      <div
        className="md:hidden absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero-drone.jpg)',
          filter: 'grayscale(100%) contrast(0.75) brightness(0.5)',
        }}
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

      {/* Content pinned to bottom */}
      <div className="relative z-10 section-container w-full pb-16 sm:pb-24 pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-end">
          {/* Left: Name & tagline */}
          <div className="lg:col-span-7">
            <motion.span
              className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typewriter text="AI & Data Science Engineer — Nashik, India" delay={0.1} />
            </motion.span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08] flex flex-wrap gap-x-4 gap-y-1">
              {nameWords.map((word, i) => (
                <AnimatedWord key={word} word={word} delay={0.3 + i * 0.13} />
              ))}
            </h1>

            <motion.p
              className="mt-5 text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              I build systems where computer vision, edge AI, and unmanned aerial hardware work together in the real world.
            </motion.p>
          </div>

          {/* Right: Quick details */}
          <motion.div
            className="lg:col-span-5 space-y-4 text-sm"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
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
            <motion.div
              className="pt-3 flex flex-wrap gap-3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
