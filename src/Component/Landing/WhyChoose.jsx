import {
  FaBolt,
  FaLayerGroup,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

export default function WhyChoose() {
  const points = [
    {
      icon: <FaBolt />,
      title: "Performance-Focused Development",
      desc: "We build fast, optimized websites and applications that deliver smooth experiences across all devices.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Scalable Software Solutions",
      desc: "Our systems are engineered to grow with your business — from startup MVPs to enterprise platforms.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure & Reliable Systems",
      desc: "Security, stability, and long-term reliability are built into every product we develop.",
    },
    {
      icon: <FaUsers />,
      title: "Client-Centric Approach",
      desc: "We collaborate closely to turn your ideas into successful digital products that meet real business goals.",
    },
  ];

  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="bg-white dark:bg-black py-20 lg:py-28 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <header className="text-center max-w-2xl mx-auto">
          <h2
            id="why-us-heading"
            className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white"
          >
            Why Choose KnytXStudio
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            KnytXStudio delivers modern web development, software solutions,
            and digital products designed for performance, scalability, and
            long-term success.
          </p>
        </header>

        {/* FEATURES GRID */}
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {points.map((item, i) => (
            <li key={i}>
              <article className="group text-center sm:text-left">

                {/* ICON (decorative) */}
                <div
                  className="w-14 h-14 mx-auto sm:mx-0 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-white/10 text-xl text-black dark:text-white transition-transform duration-300 group-hover:-translate-y-1"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="mt-5 text-xl font-semibold text-black dark:text-white">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  {item.desc}
                </p>

              </article>
            </li>
          ))}

        </ul>

      </div>
    </section>
  );
}