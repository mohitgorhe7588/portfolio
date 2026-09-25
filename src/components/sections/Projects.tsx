'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { featuredProjects, otherProjects, experiments, type Project } from '@/data/projects';

// ─── Featured Project Card ──────────────────────────────────
function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="card p-6 sm:p-8 bg-white border border-border-primary hover:border-black transition-all"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block w-2 h-2 rounded-full bg-black animate-pulse" />
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider font-semibold">
              {project.statusLabel}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-mono font-bold text-black tracking-tight">
            {project.title}
          </h3>
          <p className="font-mono text-sm text-zinc-600 mt-1">{project.subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-zinc-700 leading-relaxed mb-6 text-sm sm:text-base">
        {project.description}
      </p>

      {/* Key Highlights from CV */}
      {project.keyPoints && (
        <div className="mb-6 space-y-2 bg-zinc-50/80 p-4 rounded-lg border border-zinc-200">
          <div className="font-mono text-xs uppercase tracking-wider text-black font-semibold mb-2">
            Key Engineering Highlights
          </div>
          <ul className="space-y-1.5">
            {project.keyPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700 font-mono">
                <CheckCircle2 size={15} className="text-black flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technology Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 font-mono text-xs text-black border border-zinc-300 rounded bg-white font-medium"
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
            className="px-2.5 py-0.5 font-mono text-xs rounded border border-black bg-black text-white font-medium"
          >
            {domain}
          </span>
        ))}
      </div>

      {/* Expand / Collapse for Deep Case Study */}
      {project.problem && (
        <>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-black hover:text-zinc-600 transition-colors font-semibold cursor-pointer border-b border-black pb-0.5"
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Hide Technical Case Study' : 'Read Full Engineering Case Study'}
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
                <div className="border-t border-zinc-200 mt-6 pt-6 space-y-6">
                  {project.problem && (
                    <CaseStudyBlock label="Problem Statement" content={project.problem} />
                  )}
                  {project.whyItMatters && (
                    <CaseStudyBlock label="Why It Matters" content={project.whyItMatters} />
                  )}
                  {project.systemArchitecture && (
                    <CaseStudyBlock label="System Architecture" content={project.systemArchitecture} />
                  )}
                  {project.implementation && (
                    <CaseStudyBlock label="Implementation & Pipeline" content={project.implementation} />
                  )}
                  {project.challenges && (
                    <CaseStudyBlock label="Engineering Challenges" content={project.challenges} />
                  )}
                  {project.learnings && (
                    <CaseStudyBlock label="Learnings & Field Insights" content={project.learnings} />
                  )}
                  {project.futureDirection && (
                    <CaseStudyBlock label="Next Steps" content={project.futureDirection} />
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
      <div className="font-mono text-xs text-black uppercase tracking-wider mb-1.5 font-bold">
        {label}
      </div>
      <p className="text-zinc-700 text-sm leading-relaxed">{content}</p>
    </div>
  );
}

// ─── Practical Projects Card ─────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="card p-6 bg-white border border-border-primary hover:border-black transition-all flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-black" />
          <span className="font-mono text-xs text-zinc-500 font-semibold uppercase">
            {project.statusLabel}
          </span>
        </div>
        <h3 className="font-mono text-base font-bold text-black mb-1">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-zinc-500 mb-3">{project.subtitle}</p>
        <p className="text-sm text-zinc-700 mb-4 leading-relaxed">{project.description}</p>
      </div>

      <div className="pt-4 border-t border-zinc-100 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 font-mono text-xs text-zinc-800 border border-zinc-300 rounded bg-zinc-50 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

// ─── Engineering Builds Card ─────────────────────────────────
function ExperimentCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.3 }}
      className="flex items-center gap-4 p-4 rounded-lg border border-zinc-200 bg-white hover:border-black transition-colors"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <h3 className="font-mono text-sm font-semibold text-black truncate">
          {project.title}
        </h3>
        <p className="text-xs text-zinc-500 truncate">{project.subtitle}</p>
      </div>
      <span className="font-mono text-xs text-zinc-500 font-medium flex-shrink-0">
        {project.statusLabel}
      </span>
    </motion.article>
  );
}

// ─── Main Projects Section ───────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-white" aria-label="Projects">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-label">Selected Engineering Work</div>
        <h2 className="text-3xl sm:text-5xl font-mono font-bold text-black tracking-tight mb-4">
          Projects & Case Studies
        </h2>
        <p className="max-w-3xl text-zinc-600 text-base sm:text-lg mb-16 leading-relaxed">
          Applied engineering across real-time Computer Vision, Edge AI on companion computers,
          UAS payload actuation, and GenAI applications — proven through physical hardware and field testing.
        </p>

        {/* Featured Case Studies */}
        <div className="space-y-6 mb-20">
          <div className="font-mono text-xs text-black uppercase tracking-widest mb-6 flex items-center gap-3 font-bold">
            <span className="w-5 h-0.5 bg-black" />
            Featured Technical Case Studies
          </div>
          <div className="space-y-8">
            {featuredProjects.map((project, i) => (
              <FeaturedProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* Practical Projects */}
        <div className="mb-20">
          <div className="font-mono text-xs text-black uppercase tracking-widest mb-6 flex items-center gap-3 font-bold">
            <span className="w-5 h-0.5 bg-black" />
            Hardware, IoT & Flight Systems
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* Technical Builds */}
        <div>
          <div className="font-mono text-xs text-black uppercase tracking-widest mb-6 flex items-center gap-3 font-bold">
            <span className="w-5 h-0.5 bg-zinc-400" />
            Additional Builds & Explorations
          </div>
          <div className="space-y-2.5 max-w-2xl">
            {experiments.map((project, i) => (
              <ExperimentCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
