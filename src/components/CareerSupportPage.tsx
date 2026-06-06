/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ShieldCheck, Award, Briefcase, Star, Search, RefreshCw, Trophy, Target } from "lucide-react";

export default function CareerSupportPage() {
  return (
    <section id="career-support-container" className="bg-white text-slate-900 pb-20 sm:pb-28 sm:pt-14 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono font-bold text-indigo-600 uppercase tracking-widest bg-indigo-100/50 border border-indigo-200/50 px-3 py-1 rounded-full">
            Employability Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-slate-900 mt-4 leading-none">
            Our Career Support &amp; Placement Program
          </h1>
          <p className="text-sm sm:text-base text-slate-655 mt-4 leading-relaxed">
            We don't just teach modules; we facilitate careers. SECL implements a high-touch placement system that supports graduates from portfolio design until employment check-ins.
          </p>
        </div>

        {/* Support categories Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { id: "cs-1", title: "ATS CV Development", desc: "Our recruitment partners audit resumes. We craft high-impact resumes that pass keyword index filters.", icon: Briefcase },
            { id: "cs-2", title: "LinkedIn Optimization", desc: "Build profiles that capture recruiter searches. Set up optimization tags for remote opportunities.", icon: Search },
            { id: "cs-3", title: "Interview Coaching", desc: "Participate in behavioral mock sessions. Learn structured frameworks like PAS to detail technical answers.", icon: RefreshCw },
            { id: "cs-4", title: "Portfolio Construction", desc: "Publish dynamic Power BI reports, copywriting mock accounts, or Jira specs in beautiful shareable portfolios.", icon: Star },
            { id: "cs-5", title: "Freelancing Readiness", desc: "Get mentored on setting up Upwork & Fiverr identities, configuring billing channels, and bidding proposals.", icon: Target },
            { id: "cs-6", title: "LSETF Employer Linkups", desc: "Leverage state placement networks and private agencies looking to hire junior tech talent.", icon: Award },
            { id: "cs-7", title: "Direct Referral Boards", desc: "Skip traditional application stacks. We showcase qualifying candidates directly to agency partners.", icon: ShieldCheck },
            { id: "cs-8", title: "Alumni Circles", desc: "Access weekly private job postings, referral updates, and interactive community networks.", icon: Trophy }
          ].map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.id} className="border border-slate-205 p-6 rounded-2xl hover:shadow-lg transition">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <IconComp className="h-5 w-5" />
                </div>
                <h3 className="font-sans font-bold text-xs text-slate-900">{item.title}</h3>
                <p className="text-[11px] text-slate-500 mt-2.5 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Impact stats box */}
        <div className="bg-indigo-50/50 text-slate-900 rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-8 items-center border border-indigo-100">
          <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-indigo-100 pb-6 lg:pb-0 lg:pr-6">
            <span className="text-3xl font-mono font-black text-indigo-600">85%</span>
            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mt-2">Placement Success Rate</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Our certified graduates land internships, full-time contracts, or high-value remote projects within 180 days of finishing details.</p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold font-mono text-indigo-700 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Verified Hiring Vectors
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
              <div className="flex gap-2 leading-relaxed">
                <span className="text-emerald-600 mt-0.5 font-bold">✔</span>
                <span>Active integrations with Lagos startup incubators like LSETF to find funded entities looking for local talent.</span>
              </div>
              <div className="flex gap-2 leading-relaxed">
                <span className="text-emerald-600 mt-0.5 font-bold">✔</span>
                <span>Direct advisory references from experienced managers validating your technical competence.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
