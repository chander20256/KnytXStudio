import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layers3, ShieldCheck, Zap } from "lucide-react";

export default function PricingHero() {
  return (
    <section className="bg-white dark:bg-black transition-colors">

      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20 lg:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >

            <span className="inline-flex px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-medium mb-6">
              Flexible Pricing Solutions
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-black dark:text-white leading-tight">

              Smart Pricing For
              <span className="block text-green-400">
                Modern Businesses
              </span>

            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">

              Affordable and scalable pricing plans designed
              for startups, businesses, SaaS platforms,
              blockchain projects, and enterprise systems.

            </p>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
              Web Development • Full Stack • UI/UX • Blockchain • Marketing
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">

              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-2xl font-semibold bg-green-500 text-black transition-all duration-300 hover:bg-green-400 hover:scale-105"
              >
                Get Started
              </Link>

              <Link
                to="/portfolio"
                className="px-7 py-3.5 rounded-2xl font-semibold border border-black dark:border-white text-black dark:text-white transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                View Portfolio
              </Link>

            </div>

          </motion.div>

          {/* RIGHT ILLUSTRATION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >

            <div className="relative w-full max-w-[500px]">

              {/* MAIN CARD */}
              <div className="rounded-[32px] border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6 sm:p-8">

                {/* TOP */}
                <div className="flex items-center justify-between mb-8">

                  <div>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Business Growth
                    </p>

                    <h3 className="text-2xl font-bold text-black dark:text-white mt-1">
                      Pricing Strategy
                    </h3>

                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center">

                    <Zap className="text-green-500" />

                  </div>

                </div>

                {/* ITEMS */}
                <div className="space-y-5">

                  {[
                    {
                      icon: Layers3,
                      title: "Scalable Solutions",
                      text: "Flexible plans for every business size.",
                    },

                    {
                      icon: ShieldCheck,
                      title: "Secure Systems",
                      text: "Modern secure and optimized architecture.",
                    },

                    {
                      icon: Zap,
                      title: "Fast Delivery",
                      text: "Quick turnaround with premium quality.",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="flex items-start gap-4 rounded-2xl border border-gray-200 dark:border-white/10 p-4"
                      >

                        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">

                          <Icon className="text-green-500 w-6 h-6" />

                        </div>

                        <div>

                          <h4 className="font-semibold text-black dark:text-white">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            {item.text}
                          </p>

                        </div>

                      </div>
                    );
                  })}

                </div>

              </div>

              {/* FLOATING CARD */}
             {/* FLOATING CARD */}
<motion.div
  initial={{ opacity: 0, scale: 0.8, y: 30 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  transition={{
    duration: 0.6,
    delay: 0.3,
  }}
  whileHover={{
    y: -6,
    scale: 1.03,
  }}
  viewport={{ once: true }}
  className="
    hidden sm:block
    absolute z-20

    sm:bottom-[-25px]
    sm:left-6

    lg:bottom-[-30px]
    lg:left-[-30px]
  "
>

  <div className="rounded-2xl border border-green-500/20 bg-green-500/10 backdrop-blur-xl px-5 sm:px-6 py-4 shadow-lg">

    <p className="text-sm text-green-500 font-medium">
      Starting From
    </p>

    <h4 className="text-2xl sm:text-3xl font-extrabold text-black dark:text-white mt-1">
      ₹8K
    </h4>

  </div>

</motion.div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}