'use client';

import { motion } from 'framer-motion';
import { Brain, Cpu, Terminal, Plane, Wifi } from 'lucide-react';
import { techCategories } from '@/data/tech-stack';

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Cpu,
  Terminal,
  Plane,
  Wifi,
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-24 sm:py-32" aria-label="Technology stack">
      <div className="section-container">
        <div className="section-label">Technology</div>
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-text-primary mb-4">
          System Stack
        </h2>
        <p className="max-w-2xl text-text-secondary mb-16">
          Technologies and tools across AI, systems engineering, robotics, and IoT —
          backed by actual project work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Brain;
            const accentBorder =
              category.accentColor === 'amber'
                ? 'hover:border-accent-amber-dim'
                : category.accentColor === 'green'
                ? 'hover:border-accent-green-dim'
                : 'hover:border-accent-cyan-dim';
            const accentText =
              category.accentColor === 'amber'
                ? 'text-accent-amber'
                : category.accentColor === 'green'
                ? 'text-accent-green'
                : 'text-accent-cyan';

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`card p-6 ${accentBorder} transition-all`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={20} className={accentText} />
                  <h3 className="font-mono text-sm font-semibold text-text-primary uppercase tracking-wide">
                    {category.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 font-mono text-xs text-text-secondary border border-border-subtle rounded hover:border-border-primary hover:text-text-primary transition-colors"
                    >
                      {tech}
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
