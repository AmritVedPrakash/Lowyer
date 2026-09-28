import ExpertiseDetail from "../ExpertiseDetail.jsx";
import image from "../../assets/home/OurExpertise/property-disputes.jpg";

export default function PropertyDisputes() {
  return (
    <ExpertiseDetail
      title="Property Disputes"
      eyebrow="Property & real estate"
      summary="Legal guidance on ownership, possession, property documents and disputes affecting land, homes and other real estate."
      image={image}
      imageAlt="Property and real estate matters"
      introduction="Property matters can involve lengthy histories and several documents or parties. Reviewing title records, agreements and the sequence of events is an important first step toward understanding the available options."
      focusAreas={[
        "Ownership, title and possession disputes",
        "Property agreements and document review",
        "Partition and family property matters",
        "Tenant, landlord and real estate disputes",
      ]}
      approach="We organise the relevant records, identify the central issues and help you understand suitable steps for resolution, negotiation or litigation."
    />
  );
}
