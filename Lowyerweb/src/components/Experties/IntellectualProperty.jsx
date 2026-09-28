import ExpertiseDetail from "../ExpertiseDetail.jsx";
import image from "../../assets/home/OurExpertise/intellectual-property.jpg";

export default function IntellectualProperty() {
  return (
    <ExpertiseDetail
      title="Intellectual Property"
      eyebrow="Ideas, brands & creative work"
      summary="Legal guidance on protecting and responding to issues involving trademarks, copyright, creative work and other intellectual property."
      image={image}
      imageAlt="Intellectual property and creative works"
      introduction="A brand, original work or invention can be central to a business or creative project. Understanding what rights exist, how they are documented and how they are being used helps inform appropriate protection."
      focusAreas={[
        "Trademark and brand-related matters",
        "Copyright and creative-work disputes",
        "Intellectual property notices and responses",
        "Review of licences and usage agreements",
      ]}
      approach="We discuss how the work or mark is used, review available records and explain practical options for addressing protection or infringement concerns."
    />
  );
}
