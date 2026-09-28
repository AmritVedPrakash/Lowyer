import ExpertiseDetail from "../ExpertiseDetail.jsx";
import image from "../../assets/home/OurExpertise/constitutional-law.jpg";

export default function ConstitutionalLaw() {
  return (
    <ExpertiseDetail
      title="Constitutional Law"
      eyebrow="Constitutional rights & public law"
      summary="Legal guidance on constitutional rights, public authority decisions and potential judicial remedies in appropriate cases."
      image={image}
      imageAlt="Constitutional law and public justice"
      introduction="Public law matters can involve important rights and decisions made by public authorities. A close look at the decision, supporting record and procedural history is essential to assessing possible legal remedies."
      focusAreas={[
        "Constitutional rights and legal consultation",
        "Challenges to public authority decisions",
        "Administrative and public law matters",
        "Assessment of potential judicial remedies",
      ]}
      approach="We examine the decision and relevant record, clarify the legal issue and explain potential avenues for review in light of the specific facts and applicable law."
    />
  );
}
