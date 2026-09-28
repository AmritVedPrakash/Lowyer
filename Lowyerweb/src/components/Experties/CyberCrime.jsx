import ExpertiseDetail from "../ExpertiseDetail.jsx";
import image from "../../assets/home/OurExpertise/cyber-crime.jpg";

export default function CyberCrime() {
  return (
    <ExpertiseDetail
      title="Cyber Crime"
      eyebrow="Cyber & digital offences"
      summary="Legal guidance for online fraud, account misuse, digital harassment and other matters involving technology or electronic evidence."
      image={image}
      imageAlt="Cyber crime and digital legal matters"
      introduction="Digital incidents may involve rapidly changing online material and electronic records. Preserving relevant information and understanding where and how to report an incident can be important."
      focusAreas={[
        "Online fraud and suspected digital scams",
        "Identity misuse and account compromise",
        "Online harassment and threatening messages",
        "Digital evidence and cyber complaint guidance",
      ]}
      approach="We help you organise the available records, understand relevant complaint or legal channels and consider appropriate next steps based on the specific incident."
    />
  );
}
