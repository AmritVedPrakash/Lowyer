
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
import OurServices from "./pages/OurServices.jsx";
import Blog from "./pages/Blog.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-expertises" element={<OurExpertises />} />
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
