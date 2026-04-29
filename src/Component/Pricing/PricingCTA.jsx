import { Link } from "react-router-dom";

export default function PricingCTA() {
  return (
    <section className="bg-white dark:bg-black py-16 sm:py-20 px-4">

      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden rounded-[32px] border border-gray-200 dark:border-white/10 bg-gradient-to-br from-green-500/10 to-transparent p-8 sm:p-12 lg:p-16">

          {/* BACKGROUND GLOW */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            {/* LEFT */}
            <div className="max-w-3xl text-center lg:text-left">

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black dark:text-white leading-tight">

                Need A Custom
                <span className="block text-green-400">
                  Business Solution?
                </span>

              </h2>

              <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">

                Every business is different. Contact KnytXStudio
                for custom pricing, enterprise solutions,
                blockchain systems, SaaS platforms, and scalable
                digital products.

              </p>

            </div>

            {/* RIGHT */}
            <div className="flex justify-center lg:justify-end">

              <Link
                to="/contact"
                className="px-8 py-4 rounded-2xl bg-green-500 text-black font-semibold transition-all duration-300 hover:bg-green-400 hover:scale-105"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}