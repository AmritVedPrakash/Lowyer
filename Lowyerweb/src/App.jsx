
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import OurExpertises from "./pages/OurExpertises.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsCondition from "./pages/TermsCondition.jsx";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import FloatingContactButtons from "./components/FloatingContactButtons.jsx";
import Blog from "./pages/Blog.jsx";
import CriminalLaw from "./components/Experties/CriminalLaw.jsx";
import CivilLaw from "./components/Experties/CivilLaw.jsx";
import FamilyLaw from "./components/Experties/FamilyLaw.jsx";
import PropertyDisputes from "./components/Experties/PropertyDisputes.jsx";
import CorporateLaw from "./components/Experties/CorporateLaw.jsx";
import CyberCrime from "./components/Experties/CyberCrime.jsx";
import ConsumerProtection from "./components/Experties/ConsumerProtection.jsx";
import DivorceMatrimonial from "./components/Experties/DivorceMatrimonial.jsx";
import EmploymentLabour from "./components/Experties/EmploymentLabour.jsx";
import BankingFinance from "./components/Experties/BankingFinance.jsx";
import IntellectualProperty from "./components/Experties/IntellectualProperty.jsx";
import ConstitutionalLaw from "./components/Experties/ConstitutionalLaw.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-expertises" element={<OurExpertises />} />
        <Route path="/our-expertises/criminal-law" element={<CriminalLaw />} />
        <Route path="/our-expertises/civil-law" element={<CivilLaw />} />
        <Route path="/our-expertises/family-law" element={<FamilyLaw />} />
        <Route path="/our-expertises/property-disputes" element={<PropertyDisputes />} />
        <Route path="/our-expertises/corporate-law" element={<CorporateLaw />} />
        <Route path="/our-expertises/cyber-crime" element={<CyberCrime />} />
        <Route path="/our-expertises/consumer-protection" element={<ConsumerProtection />} />
        <Route path="/our-expertises/divorce-matrimonial" element={<DivorceMatrimonial />} />
        <Route path="/our-expertises/employment-labour" element={<EmploymentLabour />} />
        <Route path="/our-expertises/banking-finance" element={<BankingFinance />} />
        <Route path="/our-expertises/intellectual-property" element={<IntellectualProperty />} />
        <Route path="/our-expertises/constitutional-law" element={<ConstitutionalLaw />} />
        {/* <Route path="/our-services" element={<OurServices/>} /> */}
        <Route path="/blog" element={<Blog/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
      </Routes>

      <Footer />
      <FloatingContactButtons />
    </>
  );
}

export default App;
