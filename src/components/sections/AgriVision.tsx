'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Cpu, Brain, Smartphone, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

interface ArchitectureLayer {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ElementType;
  accent: 'cyan' | 'amber' | 'green' | 'blue';
  tag: string;
  description: string;
  modules: string[];
  status: string;
}

const layers: ArchitectureLayer[] = [
  {
    id: 'farmer-interface',
    name: '04. Farmer Interface Layer',
    subtitle: 'Human-Centered Interaction',
    icon: Smartphone,
    accent: 'amber',
    tag: 'Interface & Access',
    description:
      'Designing accessible control and observation points for real-world agricultural operators, considering varied technical literacy, connectivity constraints, and regional language requirements.',
    modules: [
      'Regional Language Support',
      'Telemetry & Soil Dashboard',
      'Actionable Alert Dispatcher',
      'Manual & Scheduled Irrigation Controls',
      'AI Recommendation Feed',
    ],
    status: 'Platform Vision / In Design',
  },
  {
    id: 'ai-layer',
    name: '03. Intelligence & Decision Layer',
    subtitle: 'Machine Learning & Computer Vision',
    icon: Brain,
    accent: 'cyan',
    tag: 'AI / Analytics',
    description:
      'Processing multi-modal inputs from field sensors and aerial/ground imaging to deliver high-confidence agronomic insights and intelligent actuation triggers.',
    modules: [
      'Crop Disease Detection (Computer Vision)',
      'Intelligent Irrigation Optimization',
      'Predictive Soil Moisture Decay Models',
      'Yield & Vegetative Indices Analysis',
      'Agronomic Advisory Recommendations',
    ],
    status: 'Evolving Model Pipelines',
  },
  {
    id: 'automation-layer',
    name: '02. Field Automation Layer',
    subtitle: 'Closed-Loop Actuation',
    icon: Cpu,
    accent: 'green',
    tag: 'Control Systems',
    description:
      'Physical actuation subsystems translating algorithmic decisions and manual commands into water flow, valve state adjustments, and field equipment actions.',
    modules: [
      'Automated Solenoid Valve Control',
      'Water Distribution Scheduling',
      'Hardware Fail-safe Mechanisms',
      'Pump & Reservoir Power Management',
      'Closed-Loop Feedback Telemetry',
    ],
    status: 'Prototype Testing & Validation',
  },
  {
    id: 'iot-layer',
    name: '01. IoT Sensing Layer',
    subtitle: 'Physical Environment Telemetry',
    icon: Wifi,
    accent: 'cyan',
    tag: 'Sensors & Mesh',
    description:
      'Low-power sensor clusters distributed across crop acreage measuring critical microclimate and soil variables under harsh outdoor weather conditions.',
    modules: [
      'Volumetric Soil Moisture Arrays',
      'Ambient Temp & Humidity Sensors',
      'Edge Microcontroller Nodes',
      'Low-Power Mesh / RF Telemetry',
      'Solar Harvesting & Battery Health',
    ],
    status: 'Active Hardware Integration',
  },
];

export default function AgriVision() {
  const [selectedLayerId, setSelectedLayerId] = useState<string>(layers[0].id);
  const activeLayer = layers.find((l) => l.id === selectedLayerId) || layers[0];

  return (
    <section
      id="agri-vision"
      className="relative py-24 sm:py-32 border-t border-border-primary/60 bg-gradient-to-b from-bg-primary via-bg-secondary/40 to-bg-primary"
      aria-label="Agriculture automation vision"
    >
      <div className="section-container">
        {/* Header */}
        <div className="section-label">Visionary Initiative</div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-text-primary tracking-tight mb-4">
              AI + Agriculture Automation / Farmer Stack
            </h2>
            <p className="max-w-3xl text-text-secondary text-base leading-relaxed">
              An evolving engineering platform designed to bridge physical field sensing,
              intelligent analytics, and automated control directly to the operational realities of
              farmers.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full border border-accent-amber/30 bg-accent-amber/10 text-accent-amber font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-accent-amber animate-pulse" />
            Evolving Platform Vision
          </div>
        </div>

        {/* Core Architecture Concept Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Layer Selector Stack (Left 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="flex items-center justify-between font-mono text-xs text-text-muted px-1 mb-2">
              <span className="flex items-center gap-2">
                <Layers size={14} className="text-accent-cyan" />
                SYSTEM ARCHITECTURE STACK
              </span>
              <span>INSPECT LEVEL</span>
            </div>

            {layers.map((layer) => {
              const isSelected = selectedLayerId === layer.id;
              const Icon = layer.icon;

              return (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative ${
                    isSelected
                      ? 'bg-bg-surface border-accent-cyan shadow-[0_0_24px_rgba(0,212,255,0.08)]'
                      : 'bg-bg-surface/50 border-border-primary hover:border-border-primary/80 hover:bg-bg-surface'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg border ${
                          isSelected
                            ? 'bg-accent-cyan/10 border-accent-cyan/40 text-accent-cyan'
                            : 'bg-bg-primary border-border-primary text-text-muted'
                        }`}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="font-mono text-sm font-semibold text-text-primary">
                          {layer.name}
                        </div>
                        <div className="text-xs text-text-muted font-mono">{layer.subtitle}</div>
                      </div>
                    </div>

                    <ArrowRight
                      size={16}
                      className={`transition-transform duration-300 ${
                        isSelected
                          ? 'text-accent-cyan translate-x-1'
                          : 'text-text-muted opacity-40'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Layer Deep Dive (Right 7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
                className="card p-6 sm:p-8 border-border-primary bg-bg-surface"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-border-subtle mb-6">
                  <div>
                    <span className="font-mono text-xs text-accent-cyan uppercase tracking-widest">
                      {activeLayer.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-mono font-bold text-text-primary mt-1">
                      {activeLayer.name}
                    </h3>
                  </div>

                  <div className="font-mono text-xs px-3 py-1 rounded border border-border-primary text-text-muted bg-bg-primary/60">
                    Status: <span className="text-text-secondary">{activeLayer.status}</span>
                  </div>
                </div>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8">
                  {activeLayer.description}
                </p>

                <div className="space-y-4">
                  <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
                    Core Technical Components & Objectives
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeLayer.modules.map((mod) => (
                      <div
                        key={mod}
                        className="flex items-start gap-2.5 p-3 rounded-lg border border-border-subtle bg-bg-primary/40 text-xs sm:text-sm text-text-secondary font-mono"
                      >
                        <CheckCircle2 size={15} className="text-accent-cyan flex-shrink-0 mt-0.5" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-text-muted">
                  <span>Architecture Note: Modular decoupling between telemetry & actuation</span>
                  <span className="text-accent-amber">Designed for real farm conditions</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Philosophical Statement Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl border border-accent-cyan/20 bg-gradient-to-r from-accent-cyan/5 via-bg-surface to-accent-amber/5 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-mono text-xs text-accent-cyan uppercase tracking-wider">
                Engineering Principle
              </span>
              <p className="mt-2 text-base sm:text-lg font-medium text-text-primary leading-snug">
                &ldquo;An integrated AI + IoT + automation platform designed around the real needs
                of farmers — where hardware reliability and regional accessibility supersede
                superficial complexity.&rdquo;
              </p>
            </div>
            <div className="flex-shrink-0 font-mono text-xs text-text-muted border-l-2 border-accent-amber/40 pl-4 py-1">
              <div>FIELD-FIRST ENGINEERING</div>
              <div className="text-text-secondary mt-1">Sensing → Intelligence → Action</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
