import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FeaturedWork() {
  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Modern online store with fast checkout and scalable architecture.",
    },
    {
      title: "Analytics Dashboard",
      desc: "Real-time data visualization for smarter business decisions.",
    },
    {
      title: "Mobile Productivity App",
      desc: "Clean, intuitive app designed to boost daily efficiency.",
    },
  ];

  return (
    <section
      id="featured-work"
      className="bg-gray-50 dark:bg-black py-20 lg:py-28 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white">
              Featured Work
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              A snapshot of the digital products we’ve crafted for clients.
            </p>
          </div>

          {/* CTA BUTTON */}
          <Link
           to="/portfolio"
            className="inline-flex items-center gap-2 font-semibold text-black dark:text-white hover:gap-3 transition-all"
          >
            View All <span className="text-green-400">Projects</span><FaArrowRight className="text-green-400"/>
          </Link>

        </div>

        {/* PROJECT GRID */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">

          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* IMAGE PLACEHOLDER */}
              <div className="h-56 bg-gray-200 dark:bg-white/10 flex items-center justify-center text-gray-400 dark:text-gray-500">
                Project Preview
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                  {project.desc}
                </p>

                {/* SUBTLE LINK */}
                <Link
  to="/portfolio"
  className="mt-4 inline-block font-medium text-black dark:text-white opacity-80 group-hover:opacity-100 transition"
>
  View Details →
</Link>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}