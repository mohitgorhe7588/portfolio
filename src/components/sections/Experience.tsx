'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { experiences, education, type Experience } from '@/data/experience';
import FadeInUp, { StaggerContainer, StaggerItem } from '@/components/ui/FadeInUp';

function ExperienceCard({
  exp,
  isOpen,
  onToggle,
}: {
  exp: Experience;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const statusColor = exp.status === 'current'
    ? 'text-zinc-900 bg-zinc-100'
    : exp.status === 'ongoing'
    ? 'text-zinc-600 bg-zinc-50'
    : 'text-zinc-400 bg-zinc-50';

  return (
    <StaggerItem>
      <div className={`border transition-all duration-300 ${isOpen ? 'border-zinc-400' : 'border-zinc-200 hover:border-zinc-300'}`}>
        {/* Card header — always visible, clickable */}
        <button
          onClick={onToggle}
          className="w-full text-left p-5 sm:p-6 group focus:outline-none"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5 flex-1 min-w-0">
              {/* Status badge + period */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-xs font-mono px-2 py-0.5 ${statusColor}`}>
                  {exp.status === 'current' ? '● Current' : exp.status === 'ongoing' ? '◐ Ongoing' : '○ Previous'}
                </span>
                <span className="text-xs font-mono text-zinc-400">{exp.period}</span>
              </div>

              {/* Company + role */}
              <h3 className="text-base sm:text-lg font-medium text-zinc-950 group-hover:text-black transition-colors">
                {exp.company}
              </h3>
              <p className="text-sm text-zinc-500 font-mono">{exp.role}</p>

              {/* Location */}
              {exp.location && (
                <p className="text-xs font-mono text-zinc-400">{exp.location}</p>
              )}

              {/* Focus area tags — compact */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.focusAreas.slice(0, 3).map((area) => (
                  <span key={area} className="px-1.5 py-0.5 text-xs font-mono text-zinc-500 bg-zinc-100">
                    {area}
                  </span>
                ))}
                {exp.focusAreas.length > 3 && (
                  <span className="text-xs font-mono text-zinc-400">+{exp.focusAreas.length - 3} more</span>
                )}
              </div>
            </div>

            {/* Toggle indicator */}
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0 mt-1 text-zinc-400 text-lg leading-none font-light"
            >
              +
            </motion.span>
          </div>
        </button>

        {/* Expandable detail */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-5 sm:px-6 pb-6 border-t border-zinc-100 pt-5 space-y-5">
                {/* Summary */}
                <p className="text-sm text-zinc-600 leading-relaxed">{exp.summary}</p>

                {/* All focus areas */}
                <div>
                  <span className="text-xs font-mono uppercase text-zinc-400 block mb-2">Focus areas</span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.focusAreas.map((area) => (
                      <span key={area} className="px-2 py-0.5 text-xs font-mono text-zinc-600 bg-zinc-100">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <span className="text-xs font-mono uppercase text-zinc-400 block mb-3">Verified deliverables</span>
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm text-zinc-600 leading-relaxed flex items-start gap-3">
                        <span className="mt-[5px] shrink-0 w-1.5 h-1.5 bg-zinc-800 rotate-45 inline-block" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </StaggerItem>
  );
}

export default function Experience() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);

  return (
    <section id="experience" className="py-24 sm:py-36" aria-label="Experience">
      <div className="section-container">
        <FadeInUp>
          <div className="max-w-2xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight">Experience</h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-light">
              Field testing agricultural and defense drone platforms, integrating companion computers,
              and writing computer vision workflows.
            </p>
          </div>
        </FadeInUp>

        {/* Experience cards */}
        <StaggerContainer className="space-y-3">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              isOpen={openId === exp.id}
              onToggle={() => toggle(exp.id)}
            />
          ))}
        </StaggerContainer>

        {/* Education — compact, no card needed */}
        <FadeInUp delay={0.1} className="mt-14 pt-10 border-t border-zinc-100">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h3 className="text-base font-medium text-zinc-950">
                {education.degree} in {education.field}
              </h3>
              <p className="text-sm text-zinc-500 mt-0.5">{education.institution}</p>
              <p className="text-xs font-mono text-zinc-400 mt-0.5">{education.location} · {education.period}</p>
            </div>
            <span className="text-sm font-mono font-semibold text-zinc-900 shrink-0">{education.score}</span>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
