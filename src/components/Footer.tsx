/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Facebook, Twitter, ShieldCheck } from "lucide-react";

interface FooterProps {
  onPageChange: (page: string) => void;
  onApplyNow: () => void;
}

export default function Footer({ onPageChange, onApplyNow }: FooterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    // Simulate API registration
    setStatus("success");
    setEmail("");
    setTimeout(() => {
      setStatus("idle");
    }, 5000);
  };

  const handleLinkClick = (pageId: string) => {
    onPageChange(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="global-footer" className="bg-indigo-50/40 border-t border-indigo-100 text-slate-605 font-sans">
      {/* Top Newsletter & Banner Section */}
      <div className="w-full px-4 sm:px-8 lg:px-12 py-12 border-b border-indigo-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="bg-indigo-100 text-indigo-700 font-bold font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border border-indigo-200/50">
              STAY INSPIRED
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mt-3">
              Subscribe to Simply Exponential Insights
            </h3>
            <p className="text-sm text-slate-600 mt-1 max-w-lg">
              Get the latest digital skills trends, webinar invites, startup toolkits, or course announcements delivered hot to your inbox. No spam, ever.
            </p>
          </div>

          <div>
            {status === "success" ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-start gap-3 animated-fade-in shadow-xs">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Subscription Successful!</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Thank you! Check your inbox shortly for our curated tech toolkits and class guides.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-450">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    id="newsletter-email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full bg-white border border-slate-205 rounded-xl py-3 pl-11 pr-4 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-100 transition-colors shadow-xs"
                  />
                </div>
                <button
                  id="newsletter-submit-btn"
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs px-6 py-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  Join List <Send className="h-3 w-3" />
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="text-rose-650 text-[11px] mt-1.5 pl-1">※ Please specify a valid email address.</p>
            )}
          </div>
        </div>
      </div>

      {/* Main Links Structure */}
      <div className="w-full px-4 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: About Corporate Entity */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center cursor-pointer" onClick={() => handleLinkClick("home")}>
              <div className="flex flex-col">
                <span className="font-sans font-black text-base sm:text-lg tracking-tight text-indigo-650 leading-none">
                  SIMPLY EXPONENTIAL
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#ca819f] font-mono font-bold leading-none mt-0.5">
                  Consult Limited
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Simply Exponential Consult Limited (SECL) is an industry-trusted training, enterprise architecture, and consulting agency. We bridge the gap between educational aspirations and market-led realities through modern tech incubation.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <ShieldCheck className="h-5 w-5 text-indigo-500" />
              <span className="text-[11px] font-mono text-slate-500 font-semibold">National LSETF Authorized Partner</span>
            </div>
          </div>

          {/* Column 2: Course Tracks */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-5">
              Academy Courses
            </h4>
            <ul className="space-y-3.5 text-xs font-medium">
              <li>
                <button
                  onClick={() => handleLinkClick("course-ai-data-skills")}
                  className="hover:text-indigo-600 text-slate-600 transition-colors text-left"
                >
                  AI and Data Skills Track
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("course-digital-marketing-growth")}
                  className="hover:text-indigo-600 text-slate-600 transition-colors text-left"
                >
                  Digital Marketing and Growth
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("course-product-management-entrepreneurship")}
                  className="hover:text-indigo-600 text-slate-600 transition-colors text-left"
                >
                  Product Management and Startup Track
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Directory */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-5">
              Corporate Directory
            </h4>
            <ul className="space-y-3.5 text-xs font-medium">
              <li>
                <button onClick={() => handleLinkClick("about")} className="hover:text-indigo-600 text-slate-600 transition-colors text-left">
                  About SECL Consult
                </button>
              </li>
              <li>
                <button onClick={onApplyNow} className="hover:text-indigo-600 text-slate-600 transition-colors text-left">
                  Enrollment Form
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Local Contact Touchpoints */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Academy Coordinates
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed text-slate-600">
                  Simply Exponential Consult, No 4, (old No. 1A), Akin Osiyemi Street off Allen Avenue, Ikeja Lagos.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                <span className="text-slate-600">+234 (0) 803 301 9120</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                <span className="text-slate-600 text-break">info@simplyexponential.com</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center space-x-3.5 mt-2">
              <a href="https://linkedin.com/company/simply-exponential-consult-limited" target="_blank" rel="noreferrer" className="p-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg text-indigo-600 hover:text-indigo-700 transition-colors border border-indigo-105">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://facebook.com/simplyexponential" target="_blank" rel="noreferrer" className="p-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg text-indigo-600 hover:text-indigo-700 transition-colors border border-indigo-105">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://twitter.com/simplyexpon" target="_blank" rel="noreferrer" className="p-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg text-indigo-600 hover:text-indigo-700 transition-colors border border-indigo-105">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Copy Disclaimer */}
      <div className="bg-indigo-100/35 border-t border-indigo-100 py-6 text-center text-[11px] text-slate-500 font-mono">
        <div className="w-full px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© 2026 Simply Exponential Consult Limited (SECL). All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#terms" className="hover:underline">Terms of Service</a>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
