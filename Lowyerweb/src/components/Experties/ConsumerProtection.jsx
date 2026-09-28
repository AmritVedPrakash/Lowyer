import ExpertiseDetail from "../ExpertiseDetail.jsx";
import image from "../../assets/home/OurExpertise/consumer-protection.jpg";

export default function ConsumerProtection() {
  return (
    <ExpertiseDetail
      title="Consumer Protection"
      eyebrow="Consumer rights & disputes"
      summary="Support in consumer disputes concerning products, services, billing, warranties and other customer-related concerns."
      image={image}
      imageAlt="Consumer protection and customer rights"
      introduction="When a purchase or service does not meet reasonable expectations, keeping a clear record of the transaction and efforts to resolve the issue can help determine what consumer remedies may apply."
      focusAreas={[
        "Defective product and warranty disputes",
        "Deficiency in services and billing concerns",
        "Unfair trade practice-related complaints",
        "Consumer notices, claims and proceedings",
      ]}
      approach="We review the transaction details and supporting communications, explain possible complaint routes and help you understand the process and documentation involved."
    />
  );
}
