'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Notes', href: '#notes' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-150 ${
        isScrolled ? 'border-b border-zinc-200 py-3.5' : 'py-5'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Brand */}
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-black hover:opacity-70 transition-opacity"
        >
          Mohit Gorhe
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-600 hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Current affiliation */}
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-zinc-500">
          <span className="w-1.5 h-1.5 bg-black inline-block" />
          <span>Eulerian Bots — UAS Integration</span>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-black cursor-pointer"
          aria-label={isMobileMenuOpen ? 'Close navigation' : 'Open navigation'}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base text-zinc-900 font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-zinc-100 text-xs font-mono text-zinc-500">
            Eulerian Bots • UAS Integration Engineer
          </div>
        </div>
      )}
    </header>
  );
}
