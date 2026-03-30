export default function DevelopmentProcess(){

  const steps=[
    {
      title:"Idea & Research",
      desc:"Every product begins with research, problem analysis, and idea validation to ensure we are building something meaningful."
    },
    {
      title:"Product Design",
      desc:"Our team designs intuitive user interfaces and scalable product architecture before development begins."
    },
    {
      title:"Software Development",
      desc:"Using modern technologies, we build secure, scalable, and high-performance digital products."
    },
    {
      title:"Testing & Optimization",
      desc:"Products go through strict testing to ensure reliability, performance, and a smooth user experience."
    },
    {
      title:"Product Launch",
      desc:"Once finalized, the product is launched on the KnytXStudio platform where users can explore and download it."
    }
  ];

  return(
    <section 
      className="py-28 bg-gray-50 dark:bg-neutral-950"
      aria-labelledby="development-process"
    >

      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* SEO Header */}
        <header className="max-w-3xl mx-auto">

          <h2 
            id="development-process"
            className="text-3xl sm:text-4xl font-bold text-black dark:text-white"
          >
            Our Software Development Process
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400">
            At KnytXStudio we follow a structured product development workflow 
            that transforms innovative ideas into powerful digital products. 
            Our process focuses on research, design, development, testing, 
            and launching scalable software solutions that users can rely on.
          </p>

        </header>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-5 gap-6 mt-16">

          {steps.map((step,i)=>(
            <article
              key={i}
              className="p-6 border rounded-xl dark:border-white/10 bg-white dark:bg-neutral-900"
            >

              <span className="text-green-500 font-bold text-xl">
                {i+1}
              </span>

              <h3 className="mt-3 font-semibold text-black dark:text-white">
                {step.title}
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                {step.desc}
              </p>

            </article>
          ))}

        </div>

      </div>

    </section>
  )
}