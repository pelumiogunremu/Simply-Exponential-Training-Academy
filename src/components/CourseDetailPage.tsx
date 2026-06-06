/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Course } from "../types";
import { courses } from "../data/courses";
import {
  Clock,
  Compass,
  Layout as LayoutIcon,
  CheckCircle,
  Cpu,
  Trophy,
  ArrowLeft,
  ChevronDown,
  Award,
  Users,
  ShieldAlert,
  ArrowRight
} from "lucide-react";

interface CourseDetailPageProps {
  courseSlug: string;
  onBack: () => void;
  onApply: (courseId: string) => void;
}

export default function CourseDetailPage({ courseSlug, onBack, onApply }: CourseDetailPageProps) {
  // Find course details
  const course = courses.find((c) => c.slug === courseSlug) || courses[0];
  
  // Track curriculum active accordion rows
  const [openModule, setOpenModule] = useState<number | null>(0);
  // Track FAQ open rows
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleModule = (idx: number) => {
    setOpenModule(openModule === idx ? null : idx);
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div id={`course-detail-${course.id}`} className="bg-white text-slate-900 font-sans">
      
      {/* Course Hero Banner */}
      <header className={`relative text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${course.bgGradient} overflow-hidden`}>
        {/* Decorative backdrop */}
        <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply"></div>
        <div className="absolute -bottom-10 -right-10 w-96 h-96 rounded-full bg-white/5 filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1 text-xs text-indigo-200 hover:text-white font-medium mb-6 hover:translate-x-[-2px] transition-transform"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all programmes
          </button>
          
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-4xl font-sans font-black tracking-tight leading-tight">
              {course.title} Professional Program
            </h1>
            <p className="text-slate-205 text-xs sm:text-sm font-medium mt-3 leading-relaxed max-w-xl">
              {course.shortDescription}
            </p>

            {/* Quick Metrics */}
            <div className="flex flex-wrap gap-4 mt-6 items-center text-xs">
              <div className="flex items-center gap-2 bg-slate-900/30 px-3.5 py-1.5 rounded-lg border border-white/10">
                <Clock className="h-4 w-4 text-indigo-300" />
                <span><strong>Duration:</strong> {course.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/30 px-3.5 py-1.5 rounded-lg border border-white/10">
                <Compass className="h-4 w-4 text-emerald-300" />
                <span><strong>Format:</strong> Hybrid Workshop Labs</span>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                id={`apply-cta-${course.id}`}
                onClick={() => onApply(course.id)}
                className="bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs px-6 py-3 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
              >
                Apply Now For Next Cohort
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("detailed-curriculum");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white/10 text-white border border-white/20 hover:bg-white/20 font-bold text-xs px-6 py-3 rounded-xl transition"
              >
                View Syllabus
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main content column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* 1. Course Overview */}
            <section id="course-overview" className="border-b border-slate-100 pb-10">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
                <Compass className="h-5 w-5 text-indigo-500" /> Programme Overview
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed whitespace-pre-line">
                {course.overview}
              </p>
            </section>

            {/* 2. Learning Outcomes */}
            <section id="learning-outcomes" className="border-b border-slate-100 pb-10">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-indigo-500" /> What You Will Accomplish
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {course.learningOutcomes.map((out, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-150 p-4 rounded-xl flex gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-relaxed font-sans">{out}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Detailed Curriculum (Accordions) */}
            <section id="detailed-curriculum" className="border-b border-slate-100 pb-10">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-slate-900">
                    Syllabus &amp; Curriculum Breakdown
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">Class-by-Class syllabus structures designed to construct real expertise.</p>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase text-indigo-600">{course.curriculum.length} Core Modules</span>
              </div>

              <div className="space-y-3">
                {course.curriculum.map((mod, idx) => {
                  const isOpen = openModule === idx;
                  return (
                    <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                      <button
                        id={`module-accordion-header-${idx}`}
                        type="button"
                        onClick={() => toggleModule(idx)}
                        className="w-full flex justify-between items-center bg-slate-50/80 hover:bg-slate-150/40 p-4 font-semibold text-slate-900 text-left transition-colors"
                      >
                        <span className="text-xs sm:text-sm text-slate-850 flex gap-2">
                          <strong className="text-indigo-600 font-mono">0{idx + 1}.</strong> {mod.title}
                        </span>
                        <ChevronDown className={`h-4.5 w-4.5 text-slate-505 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="p-4 bg-white border-t border-slate-100 animated-fade-in">
                          <ul className="space-y-2.5">
                            {mod.subtopics.map((sub, sIdx) => (
                              <li key={sIdx} className="flex gap-2.5 text-xs text-slate-600 leading-relaxed items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0"></span>
                                <span>{sub}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 4. Practical Projects & Capstones */}
            <section id="practical-projects" className="border-b border-slate-100 pb-10 space-y-6">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
                  <LayoutIcon className="h-5 w-5 text-indigo-500" /> Hands-On Portfolio Lab Projects
                </h2>
                <p className="text-xs text-slate-505 mt-1">These visual deliverables will define your professional credibility before hiring executives.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {course.projects.map((proj, idx) => (
                  <div key={idx} className="border border-slate-205 p-5 rounded-xl shadow-xs bg-white hover:border-slate-400 transition">
                    <span className="bg-slate-100 text-slate-700 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                      PROJECT 0{idx + 1}
                    </span>
                    <h4 className="font-sans font-bold text-xs text-slate-900 mt-2.5">{proj.title}</h4>
                    <p className="text-xs text-slate-505 mt-2 leading-relaxed">{proj.description}</p>
                  </div>
                ))}
              </div>

              {/* Capstone Focus */}
              <div className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50/45 text-slate-900 border border-indigo-100 rounded-2xl p-6 sm:p-7 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-indigo-500">
                  <Trophy className="h-32 w-32" />
                </div>
                <div className="relative z-10">
                  <span className="bg-indigo-100 text-indigo-700 font-mono text-[9px] font-bold px-2.5 py-1 rounded-md border border-indigo-200/50 uppercase tracking-wide">
                    Integrated Capstone
                  </span>
                  <h4 className="text-sm font-black mt-3 text-slate-900">
                    Capstone Program: {course.capstoneProject.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {course.capstoneProject.description}
                  </p>
                </div>
              </div>
            </section>

            {/* 5. FAQs */}
            <section id="faq-section" className="pb-4">
              <h2 className="text-xl font-bold tracking-tight text-slate-900">
                Frequently Asked Questions
              </h2>
              <div className="mt-6 space-y-3.5">
                {course.faqs.map((faq) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <div key={faq.id} className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                      <button
                        id={`faq-header-${faq.id}`}
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex justify-between items-center bg-slate-50/50 hover:bg-slate-100 p-4 font-bold text-slate-800 text-left transition-colors"
                      >
                        <span className="text-xs text-slate-800 pr-4">{faq.question}</span>
                        <ChevronDown className={`h-4.5 w-4.5 text-slate-500 flex-shrink-0 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="p-4 bg-white border-t border-slate-100 animated-fade-in text-xs text-slate-600 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

          </div>

          {/* Right sidebar details page */}
          <div className="space-y-6">
            
            {/* Admissions Banner */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm sticky top-24">
              <span className="bg-indigo-600 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                COHORT SUMMER 2026
              </span>
              <h3 className="text-sm font-bold text-slate-900 mt-3">Course Delivery Details</h3>
              
              <div className="mt-4 border-t border-slate-200/60 pt-4 space-y-3.5 text-xs text-slate-600">
                <div>
                  <span className="text-slate-450 uppercase text-[10px] font-mono block">Weekly commitment</span>
                  <span className="font-semibold text-slate-900">12+ Hours (Instructor led + dynamic labs)</span>
                </div>
                <div>
                  <span className="text-slate-450 uppercase text-[10px] font-mono block">Format &amp; Venue</span>
                  <span className="font-semibold text-slate-900">Hybrid (Virtual + Ilupeju Lagos Centre)</span>
                </div>
                <div>
                  <span className="text-slate-450 uppercase text-[10px] font-mono block">Target Audience suitability</span>
                  <span className="font-semibold text-slate-950">Students, Graduates, Professionals, Career Switchers</span>
                </div>
                <div>
                  <span className="text-slate-450 uppercase text-[10px] font-mono block">Tools Covered</span>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {course.tools.map((tl, i) => (
                      <span key={i} className="bg-zinc-200 text-zinc-800 text-[10px] font-mono px-2 py-0.5 rounded" title={tl.category}>
                        {tl.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-slate-200/60 pt-3">
                  <span className="text-slate-450 uppercase text-[10px] font-mono block">Career Opportunities</span>
                  <div className="space-y-1 mt-1.5">
                    {course.careerOpportunities.map((op, i) => (
                      <span key={i} className="inline-block bg-indigo-50 text-indigo-750 text-[10px] font-sans px-2.5 py-1 rounded-full mr-1.5 mb-1.5 font-medium">
                        {op}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Secure Seat trigger */}
              <button
                id={`sidebar-apply-btn-${course.id}`}
                onClick={() => onApply(course.id)}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs py-3 rounded-xl transition duration-300 transform hover:-translate-y-0.5 hover:shadow-md mt-6"
              >
                Apply For This Track Now
              </button>
            </div>

            {/* Certification Pillar */}
            <div className="bg-indigo-50/50 text-slate-900 rounded-2xl p-6 shadow-xs border border-indigo-100">
              <Award className="h-8 w-8 text-indigo-600" />
              <h3 className="text-sm font-bold text-slate-900 mt-3 font-sans">Verified Certifications</h3>
              <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                Graduates receive dual validated credentials: a physical cert for office displays, and a secure online cryptographic hash shareable directly to LinkedIn and hiring portals.
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
