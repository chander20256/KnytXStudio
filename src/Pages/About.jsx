import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaRocket, FaLightbulb, FaUsers, FaHeart, 
  FaChartLine, FaTrophy, FaHandshake, FaCode,
  FaLinkedinIn, FaTwitter, FaGithub
} from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function About() {
  const values = [
    { title: "Innovation First", desc: "We push the boundaries of technology to deliver cutting-edge solutions.", icon: <FaLightbulb /> },
    { title: "User-Centric Design", desc: "Every product we build focuses on delivering a flawless user experience.", icon: <FaHeart /> },
    { title: "Rapid Delivery", desc: "We prioritize efficiency without compromising on high-quality standards.", icon: <FaRocket /> },
    { title: "Collaborative Team", desc: "We work closely with our clients to ensure their vision becomes reality.", icon: <FaUsers /> }
  ];

  const stats = [
    { label: "Successful Projects", value: "150+", icon: <FaCode /> },
    { label: "Happy Clients", value: "85+", icon: <FaHandshake /> },
    { label: "Years of Experience", value: "5+", icon: <FaChartLine /> },
    { label: "Industry Awards", value: "12", icon: <FaTrophy /> },
  ];

  const team = [
    { name: "John Doe", role: "Founder & CEO", image: "https://i.pravatar.cc/300?img=11" },
    { name: "Jane Smith", role: "Design Director", image: "https://i.pravatar.cc/300?img=5" },
    { name: "Mike Johnson", role: "Lead Engineer", image: "https://i.pravatar.cc/300?img=12" },
    { name: "Sarah Williams", role: "Product Manager", image: "https://i.pravatar.cc/300?img=9" },
  ];

  return (
    <div className="bg-white dark:bg-black transition-colors overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black dark:text-white tracking-tight">
              About Knyt<span className="text-green-400">X</span>Studio
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
              We are a collective of digital craftsmen dedicated to building scalable, beautiful, and high-performance digital products for modern brands.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-14 w-full max-w-4xl relative"
          >
            {/* Glassmorphism Graphic Background */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-green-400/20 to-transparent dark:from-green-500/10 blur-3xl -z-10" />
            
            {/* Glassmorphism Container */}
            <div className="bg-white/60 dark:bg-white/5 backdrop-blur-2xl border border-gray-200 dark:border-white/10 shadow-2xl rounded-3xl p-8 md:p-12 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                At KnytXStudio, our mission is to empower businesses by translating complex challenges into elegant, intuitive software. We believe that exceptional design paired with robust engineering is the key to creating sustainable digital ecosystems. Whether it's a sleek mobile application or a complex web platform, we bring ideas to life with precision and passion.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section (NEW) */}
      <section className="py-20 border-y border-gray-200 dark:border-white/10 relative">
        <div className="absolute inset-0 bg-green-500/5 dark:bg-green-400/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center"
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg text-green-500 mb-6 text-2xl">
                  {stat.icon}
                </div>
                <h4 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-2 tracking-tight">
                  {stat.value}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-gray-50 dark:bg-neutral-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">Our Core Values</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">The principles that guide our work and shape our culture.</p>
          </motion.div>

          <motion.div 
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {values.map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="group bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-400/10 hover:border-green-400/40 transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-400/10 text-2xl text-green-400 mb-6 group-hover:scale-110 group-hover:bg-green-400/20 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Journey / Timeline Section (NEW) */}
      <section className="py-28 px-4 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-400/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">Our Journey</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">How we evolved from a small team of passionate developers into a digital studio.</p>
          </motion.div>

          <div className="space-y-12">
            {[
              { year: "2019", title: "The Beginning", text: "Founded as a passionate group of freelancers aiming to disrupt local tech." },
              { year: "2021", title: "Studio Expansion", text: "Expanded our team globally and shifted focus towards high-end scalable web applications." },
              { year: "2024", title: "Future Forward", text: "Recognized as a leading studio, diving deep into AI-driven enterprise solutions." }
            ].map((milestone, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col sm:flex-row shadow-sm border border-gray-100 dark:border-white/5 bg-white dark:bg-white/5 p-6 rounded-2xl gap-6 items-center sm:items-start text-center sm:text-left"
              >
                <div className="flex-shrink-0 text-green-500 font-extrabold text-3xl">
                  {milestone.year}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{milestone.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (NEW) */}
      <section className="py-24 bg-gray-50 dark:bg-neutral-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">Meet The Team</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">The brilliant minds behind our digital creations.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {team.map((member, i) => (
              <motion.div key={i} variants={fadeInUp} className="group relative overflow-hidden rounded-3xl bg-white dark:bg-black border border-gray-200 dark:border-white/10 p-6 text-center shadow-lg transition-transform hover:-translate-y-2">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-50 dark:border-white/5 shadow-inner">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white">{member.name}</h3>
                <p className="text-green-500 font-medium text-sm mt-1 mb-4">{member.role}</p>
                
                {/* Social Links */}
                <div className="flex justify-center gap-4 text-gray-400">
                  <a href="#" className="hover:text-green-400 transition-colors"><FaLinkedinIn /></a>
                  <a href="#" className="hover:text-green-400 transition-colors"><FaTwitter /></a>
                  <a href="#" className="hover:text-green-400 transition-colors"><FaGithub /></a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-4 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent,rgba(34,197,94,0.05))] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black dark:text-white"
          >
            Ready to bring your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">vision to reality?</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Let's collaborate to create something spectacular. Reach out to our team today and let's get the conversation started.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="pt-6 flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link to="/contact">
              <button className="premium-green-btn !px-8 !py-4 text-lg">
                <span>Start a Project</span>
                <span className="liquid" />
              </button>
            </Link>
            <Link to="/portfolio" className="px-8 py-3.5 rounded-xl font-semibold border-2 border-black text-black dark:border-white dark:text-white transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-lg">
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
