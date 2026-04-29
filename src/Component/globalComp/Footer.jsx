import { Link } from "react-router-dom";

import logoLight from "../../assets/logo_light.svg";
import logoDark from "../../assets/logo_dark.svg";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {

  const footerLink =
    "relative inline-block w-fit text-gray-600 dark:text-gray-400 transition-all duration-300 hover:text-green-500 dark:hover:text-green-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-white/10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-3 mb-5">

              <img
                src={logoLight}
                alt="KnytXStudio"
                className="h-9 dark:hidden"
              />

              <img
                src={logoDark}
                alt="KnytXStudio"
                className="h-9 hidden dark:block"
              />

              <span className="text-xl font-bold text-black dark:text-white">
                Knyt<span className="text-green-400">X</span>Studio
              </span>

            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
              KnytXStudio creates premium digital experiences including
              websites, SaaS platforms, UI/UX systems, branding, and scalable
              business solutions for startups and enterprises.
            </p>

            <div className="flex items-center gap-3">

              {[
                {
                  icon: FaFacebookF,
                  link: "#",
                },
                {
                  icon: FaTwitter,
                  link: "#",
                },
                {
                  icon: FaInstagram,
                  link: "#",
                },
                {
                  icon: FaLinkedinIn,
                  link: "#",
                },
                {
                  icon: FaGithub,
                  link: "#",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <a
                    key={i}
                    href={item.link}
                    className="w-10 h-10 rounded-full border border-gray-300 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-green-500 hover:border-green-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-black dark:text-white font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Pricing", path: "/pricing" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "About", path: "/about" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={footerLink}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-black dark:text-white font-semibold text-lg mb-5">
              Services
            </h3>

            <ul className="space-y-3">

              {[
                "Web Development",
                "UI/UX Design",
                "App Development",
                "Blockchain Development",
                "SEO Optimization",
                "Brand Strategy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className={footerLink}
                  >
                    {item}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-black dark:text-white font-semibold text-lg mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-sm">

              <div>
                <p className="text-black dark:text-white font-medium mb-1">
                  Email
                </p>

                <a
                  href="mailto:hello@knytxstudio.com"
                  className={footerLink}
                >
                  hello@knytxstudio.com
                </a>
              </div>

              <div>
                <p className="text-black dark:text-white font-medium mb-1">
                  Location
                </p>

                <p className="text-gray-600 dark:text-gray-400">
                  India
                </p>
              </div>

              <div>
                <p className="text-black dark:text-white font-medium mb-1">
                  Availability
                </p>

                <p className="text-gray-600 dark:text-gray-400">
                  Monday - Saturday
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-200 dark:border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} KnytXStudio. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-6">

            {[
              {
                name: "Privacy Policy",
                path: "/privacy-policy",
              },
              {
                name: "Terms of Service",
                path: "/terms",
              },
              {
                name: "Support",
                path: "/support",
              },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={footerLink}
              >
                {item.name}
              </Link>
            ))}

          </div>

        </div>

      </div>

    </footer>
  );
}