'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { featuredProjects, otherProjects, experiments, type Project } from '@/data/projects';
import SwarmMeshVisualizer from './SwarmMeshVisualizer';

// ─── Featured Project Card ──────────────────────────────────
function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const accentClass =
    project.accentColor === 'amber'
      ? 'text-accent-amber border-accent-amber-dim'
      : 'text-accent-cyan border-accent-cyan-dim';

  const dotClass =
    project.accentColor === 'amber' ? 'bg-accent-amber' : 'bg-accent-cyan';

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="card p-6 sm:p-8"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className={`inline-block w-2 h-2 rounded-full ${dotClass}`} />
            <span className="font-mono text-xs text-text-muted uppercase tracking-wide">
              {project.statusLabel}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-mono font-bold text-text-primary">
            {project.title}
          </h3>
          <p className="font-mono text-sm text-text-secondary mt-1">{project.subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-text-secondary leading-relaxed mb-6">{project.description}</p>

      {/* Technology Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 font-mono text-xs text-text-muted border border-border-subtle rounded bg-bg-primary/50"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Domain Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.domains.map((domain) => (
          <span
            key={domain}
            className={`px-2.5 py-1 font-mono text-xs rounded border ${accentClass} bg-transparent`}
          >
            {domain}
          </span>
        ))}
      </div>

      {/* Expand / Collapse for Case Study */}
      {project.problem && (
        <>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 font-mono text-sm text-accent-cyan hover:text-accent-cyan/80 transition-colors mb-4 cursor-pointer"
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Collapse Case Study' : 'View Full Technical Case Study'}
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="border-t border-border-primary pt-6 space-y-6">
                  {project.problem && (
                    <CaseStudyBlock label="Problem" content={project.problem} />
                  )}
                  {project.whyItMatters && (
                    <CaseStudyBlock label="Why It Matters" content={project.whyItMatters} />
                  )}
                  {project.systemArchitecture && (
                    <div>
                      <CaseStudyBlock label="System Architecture" content={project.systemArchitecture} />
                      {project.id === 'p2p-drone-swarm' && <SwarmMeshVisualizer />}
                    </div>
                  )}
                  {project.implementation && (
                    <CaseStudyBlock label="Implementation" content={project.implementation} />
                  )}
                  {project.challenges && (
                    <CaseStudyBlock label="Engineering Challenges" content={project.challenges} />
                  )}
                  {project.learnings && (
                    <CaseStudyBlock label="What I Learned" content={project.learnings} />
                  )}
                  {project.currentStatus && (
                    <CaseStudyBlock label="Current Status" content={project.currentStatus} />
                  )}
                  {project.futureDirection && (
                    <CaseStudyBlock label="Future Direction" content={project.futureDirection} />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </motion.article>
  );
}

// ─── Case Study Block ────────────────────────────────────────
function CaseStudyBlock({ label, content }: { label: string; content: string }) {
  return (
    <div>
      <div className="font-mono text-xs text-accent-cyan uppercase tracking-wide mb-2">
        {label}
      </div>
      <p className="text-text-secondary text-sm leading-relaxed">{content}</p>
    </div>
  );
}

// ─── Compact Project Card ────────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const dotClass =
    project.accentColor === 'amber'
      ? 'bg-accent-amber'
      : project.accentColor === 'green'
      ? 'bg-accent-green'
      : 'bg-accent-cyan';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="card p-5 hover:bg-bg-surface-hover transition-colors"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />
        <span className="font-mono text-xs text-text-muted">{project.statusLabel}</span>
      </div>
      <h3 className="font-mono text-base font-semibold text-text-primary mb-1">
        {project.title}
      </h3>
      <p className="text-sm text-text-secondary mb-3">{project.subtitle}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 font-mono text-xs text-text-muted border border-border-subtle rounded"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="px-2 py-0.5 font-mono text-xs text-text-muted">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>
    </motion.article>
  );
}

// ─── Experiment Card ─────────────────────────────────────────
function ExperimentCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.3 }}
      className="flex items-center gap-4 p-4 rounded-lg border border-border-subtle hover:border-border-primary transition-colors"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-text-muted flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <h3 className="font-mono text-sm font-medium text-text-primary truncate">
          {project.title}
        </h3>
        <p className="text-xs text-text-muted truncate">{project.subtitle}</p>
      </div>
      <span className="font-mono text-xs text-text-muted flex-shrink-0">
        {project.statusLabel}
      </span>
    </motion.article>
  );
}

// ─── Main Projects Section ───────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32" aria-label="Projects">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-label">Selected Work</div>
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-text-primary mb-4">
          Projects & Research
        </h2>
        <p className="max-w-2xl text-text-secondary mb-16">
          Engineering systems across AI, autonomous platforms, IoT, and agriculture
          automation. Each project represents real engineering work, not demos.
        </p>

        {/* Featured Projects */}
        <div className="space-y-6 mb-16">
          <div className="font-mono text-xs text-text-muted uppercase tracking-widest mb-6 flex items-center gap-3">
            <span className="w-4 h-px bg-accent-cyan" />
            Featured Projects
          </div>
          <div className="space-y-6">
            {featuredProjects.map((project, i) => (
              <FeaturedProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-16">
          <div className="font-mono text-xs text-text-muted uppercase tracking-widest mb-6 flex items-center gap-3">
            <span className="w-4 h-px bg-accent-amber" />
            Other Projects
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* Experiments */}
        <div>
          <div className="font-mono text-xs text-text-muted uppercase tracking-widest mb-6 flex items-center gap-3">
            <span className="w-4 h-px bg-text-muted" />
            Experiments / Builds
          </div>
          <div className="space-y-2 max-w-2xl">
            {experiments.map((project, i) => (
              <ExperimentCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
