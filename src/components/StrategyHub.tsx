/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { infoArchitecture, uiuxLayouts, wireframes, designSystem, conversionTriggers, seoOptimizations } from "../data/designSystemData";
import { Layers, FileText, Layout, Sparkles, Sliders, CheckCircle2, Bookmark, ExternalLink, RefreshCw } from "lucide-react";

export default function StrategyHub() {
  const [activeTab, setActiveTab] = useState<"arch" | "des" | "wire" | "conv">("arch");
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text: string, identifier: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(identifier);
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <section id="strategy-hub-pane" className="bg-white text-slate-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-indigo-50/70 via-white to-white border border-indigo-100 rounded-3xl p-8 sm:p-12 mb-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-5">
            <Sparkles className="h-44 w-44 text-indigo-500" />
          </div>
          <div className="relative z-10 max-w-3xl text-slate-900">
            <h1 className="text-3xl sm:text-5xl font-sans font-black text-slate-900 tracking-tight leading-tight">
              Simply Exponential Design &amp; Strategy Hub
            </h1>
            <p className="text-slate-600 font-medium text-sm sm:text-base mt-3 leading-relaxed">
              Explore the information architecture, UX wireframes, modern design system components, search engine optimizations, and transactional conversion drivers engineered for the SECL Academy platform.
            </p>
          </div>
        </div>

        {/* Dynamic Navigation Tabs */}
        <div className="flex flex-wrap gap-2.5 border-b border-slate-100 pb-5 mb-8">
          <button
            onClick={() => setActiveTab("arch")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "arch"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/10"
                : "bg-slate-100 text-slate-600 hover:bg-slate-205 hover:text-slate-900"
            }`}
          >
            <Layers className="h-4 w-4" /> Information Architecture
          </button>
          
          <button
            onClick={() => setActiveTab("des")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "des"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/10"
                : "bg-slate-100 text-slate-600 hover:bg-slate-205 hover:text-slate-900"
            }`}
          >
            <Sliders className="h-4 w-4" /> Design System Tokens
          </button>

          <button
            onClick={() => setActiveTab("wire")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "wire"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/10"
                : "bg-slate-100 text-slate-600 hover:bg-slate-205 hover:text-slate-900"
            }`}
          >
            <Layout className="h-4 w-4" /> Layout Wireframes
          </button>

          <button
            onClick={() => setActiveTab("conv")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "conv"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/10"
                : "bg-slate-100 text-slate-600 hover:bg-slate-205 hover:text-slate-900"
            }`}
          >
            <FileText className="h-4 w-4" /> Conversion &amp; SEO
          </button>
        </div>

        {/* Tab content 1: Information Architecture */}
        {activeTab === "arch" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animated-fade-in">
            {/* Architecture structure mapped */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 mb-2">Platform Content Hierarchy</h2>
              {infoArchitecture.map((section, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
                  <h3 className="text-sm font-bold text-indigo-700 font-mono tracking-wider mb-4 uppercase">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex gap-3 text-xs leading-relaxed text-slate-600">
                        <CheckCircle2 className="h-4.5 w-4.5 text-indigo-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-6">
                <span className="inline-block bg-indigo-100 text-indigo-700 font-mono text-[9px] font-bold px-2 py-0.5 rounded-full mb-3 shadow-xs">
                  SECL CRITICAL PILLARS
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-3">Information Objectives</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  The architecture is optimized specifically of conversion. Highly critical elements like outcomes, tools arrays, candidate prerequisites and career support are visible within 2 clicks from any viewport.
                </p>
                <div className="border-t border-indigo-100 pt-4 space-y-3 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Navigation Depth</span>
                    <span className="font-mono text-slate-900 font-bold">Max 3 Levels</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Primary Funnel Focus</span>
                    <span className="font-mono text-slate-900 font-bold">Registration Lead</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Responsiveness</span>
                    <span className="font-mono text-slate-900 font-bold">Fluid 4k to Mobile</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-slate-900 mb-2">Section-by-Section Mapping</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Every page maintains an active, logical relationship. Homepage features high-level teasers which directly channel intent into deeply contextualized course landing arrays or trainer bios.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab content 2: Design System Tokens */}
        {activeTab === "des" && (
          <div className="space-y-12 animated-fade-in">
            {/* Theme Mood Introduction */}
            <div className="bg-white border border-slate-201 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Core Visual Vibe</h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-4xl">
                {uiuxLayouts.themeMood}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100 text-xs">
                <div>
                  <h4 className="text-indigo-600 font-extrabold uppercase tracking-wider text-[10px]">Grid Guidelines</h4>
                  <p className="text-slate-600 mt-1">{uiuxLayouts.gridSystem}</p>
                </div>
                <div>
                  <h4 className="text-indigo-600 font-extrabold uppercase tracking-wider text-[10px]">Transitions</h4>
                  <p className="text-slate-600 mt-1">{uiuxLayouts.interactionStates}</p>
                </div>
                <div>
                  <h4 className="text-indigo-600 font-extrabold uppercase tracking-wider text-[10px]">Accessibility &amp; IDs</h4>
                  <p className="text-slate-600 mt-1">{uiuxLayouts.accessibilityCode}</p>
                </div>
              </div>
            </div>

            {/* Color Palette Cards */}
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-4 uppercase tracking-widest font-mono text-indigo-600">Color System Palette</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {designSystem.colors.map((color, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-3 shadow-xs">
                    <div className={`h-16 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-xs`}>
                      {idx === 0 && <span className="bg-slate-800 text-white px-2 py-1 text-[10px] rounded">Deep Slate</span>}
                      {idx === 1 && <span className="bg-white text-slate-900 border border-slate-200 px-2 py-1 text-[10px] rounded shadow-xs">Ivory White</span>}
                      {idx === 2 && <span className="bg-blue-600 text-white px-2 py-1 text-[10px] rounded">AI Blue</span>}
                      {idx === 3 && <span className="bg-emerald-600 text-white px-2 py-1 text-[10px] rounded">Mkt Emerald</span>}
                      {idx === 4 && <span className="bg-purple-600 text-white px-2 py-1 text-[10px] rounded">PM Purple</span>}
                    </div>
                    <div>
                      <span className="font-bold text-xs text-slate-900 block">{color.name}</span>
                      <span className="font-mono text-[10px] text-indigo-600 font-bold block mt-0.5">{color.value}</span>
                      <span className="text-[10px] text-slate-500 mt-1 block leading-normal">{color.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography and Spacing Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
                <h3 className="text-sm font-bold text-indigo-700 font-mono tracking-wider mb-4 uppercase">Typography pairing</h3>
                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-indigo-605 block text-[10px] uppercase font-semibold tracking-wider">Primary Headings Font</span>
                    <strong className="text-sm font-black text-slate-900 block mt-1">{designSystem.typography.headings}</strong>
                    <p className="text-slate-500 mt-1">Conveys standard technological expertise, innovation, and educational authority.</p>
                  </div>
                  <div className="border-t border-slate-100 pt-3">
                    <span className="text-indigo-605 block text-[10px] uppercase font-semibold tracking-wider">Syllabus Details &amp; Paragraphs</span>
                    <strong className="text-sm font-black text-slate-900 block mt-1">{designSystem.typography.bodyText}</strong>
                    <p className="text-slate-500 mt-1">Optimized carefully for long reading spans and detailed curriculum exploration panels.</p>
                  </div>
                  <div className="border-t border-slate-100 pt-3">
                    <span className="text-indigo-605 block text-[10px] uppercase font-semibold tracking-wider">Metrics &amp; Quantitative Values</span>
                    <strong className="text-sm font-bold text-indigo-600 block mt-1 font-mono">{designSystem.typography.technicalStats}</strong>
                    <p className="text-slate-505 mt-1">Gives a highly technical, objective look to conversion outcomes and student statistics panels.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
                <h3 className="text-sm font-bold text-indigo-700 font-mono tracking-wider mb-4 uppercase">Spacing Rules</h3>
                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-indigo-605 block text-[10px] uppercase font-semibold tracking-wider">Main Layout Sections</span>
                    <strong className="text-sm font-black text-slate-900 block mt-1">{designSystem.spacing.outerSections}</strong>
                    <p className="text-slate-500 mt-1">Strict padding boundaries enforce massive spacing so sections can cleanly breathe without friction.</p>
                  </div>
                  <div className="border-t border-slate-100 pt-3">
                    <span className="text-indigo-605 block text-[10px] uppercase font-semibold tracking-wider">Inner Components</span>
                    <strong className="text-sm font-bold text-slate-900 block mt-1">{designSystem.spacing.innerComponents}</strong>
                    <p className="text-slate-500 mt-1">Carefully calibrated components separation ensures sub-cards never overlap visually.</p>
                  </div>
                  <div className="border-t border-slate-100 pt-3">
                    <span className="text-indigo-605 block text-[10px] uppercase font-semibold tracking-wider">Required interactive Buttons</span>
                    <div className="flex gap-2.5 mt-2">
                      <button className="bg-indigo-600 text-white font-semibold text-[11px] px-3.5 py-2 rounded-lg">Primary Button</button>
                      <button className="border border-slate-200 text-slate-700 hover:text-indigo-600 font-semibold text-[11px] px-3.5 py-2 rounded-lg bg-white">Secondary Outlined</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab content 3: Interactive Wireframes */}
        {activeTab === "wire" && (
          <div className="space-y-8 animated-fade-in">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-base font-bold text-slate-900 mb-2">Wireframing Recommendations</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our structure maintains complete mobile alignment. Below are raw blueprint wireframe rows mapped directly in code, showing layout frameworks, visual content containers, and alignment schemes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wireframes.map((wire, idx) => (
                <div key={idx} className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="inline-block bg-indigo-50 text-indigo-700 font-mono text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                        Wireframe Row {idx + 1}
                      </span>
                      <span className="font-serif text-[11px] font-bold italic text-slate-400">SECL Blueprint</span>
                    </div>
                    <h4 className="text-sm font-extrabold text-slate-900">{wire.sectionName}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-normal">
                      <strong>Grid Format:</strong> {wire.layoutType}
                    </p>
                    
                    {/* Simplified ASCII visual block representation */}
                    <div className="bg-slate-50 border border-slate-200/60 rounded-lg p-3 my-3 font-mono text-[10px] text-slate-750 leading-normal overflow-x-auto whitespace-pre">
                      {`+---------------------------------------------------+
|  [ID: ${wire.sectionName.toUpperCase().replace(/\s/g, "_")}]               |
|                                                   |
|  ${wire.layoutType}                         |
|  ===============================================  |
|  [H1 Heading TITLE] -> [H4 SUBHEAD]               |
|  [Primary Action Button]  [Secondary Action]      |
|                                                   |
| +-------------------------------------------------+`}
                    </div>

                    <p className="text-xs text-slate-500 italic mt-3">
                      <strong>Layout Description: </strong> {wire.visualLayout}
                    </p>
                  </div>
                  <div className="border-t border-slate-100 pt-3 mt-4">
                    <span className="text-[10px] text-indigo-650 block uppercase tracking-wider font-bold">Conversion Purpose</span>
                    <p className="text-xs text-slate-500 mt-1">{wire.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab content 4: Conversion & SEO */}
        {activeTab === "conv" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animated-fade-in">
            {/* Conversion Triggers */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-base font-bold text-slate-900 mb-4 uppercase tracking-widest font-mono text-indigo-600">Tactical Conversion Mechanisms</h3>
              <div className="space-y-4">
                {conversionTriggers.map((t, idx) => (
                  <div key={idx} className="bg-white border border-slate-200/80 rounded-xl p-5 flex gap-4 shadow-xs">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 border border-indigo-100">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">{t.metric}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        <strong>Execution:</strong> {t.implementation}
                      </p>
                      <p className="text-xs text-emerald-600 font-bold mt-1.5 flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Benefit: {t.benefit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SEO Strategy Panel */}
            <div className="space-y-6">
              <h3 className="text-base font-bold text-slate-900 mb-4 uppercase tracking-widest font-mono text-indigo-600">SEO Optimizations Map</h3>
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                {seoOptimizations.map((seo, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 text-xs space-y-2 shadow-xs">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-1.5">
                      <span className="font-bold text-indigo-600 text-[10px] uppercase font-mono">{seo.page} Metadata</span>
                      <Bookmark className="h-3.5 w-3.5 text-indigo-500" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-mono block font-bold">Meta Title:</span>
                      <p className="text-slate-800 font-semibold">{seo.title}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-mono block font-bold">Keywords Schema:</span>
                      <p className="text-[10px] text-slate-500 max-h-[40px] overflow-y-auto line-clamp-1">{seo.keywords}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-mono block font-bold">Meta Description:</span>
                      <p className="text-[10px] text-slate-500 leading-normal">{seo.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 text-xs text-slate-600 leading-relaxed">
                <strong>Organic Growth Protocol:</strong> Every page is equipped with semantic HTML structures. Images include `alt` characteristics, headings range hierarchically from H1 to H4, and primary keywords are integrated logically into early paragraphs.
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
