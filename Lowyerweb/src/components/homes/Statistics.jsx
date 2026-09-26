import React, { useEffect, useRef, useState } from "react";
import { Scale, Users, Award, Trophy } from "lucide-react";


// ================= COUNTER =================
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    const duration = 1800;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      // Smooth ease-out
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [started, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}


// ================= STATISTICS =================

export default function Statistics() {
  const stats = [
    {
      icon: Scale,
      number: 2009,
      suffix: "",
      title: "Leading since",
    },
    {
      icon: Users,
      number: 10,
      suffix: "+",
      title: "Experienced Attorneys",
    },
    {
      icon: Award,
      number: 3000,
      suffix: "+",
      title: "Happy Clients",
    },
    {
      icon: Trophy,
      number: 89,
      suffix: "%",
      title: "Success Ratio",
    },
  ];

  return (
    <section className="w-full bg-[#f5f1f1] border-y border-[#e7dfd8]">

      <div
        className="
          mx-auto
          flex
          min-h-[105px]
          max-w-7xl
          items-center
          justify-between
          px-5
          py-5
          sm:px-8
          lg:px-10
        "
      >

        {/* ================= DESKTOP ================= */}

        <div className="hidden w-full items-center justify-between md:flex">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <React.Fragment key={stat.title}>

                <div className="flex items-center gap-3 lg:gap-4">

                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                    <Icon
                      size={39}
                      strokeWidth={1.4}
                      className="text-[#a47b45]"
                    />
                  </div>

                  {/* Text */}
                  <div>

                    <div className="font-serif text-[27px] font-semibold leading-none text-[#17130f]">
                      <Counter
                        target={stat.number}
                        suffix={stat.suffix}
                      />
                    </div>

                    <p className="mt-1.5 whitespace-nowrap text-sm text-[#17130f]">
                      {stat.title}
                    </p>

                  </div>

                </div>

                {/* Divider */}
                {index !== stats.length - 1 && (
                  <div className="h-12 w-px bg-[#d8cec3]" />
                )}

              </React.Fragment>
            );
          })}

        </div>


        {/* ================= MOBILE ================= */}

        <div className="grid w-full grid-cols-2 gap-y-5 md:hidden">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="flex items-center gap-2.5"
              >

                <Icon
                  size={32}
                  strokeWidth={1.4}
                  className="shrink-0 text-[#a47b45]"
                />

                <div>

                  <div className="font-serif text-xl font-semibold leading-none text-[#17130f]">
                    <Counter
                      target={stat.number}
                      suffix={stat.suffix}
                    />
                  </div>

                  <p className="mt-1 text-[11px] leading-4 text-[#17130f]">
                    {stat.title}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}