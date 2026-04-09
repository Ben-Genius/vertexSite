"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ShieldCheck, Award, ArrowRight, Send } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Projects", href: "/projects" },
  { name: "QHSE Policy", href: "/qhse" },
];

const serviceLinks = [
  { name: "Civil Engineering", href: "/services" },
  { name: "Construction & Works", href: "/services" },
  { name: "Project Management", href: "/services" },
  { name: "Oil & Gas Services", href: "/oil-gas" },
];

const certBadges = [
  { icon: ShieldCheck, label: "ISO 9001:2015" },
  { icon: ShieldCheck, label: "ISO 14001:2018" },
  { icon: ShieldCheck, label: "OHSAS 18001" },
  { icon: Award, label: "GNPC Licensed" },
];

const ease = [0.25, 0.1, 0.25, 1] as const;

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-charcoal text-white overflow-hidden">
      {/* Pre-footer CTA Band */}
      <div className="bg-maroon py-16 px-6">
        <div className="container-vr flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="label-caps text-white/60 mb-3">Start Your Next Project</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Build?
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-maroon font-bold rounded-full hover:bg-gold hover:text-white transition-all duration-300 text-sm"
            >
              Start Your Project
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-bold rounded-full hover:border-white hover:bg-white/10 transition-all duration-300 text-sm"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-vr py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1 space-y-6">
            <div className="inline-block">
              <Image
                src={logo}
                alt="Vertex Ridge"
                width={90}
                height={90}
                className="bg-white rounded-lg p-1.5"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              A Ghanaian-owned construction and engineering firm delivering world-class infrastructure solutions across Africa.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-maroon transition-all duration-300 hover:scale-110"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm leading-relaxed">
                  23 Royal Palm Avenue, West Legon — Accra, Ghana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-gold flex-shrink-0" />
                <a href="tel:+2330248915772" className="text-white/60 hover:text-gold transition-colors text-sm">
                  +233 024 891 5772
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-gold flex-shrink-0" />
                <a href="mailto:info@vertexridge.com" className="text-white/60 hover:text-gold transition-colors text-sm">
                  info@vertexridge.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5 — Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-6">Stay Updated</h4>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Project updates and industry insights from our team.
            </p>
            {submitted ? (
              <p className="text-gold text-sm font-semibold">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 min-w-0 bg-white/8 border border-white/15 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/60 transition-colors"
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-full bg-gold flex items-center justify-center hover:bg-gold/80 transition-colors flex-shrink-0"
                  aria-label="Subscribe"
                >
                  <Send size={14} className="text-charcoal" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Certification Badges Strip */}
      <div className="border-t border-white/8 py-5">
        <div className="container-vr flex flex-wrap items-center justify-center gap-3">
          {certBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-1.5 border border-white/12 rounded-full"
            >
              <Icon size={12} className="text-gold" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-white/60">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="container-vr py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Vertex Ridge Limited. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="#" className="text-white/40 hover:text-gold transition-colors text-xs">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/40 hover:text-gold transition-colors text-xs">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
