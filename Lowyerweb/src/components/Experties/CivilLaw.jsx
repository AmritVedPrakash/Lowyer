import ExpertiseDetail from "../ExpertiseDetail.jsx";
import image from "../../assets/home/OurExpertise/civil-law.jpg";

export default function CivilLaw() {
  return (
    <ExpertiseDetail
      title="Civil Law"
      eyebrow="Civil disputes & remedies"
      summary="Practical legal support for civil claims, contractual disagreements and disputes involving personal or commercial rights."
      image={image}
      imageAlt="Civil law and legal proceedings"
      introduction="Civil matters often involve important relationships, property or financial interests. A careful review of the documents, relevant timelines and available remedies helps shape a proportionate way forward."
      focusAreas={[
        "Civil claims, replies and court proceedings",
        "Contract and agreement disputes",
        "Recovery matters and monetary claims",
        "Injunctions and other appropriate relief",
      ]}
      approach="We assess the underlying documents and objectives with you, explain the procedural choices available, and help prepare a clear strategy for negotiation or proceedings."
    />
  );
}
