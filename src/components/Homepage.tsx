/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { courses } from "../data/courses";
import {
  BookOpen,
  Award,
  TrendingUp,
  CheckCircle,
  Briefcase,
  Layers,
  Target,
  Users
} from "lucide-react";

interface HomepageProps {
  onNavigate: (pageId: string) => void;
  onApply: (courseId?: string) => void;
}

export default function Homepage({ onNavigate, onApply }: HomepageProps) {
  // Partner elements
  const partners = [
    { name: "LSETF", desc: "Lagos State Employment Trust Fund" },
    { name: "AfriLabs", desc: "Pan-African Innovation Hub Network" },
    { name: "ILO", desc: "International Labour Organization" },
    { name: "FATE Foundation", desc: "Enterprise Incubator" },
    { name: "GIZ", desc: "German Development Cooperation Agency" },
    { name: "Innovation Hubs", desc: "Tech Incubators Circle" },
    { name: "Industry Partners", desc: "Placement and Jobs" }
  ];

  return (
    <div id="homepage-root" className="bg-white text-slate-900 font-sans">
      
      {/* Hero Section */}
      <header id="landing-hero" className="relative overflow-hidden bg-gradient-to-b from-indigo-50/60 via-white to-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-slate-900">
        {/* Subtle geometric grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#ca819f_1px,transparent_1px),linear-gradient(to_bottom,#ca819f_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-sans font-black tracking-tight leading-none text-slate-900">
              Future-Ready Digital Skills for Employment, Entrepreneurship and Innovation
            </h1>
            
            <p className="text-slate-605 text-sm sm:text-base font-medium mt-6 leading-relaxed max-w-xl">
              Gain industry-relevant skills, practical experience, mentorship, and career support through comprehensive training programmes designed for today's digital economy.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <button
                id="hero-cta-apply"
                onClick={() => onApply("ai-data-skills")}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-xl transition duration-300 transform hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-200"
              >
                Apply Now
              </button>
              <button
                id="hero-cta-explore"
                onClick={() => {
                  const el = document.getElementById("featured-courses");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-slate-200 hover:border-indigo-600 text-slate-700 hover:text-indigo-600 font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-xl transition duration-300 focus:outline-none bg-white shadow-sm"
              >
                Explore Courses
              </button>
            </div>
          </div>

          {/* Right Hero: Isometric Visual Mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-100/40 rounded-3xl filter blur-3xl opacity-55"></div>
            <div className="bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl rounded-3xl relative">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                </div>
                <span className="font-mono text-[10px] text-indigo-500 font-bold">SECL_CAMPUS_PORTAL.EXE</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-indigo-50/50 rounded-xl p-4 border border-indigo-100">
                  <span className="text-[10px] font-mono text-indigo-400 font-extrabold block">PROGRAM STATUS</span>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs font-bold text-slate-900">Advanced Data Pipelines</span>
                    <span className="bg-emerald-50 text-emerald-700 font-mono text-[9px] px-2 py-0.5 rounded border border-emerald-200 uppercase font-bold">Active Lab</span>
                  </div>
                </div>

                <div className="bg-indigo-50/50 rounded-xl p-4 border border-indigo-100">
                  <span className="text-[10px] font-mono text-indigo-400 font-extrabold block">STUDENT SUCCESS SCORE</span>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-center text-slate-800">
                    <div className="bg-white p-2 rounded border border-slate-100 shadow-xs">
                      <strong className="text-indigo-700 font-mono text-xs block">1,200+</strong>
                      <span className="text-[9px] text-slate-500 font-mono">Trained</span>
                    </div>
                    <div className="bg-white p-2 rounded border border-slate-100 shadow-xs">
                      <strong className="text-emerald-600 font-mono text-xs block">94%</strong>
                      <span className="text-[9px] text-slate-500 font-mono">Grad Rate</span>
                    </div>
                    <div className="bg-white p-2 rounded border border-slate-100 shadow-xs">
                      <strong className="text-indigo-600 font-mono text-xs block">85%</strong>
                      <span className="text-[9px] text-slate-500 font-mono">Job Ratio</span>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50/50 rounded-xl p-3 border border-indigo-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-indigo-500" />
                    <span className="text-[10px] text-slate-700 font-medium">LSETF National Skills Authorized Curriculum</span>
                  </div>
                  <span className="text-[9px] font-mono font-bold text-indigo-500">VERIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1: About the Courses and Icons */}
      <section id="about-the-courses" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-150">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-mono font-bold text-indigo-600 uppercase tracking-widest bg-indigo-100/50 border border-indigo-200/50 px-3 py-1 rounded-full">
              Mission Statement
            </span>
            <span className="text-2xl sm:text-4xl font-sans font-black tracking-tight text-slate-905 mt-4 block">
              Transform Your Career with Industry-Relevant Skills
            </span>
            <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
              Our courses are designed to equip learners with practical, job-ready skills aligned with current industry demands. Through instructor-led training, practical projects, mentorship, and career coaching, participants gain the knowledge and experience needed to succeed in the digital workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { id: "abi-1", title: "Industry-Relevant Skills", desc: "Gain deep-dive proficiency in databases, growth hacking, and Agile structures curated by leading analysts.", icon: TrendingUp },
              { id: "abi-2", title: "Practical Projects", desc: "Ditch theoretical lectures. Build real-world retail dashboards, copy sheets, and clickable startup wireframes.", icon: Layers },
              { id: "abi-3", title: "Expert Mentorship", desc: "Connect directly with Fayo Williams, Najeem Yusuf, and veteran tech practitioners during weekly check-ins.", icon: Users },
              { id: "abi-4", title: "Career Readiness", desc: "Build stellar portfolios, optimize your LinkedIn profile, and participate in interview simulations.", icon: Target },
              { id: "abi-5", title: "Accredited Certification", desc: "Graduate with an industry-grade physical and digital certificate verified directly by Simply Exponential and partners.", icon: Award },
              { id: "abi-6", title: "Employer Connections", desc: "Get referenced to top-tier digital agencies and tech firms in our hiring partner circle.", icon: Briefcase },
            ].map((card) => {
              const IconComp = card.icon;
              return (
                <div key={card.id} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-300">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h3 className="font-sans font-bold text-sm text-slate-900">{card.title}</h3>
                  <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Featured Courses */}
      <section id="featured-courses" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-150">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <div>
              <span className="text-[11px] font-mono font-bold text-indigo-600 uppercase tracking-widest bg-indigo-100/50 border border-indigo-200/50 px-3 py-1 rounded-full">
                Active Enrolment
              </span>
              <h2 className="text-2xl sm:text-4xl font-sans font-black tracking-tight text-slate-900 mt-4">
                Explore Our Industry-Led Courses
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mt-2 md:mt-0 leading-relaxed">
              We focus on 3 high-leverage domains that represent the highest employability and freelancing demand in the West African digital market today.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course) => {
              // Accent coloring based on track
              const accentColor = course.accentColor;
              const accentTextClass =
                accentColor === "blue"
                  ? "text-blue-600 bg-blue-50 border-blue-100"
                  : accentColor === "emerald"
                  ? "text-emerald-600 bg-emerald-50 border-emerald-100"
                  : "text-purple-600 bg-purple-50 border-purple-100";
              const accentBorderClass =
                accentColor === "blue"
                  ? "hover:border-blue-500"
                  : accentColor === "emerald"
                  ? "hover:border-emerald-500"
                  : "hover:border-purple-500";

              return (
                <div
                  id={`course-card-${course.id}`}
                  key={course.id}
                  className={`border border-slate-200 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300 ${accentBorderClass}`}
                >
                  <div>
                    {/* Course Header Banner */}
                    <div className={`bg-gradient-to-br ${course.bgGradient} p-6 text-white text-left relative`}>
                      <span className="absolute top-4 right-4 bg-white/20 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                        Hybrid Track
                      </span>
                      <h3 className="text-lg font-bold font-sans tracking-tight leading-snug max-w-[80%] pt-2">
                        {course.title}
                      </h3>
                      <p className="text-[11px] font-mono text-indigo-100 mt-2">
                        Duration: {course.duration}
                      </p>
                    </div>

                    <div className="p-6">
                      <p className="text-xs text-slate-600 leading-relaxed mb-5">
                        {course.shortDescription}
                      </p>

                      <div className="border-t border-slate-100 pt-4 mb-4">
                        <span className="text-[10px] font-mono font-bold text-indigo-400 block uppercase tracking-wider mb-2">
                          Core Skills Modules
                        </span>
                        <div className="flex flex-wrap gap-1.5 h-16 overflow-y-auto">
                          {course.curriculum.slice(0, 4).map((mod, mIdx) => (
                            <span key={mIdx} className="bg-slate-100 text-slate-700 text-[10px] px-2 py-0.5 rounded font-medium">
                              {mod.title}
                            </span>
                          ))}
                          <span className="bg-slate-50 text-slate-500 text-[10px] px-2 py-0.5 rounded font-mono font-bold">
                            +{course.curriculum.length - 4} More...
                          </span>
                        </div>
                      </div>

                      <div className="border-t border-slate-100 pt-4">
                        <span className="text-[10px] font-mono font-bold text-indigo-400 block uppercase tracking-wider mb-2">
                          Expected Outcomes
                        </span>
                        <ul className="space-y-2 text-xs text-slate-600">
                          {course.learningOutcomes.slice(0, 3).map((out, oIdx) => (
                            <li key={oIdx} className="flex items-start gap-2 text-[11px]">
                              <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                              <span className="line-clamp-2">{out}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-50 bg-slate-50/50 flex gap-2.5">
                    <button
                      id={`learn-more-${course.id}`}
                      onClick={() => onNavigate(`course-${course.slug}`)}
                      className="flex-1 border border-slate-200 hover:border-slate-800 text-slate-850 hover:text-slate-900 font-semibold text-xs py-3 rounded-xl transition text-center"
                    >
                      Learn More
                    </button>
                    <button
                      id={`apply-now-${course.id}`}
                      onClick={() => onApply(course.id)}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs py-3 rounded-xl transition shadow-sm hover:shadow"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Learning Experience Timeline */}
      <section id="learning-experience" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-905 border-b border-rose-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[11px] font-mono font-bold text-indigo-600 uppercase tracking-widest bg-indigo-100 border border-indigo-200/60 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
              Cohort Flow Structure
            </span>
            <h2 className="text-2xl sm:text-4xl font-sans font-black tracking-tight mt-4 text-slate-900">
              Our 7-Step Hybrid Learning Experience
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
              We leverage an integrated learning pipeline that combines online delivery channels with local Saturday physical workshops in Lagos to ensure true mastery.
            </p>
          </div>

          <div className="relative">
            {/* Center connector line for desktop */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-100 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {[
                { step: "01", title: "Live Virtual Sessions", desc: "Interact in real-time weekday evening video lectures covering theoretical guidelines, syntax instructions, and live analyst coding labs." },
                { step: "02", title: "Physical Saturday Workshops", desc: "Meet instructors face-to-face at Simply Exponential Ilupeju labs for intensive visual diagnostics, debugging, and peer review groups." },
                { step: "03", title: "Hands-On Practical Projects", desc: "Work on structured, modular projects centered on business intelligence sheets, SEO metrics validation, or Figma design systems." },
                { step: "04", title: "Weekly Expert Mentorship", desc: "Connect in weekly micro-consultancy sessions, receiving personalized support and career mentoring from practitioners like Fayo Williams." },
                { step: "05", title: "Strategic Capstone Project", desc: "Assemble in cross-functional squads to resolve real corporate challenges, simulating the work dynamics of modern digital agencies." },
                { step: "06", title: "Industry Accredited Certification", desc: "Secure a globally shareable verified certificate validating your competence before employers, incubators, and investors." },
                { step: "07", title: "Professional Career Support", desc: "Accelerate your transition with custom portfolios development, interview simulators, LinkedIn optimizations audits, and hiring matches." },
              ].map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={item.step} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
                    
                    {/* Circle Node Indicator */}
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-indigo-600 border-4 border-white text-white text-xs font-bold font-mono flex items-center justify-center transform -translate-x-1/2 z-20 shadow-md">
                      {item.step}
                    </div>

                    {/* Desktop Content alignment left or right */}
                    <div className={`pl-12 md:pl-0 ${isEven ? "md:text-right md:pr-10" : "md:col-start-2 md:pl-10"}`}>
                      <div className="bg-white border border-slate-200/80 p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-300/50 transition duration-300">
                        <span className="font-mono text-indigo-500 font-extrabold text-xs block">STAGE {item.step}</span>
                        <h4 className="font-sans font-bold text-sm text-slate-900 mt-1">{item.title}</h4>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Partners and Employers */}
      <section id="partners-employers" className="py-20 border-b border-slate-150 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[10px] font-mono font-bold text-slate-450 uppercase tracking-widest">
            OUR INCUBATOR AND EMPLOYMENT PARTNERS
          </span>
          <p className="text-xs text-slate-500 max-w-lg mx-auto mt-2 mb-8 leading-relaxed">
            Our curricula are supported, endorsed, or matched by top-flight employment trust funds and technology developers across the region.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-75">
            {partners.map((pt, idx) => (
              <div key={idx} className="bg-white border border-slate-205 py-3 px-5 rounded-xl shadow-xs hover:border-slate-400 hover:opacity-100 transition duration-300 flex flex-col justify-center">
                <span className="font-sans font-black text-xs tracking-wider text-slate-800">{pt.name}</span>
                <span className="text-[9px] text-slate-400 font-mono mt-0.5">{pt.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
