


import { Link } from "react-router-dom";
import { useState } from "react";
import DotLogo3D from "./DotLogo3D";
import HeroAmbientDots from "./HeroAmbientDots";

export default function Hero() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setActive(false), 700);
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white dark:bg-black transition-colors"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <HeroAmbientDots />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2 lg:gap-14">
          {/* RIGHT - dot particle logo */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-[300px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-lg aspect-square">
              <DotLogo3D />
            </div>
          </div>

          {/* LEFT CONTENT */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-black dark:text-white">
              Knyt<span className="text-green-400">X</span>Studio
            </h1>

            <p className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              Where Ideas Become{" "}
              <span className="font-extrabold">Powerful Products</span>
            </p>

            <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
              We build modern websites, mobile apps, and scalable software
              solutions that help businesses grow, launch faster, and stand
              out in the digital world.
            </p>

            <p className="mt-3 text-sm text-gray-500 dark:text-gray-500">
              Software Development • Web Development • Mobile Apps • UI/UX Design • IT Consulting
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={handleClick}
                className={`premium-green-btn ${active ? "active" : ""}`}
              >
                <span>Get Started</span>
                <span className="liquid" />
              </button>

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
      </div>
    </section>
  );
}
