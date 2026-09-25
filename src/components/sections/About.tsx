'use client';

import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, Binary } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32" aria-label="About Mohit Gorhe">
      <div className="section-container">
        <div className="section-label">Engineering Perspective</div>
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-text-primary tracking-tight mb-4">
          Where Software Meets Physical Machines
        </h2>
        <p className="max-w-2xl text-text-secondary text-base leading-relaxed mb-16">
          Building physical intelligence — from low-level silicon and telemetry protocols to deep
          learning and distributed decision systems.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-text-secondary text-base leading-relaxed">
            <p>
              I am an <span className="text-text-primary font-semibold">AI & Data Science Engineer</span>{' '}
              operating at the intersection of machine intelligence and physical systems. My work
              centers on building hardware-software architectures where{' '}
              <span className="text-accent-cyan">
                perception, communication, distributed computation, and physical actuation
              </span>{' '}
              converge.
            </p>

            <p>
              My background is not simply that of a software developer who touched hardware, nor a
              drone builder who picked up machine learning. It is an intentional progression across
              disciplines:
            </p>

            <div className="p-5 rounded-xl border border-border-primary bg-bg-surface/80 font-mono text-xs sm:text-sm text-text-primary space-y-2">
              <div className="text-accent-cyan text-xs uppercase tracking-wider mb-2">
                Core Architectural Philosophy
              </div>
              <p className="text-text-secondary leading-normal">
                True autonomous and connected systems cannot be solved in software silos. Real-world
                reliability requires understanding telemetry latency, embedded power constraints, RF
                mesh dynamics, and environmental sensor noise as intimately as algorithmic loss
                functions.
              </p>
            </div>

            <p>
              Whether engineering decentralized peer-to-peer communication across drone swarms,
              integrating computer vision pipelines into autonomous UAV platforms, or architecting
              resilient sensing and automation networks for farmers, I build systems engineered for
              unforgiving physical environments.
            </p>
          </div>

          {/* Technical Metadata & Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="card p-6 border-border-primary bg-bg-surface">
              <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan mb-4 uppercase tracking-wider">
                <Terminal size={16} />
                ENGINEERING PROFILE
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between pb-2 border-b border-border-subtle">
                  <span className="text-text-muted">NAME</span>
                  <span className="text-text-primary font-medium">Mohit Gorhe</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-border-subtle">
                  <span className="text-text-muted">DISCIPLINE</span>
                  <span className="text-text-primary font-medium">AI & Data Science Engineer</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-border-subtle">
                  <span className="text-text-muted">PRIMARY FOCUS</span>
                  <span className="text-text-primary font-medium">Intelligent Physical Systems</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-border-subtle">
                  <span className="text-text-muted">CURRENT ROLE</span>
                  <span className="text-accent-cyan font-medium">UAS Integration Engineer @ Eulerian Bits</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">SYSTEM PHILOSOPHY</span>
                  <span className="text-text-primary font-medium">Field-Tested / High Reliability</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border-primary bg-bg-surface/50">
                <Cpu size={18} className="text-accent-cyan mb-2" />
                <div className="font-mono text-sm font-semibold text-text-primary">End-to-End</div>
                <div className="font-mono text-xs text-text-muted mt-1">
                  Firmware, drivers, algorithms, and models
                </div>
              </div>
              <div className="p-4 rounded-xl border border-border-primary bg-bg-surface/50">
                <Shield size={18} className="text-accent-amber mb-2" />
                <div className="font-mono text-sm font-semibold text-text-primary">Rigorous Testing</div>
                <div className="font-mono text-xs text-text-muted mt-1">
                  Validated against physical world edge cases
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
