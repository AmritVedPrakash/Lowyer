import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CTASection from "../components/CTASection.jsx";
import Footer from "../components/Footer.jsx";
import ShortIntroduction from "../components/homes/ShortIntroduction.jsx";
import Statistics from "../components/homes/Statistics.jsx";
import OurExpertise from "../components/homes/OurExpertise.jsx";
import ClientTestimonials from "../components/homes/ClientTestimonials.jsx";
import Contact from "../components/homes/Contact.jsx";


function Home() {
  return (
    <>
     

      <main>
        <HeroSection />
        <ShortIntroduction/>
        <Statistics/>
        <OurExpertise/>
     
        <ClientTestimonials/>
        <Contact/>
        {/* <ServicesSection /> */}
        {/* <WhyChooseUs /> */}
        {/* <Testimonials />
        <CTASection /> */}
      </main>
      
    </>
  );
}

export default Home;
