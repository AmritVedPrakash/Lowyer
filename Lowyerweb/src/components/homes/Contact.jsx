import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock3, ArrowRight, Scale } from "lucide-react";

// Change only the filename if your image has a different name
import contactImage from "../../assets/home/contact.jpg";

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f4] py-20 sm:py-24 lg:py-28">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#a67c45]/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#a67c45]/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#a67c45]" />

            <span className="text-xs font-semibold uppercase tracking-[3px] text-[#a67c45] sm:text-sm">
              Get In Touch
            </span>

            <span className="h-px w-12 bg-[#a67c45]" />
          </div>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#17130f] sm:text-5xl lg:text-6xl">
            Let’s Discuss Your
            <span className="block text-[#a67c45]">Legal Matter</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            Have a legal question or need professional guidance? Get in touch
            with our team to discuss your requirements and explore the
            appropriate legal assistance.
          </p>
        </motion.div>

        {/* ================= MAIN CONTACT AREA ================= */}

        <div className="grid overflow-hidden rounded-[28px] border border-[#e5dbcf] bg-white shadow-xl shadow-black/5 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ================= LEFT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[620px] overflow-hidden bg-[#17130f]"
          >
            {/* Image */}

            <img
              src={contactImage}
              alt="Legal consultation"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                opacity-70
                transition-transform
                duration-700
                hover:scale-105
              "
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#17130f] via-[#17130f]/65 to-[#17130f]/20" />

            {/* Content */}

            <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div>
                {/* Icon */}

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c49a62]/30 bg-[#a67c45]/20 backdrop-blur-sm">
                  <Scale
                    size={28}
                    strokeWidth={1.5}
                    className="text-[#d2aa72]"
                  />
                </div>

                <h3 className="mt-7 max-w-md font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Professional legal support,
                  <span className="block text-[#c49a62]">
                    when you need it.
                  </span>
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-gray-300">
                  Our team is committed to providing clear communication,
                  practical legal guidance and professional representation
                  tailored to your individual requirements.
                </p>
              </div>

              {/* Contact Details */}

              <div className="mt-10 space-y-5">
                {/* Address */}

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#a67c45]/20">
                    <MapPin size={19} className="text-[#c49a62]" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[1.5px] text-[#c49a62]">
                      Our Office
                    </p>

                    <p className="mt-1 max-w-xs text-sm leading-6 text-gray-300">
                      Delhi, National Capital Region, India
                    </p>
                  </div>
                </div>

                {/* Phone */}

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#a67c45]/20">
                    <Phone size={19} className="text-[#c49a62]" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[1.5px] text-[#c49a62]">
                      Call Us
                    </p>

                    <p className="mt-1 text-sm text-gray-300">
                      +91 XXXXX XXXXX
                    </p>
                  </div>
                </div>

                {/* Email */}

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#a67c45]/20">
                    <Mail size={19} className="text-[#c49a62]" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[1.5px] text-[#c49a62]">
                      Email Us
                    </p>

                    <p className="mt-1 text-sm text-gray-300">
                      info@examplelawfirm.com
                    </p>
                  </div>
                </div>

                {/* Timing */}

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#a67c45]/20">
                    <Clock3 size={19} className="text-[#c49a62]" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[1.5px] text-[#c49a62]">
                      Consultation Hours
                    </p>

                    <p className="mt-1 text-sm text-gray-300">
                      Monday – Saturday • 10:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT FORM ================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="p-7 sm:p-10 lg:p-12"
          >
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[2px] text-[#a67c45]">
                Consultation Request
              </p>

              <h3 className="mt-2 font-serif text-3xl font-semibold text-[#17130f] sm:text-4xl">
                Tell Us About Your Matter
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Fill in the details below and our team can get in touch
                regarding your enquiry.
              </p>
            </div>

            <form className="space-y-5">
              {/* Name + Phone */}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#17130f]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-[#ddd4c8]
                      bg-[#fcfaf7]
                      px-4
                      py-3.5
                      text-sm
                      text-[#17130f]
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray-400
                      focus:border-[#a67c45]
                      focus:ring-2
                      focus:ring-[#a67c45]/10
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#17130f]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-[#ddd4c8]
                      bg-[#fcfaf7]
                      px-4
                      py-3.5
                      text-sm
                      text-[#17130f]
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray-400
                      focus:border-[#a67c45]
                      focus:ring-2
                      focus:ring-[#a67c45]/10
                    "
                  />
                </div>
              </div>

              {/* Email */}

              <div>
                <label className="mb-2 block text-sm font-medium text-[#17130f]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#ddd4c8]
                    bg-[#fcfaf7]
                    px-4
                    py-3.5
                    text-sm
                    text-[#17130f]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-gray-400
                    focus:border-[#a67c45]
                    focus:ring-2
                    focus:ring-[#a67c45]/10
                  "
                />
              </div>

              {/* Legal Matter */}

              <div>
                <label className="mb-2 block text-sm font-medium text-[#17130f]">
                  Legal Matter
                </label>

                <select
                  className="
                    w-full
                    appearance-none
                    rounded-xl
                    border
                    border-[#ddd4c8]
                    bg-[#fcfaf7]
                    px-4
                    py-3.5
                    text-sm
                    text-gray-600
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#a67c45]
                    focus:ring-2
                    focus:ring-[#a67c45]/10
                  "
                >
                  <option value="">Select legal matter</option>

                  <option>Criminal Law</option>
                  <option>Civil Law</option>
                  <option>Family Law</option>
                  <option>Property Disputes</option>
                  <option>Corporate Law</option>
                  <option>Cyber Crime</option>
                  <option>Consumer Protection</option>
                  <option>Divorce & Matrimonial Cases</option>
                  <option>Employment / Labour Law</option>
                  <option>Banking & Finance</option>
                  <option>Intellectual Property</option>
                  <option>Constitutional Law</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}

              <div>
                <label className="mb-2 block text-sm font-medium text-[#17130f]">
                  Briefly Describe Your Matter
                </label>

                <textarea
                  rows="5"
                  placeholder="Please provide a brief description..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-[#ddd4c8]
                    bg-[#fcfaf7]
                    px-4
                    py-3.5
                    text-sm
                    text-[#17130f]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-gray-400
                    focus:border-[#a67c45]
                    focus:ring-2
                    focus:ring-[#a67c45]/10
                  "
                />
              </div>

              {/* Submit */}

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#17130f]
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:bg-[#a67c45]
                "
              >
                Request a Consultation
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>

              <p className="text-center text-[11px] leading-5 text-gray-400">
                Your information will be handled with appropriate
                confidentiality.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
