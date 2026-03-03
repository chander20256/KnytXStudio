

import { useState } from "react";
import heroImage from "../../assets/KnytXStudio_logo_original.svg"; 
export default function Hero() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setActive(false), 700);
  };

  return (
    <section id="hero" className="bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
<h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-black dark:text-white">
  Knyt<span className="text-green-400">X</span>Studio
</h1>

            <p className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              Where Ideas Become{" "}
              <span className=" font-extrabold">
                Powerful Products
              </span>
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
            <div className="mt-8 flex flex-row gap-4 justify-center lg:justify-start">

              <button
  onClick={handleClick}
  className={`premium-green-btn ${active ? "active" : ""}`}
>
  <span>Get Started</span>
  <span className="liquid" />
</button>

<button
  onClick={handleClick}
  className="px-6 py-3 rounded-xl font-semibold border 
             border-black text-black 
             dark:border-white dark:text-white
             transition-all duration-300
             hover:bg-black hover:text-white
             dark:hover:bg-white dark:hover:text-black"
>
  View Portfolio
</button>

            </div>

          </div>

          {/* ⭐ RIGHT VISUAL — PREMIUM GLASS UI */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-square">

              {/* Glow background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/10 to-transparent dark:from-white/10 blur-2xl" />

              {/* Glass container */}
              <div className="
                relative h-full rounded-3xl
                bg-white/60 dark:bg-white/5
                backdrop-blur-xl
                border border-gray-200 dark:border-white/10
                shadow-2xl
                flex items-center justify-center
                overflow-hidden
                transition-transform duration-500
                hover:scale-[1.02]
              ">

                {/* Image */}
                <img
                  src={heroImage}
                  alt="Abstract product interface visualization"
                  className="
                    w-[90%] h-[90%]
                    object-contain
                    drop-shadow-2xl
                    transition-transform duration-700
                    hover:scale-105
                  "
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}