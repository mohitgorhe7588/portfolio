export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50" role="contentinfo">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left */}
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-base font-bold text-black tracking-tight">
              MOHIT RAJENDRA GORHE
            </span>
            <span className="font-mono text-xs text-zinc-600">
              AI &amp; Data Science Engineer • UAS Integration Engineer @ Eulerian Bots
            </span>
          </div>

          {/* Center */}
          <div className="font-mono text-xs text-zinc-500 max-w-sm">
            Building systems where software, intelligence, networks, and physical machines interact.
          </div>

          {/* Right — Links */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://github.com/mohitgorhe"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-zinc-600 hover:text-black font-semibold transition-colors"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/mohitgorhe"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-zinc-600 hover:text-black font-semibold transition-colors"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <a
              href="mailto:mohitgorhe122@gmail.com"
              className="font-mono text-xs text-zinc-600 hover:text-black font-semibold transition-colors"
              aria-label="Email"
            >
              mohitgorhe122@gmail.com
            </a>
            <a
              href="tel:+919307572607"
              className="font-mono text-xs text-zinc-600 hover:text-black font-semibold transition-colors"
              aria-label="Phone"
            >
              +91 9307572607
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-zinc-500">
          <span>
            © {new Date().getFullYear()} Mohit Rajendra Gorhe. All engineering content verified.
          </span>
          <span className="flex items-center gap-2 text-black font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-black animate-pulse" />
            SYS.STATUS: OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  );
}
