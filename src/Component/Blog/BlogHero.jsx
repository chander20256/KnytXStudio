export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-black transition-colors">

      {/* Background Glow */}
      

      <div className="relative max-w-6xl mx-auto px-4 py-24 lg:py-32 text-center">

        

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black dark:text-white leading-tight">
          Insights from Knyt<span className="text-green-400">X</span>Studio
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          Practical knowledge on scalable systems, modern UI/UX,
          performance optimization, and building digital products that grow.
        </p>

      </div>

      <div className="border-t border-gray-200 dark:border-white/10" />
    </section>
  );
}