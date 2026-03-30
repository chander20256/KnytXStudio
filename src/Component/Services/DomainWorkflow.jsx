import { useState, useEffect, useRef } from "react";

/* detect system theme */
function useSystemTheme() {
  const [dark, setDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e) => setDark(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return dark;
}

/* scroll reveal */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

/* workflow data */
const workflowData = [
  {
    n: "01",
    domain: "Web Development",
    summary:
      "We treat every product as a long-term codebase designed for maintainability and scalability.",
    steps: [
      { t: "Research & Scoping", d: "Define user journeys and technical boundaries." },
      { t: "Architecture Design", d: "Design scalable frontend and backend systems." },
      { t: "Component Development", d: "Reusable UI components shared across projects." },
      { t: "Testing & Quality", d: "Automated tests and CI pipelines ensure reliability." },
      { t: "Launch & Iteration", d: "Deploy fast and iterate using real user feedback." }
    ]
  },
  {
    n: "02",
    domain: "Digital Marketing",
    summary:
      "Every marketing effort is tied directly to measurable product growth metrics.",
    steps: [
      { t: "Market Research", d: "Analyze competitors and audience behaviour." },
      { t: "SEO Architecture", d: "Build search visibility through technical SEO." },
      { t: "Content Strategy", d: "Create content driven by real search demand." },
      { t: "Channel Experiments", d: "Test marketing channels to find scalable growth." },
      { t: "Growth Analytics", d: "Track engagement and optimise strategy." }
    ]
  },
  {
    n: "03",
    domain: "Graphic Design & UI/UX",
    summary:
      "Design at KnytXStudio is a system focused on usability, clarity, and product experience.",
    steps: [
      { t: "UX Research", d: "Study user behaviour and interaction patterns." },
      { t: "Wireframes", d: "Structure layout before styling." },
      { t: "Visual Design", d: "Build consistent typography and design language." },
      { t: "UI Components", d: "Reusable interface components for scalability." },
      { t: "Usability Testing", d: "Improve experiences based on feedback." }
    ]
  }
];

/* timeline step */
function StepRow({ step, index, last }) {
  return (
    <div className={`flex gap-4 ${!last && "pb-6 border-b border-gray-200 dark:border-neutral-800"}`}>

      <div className="flex flex-col items-center">

        <div className="w-7 h-7 rounded-full border border-gray-300 dark:border-neutral-700 flex items-center justify-center text-xs font-bold">
          {String(index + 1).padStart(2, "0")}
        </div>

        {!last && (
          <div className="w-px flex-1 bg-gray-200 dark:bg-neutral-800 mt-2" />
        )}

      </div>

      <div>
        <h4 className="text-sm sm:text-base font-semibold text-black dark:text-white">
          {step.t}
        </h4>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
          {step.d}
        </p>
      </div>

    </div>
  );
}

/* workflow block */
function WorkflowBlock({ wf, index }) {

  const [ref, visible] = useReveal();
  const reverse = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`border-t border-gray-200 dark:border-neutral-800 py-24
      transition-all duration-700
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

        {/* domain */}
        <div className={`lg:sticky lg:top-28 self-start ${reverse ? "lg:order-2" : ""}`}>

          <span className="text-xs tracking-widest text-gray-500 dark:text-gray-400">
            {wf.n}
          </span>

          <h3 className="text-2xl lg:text-3xl font-bold text-black dark:text-white mt-2">
            {wf.domain}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
            {wf.summary}
          </p>

        </div>

        {/* steps */}
        <div className={`space-y-6 ${reverse ? "lg:order-1" : ""}`}>

          {wf.steps.map((step, i) => (
            <StepRow
              key={step.t}
              step={step}
              index={i}
              last={i === wf.steps.length - 1}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default function DomainWorkflow() {

  // eslint-disable-next-line no-unused-vars
  const dark = useSystemTheme();
  const [ref, visible] = useReveal();

  return (
    <section className="py-28 bg-white dark:bg-black">

      <div className="max-w-6xl mx-auto px-4">

        {/* header */}
        <div
          ref={ref}
          className={`mb-16 text-center lg:text-left transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >

          <span className="text-xs tracking-widest text-green-400 font-semibold">
            HOW WE WORK
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white">
            Domain workflows,<br className="hidden sm:block" />
            explained.
          </h2>

        </div>

        {workflowData.map((wf, i) => (
          <WorkflowBlock key={wf.n} wf={wf} index={i} />
        ))}

      </div>

    </section>
  );
}