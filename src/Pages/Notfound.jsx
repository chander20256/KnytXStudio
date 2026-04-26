import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080b11] flex items-center justify-center px-4 sm:px-6 md:px-10 py-16">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] bg-green-500/20 blur-3xl rounded-full animate-pulse" />

        <div className="absolute bottom-[-150px] right-[-100px] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-emerald-400/10 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px]" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-3xl text-center"
      >

        {/* Icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl border border-green-500/30 bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.25)]">
            <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 text-green-400" />
          </div>
        </motion.div>

        {/* 404 */}
        <h1 className="text-[80px] xs:text-[100px] sm:text-8xl md:text-9xl font-black leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-200 mb-4">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-2">
          Lost in the Digital Void
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-lg leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10 px-2">
          The page you are trying to access does not exist or may have been
          moved. Let’s get you back to the KnytXStudio experience.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">

          {/* Home Button */}
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-2xl bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-semibold shadow-[0_0_30px_rgba(34,197,94,0.35)]"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Return Home
          </Link>

          {/* Contact Button */}
          <a
            href="mailto:chanderprakash3012@gmail.com"
            className="w-full sm:w-auto px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-xl transition-all duration-300 text-white text-center"
          >
            Contact Support
          </a>
        </div>
      </motion.div>
    </div>
  );
}