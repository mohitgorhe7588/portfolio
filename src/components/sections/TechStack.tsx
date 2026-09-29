'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { techCategories } from '@/data/tech-stack';
import FadeInUp, { StaggerContainer, StaggerItem } from '@/components/ui/FadeInUp';

const skillLevels: Record<string, number> = {
  'Python': 90, 'OpenCV': 85, 'YOLO': 82, 'CNNs': 70,
  'Object Detection': 80, 'Pose Estimation': 72, 'Image Processing': 83,
  'Scikit-learn': 68, 'NumPy & Pandas': 85, 'TensorFlow (Basic)': 55,
  'LangChain': 78, 'RAG Architectures': 75, 'Google Gemini API': 80,
  'FAISS Vector Search': 74, 'Prompt Engineering': 82, 'LLM App Development': 72,
  'Hugging Face (Learning)': 45,
  'Flight Controller Calibration': 88, 'MCU Firmware & Bootloader Updates': 78,
  'Ground Control Station (GCS)': 85, 'Payload Release Integration': 82,
  'Telemetry Analysis': 80, 'INAV & Betaflight Tuning': 85, 'MAVLink Communication': 72,
  'Raspberry Pi (Edge AI)': 88, 'Arduino Uno': 82, 'Real-Time Onboard Inference': 78,
  'Load Cell & HX711 ADCs': 70, 'LDR & Servo Actuators': 72, 'GPIO Hardware Interfaces': 80,
  'C++': 65, 'Flask & Django': 72, 'Streamlit': 78,
  'SQL (PostgreSQL / MySQL / SQLite)': 70, 'Linux & CLI': 80,
  'Git & GitHub': 85, 'VS Code & Jupyter': 88,
};

function SkillBar({ skill, index }: { skill: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const level = skillLevels[skill] ?? 65;

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-zinc-700">{skill}</span>
        <span className="text-xs font-mono text-zinc-400">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: '0%' }}
          animate={isInView ? { width: `${level}%` } : { width: '0%' }}
          transition={{ duration: 0.85, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="skills" className="py-24 sm:py-36" aria-label="Technical skills">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left sticky heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <FadeInUp>
              <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight">Skills</h2>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed font-light">
                Languages, vision pipelines, flight controller stacks, and edge hardware used in my projects and field deployments.
              </p>
            </FadeInUp>
          </div>

          {/* Right — NO fixed height or scroll-panel on mobile; scroll-panel only on desktop */}
          <div className="lg:col-span-8 space-y-10 lg:max-h-[70vh] lg:overflow-y-auto lg:pr-3">
            {techCategories.map((category, ci) => (
              <FadeInUp key={category.id} delay={ci * 0.07}>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-lg font-medium text-zinc-950">{category.label}</h3>
                    {category.description && (
                      <span className="text-xs font-mono text-zinc-500">{category.description}</span>
                    )}
                  </div>
                  <div className="space-y-3 pt-1">
                    {category.skills.map((skill, si) => (
                      <SkillBar key={skill} skill={skill} index={si} />
                    ))}
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
