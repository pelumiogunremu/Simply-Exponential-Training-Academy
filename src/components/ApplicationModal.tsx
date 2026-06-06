/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, CheckCircle, ChevronRight, User, Mail, Phone, Book, HelpCircle, Trophy } from "lucide-react";
import { courses } from "../data/courses";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourseId?: string;
}

export default function ApplicationModal({ isOpen, onClose, selectedCourseId = "ai-data-skills" }: ApplicationModalProps) {
  const [step, setStep] = useState(1);
  const [course, setCourse] = useState(selectedCourseId);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [statusVal, setStatusVal] = useState("Graduate");
  const [notes, setNotes] = useState("");
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    
    // Generate unique registration ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setSubmissionId(`SECL-2026-${randomNum}`);
    setFormSubmitted(true);
  };

  const resetAll = () => {
    setStep(1);
    setCourse("ai-data-skills");
    setFullName("");
    setEmail("");
    setPhone("");
    setStatusVal("Graduate");
    setNotes("");
    setFormSubmitted(false);
    onClose();
  };

  return (
    <div id="application-wizard-backdrop" className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div id="application-wizard-body" className="bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-100 flex flex-col relative animated-fade-in">
        
        {/* Header Ribbon */}
        <div className="bg-indigo-50/85 border-b border-indigo-100 px-6 py-4 flex justify-between items-center text-slate-900">
          <div>
            <h3 className="font-sans font-black text-sm text-indigo-950">Admission Application Portal</h3>
            <p className="text-[11px] text-indigo-600 font-mono font-bold">Cohort Intake Summer 2026</p>
          </div>
          <button onClick={resetAll} className="text-slate-500 hover:text-indigo-600 p-1 hover:bg-slate-100 rounded-lg">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Stepper progress indicator if not submitted */}
        {!formSubmitted && (
          <div className="bg-slate-50 border-b border-slate-100 px-6 py-4">
            <div className="flex justify-between text-[11px] font-mono font-bold tracking-wider uppercase">
              <span className={step === 1 ? "text-indigo-600" : "text-slate-400"}>1. Course selection</span>
              <span className={step === 2 ? "text-indigo-600" : "text-slate-400"}>2. Personal profile</span>
              <span className={step === 3 ? "text-indigo-600" : "text-slate-400"}>3. Purpose note</span>
            </div>
            
            {/* Highly stylish, smooth animated slider progress track */}
            <div className="relative h-1.5 w-full bg-slate-200 rounded-full mt-3 overflow-visible">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-rose-500 via-[#ca819f] to-indigo-600 rounded-full transition-all duration-500 ease-out shadow-[0_0_8px_rgba(79,70,229,0.3)]"
                style={{ width: `${step === 1 ? "33.33%" : step === 2 ? "66.66%" : "100%"}` }}
              />
              {/* Premium pulsating glowing thumb slider-indicator representing active state */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-indigo-600 rounded-full shadow-[0_2px_8px_rgba(79,70,229,0.3)] transition-all duration-500 ease-out flex items-center justify-center z-10"
                style={{ left: `calc(${step === 1 ? "33.33%" : step === 2 ? "66.66%" : "100%"} - 8px)` }}
              >
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-ping absolute opacity-75"></span>
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
              </div>
            </div>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6">
          {formSubmitted ? (
            <div className="text-center py-6 flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-10 w-10 text-emerald-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Application Received!</h4>
              <p className="text-sm text-slate-505 mt-2 max-w-sm">
                Congratulations, <strong className="text-slate-800">{fullName || "Applicant"}</strong>! Your seat registration request was cataloged successfully under reference code:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 font-mono text-sm font-bold text-indigo-700 mt-4 tracking-wider">
                {submissionId}
              </div>

              <div className="mt-6 border-t border-slate-100 pt-5 text-left text-xs text-slate-600 space-y-2 max-w-md">
                <p className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Trophy className="h-4 w-4 text-amber-500" /> What happens next?
                </p>
                <p>1. <strong>Pre-Enrolment Review:</strong> Our academic review board checks your selected track suitability.</p>
                <p>2. <strong>Diagnostic Interview:</strong> A Simply Exponential registrar will reach out at <strong className="text-slate-800">{phone}</strong> within 48 business hours to verify your details.</p>
                <p>3. <strong>Sponsorship:</strong> Discounted slots from partner associations (e.g., LSETF sponsors) will be reviewed.</p>
              </div>

              <button
                onClick={resetAll}
                className="mt-8 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-6 py-3 rounded-xl transition"
              >
                Close Back to Catalog
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* STEP 1: Select track */}
              {step === 1 && (
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Select Your Intended Programme
                  </label>
                  <div className="space-y-2">
                    {courses.map((c) => (
                      <label
                        key={c.id}
                        className={`block border rounded-xl p-3.5 cursor-pointer transition ${
                          course === c.id
                            ? "border-indigo-600 bg-indigo-50/10 ring-2 ring-indigo-50"
                            : "border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <input
                            type="radio"
                            name="selected-course"
                            value={c.id}
                            checked={course === c.id}
                            onChange={(e) => setCourse(e.target.value)}
                            className="mt-1 text-indigo-600 focus:ring-indigo-500"
                          />
                          <div>
                            <span className="font-semibold text-xs text-slate-900 block">{c.title}</span>
                            <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{c.shortDescription}</span>
                            <span className="inline-block bg-slate-100 text-slate-600 font-mono text-[9px] font-bold px-1.5 py-0.5 rounded mt-1.5">
                              {c.duration} • {c.format}
                            </span>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: General Profile Infos */}
              {step === 2 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Configure Your Profile</h4>
                  
                  <div className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <User className="h-4 w-4" />
                        </div>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Femi Alao"
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-9 pr-3 text-xs focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 focus:bg-white outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <Mail className="h-4 w-4" />
                          </div>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="femi@gmail.com"
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-9 pr-3 text-xs focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 focus:bg-white outline-none transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Line *</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <Phone className="h-4 w-4" />
                          </div>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+234 81 2345 6789"
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-9 pr-3 text-xs focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 focus:bg-white outline-none transition"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Current Employment/Educational Status *</label>
                      <select
                        value={statusVal}
                        onChange={(e) => setStatusVal(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 text-xs focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 focus:bg-white outline-none transition"
                      >
                        <option value="Student">Student</option>
                        <option value="Graduate">Recent Graduate</option>
                        <option value="Job Seeker">Job Seeker</option>
                        <option value="Young Professional">Young Professional</option>
                        <option value="Entrepreneur">Entrepreneur / Business Owner</option>
                        <option value="Career Switcher">Career Switcher</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Motivations */}
              {step === 3 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Motivation & Goals</h4>
                  
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Why are you interested in this program? *
                    </label>
                    <textarea
                      required
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={4}
                      placeholder="Share a brief statement about your career aspirations, key business goals, or digital skills you want to secure..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 focus:bg-white outline-none transition"
                    />
                  </div>

                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-[11px] text-slate-500 leading-relaxed flex gap-2">
                    <Book className="h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Completing this form starts our review pipeline. Seats are highly limited due to hands-on session caps. Submit promptly to join.
                    </span>
                  </div>
                </div>
              )}

              {/* Modal controls */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs px-5 py-2.5 rounded-lg transition"
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}

                <button
                  id="application-next-submit-btn"
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs px-6 py-2.5 rounded-lg transition ml-auto"
                >
                  {step === 3 ? "Submit Application" : "Continue"}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
