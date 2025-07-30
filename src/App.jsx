import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footerr";
import TouristAttractions from "./components/TouristAttractions";
import Home from "./components/home";
import ConferenceTopics from "./components/ConferenceTopics";
import Glimpses from "./components/GlimpsesSection";


// Lazy-loaded Pages
const IEEEConference = lazy(() => import("./pages/IEEEConference"));
const About = lazy(() => import("./pages/About"));
const Committee = lazy(() => import("./pages/Committee"));
const Speakers = lazy(() => import("./pages/Speakers"));
const CallForPaper = lazy(() => import("./pages/CallForPaper"));
const Guidelines = lazy(() => import("./pages/Guidelines"));
const Registration = lazy(() => import("./pages/Registration"));
const Submission = lazy(() => import("./pages/Submission"));
const Contact = lazy(() => import("./pages/Contact"));

// ✅ New Committee Dropdown Pages
const Patrons = lazy(() => import("./pages/Patrons"));
const TechnicalCommittee = lazy(() => import("./pages/TechnicalCommittee"));
const AdvisoryCommittee = lazy(() => import("./pages/AdvisoryCommittee"));
const VolunteerCommittee = lazy(() => import("./pages/VolunteerCommittee"));

// New Glimpses dropdown Pages
const Glimpses2024 = lazy(() => import("./pages/Glimpses2024"));
const Glimpses2025 = lazy(() => import("./pages/Glimpses2025"));
const Gallery = lazy(() => import("./pages/gallery"));


const MainContent = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<IEEEConference />} />
          <Route path="/about" element={<About />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/call-for-paper" element={<CallForPaper />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/attractions" element={<TouristAttractions />} />

          {/* ✅ New Committee Routes */}
          <Route path="/committee/patrons" element={<Patrons />} />
          <Route path="/committee/TechnicalCommittee" element={<TechnicalCommittee />} />
          <Route path="/committee/AdvisoryCommittee" element={<AdvisoryCommittee />} />
          <Route path="/committee/VolunteerCommittee" element={<VolunteerCommittee />} />
        
        {/* New Glimpses Routes */}
        
          <Route path="/glimpses/Glimpses2024" element={<Glimpses2024 />} />
          <Route path="/glimpses/Glimpses2025" element={<Glimpses2025 />} />
          <Route path="/glimpses/gallery" element={<Gallery />} />
        </Routes>
      </Suspense>

      {/* Only show on homepage */}
      {isHome && (
        <>
          <Home />
          <ConferenceTopics />
          <Glimpses />
          <TouristAttractions />
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <MainContent />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
