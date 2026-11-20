import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiSend, FiClock, FiMapPin, FiCheckCircle, FiHeart, FiCode, FiZap } from 'react-icons/fi';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Careers() {
  const perks = [
    {
      title: "Remote-First Culture",
      desc: "Work from anywhere in the world with flexible hours built around autonomy and trust.",
      icon: <FiMapPin className="text-green-400 text-xl" />
    },
    {
      title: "Cutting-Edge Stack",
      desc: "Work on modern platforms utilizing React, Next.js, Node, Three.js, and Enterprise AI systems.",
      icon: <FiCode className="text-green-400 text-xl" />
    },
    {
      title: "Impact & Ownership",
      desc: "Lead projects from concept to deployment. Your ideas directly shape high-impact products.",
      icon: <FiZap className="text-green-400 text-xl" />
    },
    {
      title: "Work-Life Harmony",
      desc: "We focus on outcomes and sustainable craftsmanship, not burnouts or arbitrary hours.",
      icon: <FiHeart className="text-green-400 text-xl" />
    }
  ];

  const positions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote / India",
      type: "Full-Time",
      description: "Build robust, scalable web platforms and APIs using React, Node.js, and modern cloud technologies."
    },
    {
      title: "UI/UX & Product Designer",
      department: "Design",
      location: "Remote / India",
      type: "Full-Time / Contract",
      description: "Craft modern, elegant interactive user experiences, wireframes, and design systems for global clients."
    },
    {
      title: "Frontend Engineer (React / Next.js)",
      department: "Engineering",
      location: "Remote / India",
      type: "Full-Time",
      description: "Deliver responsive, high-performance web applications with clean animations and modern CSS frameworks."
    }
  ];

  return (
    <div className="bg-white dark:bg-black transition-colors min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-500 dark:text-green-400 border border-green-500/20 mb-6">
              <span>We're Hiring</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black dark:text-white tracking-tight">
              Build the Future with Knyt<span className="text-green-400">X</span>Studio
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We are a collective of passionate builders, engineers, and designers crafting world-class digital experiences. Join our team and do work you're truly proud of.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture & Perks */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-200 dark:border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
            Why Work With Us
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            A collaborative environment where great talent solves real problems.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {perks.map((perk, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-zinc-950/50 hover:border-green-500/50 dark:hover:border-green-400/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-white/10 flex items-center justify-center mb-4">
                {perk.icon}
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                {perk.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {perk.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Open Positions */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
            Open Opportunities
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Explore current positions and apply directly.
          </p>
        </div>

        <div className="space-y-4">
          {positions.map((pos, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-950 hover:border-green-500/50 dark:hover:border-green-400/50 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    {pos.title}
                  </h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-500 dark:text-green-400 font-medium">
                    {pos.type}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {pos.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 pt-1">
                  <span>{pos.department}</span>
                  <span>•</span>
                  <span>{pos.location}</span>
                </div>
              </div>

              <a
                href={`mailto:contact@knytxstudio.com?subject=Application for ${encodeURIComponent(pos.title)}`}
                className="w-full md:w-auto px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold text-xs sm:text-sm hover:bg-green-500 dark:hover:bg-green-400 hover:text-white dark:hover:text-black transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Apply Now</span>
                <FiSend size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* General Application CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-green-500/10 via-emerald-500/5 to-transparent border border-green-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-black dark:text-white">
              Don't see your specific role?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Send your portfolio or resume to <span className="text-green-400 font-medium">contact@knytxstudio.com</span>. We are always interested in connecting with outstanding talent.
            </p>
          </div>
          <a
            href="mailto:contact@knytxstudio.com?subject=General Career Inquiry"
            className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-black font-semibold text-sm transition-transform hover:scale-105 whitespace-nowrap"
          >
            Send General Inquiry
          </a>
        </div>
      </section>
    </div>
  );
}

