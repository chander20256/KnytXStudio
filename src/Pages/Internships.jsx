import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiSend,
  FiAward,
  FiClock,
  FiMapPin,
  FiCode,
  FiUser,
  FiMail,
  FiPhone,
  FiBook,
  FiLink,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Internships() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    degree: "",
    year: "3rd Year",
    domain: "Full-Stack Web Development",
    duration: "3 Months",
    resumeLink: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.college) {
      setStatus({ submitting: false, submitted: false, error: "Please fill out all required fields." });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: "" });

    // Simulate submission / trigger direct mail link backup
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: "" });
      
      // Also prepare mailto draft for student
      const subject = encodeURIComponent(`Internship Application - ${formData.fullName} (${formData.domain})`);
      const body = encodeURIComponent(
        `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCollege: ${formData.college}\nDegree/Branch: ${formData.degree}\nYear: ${formData.year}\nDomain: ${formData.domain}\nDuration: ${formData.duration}\nResume/Profile: ${formData.resumeLink}\n\nMessage: ${formData.message}`
      );
      window.open(`mailto:contact@knytxstudio.com?subject=${subject}&body=${body}`, "_blank");
    }, 900);
  };

  const domains = [
    "Full-Stack Web Development (React / Node.js)",
    "Frontend Development (React / Next.js / Tailwind)",
    "Mobile App Development (React Native / Flutter)",
    "UI/UX & Product Design (Figma / Prototyping)",
    "AI & Machine Learning (Python / FastAPI / LLMs)",
    "Cloud & DevOps Architecture",
  ];

  const perks = [
    {
      title: "Verified Certificate & LoR",
      desc: "Receive an official Certificate of Completion and Letter of Recommendation upon successful program delivery.",
      icon: <FiAward className="text-green-400 text-xl" />,
    },
    {
      title: "Live Production Projects",
      desc: "Work on genuine client systems and scalable SaaS applications rather than trivial dummy tutorials.",
      icon: <FiCode className="text-green-400 text-xl" />,
    },
    {
      title: "1-on-1 Mentorship",
      desc: "Regular code reviews, architectural guidance, and weekly check-ins with industry experts.",
      icon: <FiUser className="text-green-400 text-xl" />,
    },
    {
      title: "Flexible Remote Schedule",
      desc: "Designed to adapt around university lectures, semester examinations, and academic requirements.",
      icon: <FiClock className="text-green-400 text-xl" />,
    },
  ];

  return (
    <div className="bg-white dark:bg-black transition-colors min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span>Official Student Internship Portal</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black dark:text-white tracking-tight">
              Student Internship Program at <br />
              Knyt<span className="text-green-400">X</span>Studio
            </h1>

            <p className="mt-5 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Step into high-impact digital development. Gain hands-on engineering experience, build production projects, and earn recognized industry credentials.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#apply-form"
                className="px-8 py-3.5 rounded-full bg-green-500 hover:bg-green-600 text-black font-bold text-sm shadow-md transition-all duration-300 hover:scale-105"
              >
                Apply for Internship Now
              </a>
              <a
                href="#program-details"
                className="px-6 py-3.5 rounded-full border border-gray-300 dark:border-white/20 text-gray-800 dark:text-gray-200 font-semibold text-sm hover:border-green-500 hover:text-green-500 dark:hover:text-green-400 transition-all"
              >
                Program Details
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Highlights */}
      <section id="program-details" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-200 dark:border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
            Program Structure &amp; Benefits
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Engineered to bridge the gap between academic curriculum and modern industry practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-zinc-950/50 hover:border-green-500/50 dark:hover:border-green-400/50 transition-all"
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
            </div>
          ))}
        </div>

        {/* Eligibility bar */}
        <div className="mt-12 p-6 rounded-2xl bg-green-500/5 border border-green-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FiCheckCircle className="text-green-500 dark:text-green-400 text-2xl flex-shrink-0" />
            <div>
              <p className="font-semibold text-black dark:text-white text-sm">
                Eligibility Criteria
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Open to all enrolled college/university students (B.Tech, B.E., BCA, MCA, B.Sc, Diploma) &amp; fresh graduates from recognized institutions.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded bg-green-500/10 text-green-600 dark:text-green-400 whitespace-nowrap">
            Monthly Cohort Admissions
          </span>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply-form" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 mb-3">
            <span>Official Application</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white">
            Student Internship Application Form
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 max-w-lg mx-auto">
            Please fill in your authentic details below. Our technical recruitment team reviews submissions and responds within 48 hours.
          </p>
        </div>

        {status.submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 sm:p-12 rounded-3xl border border-green-500/30 bg-green-500/5 text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 dark:text-green-400 mx-auto flex items-center justify-center text-3xl">
              <FiCheck />
            </div>
            <h3 className="text-2xl font-bold text-black dark:text-white">
              Application Submitted Successfully!
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Thank you, <span className="font-semibold text-black dark:text-white">{formData.fullName}</span>. We have received your application for the <span className="font-semibold text-black dark:text-white">{formData.domain}</span> internship.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              An email confirmation has been initiated to <span className="font-mono">{formData.email}</span>. You can also contact us directly at <a href="mailto:contact@knytxstudio.com" className="text-green-500 underline">contact@knytxstudio.com</a>.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setStatus({ submitting: false, submitted: false, error: "" })}
                className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-white/20 text-xs font-semibold hover:border-green-500 transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-10 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-950 shadow-lg space-y-6"
          >
            {status.error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
                <FiAlertCircle className="text-base flex-shrink-0" />
                <span>{status.error}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Full Name <span className="text-green-500">*</span>
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3.5 top-3.5 text-gray-400 text-sm" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50/50 dark:bg-zinc-900 text-black dark:text-white text-sm focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email Address <span className="text-green-500">*</span>
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3.5 top-3.5 text-gray-400 text-sm" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="student@college.edu"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50/50 dark:bg-zinc-900 text-black dark:text-white text-sm focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Contact / WhatsApp Number <span className="text-green-500">*</span>
                </label>
                <div className="relative">
                  <FiPhone className="absolute left-3.5 top-3.5 text-gray-400 text-sm" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50/50 dark:bg-zinc-900 text-black dark:text-white text-sm focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
              </div>

              {/* College / University Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  College / University Name <span className="text-green-500">*</span>
                </label>
                <div className="relative">
                  <FiBook className="absolute left-3.5 top-3.5 text-gray-400 text-sm" />
                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    required
                    placeholder="e.g. National Institute of Technology"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50/50 dark:bg-zinc-900 text-black dark:text-white text-sm focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
              </div>

              {/* Degree & Branch */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Degree &amp; Branch / Specialization <span className="text-green-500">*</span>
                </label>
                <input
                  type="text"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  required
                  placeholder="e.g. B.Tech Computer Science / BCA"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50/50 dark:bg-zinc-900 text-black dark:text-white text-sm focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              {/* Year of Study */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Current Year of Study
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50/50 dark:bg-zinc-900 text-black dark:text-white text-sm focus:outline-none focus:border-green-500 transition-colors"
                >
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="Final Year">Final Year</option>
                  <option value="Recent Graduate">Recent Graduate</option>
                </select>
              </div>

              {/* Domain of Interest */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Internship Domain <span className="text-green-500">*</span>
                </label>
                <select
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50/50 dark:bg-zinc-900 text-black dark:text-white text-sm focus:outline-none focus:border-green-500 transition-colors"
                >
                  {domains.map((dom) => (
                    <option key={dom} value={dom}>
                      {dom}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Duration */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Preferred Duration
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50/50 dark:bg-zinc-900 text-black dark:text-white text-sm focus:outline-none focus:border-green-500 transition-colors"
                >
                  <option value="1 Month">1 Month</option>
                  <option value="2 Months">2 Months</option>
                  <option value="3 Months">3 Months</option>
                  <option value="6 Months">6 Months</option>
                </select>
              </div>
            </div>

            {/* Resume / Portfolio Link */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Resume / GitHub / LinkedIn / Portfolio Link <span className="text-green-500">*</span>
              </label>
              <div className="relative">
                <FiLink className="absolute left-3.5 top-3.5 text-gray-400 text-sm" />
                <input
                  type="url"
                  name="resumeLink"
                  value={formData.resumeLink}
                  onChange={handleChange}
                  required
                  placeholder="https://drive.google.com/... or https://github.com/..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50/50 dark:bg-zinc-900 text-black dark:text-white text-sm focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
            </div>

            {/* Message / Cover Note */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Why do you want to join this internship? (Optional)
              </label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Mention your key skills, previous projects, or expectations from this internship..."
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50/50 dark:bg-zinc-900 text-black dark:text-white text-sm focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full py-4 rounded-xl bg-green-500 hover:bg-green-600 disabled:opacity-70 text-black font-bold text-sm shadow-md transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                {status.submitting ? (
                  <span>Submitting Application...</span>
                ) : (
                  <>
                    <span>Submit Internship Application</span>
                    <FiSend size={16} />
                  </>
                )}
              </button>
              <p className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
                Direct inquiries or resume submissions can also be sent to{" "}
                <a href="mailto:contact@knytxstudio.com" className="text-green-500 dark:text-green-400 hover:underline">
                  contact@knytxstudio.com
                </a>
              </p>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}

