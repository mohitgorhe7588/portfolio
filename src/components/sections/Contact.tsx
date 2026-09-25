'use client';

import { useState } from 'react';

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
    <section id="contact" className="py-24 sm:py-36 bg-zinc-50/60" aria-label="Contact">
      <div className="section-container">
        {/* Asymmetric layout: 5 cols text / 7 cols direct links & actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
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
          </div>

          {/* Right Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Email contact row */}
            <div className="border-t border-zinc-200 pt-6">
              <span className="text-xs font-mono uppercase text-zinc-400 block mb-2">
                Email
              </span>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                <a
                  href={`mailto:${email}`}
                  className="text-xl sm:text-2xl font-normal text-zinc-950 hover:underline underline-offset-4 break-all"
                >
                  {email}
                </a>
                <button
                  onClick={copyEmail}
                  className="self-start text-xs font-mono text-zinc-600 hover:text-black border border-zinc-300 px-3 py-1 cursor-pointer"
                >
                  {copiedEmail ? 'Copied' : 'Copy email'}
                </button>
              </div>
            </div>

            {/* Phone contact row */}
            <div className="border-t border-zinc-200 pt-6">
              <span className="text-xs font-mono uppercase text-zinc-400 block mb-2">
                Phone &amp; WhatsApp
              </span>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="text-xl sm:text-2xl font-normal text-zinc-950 hover:underline underline-offset-4"
                >
                  {phone}
                </a>
                <button
                  onClick={copyPhone}
                  className="self-start text-xs font-mono text-zinc-600 hover:text-black border border-zinc-300 px-3 py-1 cursor-pointer"
                >
                  {copiedPhone ? 'Copied' : 'Copy phone'}
                </button>
              </div>
            </div>

            {/* Profiles */}
            <div className="border-t border-zinc-200 pt-6">
              <span className="text-xs font-mono uppercase text-zinc-400 block mb-3">
                Profiles
              </span>
              <div className="flex flex-wrap gap-4">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-black text-white text-xs font-mono font-medium hover:bg-zinc-800 transition-colors"
                >
                  LinkedIn profile ↗
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-zinc-300 bg-white text-zinc-900 text-xs font-mono font-medium hover:border-black transition-colors"
                >
                  GitHub profile ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
