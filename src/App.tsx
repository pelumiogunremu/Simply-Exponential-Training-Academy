/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ApplicationModal from "./components/ApplicationModal";
import Homepage from "./components/Homepage";
import CourseDetailPage from "./components/CourseDetailPage";
import AboutPage from "./components/AboutPage";
import TrainersPage from "./components/TrainersPage";
import CareerSupportPage from "./components/CareerSupportPage";
import ContactPage from "./components/ContactPage";
import StrategyHub from "./components/StrategyHub";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string>("ai-data-skills");

  // Handle direct scroll-to-top whenever page is mutated
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Apply Now Trigger Coordinator
  const handleApplyNow = (courseId: string = "ai-data-skills") => {
    setSelectedCourseId(courseId);
    setModalOpen(true);
  };

  // Custom Page Router Renderer
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Homepage onNavigate={setCurrentPage} onApply={handleApplyNow} />;
      case "course-ai-data-skills":
        return <CourseDetailPage courseSlug="ai-data-skills" onBack={() => setCurrentPage("home")} onApply={handleApplyNow} />;
      case "course-digital-marketing-growth":
        return <CourseDetailPage courseSlug="digital-marketing-growth" onBack={() => setCurrentPage("home")} onApply={handleApplyNow} />;
      case "course-product-management-entrepreneurship":
        return <CourseDetailPage courseSlug="product-management-entrepreneurship" onBack={() => setCurrentPage("home")} onApply={handleApplyNow} />;
      case "about":
        return <AboutPage />;
      case "trainers":
        return <TrainersPage />;
      case "career-support":
        return <CareerSupportPage />;
      case "contact":
        return <ContactPage />;
      case "strategy-hub":
        return <StrategyHub />;
      default:
        return <Homepage onNavigate={setCurrentPage} onApply={handleApplyNow} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">


      {/* Global Navigation navbar */}
      <Navigation
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onApplyNow={() => handleApplyNow()}
      />

      {/* Active screen viewport main container */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Universal footer */}
      <Footer
        onPageChange={setCurrentPage}
        onApplyNow={() => handleApplyNow()}
      />

      {/* Pop-up multi-step registration flow wizard */}
      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedCourseId={selectedCourseId}
      />
    </div>
  );
}
