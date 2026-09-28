import ExpertiseDetail from "../ExpertiseDetail.jsx";
import image from "../../assets/home/OurExpertise/corporate-law.jpg";

export default function CorporateLaw() {
  return (
    <ExpertiseDetail
      title="Corporate Law"
      eyebrow="Business & corporate matters"
      summary="Practical legal assistance for organisations navigating commercial agreements, business relationships and corporate disputes."
      image={image}
      imageAlt="Corporate and business law"
      introduction="Businesses make decisions in a changing legal and commercial environment. Thoughtful document review and clear advice can help teams understand their responsibilities, manage risk and respond to disputes."
      focusAreas={[
        "Commercial agreements and contract review",
        "Business and corporate legal consultations",
        "Shareholder and business disputes",
        "Transaction and compliance-related guidance",
      ]}
      approach="We first learn how the business operates and what outcome it needs, then explain material contractual or procedural considerations in straightforward language."
    />
  );
}
