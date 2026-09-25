'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32" aria-label="Professional experience">
      <div className="section-container">
        <div className="section-label">Experience</div>
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-text-primary mb-4">
          Professional Timeline
        </h2>
        <p className="max-w-2xl text-text-secondary mb-16">
          Real engineering roles across UAS, drone systems, and independent IoT work.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border-primary" aria-hidden="true" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const dotColor =
                exp.accentColor === 'amber'
                  ? 'bg-accent-amber border-accent-amber-dim'
                  : exp.accentColor === 'green'
                  ? 'bg-accent-green border-accent-green-dim'
                  : 'bg-accent-cyan border-accent-cyan-dim';

              const isActive = exp.status === 'current' || exp.status === 'ongoing';

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative pl-12 sm:pl-16"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2.5 sm:left-4.5 top-1 w-3 h-3 rounded-full border-2 ${dotColor} ${
                      isActive ? 'animate-pulse' : ''
                    }`}
                    aria-hidden="true"
                  />

                  {/* Content */}
                  <div className="card p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-mono text-lg font-bold text-text-primary">
                          {exp.company}
                        </h3>
                        <p className="font-mono text-sm text-accent-cyan">{exp.role}</p>
                      </div>
                      <span
                        className={`inline-flex items-center gap-2 font-mono text-xs px-3 py-1 rounded-full border ${
                          isActive
                            ? 'border-accent-green-dim text-accent-green'
                            : 'border-border-primary text-text-muted'
                        }`}
                      >
                        {isActive && <span className="status-dot bg-accent-green" />}
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-text-secondary mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="px-2 py-0.5 font-mono text-xs text-text-muted border border-border-subtle rounded"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
