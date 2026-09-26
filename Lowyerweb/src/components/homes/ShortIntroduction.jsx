import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Scale,
  ShieldCheck,
} from "lucide-react";

// Apni actual image ka naam yahan change kar dena

import lawyerImage from "../../assets/home/lawyer.jpg";
export default function ShortIntroduction() {
  const benefits = [
    "Client-focused legal representation",
    "Clear and practical legal guidance",
    "Confidential and professional service",
    "Strong understanding of Delhi & NCR matters",
  ];

  const stats = [
    {
      icon: Award,
      value: "15+",
      label: "Years of Experience",
    },
    {
      icon: BriefcaseBusiness,
      value: "500+",
      label: "Matters Handled",
    },
    {
      icon: Scale,
      value: "10+",
      label: "Practice Areas",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#faf8f4] py-20 md:py-24 lg:py-28">
      
      {/* Decorative Background */}
      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-[#a67c45]/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#a67c45]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ================= IMAGE SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            {/* Outer Frame */}
            <div className="absolute -left-3 -top-3 h-full w-full rounded-[28px] border border-[#a67c45]/30 sm:-left-5 sm:-top-5" />

            {/* Image Container */}
            <div className="group relative overflow-hidden rounded-[24px] bg-[#17130f] shadow-2xl">

              <img
                src={lawyerImage}
                alt="Legal Professional"
                className="
                  h-[430px]
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  group-hover:scale-105
                  sm:h-[520px]
                  lg:h-[600px]
                "
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="
                  absolute
                  bottom-6
                  left-5
                  right-5
                  rounded-2xl
                  border
                  border-white/20
                  bg-black/55
                  p-4
                  backdrop-blur-md
                  sm:bottom-7
                  sm:left-7
                  sm:right-auto
                  sm:min-w-[280px]
                "
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#a67c45]">
                    <ShieldCheck size={22} className="text-white" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[2px] text-[#d9b47b]">
                      Trusted Legal Counsel
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      Professional • Confidential • Dedicated
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Gold Circle */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-4
                -top-5
                hidden
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border-8
                border-[#faf8f4]
                bg-[#a67c45]
                shadow-xl
                sm:flex
              "
            >
              <Scale size={30} className="text-white" />
            </motion.div>
          </motion.div>


          {/* ================= CONTENT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-[1px] w-10 bg-[#a67c45]" />

              <span className="text-sm font-semibold uppercase tracking-[3px] text-[#a67c45]">
                About Our Firm
              </span>
            </motion.div>


            {/* Heading */}
            <h2 className="font-serif text-4xl font-semibold leading-tight text-[#17130f] sm:text-5xl lg:text-[52px]">
              Dedicated Legal
              <span className="block text-[#a67c45]">
                Representation
              </span>
            </h2>


            {/* Introduction */}
            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
             Abhinav kumar is a professional legal practice
              serving clients across Delhi and the NCR region. Our approach
              combines legal knowledge, practical strategy and personal
              attention to help clients navigate complex legal matters with
              greater clarity and confidence.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
              Our legal team works closely with individuals, families and
              businesses, providing thoughtful guidance while maintaining the
              highest standards of confidentiality, professionalism and
              integrity.
            </p>


            {/* Benefits */}
            <div className="mt-8">
              <h3 className="mb-5 text-xl font-semibold text-[#17130f]">
                Why Clients Choose Us
              </h3>

              <div className="grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + index * 0.1,
                      duration: 0.5,
                    }}
                    className="
                      group
                      flex
                      items-start
                      gap-3
                      rounded-xl
                      border
                      border-[#e8dfd2]
                      bg-white
                      p-4
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#a67c45]/40
                      hover:shadow-lg
                    "
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[#a67c45]"
                    />

                    <span className="text-sm leading-6 text-gray-700">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>


            {/* Stats */}
            <div className="mt-9 grid grid-cols-3 border-y border-[#ded5c8] py-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.25 + index * 0.12,
                      duration: 0.5,
                    }}
                    className={`
                      text-center
                      px-2
                      ${
                        index !== 0
                          ? "border-l border-[#ded5c8]"
                          : ""
                      }
                    `}
                  >
                    <Icon
                      size={20}
                      className="mx-auto mb-2 text-[#a67c45]"
                    />

                    <div className="text-xl font-bold text-[#17130f] sm:text-2xl">
                      {stat.value}
                    </div>

                    <div className="mt-1 text-[10px] leading-4 text-gray-500 sm:text-xs">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>


            {/* CTA */}
            <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.97 }}
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#a67c45]
                px-7
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-[#a67c45]/20
                transition-colors
                duration-300
                hover:bg-[#8f6839]
              "
            >
              Discover Our Practice

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}