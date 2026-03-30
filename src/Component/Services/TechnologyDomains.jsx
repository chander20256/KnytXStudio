import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaRobot,
  FaDatabase,
  FaChartLine
} from "react-icons/fa";

export default function TechnologyDomains() {

  const domains = [
    {
      icon: <FaLaptopCode />,
      title: "Web Platforms",
      desc: "Modern SaaS products and scalable web applications."
    },
    {
      icon: <FaMobileAlt />,
      title: "Software Applications",
      desc: "Powerful desktop and cross-platform software solutions."
    },
    {
      icon: <FaPalette />,
      title: "UI / UX Systems",
      desc: "Clean and intuitive interface design systems."
    },
    {
      icon: <FaRobot />,
      title: "AI Tools",
      desc: "Intelligent automation powered by artificial intelligence."
    },
    {
      icon: <FaChartLine />,
      title: "Digital Platforms",
      desc: "Dashboards, automation tools and productivity systems."
    },
    {
      icon: <FaDatabase />,
      title: "Backend Infrastructure",
      desc: "Secure APIs, databases and scalable architectures."
    }
  ];

  return (
    <section className="pb-28 bg-gradient-to-b from-gray-50 to-white dark:from-neutral-950 dark:to-black">

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">
            Technology Domains
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Our products are built across multiple areas of modern technology.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {domains.map((domain,i)=>(
            <div
              key={i}
              className="p-7 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 hover:-translate-y-2 transition"
            >
              <div className="text-green-500 text-2xl">{domain.icon}</div>

              <h3 className="mt-4 text-xl font-semibold text-black dark:text-white">
                {domain.title}
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                {domain.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}