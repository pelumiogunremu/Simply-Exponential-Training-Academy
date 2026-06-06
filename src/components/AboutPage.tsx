/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Shield, Target, Users, Landmark, Award, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <section id="about-us-container" className="bg-white text-slate-900 pb-20 sm:pb-28 sm:pt-14 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono font-bold text-indigo-600 uppercase tracking-widest bg-indigo-100/50 border border-indigo-200/50 px-3 py-1 rounded-full">
            Who We Are
          </span>
          <h1 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-slate-900 mt-4 leading-none">
            About Simply Exponential
          </h1>
          <p className="text-sm sm:text-base text-slate-655 mt-4 leading-relaxed">
            Simply Exponential Consult Limited (SECL) is an authorized capacity developer, training incubation coordinator, and corporate consulting firm established to prepare learners for success in today's digital economy.
          </p>
        </div>

        {/* Corporate Profile Splitting */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-xl sm:text-3xl font-sans font-black tracking-tight text-slate-900 leading-snug">
              Our Vision: Driving Success Through Innovation &amp; Practical Training
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Founded on the belief that traditional academic structures leave massive digital competency skills gaps, SECL has spent years curating high-leverage curriculum pathways. We focus on transforming ambitious students, recent graduates, and career switchers into confident data specialists, performance growth marketers, and product owners.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Through our strategic partnership networks, including the Lagos State Employment Trust Fund (LSETF), we support state-level and nationwide poverty alleviation programs by equipping the youth directly with employment and high-ticket freelancing capabilities.
            </p>
          </div>

          <div className="bg-indigo-50/50 text-slate-905 border border-indigo-100 rounded-3xl p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-indigo-500">
              <Landmark className="h-44 w-44" />
            </div>
            
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-indigo-700 mb-6">Our Core Strategic Values</h3>
            <div className="space-y-4.5 text-xs">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider">Unrivalled Innovation</h4>
                  <p className="text-slate-600 mt-1 lines-clamp-2">Always injecting the latest tools, APIs, and AI models directly into our core curriculums.</p>
                </div>
              </div>

              <div className="flex gap-3 border-t border-indigo-100 pt-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider">Absolute Trustworthiness</h4>
                  <p className="text-slate-600 mt-1 lines-clamp-2">Providing honest skills counters, audited outcome statistics, and authentic professional mentorship.</p>
                </div>
              </div>

              <div className="flex gap-3 border-t border-indigo-100 pt-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Users className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider">Youth Empowerment Focus</h4>
                  <p className="text-slate-600 mt-1 lines-clamp-2">Structuring scalable schedules, evening webinars, and local workshops that are accessible to everyone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LSETF Partnership highlight block */}
        <div className="bg-slate-50 border border-slate-205 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
            <Award className="h-8 w-8 text-indigo-600" />
          </div>
          <div>
            <h3 className="font-sans font-bold text-base text-slate-905">Official Partnership Spotlight: Lagos State Employment Trust Fund (LSETF)</h3>
            <p className="text-xs text-slate-505 mt-2 leading-relaxed">
              Simply Exponential Consult is an authorized LSETF digital skills training provider. Under this framework, qualifying youth residents of Lagos can access substantial sponsorships and post-graduation employability references to jumpstart their career pathways seamlessly. Let our registrars verify your eligibility during enrollment check-ins!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
