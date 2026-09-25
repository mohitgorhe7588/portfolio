'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Tech Stack', href: '#tech-stack' },
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

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-primary/90 backdrop-blur-md border-b border-border-primary'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="section-container flex items-center justify-between h-16">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="font-mono text-sm font-semibold tracking-wider text-text-primary hover:text-accent-cyan transition-colors"
        >
          MG<span className="text-accent-cyan">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-wide text-text-secondary hover:text-accent-cyan transition-colors duration-200 uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Status Indicator */}
        <div className="hidden md:flex items-center gap-2">
          <div className="status-dot bg-accent-green" />
          <span className="font-mono text-xs text-text-muted">Available</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-bg-primary/95 backdrop-blur-md border-b border-border-primary overflow-hidden"
          >
            <div className="section-container py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-sm text-text-secondary hover:text-accent-cyan transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2 border-t border-border-primary">
                <div className="status-dot bg-accent-green" />
                <span className="font-mono text-xs text-text-muted">Available</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
