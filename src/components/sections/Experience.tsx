'use client';

import { motion } from 'framer-motion';
import { experiences, education } from '@/data/experience';
import { Briefcase, GraduationCap, MapPin, CheckCircle2, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-zinc-50/50 border-b border-zinc-200" aria-label="Professional experience">
      <div className="section-container">
        <div className="section-label">Career & Track Record</div>
        <h2 className="text-3xl sm:text-5xl font-mono font-bold text-black tracking-tight mb-4">
          Professional Experience
        </h2>
        <p className="max-w-3xl text-zinc-600 text-base sm:text-lg mb-16 leading-relaxed">
          Hands-on engineering roles across UAS integration, Edge AI development, flight testing,
          and direct field deployments with defense and agricultural stakeholders.
        </p>

        {/* Experience Timeline */}
        <div className="relative mb-24">
          {/* Vertical timeline line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-zinc-300" aria-hidden="true" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isCurrent = exp.status === 'current';

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="relative pl-12 sm:pl-16"
                >
                  {/* Timeline node */}
                  <div
                    className={`absolute left-2.5 sm:left-4.5 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-black bg-white ${
                      isCurrent ? 'ring-4 ring-black/10' : ''
                    }`}
                    aria-hidden="true"
                  >
                    {isCurrent && <div className="w-1.5 h-1.5 rounded-full bg-black m-auto mt-0.5 animate-pulse" />}
                  </div>

                  {/* Card Content */}
                  <div className="card p-6 sm:p-8 bg-white border border-zinc-200 hover:border-black transition-all">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4 pb-4 border-b border-zinc-100">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-mono text-xl sm:text-2xl font-bold text-black">
                            {exp.company}
                          </h3>
                          {exp.location && (
                            <span className="inline-flex items-center gap-1 font-mono text-xs text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
                              <MapPin size={12} />
                              {exp.location}
                            </span>
                          )}
                        </div>
                        <p className="font-mono text-base font-semibold text-black">{exp.role}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1 rounded-full border border-black bg-black text-white font-semibold">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                      {exp.summary}
                    </p>

                    {/* Bullet Points from CV */}
                    <div className="mb-6 space-y-2">
                      <div className="font-mono text-xs uppercase tracking-wider text-black font-semibold mb-2">
                        Key Responsibilities & Deliverables
                      </div>
                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
                            <CheckCircle2 size={16} className="text-black flex-shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Focus Area Tags */}
                    <div className="pt-4 border-t border-zinc-100 flex flex-wrap gap-2">
                      {exp.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="px-2.5 py-1 font-mono text-xs text-zinc-800 border border-zinc-200 rounded bg-zinc-50 font-medium"
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

        {/* Education Highlight (from CV) */}
        <div className="pt-8">
          <div className="font-mono text-xs text-black uppercase tracking-widest mb-6 flex items-center gap-3 font-bold">
            <span className="w-5 h-0.5 bg-black" />
            Formal Education
          </div>

          <div className="card p-6 sm:p-8 bg-white border border-zinc-200 hover:border-black transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg border border-black bg-zinc-50 text-black flex-shrink-0">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="font-mono text-lg sm:text-xl font-bold text-black">
                  {education.degree} — {education.field}
                </h3>
                <p className="text-sm font-semibold text-zinc-700 mt-1">
                  {education.institution}
                </p>
                <p className="font-mono text-xs text-zinc-500 mt-0.5 flex items-center gap-2">
                  <MapPin size={12} />
                  {education.location} • {education.period}
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 border-t md:border-t-0 md:border-l border-zinc-200 pt-4 md:pt-0 md:pl-6 flex flex-col items-start md:items-end">
              <span className="font-mono text-xs text-zinc-500 uppercase">ACADEMIC SCORE</span>
              <span className="font-mono text-2xl font-bold text-black">{education.score}</span>
              <span className="font-mono text-xs text-zinc-600">Graduating Class of 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
