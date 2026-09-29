'use client';

import { experiences, education } from '@/data/experience';
import FadeInUp, { StaggerContainer, StaggerItem } from '@/components/ui/FadeInUp';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-36" aria-label="Experience">
      <div className="section-container">
        <FadeInUp>
          <div className="max-w-2xl mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight">
              Experience
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-light">
              Field testing agricultural and defense drone platforms, integrating companion computers,
              and writing computer vision workflows.
            </p>
          </div>
        </FadeInUp>

        {/* Roles */}
        <StaggerContainer className="space-y-20">
          {experiences.map((exp) => (
            <StaggerItem key={exp.id}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 group">
                {/* Left: Organization, role, period */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-baseline justify-between lg:block">
                    <h3 className="text-xl font-medium text-zinc-950 group-hover:text-black transition-colors">{exp.company}</h3>
                    <span className="text-xs font-mono text-zinc-500 block lg:mt-1">{exp.period}</span>
                  </div>
                  <p className="text-sm font-semibold text-zinc-800">{exp.role}</p>
                  {exp.location && (
                    <p className="text-xs font-mono text-zinc-400">{exp.location}</p>
                  )}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {exp.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="px-2 py-0.5 text-xs font-mono text-zinc-600 bg-zinc-100 hover:bg-zinc-200 transition-colors"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Summary and deliverables */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
                    {exp.summary}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-mono uppercase text-zinc-400 block mb-3">
                      Verified deliverables
                    </span>
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
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Education */}
        <FadeInUp delay={0.1} className="mt-24 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
            <div className="lg:col-span-4">
              <h3 className="text-xl font-medium text-zinc-950">Education</h3>
              <span className="text-xs font-mono text-zinc-500 block mt-1">{education.period}</span>
            </div>

            <div className="lg:col-span-8 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h4 className="text-lg font-medium text-zinc-900">
                  {education.degree} in {education.field}
                </h4>
                <span className="text-sm font-mono font-semibold text-zinc-900">
                  CGPA: {education.score}
                </span>
              </div>
              <p className="text-sm text-zinc-600">{education.institution}</p>
              <p className="text-xs font-mono text-zinc-400">{education.location}</p>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
