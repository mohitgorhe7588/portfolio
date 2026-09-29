'use client';

import { useState } from 'react';
import FadeInUp from '@/components/ui/FadeInUp';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = 'mohitgorhe122@gmail.com';
  const phone = '+91 9307572607';
  const linkedinUrl = 'https://www.linkedin.com/in/mohit-gorhe-65046420b/';
  const githubUrl = 'https://github.com/mohitgorhe7588';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 bg-[#fafafa]" aria-label="Contact">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <FadeInUp className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight">
              Get in touch
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed font-light">
              I am open to engineering roles, defense &amp; agricultural drone projects, and embedded computer vision work.
            </p>
            <div className="pt-4 text-xs font-mono text-zinc-500 space-y-1">
              <p>Location: Nashik, Maharashtra, India</p>
              <p>Timezone: IST (UTC+5:30)</p>
            </div>
          </FadeInUp>

          {/* Right */}
          <div className="lg:col-span-7 space-y-10">
            {/* Email */}
            <FadeInUp delay={0.1}>
              <div>
                <span className="text-xs font-mono uppercase text-zinc-400 block mb-2">Email</span>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                  <a
                    href={`mailto:${email}`}
                    className="text-xl sm:text-2xl font-normal text-zinc-950 hover:underline underline-offset-4 break-all transition-colors hover:text-zinc-600"
                  >
                    {email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="self-start text-xs font-mono text-zinc-600 hover:text-black px-3 py-1 cursor-pointer bg-zinc-100 hover:bg-zinc-200 transition-all duration-200 border border-transparent hover:border-zinc-300"
                  >
                    {copiedEmail ? '✓ Copied' : 'Copy email'}
                  </button>
                </div>
              </div>
            </FadeInUp>

            {/* Phone */}
            <FadeInUp delay={0.18}>
              <div>
                <span className="text-xs font-mono uppercase text-zinc-400 block mb-2">Phone &amp; WhatsApp</span>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                  <a
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="text-xl sm:text-2xl font-normal text-zinc-950 hover:underline underline-offset-4 transition-colors hover:text-zinc-600"
                  >
                    {phone}
                  </a>
                  <button
                    onClick={copyPhone}
                    className="self-start text-xs font-mono text-zinc-600 hover:text-black px-3 py-1 cursor-pointer bg-zinc-100 hover:bg-zinc-200 transition-all duration-200 border border-transparent hover:border-zinc-300"
                  >
                    {copiedPhone ? '✓ Copied' : 'Copy phone'}
                  </button>
                </div>
              </div>
            </FadeInUp>

            {/* Profiles */}
            <FadeInUp delay={0.26}>
              <div>
                <span className="text-xs font-mono uppercase text-zinc-400 block mb-4">Profiles</span>
                <div className="flex flex-wrap gap-4">

                  {/* LinkedIn — text slides left + arrow slides in from right */}
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center px-5 py-2.5 bg-black text-white text-xs font-mono font-medium overflow-hidden w-[140px] justify-center"
                  >
                    {/* Default label slides out left */}
                    <span className="absolute inset-0 flex items-center justify-center gap-1.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-full">
                      LinkedIn ↗
                    </span>
                    {/* Hover label slides in from right */}
                    <span className="absolute inset-0 flex items-center justify-center gap-1.5 translate-x-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 text-white">
                      Connect →
                    </span>
                  </a>

                  {/* GitHub — border wipe + bg invert */}
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center px-5 py-2.5 border border-zinc-900 text-zinc-900 text-xs font-mono font-medium overflow-hidden w-[140px] justify-center"
                  >
                    {/* bg wipes up */}
                    <span className="absolute inset-0 bg-zinc-900 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                    <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                      GitHub ↗
                    </span>
                  </a>

                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
