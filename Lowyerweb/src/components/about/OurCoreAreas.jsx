import React from "react";
import { motion } from "framer-motion";
import {
  Scale,
  Gavel,
  Users,
  Building2,
  ShieldCheck,
  BriefcaseBusiness,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import aboutImage from "../../assets/about/about.jpg";

const coreAreas = [
  {
    icon: Gavel,
    title: "Criminal Law",
    description:
      "Professional legal assistance and representation in criminal matters, from investigation to court proceedings.",
  },
  {
    icon: Scale,
    title: "Civil Law",
    description:
      "Legal guidance for civil disputes, claims, recovery matters, contracts and other civil proceedings.",
  },
  {
    icon: Users,
    title: "Family & Matrimonial Law",
    description:
      "Dedicated legal support for matrimonial disputes, divorce, maintenance, custody and family-related matters.",
  },
  {
    icon: Building2,
    title: "Property & Real Estate",
    description:
      "Assistance with property disputes, ownership matters, agreements, documentation and real estate issues.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate & Commercial Law",
    description:
      "Legal support for businesses, commercial agreements, corporate matters and business-related disputes.",
  },
  {
    icon: ShieldCheck,
    title: "Consumer & Cyber Law",
    description:
      "Legal assistance for consumer grievances, online fraud, cyber offences and digital disputes.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
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

export default function OurCoreAreas() {
  return (
    <section
      id="core-areas"
      className="relative overflow-hidden bg-[#f8f5ef] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#c49a62]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#a67c45]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#a67c45]" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a67c45]">
              Legal Practice
            </span>

            <span className="h-px w-10 bg-[#a67c45]" />
          </div>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#211a15] sm:text-4xl lg:text-5xl">
            Our Core Areas of{" "}
            <span className="text-[#a67c45]">Practice</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#6e6258] sm:text-base">
            Advocate Vijay Singh provides professional legal consultation,
            representation and strategic guidance across a range of legal
            matters with a commitment to protecting the rights and interests
            of every client.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Gold Frame */}
            <div className="absolute -left-3 -top-3 h-full w-full border border-[#a67c45]/40 sm:-left-5 sm:-top-5" />

            <div className="group relative overflow-hidden bg-[#211a15]">
              <img
                src={aboutImage}
                alt="Advocate Vijay Singh"
                className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[500px] lg:h-[570px]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#d8b47c]/50 bg-black/30 text-[#d8b47c] backdrop-blur-sm">
                  <Scale size={21} />
                </div>

                <h3 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
                  Advocate Vijay Singh
                </h3>

                <p className="mt-2 text-sm text-white/75">
                  Legal Consultant & Advocate
                </p>
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-5 right-4 flex items-center gap-3 border border-[#d8b47c]/40 bg-[#211a15] px-5 py-4 shadow-xl sm:-right-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a67c45] text-white">
                <Scale size={19} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#d8b47c]">
                  Trusted Legal Counsel
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Professional • Dedicated • Reliable
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#a67c45]">
                Areas We Handle
              </p>

              <h3 className="font-serif text-3xl font-semibold leading-tight text-[#211a15] sm:text-4xl">
                Focused Legal Expertise,
                <br />
                <span className="text-[#a67c45]">
                  Personalised Representation
                </span>
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6e6258] sm:text-base">
                Every legal matter requires a thoughtful approach. Our focus is
                to understand the circumstances, explain the available legal
                options clearly and provide representation tailored to the
                client's needs.
              </p>
            </motion.div>

            {/* Core Area Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-9 grid gap-4 sm:grid-cols-2"
            >
              {coreAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <motion.div
                    key={area.title}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden border border-[#ded5c9] bg-white p-5 transition-all duration-300 hover:border-[#a67c45]/50 hover:shadow-[0_15px_40px_rgba(90,65,40,0.10)]"
                  >
                    {/* Hover Line */}
                    <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-[#a67c45] transition-transform duration-300 group-hover:scale-y-100" />

                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#a67c45]/30 bg-[#faf7f1] text-[#a67c45] transition-all duration-300 group-hover:bg-[#a67c45] group-hover:text-white">
                        <Icon size={20} />
                      </div>

                      <div>
                        <h4 className="font-serif text-lg font-semibold text-[#211a15]">
                          {area.title}
                        </h4>

                        <p className="mt-2 text-xs leading-6 text-[#75695f]">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bottom Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
            >
              {[
                "Client-Focused Approach",
                "Clear Legal Guidance",
                "Professional Representation",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-sm text-[#4f453d]"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-[#a67c45]"
                  />
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ y: -2 }}
              className="mt-9 inline-flex items-center gap-3 bg-[#211a15] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#a67c45]"
            >
              Discuss Your Legal Matter
              <ArrowUpRight size={17} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}