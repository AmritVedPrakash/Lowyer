import React from "react";
import { motion } from "framer-motion";
import {
  Gavel,
  Scale,
  Users,
  Building2,
  FileText,
  ShieldCheck,
  Home,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Gavel,
    title: "Criminal Defense",
    description:
      "Legal representation and guidance in criminal cases, complaints, bail matters and court proceedings.",
  },
  {
    number: "02",
    icon: Scale,
    title: "Civil Litigation",
    description:
      "Professional assistance in civil disputes, recovery matters, claims, injunctions and litigation.",
  },
  {
    number: "03",
    icon: Users,
    title: "Family & Matrimonial",
    description:
      "Legal support for divorce, maintenance, child custody and other family-related matters.",
  },
  {
    number: "04",
    icon: Building2,
    title: "Corporate Legal",
    description:
      "Legal assistance for businesses, commercial agreements, contracts and corporate matters.",
  },
  {
    number: "05",
    icon: FileText,
    title: "Legal Documentation",
    description:
      "Drafting and reviewing agreements, notices, affidavits, contracts and other legal documents.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Consumer Protection",
    description:
      "Representation and legal guidance for consumer complaints, disputes and compensation claims.",
  },
  {
    number: "07",
    icon: Home,
    title: "Property & Real Estate",
    description:
      "Assistance with property disputes, ownership issues, documentation and real estate matters.",
  },
  {
    number: "08",
    icon: BriefcaseBusiness,
    title: "Legal Consultation",
    description:
      "Personalised legal consultation to understand your matter and identify suitable legal options.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function OurServices() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f8f5ef] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#a67c45]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#c49a62]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#a67c45]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a67c45]">
              What We Offer
            </span>

            <span className="h-px w-10 bg-[#a67c45]" />
          </div>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#211a15] sm:text-4xl lg:text-5xl">
            Our Legal <span className="text-[#a67c45]">Services</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#6e6258] sm:text-base">
            Advocate Vijay Singh provides professional legal services and
            personalised guidance designed to help clients understand their
            legal options and move forward with confidence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
                className="group relative overflow-hidden border border-[#ded5c9] bg-white p-6 transition-all duration-300 hover:border-[#a67c45]/60 hover:shadow-[0_18px_45px_rgba(79,57,35,0.12)]"
              >
                {/* Top Gold Line */}
                <div className="absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-0 bg-[#a67c45] transition-transform duration-500 group-hover:scale-x-100" />

                {/* Number */}
                <div className="absolute right-5 top-5 font-serif text-4xl font-semibold text-[#a67c45]/10 transition-colors duration-300 group-hover:text-[#a67c45]/20">
                  {service.number}
                </div>

                {/* Icon */}
                <div className="relative mb-7 flex h-12 w-12 items-center justify-center border border-[#a67c45]/30 bg-[#faf7f1] text-[#a67c45] transition-all duration-300 group-hover:bg-[#a67c45] group-hover:text-white">
                  <Icon size={22} strokeWidth={1.7} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-[#211a15]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#75695f]">
                  {service.description}
                </p>

                {/* Bottom Link */}
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#a67c45]">
                  <span>Learn More</span>

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                {/* Bottom Corner Decoration */}
                <div className="absolute -bottom-8 -right-8 h-20 w-20 rounded-full border border-[#a67c45]/10 transition-all duration-500 group-hover:scale-150" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-[#d8cec0] pt-8 sm:flex-row"
        >
          <div>
            <p className="font-serif text-xl font-semibold text-[#211a15]">
              Need legal assistance?
            </p>

            <p className="mt-1 text-sm text-[#75695f]">
              Discuss your matter with Advocate Vijay Singh.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#211a15] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#a67c45]"
          >
            Get Legal Consultation
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
