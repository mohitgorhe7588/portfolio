'use client';

import { useState } from 'react';
import FadeInUp from '@/components/ui/FadeInUp';
import MagneticButton from '@/components/ui/MagneticButton';

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
    <section id="contact" className="py-24 sm:py-36 bg-[#0a0a0f]" aria-label="Contact">
      <div className="section-container">
        {/* Asymmetric: 5 cols text / 7 cols links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <FadeInUp className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
              Get in touch
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed font-light">
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
                <span className="text-xs font-mono uppercase text-zinc-500 block mb-2">
                  Email
                </span>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                  <a
                    href={`mailto:${email}`}
                    className="text-xl sm:text-2xl font-normal text-zinc-100 hover:underline underline-offset-4 break-all"
                  >
                    {email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="self-start text-xs font-mono text-zinc-300 hover:text-white px-3 py-1 cursor-pointer bg-zinc-800 hover:bg-zinc-700 transition-colors"
                  >
                    {copiedEmail ? 'Copied ✓' : 'Copy email'}
                  </button>
                </div>
              </div>
            </FadeInUp>

            {/* Phone */}
            <FadeInUp delay={0.18}>
              <div>
                <span className="text-xs font-mono uppercase text-zinc-500 block mb-2">
                  Phone &amp; WhatsApp
                </span>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                  <a
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="text-xl sm:text-2xl font-normal text-zinc-100 hover:underline underline-offset-4"
                  >
                    {phone}
                  </a>
                  <button
                    onClick={copyPhone}
                    className="self-start text-xs font-mono text-zinc-300 hover:text-white px-3 py-1 cursor-pointer bg-zinc-800 hover:bg-zinc-700 transition-colors"
                  >
                    {copiedPhone ? 'Copied ✓' : 'Copy phone'}
                  </button>
                </div>
              </div>
            </FadeInUp>

            {/* Profiles */}
            <FadeInUp delay={0.26}>
              <div>
                <span className="text-xs font-mono uppercase text-zinc-500 block mb-3">
                  Profiles
                </span>
                <div className="flex flex-wrap gap-4">
                  <MagneticButton>
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-black text-xs font-mono font-medium hover:bg-zinc-200 transition-colors"
                    >
                      LinkedIn profile ↗
                    </a>
                  </MagneticButton>
                  <MagneticButton>
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-800 text-zinc-100 text-xs font-mono font-medium hover:bg-zinc-700 transition-colors"
                    >
                      GitHub profile ↗
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
