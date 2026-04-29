import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";

export default function PricingCards() {

  const [planType, setPlanType] = useState("small");

  const pricingPlans = {
    small: [
      {
        title: "WordPress Development",
        price: "₹8,000",
        delivery: "3 - 5 Days",
        features: [
          "5 Pages Website",
          "Responsive Design",
          "Basic SEO",
          "Fast Performance",
        ],
      },

      {
        title: "Frontend Development",
        price: "₹12,000",
        delivery: "5 - 7 Days",
        features: [
          "Responsive UI",
          "React Frontend",
          "Basic Animations",
          "Modern Design",
        ],
      },

      {
        title: "Backend Development",
        price: "₹15,000",
        delivery: "5 - 10 Days",
        features: [
          "REST APIs",
          "Authentication",
          "Database Setup",
          "Basic Security",
        ],
      },

      {
        title: "Full Stack Development",
        price: "₹25,000",
        delivery: "10 - 15 Days",
        features: [
          "Frontend + Backend",
          "Authentication",
          "Dashboard",
          "Database Integration",
        ],
      },

      {
        title: "UI/UX Design",
        price: "₹6,000",
        delivery: "2 - 5 Days",
        features: [
          "Figma Design",
          "Wireframes",
          "Responsive Layout",
          "Basic Prototype",
        ],
      },

      {
        title: "Digital Marketing",
        price: "₹7,000",
        delivery: "Monthly",
        features: [
          "Basic SEO",
          "Social Media Setup",
          "Google Listing",
          "Marketing Strategy",
        ],
      },

      {
        title: "Blockchain Development",
        price: "₹35,000",
        delivery: "10 - 20 Days",
        features: [
          "Basic Smart Contract",
          "Wallet Connect",
          "Web3 Setup",
          "Testing",
        ],
      },
    ],

    medium: [
      {
        title: "WordPress Development",
        price: "₹20,000",
        delivery: "7 - 10 Days",
        features: [
          "10+ Pages",
          "Premium UI",
          "SEO Optimization",
          "Admin Panel",
        ],
      },

      {
        title: "Frontend Development",
        price: "₹30,000",
        delivery: "7 - 14 Days",
        features: [
          "Advanced UI",
          "Animations",
          "Performance Optimization",
          "Responsive System",
        ],
      },

      {
        title: "Backend Development",
        price: "₹40,000",
        delivery: "10 - 15 Days",
        features: [
          "Advanced APIs",
          "Authentication",
          "Security Setup",
          "Scalable Database",
        ],
      },

      {
        title: "Full Stack Development",
        price: "₹60,000",
        delivery: "15 - 25 Days",
        features: [
          "Complete Platform",
          "Admin Dashboard",
          "API Integration",
          "Deployment",
        ],
      },

      {
        title: "UI/UX Design",
        price: "₹15,000",
        delivery: "5 - 8 Days",
        features: [
          "Professional UI",
          "Interactive Prototype",
          "Design System",
          "UX Research",
        ],
      },

      {
        title: "Digital Marketing",
        price: "₹25,000",
        delivery: "Monthly",
        features: [
          "SEO Strategy",
          "Ads Campaigns",
          "Analytics",
          "Growth Planning",
        ],
      },

      {
        title: "Blockchain Development",
        price: "₹80,000",
        delivery: "20 - 35 Days",
        features: [
          "Smart Contracts",
          "DApp Development",
          "Token System",
          "Security Audit",
        ],
      },
    ],

    enterprise: [
      {
        title: "WordPress Development",
        price: "₹50,000+",
        delivery: "15 - 25 Days",
        features: [
          "Enterprise Website",
          "Custom Features",
          "Advanced SEO",
          "Scalable System",
        ],
      },

      {
        title: "Frontend Development",
        price: "₹70,000+",
        delivery: "15 - 30 Days",
        features: [
          "Advanced Frontend",
          "High Performance",
          "Custom Components",
          "Enterprise UI",
        ],
      },

      {
        title: "Backend Development",
        price: "₹90,000+",
        delivery: "20 - 35 Days",
        features: [
          "Enterprise APIs",
          "Advanced Security",
          "Scalable Infrastructure",
          "Cloud Setup",
        ],
      },

      {
        title: "Full Stack Development",
        price: "₹1,50,000+",
        delivery: "30 - 60 Days",
        features: [
          "Enterprise Platform",
          "Microservices",
          "Advanced Dashboard",
          "Cloud Deployment",
        ],
      },

      {
        title: "UI/UX Design",
        price: "₹40,000+",
        delivery: "10 - 20 Days",
        features: [
          "Enterprise Design",
          "Advanced UX",
          "Research & Testing",
          "Full Design System",
        ],
      },

      {
        title: "Digital Marketing",
        price: "₹60,000+",
        delivery: "Monthly",
        features: [
          "Advanced SEO",
          "Paid Advertising",
          "Conversion Optimization",
          "Brand Growth",
        ],
      },

      {
        title: "Blockchain Development",
        price: "₹2,00,000+",
        delivery: "30 - 60 Days",
        features: [
          "Advanced Smart Contracts",
          "Full Web3 Ecosystem",
          "Blockchain Security",
          "Enterprise DApps",
        ],
      },
    ],
  };

  return (
    <section className="bg-white dark:bg-black py-16 sm:py-20 px-4">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
      <div className="max-w-3xl mx-auto lg:mx-0 mb-12 text-center lg:text-left">

  <h2 className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white">
    Flexible Pricing
  </h2>

  <p className="mt-5 text-gray-600 dark:text-gray-400">
    Pricing plans designed for startups, businesses,
    and enterprise solutions.
  </p>

</div>

        {/* TOGGLE */}
      <div className="flex justify-center lg:justify-start mb-12">

  <div className="flex flex-wrap justify-center lg:justify-start gap-3 bg-gray-100 dark:bg-white/5 p-2 rounded-2xl">

    {[
      { key: "small", label: "Small Business" },
      { key: "medium", label: "Medium Business" },
      { key: "enterprise", label: "Enterprise" },
    ].map((item) => (
      <button
        key={item.key}
        onClick={() => setPlanType(item.key)}
        className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
          planType === item.key
            ? "bg-green-500 text-black"
            : "text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10"
        }`}
      >
        {item.label}
      </button>
    ))}

  </div>

</div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {pricingPlans[planType].map((plan, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2"
            >

              <h3 className="text-2xl font-bold text-black dark:text-white">
                {plan.title}
              </h3>

              <div className="mt-5">

                <h4 className="text-4xl font-extrabold text-black dark:text-white">
                  {plan.price}
                </h4>

                <p className="mt-2 text-sm text-green-500">
                  Delivery: {plan.delivery}
                </p>

              </div>

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

              {/* CONTACT BUTTON */}
              <Link
                to="/contact"
                className="mt-10 w-full py-4 rounded-2xl border border-black dark:border-white/10 text-black dark:text-white hover:bg-green-500 hover:border-green-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
              >

                Contact Us

                <ArrowUpRight size={18} />

              </Link>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}