export default function Footer() {
  const currentYear = new Date().getFullYear();
  const linkedinUrl = 'https://www.linkedin.com/in/mohit-gorhe-65046420b/';
  const githubUrl = 'https://github.com/mohitgorhe7588';

  return (
    <footer className="border-t border-zinc-200 bg-white py-12 text-sm text-zinc-600">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-start md:items-baseline justify-between gap-6">
          <div className="space-y-1">
            <span className="text-zinc-950 font-medium block">Mohit Rajendra Gorhe</span>
            <span className="text-xs text-zinc-500 font-mono">
              AI &amp; Data Science Engineer • UAS Integration at Eulerian Bots
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-black transition-colors"
            >
              GitHub
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-black transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:mohitgorhe122@gmail.com"
              className="text-zinc-600 hover:text-black transition-colors"
            >
              mohitgorhe122@gmail.com
            </a>
            <a
              href="tel:+919307572607"
              className="text-zinc-600 hover:text-black transition-colors"
            >
              +91 9307572607
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-zinc-400">
          <span>© {currentYear} Mohit Rajendra Gorhe</span>
          <span>Nashik, Maharashtra, India</span>
        </div>
      </div>
    </footer>
  );
}
