import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Home from "./Pages/Home/Home";
import MeetYourEmployee from "./components/MeetEmploye/MeetEmployee";
import AboutUs from "./Pages/AboutUs/AboutUS";
import Pricing from "./Pages/Pricing/pricing";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Support from "./Pages/Support/Support";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsandConditions/TermsandConditions";
import Blog from "./Pages/Blog/Blogs";
import BlogDetails from "./Pages/Blog/BlogDetails";
import AiPowerResume from "./Pages/AiPowerResume/AiPowerResume";
import AiCustomerService from "./Pages/AiCustomerService/AiCustomerService";
import AiAppointmentBooking from "./Pages/AiAppointmentBooking/AiAppointmentBooking";
import AiAgent from "./Pages/AiAgents/AiAgent";

function App() {
  return (
    <div className="gradient-bg">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/agent" element={<AiAgent />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogdetails/:blogId" element={<BlogDetails />} />
          <Route path="/agent/resume-screening" element={<AiPowerResume />} />
          <Route path="/agent/customer-service" element={<AiCustomerService />} />
          <Route path="/agent/appointment-booking" element={<AiAppointmentBooking />} />
        </Routes>
        <MeetYourEmployee />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
