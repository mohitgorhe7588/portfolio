export default function Footer() {
  const currentYear = new Date().getFullYear();
  const linkedinUrl = 'https://www.linkedin.com/in/mohit-gorhe-65046420b/';
  const githubUrl = 'https://github.com/mohitgorhe7588';

  return (
    <footer className="py-6 border-t border-zinc-100">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          {/* Left: name + copyright */}
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
            <span className="text-zinc-900 font-medium text-sm">Mohit Gorhe</span>
            <span>·</span>
            <span>© {currentYear}</span>
            <span>·</span>
            <span>Nashik, India</span>
          </div>

          {/* Right: quick links */}
          <div className="flex items-center gap-5 text-xs font-mono text-zinc-400">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:mohitgorhe122@gmail.com"
              className="hover:text-black transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
