"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import logo from "@/assets/images/logo.png"
import Image from "next/image";
const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Oil & Gas", href: "#oil-gas" },
  { name: "Projects", href: "#projects" },
];

const services = [
  { name: "Civil Engineering", href: "#services" },
  { name: "Project Management", href: "#services" },
  { name: "Construction", href: "#services" },
  { name: "Oil & Gas Services", href: "#oil-gas" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="mr-4">
              <Image src={logo} alt="logo" width={100} height={100} className="bg-white mx-auto rounded-md pr-2" />

            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              A Ghanaian-owned construction and engineering firm delivering
              world-class infrastructure solutions across Africa.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center hover:bg-maroon transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center hover:bg-maroon transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center hover:bg-maroon transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(service.href);
                    }}
                    className="text-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  23 Royal Palm Avenue, West Legon - Accra, Ghana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a
                  href="tel:+2330248915772"
                  className="text-white/70 hover:text-gold transition-colors text-sm"
                >
                  +233 024 891 5772
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:info@vertexridge.com"
                  className="text-white/70 hover:text-gold transition-colors text-sm"
                >
                  info@vertexridge.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Vertex Ridge Limited. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-white/50 hover:text-gold transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-white/50 hover:text-gold transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
