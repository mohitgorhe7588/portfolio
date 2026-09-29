'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { featuredProjects, otherProjects, experiments, type Project } from '@/data/projects';
import FadeInUp, { StaggerContainer, StaggerItem } from '@/components/ui/FadeInUp';

// ── Compact card shown in grid ──────────────────────────────────
function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  return (
    <StaggerItem>
      <button
        onClick={() => onOpen(project)}
        className="w-full text-left group border border-zinc-200 hover:border-zinc-400 bg-white hover:bg-zinc-50 transition-all duration-300 p-5 space-y-3 focus:outline-none"
      >
        {/* Top row: index + status */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-zinc-400">
            {(index + 1).toString().padStart(2, '0')}
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 group-hover:text-zinc-600 transition-colors">
            {project.statusLabel}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-medium text-zinc-900 leading-snug group-hover:text-black transition-colors">
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs font-mono text-zinc-500 line-clamp-2">{project.subtitle}</p>

        {/* Domains */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.domains.slice(0, 3).map((d) => (
            <span key={d} className="px-1.5 py-0.5 text-xs font-mono text-zinc-500 bg-zinc-100">
              {d}
            </span>
          ))}
        </div>

        {/* Open hint */}
        <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 group-hover:text-zinc-700 transition-colors pt-1">
          <span className="h-px w-3 bg-current transition-all duration-200 group-hover:w-5" />
          <span>View details</span>
        </div>
      </button>
    </StaggerItem>
  );
}

// ── Full detail modal/panel ─────────────────────────────────────
function ProjectDrawer({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="mt-6 border border-zinc-200 bg-white p-6 sm:p-8 space-y-6"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-light text-zinc-950 tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm font-mono text-zinc-500">{project.subtitle}</p>
        </div>
        <button
          onClick={onClose}
          className="shrink-0 text-xs font-mono text-zinc-400 hover:text-black transition-colors border border-zinc-200 hover:border-zinc-400 px-3 py-1.5"
        >
          Close ✕
        </button>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map((t) => (
          <span key={t} className="px-2 py-0.5 text-xs font-mono text-zinc-700 bg-zinc-100">
            {t}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">{project.description}</p>

      {/* Key Points */}
      {project.keyPoints && (
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-3">
            Engineering deliverables
          </span>
          <ul className="space-y-2.5">
            {project.keyPoints.map((point, i) => (
              <li key={i} className="text-sm text-zinc-600 leading-relaxed flex items-start gap-3">
                <span className="mt-[5px] shrink-0 w-1.5 h-1.5 bg-zinc-800 rotate-45 inline-block" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technical notes */}
      {(project.problem || project.systemArchitecture || project.implementation || project.learnings) && (
        <div className="grid sm:grid-cols-2 gap-6 border-t border-zinc-100 pt-6">
          {project.problem && (
            <div>
              <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">The challenge</span>
              <p className="text-sm text-zinc-600 leading-relaxed">{project.problem}</p>
            </div>
          )}
          {project.systemArchitecture && (
            <div>
              <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">Architecture</span>
              <p className="text-sm text-zinc-600 leading-relaxed">{project.systemArchitecture}</p>
            </div>
          )}
          {project.implementation && (
            <div>
              <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">Implementation</span>
              <p className="text-sm text-zinc-600 leading-relaxed">{project.implementation}</p>
            </div>
          )}
          {project.learnings && (
            <div>
              <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">Field learnings</span>
              <p className="text-sm text-zinc-600 leading-relaxed">{project.learnings}</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

// ── Main section ────────────────────────────────────────────────
export default function Projects() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [openOther, setOpenOther] = useState<Project | null>(null);

  const handleOpen = (p: Project, type: 'featured' | 'other') => {
    if (type === 'featured') {
      setOpenProject(prev => prev?.id === p.id ? null : p);
      setOpenOther(null);
    } else {
      setOpenOther(prev => prev?.id === p.id ? null : p);
      setOpenProject(null);
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-36 bg-[#fafafa]" aria-label="Projects">
      <div className="section-container">
        <FadeInUp>
          <div className="max-w-2xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight">Projects</h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-light">
              Systems developed across computer vision, edge compute, payload actuation, and generative AI.
              <span className="text-zinc-400 text-sm font-mono block mt-1">Click any card to expand details.</span>
            </p>
          </div>
        </FadeInUp>

        {/* Featured — 2-col card grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={(p) => handleOpen(p, 'featured')}
            />
          ))}
        </StaggerContainer>

        {/* Expanded detail drawer — appears below grid */}
        <AnimatePresence mode="wait">
          {openProject && (
            <ProjectDrawer project={openProject} onClose={() => setOpenProject(null)} />
          )}
        </AnimatePresence>

        {/* Other Projects */}
        <div className="mt-20">
          <FadeInUp>
            <h3 className="text-xl font-normal text-zinc-950 mb-8">Hardware, IoT &amp; Flight Systems</h3>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={(p) => handleOpen(p, 'other')}
              />
            ))}
          </StaggerContainer>
          <AnimatePresence mode="wait">
            {openOther && (
              <ProjectDrawer project={openOther} onClose={() => setOpenOther(null)} />
            )}
          </AnimatePresence>
        </div>

        {/* Experiments — simple list */}
        <div className="mt-16 pt-12 border-t border-zinc-100">
          <FadeInUp>
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400 mb-4">
              Additional research builds
            </h3>
          </FadeInUp>
          <StaggerContainer className="space-y-0">
            {experiments.map((item) => (
              <StaggerItem key={item.id}>
                <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm border-b border-zinc-100 last:border-0 hover:bg-zinc-50 transition-colors px-1">
                  <div className="flex items-start gap-3">
                    <span className="mt-[6px] shrink-0 w-1.5 h-1.5 bg-zinc-400 rotate-45 inline-block" />
                    <div>
                      <span className="font-medium text-zinc-900">{item.title}</span>
                      <span className="text-zinc-400 text-xs font-mono ml-2">{item.subtitle}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 shrink-0 pl-5 sm:pl-0">
                    {item.technologies.join(', ')}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
