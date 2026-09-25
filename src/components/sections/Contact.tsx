'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
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
  const [copied, setCopied] = useState(false);
  const email = 'mohitgorhe@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-border-primary/60" aria-label="Contact">
      <div className="section-container">
        <div className="section-label">Communications Channel</div>
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-mono font-bold text-text-primary tracking-tight mb-4">
            Initialize Connection
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-12">
            Interested in discussing autonomous systems, UAS integration, distributed mesh
            networks, or agricultural AI? Reach out via direct channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Direct Channel Card (7 cols) */}
          <div className="lg:col-span-7 card p-6 sm:p-8 border-border-primary bg-bg-surface">
            <div className="font-mono text-xs text-accent-cyan uppercase tracking-wider mb-6 flex items-center justify-between">
              <span>PRIMARY DIRECT DISPATCH</span>
              <span className="flex items-center gap-1.5 text-accent-green">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                ACCEPTING INQUIRIES
              </span>
            </div>

            <div className="p-4 sm:p-6 rounded-xl border border-border-subtle bg-bg-primary/70 mb-6">
              <div className="font-mono text-xs text-text-muted mb-1">EMAIL ADDRESS</div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-base sm:text-xl font-bold text-text-primary break-all">
                  {email}
                </span>
                <button
                  onClick={copyToClipboard}
                  className="flex-shrink-0 p-2.5 rounded-lg border border-border-primary hover:border-accent-cyan hover:text-accent-cyan transition-colors text-text-secondary bg-bg-surface cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={18} className="text-accent-green" /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-cyan text-bg-primary font-mono text-sm font-semibold hover:bg-accent-cyan/90 transition-all shadow-[0_0_20px_rgba(0,212,255,0.2)]"
              >
                <Mail size={16} />
                Send Email
              </a>

              <a
                href="https://linkedin.com/in/mohitgorhe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border-primary hover:border-accent-cyan hover:text-text-primary text-text-secondary font-mono text-sm transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
                <ArrowUpRight size={14} className="opacity-60" />
              </a>

              <a
                href="https://github.com/mohitgorhe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border-primary hover:border-accent-cyan hover:text-text-primary text-text-secondary font-mono text-sm transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
                <ArrowUpRight size={14} className="opacity-60" />
              </a>
            </div>
          </div>

          {/* Telemetry Status Box (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl border border-border-primary bg-bg-surface/50 font-mono text-xs space-y-4">
              <div className="text-text-muted flex items-center justify-between">
                <span>COMMUNICATION STATUS</span>
                <span className="text-accent-cyan">STABLE</span>
              </div>
              <div className="h-px bg-border-subtle" />
              <div className="space-y-2 text-text-secondary">
                <div className="flex justify-between">
                  <span className="text-text-muted">LOCATION:</span>
                  <span>India [IST / UTC+5:30]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">PROFESSIONAL ROLE:</span>
                  <span>UAS Integration Engineer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">FREELANCE AVAILABILITY:</span>
                  <span className="text-accent-green">Open for IoT / Embedded / AI Systems</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">ENCRYPTION:</span>
                  <span>Standard TLS</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-border-subtle bg-bg-primary/40 font-mono text-xs text-text-muted leading-relaxed">
              &gt; Technical collaboration, autonomous systems R&amp;D, precision agriculture, and
              distributed mesh architectures.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
