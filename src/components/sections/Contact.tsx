'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight, Copy, Check, MapPin } from 'lucide-react';
import { useState } from 'react';

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = 'mohitgorhe122@gmail.com';
  const phone = '+91 9307572607';

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
    <section id="contact" className="relative py-24 sm:py-32 bg-white" aria-label="Contact">
      <div className="section-container">
        <div className="section-label">Communications Channel</div>
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-mono font-bold text-black tracking-tight mb-4">
            Initialize Connection
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-12">
            Available for professional inquiries in Computer Vision, UAS Integration, Edge AI deployment,
            and autonomous robotics. Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Direct Channel Card (7 cols) */}
          <div className="lg:col-span-7 card p-6 sm:p-8 border border-zinc-200 bg-white shadow-sm">
            <div className="font-mono text-xs text-black uppercase tracking-wider mb-6 flex items-center justify-between pb-3 border-b border-zinc-100 font-bold">
              <span>DIRECT DISPATCH CONTACT</span>
              <span className="flex items-center gap-1.5 text-black">
                <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                AVAILABLE FOR INQUIRIES
              </span>
            </div>

            {/* Email Box */}
            <div className="p-4 sm:p-5 rounded-xl border border-zinc-200 bg-zinc-50 mb-4">
              <div className="font-mono text-xs text-zinc-500 mb-1 font-medium">PRIMARY EMAIL</div>
              <div className="flex items-center justify-between gap-4">
                <a
                  href={`mailto:${email}`}
                  className="font-mono text-base sm:text-xl font-bold text-black hover:underline break-all"
                >
                  {email}
                </a>
                <button
                  onClick={copyEmail}
                  className="flex-shrink-0 p-2.5 rounded-lg border border-zinc-300 hover:border-black hover:bg-black hover:text-white transition-colors text-black bg-white cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            {/* Phone Box (from CV) */}
            <div className="p-4 sm:p-5 rounded-xl border border-zinc-200 bg-zinc-50 mb-6">
              <div className="font-mono text-xs text-zinc-500 mb-1 font-medium">PHONE / WHATSAPP</div>
              <div className="flex items-center justify-between gap-4">
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="font-mono text-base sm:text-xl font-bold text-black hover:underline"
                >
                  {phone}
                </a>
                <button
                  onClick={copyPhone}
                  className="flex-shrink-0 p-2.5 rounded-lg border border-zinc-300 hover:border-black hover:bg-black hover:text-white transition-colors text-black bg-white cursor-pointer"
                  title="Copy phone number to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3.5">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-white font-mono text-sm font-semibold hover:bg-zinc-800 transition-all shadow-sm"
              >
                <Mail size={16} />
                Send Email
              </a>

              <a
                href="https://linkedin.com/in/mohitgorhe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-zinc-300 hover:border-black hover:bg-zinc-50 text-black font-mono text-sm font-medium transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
                <ArrowUpRight size={14} className="opacity-60" />
              </a>

              <a
                href="https://github.com/mohitgorhe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-zinc-300 hover:border-black hover:bg-zinc-50 text-black font-mono text-sm font-medium transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
                <ArrowUpRight size={14} className="opacity-60" />
              </a>
            </div>
          </div>

          {/* Telemetry Status Box (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl border border-zinc-200 bg-zinc-50 font-mono text-xs space-y-4">
              <div className="text-black flex items-center justify-between font-bold pb-2 border-b border-zinc-200">
                <span>COMMUNICATION TELEMETRY</span>
                <span className="text-zinc-600">STABLE</span>
              </div>
              <div className="space-y-2.5 text-zinc-700">
                <div className="flex justify-between">
                  <span className="text-zinc-500">BASE LOCATION:</span>
                  <span className="text-black font-semibold">Nashik, Maharashtra, India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">CURRENT POSITION:</span>
                  <span className="text-black font-semibold">UAS Integration Engineer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">ORGANIZATION:</span>
                  <span className="text-black font-semibold">Eulerian Bots</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">TIMEZONE:</span>
                  <span className="text-black font-semibold">IST [UTC+5:30]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">FREELANCE STATUS:</span>
                  <span className="text-black font-semibold">Open for IoT / Embedded / AI</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-zinc-200 bg-white font-mono text-xs text-zinc-600 leading-relaxed shadow-2xs">
              &gt; Open for tactical UAS R&amp;D, Computer Vision systems on edge silicon, and autonomous perception pipelines.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
