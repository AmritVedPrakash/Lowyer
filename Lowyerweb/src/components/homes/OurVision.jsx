import React from "react";
import { motion } from "framer-motion";
import { Eye, ArrowUpRight } from "lucide-react";

export default function OurVision() {
  return (
    <section className="relative overflow-hidden bg-[#211a15] py-16 sm:py-20">
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#a67c45]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#c49a62]/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative border border-[#a67c45]/30 bg-[#18130f]/60 px-6 py-10 text-center backdrop-blur-sm sm:px-12 sm:py-12"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#a67c45]/50 bg-[#a67c45]/10 text-[#d8b47c]"
          >
            <Eye size={25} strokeWidth={1.7} />
          </motion.div>

          {/* Small Heading */}
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c49a62]">
            Our Vision
          </p>

          {/* Main Heading */}
          <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
            Justice with <span className="text-[#d8b47c]">Integrity</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            Our vision is to provide accessible, ethical and dependable legal
            guidance while protecting the rights and interests of every client.
            Advocate Vijay Singh aims to build lasting trust through
            professionalism, transparency and dedicated representation.
          </p>

          {/* Bottom Line */}
          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#a67c45]/50" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#c49a62]" />
            <span className="h-px w-12 bg-[#a67c45]/50" />
          </div>

          {/* CTA */}
          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#d8b47c] transition-colors hover:text-white"
          >
            Speak With Advocate Vijay Singh
            <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
