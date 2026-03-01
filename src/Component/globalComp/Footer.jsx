import { Link } from "react-router-dom";

import logoLight from "../../assets/KnytXStudio_logo_original.svg";
import logoDark from "../../assets/KnytXStudio_logo_white_on_black.svg";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {

  const footerLink =
    "relative inline-block w-fit text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-black dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full";

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 ">

      <div className="max-w-7xl mx-auto px-4 py-14">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">

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
                Knyt<span className="text-yellow-400">X</span>Studio
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              KnytXStudio builds modern digital experiences — websites,
              applications, and creative solutions for brands and businesses.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-black dark:text-white font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {["Home", "About", "Portfolio", "Contact"].map(item => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={footerLink}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-black dark:text-white font-semibold mb-4">
              Services
            </h3>

            <ul className="space-y-2">
              {[
                "Web Development",
                "UI/UX Design",
                "App Development",
                "Consulting",
              ].map(item => (
                <li key={item}>
                  <Link to="/services" className={footerLink}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-black dark:text-white font-semibold mb-4">
              Follow Us
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Connect with us on social platforms
            </p>

            <div className="flex flex-wrap gap-3">

              {[
                FaFacebookF,
                FaTwitter,
                FaInstagram,
                FaLinkedinIn,
                FaGithub,
              ].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-white/20 text-gray-600 dark:text-gray-300 hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition"
                >
                  <Icon />
                </a>
              ))}

            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-200 dark:border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} KnytXStudio. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            {["Privacy Policy", "Terms of Service", "Support"].map(item => (
              <Link
                key={item}
                to="/"
                className={footerLink}
              >
                {item}
              </Link>
            ))}
          </div>

        </div>

      </div>

    </footer>
  );
}