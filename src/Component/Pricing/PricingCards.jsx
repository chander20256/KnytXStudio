import { ArrowUpRight, Check } from "lucide-react";

const plans = [
  {
    title: "WordPress Development",
    price: "Starting at ₹15,000",
    delivery: "5 - 10 Days",
    bestFor: "Small Businesses & Brands",
    description:
      "Professional and conversion-focused WordPress websites for businesses and growing brands.",
    features: [
      "Responsive Design",
      "Custom Theme Setup",
      "SEO Friendly",
      "Fast Performance",
      "Mobile Optimization",
    ],
    button: "Get Started",
  },

  {
    title: "Frontend Development",
    price: "Starting at ₹25,000",
    delivery: "7 - 14 Days",
    bestFor: "Startups & Modern Platforms",
    description:
      "Modern frontend applications with responsive UI systems and premium experiences.",
    features: [
      "React Development",
      "Responsive UI",
      "Animations & Effects",
      "Modern UI/UX",
      "Performance Optimization",
    ],
    button: "Discuss Project",
    popular: true,
  },

  {
    title: "Backend Development",
    price: "Starting at ₹35,000",
    delivery: "7 - 15 Days",
    bestFor: "Scalable Applications",
    description:
      "Secure backend systems and scalable architecture for modern applications.",
    features: [
      "REST APIs",
      "Authentication",
      "Database Integration",
      "Server Security",
      "Scalable Systems",
    ],
    button: "Backend Solution",
  },

  {
    title: "Full Stack Development",
    price: "Starting at ₹60,000",
    delivery: "14 - 30 Days",
    bestFor: "Startups & SaaS Platforms",
    description:
      "Complete frontend and backend solutions for scalable digital platforms.",
    features: [
      "Frontend + Backend",
      "Admin Dashboard",
      "API Integration",
      "Database Setup",
      "Deployment Support",
    ],
    button: "Build Platform",
  },

  {
    title: "UI/UX Design",
    price: "Starting at ₹15,000",
    delivery: "5 - 10 Days",
    bestFor: "Apps & Digital Products",
    description:
      "Modern UI/UX systems designed for better engagement and user experience.",
    features: [
      "Figma Design",
      "Wireframes",
      "Interactive Prototype",
      "Responsive Layouts",
      "Design Systems",
    ],
    button: "Start Design",
  },

  {
    title: "Digital Marketing",
    price: "Starting at ₹20,000",
    delivery: "Monthly Strategy",
    bestFor: "Business Growth",
    description:
      "Marketing solutions focused on brand growth and online visibility.",
    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "Google Ads",
      "Analytics Reports",
      "Content Strategy",
    ],
    button: "Grow Business",
  },

  {
    title: "Blockchain Development",
    price: "Starting at ₹80,000",
    delivery: "15 - 40 Days",
    bestFor: "Web3 Projects",
    description:
      "Blockchain applications and smart contract powered Web3 solutions.",
    features: [
      "Smart Contracts",
      "Web3 Integration",
      "Wallet Connect",
      "DApp Development",
      "Blockchain Security",
    ],
    button: "Build Web3 App",
  },

  {
    title: "Custom Enterprise Solution",
    price: "Custom Quote",
    delivery: "Custom Timeline",
    bestFor: "Enterprise Projects",
    description:
      "Tailored enterprise solutions for large-scale and advanced systems.",
    features: [
      "Custom Features",
      "Advanced Integrations",
      "Scalable Infrastructure",
      "Dedicated Support",
      "Enterprise Architecture",
    ],
    button: "Request Quote",
  },
];

export default function PricingCards() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-black py-16 sm:py-20 lg:py-24 px-4">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/10 blur-3xl rounded-full" />

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-400/10 blur-3xl rounded-full" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <h2 className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white">
            Pricing & Services
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Professional digital solutions designed for startups,
            businesses, and scalable modern platforms.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl border transition-all duration-300 hover:-translate-y-2 p-8 ${
                plan.popular
                  ? "border-green-500 bg-green-500/5"
                  : "border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02]"
              }`}
            >

              {/* POPULAR */}
              {plan.popular && (
                <div className="absolute top-5 right-5 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
              )}

              {/* BEST FOR */}
              <div className="inline-flex px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 text-xs text-gray-700 dark:text-gray-300 mb-6">
                {plan.bestFor}
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-bold text-black dark:text-white">
                {plan.title}
              </h3>

              {/* PRICE */}
              <div className="mt-6">

                <h4 className="text-4xl font-extrabold text-black dark:text-white">
                  {plan.price}
                </h4>

                <p className="mt-2 text-sm text-green-500">
                  Delivery: {plan.delivery}
                </p>

              </div>

              {/* DESCRIPTION */}
              <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                {plan.description}
              </p>

              {/* FEATURES */}
              <ul className="mt-8 space-y-4">

                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >

                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />

                    <span>{feature}</span>

                  </li>
                ))}

              </ul>

              {/* BUTTON */}
              <button
                className={`mt-10 w-full py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  plan.popular
                    ? "bg-green-500 text-black hover:bg-green-400"
                    : "border border-black dark:border-white/10 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                }`}
              >

                {plan.button}

                <ArrowUpRight size={18} />

              </button>

              {/* TAGS */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10 flex flex-wrap gap-2">

                {["Responsive", "Modern UI", "Scalable"].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}