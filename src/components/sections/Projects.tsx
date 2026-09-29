'use client';

import { useState, useRef } from 'react';
import { AnimatePresence, motion, useMotionValue, useTransform } from 'framer-motion';
import { featuredProjects, otherProjects, experiments, type Project } from '@/data/projects';
import FadeInUp, { StaggerContainer, StaggerItem } from '@/components/ui/FadeInUp';

function ProjectTiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1200 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="relative group"
    >
      {children}
    </motion.div>
  );
}

function FeaturedProjectItem({ project, index }: { project: Project; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FadeInUp delay={index * 0.1}>
      <ProjectTiltCard>
        <article className="pt-10 sm:pt-14 pb-12 sm:pb-16 border border-transparent group-hover:border-zinc-200 transition-all duration-300 px-0 group-hover:px-6 rounded-none">
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
                        transition={{ duration: 0.28 }}
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
      </ProjectTiltCard>
    </FadeInUp>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-36 bg-[#0a0a0f]" aria-label="Projects">
      <div className="section-container">
        <FadeInUp>
          <div className="max-w-2xl mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
              Projects
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
              Systems developed across computer vision, edge compute on companion computers,
              payload actuation, and generative AI.
            </p>
          </div>
        </FadeInUp>

        {/* Featured Case Studies */}
        <div className="space-y-6">
          {featuredProjects.map((project, i) => (
            <div key={project.id} className="text-zinc-100">
              <style>{`
                #projects .text-zinc-950 { color: #fafafa; }
                #projects .text-zinc-700 { color: #a1a1aa; }
                #projects .text-zinc-600 { color: #71717a; }
                #projects .text-zinc-500 { color: #52525b; }
                #projects .text-zinc-400 { color: #3f3f46; }
                #projects .bg-zinc-100 { background-color: #18181b; }
                #projects .text-zinc-700.bg-zinc-100 { color: #a1a1aa; }
                #projects article { border-color: #27272a !important; }
                #projects article:hover { border-color: #3f3f46 !important; }
                #projects .text-zinc-900 { color: #e4e4e7; }
                #projects .underline { color: #e4e4e7; }
              `}</style>
              <FeaturedProjectItem project={project} index={i} />
            </div>
          ))}
        </div>

        {/* Secondary Projects */}
        <div className="mt-20 pt-16">
          <FadeInUp>
            <div className="max-w-xl mb-12">
              <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight">
                Hardware, IoT &amp; Flight Systems
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Microcontroller firmware, telemetry analysis, and physical actuation builds from my CV.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {otherProjects.map((project) => (
              <StaggerItem key={project.id}>
                <div className="pt-5 space-y-2 group hover:translate-y-[-3px] transition-transform duration-300">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span>{project.statusLabel}</span>
                    <span className="text-zinc-600">{project.technologies.slice(0, 3).join(' • ')}</span>
                  </div>
                  <h4 className="text-lg font-medium text-zinc-100">{project.title}</h4>
                  <p className="text-xs font-mono text-zinc-500">{project.subtitle}</p>
                  <p className="text-sm text-zinc-400 leading-relaxed pt-1">
                    {project.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Additional research builds */}
        <div className="mt-20 pt-12">
          <FadeInUp>
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-600 mb-6">
              Additional research builds
            </h3>
          </FadeInUp>
          <StaggerContainer className="space-y-1">
            {experiments.map((item) => (
              <StaggerItem key={item.id}>
                <div
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm border-b border-zinc-800 last:border-0"
                >
                  <div>
                    <span className="font-medium text-zinc-200">{item.title}</span>
                    <span className="text-zinc-500 text-xs font-mono ml-3">{item.subtitle}</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-600">{item.technologies.join(', ')}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
