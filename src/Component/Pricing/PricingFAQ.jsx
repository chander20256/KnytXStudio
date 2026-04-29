import { motion } from "framer-motion";

const faqs = [
  {
    question: "Do you provide custom pricing?",
    answer:
      "Yes. We offer flexible pricing based on project scope, features, and business requirements.",
  },

  {
    question: "Do you offer support after delivery?",
    answer:
      "Yes. We provide maintenance, updates, and technical support after project completion.",
  },

  {
    question: "Can I upgrade later?",
    answer:
      "Absolutely. Your project can be upgraded anytime with additional features and integrations.",
  },

  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We work with startups, businesses, and brands from different countries.",
  },

  {
    question: "How long does a project take?",
    answer:
      "Project timelines depend on complexity, features, and requirements.",
  },

  {
    question: "Which technologies do you use?",
    answer:
      "We use modern technologies including React, Node.js, MongoDB, WordPress, and Blockchain technologies.",
  },
];

export default function PricingFAQ() {
  return (
    <section className="bg-white dark:bg-black py-16 sm:py-20 px-4 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto lg:mx-0 mb-14 text-center lg:text-left"
        >

          <span className="inline-flex px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-medium mb-5">
            FAQ
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black dark:text-white leading-tight">

            Questions About
            <span className="block text-green-400">
              Pricing & Services
            </span>

          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Everything you need to know before starting your project.
          </p>

        </motion.div>

        {/* FAQ GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group rounded-[28px] border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6 sm:p-8 transition-all duration-300 hover:border-green-500/40"
            >

              {/* TOP */}
              <div className="flex items-center justify-between mb-6">

                <span className="text-sm font-semibold text-green-500">
                  0{index + 1}
                </span>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  transition={{ duration: 0.4 }}
                  className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center"
                >

                  <div className="w-3 h-3 rounded-full bg-green-500" />

                </motion.div>

              </div>

              {/* QUESTION */}
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white leading-snug">

                {faq.question}

              </h3>

              {/* ANSWER */}
              <p className="mt-5 text-gray-600 dark:text-gray-400 leading-relaxed">

                {faq.answer}

              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}