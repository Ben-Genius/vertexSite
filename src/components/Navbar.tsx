"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo, LogoCompact } from "./Logo";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Oil & Gas", href: "/oil-gas" },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "QHSE", href: "/qhse" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 container mx-auto px-4 sm:px-6 lg:px-8 py-4 pointer-events-none`}
    >
      <nav
        className={`pointer-events-auto transition-all duration-500  ${isScrolled
          ? "bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] py-2 px-6 rounded-md text-white"
          : "bg-transparent py-4 px-4"
          } flex items-center justify-between`}
      >
        {/* Logo */}
        <Link
          href="/"
          className={`hover:scale-105 transition-transform duration-300 ${isScrolled ? "mb-4" : ""}`}
        >
          <Logo isScrolled={isScrolled} />
        </Link>

        {/* Desktop Navigation */}
        <div className={`hidden lg:flex items-center gap-1 transition-all duration-500 rounded-md border border-white/10 ${isScrolled
          ? "bg-black/60 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.3)] py-2 px-6 text-white"
          : "bg-white/30 backdrop-blur-md py-2 px-4"
          } flex items-center justify-between`}>
          {navLinks.slice(0, 6).map((link) => {
            // For root route "/", exact match is needed
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm font-semibold transition-all duration-300 relative group truncate max-w-[120px] ${isScrolled ? "text-white" : ""}  ${isActive
                  ? "text-gold"
                  : "text-white/70 hover:text-gold"
                  }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold transition-all duration-300 ${isActive ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50"
                  }`} />
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            asChild
            className={`transition-all duration-500 rounded-md hover:text-white font-bold px-8 h-10 ${isScrolled
              ? "bg-gold text-white hover:bg-gold/90 shadow-[0_0_20px_rgba(245,166,35,0.3)]"
              : "bg-maroon text-white hover:bg-maroon/90"
              }`}
          >
            <Link href="/contact">
              Contact
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-full transition-all duration-300 ${isScrolled ? "text-white hover:bg-white/10" : "text-white hover:bg-maroon/20"
            }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="lg:hidden mt-4 rounded-3xl bg-black/80 backdrop-blur-2xl border border-white/10 overflow-hidden pointer-events-auto shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-2 p-6">
              {navLinks.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={handleMobileNavClick}
                    className={`flex items-center justify-center p-4 text-sm font-bold rounded-2xl transition-all ${isActive
                      ? "bg-gold text-maroon"
                      : "text-white hover:bg-white/10"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="col-span-2 mt-4">
                <Button
                  asChild
                  className="w-full h-12 bg-maroon hover:bg-maroon/90 text-white rounded-2xl font-bold"
                >
                  <Link href="/contact" onClick={handleMobileNavClick}>
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
