
// import { useState } from "react";
// import { 
//   FaPaperPlane, 
//   FaCheck, 
//   FaEnvelope, 
//   FaClock, 
//   FaPhoneAlt, 
//   FaMapMarkerAlt 
// } from "react-icons/fa";

// export default function Letters({ isOpen, setIsOpen }) {

//   const [isSent, setIsSent] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // ✅ show delivered first
//     setIsSent(true);

//     // ✅ then close AFTER short delay
//     setTimeout(() => {
//       setIsOpen(false);
//     }, 300);

//     // ✅ reset state for next open
//     setTimeout(() => {
//       setIsSent(false);
//     }, 600);
//   };

//   return (
//     <div 
//       onClick={(e) => e.stopPropagation()} // prevent accidental close
//       className={`absolute inset-x-2 sm:inset-x-4 md:inset-x-6 
//       bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 
//       rounded-xl shadow-2xl 
//       p-3 sm:p-4 md:p-5 lg:p-6 
//       transition-all duration-700 ease-in-out flex flex-col
//       ${
//         isOpen 
//           ? 'top-4 sm:top-6 md:top-8 opacity-100 translate-y-0' 
//           : 'top-2 sm:top-3 md:top-4 opacity-0 -translate-y-4 sm:-translate-y-6 md:-translate-y-8 pointer-events-none'
//       }`}
//       style={{ 
//         minHeight: '250px',
//         marginBottom: '80px'
//       }}
//     >

//       <div className="flex flex-col h-full">

//         {/* Header */}
//         <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-2 sm:pb-3">
//           <div className="flex items-center gap-2">
//             <FaPaperPlane className="text-green-400 text-xs sm:text-sm" />
//             <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
//               New Message
//             </span>
//           </div>

//           {/* ✅ Delivered status */}
//           <div className="flex items-center gap-1">
//             {isSent && (
//               <>
//                 <FaCheck className="text-green-400 text-xs" />
//                 <span className="text-[10px] sm:text-xs text-green-400">
//                   Delivered
//                 </span>
//               </>
//             )}
//           </div>
//         </div>
        
//         {/* Body */}
//         <div className="py-3 sm:py-4 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">

//           {/* LEFT */}
//           <div className="space-y-5">
//             <div className="space-y-2">
//               <p className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
//                 Dear Visitor,
//               </p>
//               <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
//                 Share your idea and we’ll turn it into a powerful digital solution.
//               </p>
//             </div>

//             <div className="p-3 sm:p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-gray-800 space-y-3">
//               <h3 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
//                 Contact Information
//               </h3>

//               <div className="space-y-2">
//                 <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                   <FaEnvelope className="text-green-400" />
//                   <span>chanderprakash3012@gmail.com</span>
//                 </div>

//                 <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                   <FaPhoneAlt className="text-green-400" />
//                   <span>+91 9103649539</span>
//                 </div>

//                 <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                   <FaMapMarkerAlt className="text-green-400" />
//                   <span>India • Remote Worldwide</span>
//                 </div>

//                 <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                   <FaClock className="text-green-400" />
//                   <span>Response within 24 hours</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div>
//             <form 
//               onSubmit={handleSubmit}
//               onClick={(e) => e.stopPropagation()}
//               className="space-y-3 sm:space-y-4"
//             >

//               <input type="text" placeholder="Full Name" className="w-full px-3 py-2 rounded-lg border" />
//               <input type="email" placeholder="Email Address" className="w-full px-3 py-2 rounded-lg border" />
//               <input type="text" placeholder="Subject" className="w-full px-3 py-2 rounded-lg border" />

//               <textarea rows="4" placeholder="Your Message..." className="w-full px-3 py-2 rounded-lg border" />

//               <button
//                 type="submit"
//                 className="w-full bg-green-400 hover:bg-green-500 text-black font-medium py-2 rounded-lg"
//               >
//                 Send Message
//               </button>

//             </form>
//           </div>

//         </div>
        
//         {/* Footer */}
//         <div className="border-t border-gray-200 dark:border-gray-800 pt-2 sm:pt-3 flex justify-between items-center">
//           <span className="text-[10px] sm:text-xs text-gray-400">
//             {isOpen ? 'Click envelope to close' : 'Click to open'}
//           </span>

//           <span className="text-xs sm:text-sm font-semibold text-green-400">
//             KnytXStudio
//           </span>
//         </div>

//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import {
  FaPaperPlane,
  FaCheck,
  FaEnvelope,
  FaClock,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function Letters({ isOpen, setIsOpen }) {

  const [isSent, setIsSent] = useState(false);

  const [service, setService] = useState("");
  const [businessSize, setBusinessSize] = useState("");

  const pricing = {
    "WordPress Website": {
      Small: {
        price: "₹8,000",
        timeline: "3 - 5 Days",
      },

      Medium: {
        price: "₹20,000",
        timeline: "7 - 10 Days",
      },

      Enterprise: {
        price: "₹50,000+",
        timeline: "15 - 25 Days",
      },
    },

    "Frontend Website": {
      Small: {
        price: "₹12,000",
        timeline: "5 - 7 Days",
      },

      Medium: {
        price: "₹30,000",
        timeline: "7 - 14 Days",
      },

      Enterprise: {
        price: "₹70,000+",
        timeline: "15 - 30 Days",
      },
    },

    "Backend System": {
      Small: {
        price: "₹15,000",
        timeline: "5 - 10 Days",
      },

      Medium: {
        price: "₹40,000",
        timeline: "10 - 15 Days",
      },

      Enterprise: {
        price: "₹90,000+",
        timeline: "20 - 35 Days",
      },
    },

    "Full Stack Platform": {
      Small: {
        price: "₹25,000",
        timeline: "10 - 15 Days",
      },

      Medium: {
        price: "₹60,000",
        timeline: "15 - 25 Days",
      },

      Enterprise: {
        price: "₹1,50,000+",
        timeline: "30 - 60 Days",
      },
    },

    "UI/UX Design": {
      Small: {
        price: "₹6,000",
        timeline: "2 - 5 Days",
      },

      Medium: {
        price: "₹15,000",
        timeline: "5 - 8 Days",
      },

      Enterprise: {
        price: "₹40,000+",
        timeline: "10 - 20 Days",
      },
    },

    "Blockchain Application": {
      Small: {
        price: "₹35,000",
        timeline: "10 - 20 Days",
      },

      Medium: {
        price: "₹80,000",
        timeline: "20 - 35 Days",
      },

      Enterprise: {
        price: "₹2,00,000+",
        timeline: "30 - 60 Days",
      },
    },

    "Mobile App": {
      Small: {
        price: "₹20,000",
        timeline: "10 - 15 Days",
      },

      Medium: {
        price: "₹75,000",
        timeline: "20 - 40 Days",
      },

      Enterprise: {
        price: "₹2,50,000+",
        timeline: "45 - 90 Days",
      },
    },

    "Digital Marketing": {
      Small: {
        price: "₹7,000",
        timeline: "1 Month",
      },

      Medium: {
        price: "₹25,000",
        timeline: "3 Months",
      },

      Enterprise: {
        price: "₹60,000+",
        timeline: "6+ Months",
      },
    },

    "Custom Solution": {
      Small: {
        price: "Custom Quote",
        timeline: "Custom Timeline",
      },

      Medium: {
        price: "Custom Quote",
        timeline: "Custom Timeline",
      },

      Enterprise: {
        price: "Custom Quote",
        timeline: "Custom Timeline",
      },
    },
  };

  const suggestedData =
    pricing?.[service]?.[businessSize] || {
      price: "Select options",
      timeline: "--",
    };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSent(true);

    setTimeout(() => {
      setIsOpen(false);
    }, 300);

    setTimeout(() => {
      setIsSent(false);
    }, 600);
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`absolute inset-x-1 sm:inset-x-4 md:inset-x-6
      bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800
      rounded-xl shadow-2xl
      p-3 sm:p-4 md:p-5 lg:p-6
      max-h-[calc(100vh-7rem)] lg:max-h-none overflow-y-auto lg:overflow-visible
      transition-all duration-700 ease-in-out flex flex-col
      ${
        isOpen
          ? "top-4 sm:top-6 md:top-8 opacity-100 translate-y-0"
          : "top-2 sm:top-3 md:top-4 opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >

      <div className="flex flex-col h-full">

        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-2 sm:pb-3">

          <div className="flex items-center gap-2">

            <FaPaperPlane className="text-green-400 text-sm" />

            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              New Message
            </span>

          </div>

          {isSent && (
            <div className="flex items-center gap-1">

              <FaCheck className="text-green-400 text-xs" />

              <span className="text-xs text-green-400">
                Delivered
              </span>

            </div>
          )}

        </div>

        {/* BODY */}
        <div className="py-3 sm:py-4 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

          {/* LEFT */}
          <div className="space-y-3 sm:space-y-5">

            <div>

              <p className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
                Dear Visitor,
              </p>

              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Share your project requirements and get
                instant pricing and timeline estimates.
              </p>

            </div>

            {/* CONTACT INFO */}
            <div className="p-3 sm:p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-gray-800 space-y-3 sm:space-y-4">

              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Contact Information
              </h3>

              <div className="space-y-2 sm:space-y-3">

                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">

                  <FaEnvelope className="text-green-400" />

                  <span>
                    chanderprakash3012@gmail.com
                  </span>

                </div>

                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">

                  <FaPhoneAlt className="text-green-400" />

                  <span>
                    +91 9103649539
                  </span>

                </div>

                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">

                  <FaMapMarkerAlt className="text-green-400" />

                  <span>
                    India • Remote Worldwide
                  </span>

                </div>

                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">

                  <FaClock className="text-green-400" />

                  <span>
                    Response within 24+ hours
                  </span>

                </div>

              </div>

            </div>

            {/* AUTO ESTIMATE */}
            <div className="p-3 sm:p-4 rounded-xl border border-green-500/20 bg-green-500/10 space-y-3 sm:space-y-4">

              <div>

                <p className="text-sm text-green-500 font-medium">
                  Suggested Price
                </p>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-black dark:text-white mt-1 sm:mt-2">
                  {suggestedData.price}
                </h3>

              </div>

              <div className="pt-2 sm:pt-3 border-t border-green-500/20">

                <p className="text-sm text-green-500 font-medium">
                  Estimated Timeline
                </p>

                <h4 className="text-lg sm:text-xl font-bold text-black dark:text-white mt-1 sm:mt-2">
                  {suggestedData.timeline}
                </h4>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div>

           <form
  onSubmit={handleSubmit}
  className="grid grid-cols-2 gap-3 sm:gap-4"
>

  {/* CLIENT NAME */}
  <input
    type="text"
    placeholder="Full Name"
    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 text-black dark:text-white outline-none text-sm"
  />

  {/* EMAIL */}
  <input
    type="email"
    placeholder="Email Address"
    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 text-black dark:text-white outline-none text-sm"
  />

  {/* PHONE */}
  <input
    type="text"
    placeholder="Phone Number"
    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 text-black dark:text-white outline-none text-sm"
  />

  {/* WEBSITE */}
  <input
    type="text"
    placeholder="Website / Social Link"
    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 text-black dark:text-white outline-none text-sm"
  />

  {/* SERVICE */}
  <select
    value={service}
    onChange={(e) => setService(e.target.value)}
    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 text-sm"
  >

    <option
      value=""
      className="bg-white text-black dark:bg-gray-900 dark:text-white"
    >
      Select Service
    </option>

    {Object.keys(pricing).map((item) => (
      <option
        key={item}
        value={item}
        className="bg-white text-black dark:bg-gray-900 dark:text-white"
      >
        {item}
      </option>
    ))}

  </select>

  {/* BUSINESS SIZE */}
  <select
    value={businessSize}
    onChange={(e) => setBusinessSize(e.target.value)}
    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 text-sm"
  >

    <option
      value=""
      className="bg-white text-black dark:bg-gray-900 dark:text-white"
    >
      Business Size
    </option>

    <option
      value="Small"
      className="bg-white text-black dark:bg-gray-900 dark:text-white"
    >
      Small Business
    </option>

    <option
      value="Medium"
      className="bg-white text-black dark:bg-gray-900 dark:text-white"
    >
      Medium Business
    </option>

    <option
      value="Enterprise"
      className="bg-white text-black dark:bg-gray-900 dark:text-white"
    >
      Enterprise
    </option>

  </select>

  {/* OFFERED PRICE */}
  <input
    type="text"
    placeholder="Your Offered Price"
    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 text-black dark:text-white outline-none text-sm"
  />

  {/* CLIENT TIMELINE */}
  <input
    type="text"
    placeholder="Preferred Timeline"
    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 text-black dark:text-white outline-none text-sm"
  />

  {/* MESSAGE */}
  <textarea
    rows="4"
    placeholder="Describe your project requirements..."
    className="col-span-2 w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 text-black dark:text-white outline-none text-sm resize-none"
  />

  {/* SUBMIT */}
  <button
    type="submit"
    className="col-span-2 w-full bg-green-400 hover:bg-green-500 text-black font-medium py-2.5 sm:py-3 rounded-lg transition-all duration-300"
  >
    Send Message
  </button>

</form>

          </div>

        </div>

      </div>

    </div>
  );
}
