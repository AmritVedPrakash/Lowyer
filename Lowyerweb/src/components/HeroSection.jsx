import React from "react";
import { ArrowRight } from "lucide-react";

// Background image
import heroImage from "../assets/home/hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[620px] md:min-h-[680px] lg:min-h-[720px] overflow-hidden">

      {/* ================= BACKGROUND IMAGE ================= */}

      <img
        src={heroImage}
        alt="Advocate Vijay Singh"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* ================= LIGHT OVERLAY ================= */}

      {/* Keep image clear while making text readable */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Subtle side gradient only */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/50
          via-black/15
          to-black/30
        "
      />


      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[620px]
          items-center
          justify-center
          px-5
          text-center
          md:min-h-[680px]
          lg:min-h-[720px]
          sm:px-8
        "
      >

        <div className="mx-auto max-w-6xl text-white">

          {/* Small Heading */}

          <p
            className="
              mb-5
              text-sm
              font-medium
              tracking-[2px]
              text-white
              sm:text-base
              md:text-lg
            "
          >
            Welcome to{" "}
            <span className="font-semibold text-[#d5ad74]">
              Advocate Vijay Singh
            </span>
          </p>


          {/* Main Heading */}

          <h1
            className="
              mb-6
              font-serif
              text-4xl
              font-semibold
              leading-[1.08]
              tracking-tight
              text-white

              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-[76px]
            "
          >
            Advocates, Solicitors &amp;

            <br className="hidden sm:block" />

            Legal Consultants
          </h1>


          {/* Description */}

          <p
            className="
              mx-auto
              mb-9
              max-w-4xl
              text-base
              leading-relaxed
              text-gray-100

              sm:text-lg
              md:text-xl
              lg:text-2xl
            "
          >
            Providing professional legal representation,
            trusted advice and dedicated legal solutions
            across Delhi &amp; NCR.
          </p>


          {/* Button */}

          <a
            href="/our-expertises"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-3

              rounded-full

              bg-[#a67c45]

              px-7
              py-3.5

              text-sm
              font-semibold
              text-white

              shadow-xl
              shadow-black/20

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#bd9358]
              hover:shadow-2xl

              sm:px-8
              sm:py-4
              sm:text-base
            "
          >
            Our Expertise

            <ArrowRight
              size={20}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>

        </div>

      </div>


      {/* ================= BOTTOM GRADIENT ================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-black/35
          to-transparent
        "
      />

    </section>
  );
}