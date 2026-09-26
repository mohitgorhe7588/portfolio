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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
        isScrolled
          ? 'bg-[#fafafa]/90 backdrop-blur-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Brand */}
        <a
          href="#top"
          className={`text-sm font-semibold tracking-tight transition-opacity hover:opacity-70 ${
            isScrolled ? 'text-black' : 'text-white'
          }`}
        >
          Mohit Gorhe
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                isScrolled
                  ? 'text-zinc-600 hover:text-black'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Current affiliation */}
        <div className={`hidden md:flex items-center gap-2 text-xs font-mono ${
          isScrolled ? 'text-zinc-500' : 'text-zinc-400'
        }`}>
          <span className={`w-1.5 h-1.5 inline-block ${isScrolled ? 'bg-black' : 'bg-white'}`} />
          <span>Eulerian Bots — UAS Integration</span>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 cursor-pointer ${isScrolled ? 'text-black' : 'text-white'}`}
          aria-label={isMobileMenuOpen ? 'Close navigation' : 'Open navigation'}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#fafafa] px-6 py-6 space-y-4">
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
          <div className="pt-4 text-xs font-mono text-zinc-500">
            Eulerian Bots • UAS Integration Engineer
          </div>
        </div>
      )}
    </header>
  );
}
