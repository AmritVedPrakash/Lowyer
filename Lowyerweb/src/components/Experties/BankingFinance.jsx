import ExpertiseDetail from "../ExpertiseDetail.jsx";
import image from "../../assets/home/OurExpertise/banking-finance.jpg";

export default function BankingFinance() {
  return (
    <ExpertiseDetail
      title="Banking & Finance"
      eyebrow="Banking & financial matters"
      summary="Guidance for banking and finance disputes, loan and recovery matters, account concerns and related documentation."
      image={image}
      imageAlt="Banking and finance legal matters"
      introduction="Financial disputes can involve detailed account records, notices and contractual terms. Bringing these documents together makes it easier to understand what has happened and which response options may be relevant."
      focusAreas={[
        "Banking services and account disputes",
        "Loan documentation and recovery matters",
        "Financial notices and repayment disputes",
        "Review of transaction and account records",
      ]}
      approach="We consider the documents and communications together, identify important dates and obligations, and explain possible responses and procedural options."
    />
  );
}
