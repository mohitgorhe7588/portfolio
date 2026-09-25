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
    title: 'Distributed Swarm Consensus Protocols',
    category: 'Swarm Robotics & Networks',
    icon: Network,
    description:
      'Investigating decentralized consensus algorithms and peer-to-peer state synchronization across high-mobility UAV mesh networks without single-point leaders.',
    notes: 'Focusing on low-bandwidth message passing and fault-tolerant topology reconfiguration.',
    tags: ['P2P Mesh', 'Consensus Algorithms', 'BATMAN-adv', 'UAV Swarms'],
  },
  {
    title: 'Edge AI & Lightweight Vision Models on Companion Hardware',
    category: 'Edge Intelligence',
    icon: Cpu,
    description:
      'Benchmarking quantized object detection (YOLOv8/v11, TensorRT, ONNX Runtime) on resource-constrained compute platforms for low-latency target tracking and obstacle awareness.',
    notes: 'Evaluating thermal envelope, frame-rate consistency, and MAVLink telemetry synchronization.',
    tags: ['Embedded CV', 'YOLO Quantization', 'TensorRT', 'Edge Inference'],
  },
  {
    title: 'Resilient Microclimate & Soil Telemetry Networks',
    category: 'IoT & Field Systems',
    icon: Radio,
    description:
      'Experimenting with ultra-low-power radio protocols, sleep cycling, and ruggedized edge nodes for long-range agricultural sensor arrays across remote farmland.',
    notes: 'Addressing packet loss in dense canopy environments and solar energy harvesting stability.',
    tags: ['Sub-GHz RF', 'Low-Power Firmware', 'Soil Telemetry', 'Field Deployment'],
  },
  {
    title: 'Integrated Perception-to-Control Pipelines',
    category: 'Autonomous Systems',
    icon: Compass,
    description:
      'Deepening coupling between computer vision outputs, state estimation filters, and flight controller command generation for smooth closed-loop tracking behavior.',
    notes: 'Bridging computer vision detections directly into real-time PID and trajectory control loops.',
    tags: ['MAVLink Autonomy', 'PID Tuning', 'Control Systems', 'State Estimation'],
  },
];

export default function Exploring() {
  return (
    <section
      id="exploring"
      className="relative py-24 sm:py-32 border-t border-border-primary/50"
      aria-label="Currently exploring"
    >
      <div className="section-container">
        <div className="section-label">Active Research & Tinkering</div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-text-primary tracking-tight mb-4">
              Currently Exploring
            </h2>
            <p className="max-w-2xl text-text-secondary text-base leading-relaxed">
              Technical domains, experimental architectures, and research vectors currently on my
              engineering bench.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-text-muted">
            <Sparkles size={14} className="text-accent-cyan" />
            <span>ACTIVE FOCUS AREAS</span>
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
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="card p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="font-mono text-xs text-accent-cyan uppercase tracking-wider">
                      {item.category}
                    </span>
                    <Icon size={18} className="text-text-muted" />
                  </div>

                  <h3 className="font-mono text-lg sm:text-xl font-bold text-text-primary mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="p-3 rounded-lg bg-bg-primary/50 border border-border-subtle font-mono text-xs text-text-muted mb-6">
                    <span className="text-accent-amber mr-2">Bench Note:</span>
                    {item.notes}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border-subtle">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded font-mono text-xs text-text-muted bg-bg-surface border border-border-subtle"
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
