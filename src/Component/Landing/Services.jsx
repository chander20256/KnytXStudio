// import {
//   FaLaptopCode,
//   FaMobileAlt,
//   FaPalette,
//   FaCogs,
//   FaLightbulb,
//   FaShieldAlt,
// } from "react-icons/fa";

// import { motion } from "framer-motion";

// export default function Services() {

//   const services = [
//     {
//       title: "Web Development",
//       desc: "Fast, scalable, and modern websites built with cutting-edge technologies.",
//       icon: <FaLaptopCode />,
//     },

//     {
//       title: "App Development",
//       desc: "High-performance mobile and web apps designed for real-world impact.",
//       icon: <FaMobileAlt />,
//     },

//     {
//       title: "UI/UX Design",
//       desc: "Beautiful, intuitive interfaces that users love to interact with.",
//       icon: <FaPalette />,
//     },

//     {
//       title: "Software Solutions",
//       desc: "Custom systems tailored to solve complex business problems.",
//       icon: <FaCogs />,
//     },

//     {
//       title: "IT Consulting",
//       desc: "Expert guidance to choose the right technology for your growth.",
//       icon: <FaLightbulb />,
//     },

//     {
//       title: "Support & Security",
//       desc: "Reliable maintenance and protection for your digital assets.",
//       icon: <FaShieldAlt />,
//     },
//   ];

//   return (
//     <section
//       id="services"
//       className="relative overflow-hidden bg-white dark:bg-[#030304] py-20 lg:py-28 transition-colors"
//     >

//       {/* GRID BACKGROUND */}
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundSize: "50px 50px",
//           backgroundImage: `
//             linear-gradient(to right, rgba(34,197,94,0.08) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(34,197,94,0.08) 1px, transparent 1px)
//           `,
//           maskImage:
//             "radial-gradient(circle at center, black 40%, transparent 100%)",
//         }}
//       />

//       <div className="relative z-10 max-w-7xl mx-auto px-4">

//         {/* HERO HEADER */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

//           {/* LEFT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="max-w-4xl"
//           >

//             {/* BADGE */}
//             <motion.div
//               animate={{
//                 y: [0, -4, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//               }}
//               className="
//                 inline-flex
//                 items-center
//                 gap-3
//                 rounded-full
//                 border
//                 border-black/10
//                 dark:border-white/10
//                 px-5
//                 py-2
//                 backdrop-blur-sm
//               "
//             >

//               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

//               <span className="text-sm font-mono uppercase tracking-widest text-black dark:text-white/70">
//                 Our Expertise
//               </span>

//             </motion.div>

//             {/* TITLE */}
//             <h2 className="mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] text-black dark:text-white">

//               Building

//               <span className="block mt-8">
//                 Digital
//               </span>

//               <motion.span
//                 animate={{
//                   opacity: [1, 0.7, 1],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                 }}
//                 className="block mt-8 text-green-500"
//               >
//                 Experiences
//               </motion.span>

//             </h2>

//             {/* DESCRIPTION */}
//             <p className="mt-10 max-w-2xl text-base sm:text-lg text-gray-700 dark:text-[#94A3B8] leading-relaxed">

//               We design and build digital products that deliver
//               real business value.

//             </p>

//           </motion.div>

//           {/* RIGHT ILLUSTRATION */}
//           {/* RIGHT ILLUSTRATION */}
// <motion.div
//   initial={{ opacity: 0, scale: 0.9 }}
//   whileInView={{ opacity: 1, scale: 1 }}
//   transition={{ duration: 0.7 }}
//   viewport={{ once: false }}
//   className="relative hidden lg:flex items-center justify-center min-h-[550px]"
// >

//   {/* SOFT GLOW */}
//   <motion.div
//     animate={{
//       scale: [1, 1.1, 1],
//       opacity: [0.4, 0.7, 0.4],
//     }}
//     transition={{
//       duration: 6,
//       repeat: Infinity,
//       ease: "easeInOut",
//     }}
//     className="absolute w-[450px] h-[450px] rounded-full bg-green-500/5 blur-[120px]"
//   />

//   {/* MAIN ORBIT */}
//   <motion.div
//     animate={{ rotate: 360 }}
//     transition={{
//       duration: 30,
//       repeat: Infinity,
//       ease: "linear",
//     }}
//     className="
//       absolute
//       w-[420px]
//       h-[420px]
//       rounded-full
//       border
//       border-green-500/10
//     "
//   >

//     {[
//       {
//         icon: <FaLaptopCode />,
//         label: "Web",
//         position: "top-[-30px] left-1/2 -translate-x-1/2",
//       },

//       {
//         icon: <FaMobileAlt />,
//         label: "Apps",
//         position: "top-[18%] right-[-30px]",
//       },

//       {
//         icon: <FaPalette />,
//         label: "UI/UX",
//         position: "bottom-[18%] right-[-30px]",
//       },

//       {
//         icon: <FaCogs />,
//         label: "Software",
//         position: "bottom-[-30px] left-1/2 -translate-x-1/2",
//       },

//       {
//         icon: <FaLightbulb />,
//         label: "Consult",
//         position: "bottom-[18%] left-[-30px]",
//       },

//       {
//         icon: <FaShieldAlt />,
//         label: "Security",
//         position: "top-[18%] left-[-30px]",
//       },
//     ].map((item, i) => (

//       <motion.div
//         key={i}
//         animate={{
//           rotate: -360,
//           y: [0, -8, 0],
//         }}
//         transition={{
//           rotate: {
//             duration: 30,
//             repeat: Infinity,
//             ease: "linear",
//           },

//           y: {
//             duration: 3 + i,
//             repeat: Infinity,
//             ease: "easeInOut",
//           },
//         }}
//         className={`
//           absolute
//           ${item.position}
//           w-20
//           h-20
//           rounded-2xl
//           border
//           border-white/10
//           bg-white/[0.03]
//           backdrop-blur-xl
//           flex
//           flex-col
//           items-center
//           justify-center
//           gap-1
//           text-green-500/60
//         `}
//       >

//         <motion.div
//           animate={{
//             scale: [1, 1.08, 1],
//           }}
//           transition={{
//             duration: 1.5,
//             repeat: Infinity,
//           }}
//           className="text-2xl"
//         >

//           {item.icon}

//         </motion.div>

//         <span className="text-[10px] uppercase tracking-wider text-white/50">
//           {item.label}
//         </span>

//       </motion.div>

//     ))}

//   </motion.div>

//   {/* SECOND RING */}
//   <motion.div
//     animate={{ rotate: -360 }}
//     transition={{
//       duration: 60,
//       repeat: Infinity,
//       ease: "linear",
//     }}
//     className="
//       absolute
//       w-[280px]
//       h-[280px]
//       rounded-full
//       border
//       border-white/10
//     "
//   />

//   {/* CENTER CORE */}
//   <motion.div
//     animate={{
//       y: [0, -12, 0],
//       scale: [1, 1.02, 1],
//     }}
//     transition={{
//       duration: 5,
//       repeat: Infinity,
//       ease: "easeInOut",
//     }}
//     className="
//       relative
//       w-[240px]
//       h-[240px]
//       rounded-[40px]
//       border
//       border-white/10
//       bg-white/[0.03]
//       backdrop-blur-xl
//       flex
//       flex-col
//       items-center
//       justify-center
//       overflow-hidden
//     "
//   >

//     {/* GRID */}
//     <motion.div
//       animate={{
//         backgroundPosition: ["0px 0px", "30px 30px"],
//       }}
//       transition={{
//         duration: 8,
//         repeat: Infinity,
//         ease: "linear",
//       }}
//       className="absolute inset-0 opacity-[0.03]"
//       style={{
//         backgroundSize: "30px 30px",
//         backgroundImage: `
//           linear-gradient(to right, rgba(34,197,94,0.08) 1px, transparent 1px),
//           linear-gradient(to bottom, rgba(34,197,94,0.08) 1px, transparent 1px)
//         `,
//       }}
//     />

//     {/* CENTER TEXT */}
//     <motion.h3
//       animate={{
//         opacity: [1, 0.6, 1],
//         letterSpacing: ["0.05em", "0.15em", "0.05em"],
//       }}
//       transition={{
//         duration: 4,
//         repeat: Infinity,
//       }}
//       className="
//         relative
//         z-10
//         text-3xl
//         font-black
//         text-white
//       "
//     >

//       SERVICES

//     </motion.h3>

//     {/* LINE */}
//     <motion.div
//       animate={{
//         width: [60, 110, 60],
//         opacity: [0.4, 1, 0.4],
//       }}
//       transition={{
//         duration: 3,
//         repeat: Infinity,
//       }}
//       className="mt-5 h-[2px] bg-green-500/40 rounded-full"
//     />

//     {/* SUBTEXT */}
//     <motion.p
//       animate={{
//         opacity: [0.3, 0.7, 0.3],
//       }}
//       transition={{
//         duration: 4,
//         repeat: Infinity,
//       }}
//       className="
//         relative
//         z-10
//         mt-5
//         text-sm
//         text-white/40
//         uppercase
//         tracking-[0.3em]
//       "
//     >

//       KnytXStudio

//     </motion.p>

//   </motion.div>

// </motion.div>

//         </div>

//         {/* SERVICES GRID */}
//         <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

//           {services.map((service, i) => (

//             <motion.div
//               key={i}
//               initial={{
//                 opacity: 0,
//                 y: 40,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.4,
//                 delay: i * 0.08,
//               }}
//               viewport={{ once: true }}
//               whileHover={{
//                 y: -6,
//               }}
//               className="
//                 group
//                 relative
//                 overflow-hidden
//                 rounded-2xl
//                 border
//                 border-black/10
//                 dark:border-white/10
//                 bg-white/40
//                 dark:bg-white/[0.02]
//                 backdrop-blur-xl
//                 p-7
//                 transition-all
//                 duration-300
//                 hover:border-green-500/20
//                 hover:shadow-[0_0_30px_-12px_rgba(34,197,94,0.25)]
//               "
//             >

//               {/* CORNER ACCENTS */}
//               <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-green-500/20" />

//               <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-green-500/20" />

//               {/* WATERMARK ICON */}
//               <motion.div
//                 animate={{
//                   rotate: [0, 5, 0],
//                 }}
//                 transition={{
//                   duration: 8,
//                   repeat: Infinity,
//                 }}
//                 className="
//                   absolute
//                   -right-8
//                   -bottom-8
//                   text-[140px]
//                   text-green-500/[0.03]
//                 "
//               >

//                 {service.icon}

//               </motion.div>

//               {/* ICON */}
//               <motion.div
//                 whileHover={{
//                   scale: 1.08,
//                   rotate: 8,
//                 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 300,
//                 }}
//                 className="
//                   relative
//                   w-16
//                   h-16
//                   rounded-xl
//                   border
//                   border-black/10
//                   dark:border-white/10
//                   flex
//                   items-center
//                   justify-center
//                   text-2xl
//                   text-green-500
//                   backdrop-blur-sm
//                 "
//               >

//                 {/* LIVE DOT */}
//                 <motion.div
//                   animate={{
//                     scale: [1, 1.4, 1],
//                     opacity: [1, 0.5, 1],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                   }}
//                   className="
//                     absolute
//                     -top-1
//                     -right-1
//                     w-3
//                     h-3
//                     rounded-full
//                     bg-green-500
//                   "
//                 />

//                 {service.icon}

//               </motion.div>

//               {/* CONTENT */}
//               <div className="relative z-10 mt-8">

//                 <h3 className="text-2xl font-bold text-black dark:text-white">

//                   {service.title}

//                 </h3>

//                 <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-[#94A3B8]">

//                   {service.desc}

//                 </p>

//               </div>

//               {/* FOOTER */}
//               <div className="relative z-10 mt-8 pt-5 border-t border-black/10 dark:border-white/10 flex items-center justify-between">

//                 <motion.div
//                   whileHover={{
//                     width: 80,
//                   }}
//                   className="w-10 h-[2px] bg-gradient-to-r from-green-500/60 to-transparent transition-all duration-300"
//                 />

//                 <span className="font-mono text-xs uppercase tracking-widest text-black dark:text-white/40">

//                   ACTIVE

//                 </span>

//               </div>

//             </motion.div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }

import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaCogs,
  FaLightbulb,
  FaShieldAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Services() {

  const services = [
    {
      title: "Web Development",
      desc: "Fast, scalable, and modern websites built with cutting-edge technologies.",
      icon: <FaLaptopCode />,
    },

    {
      title: "App Development",
      desc: "High-performance mobile and web apps designed for real-world impact.",
      icon: <FaMobileAlt />,
    },

    {
      title: "UI/UX Design",
      desc: "Beautiful, intuitive interfaces that users love to interact with.",
      icon: <FaPalette />,
    },

    {
      title: "Software Solutions",
      desc: "Custom systems tailored to solve complex business problems.",
      icon: <FaCogs />,
    },

    {
      title: "IT Consulting",
      desc: "Expert guidance to choose the right technology for your growth.",
      icon: <FaLightbulb />,
    },

    {
      title: "Support & Security",
      desc: "Reliable maintenance and protection for your digital assets.",
      icon: <FaShieldAlt />,
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white dark:bg-[#030304] py-16 sm:py-20 lg:py-28 transition-colors"
    >

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundSize: "50px 50px",
          backgroundImage: `
            linear-gradient(to right, rgba(34,197,94,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34,197,94,0.08) 1px, transparent 1px)
          `,
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO HEADER */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-14 items-start">

          {/* LEFT CONTENT - Always visible on all screens */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:max-w-4xl"
          >

            {/* BADGE */}
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-black/10
                dark:border-white/10
                px-4
                sm:px-5
                py-1.5
                sm:py-2
                backdrop-blur-sm
              "
            >

              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />

              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-black dark:text-white/70">
                Our Expertise
              </span>

            </motion.div>

            {/* TITLE */}
            <h2 className="mt-8 sm:mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] sm:leading-[0.95] text-black dark:text-white">

              Building

              <span className="block mt-4 sm:mt-6 md:mt-8">
                Digital
              </span>

              <motion.span
                animate={{
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="block mt-4 sm:mt-6 md:mt-8 text-green-500"
              >
                Experiences
              </motion.span>

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 sm:mt-10 max-w-2xl text-sm sm:text-base md:text-lg text-gray-700 dark:text-[#94A3B8] leading-relaxed">

              We design and build digital products that deliver
              real business value.

            </p>

          </motion.div>

          {/* RIGHT ILLUSTRATION - Hidden on mobile, visible only on large screens */}
          <div className="hidden lg:flex w-full justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
              className="relative flex items-center justify-center min-h-[450px] xl:min-h-[550px] scale-90 xl:scale-100 w-full"
            >

              {/* SOFT GLOW */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-[350px] lg:w-[450px] h-[350px] lg:h-[450px] rounded-full bg-green-500/5 blur-[120px]"
              />

              {/* MAIN ORBIT */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  w-[350px]
                  lg:w-[420px]
                  h-[350px]
                  lg:h-[420px]
                  rounded-full
                  border
                  border-green-500/10
                "
              >

                {[
                  {
                    icon: <FaLaptopCode />,
                    label: "Web",
                    position: "top-[-25px] lg:top-[-30px] left-1/2 -translate-x-1/2",
                  },

                  {
                    icon: <FaMobileAlt />,
                    label: "Apps",
                    position: "top-[15%] lg:top-[18%] right-[-25px] lg:right-[-30px]",
                  },

                  {
                    icon: <FaPalette />,
                    label: "UI/UX",
                    position: "bottom-[15%] lg:bottom-[18%] right-[-25px] lg:right-[-30px]",
                  },

                  {
                    icon: <FaCogs />,
                    label: "Software",
                    position: "bottom-[-25px] lg:bottom-[-30px] left-1/2 -translate-x-1/2",
                  },

                  {
                    icon: <FaLightbulb />,
                    label: "Consult",
                    position: "bottom-[15%] lg:bottom-[18%] left-[-25px] lg:left-[-30px]",
                  },

                  {
                    icon: <FaShieldAlt />,
                    label: "Security",
                    position: "top-[15%] lg:top-[18%] left-[-25px] lg:left-[-30px]",
                  },
                ].map((item, i) => (

                  <motion.div
                    key={i}
                    animate={{
                      rotate: -360,
                      y: [0, -8, 0],
                    }}
                    transition={{
                      rotate: {
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      },

                      y: {
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className={`
                      absolute
                      ${item.position}
                      w-16
                      lg:w-20
                      h-16
                      lg:h-20
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      backdrop-blur-xl
                      flex
                      flex-col
                      items-center
                      justify-center
                      gap-0.5
                      lg:gap-1
                      text-green-500/60
                    `}
                  >

                    <motion.div
                      animate={{
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                      className="text-xl lg:text-2xl"
                    >

                      {item.icon}

                    </motion.div>

                    <span className="text-[8px] lg:text-[10px] uppercase tracking-wider text-white/50">
                      {item.label}
                    </span>

                  </motion.div>

                ))}

              </motion.div>

              {/* SECOND RING */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  w-[240px]
                  lg:w-[280px]
                  h-[240px]
                  lg:h-[280px]
                  rounded-full
                  border
                  border-white/10
                "
              />

              {/* CENTER CORE */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  w-[200px]
                  lg:w-[240px]
                  h-[200px]
                  lg:h-[240px]
                  rounded-[30px]
                  lg:rounded-[40px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  flex
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                "
              >

                {/* GRID */}
                <motion.div
                  animate={{
                    backgroundPosition: ["0px 0px", "30px 30px"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundSize: "30px 30px",
                    backgroundImage: `
                      linear-gradient(to right, rgba(34,197,94,0.08) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(34,197,94,0.08) 1px, transparent 1px)
                    `,
                  }}
                />

                {/* CENTER TEXT */}
                <motion.h3
                  animate={{
                    opacity: [1, 0.6, 1],
                    letterSpacing: ["0.05em", "0.15em", "0.05em"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="
                    relative
                    z-10
                    text-2xl
                    lg:text-3xl
                    font-black
                    text-white
                  "
                >

                  SERVICES

                </motion.h3>

                {/* LINE */}
                <motion.div
                  animate={{
                    width: [50, 90, 50],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="mt-4 lg:mt-5 h-[2px] bg-green-500/40 rounded-full"
                />

                {/* SUBTEXT */}
                <motion.p
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="
                    relative
                    z-10
                    mt-4
                    lg:mt-5
                    text-xs
                    lg:text-sm
                    text-white/40
                    uppercase
                    tracking-[0.2em]
                    lg:tracking-[0.3em]
                  "
                >

                  KnytXStudio

                </motion.p>

              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* SERVICES GRID */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

          {services.map((service, i) => (

            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-black/10
                dark:border-white/10
                bg-white/40
                dark:bg-white/[0.02]
                backdrop-blur-xl
                p-5
                sm:p-7
                transition-all
                duration-300
                hover:border-green-500/20
                hover:shadow-[0_0_30px_-12px_rgba(34,197,94,0.25)]
              "
            >

              {/* CORNER ACCENTS */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-t border-l border-green-500/20" />

              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-b border-r border-green-500/20" />

              {/* WATERMARK ICON */}
              <motion.div
                animate={{
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  -right-6
                  -bottom-6
                  sm:-right-8
                  sm:-bottom-8
                  text-[100px]
                  sm:text-[140px]
                  text-green-500/[0.03]
                "
              >

                {service.icon}

              </motion.div>

              {/* ICON */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="
                  relative
                  w-14
                  sm:w-16
                  h-14
                  sm:h-16
                  rounded-xl
                  border
                  border-black/10
                  dark:border-white/10
                  flex
                  items-center
                  justify-center
                  text-xl
                  sm:text-2xl
                  text-green-500
                  backdrop-blur-sm
                "
              >

                {/* LIVE DOT */}
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    -top-1
                    -right-1
                    w-2.5
                    sm:w-3
                    h-2.5
                    sm:h-3
                    rounded-full
                    bg-green-500
                  "
                />

                {service.icon}

              </motion.div>

              {/* CONTENT */}
              <div className="relative z-10 mt-6 sm:mt-8">

                <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">

                  {service.title}

                </h3>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-[#94A3B8]">

                  {service.desc}

                </p>

              </div>

              {/* FOOTER */}
              <div className="relative z-10 mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-black/10 dark:border-white/10 flex items-center justify-between">

                <motion.div
                  whileHover={{
                    width: 80,
                  }}
                  className="w-8 sm:w-10 h-[2px] bg-gradient-to-r from-green-500/60 to-transparent transition-all duration-300"
                />

                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-black dark:text-white/40">

                  ACTIVE

                </span>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}