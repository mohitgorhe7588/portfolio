'use client';

import { techCategories } from '@/data/tech-stack';

export default function TechStack() {
  return (
    <section id="skills" className="py-24 sm:py-36 bg-white" aria-label="Technical skills">
      <div className="section-container">
        {/* Asymmetric layout: 4 cols intro / 8 cols skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight">
              Skills
            </h2>
            <p className="mt-4 text-base text-zinc-600 leading-relaxed font-light">
              Languages, vision pipelines, flight controller stacks, and edge hardware used in my projects and field deployments.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-zinc-200">
            {techCategories.map((category) => (
              <div key={category.id} className="py-8 first:pt-0 last:pb-0 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-lg font-medium text-zinc-950">{category.label}</h3>
                  {category.description && (
                    <span className="text-xs font-mono text-zinc-500">
                      {category.description}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono text-zinc-800 bg-zinc-50 border border-zinc-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
