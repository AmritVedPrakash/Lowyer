import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Scale,
  Gavel,
  ShieldCheck,
  FileText,
  Users,
  Home,
} from "lucide-react";

const blogs = [
  {
    icon: Gavel,
    category: "Criminal Law",
    title: "What Should You Do If You Receive a Legal Notice?",
    description:
      "Understanding the importance of a legal notice, the steps you should take after receiving one, and why timely legal advice matters.",
    date: "September 18, 2026",
    time: "5 min read",
  },
  {
    icon: Scale,
    category: "Civil Law",
    title: "Understanding Your Basic Legal Rights",
    description:
      "A simple guide to understanding your basic legal rights and the importance of taking informed decisions in legal matters.",
    date: "September 12, 2026",
    time: "6 min read",
  },
  {
    icon: Users,
    category: "Family Law",
    title: "Important Things to Know About Divorce Proceedings",
    description:
      "An overview of important considerations in matrimonial matters, including documentation, legal consultation and court proceedings.",
    date: "September 06, 2026",
    time: "7 min read",
  },
  {
    icon: Home,
    category: "Property Law",
    title: "Common Property Disputes and Legal Remedies",
    description:
      "Learn about common property-related disputes and the importance of proper documentation and legal guidance.",
    date: "August 29, 2026",
    time: "5 min read",
  },
  {
    icon: ShieldCheck,
    category: "Cyber Law",
    title: "What to Do After an Online Fraud or Cyber Crime?",
    description:
      "Practical information about the initial steps, documentation and legal options available after becoming a victim of cyber fraud.",
    date: "August 22, 2026",
    time: "6 min read",
  },
  {
    icon: FileText,
    category: "Legal Guide",
    title: "Why Legal Documentation Matters",
    description:
      "Properly drafted legal documents can help avoid misunderstandings and provide clarity when disputes arise.",
    date: "August 15, 2026",
    time: "4 min read",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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

export default function Blog() {
  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-[#f8f5ef] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#a67c45]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#c49a62]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
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
              Legal Insights
            </span>

            <span className="h-px w-10 bg-[#a67c45]" />
          </div>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#211a15] sm:text-4xl lg:text-5xl">
            Legal Knowledge &{" "}
            <span className="text-[#a67c45]">Insights</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#6e6258] sm:text-base">
            Stay informed with useful legal information, practical guidance
            and insights from Advocate Vijay Singh.
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="group relative mb-10 overflow-hidden bg-[#211a15]"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* Visual */}
            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#30251c] to-[#17130f] p-10 sm:min-h-[350px]">
              <div className="absolute h-56 w-56 rounded-full border border-[#a67c45]/20" />
              <div className="absolute h-40 w-40 rounded-full border border-[#a67c45]/20" />

              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#d8b47c]/40 bg-[#a67c45]/10 text-[#d8b47c]">
                <Scale size={42} strokeWidth={1.3} />
              </div>

              <div className="absolute left-6 top-6 text-xs uppercase tracking-[0.25em] text-[#d8b47c]/70">
                Featured Article
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#d8b47c]">
                <span className="border border-[#a67c45]/40 px-3 py-1.5 uppercase tracking-wider">
                  Legal Awareness
                </span>

                <span className="flex items-center gap-1.5 text-white/50">
                  <CalendarDays size={14} />
                  September 20, 2026
                </span>
              </div>

              <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                Know Your Rights, Understand Your Legal Options
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                Legal matters can often feel complicated. Understanding the
                basic legal process and seeking appropriate guidance at the
                right time can help you make informed decisions about your
                situation.
              </p>

              <div className="mt-7 flex items-center gap-5">
                <div className="flex items-center gap-2 text-xs text-white/45">
                  <Clock3 size={14} />
                  6 min read
                </div>

                <button className="group/link flex items-center gap-2 text-sm font-semibold text-[#d8b47c]">
                  Read Article
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Blog Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {blogs.map((blog) => {
            const Icon = blog.icon;

            return (
              <motion.article
                key={blog.title}
                variants={cardVariants}
                whileHover={{ y: -7 }}
                className="group relative overflow-hidden border border-[#ded5c9] bg-white p-6 transition-all duration-300 hover:border-[#a67c45]/50 hover:shadow-[0_18px_45px_rgba(79,57,35,0.11)]"
              >
                {/* Gold Top Line */}
                <div className="absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-0 bg-[#a67c45] transition-transform duration-500 group-hover:scale-x-100" />

                {/* Icon */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#a67c45]/30 bg-[#faf7f1] text-[#a67c45] transition-all duration-300 group-hover:bg-[#a67c45] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-[#a67c45]">
                    {blog.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold leading-snug text-[#211a15]">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-[#75695f]">
                  {blog.description}
                </p>

                {/* Meta */}
                <div className="mt-6 flex items-center justify-between border-t border-[#e8e1d8] pt-5">
                  <div className="flex items-center gap-1.5 text-xs text-[#897c70]">
                    <CalendarDays size={14} />
                    {blog.date}
                  </div>

                  <span className="text-xs text-[#897c70]">
                    {blog.time}
                  </span>
                </div>

                {/* Read More */}
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#a67c45]">
                  Read More
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-sm text-[#75695f]">
            Have a legal question or need professional guidance?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#211a15] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#a67c45]"
          >
            Consult Advocate Vijay Singh
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}