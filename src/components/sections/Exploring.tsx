'use client';

import { motion } from 'framer-motion';
import { Compass, Radio, Cpu, Network, Sparkles } from 'lucide-react';

interface ExplorationTopic {
  title: string;
  category: string;
  icon: React.ElementType;
  description: string;
  notes: string;
  tags: string[];
}

const explorations: ExplorationTopic[] = [
  {
    title: 'Edge AI Quantization & Real-time Vision on Raspberry Pi',
    category: 'Edge Intelligence',
    icon: Cpu,
    description:
      'Benchmarking quantized object detection (YOLOv8/v11, ONNX Runtime, OpenCV DNN) on resource-constrained compute platforms for low-latency target tracking and obstacle awareness.',
    notes: 'Evaluating thermal envelope, frame-rate consistency, and MAVLink telemetry synchronization.',
    tags: ['Embedded CV', 'YOLO Quantization', 'Raspberry Pi', 'Edge Inference'],
  },
  {
    title: 'Low-Latency FPV Control & Flight Controller Firmware',
    category: 'UAS & Flight Systems',
    icon: Compass,
    description:
      'Tuning INAV and Betaflight parameters via CLI for aggressive maneuvering stability, payload delivery dynamics, and low-latency analog/digital video transmission.',
    notes: 'Validating control loop response times and fail-safe triggers during sudden wind shear.',
    tags: ['INAV', 'Betaflight', 'PID Tuning', 'FPV RF'],
  },
  {
    title: 'Integrated Perception-to-Actuation Pipelines',
    category: 'Autonomous Systems',
    icon: Network,
    description:
      'Deepening coupling between computer vision outputs (CSRT tracking, pose estimation) and physical actuators (solenoids, payload releases, servo gimbals).',
    notes: 'Bridging vision detections directly into real-time closed-loop actuation workflows.',
    tags: ['Computer Vision', 'Actuator Control', 'Closed-Loop Systems'],
  },
  {
    title: 'Sub-GHz Telemetry & Resilient Field Sensor Nodes',
    category: 'IoT & Telemetry',
    icon: Radio,
    description:
      'Experimenting with low-power radio communication and solar harvesting for long-range agricultural sensor arrays across remote farmland.',
    notes: 'Mitigating packet loss across agricultural crop canopies and testing soil moisture sensor lifespan.',
    tags: ['IoT', 'Arduino', 'Sensor Networks', 'Field Deployment'],
  },
];

export default function Exploring() {
  return (
    <section
      id="exploring"
      className="relative py-24 sm:py-32 bg-white border-b border-zinc-200"
      aria-label="Currently exploring"
    >
      <div className="section-container">
        <div className="section-label">Active Research &amp; Tinkering</div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-mono font-bold text-black tracking-tight mb-4">
              Currently Exploring
            </h2>
            <p className="max-w-3xl text-zinc-600 text-base sm:text-lg leading-relaxed">
              Active engineering vectors, hardware experiments, and software pipelines currently on my
              workbench.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-black font-semibold bg-zinc-100 px-3 py-1.5 rounded-full border border-zinc-200">
            <Sparkles size={14} className="text-black" />
            <span>BENCH EXPERIMENTS</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {explorations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="card p-6 sm:p-8 bg-white border border-zinc-200 hover:border-black transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-zinc-100">
                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider font-semibold">
                      {item.category}
                    </span>
                    <Icon size={18} className="text-black" />
                  </div>

                  <h3 className="font-mono text-lg sm:text-xl font-bold text-black mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-zinc-700 text-sm leading-relaxed mb-5 font-sans">
                    {item.description}
                  </p>

                  <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200 font-mono text-xs text-zinc-700 mb-6">
                    <span className="text-black font-bold mr-2">Bench Note:</span>
                    {item.notes}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded font-mono text-xs text-zinc-800 bg-zinc-50 border border-zinc-200 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
