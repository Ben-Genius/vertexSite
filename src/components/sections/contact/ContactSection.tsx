"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Send, CheckCircle2 } from "lucide-react";
import { ChronicleButton } from "@/components/ui/chronicle-button";

const ease = [0.25, 0.1, 0.25, 1] as const;

const projectTypes = [
  "Civil Engineering",
  "Construction & Civil Works",
  "Oil & Gas Services",
  "Project Management",
  "Procurement & Support",
  "Other",
];

const budgetRanges = [
  "Under $50,000",
  "$50,000 – $200,000",
  "$200,000 – $1,000,000",
  "$1,000,000+",
  "Not specified",
];

const timelines = [
  "ASAP",
  "Within 3 months",
  "3 – 6 months",
  "6+ months",
  "Flexible",
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    projectType: "", budget: "", timeline: "", message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        {/* Left Panel — Dark */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="bg-charcoal text-white px-8 py-20 lg:px-14 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-maroon" />
              <span className="label-caps text-maroon">Contact</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Let&apos;s Build <br /><span className="text-gold">Together.</span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-12 max-w-md">
              Ready to start your next infrastructure project? Reach out and our team will respond within one business day.
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-12">
              {[
                { icon: MapPin, label: "Address", value: "23 Royal Palm Avenue, West Legon — Accra, Ghana", href: undefined },
                { icon: Phone, label: "Phone", value: "+233 024 891 5772", href: "tel:+2330248915772" },
                { icon: Mail, label: "Email", value: "info@vertexridge.com", href: "mailto:info@vertexridge.com" },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-white/80 hover:text-gold transition-colors text-sm">
                        {value}
                      </a>
                    ) : (
                      <p className="text-white/80 text-sm leading-relaxed">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="label-caps text-white/30 mb-4">Follow Us</p>
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
                  className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center hover:bg-maroon transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Panel — Light Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="bg-sand px-8 py-20 lg:px-14"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-6">
              <div className="w-20 h-20 rounded-full bg-maroon/10 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-maroon" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal">Message Sent!</h3>
              <p className="text-charcoal/60 max-w-sm leading-relaxed">
                Thank you for reaching out. Our team will get back to you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-2">Send a Message</h3>
                <p className="text-charcoal/50 text-sm">Tell us about your project and we'll be in touch.</p>
              </div>

              {/* Name row */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "firstName", placeholder: "First name" },
                  { name: "lastName", placeholder: "Last name" },
                ].map((f) => (
                  <div key={f.name} className="border-b border-charcoal/15 pb-1 focus-within:border-gold transition-colors">
                    <input
                      type="text"
                      name={f.name}
                      placeholder={f.placeholder}
                      value={formData[f.name as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent text-charcoal placeholder:text-charcoal/35 text-sm focus:outline-none py-2"
                    />
                  </div>
                ))}
              </div>

              {/* Email + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "email", type: "email", placeholder: "Email address" },
                  { name: "phone", type: "tel", placeholder: "Phone number" },
                ].map((f) => (
                  <div key={f.name} className="border-b border-charcoal/15 pb-1 focus-within:border-gold transition-colors">
                    <input
                      type={f.type}
                      name={f.name}
                      placeholder={f.placeholder}
                      value={formData[f.name as keyof typeof formData]}
                      onChange={handleChange}
                      required={f.name === "email"}
                      className="w-full bg-transparent text-charcoal placeholder:text-charcoal/35 text-sm focus:outline-none py-2"
                    />
                  </div>
                ))}
              </div>

              {/* Project Type */}
              <div className="border-b border-charcoal/15 pb-1 focus-within:border-gold transition-colors">
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-transparent text-charcoal text-sm focus:outline-none py-2 appearance-none cursor-pointer"
                >
                  <option value="" disabled>Project type</option>
                  {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {/* Budget + Timeline */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="border-b border-charcoal/15 pb-1 focus-within:border-gold transition-colors">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-transparent text-charcoal text-sm focus:outline-none py-2 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Budget range</option>
                    {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div className="border-b border-charcoal/15 pb-1 focus-within:border-gold transition-colors">
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-transparent text-charcoal text-sm focus:outline-none py-2 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Timeline</option>
                    {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="border-b border-charcoal/15 pb-1 focus-within:border-gold transition-colors">
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project…"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent text-charcoal placeholder:text-charcoal/35 text-sm focus:outline-none py-2 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 bg-maroon text-white font-bold rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300 text-sm"
              >
                Send Message
                <Send size={15} />
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Business Hours Bar */}
      <div className="bg-charcoal/95 border-t border-white/5">
        <div className="container-vr py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/50 text-xs">Mon – Fri: 8:00 AM – 5:00 PM</span>
          </div>
          <span className="text-white/30 text-xs">Sat: 9:00 AM – 1:00 PM · Sun: Closed</span>
        </div>
      </div>
    </section>
  );
}
