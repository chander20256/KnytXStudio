import { FaRocket, FaBolt, FaUserAlt, FaCodeBranch, FaSyncAlt } from "react-icons/fa";

export default function WhyDifferent(){

  const points=[
    {
      icon:<FaRocket />,
      title:"Modern Technology Stack",
      desc:"Our products are built using modern frameworks, scalable architectures, and cutting-edge technologies to ensure long-term reliability."
    },
    {
      icon:<FaBolt />,
      title:"High Performance Systems",
      desc:"Every application is optimized for speed, efficiency, and performance to deliver a smooth and responsive user experience."
    },
    {
      icon:<FaUserAlt />,
      title:"User-Centered Design",
      desc:"We design products with real users in mind, focusing on usability, accessibility, and intuitive interfaces."
    },
    {
      icon:<FaCodeBranch />,
      title:"Independent Product Development",
      desc:"KnytXStudio builds and launches its own digital products, giving us full control over quality, innovation, and evolution."
    },
    {
      icon:<FaSyncAlt />,
      title:"Continuous Improvements",
      desc:"Our software products evolve continuously with updates, improvements, and new features based on user needs."
    }
  ];

  return(
    <section
      className="py-28 bg-white dark:bg-black"
      aria-labelledby="why-knyt-products"
    >

      <div className="max-w-6xl mx-auto px-4">

        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto">

          <h2
            id="why-knyt-products"
            className="text-3xl sm:text-4xl font-bold text-black dark:text-white"
          >
            Why Knyt<span className="text-green-500">X</span>Studio Products Are Different
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400">
            At KnytXStudio we focus on building powerful digital products
            that combine modern engineering, thoughtful design, and
            continuous innovation. Our goal is to create software that
            is reliable, scalable, and truly useful for users.
          </p>

        </header>

        {/* Feature Grid */}
        <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">

          {points.map((point,i)=>(
            <article
              key={i}
              className="p-7 border rounded-xl bg-gray-50 dark:bg-neutral-900 dark:border-white/10 hover:-translate-y-1 transition"
            >

              <div className="text-green-500 text-xl">
                {point.icon}
              </div>

              <h3 className="mt-4 font-semibold text-lg text-black dark:text-white">
                {point.title}
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                {point.desc}
              </p>

            </article>
          ))}

        </div>

      </div>

    </section>
  )
}