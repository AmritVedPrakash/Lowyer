import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Scale,
} from "lucide-react";

import Logo from "../assets/logo.png";

export default function Footer() {
  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Our Expertise", link: "/our-expertises" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  const practiceAreas = [
    "Criminal Law",
    "Civil Law",
    "Family Law",
    "Corporate Law",
    "Property Disputes",
    "Cyber Crime",
  ];

  return (
    <footer className="bg-[#17130f] text-white">

      {/* ================= MAIN FOOTER ================= */}

      <div className="mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-8 lg:px-10">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1.2fr]">

          {/* ================= BRAND ================= */}

          <div>

            <a
              href="/"
              className="inline-block"
            >
              <img
                src={Logo}
                alt="Sandhya Gupta and Associates"
                className="
                  h-16
                  w-auto
                  object-contain
                "
              />
            </a>

            <div className="mt-5 flex items-center gap-2">

              <Scale
                size={18}
                className="text-[#c49a62]"
              />

              <span className="text-xs uppercase tracking-[2px] text-[#c49a62]">
                Advocates & Legal Consultants
              </span>

            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Providing professional legal guidance and representation
              with a focus on integrity, confidentiality and dedicated
              client service.
            </p>


            {/* ================= SOCIAL ICONS ================= */}

            <div className="mt-7 flex items-center gap-3">

              {/* Facebook */}

              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-gray-400
                  transition-all
                  duration-300
                  hover:border-[#a67c45]
                  hover:bg-[#a67c45]
                  hover:text-white
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] fill-current"
                >
                  <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.4v3h2.7v8h3.4Z" />
                </svg>
              </a>


              {/* Instagram */}

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-gray-400
                  transition-all
                  duration-300
                  hover:border-[#a67c45]
                  hover:bg-[#a67c45]
                  hover:text-white
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] fill-none stroke-current"
                  strokeWidth="1.8"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    className="fill-current stroke-none"
                  />
                </svg>
              </a>


              {/* LinkedIn */}

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-gray-400
                  transition-all
                  duration-300
                  hover:border-[#a67c45]
                  hover:bg-[#a67c45]
                  hover:text-white
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] fill-current"
                >
                  <path d="M6.2 8.2A1.8 1.8 0 1 0 6.2 4.6a1.8 1.8 0 0 0 0 3.6ZM4.6 9.7h3.2v9.7H4.6V9.7Zm5.2 0H13v1.3h.1c.4-.8 1.5-1.7 3.2-1.7 3.4 0 4 2.2 4 5.1v5h-3.2v-4.4c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5v4.5H9.8V9.7Z" />
                </svg>
              </a>

            </div>

          </div>


          {/* ================= QUICK LINKS ================= */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[2px] text-[#c49a62]">
              Quick Links
            </h3>

            <div className="mt-6 space-y-3">

              {quickLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-gray-400
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  <ArrowUpRight
                    size={14}
                    className="
                      text-[#a67c45]
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:opacity-100
                    "
                  />

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {item.name}
                  </span>
                </a>
              ))}

            </div>

          </div>


          {/* ================= PRACTICE AREAS ================= */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[2px] text-[#c49a62]">
              Practice Areas
            </h3>

            <div className="mt-6 space-y-3">

              {practiceAreas.map((area) => (
                <a
                  key={area}
                  href="/our-expertises"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-gray-400
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-[#a67c45]
                      transition-all
                      duration-300
                      group-hover:w-3
                    "
                  />

                  {area}
                </a>
              ))}

            </div>

          </div>


          {/* ================= CONTACT ================= */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[2px] text-[#c49a62]">
              Contact Us
            </h3>

            <div className="mt-6 space-y-5">

              {/* Address */}

              <div className="flex items-start gap-3">

                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-[#c49a62]"
                />

                <p className="text-sm leading-6 text-gray-400">
                  Delhi, National Capital Region,
                  <br />
                  India
                </p>

              </div>


              {/* Phone */}

              <a
                href="tel:+91XXXXXXXXXX"
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-gray-400
                  transition-colors
                  hover:text-white
                "
              >
                <Phone
                  size={18}
                  className="shrink-0 text-[#c49a62]"
                />

                +91 XXXXX XXXXX
              </a>


              {/* Email */}

              <a
                href="mailto:info@examplelawfirm.com"
                className="
                  flex
                  items-center
                  gap-3
                  break-all
                  text-sm
                  text-gray-400
                  transition-colors
                  hover:text-white
                "
              >
                <Mail
                  size={18}
                  className="shrink-0 text-[#c49a62]"
                />

                info@examplelawfirm.com
              </a>


              {/* Appointment */}

              <a
                href="/contact-us"
                className="
                  group
                  mt-2
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#a67c45]
                  px-5
                  py-2.5
                  text-xs
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#8f6839]
                  hover:shadow-lg
                "
              >
                Get Appointment

                <ArrowUpRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>

            </div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM BAR ================= */}

      <div className="border-t border-white/10">

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-4
            px-5
            py-5
            text-center
            sm:px-8
            md:flex-row
            md:items-center
            md:justify-between
            md:text-left
            lg:px-10
          "
        >

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Sandhya Gupta & Associates.
            All Rights Reserved.
          </p>


          <div className="flex items-center justify-center gap-5">

            <a
              href="#"
              className="
                text-xs
                text-gray-500
                transition-colors
                hover:text-[#c49a62]
              "
            >
              Privacy Policy
            </a>

            <span className="h-3 w-px bg-white/10" />

            <a
              href="#"
              className="
                text-xs
                text-gray-500
                transition-colors
                hover:text-[#c49a62]
              "
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}