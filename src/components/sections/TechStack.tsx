'use client';

import { motion } from 'framer-motion';
import { Brain, Cpu, Terminal, Plane, Eye } from 'lucide-react';
import { techCategories } from '@/data/tech-stack';

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Cpu,
  Terminal,
  Plane,
  Eye,
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-24 sm:py-32 bg-white border-b border-zinc-200" aria-label="Technology stack">
      <div className="section-container">
        <div className="section-label">Technical Competencies</div>
        <h2 className="text-3xl sm:text-5xl font-mono font-bold text-black tracking-tight mb-4">
          Skills &amp; Technology Stack
        </h2>
        <p className="max-w-3xl text-zinc-600 text-base sm:text-lg mb-16 leading-relaxed">
          Comprehensive breakdown of programming languages, deep learning frameworks, UAS flight control stacks,
          and embedded silicon utilized across research, prototyping, and production environments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Cpu;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="card p-6 sm:p-7 bg-white border border-zinc-200 hover:border-black transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3 pb-3 border-b border-zinc-100">
                    <div className="p-2 rounded-md bg-zinc-100 text-black border border-zinc-200">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-mono text-sm font-bold text-black uppercase tracking-wider">
                      {category.label}
                    </h3>
                  </div>

                  {category.description && (
                    <p className="text-xs text-zinc-500 mb-4 leading-relaxed font-sans">
                      {category.description}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 font-mono text-xs text-black border border-zinc-200 rounded bg-zinc-50 hover:border-black transition-colors font-medium"
                    >
                      {skill}
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
