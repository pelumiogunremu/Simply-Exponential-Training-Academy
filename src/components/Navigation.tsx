/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Menu, X, Rocket, Sparkles, BookOpen, GraduationCap, Briefcase, Info, Mail, Users } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onApplyNow: () => void;
}

export default function Navigation({ currentPage, onPageChange, onApplyNow }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesDropdown, setCoursesDropdown] = useState(false);

  const navLinks = [
    { name: "About", id: "about", icon: Info },
    { name: "Contact", id: "contact", icon: Mail },
  ];

  const handleLinkClick = (pageId: string) => {
    onPageChange(pageId);
    setIsOpen(false);
    setCoursesDropdown(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav id="global-navbar" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 text-slate-800 transition-all">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleLinkClick("home")}>
            <div className="flex flex-col">
              <span className="font-sans font-black text-base sm:text-lg tracking-tight text-indigo-600">
                SIMPLY EXPONENTIAL
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#ca819f] font-mono font-bold leading-none -mt-0.5">
                Consult Limited
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 ml-auto mr-8">
            <button
              id="nav-link-home"
              onClick={() => handleLinkClick("home")}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPage === "home" ? "bg-indigo-50 text-indigo-600 font-semibold" : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
              }`}
            >
              Home
            </button>

            {/* Courses Dropdown trigger */}
            <div className="relative">
              <button
                id="nav-link-courses-trigger"
                onClick={() => setCoursesDropdown(!coursesDropdown)}
                onMouseEnter={() => setCoursesDropdown(true)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                  currentPage.startsWith("course-") ? "bg-indigo-50 text-indigo-600 font-semibold" : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                }`}
              >
                Courses
                <span className="text-[10px] text-slate-400">▼</span>
              </button>

              {coursesDropdown && (
                <div
                  className="absolute left-0 mt-2 w-76 bg-white border border-slate-200/80 rounded-xl shadow-xl p-2 z-50"
                  onMouseLeave={() => setCoursesDropdown(false)}
                >
                  <p className="px-3 py-1.5 text-[10px] font-bold text-indigo-600 uppercase tracking-widest border-b border-slate-100 mb-1">
                    Select Your Path
                  </p>
                  <button
                    onClick={() => handleLinkClick("course-ai-data-skills")}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-xs hover:bg-indigo-50 transition-colors flex flex-col"
                  >
                    <span className="font-semibold text-slate-800">AI and Data Skills</span>
                    <span className="text-[10px] text-slate-500 line-clamp-1">Data analytics, SQL, Python, Excel and Power BI</span>
                  </button>
                  <button
                    onClick={() => handleLinkClick("course-digital-marketing-growth")}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-xs hover:bg-indigo-50 transition-colors flex flex-col"
                  >
                    <span className="font-semibold text-slate-800">Digital Marketing and Growth</span>
                    <span className="text-[10px] text-slate-500 line-clamp-1">SEO, Paid Ads, Marketing Copy and GA4</span>
                  </button>
                  <button
                    onClick={() => handleLinkClick("course-product-management-entrepreneurship")}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-xs hover:bg-indigo-50 transition-colors flex flex-col"
                  >
                    <span className="font-semibold text-slate-800">PM and Digital Entrepreneurship</span>
                    <span className="text-[10px] text-slate-500 line-clamp-1">Agile, Mockups, Lean startup and VC pitching</span>
                  </button>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <button
                id={`nav-link-${link.id}`}
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                  currentPage === link.id ? "bg-indigo-50 text-indigo-600 font-semibold" : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              id="header-apply-button"
              onClick={onApplyNow}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-sans text-sm font-semibold px-5.5 py-2.5 rounded-xl transition duration-300 transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              Apply Now
            </button>
          </div>

          {/* Hamburger Menu Trigger */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-2 shadow-inner">
          <p className="text-[10px] uppercase tracking-widest text-[#ca819f] font-bold px-3 pt-2">Navigations</p>
          <button
            onClick={() => handleLinkClick("home")}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
              currentPage === "home" ? "bg-indigo-50 text-indigo-600 font-semibold" : "text-slate-600"
            }`}
          >
            Home
          </button>

          <div className="border-t border-slate-100 my-1 pt-1">
            <p className="text-[10px] uppercase tracking-widest text-[#ca819f] font-bold px-3 pb-1">Courses</p>
            <button
              onClick={() => handleLinkClick("course-ai-data-skills")}
              className={`w-full text-left px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2 ${
                currentPage === "course-ai-data-skills" ? "bg-indigo-100 text-indigo-750 font-bold" : "text-slate-600"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              AI and Data Skills
            </button>
            <button
              onClick={() => handleLinkClick("course-digital-marketing-growth")}
              className={`w-full text-left px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2 ${
                currentPage === "course-digital-marketing-growth" ? "bg-indigo-100 text-indigo-750 font-bold" : "text-slate-600"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Digital Marketing and Growth
            </button>
            <button
              onClick={() => handleLinkClick("course-product-management-entrepreneurship")}
              className={`w-full text-left px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2 ${
                currentPage === "course-product-management-entrepreneurship" ? "bg-indigo-100 text-indigo-750 font-bold" : "text-slate-600"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              PM and Digital Entrepreneurship
            </button>
          </div>

          <div className="border-t border-slate-100 my-1 pt-1 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
                  currentPage === link.id ? "bg-indigo-50 text-indigo-600 font-semibold" : "text-slate-600"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="border-t border-slate-100 my-1 pt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onApplyNow();
              }}
              className="w-full bg-indigo-600 text-white font-semibold text-center py-3 rounded-xl text-sm hover:bg-indigo-700 transition"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
