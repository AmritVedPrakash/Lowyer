import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, Scale } from "lucide-react";
import { Link } from "react-router-dom";

export default function ExpertiseDetail({
  title,
  eyebrow,
  summary,
  image,
  imageAlt,
  introduction,
  focusAreas,
  approach,
}) {
  return (
    <main className="overflow-hidden bg-[#faf8f4] pt-[82px]">
      <section className="relative isolate overflow-hidden bg-[#211a15]">
        <div className="pointer-events-none absolute -left-36 top-0 h-80 w-80 rounded-full bg-[#a67c45]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 right-0 h-96 w-96 rounded-full bg-[#a67c45]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/our-expertises"
              className="mb-9 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#e3c18c]"
            >
              <ArrowLeft size={16} />
              All areas of expertise
            </Link>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c49a62]" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8b47c]">
                {eyebrow}
              </p>
            </div>

            <h1 className="max-w-2xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              {summary}
            </p>

            <Link
              to="/contact-us"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#a67c45] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#bd925b]"
            >
              Discuss your matter
              <ArrowRight size={17} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="group relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] border border-[#c49a62]/25 transition-transform duration-700 group-hover:rotate-1" />
            <div className="relative h-[300px] overflow-hidden rounded-[1.5rem] sm:h-[390px]">
              <img
                src={image}
                alt={imageAlt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211a15]/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full border border-white/20 bg-black/30 px-4 py-2.5 text-sm text-white backdrop-blur-md">
                <Scale size={17} className="text-[#e3c18c]" />
                Clear guidance. Considered representation.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a67c45]">
            A thoughtful way forward
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-snug text-[#211a15] sm:text-4xl">
            Legal support, centred on your situation.
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#75695f] sm:text-base sm:leading-8">
            {introduction}
          </p>
          <div className="mt-7 flex items-start gap-3 border-l-2 border-[#a67c45] bg-white/70 p-4 text-sm leading-6 text-[#75695f]">
            <Scale size={18} className="mt-0.5 shrink-0 text-[#a67c45]" />
            Every matter is different. Advice and possible next steps depend on
            the specific facts and applicable law.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border border-[#e7ded2] bg-white p-6 shadow-[0_18px_55px_rgba(55,42,28,0.06)] sm:p-9"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a67c45]">
            How we can help
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold text-[#211a15] sm:text-3xl">
            Support through each important step
          </h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="flex items-start gap-3 border border-[#eee8df] bg-[#faf8f4] p-4 text-sm leading-6 text-[#51463c]"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#a67c45]/10 text-[#a67c45]">
                  <Check size={13} strokeWidth={2.5} />
                </span>
                {area}
              </motion.div>
            ))}
          </div>
          <p className="mt-7 border-t border-[#eee8df] pt-6 text-sm leading-7 text-[#75695f]">
            {approach}
          </p>
          <Link
            to="/contact-us"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#a67c45] transition-colors hover:text-[#211a15]"
          >
            Get in touch
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
