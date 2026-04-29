import { Link } from "react-router-dom";

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-black transition-colors">

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-20 lg:py-28">

        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-black dark:text-white">
            Simple & Transparent
            <span className="block text-green-400">
              Pricing Plans
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose the perfect pricing plan for your business.
            Flexible solutions designed for startups, growing businesses,
            and enterprise projects.
          </p>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-500">
            Web Development • UI/UX Design • SaaS Platforms • Mobile Apps • Business Solutions
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">

            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl font-semibold bg-green-500 text-white transition-all duration-300 hover:bg-green-600"
            >
              Get Started
            </Link>

            <Link
              to="/portfolio"
              className="px-6 py-3 rounded-xl font-semibold border
                         border-black text-black
                         dark:border-white dark:text-white
                         transition-all duration-300
                         hover:bg-black hover:text-white
                         dark:hover:bg-white dark:hover:text-black"
            >
              View Portfolio
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}