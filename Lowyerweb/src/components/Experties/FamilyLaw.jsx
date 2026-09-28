import ExpertiseDetail from "../ExpertiseDetail.jsx";
import image from "../../assets/home/OurExpertise/family-law.jpg";

export default function FamilyLaw() {
  return (
    <ExpertiseDetail
      title="Family Law"
      eyebrow="Family law & personal matters"
      summary="Sensitive, respectful legal guidance for family matters, with care for the people and practical needs behind each case."
      image={image}
      imageAlt="Family law support"
      introduction="Family disagreements can be deeply personal. A private, measured conversation about your circumstances can help clarify the legal position while keeping practical priorities and the wellbeing of those involved in view."
      focusAreas={[
        "Family disputes and legal consultation",
        "Maintenance and support-related matters",
        "Child custody and visitation concerns",
        "Family settlements and mediation options",
      ]}
      approach="We take time to understand your concerns, explain the relevant legal process and discuss constructive next steps with discretion and sensitivity."
    />
  );
}
