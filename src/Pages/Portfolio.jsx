import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiGithub, FiExternalLink } from 'react-icons/fi';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Design', 'Mobile Apps', 'Enterprise AI'];

  const projects = [
    {
      id: 1,
      title: "Nova E-Commerce",
      category: "Web Design",
      description: "A high-performance headless e-commerce store built for modern conversion rates.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 2,
      title: "Fintech Dashboard",
      category: "Mobile Apps",
      description: "A seamless personal finance management app with real-time analytics and predictive AI.",
      image: "https://images.unsplash.com/photo-1616077168079-7e23afc5b058?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 3,
      title: "Aura Intelligence",
      category: "Enterprise AI",
      description: "An AI-powered customer service platform that scales support operations globally.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 4,
      title: "Lumina Workspace",
      category: "Web Design",
      description: "A collaborative document workspace tailored for creative agencies and fast-moving teams.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 5,
      title: "HealthSync",
      category: "Mobile Apps",
      description: "A secure telemedicine platform connecting patients to healthcare providers instantly.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      id: 6,
      title: "Nexus Big Data",
      category: "Enterprise AI",
      description: "A powerful enterprise dashboard for visualizing complex supply chain datasets.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <main className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 px-4 overflow-hidden">
        {/* Abstract Background Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,197,94,0.15),_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(34,197,94,0.15),_transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-3xl mx-auto"
          >
            <p className="text-sm sm:text-base font-semibold tracking-[0.2em] uppercase text-green-500 mb-5">
              Our Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Works</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              A collection of our proudest digital creations. We blend aesthetic design with flawless engineering to build platforms that propel businesses forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-4 pb-20 sm:pb-24 lg:pb-32">
        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12 lg:mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                  : 'bg-gray-100 dark:bg-white/[0.05] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/[0.1]'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative flex flex-col rounded-3xl overflow-hidden bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10"
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                  />
                  <div className="absolute top-5 left-5 z-20">
                    <span className="px-4 py-1.5 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md text-xs font-bold text-black dark:text-white uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-green-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-400 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
                    <a href={project.link} className="flex items-center gap-2 text-sm font-semibold hover:text-green-500 transition-colors">
                      View Case Study <FiArrowUpRight className="text-lg" />
                    </a>
                    <div className="flex gap-3 text-gray-500 dark:text-gray-400">
                      <a href="#" className="hover:text-black dark:hover:text-white transition-colors duration-300">
                        <FiGithub className="text-xl" />
                      </a>
                      <a href="#" className="hover:text-black dark:hover:text-white transition-colors duration-300">
                        <FiExternalLink className="text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA Section (Matching About.jsx) */}
      <section className="px-4 pb-20 sm:pb-24 lg:pb-32">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.4 }}
           transition={{ duration: 0.6 }}
           className="max-w-5xl mx-auto rounded-3xl border border-gray-200 dark:border-white/10 p-8 sm:p-10 lg:p-16 text-center bg-black text-white dark:bg-white dark:text-black"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Have a project in mind?
          </h3>
          <p className="mt-6 text-base sm:text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
            Whether you are building a new product from scratch or scaling an existing platform, we have the expertise to bring your vision to life.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="relative overflow-hidden group px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-white bg-green-500 shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:shadow-[0_0_60px_rgba(34,197,94,0.6)] transition-all duration-300"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-3.5 rounded-xl font-semibold border-2 border-black/10 dark:border-white/20 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Portfolio;
