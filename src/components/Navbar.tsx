"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

// Main nav items
const primaryLinks = [
  { name: "SERVICES", href: "/services" },
  { name: "PROJECTS", href: "/projects" },
  { name: "OIL & GAS", href: "/oil-gas" },
];

// "THE COMPANY" dropdown items (image + label)
const companyLinks = [
  { name: "ABOUT US", href: "/about", image: "/img-person-5.jpg", sub: "Our story & team" },
  { name: "TEAM", href: "/team", image: "/img-construction.jpg", sub: "Meet the experts" },
  { name: "QHSE", href: "/qhse", image: "/qhse_health_safety.png", sub: "Safety & compliance" },
];

const ease = [0.25, 0.1, 0.25, 1] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close dropdown on route change
  useEffect(() => { setDropdownOpen(false); setIsMobileMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isCompanyActive = companyLinks.some((l) => pathname.startsWith(l.href));

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        <div className="container mx-auto py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="pointer-events-auto">
            <Logo isScrolled={isScrolled} />
          </Link>

          {/* Desktop pill nav — always dark charcoal */}
          <div className="hidden lg:flex pointer-events-auto items-center gap-1 px-3 py-2 rounded-md bg-charcoal/92 backdrop-blur-xl border border-white/8 shadow-[0_8px_40px_rgba(0,0,0,0.35)] ml-18">
            {primaryLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-[11px] font-mono font-bold tracking-[0.12em] transition-colors duration-200 rounded-lg ${isActive(link.href)
                  ? "text-white bg-white/10"
                  : "text-white/45 hover:text-white/80"
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* THE COMPANY dropdown trigger */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen((o) => !o)}
                className={`flex items-center gap-1.5 px-4 py-2 text-[11px] font-mono font-bold tracking-[0.12em] transition-colors duration-200 rounded-lg ${isCompanyActive || dropdownOpen
                  ? "text-white bg-white/10"
                  : "text-white/45 hover:text-white/80"
                  }`}
              >
                THE COMPANY
                <motion.span
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown size={12} />
                </motion.span>
              </button>

              {/* Dropdown panel */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.22, ease }}
                    className="absolute top-full right-0 mt-2 w-[340px] bg-charcoal/96 backdrop-blur-xl border border-white/8 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                  >
                    {companyLinks.map((item, i) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center gap-4 px-5 py-4 hover:bg-white/6 transition-colors duration-150 group ${i < companyLinks.length - 1 ? "border-b border-white/6" : ""
                          }`}
                      >
                        {/* Thumbnail */}
                        <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                        {/* Label */}
                        <div className="flex-1">
                          <p className="text-[11px] font-mono font-bold tracking-[0.15em] text-white/80 group-hover:text-white transition-colors">
                            {item.name}
                          </p>
                          <p className="text-white/35 text-xs mt-0.5">{item.sub}</p>
                        </div>
                        <ArrowRight size={13} className="text-white/25 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all duration-200" />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Divider */}
            <div className="w-px h-5 bg-white/10 mx-1" />

            {/* CTA — white pill */}
            <Link
              href="/contact"
              className="px-5 py-2 rounded-md bg-white text-charcoal text-[11px] font-mono font-bold tracking-[0.12em] hover:bg-gold transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden pointer-events-auto w-10 h-10 rounded-xl bg-charcoal/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-charcoal transition-colors"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-charcoal flex flex-col"
          >
            <div className="flex justify-between items-center px-6 pt-6 pb-4 border-b border-white/8">
              <Logo isScrolled={false} />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col px-6 pt-8 gap-1 overflow-y-auto">
              {[...primaryLinks, ...companyLinks.map((c) => ({ name: c.name, href: c.href }))].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3, delay: i * 0.05, ease }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-4 font-mono font-bold text-sm tracking-[0.15em] border-b border-white/6 transition-colors ${isActive(link.href) ? "text-gold" : "text-white/60 hover:text-white"
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-6 pb-10 pt-6">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-4 bg-white text-charcoal font-mono font-bold text-[11px] tracking-[0.15em] rounded-xl hover:bg-gold transition-colors"
              >
                Contact Us <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
