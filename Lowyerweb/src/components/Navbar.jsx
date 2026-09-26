import { useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Our Expertise", link: "/our-expertises" },
    // { name: "Our Services", link: "/our-services" },
    { name: "Blog", link: "/blog" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          top-0
          left-0
          z-50
          w-full

          bg-[#faf8f4]/95
          backdrop-blur-xl

          border-b
          border-[#d8c5a9]/40

          shadow-[0_4px_25px_rgba(0,0,0,0.06)]
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[78px]
            max-w-7xl
            items-center
            justify-between
            px-5
            sm:h-[82px]
            sm:px-8
            lg:px-10
          "
        >

          {/* ================= LOGO ================= */}

          <a
            href="/"
            className="flex shrink-0 items-center"
          >
            <img
              src={Logo}
              alt="Sandhya Gupta and Associates"
              className="
                h-14
                w-auto
                object-contain

                sm:h-16

                transition-transform
                duration-300

                hover:scale-105
              "
            />
          </a>


          {/* ================= DESKTOP MENU ================= */}

          <nav
            className="
              hidden
              items-center
              gap-8
              md:flex
              lg:gap-10
            "
          >
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="
                  group
                  relative
                  text-[15px]
                  font-medium
                  text-[#302a24]

                  transition-colors
                  duration-300

                  hover:text-[#a67c45]

                  after:absolute
                  after:-bottom-2
                  after:left-0
                  after:h-[2px]
                  after:w-0
                  after:bg-[#a67c45]

                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {item.name}
              </a>
            ))}
          </nav>


          {/* ================= APPOINTMENT BUTTON ================= */}

          <motion.a
            whileHover={{
              scale: 1.04,
              y: -1,
            }}
            whileTap={{
              scale: 0.96,
            }}
            href="/contact-us"
            className="
              hidden
              items-center
              gap-2
              rounded-full

              bg-[#a67c45]

              px-6
              py-3

              text-sm
              font-semibold
              text-white

              shadow-lg
              shadow-[#a67c45]/20

              transition-all
              duration-300

              hover:bg-[#8f6839]
              hover:shadow-xl
              hover:shadow-[#a67c45]/25

              md:flex
            "
          >
            <CalendarCheck size={18} />

            Get Appointment
          </motion.a>


          {/* ================= MOBILE MENU BUTTON ================= */}

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="
              rounded-xl
              p-2

              text-[#a67c45]

              transition-all
              duration-300

              hover:bg-[#a67c45]/10

              md:hidden
            "
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </motion.button>

        </div>
      </motion.header>


      {/* ================= MOBILE DRAWER ================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              left-0
              right-0
              top-[78px]
              z-40

              border-b
              border-[#d8c5a9]/40

              bg-[#faf8f4]/98
              shadow-xl

              backdrop-blur-xl

              md:hidden
            "
          >

            <nav
              className="
                flex
                flex-col
                gap-1
                p-5
              "
            >

              {/* Mobile Links */}

              {navLinks.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  className="
                    rounded-xl
                    px-4
                    py-3.5

                    text-[15px]
                    font-medium
                    text-[#302a24]

                    transition-all
                    duration-300

                    hover:bg-[#a67c45]/10
                    hover:text-[#a67c45]
                  "
                >
                  {item.name}
                </motion.a>
              ))}


              {/* Mobile Appointment Button */}

              <motion.a
                href="/contact-us"
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.97 }}
                className="
                  mt-4
                  flex
                  items-center
                  justify-center
                  gap-2

                  rounded-xl

                  bg-[#a67c45]

                  px-5
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
                <CalendarCheck size={18} />

                Get Appointment
              </motion.a>

            </nav>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;