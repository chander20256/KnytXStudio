import { useState } from "react";
import { FaEnvelope, FaClock } from "react-icons/fa";
import Letter from "./Letters";

export default function Envelope({ isOpen: controlledOpen, setIsOpen: setControlledOpen }) {
    const [internalOpen, setInternalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setIsOpen = setControlledOpen || setInternalOpen;

  return (
    <div className="flex flex-col items-center justify-center md:min-h-screen dark:bg-black transition-colors px-4 sm:px-6 mt-20 md:mt-0">
      <div 
        className="relative w-[90vw] max-w-[90vw] xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-4xl aspect-[3/2] cursor-pointer group perspective-1000"
        onClick={(e) => {
  e.stopPropagation(); 
  if (!isOpen) setIsOpen(true);
}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-xl">
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent rounded-b-lg" />
          </div>
          <div className="absolute inset-0 bg-white dark:bg-black border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-repeat" 
                   style={{ 
                     backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 2px, transparent 2px, transparent 8px)'
                   }} 
              />
            </div>
            <div 
              className={`absolute top-0 left-0 w-full origin-top transition-transform duration-700 ease-in-out z-20`}
              style={{
                transformStyle: 'preserve-3d',
                transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
              }}
            >
              <div 
                className="relative w-full h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 bg-gray-50 dark:bg-white/5 border-b-2 border-gray-200 dark:border-gray-700 rounded-t-lg"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100/50 dark:to-white/5" />
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400" />
              </div>
              
              <div 
                className="absolute top-0 left-0 w-full h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 bg-gray-100 dark:bg-gray-800 rounded-t-lg border-b-2 border-gray-200 dark:border-gray-700"
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateX(180deg)',
                }}
              >
                <div className="absolute inset-1 xs:inset-2 sm:inset-3 md:inset-4 border border-dashed border-gray-300 dark:border-gray-600 rounded" />
                <div className="absolute top-2 xs:top-3 sm:top-4 md:top-6 left-2 xs:left-3 sm:left-4 md:left-6 w-1.5 xs:w-2 sm:w-3 md:w-4 h-1.5 xs:h-2 sm:h-3 md:h-4 bg-green-400/20 rounded-full" />
                <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 md:bottom-6 right-2 xs:right-3 sm:right-4 md:right-6 w-3 xs:w-4 sm:w-6 md:w-8 h-3 xs:h-4 sm:h-6 md:h-8 bg-gradient-to-br from-green-400/10 to-green-400/30 rounded" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gray-50 dark:bg-black">
              <div className={`absolute inset-0 flex flex-col items-center justify-center p-3 xs:p-4 sm:p-5 md:p-6 transition-opacity duration-500 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}>
                <div className="w-full flex flex-col items-center mb-2 xs:mb-3 sm:mb-4">
                  <div className="flex-shrink-0">
                    <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-5xl font-extrabold text-black dark:text-white whitespace-nowrap">
                      Knyt<span className="text-green-400">X</span>Studio
                    </h2>
                  </div>
                  <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 mt-1 xs:mt-1.5 sm:mt-2">
                    <div className="w-3 xs:w-4 sm:w-6 md:w-8 h-0.5 bg-green-400/30 rounded-full"></div>
                    <div className="w-4 xs:w-5 sm:w-7 md:w-9 lg:w-10 h-0.5 bg-green-400/50 rounded-full"></div>
                    <div className="w-3 xs:w-4 sm:w-6 md:w-8 h-0.5 bg-green-400/70 rounded-full"></div>
                    <span className="text-green-400 text-[10px] xs:text-xs sm:text-sm ml-0.5 xs:ml-1">✦</span>
                  </div>
                </div>
                <div className="w-full flex items-center gap-1 xs:gap-1.5 sm:gap-2 mb-2 xs:mb-3 sm:mb-4 md:mb-5">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-green-400/30 to-transparent"></div>
                  <FaEnvelope className="text-green-400/50 text-[10px] xs:text-xs sm:text-sm" />
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-green-400/30 to-transparent"></div>
                </div>
             <div className="w-full max-w-[230px] xs:max-w-[240px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl flex flex-row items-start">
  
  {/* Left section */}
  <div className="w-1/2 pr-2 xs:pr-3 sm:pr-4 md:pr-5 lg:pr-6 relative">
    <p className="text-gray-600 dark:text-gray-400 text-[7px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg leading-snug sm:leading-tight md:leading-relaxed text-center">
      Have a project in mind? <br /> Let's discuss how we can turn your ideas into powerful digital products.
    </p>

    {/* Perfect Divider Line */}
    <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-green-400/40 dark:via-green-300/50 to-transparent"></div>
  </div>
  
  {/* Right section */}
  <div className="w-1/2 pl-2 xs:pl-3 sm:pl-4 md:pl-5 lg:pl-6 flex flex-col items-center justify-center h-full">
    
    {/* Contact Info */}
    <div className="space-y-0.5 xs:space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-2.5">
      
      <div className="flex items-center justify-center gap-0.5 xs:gap-1 sm:gap-1.5 md:gap-2">
        <FaEnvelope className="text-green-400 text-[8px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg" />
        <span className="text-gray-500 dark:text-gray-400 text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base truncate">
          contact@knytxstudio.com
        </span>
      </div>

      <div className="flex items-center justify-center gap-0.5 xs:gap-1 sm:gap-1.5 md:gap-2">
        <FaClock className="text-green-400 text-[8px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg" />
        <span className="text-gray-500 dark:text-gray-400 text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base">
          24h response
        </span>
      </div>

    </div>

    {/* CTA */}
    <div className="mt-1 xs:mt-2 sm:mt-3 md:mt-4">
      <span className="inline-flex items-center gap-0.5 xs:gap-1 sm:gap-1.5 md:gap-2 text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base font-medium text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-800 px-1 xs:px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full">
        <span className="w-0.5 xs:w-1 sm:w-1.5 md:w-2 h-0.5 xs:h-1 sm:h-1.5 md:h-2 bg-green-400 rounded-full animate-pulse" />
        Open
      </span>
    </div>

  </div>
</div>

                {/* Decorative elements */}
                <div className="absolute top-2 xs:top-3 sm:top-4 left-2 xs:left-3 sm:left-4 text-xl xs:text-2xl sm:text-3xl md:text-4xl opacity-5 rotate-12">
                  ✦
                </div>
                <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 right-2 xs:right-3 sm:right-4 text-xl xs:text-2xl sm:text-3xl md:text-4xl opacity-5 -rotate-12">
                  ✦
                </div>
              </div>

              {/* Address Lines (visible when open) */}
              <div className={`absolute top-3 xs:top-4 sm:top-6 md:top-8 left-3 xs:left-4 sm:left-6 md:left-8 space-y-0.5 xs:space-y-1 sm:space-y-2 opacity-50 transition-opacity duration-500 ${
                isOpen ? 'opacity-50' : 'opacity-0'
              }`}>
                <div className="w-12 xs:w-16 sm:w-20 md:w-24 lg:w-28 h-1 xs:h-1.5 sm:h-2 bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="w-14 xs:w-20 sm:w-24 md:w-28 lg:w-32 h-1 xs:h-1.5 sm:h-2 bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="w-10 xs:w-14 sm:w-16 md:w-20 lg:w-24 h-1 xs:h-1.5 sm:h-2 bg-gray-300 dark:bg-gray-700 rounded" />
              </div>

              {/* Decorative Stamp */}
              <div className={`absolute bottom-2 xs:bottom-3 sm:bottom-4 md:bottom-6 right-2 xs:right-3 sm:right-4 md:right-6 w-7 xs:w-9 sm:w-11 md:w-14 lg:w-16 h-7 xs:h-9 sm:h-11 md:h-14 lg:h-16 border-2 border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center transition-all duration-500 ${
                isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
              }`}>
                <FaEnvelope className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 dark:text-gray-600" />
              </div>

              {/* KnytXStudio Logo watermark */}
              <div className="absolute bottom-0.5 xs:bottom-1 sm:bottom-2 left-0.5 xs:left-1 sm:left-2 text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs font-bold text-gray-300 dark:text-gray-700">
                Knyt<span className="text-green-400">X</span>Studio
              </div>
            </div>
          </div>
        </div>

        {/* Letter Inside Component */}
        <Letter isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Shadow Effect */}
        <div className="absolute -bottom-1 xs:-bottom-2 sm:-bottom-3 md:-bottom-4 left-1 xs:left-2 sm:left-3 md:left-4 right-1 xs:right-2 sm:right-3 md:right-4 h-2 xs:h-3 sm:h-4 md:h-6 bg-black/10 dark:bg-white/5 blur-sm xs:blur-md sm:blur-lg rounded-full" />
      </div>

      {/* Instruction/Hover State */}
      <div className="mt-6 xs:mt-8 sm:mt-10 md:mt-12 text-center px-4">
        <p className={`text-[10px] xs:text-xs sm:text-sm transition-all duration-300 ${
          isHovered ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
        }`}>
          {isOpen ? (
            <span className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
              {/* <span className="w-0.5 xs:w-1 sm:w-1.5 h-0.5 xs:h-1 sm:h-1.5 bg-green-400 rounded-full animate-pulse" /> */}
              <span className="hidden xs:inline">Envelope opened — click to close</span>
              <span className="xs:hidden">Opened — click to close</span>
            </span>
          ) : (
            <span className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
              <span className="w-0.5 xs:w-1 sm:w-1.5 h-0.5 xs:h-1 sm:h-1.5 bg-gray-400 rounded-full" />
              <span className="hidden xs:inline">Click the envelope to open</span>
              <span className="xs:hidden">Click to open</span>
            </span>
          )}
        </p>
        
        
      </div>

     <style>
{`
  .perspective-1000 {
    perspective: 1000px;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
  }

  .group:hover {
    animation: float 2s ease-in-out infinite;
  }

  /* Custom breakpoint for 350px and below */
  @media (max-width: 350px) {
    .xs\\:inline {
      display: inline;
    }
    .xs\\:hidden {
      display: none;
    }
  }

  /* For screens above 350px */
  @media (min-width: 351px) {
    .xs\\:inline {
      display: none;
    }
    .xs\\:hidden {
      display: inline;
    }
  }
`}
</style>
    </div>
  );
}
