import React from "react";
import { Link } from "react-router-dom";
import logoLight from "../../assets/logo_light.svg";
import logoDark from "../../assets/logo_dark.svg";

import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiClock,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    // { name: "Portfolio", path: "/portfolio" },
    { name: "Careers", path: "/careers", badge: "Hiring" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const capabilities = [
    "Web Application Architecture",
    "UI/UX Design Systems",
    "Mobile Apps (iOS & Android)",
    "Enterprise AI & Automation",
    "Web3 & Blockchain Platforms",
    "SEO & Performance Tuning",
  ];

  const socialLinks = [
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-white dark:bg-black text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-white/10 overflow-hidden transition-colors">
      {/* Background Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-green-500/5 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN MULTI-COLUMN GRID */}
        <div className="py-14 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* BRAND COLUMN */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src={logoLight}
                alt="KnytXStudio"
                className="h-9 w-auto dark:hidden transition-transform duration-300 group-hover:scale-105"
              />
              <img
                src={logoDark}
                alt="KnytXStudio"
                className="h-9 w-auto hidden dark:block transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-xl font-bold text-black dark:text-white tracking-tight">
                Knyt<span className="text-green-400">X</span>Studio
              </span>
            </Link>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
              A bespoke digital product and software engineering studio. We craft high-performance web applications, intelligent software, and design systems for forward-thinking brands.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="w-9 h-9 rounded-xl border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-green-500 hover:border-green-500 dark:hover:bg-green-500 dark:hover:border-green-500 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Icon size={14} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200"
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CAPABILITIES */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm">
              {capabilities.map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DIRECT CONTACT */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              Get in Touch
            </h3>

            <div className="space-y-3">
              {/* Contact Email */}
              <div className="p-3.5 rounded-2xl border border-gray-200/80 dark:border-white/10 bg-gray-50/50 dark:bg-zinc-950/50 space-y-1">
                <span className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase">
                  Project Inquiries
                </span>
                <a
                  href="mailto:contact@knytxstudio.com"
                  className="flex items-center gap-2 text-sm font-medium text-black dark:text-white hover:text-green-500 dark:hover:text-green-400 transition-colors group"
                >
                  <FiMail className="text-green-400 text-xs flex-shrink-0" />
                  <span className="truncate">contact@knytxstudio.com</span>
                  <FiArrowUpRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </a>
              </div>

              {/* Support Email */}
              <div className="p-3.5 rounded-2xl border border-gray-200/80 dark:border-white/10 bg-gray-50/50 dark:bg-zinc-950/50 space-y-1">
                <span className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase">
                  Client Support
                </span>
                <a
                  href="mailto:support@knytxstudio.com"
                  className="flex items-center gap-2 text-sm font-medium text-black dark:text-white hover:text-green-500 dark:hover:text-green-400 transition-colors group"
                >
                  <FiMail className="text-green-400 text-xs flex-shrink-0" />
                  <span className="truncate">support@knytxstudio.com</span>
                  <FiArrowUpRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </a>
              </div>

              {/* Location & Availability Note */}
              <div className="pt-1 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1.5">
                  <FiMapPin className="text-green-400" />
                  <span>India • Remote Worldwide</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FiClock className="text-green-400" />
                  <span>24h SLA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA & COPYRIGHT BAR */}
        <div className="border-t border-gray-200 dark:border-white/10 py-6 sm:py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Knyt<span className="text-green-400 font-semibold">X</span>Studio. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-green-500 dark:hover:text-green-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-zinc-700" />
            <Link
              to="/terms"
              className="hover:text-green-500 dark:hover:text-green-400 transition-colors"
            >
              Terms of Service
            </Link>
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-zinc-700" />
            <Link
              to="/support"
              className="hover:text-green-500 dark:hover:text-green-400 transition-colors"
            >
              Support
            </Link>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 hover:border-green-500/50 hover:text-green-500 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-zinc-950 transition-all text-xs"
          >
            <span>Back to top</span>
            <FaArrowUp size={10} />
          </button>
        </div>
      </div>
    </footer>
  );
}
