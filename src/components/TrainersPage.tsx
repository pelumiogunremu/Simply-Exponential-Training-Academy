/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { trainers } from "../data/trainers";
import { Users, BookOpen, Contact, ShieldCheck, Mail, Phone, Calendar } from "lucide-react";

export default function TrainersPage() {
  return (
    <section id="trainers-page-pane" className="bg-white text-slate-900 pb-20 sm:pb-28 sm:pt-14 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-slate-900 leading-none">
            Meet Our Mentors &amp; Trainers
          </h1>
          <p className="text-sm sm:text-base text-slate-655 mt-4 leading-relaxed">
            Learn directly from battle-tested engineers, certified product owners, and senior growth consultants. Our faculty has collectively coached over 1,200+ professionals into stable digital paths.
          </p>
        </div>

        {/* Detailed Faculty Cards */}
        <div className="space-y-12">
          {trainers.map((tr) => (
            <div
              id={`faculty-row-${tr.id}`}
              key={tr.id}
              className="border border-slate-205 rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:border-slate-350 transition-all duration-300 grid grid-cols-1 lg:grid-cols-4 gap-8"
            >
              
              {/* Profile Avatar and qualification detail */}
              <div className="lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-6">
                <div className="w-20 h-20 rounded-2xl bg-indigo-600/10 text-indigo-700 font-sans font-black text-xl flex items-center justify-center mb-4">
                  {tr.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="font-sans font-black text-sm text-slate-905">{tr.name}</h3>
                <span className="inline-block bg-indigo-50 text-indigo-600 text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase mt-2">
                  {tr.qualification}
                </span>
                
                <p className="text-xs text-slate-500 font-medium mt-3.5 leading-relaxed">
                  <strong>Facilitation:</strong> {tr.expertiseArea}
                </p>

                <div className="flex gap-2.5 mt-5">
                  <span className="p-2 bg-slate-50 border border-slate-150 rounded-lg hover:bg-slate-100 cursor-help" title="Office consult coordinates">
                    <Mail className="h-4.5 w-4.5 text-zinc-650" />
                  </span>
                  <span className="p-2 bg-slate-50 border border-slate-150 rounded-lg hover:bg-slate-100 cursor-help" title="Phone office support line">
                    <Phone className="h-4.5 w-4.5 text-zinc-655" />
                  </span>
                </div>
              </div>

              {/* Comprehensive Bio Column */}
              <div className="lg:col-span-3 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                  <h4 className="text-xs font-bold text-slate-850 uppercase tracking-widest font-mono">Biography &amp; Track Focus</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {tr.bio}
                </p>

                <div className="border-t border-slate-100 pt-4 mt-2">
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-450 block mb-2">Technical Core Competencies</span>
                  <div className="flex flex-wrap gap-1.5">
                    {tr.skills.map((sk, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-700 font-mono text-[9.5px] font-medium px-2.5 py-1 rounded-lg">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono font-medium text-emerald-600 mt-2 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-1.5 w-fit">
                  <Calendar className="h-4 w-4" />
                  <span>Available for 1:1 Saturday diagnostic review sessions</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
