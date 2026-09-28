import ExpertiseDetail from "../ExpertiseDetail.jsx";
import image from "../../assets/home/OurExpertise/employment-labour.jpg";

export default function EmploymentLabour() {
  return (
    <ExpertiseDetail
      title="Employment & Labour Law"
      eyebrow="Workplace & employment"
      summary="Legal assistance for employees and employers addressing workplace disputes, employment terms and labour-related concerns."
      image={image}
      imageAlt="Employment and labour law"
      introduction="Workplace concerns often turn on employment terms, internal communications and a clear timeline of events. Reviewing these details helps establish the issues and possible avenues for addressing them."
      focusAreas={[
        "Employment agreements and workplace policies",
        "Termination, notice and disciplinary issues",
        "Salary, benefits and service-related disputes",
        "Labour complaints and employment proceedings",
      ]}
      approach="We review the employment documents and communications, clarify the nature of the dispute and explain the available steps with the context of applicable law."
    />
  );
}
