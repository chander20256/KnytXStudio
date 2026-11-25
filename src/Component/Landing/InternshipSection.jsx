import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiAward,
  FiCode,
  FiCompass,
  FiFileText,
  FiCheckCircle,
  FiArrowRight,
  FiUsers,
  FiSmartphone,
} from "react-icons/fi";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function InternshipSection() {
  const domains = [
    {
      title: "Full-Stack Web Development",
      stack: "React, Node.js, Express, MongoDB/PostgreSQL",
      description: "Build production-ready web applications, REST APIs, and modern responsive interfaces.",
      icon: <FiCode className="text-green-400 text-xl" />,
    },
    {
      title: "Mobile App Development",
      stack: "React Native, Flutter, Mobile UX",
      description: "Develop cross-platform iOS and Android apps with smooth animations and state management.",
      icon: <FiSmartphone className="text-green-400 text-xl" />,
    },
    {
      title: "UI/UX & Product Design",
      stack: "Figma, Wireframing, Design Systems",
      description: "Design intuitive user flows, clickable prototypes, and modern digital brand guidelines.",
      icon: <FiCompass className="text-green-400 text-xl" />,
    },
    {
      title: "AI & Machine Learning",
      stack: "Python, FastApi, LLM Integrations",
      description: "Work on intelligent data processing, generative AI workflows, and machine learning pipelines.",
      icon: <FiAward className="text-green-400 text-xl" />,
    },
  ];

  const benefits = [
    "Official Certificate of Completion & Letter of Recommendation (LoR)",
    "Hands-on experience on live client and production projects",
    "1-on-1 industry mentorship from senior engineers",
    "Flexible remote working hours suited for college schedules",
    "Performance-based stipend and full-time pre-placement offers (PPO)",
  ];

  return (
    <section
      id="internship-section"
      className="relative py-20 sm:py-28 bg-gray-50/50 dark:bg-zinc-950/60 border-t border-b border-gray-200 dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span>Student Internship Program 2026</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black dark:text-white tracking-tight">
            Launch Your Tech Career with <br className="hidden sm:inline" />
            <span className="text-green-500 dark:text-green-400">KnytXStudio Internships</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Gain industry-grade experience, solve real-world engineering challenges, and work directly with senior architects. Open for college students and fresh graduates.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-gray-200 dark:border-white/10 hover:border-green-500/50 dark:hover:border-green-400/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-green-500/10 dark:bg-green-400/10 border border-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {domain.icon}
                </div>

                <h3 className="text-lg font-bold text-black dark:text-white group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors">
                  {domain.title}
                </h3>

                <p className="mt-2 text-xs font-mono text-green-600 dark:text-green-400 bg-green-500/5 dark:bg-green-400/5 px-2 py-1 rounded inline-block">
                  {domain.stack}
                </p>

                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {domain.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/5 flex items-center text-xs font-semibold text-green-600 dark:text-green-400">
                <span>View Details &amp; Apply</span>
                <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits & Application Banner */}
        <div className="mt-12 p-8 sm:p-12 rounded-3xl bg-white dark:bg-black border border-gray-200 dark:border-white/10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <h3 className="text-2xl font-bold text-black dark:text-white">
              Why Intern at KnytXStudio?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <FiCheckCircle className="text-green-500 dark:text-green-400 text-base flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto flex-shrink-0">
            <Link
              to="/internships"
              className="px-8 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-black font-bold text-sm text-center shadow-md transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <span>Submit Internship Application</span>
              <FiArrowRight size={16} />
            </Link>

            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              Batches rolling monthly • Remote / Hybrid
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
