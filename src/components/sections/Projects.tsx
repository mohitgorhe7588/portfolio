'use client';

import { useState, useRef } from 'react';
import { AnimatePresence, motion, useMotionValue, useTransform } from 'framer-motion';
import { featuredProjects, otherProjects, experiments, type Project } from '@/data/projects';
import FadeInUp, { StaggerContainer, StaggerItem } from '@/components/ui/FadeInUp';

function ProjectTiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1200 }}
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
        <article className="pt-10 sm:pt-14 pb-12 sm:pb-16 border-b border-zinc-100 last:border-0 group-hover:bg-zinc-50 transition-colors duration-300 px-0 group-hover:px-5">
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
              <p className="text-sm font-mono text-zinc-600">{project.subtitle}</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-xs font-mono text-zinc-700 bg-zinc-100">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-base text-zinc-700 leading-relaxed">{project.description}</p>

              {project.keyPoints && (
                <div className="space-y-2 pl-4 py-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-900 font-semibold block mb-3">
                    Engineering deliverables
                  </span>
                  <ul className="space-y-2.5">
                    {project.keyPoints.map((point, i) => (
                      <li key={i} className="text-sm text-zinc-600 leading-relaxed flex items-start gap-3">
                        {/* Custom bullet: small filled diamond */}
                        <span className="mt-[5px] shrink-0 w-1.5 h-1.5 bg-zinc-800 rotate-45 inline-block" />
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
                    className="group/btn text-xs font-mono text-zinc-900 flex items-center gap-2 hover:gap-3 transition-all duration-200 cursor-pointer"
                  >
                    <span className="h-px w-4 bg-zinc-400 group-hover/btn:w-6 transition-all duration-200" />
                    {isOpen ? 'Close technical notes' : 'Read technical notes and architecture'}
                    <span className="transition-transform duration-200 inline-block">{isOpen ? '↑' : '↓'}</span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-4 space-y-5 text-sm border-l border-zinc-200 pl-4">
                          {project.problem && (
                            <div>
                              <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">The challenge</span>
                              <p className="text-zinc-700 leading-relaxed">{project.problem}</p>
                            </div>
                          )}
                          {project.systemArchitecture && (
                            <div>
                              <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">System architecture</span>
                              <p className="text-zinc-700 leading-relaxed">{project.systemArchitecture}</p>
                            </div>
                          )}
                          {project.implementation && (
                            <div>
                              <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">Implementation</span>
                              <p className="text-zinc-700 leading-relaxed">{project.implementation}</p>
                            </div>
                          )}
                          {project.learnings && (
                            <div>
                              <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">Field learnings</span>
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
    <section id="projects" className="py-24 sm:py-36 bg-[#fafafa]" aria-label="Projects">
      <div className="section-container">
        <FadeInUp>
          <div className="max-w-2xl mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight">
              Projects
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-light">
              Systems developed across computer vision, edge compute on companion computers,
              payload actuation, and generative AI.
            </p>
          </div>
        </FadeInUp>

        {/* Featured Case Studies */}
        <div className="space-y-0">
          {featuredProjects.map((project, i) => (
            <FeaturedProjectItem key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Secondary Projects */}
        <div className="mt-20 pt-16 border-t border-zinc-100">
          <FadeInUp>
            <div className="max-w-xl mb-12">
              <h3 className="text-xl sm:text-2xl font-normal text-zinc-950 tracking-tight">
                Hardware, IoT &amp; Flight Systems
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Microcontroller firmware, telemetry analysis, and physical actuation builds from my CV.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {otherProjects.map((project) => (
              <StaggerItem key={project.id}>
                <div className="pt-5 space-y-2 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span>{project.statusLabel}</span>
                    <span className="text-zinc-500">{project.technologies.slice(0, 3).join(' · ')}</span>
                  </div>
                  <h4 className="text-lg font-medium text-zinc-900">{project.title}</h4>
                  <p className="text-xs font-mono text-zinc-500">{project.subtitle}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed pt-1">{project.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Additional research builds */}
        <div className="mt-20 pt-12 border-t border-zinc-100">
          <FadeInUp>
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400 mb-6">
              Additional research builds
            </h3>
          </FadeInUp>
          <StaggerContainer className="space-y-0">
            {experiments.map((item) => (
              <StaggerItem key={item.id}>
                <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm border-b border-zinc-100 last:border-0 hover:bg-zinc-50 transition-colors px-1">
                  <div className="flex items-start gap-3">
                    <span className="mt-[6px] shrink-0 w-1.5 h-1.5 bg-zinc-400 rotate-45 inline-block" />
                    <div>
                      <span className="font-medium text-zinc-900">{item.title}</span>
                      <span className="text-zinc-500 text-xs font-mono ml-3">{item.subtitle}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 shrink-0">{item.technologies.join(', ')}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
