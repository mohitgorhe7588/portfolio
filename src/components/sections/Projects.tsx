'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { featuredProjects, otherProjects, experiments, type Project } from '@/data/projects';
import FadeInUp, { StaggerContainer, StaggerItem } from '@/components/ui/FadeInUp';

// ── Compact card — equal height via flex column ──────────────────
function ProjectCard({
  project,
  index,
  isSelected,
  onOpen,
}: {
  project: Project;
  index: number;
  isSelected: boolean;
  onOpen: () => void;
}) {
  return (
    <StaggerItem className="h-full">
      {/* h-full so all cards in the same row stretch equally */}
      <div
        className={`h-full flex flex-col border transition-all duration-300 ${
          isSelected
            ? 'border-zinc-900 bg-zinc-50'
            : 'border-zinc-200 hover:border-zinc-400 bg-white hover:bg-zinc-50'
        }`}
      >
        <div className="flex flex-col flex-1 p-5 space-y-3">
          {/* Top: index + status */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-zinc-400">
              {(index + 1).toString().padStart(2, '0')}
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              {project.statusLabel}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-medium text-zinc-900 leading-snug">
            {project.title}
          </h3>

          {/* Subtitle — fixed 2-line clamp keeps cards same height */}
          <p className="text-xs font-mono text-zinc-500 line-clamp-2 flex-1">
            {project.subtitle}
          </p>

          {/* Domain tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.domains.slice(0, 3).map((d) => (
              <span key={d} className="px-1.5 py-0.5 text-xs font-mono text-zinc-500 bg-zinc-100">
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* CTA button — pinned to bottom, always visible */}
        <button
          onClick={onOpen}
          className={`w-full px-5 py-3 text-xs font-mono font-medium flex items-center justify-between transition-all duration-300 focus:outline-none ${
            isSelected
              ? 'bg-zinc-900 text-white'
              : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-900 hover:text-white'
          }`}
        >
          <span>{isSelected ? 'Currently viewing' : 'View details'}</span>
          <span className={`transition-transform duration-300 ${isSelected ? 'rotate-45' : ''}`}>
            {isSelected ? '✕' : '→'}
          </span>
        </button>
      </div>
    </StaggerItem>
  );
}

// ── Inline expanded detail panel ─────────────────────────────────
function ProjectDetail({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden"
    >
      <div className="border border-zinc-900 bg-white p-6 sm:p-8 space-y-6">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1 flex-1 min-w-0">
            <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">{project.statusLabel}</p>
            <h3 className="text-xl sm:text-2xl font-light text-zinc-950 tracking-tight leading-snug">
              {project.title}
            </h3>
            <p className="text-sm font-mono text-zinc-500">{project.subtitle}</p>
          </div>
          {/* Close — bold, black, clearly visible */}
          <button
            onClick={onClose}
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white text-xs font-mono font-semibold hover:bg-black transition-colors"
          >
            Close ✕
          </button>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span key={t} className="px-2 py-0.5 text-xs font-mono text-zinc-700 bg-zinc-100">
              {t}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">{project.description}</p>

        {/* Key deliverables */}
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

        {/* Technical notes grid */}
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
      </div>
    </motion.div>
  );
}

// ── Grid that hides non-selected cards when one is open ──────────
function ProjectGrid({
  projects,
  selectedId,
  onSelect,
  cols = 2,
}: {
  projects: Project[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  cols?: 2 | 3;
}) {
  const colClass = cols === 3
    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    : 'grid-cols-1 sm:grid-cols-2';

  return (
    <div className="space-y-4">
      {/* Card grid — hides other cards when one selected */}
      <AnimatePresence mode="wait">
        {selectedId === null ? (
          <motion.div
            key="all-cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <StaggerContainer className={`grid ${colClass} gap-4 items-stretch`}>
              {projects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  isSelected={false}
                  onOpen={() => onSelect(project.id)}
                />
              ))}
            </StaggerContainer>
          </motion.div>
        ) : (
          <motion.div
            key="selected-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`grid ${colClass} gap-4 items-stretch`}
          >
            {projects
              .filter((p) => p.id === selectedId)
              .map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={projects.findIndex((p) => p.id === project.id)}
                  isSelected={true}
                  onOpen={() => onSelect(project.id)}
                />
              ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detail panel — opens below the (now single) card */}
      <AnimatePresence mode="wait">
        {selectedId && (() => {
          const p = projects.find((pr) => pr.id === selectedId);
          return p ? (
            <ProjectDetail key={selectedId} project={p} onClose={() => onSelect(selectedId)} />
          ) : null;
        })()}
      </AnimatePresence>
    </div>
  );
}

// ── Main section ─────────────────────────────────────────────────
export default function Projects() {
  const [featuredOpen, setFeaturedOpen] = useState<string | null>(null);
  const [otherOpen, setOtherOpen] = useState<string | null>(null);

  const toggleFeatured = (id: string) =>
    setFeaturedOpen((prev) => (prev === id ? null : id));

  const toggleOther = (id: string) =>
    setOtherOpen((prev) => (prev === id ? null : id));

  return (
    <section id="projects" className="py-24 sm:py-36 bg-[#fafafa]" aria-label="Projects">
      <div className="section-container">
        <FadeInUp>
          <div className="max-w-2xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight">Projects</h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-light">
              Systems developed across computer vision, edge compute, payload actuation, and generative AI.
            </p>
            <p className="text-xs font-mono text-zinc-400 mt-2">
              Click <span className="text-zinc-700 font-medium">View details</span> on any card to expand.
            </p>
          </div>
        </FadeInUp>

        {/* Featured projects — 2 col */}
        <FadeInUp delay={0.05}>
          <ProjectGrid
            projects={featuredProjects}
            selectedId={featuredOpen}
            onSelect={toggleFeatured}
            cols={2}
          />
        </FadeInUp>

        {/* Other projects — 3 col */}
        <div className="mt-20">
          <FadeInUp>
            <h3 className="text-xl font-normal text-zinc-950 mb-8">
              Hardware, IoT &amp; Flight Systems
            </h3>
          </FadeInUp>
          <FadeInUp delay={0.05}>
            <ProjectGrid
              projects={otherProjects}
              selectedId={otherOpen}
              onSelect={toggleOther}
              cols={3}
            />
          </FadeInUp>
        </div>

        {/* Experiments */}
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
