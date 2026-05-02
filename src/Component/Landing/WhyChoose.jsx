import {
  FaBolt,
  FaLayerGroup,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function WhyChoose() {

  const points = [
    {
      icon: <FaBolt />,
      title: "Performance-Focused Development",
      desc: "Fast, optimized applications engineered for smooth experiences and high performance across all devices.",
    },

    {
      icon: <FaLayerGroup />,
      title: "Scalable Software Systems",
      desc: "Built with scalable architecture that grows seamlessly from startup MVPs to enterprise-level platforms.",
    },

    {
      icon: <FaShieldAlt />,
      title: "Secure & Reliable Solutions",
      desc: "Every product is developed with strong security standards and reliable long-term maintainability.",
    },

    {
      icon: <FaUsers />,
      title: "Client-Driven Collaboration",
      desc: "We work closely with clients to transform ideas into impactful and goal-oriented digital products.",
    },
  ];

  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="
        overflow-hidden
        bg-white
        dark:bg-black
        py-24
        lg:py-32
        transition-colors
      "
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="text-center max-w-3xl mx-auto"
        >

          {/* SMALL LABEL */}
          <div className="
            inline-flex
            items-center
            gap-2
            mb-5
          ">

            <span className="
              w-2
              h-2
              rounded-full
              bg-green-400
              animate-pulse
            " />

            <span className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-gray-500
              dark:text-gray-400
              font-medium
            ">
              Why Choose KnytXStudio
            </span>

          </div>

          {/* TITLE */}
          <h2
            id="why-us-heading"
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-black
              leading-tight
              text-black
              dark:text-white
            "
          >

            Built for Modern
            <span className="text-green-400">
              {" "}Digital Experiences
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="
            mt-6
            text-base
            sm:text-lg
            leading-relaxed
            text-gray-600
            dark:text-gray-400
          ">

            We combine modern development, scalable systems,
            and thoughtful design to create high-quality digital
            products built for long-term growth.

          </p>

        </motion.div>

        {/* GRID */}
        <div className="
          mt-20
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          lg:gap-8
        ">

          {points.map((item, i) => (

            <motion.article
              key={i}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                rounded-3xl
                border
                border-gray-200
                dark:border-white/10
                p-7
                sm:p-8
                transition-all
                duration-300
                hover:border-green-400/30
                hover:shadow-xl
              "
            >

              {/* TOP RIGHT NUMBER */}
              <div className="
                absolute
                top-6
                right-6
                text-sm
                font-medium
                text-gray-300
                dark:text-white/10
              ">

                0{i + 1}

              </div>

              {/* CONTENT */}
              <div className="
                flex
                flex-col
                sm:flex-row
                gap-6
              ">

                {/* ICON */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="
                    shrink-0
                    w-16
                    h-16
                    rounded-2xl
                    border
                    border-gray-200
                    dark:border-white/10
                    flex
                    items-center
                    justify-center
                    text-2xl
                    text-green-400
                    transition-all
                    duration-300
                    group-hover:border-green-400/30
                  "
                >

                  {item.icon}

                </motion.div>

                {/* TEXT */}
                <div>

                  <h3 className="
                    text-2xl
                    font-bold
                    text-black
                    dark:text-white
                    leading-snug
                  ">

                    {item.title}

                  </h3>

                  <p className="
                    mt-4
                    text-sm
                    sm:text-base
                    leading-relaxed
                    text-gray-600
                    dark:text-gray-400
                  ">

                    {item.desc}

                  </p>

                  {/* BOTTOM LINE */}
                  <div className="
                    mt-6
                    w-0
                    h-[2px]
                    bg-green-400
                    transition-all
                    duration-500
                    group-hover:w-20
                  " />

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}