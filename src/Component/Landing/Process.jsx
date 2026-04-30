import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaVial,
  FaBullhorn,
  FaRocket,
} from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
  icon: (
    <FaSearch className="text-green-400 dark:text-green-400" />
  ),
  title: "Discovery",
  desc: "We analyze your goals, target audience, and requirements to define the right product strategy.",
},
    {
      icon: <FaPencilRuler className="text-green-400 dark:text-green-400" />,
      title: "Design",
      desc: "Wireframes and visual designs crafted for usability, clarity, and strong user experience.",
    },
    {
      icon: <FaCode className="text-green-400 dark:text-green-400"/>,
      title: "Development",
      desc: "Robust implementation using modern technologies for performance, security, and scalability.",
    },
    {
      icon: <FaVial className="text-green-400 dark:text-green-400" />,
      title: "Testing & Quality Assurance",
      desc: "Comprehensive testing ensures reliability, performance, and a bug-free user experience.",
    },
    {
      icon: <FaBullhorn className="text-green-400 dark:text-green-400" />,
      title: "Digital Marketing",
      desc: "SEO, performance optimization, and marketing strategies to help your product reach the right audience.",
    },
    {
      icon: <FaRocket className="text-green-400 dark:text-green-400"  />,
      title: "Launch & Support",
      desc: "Deployment, monitoring, and ongoing support to ensure long-term success.",
    },
  ];

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-white dark:bg-black py-20 lg:py-28 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white"
          >
            Our Process
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            A structured approach to deliver high-quality digital products
            from concept to launch and beyond.
          </p>
        </motion.header>

        {/* TIMELINE */}
        <ol className="mt-16 relative">

          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10" />

          <div className="space-y-12">

            {steps.map((step, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* CONTENT */}
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="md:w-1/2 bg-gray-50 dark:bg-neutral-900 p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    {step.desc}
                  </p>
                </motion.article>

                {/* ICON */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 dark:bg-white/10 text-black dark:text-white text-xl border border-gray-200 dark:border-white/10"
                  aria-hidden="true"
                >
                  {step.icon}
                </motion.div>

                <div className="hidden md:block md:w-1/2" />
              </motion.li>
            ))}

          </div>

        </ol>

      </div>
    </section>
  );
}