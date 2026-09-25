'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Cpu, Brain, Smartphone, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

interface ArchitectureLayer {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ElementType;
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
    tag: 'Sensors & Mesh',
    description:
      'Low-power sensor clusters distributed across crop acreage measuring critical microclimate and soil variables under harsh outdoor weather conditions.',
    modules: [
      'Volumetric Soil Moisture Arrays',
      'Ambient Temp & Humidity Sensors',
      'Edge Microcontroller Nodes',
      'Low-Power RF Telemetry',
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
      className="relative py-24 sm:py-32 bg-zinc-50/50 border-b border-zinc-200"
      aria-label="Agriculture automation vision"
    >
      <div className="section-container">
        {/* Header */}
        <div className="section-label">Visionary Initiative</div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-mono font-bold text-black tracking-tight mb-4">
              AI + Agriculture Automation / Farmer Stack
            </h2>
            <p className="max-w-3xl text-zinc-600 text-base sm:text-lg leading-relaxed">
              An evolving engineering platform designed to bridge physical field sensing,
              intelligent analytics, and automated control directly to the operational realities of
              farmers.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full border border-black bg-white text-black font-mono text-xs font-semibold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            Platform Architecture Vision
          </div>
        </div>

        {/* Core Architecture Concept Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Layer Selector Stack (Left 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="flex items-center justify-between font-mono text-xs text-zinc-500 px-1 mb-2 font-semibold">
              <span className="flex items-center gap-2 text-black">
                <Layers size={14} className="text-black" />
                SYSTEM ARCHITECTURE STACK
              </span>
              <span>SELECT LAYER</span>
            </div>

            {layers.map((layer) => {
              const isSelected = selectedLayerId === layer.id;
              const Icon = layer.icon;

              return (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 relative cursor-pointer ${
                    isSelected
                      ? 'bg-black border-black text-white shadow-md'
                      : 'bg-white border-zinc-200 hover:border-black text-black'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`p-2 rounded-lg border ${
                          isSelected
                            ? 'bg-zinc-800 border-zinc-700 text-white'
                            : 'bg-zinc-100 border-zinc-200 text-black'
                        }`}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <div
                          className={`font-mono text-sm font-bold ${
                            isSelected ? 'text-white' : 'text-black'
                          }`}
                        >
                          {layer.name}
                        </div>
                        <div
                          className={`text-xs font-mono mt-0.5 ${
                            isSelected ? 'text-zinc-300' : 'text-zinc-500'
                          }`}
                        >
                          {layer.subtitle}
                        </div>
                      </div>
                    </div>

                    <ArrowRight
                      size={16}
                      className={`transition-transform duration-200 ${
                        isSelected
                          ? 'text-white translate-x-1'
                          : 'text-zinc-400 opacity-60'
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
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="card p-6 sm:p-8 border border-zinc-200 bg-white shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-zinc-100 mb-6">
                  <div>
                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                      {activeLayer.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-mono font-bold text-black mt-1">
                      {activeLayer.name}
                    </h3>
                  </div>

                  <div className="font-mono text-xs px-3 py-1 rounded border border-zinc-300 text-black bg-zinc-50 font-semibold">
                    Status: <span>{activeLayer.status}</span>
                  </div>
                </div>

                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-8 font-sans">
                  {activeLayer.description}
                </p>

                <div className="space-y-4">
                  <div className="font-mono text-xs text-black uppercase tracking-wider font-bold">
                    Core Technical Components &amp; Objectives
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeLayer.modules.map((mod) => (
                      <div
                        key={mod}
                        className="flex items-start gap-2.5 p-3 rounded-lg border border-zinc-200 bg-zinc-50 text-xs sm:text-sm text-zinc-800 font-mono font-medium"
                      >
                        <CheckCircle2 size={16} className="text-black flex-shrink-0 mt-0.5" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-zinc-500">
                  <span>Architecture: Modular decoupling between telemetry &amp; actuation</span>
                  <span className="text-black font-semibold">Engineered for harsh farm conditions</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Philosophical Statement Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl border border-zinc-200 bg-white relative overflow-hidden shadow-sm">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-mono text-xs text-black uppercase tracking-wider font-bold">
                Platform Philosophy
              </span>
              <p className="mt-2 text-base sm:text-lg font-medium text-black leading-relaxed">
                &ldquo;An integrated AI + IoT + automation platform designed around the real needs
                of farmers — where hardware reliability, regional accessibility, and physical feedback supersede
                superficial complexity.&rdquo;
              </p>
            </div>
            <div className="flex-shrink-0 font-mono text-xs text-zinc-600 border-l-2 border-black pl-4 py-1">
              <div className="text-black font-bold">FIELD-FIRST ENGINEERING</div>
              <div className="mt-1">Sensing → Intelligence → Action</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
