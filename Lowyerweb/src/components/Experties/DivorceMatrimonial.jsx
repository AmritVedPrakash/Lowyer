import ExpertiseDetail from "../ExpertiseDetail.jsx";
import image from "../../assets/home/OurExpertise/divorce-matrimonial.jpg";

export default function DivorceMatrimonial() {
  return (
    <ExpertiseDetail
      title="Divorce & Matrimonial Cases"
      eyebrow="Matrimonial law"
      summary="Compassionate legal guidance through divorce and matrimonial issues, with attention to privacy, practical arrangements and family needs."
      image={image}
      imageAlt="Divorce and matrimonial legal support"
      introduction="Matrimonial decisions can affect many parts of life. Understanding the applicable process, available routes to resolution and the practical issues that may need attention can make difficult decisions easier to approach."
      focusAreas={[
        "Divorce proceedings and related consultation",
        "Mutual consent and settlement discussions",
        "Maintenance and financial arrangements",
        "Child custody and visitation matters",
      ]}
      approach="We listen without judgement, explain the relevant steps and timelines as clearly as possible, and discuss options that reflect your individual circumstances."
    />
  );
}
