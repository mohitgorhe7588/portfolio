'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { featuredProjects, otherProjects, experiments, type Project } from '@/data/projects';

function FeaturedProjectItem({ project, index }: { project: Project; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="pt-10 sm:pt-14 pb-12 sm:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-zinc-400 font-medium">
              {(index + 1).toString().padStart(2, '0')}
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              {project.statusLabel}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-light text-zinc-950 tracking-tight leading-snug">
            {project.title}
          </h3>

          <p className="text-sm font-mono text-zinc-600">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-mono text-zinc-700 bg-zinc-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-base text-zinc-700 leading-relaxed">
            {project.description}
          </p>

          {project.keyPoints && (
            <div className="space-y-2 pl-4 py-1">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-900 font-semibold block mb-2">
                Engineering deliverables
              </span>
              <ul className="space-y-2">
                {project.keyPoints.map((point, i) => (
                  <li key={i} className="text-sm text-zinc-600 leading-relaxed flex items-start gap-2">
                    <span className="text-zinc-900 mt-1 font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.problem && (
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-xs font-mono text-zinc-900 underline underline-offset-4 hover:text-zinc-500 transition-colors cursor-pointer"
              >
                {isOpen ? 'Close technical notes ↑' : 'Read technical notes and architecture ↓'}
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 mt-4 space-y-5 text-sm">
                      {project.problem && (
                        <div>
                          <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">
                            The challenge
                          </span>
                          <p className="text-zinc-700 leading-relaxed">{project.problem}</p>
                        </div>
                      )}

                      {project.systemArchitecture && (
                        <div>
                          <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">
                            System architecture
                          </span>
                          <p className="text-zinc-700 leading-relaxed">{project.systemArchitecture}</p>
                        </div>
                      )}

                      {project.implementation && (
                        <div>
                          <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">
                            Implementation
                          </span>
                          <p className="text-zinc-700 leading-relaxed">{project.implementation}</p>
                        </div>
                      )}

                      {project.learnings && (
                        <div>
                          <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">
                            Field learnings
                          </span>
                          <p className="text-zinc-700 leading-relaxed">{project.learnings}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-36" aria-label="Projects">
      <div className="section-container">
        <div className="max-w-2xl mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight">
            Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-light">
            Systems developed across computer vision, edge compute on companion computers,
            payload actuation, and generative AI.
          </p>
        </div>

        {/* Featured Case Studies */}
        <div className="space-y-6">
          {featuredProjects.map((project, i) => (
            <FeaturedProjectItem key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Secondary Projects */}
        <div className="mt-20 pt-16">
          <div className="max-w-xl mb-12">
            <h3 className="text-xl sm:text-2xl font-normal text-zinc-950 tracking-tight">
              Hardware, IoT &amp; Flight Systems
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              Microcontroller firmware, telemetry analysis, and physical actuation builds from my CV.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {otherProjects.map((project) => (
              <div key={project.id} className="pt-5 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>{project.statusLabel}</span>
                  <span className="text-zinc-500">{project.technologies.slice(0, 3).join(' • ')}</span>
                </div>
                <h4 className="text-lg font-medium text-zinc-900">{project.title}</h4>
                <p className="text-xs font-mono text-zinc-500">{project.subtitle}</p>
                <p className="text-sm text-zinc-600 leading-relaxed pt-1">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional research builds */}
        <div className="mt-20 pt-12">
          <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400 mb-6">
            Additional research builds
          </h3>
          <div className="space-y-1">
            {experiments.map((item) => (
              <div
                key={item.id}
                className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm"
              >
                <div>
                  <span className="font-medium text-zinc-900">{item.title}</span>
                  <span className="text-zinc-500 text-xs font-mono ml-3">{item.subtitle}</span>
                </div>
                <span className="text-xs font-mono text-zinc-400">{item.technologies.join(', ')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
