"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Oil & Gas", href: "/oil-gas" },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "QHSE", href: "/qhse" },
];

const ease = [0.25, 0.1, 0.25, 1] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        <div className="container-vr py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="pointer-events-auto">
            <motion.div
              animate={{ scale: isScrolled ? 0.9 : 1 }}
              transition={{ duration: 0.4, ease }}
            >
              <Logo isScrolled={isScrolled} />
            </motion.div>
          </Link>

          {/* Desktop Pill Nav */}
          <motion.nav
            animate={
              isScrolled
                ? {
                  backgroundColor: "rgba(10,10,11,0.92)",
                  borderColor: "rgba(255,255,255,0.08)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
                }
                : {
                  backgroundColor: "rgba(10,10,11,0.25)",
                  borderColor: "rgba(255,255,255,0.15)",
                  boxShadow: "none",
                }
            }
            transition={{ duration: 0.5, ease }}
            className="hidden lg:flex pointer-events-auto items-center gap-1 px-5 py-2 rounded-md border backdrop-blur-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-semibold transition-colors duration-300 text-white/75 hover:text-white"
              >
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-md bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className={`relative z-10 ${isActive(link.href) ? "text-gold" : ""}`}>
                  {link.name}
                </span>
              </Link>
            ))}
          </motion.nav>

          {/* CTA + Mobile Toggle */}
          <div className="pointer-events-auto flex items-center gap-3">
            <Link
              href="/contact"
              className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-bold transition-all duration-400 ${isScrolled
                  ? "bg-gold text-charcoal hover:bg-gold/90 shadow-[0_0_24px_rgba(212,160,23,0.35)]"
                  : "bg-maroon text-white hover:bg-maroon/90 shadow-[0_0_24px_rgba(133,30,30,0.4)]"
                }`}
            >
              Contact
              <ArrowRight size={14} />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 rounded-md bg-black/30 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-charcoal/97 backdrop-blur-2xl flex flex-col"
          >
            {/* Close button */}
            <div className="flex justify-between items-center px-6 pt-6 pb-4">
              <Logo isScrolled={false} />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {[...navLinks, { name: "Contact", href: "/contact" }].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -32 }}
                  transition={{ duration: 0.35, delay: i * 0.06, ease }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 text-4xl font-bold transition-colors duration-200 border-b border-white/8 ${isActive(link.href) ? "text-gold" : "text-white/80 hover:text-white"
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom contact info */}
            <div className="px-8 pb-10 pt-4 border-t border-white/10">
              <p className="text-white/40 text-xs label-caps mb-2">Get in touch</p>
              <a href="tel:+2330248915772" className="text-white/70 text-sm hover:text-gold transition-colors">
                +233 024 891 5772
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
