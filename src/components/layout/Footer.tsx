export default function Footer() {
  return (
    <footer className="border-t border-border-primary bg-bg-primary" role="contentinfo">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-sm font-semibold text-text-primary tracking-wider">
              MOHIT GORHE
            </span>
            <span className="font-mono text-xs text-text-muted">
              AI & Data Science Engineer
            </span>
          </div>

          {/* Center — Coordinates / System Info */}
          <div className="font-mono text-xs text-text-muted flex flex-col items-start md:items-center gap-1">
            <span>Building systems that perceive, communicate, decide and act.</span>
          </div>

          {/* Right — Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/mohitgorhe"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-text-muted hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/mohitgorhe"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-text-muted hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <a
              href="mailto:mohitgorhe122@gmail.com"
              className="font-mono text-xs text-text-muted hover:text-white transition-colors"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span className="font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} Mohit Gorhe. Engineered, not templated.
          </span>
          <span className="font-mono text-xs text-text-muted flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            SYS.STATUS: ONLINE
          </span>
        </div>
      </div>
    </footer>
  );
}
