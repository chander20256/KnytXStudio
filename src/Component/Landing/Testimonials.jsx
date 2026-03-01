export default function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Startup Founder",
      text: "KnytXStudio delivered a product that exceeded our expectations. The team was professional, responsive, and highly skilled.",
    },
    {
      name: "Priya Mehta",
      role: "Product Manager",
      text: "Their design and development expertise helped us launch faster with a polished and scalable solution.",
    },
    {
      name: "Rahul Verma",
      role: "Business Owner",
      text: "Reliable, efficient, and detail-oriented. Working with KnytXStudio was a smooth and rewarding experience.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-gray-50 dark:bg-black py-20 lg:py-28 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white">
            What Clients Say
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Trusted by businesses for delivering high-quality digital solutions.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* TEXT */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                “{t.text}”
              </p>

              {/* USER */}
              <div className="mt-6 flex items-center gap-4">

                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-white/10" />

                <div>
                  <p className="font-semibold text-black dark:text-white">
                    {t.name}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}