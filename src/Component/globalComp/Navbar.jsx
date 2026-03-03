

// import { useState } from "react";
// import { Link } from "react-router-dom";

// import logoLight from "../../assets/logo_light.svg";
// import logoDark from "../../assets/logo_dark.svg";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState(false);

//   const navLink =
//     "relative inline-block w-fit text-black dark:text-white font-medium transition duration-300 hover:scale-[1.05] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full";

//   const handleClick = () => {
//     setActive(true);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setTimeout(() => setActive(false), 700);
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-white/10 shadow-sm backdrop-blur">

//       <nav className="relative max-w-7xl mx-auto px-4">

//         {/* TOP BAR */}
//         <div className="flex justify-between items-center h-16">

//           {/* LOGO */}
//           <Link
//   to="/"
//   className="flex items-center gap-3 group transition"
// >
//   <img
//     src={logoLight}
//     alt="KnytXStudio"
//     className="h-9 dark:hidden group-hover:scale-105 transition"
//   />

//   <img
//     src={logoDark}
//     alt="KnytXStudio"
//     className="h-9 hidden dark:block group-hover:scale-105 transition"
//   />

//   <span className="text-lg sm:text-xl font-bold text-black dark:text-white group-hover:opacity-80 transition">
//     Knyt<span className="text-green-400">X</span>Studio
//   </span>
// </Link>

//           {/* DESKTOP MENU */}
//           <div className="hidden md:flex items-center gap-8">

//             <Link to="/" className={navLink}>Home</Link>

//             <Link to="/services" className={navLink}>Services</Link>

//             <Link to="/portfolio" className={navLink}>Portfolio</Link>

//             <Link to="/about" className={navLink}>About</Link>

//             <Link to="/contact" className={navLink}>
//               Contact
//             </Link>

//           </div>

//           {/* DESKTOP BUTTON */}
//           <div className="hidden md:block">
//             <button
//   onClick={handleClick}
//   className={`premium-green-btn ${active ? "active" : ""}`}
// >
//   <span>Get Started</span>
//   <span className="liquid" />
// </button>
//           </div>

//           {/* MOBILE TOGGLE */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1"
//           >
//             <span className={`w-6 h-[2px] bg-black dark:bg-white transition ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
//             <span className={`w-6 h-[2px] bg-black dark:bg-white transition ${open ? "opacity-0" : ""}`} />
//             <span className={`w-6 h-[2px] bg-black dark:bg-white transition ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
//           </button>

//         </div>

//         {/* MOBILE MENU */}
//         <div
//           className={`md:hidden absolute left-0 top-full w-full bg-white dark:bg-black border-b border-gray-200 dark:border-white/10 shadow-lg transform origin-top transition-all duration-300 ease-out ${
//             open
//               ? "scale-y-100 opacity-100"
//               : "scale-y-0 opacity-0 pointer-events-none"
//           }`}
//         >
//           <div className="max-w-7xl mx-auto px-4 flex flex-col items-start">

//             <Link to="/" onClick={() => setOpen(false)} className={`${navLink} py-3`}>Home</Link>

//             <Link to="/services" onClick={() => setOpen(false)} className={`${navLink} py-3`}>Services</Link>

//             <Link to="/portfolio" onClick={() => setOpen(false)} className={`${navLink} py-3`}>Portfolio</Link>

//             <Link to="/about" onClick={() => setOpen(false)} className={`${navLink} py-3`}>About</Link>

//             <Link to="/contact" onClick={() => setOpen(false)} className={`${navLink} py-3`}>
//               Contact
//             </Link>

//             {/* MOBILE BUTTON */}
//             <button
//   onClick={handleClick}
//   className={`premium-green-btn ${active ? "active" : ""}`}
// >
//   <span>Get Started</span>
//   <span className="liquid" />
// </button>

//           </div>
//         </div>

//       </nav>
//     </header>
//   );
// }


import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import logoLight from "../../assets/logo_light.svg";
import logoDark from "../../assets/logo_dark.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setActive(false), 700);
  };

  // 🔥 Active + Hover style
  const navLink = ({ isActive }) =>
    `relative inline-block w-fit font-medium transition duration-300
     ${
       isActive
         ? "text-green-400"
         : "text-black dark:text-white hover:text-green-400"
     }
     
     ${
       isActive
         ? "after:w-full"
         : "after:w-0 hover:after:w-full"
     }`;

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-white/10 shadow-sm backdrop-blur">

      <nav className="relative max-w-7xl mx-auto px-4">

        {/* TOP BAR */}
        <div className="flex justify-between items-center h-16">

          {/* LOGO (Click → Home) */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logoLight} alt="KnytXStudio" className="h-9 dark:hidden" />
            <img src={logoDark} alt="KnytXStudio" className="h-9 hidden dark:block" />
            <span className="text-lg sm:text-xl font-bold text-black dark:text-white">
              Knyt<span className="text-green-400">X</span>Studio
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">

            <NavLink to="/" className={navLink}>
              Home
            </NavLink>

            <NavLink to="/services" className={navLink}>
              Services
            </NavLink>

            <NavLink to="/portfolio" className={navLink}>
              Portfolio
            </NavLink>

            <NavLink to="/about" className={navLink}>
              About
            </NavLink>

            <NavLink to="/blog" className={navLink}>
              Blog
            </NavLink>

            <NavLink to="/contact" className={navLink}>
              Contact
            </NavLink>

          </div>

          {/* DESKTOP PREMIUM GREEN BUTTON */}
          <div className="hidden md:block">
            <button
              onClick={handleClick}
              className={`premium-green-btn ${active ? "active" : ""}`}
            >
              <span>Get Started</span>
              <span className="liquid" />
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1"
          >
            <span className={`w-6 h-[2px] bg-black dark:bg-white transition ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`w-6 h-[2px] bg-black dark:bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`w-6 h-[2px] bg-black dark:bg-white transition ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden absolute left-0 top-full w-full bg-white dark:bg-black border-b border-gray-200 dark:border-white/10 shadow-lg transform origin-top transition-all duration-300 ease-out ${
            open
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-start py-3">

            <NavLink to="/" onClick={() => setOpen(false)} className={`${navLink} py-2`}>
              Home
            </NavLink>

            <NavLink to="/services" onClick={() => setOpen(false)} className={`${navLink} py-2`}>
              Services
            </NavLink>

            <NavLink to="/portfolio" onClick={() => setOpen(false)} className={`${navLink} py-2`}>
              Portfolio
            </NavLink>

            <NavLink to="/about" onClick={() => setOpen(false)} className={`${navLink} py-2`}>
              About
            </NavLink>

            <NavLink to="/blog" onClick={() => setOpen(false)} className={`${navLink} py-2`}>
              Blog
            </NavLink>

            <NavLink to="/contact" onClick={() => setOpen(false)} className={`${navLink} py-2`}>
              Contact
            </NavLink>

            {/* MOBILE PREMIUM GREEN BUTTON */}
            <button
              onClick={handleClick}
              className={`premium-green-btn w-fit self-start my-3 ${active ? "active" : ""}`}
            >
              <span>Get Started</span>
              <span className="liquid" />
            </button>

          </div>
        </div>

      </nav>
    </header>
  );
}