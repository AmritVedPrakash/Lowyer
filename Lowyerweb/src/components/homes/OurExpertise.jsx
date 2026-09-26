import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Scale,
  Shield,
  Users,
  Building2,
  Laptop,
  ShoppingBag,
  HeartHandshake,
  BriefcaseBusiness,
  Landmark,
  Lightbulb,
  Gavel,
} from "lucide-react";

// ================= IMAGES =================

import criminalLaw from "../../assets/home/OurExpertise/criminal-law.jpg";
import civilLaw from "../../assets/home/OurExpertise/civil-law.jpg";
import familyLaw from "../../assets/home/OurExpertise/family-law.jpg";
import propertyDisputes from "../../assets/home/OurExpertise/property-disputes.jpg";
import corporateLaw from "../../assets/home/OurExpertise/corporate-law.jpg";
import cyberCrime from "../../assets/home/OurExpertise/cyber-crime.jpg";
import consumerProtection from "../../assets/home/OurExpertise/consumer-protection.jpg";
import divorceMatrimonial from "../../assets/home/OurExpertise/divorce-matrimonial.jpg";
import employmentLabour from "../../assets/home/OurExpertise/employment-labour.jpg";
import bankingFinance from "../../assets/home/OurExpertise/banking-finance.jpg";
import intellectualProperty from "../../assets/home/OurExpertise/intellectual-property.jpg";
import constitutionalLaw from "../../assets/home/OurExpertise/constitutional-law.jpg";

// ================= DATA =================
// (kept outside component so it isn't recreated on every render — already correct in original)

const expertiseData = [
  {
    title: "Criminal Law",
    description:
      "Professional legal representation and strategic guidance in criminal matters, investigations, bail proceedings, and related court cases.",
    image: criminalLaw,
    icon: Gavel,
  },
  {
    title: "Civil Law",
    description:
      "Legal assistance in civil disputes involving agreements, recovery matters, injunctions, claims, and other civil proceedings.",
    image: civilLaw,
    icon: Scale,
  },
  {
    title: "Family Law",
    description:
      "Sensitive and practical legal support for family-related matters, including maintenance, custody, domestic disputes, and family settlements.",
    image: familyLaw,
    icon: Users,
  },
  {
    title: "Property Disputes",
    description:
      "Guidance and representation in property disputes, ownership issues, possession matters, documentation, and related litigation.",
    image: propertyDisputes,
    icon: Building2,
  },
  {
    title: "Corporate Law",
    description:
      "Legal support for businesses and companies involving agreements, compliance, corporate matters, transactions, and commercial disputes.",
    image: corporateLaw,
    icon: BriefcaseBusiness,
  },
  {
    title: "Cyber Crime",
    description:
      "Legal assistance relating to online fraud, cyber offences, digital evidence, identity theft, online harassment, and cyber complaints.",
    image: cyberCrime,
    icon: Laptop,
  },
  {
    title: "Consumer Protection",
    description:
      "Representation and guidance in consumer disputes involving defective products, deficient services, unfair practices, and compensation claims.",
    image: consumerProtection,
    icon: ShoppingBag,
  },
  {
    title: "Divorce & Matrimonial Cases",
    description:
      "Compassionate legal guidance for divorce, matrimonial disputes, maintenance, custody, settlement, and related family proceedings.",
    image: divorceMatrimonial,
    icon: HeartHandshake,
  },
  {
    title: "Employment / Labour Law",
    description:
      "Legal guidance for employment disputes, workplace matters, contracts, employee rights, termination issues, and labour-related proceedings.",
    image: employmentLabour,
    icon: BriefcaseBusiness,
  },
  {
    title: "Banking & Finance",
    description:
      "Legal assistance in banking disputes, financial transactions, recovery matters, documentation, and other finance-related legal issues.",
    image: bankingFinance,
    icon: Landmark,
  },
  {
    title: "Intellectual Property",
    description:
      "Protection and legal guidance concerning trademarks, copyrights, brand identity, creative works, and intellectual property disputes.",
    image: intellectualProperty,
    icon: Lightbulb,
  },
  {
    title: "Constitutional Law",
    description:
      "Legal representation and guidance concerning constitutional rights, judicial remedies, public law matters, and constitutional proceedings.",
    image: constitutionalLaw,
    icon: Shield,
  },
];

// ================= COMPONENT =================

export default function OurExpertise() {
  return (
    <section id="expertise" className="relative scroll-mt-24 overflow-hidden bg-[#faf8f4] py-20 sm:py-24 lg:py-28">
      {/* Background Decorations — lighter blur so it doesn't tax the GPU while scrolling */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#a67c45]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-[#a67c45]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#a67c45]" />
            <span className="text-xs font-semibold uppercase tracking-[3px] text-[#a67c45] sm:text-sm">
              Our Expertise
            </span>
            <span className="h-px w-12 bg-[#a67c45]" />
          </div>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#17130f] sm:text-5xl lg:text-6xl">
            Areas of
            <span className="text-[#a67c45]"> Legal Expertise</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            Our firm provides professional legal assistance across a broad
            range of practice areas, offering practical guidance and
            dedicated representation tailored to every client's needs.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: (index % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                // NOTE: whileHover removed from here — it was fighting with the
                // CSS `group-hover` classes below and causing hover jank/lag.
                // Hover lift is now handled purely by the `hover:-translate-y-2`
                // CSS class for smoother, cheaper animation.
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#e7ded2]
                  bg-white
                  shadow-sm
                  transition-all
                  duration-500
                  will-change-transform
                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:shadow-[#a67c45]/10
                "
              >
                {/* ================= IMAGE ================= */}
                <div className="relative h-60 overflow-hidden bg-[#f1ece2]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={240}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-110
                    "
                  />

                  {/* Dark Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/75
                      via-black/10
                      to-transparent
                      transition-opacity
                      duration-500
                      group-hover:from-black/85
                    "
                  />

                  {/* Number */}
                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                      bg-black/35
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#a67c45]
                      text-white
                      shadow-lg
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-3
                    "
                  >
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  {/* Arrow */}
                  <div
                    className="
                      absolute
                      bottom-5
                      right-5
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                      bg-black/30
                      text-white
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:opacity-100
                    "
                  >
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* ================= CONTENT ================= */}
                <div className="p-6">
                  <h3
                    className="
                      font-serif
                      text-2xl
                      font-semibold
                      text-[#17130f]
                      transition-colors
                      duration-300
                      group-hover:text-[#a67c45]
                    "
                  >
                    {item.title}
                  </h3>

                  <div
                    className="
                      mt-3
                      h-[2px]
                      w-10
                      bg-[#a67c45]
                      transition-all
                      duration-500
                      group-hover:w-16
                    "
                  />

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>

                  {/* Bottom Link */}
                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[1.5px]
                      text-[#a67c45]
                    "
                  >
                    Explore Practice
                    <ArrowUpRight
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ================= BOTTOM ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-gray-500">Need legal assistance?</p>

          <button
            className="
              mt-3
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#17130f]
              px-7
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#a67c45]
              hover:shadow-lg
            "
          >
            Consult Our Legal Team
            <ArrowUpRight size={17} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}