

import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaCogs,
  FaLightbulb,
  FaShieldAlt,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Fast, scalable, and modern websites built with cutting-edge technologies.",
      icon: <FaLaptopCode />,
    },
    {
      title: "App Development",
      desc: "High-performance mobile and web apps designed for real-world impact.",
      icon: <FaMobileAlt />,
    },
    {
      title: "UI/UX Design",
      desc: "Beautiful, intuitive interfaces that users love to interact with.",
      icon: <FaPalette />,
    },
    {
      title: "Software Solutions",
      desc: "Custom systems tailored to solve complex business problems.",
      icon: <FaCogs />,
    },
    {
      title: "IT Consulting",
      desc: "Expert guidance to choose the right technology for your growth.",
      icon: <FaLightbulb />,
    },
    {
      title: "Support & Security",
      desc: "Reliable maintenance and protection for your digital assets.",
      icon: <FaShieldAlt />,
    },
  ];

  return (
    <section
      id="services"
      className="bg-gray-50 dark:bg-black py-20 lg:py-28 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white">
            Our Expertise
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We design and build digital products that deliver real business value.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-400/10 hover:border-green-400/40"
            >
              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-400/10 text-xl text-green-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-400/20">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="mt-5 text-xl font-semibold text-black dark:text-white transition-colors duration-300 group-hover:text-green-400">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}