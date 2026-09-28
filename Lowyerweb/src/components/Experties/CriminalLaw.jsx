import ExpertiseDetail from "../ExpertiseDetail.jsx";
import image from "../../assets/home/OurExpertise/criminal-law.jpg";

export default function CriminalLaw() {
  return (
    <ExpertiseDetail
      title="Criminal Law"
      eyebrow="Criminal law & defence"
      summary="Clear, considered legal guidance when a criminal allegation, investigation or court proceeding affects you or your family."
      image={image}
      imageAlt="Criminal law and defence"
      introduction="Criminal proceedings can move quickly and feel difficult to navigate. Understanding the allegation, your rights and the immediate procedural steps can help you make informed decisions at each stage."
      focusAreas={[
        "Advice on complaints and criminal allegations",
        "Assistance during investigation and questioning",
        "Bail applications and related court proceedings",
        "Review of case papers and available evidence",
      ]}
      approach="We begin by understanding the facts and reviewing the available documents, then explain relevant options and procedural considerations in clear, practical terms."
    />
  );
}
