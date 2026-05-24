"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

export function Loader({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2800); // 2.8 seconds loading experience
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Glow Effects */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-80 h-80 bg-green-wellness/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        
        {/* Orbit Rings with Rotating Circles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute w-72 h-72 sm:w-[22rem] sm:h-[22rem] rounded-full border border-dashed border-green-leaf/40"
        >
          <div className="absolute top-0 left-1/2 -ml-2 -mt-2 w-4 h-4 bg-green-leaf rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
        </motion.div>
        
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute w-80 h-80 sm:w-[26rem] sm:h-[26rem] rounded-full border border-dashed border-primary/30"
        >
          <div className="absolute top-1/2 left-0 -ml-2 -mt-2 w-5 h-5 bg-primary rounded-full shadow-[0_0_10px_rgba(79,70,229,0.8)]" />
        </motion.div>

        {/* Orbit rings to add depth */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-96 h-96 sm:w-[30rem] sm:h-[30rem] rounded-full border-t-2 border-r-2 border-green-leaf/20"
        />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 mix-blend-multiply"
        >
          {/* We use a standard img tag here since image optimization is disabled for static export */}
          <img src="/logo.png" alt="Calorie Choice Logo" className="w-56 h-56 sm:w-72 sm:h-72 object-contain" />
        </motion.div>
        
        {/* Loading text removed */}
      </div>
    </motion.div>
  );
}
