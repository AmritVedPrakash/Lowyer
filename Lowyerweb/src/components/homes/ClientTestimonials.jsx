import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Scale,
} from "lucide-react";

export default function ClientTestimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Business Client",
      location: "Delhi",
      initials: "RS",
      text:
        "The legal team handled my matter with great professionalism and patience. They explained every step clearly and kept me informed throughout the process. I truly appreciated their dedicated approach.",
    },
    {
      name: "Priya Verma",
      role: "Individual Client",
      location: "Noida",
      initials: "PV",
      text:
        "I was looking for proper legal guidance during a difficult situation. The team listened carefully, explained the available options and provided practical advice. Their professional approach gave me confidence.",
    },
    {
      name: "Amit Kapoor",
      role: "Corporate Client",
      location: "Gurugram",
      initials: "AK",
      text:
        "We received thoughtful legal guidance for our business-related matter. The communication was clear, the documentation was handled carefully and the overall experience was professional.",
    },
    {
      name: "Neha Singh",
      role: "Individual Client",
      location: "Delhi NCR",
      initials: "NS",
      text:
        "What I appreciated most was the personal attention given to my case. Everything was explained in simple language and I always felt that my concerns were being heard and addressed.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5500);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const previousTestimonial = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const testimonial = testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#17130f] py-20 sm:py-24 lg:py-28">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#a67c45]/10 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#a67c45]/10 blur-[120px]" />

      {/* Decorative Quote */}
      <Quote
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-[8%]
          hidden
          h-40
          w-40
          text-[#a67c45]/5
          lg:block
        "
        strokeWidth={1}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">

            <span className="h-px w-12 bg-[#a67c45]" />

            <span className="text-xs font-semibold uppercase tracking-[3px] text-[#c49a62] sm:text-sm">
              Client Testimonials
            </span>

            <span className="h-px w-12 bg-[#a67c45]" />

          </div>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Trusted by Our
            <span className="block text-[#c49a62]">
              Clients
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Hear about the experiences of clients who have worked with our
            legal team and received professional guidance for their matters.
          </p>
        </motion.div>


        {/* ================= MAIN TESTIMONIAL ================= */}

        <div className="grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.5fr]">

          {/* ================= TRUST CARD ================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-[#a67c45]/20
              bg-gradient-to-br
              from-[#241e18]
              to-[#17130f]
              p-7
              sm:p-9
            "
          >

            {/* Gold line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#c49a62] via-[#a67c45] to-transparent" />

            <div className="flex h-full flex-col justify-between">

              <div>

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#a67c45]/15 text-[#c49a62]">
                  <Scale size={28} strokeWidth={1.5} />
                </div>

                <h3 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Legal guidance
                  <span className="block text-[#c49a62]">
                    you can trust.
                  </span>
                </h3>

                <p className="mt-5 text-sm leading-7 text-gray-400">
                  Every legal matter deserves careful attention, clear
                  communication and a professional approach. Our team focuses
                  on understanding each client's concerns and providing
                  practical legal guidance.
                </p>

              </div>


              {/* Trust Points */}

              <div className="mt-9 space-y-4">

                {[
                  "Professional Legal Guidance",
                  "Client-Centred Approach",
                  "Confidential & Ethical Service",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#a67c45]/15">
                      <ShieldCheck
                        size={16}
                        className="text-[#c49a62]"
                      />
                    </div>

                    <span className="text-sm text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>
          </motion.div>


          {/* ================= TESTIMONIAL CARD ================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="
              relative
              min-h-[430px]
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-[#f8f5f0]
              p-7
              sm:p-10
              lg:p-12
            "
          >

            {/* Large Quote */}
            <div className="
              absolute
              right-8
              top-5
              font-serif
              text-[130px]
              leading-none
              text-[#a67c45]/10
              select-none
            ">
              “
            </div>


            <AnimatePresence mode="wait">

              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45 }}
                className="relative z-10 flex h-full flex-col"
              >

                {/* Stars */}

                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      fill="currentColor"
                      className="text-[#b3874d]"
                    />
                  ))}
                </div>


                {/* Review */}

                <blockquote className="
                  mt-8
                  max-w-3xl
                  font-serif
                  text-2xl
                  font-medium
                  leading-relaxed
                  text-[#241e18]
                  sm:text-3xl
                  lg:text-[32px]
                ">
                  “{testimonial.text}”
                </blockquote>


                {/* Client */}

                <div className="mt-auto flex items-center justify-between gap-5 pt-10">

                  <div className="flex items-center gap-4">

                    {/* Initials */}
                    <div className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#17130f]
                      font-serif
                      text-lg
                      font-semibold
                      text-[#c49a62]
                    ">
                      {testimonial.initials}
                    </div>


                    <div>

                      <h4 className="font-semibold text-[#17130f]">
                        {testimonial.name}
                      </h4>

                      <p className="mt-1 text-xs text-gray-500">
                        {testimonial.role} • {testimonial.location}
                      </p>

                    </div>

                  </div>


                  {/* Navigation */}

                  <div className="flex gap-2">

                    <button
                      onClick={previousTestimonial}
                      aria-label="Previous testimonial"
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#d8cec3]
                        text-[#17130f]
                        transition-all
                        duration-300
                        hover:bg-[#17130f]
                        hover:text-white
                      "
                    >
                      <ArrowLeft size={18} />
                    </button>

                    <button
                      onClick={nextTestimonial}
                      aria-label="Next testimonial"
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-[#a67c45]
                        text-white
                        transition-all
                        duration-300
                        hover:bg-[#8e673b]
                      "
                    >
                      <ArrowRight size={18} />
                    </button>

                  </div>

                </div>

              </motion.div>

            </AnimatePresence>

          </motion.div>

        </div>


        {/* ================= DOTS ================= */}

        <div className="mt-8 flex items-center justify-center gap-2">

          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`
                h-2
                rounded-full
                transition-all
                duration-300
                ${
                  activeIndex === index
                    ? "w-8 bg-[#c49a62]"
                    : "w-2 bg-white/25 hover:bg-white/50"
                }
              `}
            />
          ))}

        </div>


        {/* Bottom Text */}

        <p className="mt-7 text-center text-xs tracking-wide text-gray-600">
          Client experiences are shared for informational purposes.
        </p>

      </div>
    </section>
  );
}