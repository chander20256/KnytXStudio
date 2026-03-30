// import { FaPaperPlane, FaCheck, FaEnvelope, FaClock } from "react-icons/fa";

// export default function Letter({ isOpen }) {
//   return (
//     <div 
//       className={`absolute left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg shadow-2xl p-3 sm:p-4 md:p-5 lg:p-6 transition-all duration-700 ease-in-out ${
//         isOpen 
//           ? 'top-4 sm:top-6 md:top-8 opacity-100 translate-y-0' 
//           : 'top-2 sm:top-3 md:top-4 opacity-0 -translate-y-4 sm:-translate-y-6 md:-translate-y-8 pointer-events-none'
//       }`}
//       style={{ height: 'calc(100% - 2rem)' }}
//     >
//       {/* Letter Content */}
//       <div className="h-full flex flex-col">
        
//         {/* Letter Header */}
//         <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-2 sm:pb-3">
//           <div className="flex items-center gap-1 sm:gap-2">
//             <FaPaperPlane className="text-green-400 text-xs sm:text-sm" />
//             <span className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400">
//               New Message
//             </span>
//           </div>
//           <div className="flex items-center gap-0.5 sm:gap-1">
//             <FaCheck className="text-green-400 text-[10px] sm:text-xs" />
//             <span className="text-[8px] sm:text-xs text-gray-400">Delivered</span>
//           </div>
//         </div>
        
//         {/* Letter Body */}
//         <div className="flex-1 py-2 sm:py-3 md:py-4 space-y-2 sm:space-y-3">
//           <div>
//             <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Dear Visitor,</p>
//             <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5 sm:mt-1">
//               Thank you for reaching out to KnytXStudio. We're excited to hear about your project!
//             </p>
//           </div>
          
          
          
//           {/* Contact Preview */}
//           <div className="mt-2 sm:mt-3 md:mt-4 p-2 sm:p-3 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-gray-800">
//             <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
//               <FaEnvelope className="text-green-400 text-xs sm:text-sm" />
//               <span>contact@knytxstudio.com</span>
//             </div>
//             <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5 sm:mt-1">
//               <FaClock className="text-green-400 text-xs sm:text-sm" />
//               <span>Response within 24 hours</span>
//             </div>
//           </div>
//         </div>
        
//         {/* Letter Footer */}
//         <div className="border-t border-gray-200 dark:border-gray-800 pt-2 sm:pt-3 flex justify-between items-center">
//           <span className="text-[8px] sm:text-xs text-gray-400">
//             {isOpen ? 'Click envelope to close' : 'Click to open'}
//           </span>
//           <span className="text-[8px] sm:text-xs font-medium text-green-400">
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ show delivered first
    setIsSent(true);

    // ✅ then close AFTER short delay
    setTimeout(() => {
      setIsOpen(false);
    }, 300);

    // ✅ reset state for next open
    setTimeout(() => {
      setIsSent(false);
    }, 600);
  };

  return (
    <div 
      onClick={(e) => e.stopPropagation()} // prevent accidental close
      className={`absolute inset-x-2 sm:inset-x-4 md:inset-x-6 
      bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 
      rounded-xl shadow-2xl 
      p-3 sm:p-4 md:p-5 lg:p-6 
      transition-all duration-700 ease-in-out flex flex-col
      ${
        isOpen 
          ? 'top-4 sm:top-6 md:top-8 opacity-100 translate-y-0' 
          : 'top-2 sm:top-3 md:top-4 opacity-0 -translate-y-4 sm:-translate-y-6 md:-translate-y-8 pointer-events-none'
      }`}
      style={{ 
        minHeight: '250px',
        marginBottom: '80px'
      }}
    >

      <div className="flex flex-col h-full">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-2 sm:pb-3">
          <div className="flex items-center gap-2">
            <FaPaperPlane className="text-green-400 text-xs sm:text-sm" />
            <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
              New Message
            </span>
          </div>

          {/* ✅ Delivered status */}
          <div className="flex items-center gap-1">
            {isSent && (
              <>
                <FaCheck className="text-green-400 text-xs" />
                <span className="text-[10px] sm:text-xs text-green-400">
                  Delivered
                </span>
              </>
            )}
          </div>
        </div>
        
        {/* Body */}
        <div className="py-3 sm:py-4 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">

          {/* LEFT */}
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
                Dear Visitor,
              </p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Share your idea and we’ll turn it into a powerful digital solution.
              </p>
            </div>

            <div className="p-3 sm:p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-gray-800 space-y-3">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                Contact Information
              </h3>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  <FaEnvelope className="text-green-400" />
                  <span>contact@knytxstudio.com</span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  <FaPhoneAlt className="text-green-400" />
                  <span>+91 00000 00000</span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  <FaMapMarkerAlt className="text-green-400" />
                  <span>India • Remote Worldwide</span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  <FaClock className="text-green-400" />
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <form 
              onSubmit={handleSubmit}
              onClick={(e) => e.stopPropagation()}
              className="space-y-3 sm:space-y-4"
            >

              <input type="text" placeholder="Full Name" className="w-full px-3 py-2 rounded-lg border" />
              <input type="email" placeholder="Email Address" className="w-full px-3 py-2 rounded-lg border" />
              <input type="text" placeholder="Subject" className="w-full px-3 py-2 rounded-lg border" />

              <textarea rows="4" placeholder="Your Message..." className="w-full px-3 py-2 rounded-lg border" />

              <button
                type="submit"
                className="w-full bg-green-400 hover:bg-green-500 text-black font-medium py-2 rounded-lg"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
        
        {/* Footer */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-2 sm:pt-3 flex justify-between items-center">
          <span className="text-[10px] sm:text-xs text-gray-400">
            {isOpen ? 'Click envelope to close' : 'Click to open'}
          </span>

          <span className="text-xs sm:text-sm font-semibold text-green-400">
            KnytXStudio
          </span>
        </div>

      </div>
    </div>
  );
}