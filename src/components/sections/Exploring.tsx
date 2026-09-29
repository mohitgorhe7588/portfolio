'use client';

import FadeInUp, { StaggerContainer, StaggerItem } from '@/components/ui/FadeInUp';

const explorations = [
  {
    title: 'Edge AI quantization & real-time vision on Raspberry Pi',
    category: 'Edge compute',
    description:
      'Benchmarking quantized object detection models (YOLOv8/v11, ONNX Runtime, OpenCV DNN) on single-board computers for low-latency target tracking and obstacle detection.',
    notes: 'Testing thermal stability, frame-rate consistency, and MAVLink telemetry synchronization during continuous operation.',
    tags: ['YOLO Quantization', 'Raspberry Pi', 'OpenCV DNN', 'MAVLink'],
  },
  {
    title: 'Low-latency FPV control & flight controller parameter tuning',
    category: 'Flight systems',
    description:
      'Tuning INAV and Betaflight parameters via CLI for aggressive maneuvering stability, payload delivery dynamics, and low-latency analog/digital video transmission.',
    notes: 'Validating control loop response times and fail-safe triggers during sudden crosswinds.',
    tags: ['INAV', 'Betaflight', 'PID Tuning', 'FPV RF'],
  },
  {
    title: 'Coupling computer vision detections directly to physical actuators',
    category: 'Autonomous actuation',
    description:
      'Tightly integrating target bounding-box coordinates with physical actuators — including servo payload release mechanisms and dual-axis camera gimbals.',
    notes: 'Minimizing the latency between visual confirmation and mechanical release.',
    tags: ['CSRT Tracking', 'GPIO Actuation', 'Servo Control'],
  },
  {
    title: 'Sub-GHz telemetry for remote agricultural sensor nodes',
    category: 'Telemetry',
    description:
      'Testing low-power radio communication and solar harvesting for long-range agricultural sensor arrays spread across open fields.',
    notes: 'Measuring packet loss across dense plant canopies and monitoring probe durability in moist soil.',
    tags: ['RF Telemetry', 'Microcontrollers', 'Solar Nodes'],
  },
];

export default function Exploring() {
  return (
    <section id="notes" className="py-24 sm:py-36" aria-label="Workbench notes">
      <div className="section-container">
        <FadeInUp>
          <div className="max-w-2xl mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight">
              Workbench notes
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-light">
              Current bench experiments, firmware tuning, and software tests.
            </p>
          </div>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {explorations.map((item) => (
            <StaggerItem key={item.title}>
              <div className="space-y-3 group">
                <span className="text-xs font-mono uppercase text-zinc-400 block">
                  {item.category}
                </span>
                <h3 className="text-xl font-medium text-zinc-950 leading-snug group-hover:text-black transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
                <div className="text-xs text-zinc-700 bg-zinc-50 p-3 font-mono leading-relaxed border-l-2 border-zinc-300">
                  <span className="text-zinc-900 font-semibold block mb-0.5">Bench note:</span>
                  {item.notes}
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-mono text-zinc-600 bg-zinc-100 hover:bg-zinc-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
