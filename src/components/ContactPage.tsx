/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Home, Landmark, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact-us-view" className="bg-white text-slate-900 pb-20 sm:pb-28 sm:pt-14 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono font-bold text-indigo-600 uppercase tracking-widest bg-indigo-100/50 border border-indigo-200/50 px-3 py-1 rounded-full">
            Get Touchpoint
          </span>
          <h1 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-slate-905 mt-4 leading-none">
            Contact Academy Registrar
          </h1>
          <p className="text-sm sm:text-base text-slate-655 mt-4 leading-relaxed">
            Have questions about fees, timetables, sponsorships, or corporate team registrations? Connect with our registrars directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Coordinates Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-indigo-50/50 text-slate-900 border border-indigo-100 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
              <span className="bg-indigo-100 text-indigo-700 font-mono text-[9px] font-bold px-2.5 py-1 rounded-md border border-indigo-200/50 uppercase">
                Simply Exponential Consult HQ
              </span>
              <h3 className="text-base font-extrabold text-slate-900 mt-4">Office Coordinates</h3>
              
              <div className="space-y-4 mt-6 text-xs text-slate-600">
                <div className="flex gap-3.5 items-start">
                  <MapPin className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed text-slate-600">
                    No 4, (old No. 1A), Akin Osiyemi Street off Allen Avenue, Ikeja Lagos.
                  </span>
                </div>
                
                <div className="flex gap-3.5 items-center border-t border-indigo-100 pt-4">
                  <Phone className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-indigo-600 block uppercase font-mono font-bold">Mobile Registrar Desk</span>
                    <span className="font-bold text-slate-900 font-mono text-xs">+234 (0) 803 301 9120</span>
                  </div>
                </div>

                <div className="flex gap-3.5 items-center border-t border-indigo-101 pt-4">
                  <Mail className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-indigo-600 block uppercase font-mono font-bold">Support Email</span>
                    <span className="font-bold text-slate-900 font-mono text-xs">info@simplyexponential.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
              <h4 className="text-xs font-bold text-slate-850 flex items-center gap-1.5 uppercase font-mono tracking-wider">
                <ShieldCheck className="h-4.5 w-4.5 text-indigo-650" /> Physical Access
              </h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Our Ilupeju training centre is equipped with high-speed internet grids, visual projection arrays, dynamic air conditioning, and standby generators to guarantee distraction-free hands-on training sessions on physical Saturdays.
              </p>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white border border-slate-205 rounded-3xl p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 flex flex-col items-center">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Message Submitted Successfully!</h3>
                <p className="text-xs text-slate-550 mt-2 max-w-sm">
                  Thank you, <strong className="text-slate-800">{fullName}</strong>! Our admissions team has registered your inquiry and will reach out with solutions within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFullName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                  }}
                  className="mt-6 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition"
                >
                  Write Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSend} className="space-y-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">Send Us A Message</h3>
                <p className="text-xs text-slate-505 mb-4">Complete the fields below and our registrar desk will compile custom training proposals.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Alaba Salami"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 text-xs outline-none focus:ring-2 focus:ring-indigo-105 focus:border-indigo-500 focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. alaba@gmail.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 text-xs outline-none focus:ring-2 focus:ring-indigo-105 focus:border-indigo-500 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Subject of Inquiry</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. LSETF Class sponsorship verification"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 text-xs outline-none focus:ring-2 focus:ring-indigo-105 focus:border-indigo-500 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type in detail your questions or timeline interests..."
                    className="w-full bg-slate-50 border border-slate-201 rounded-lg p-3 text-xs outline-none focus:ring-2 focus:ring-indigo-105 focus:border-indigo-500 focus:bg-white transition"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs px-6 py-3 rounded-lg flex items-center justify-center gap-1.5 transition shadow-sm"
                >
                  Message Registrar <Send className="h-3 w-3" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
