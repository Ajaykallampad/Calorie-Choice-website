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
          className="absolute w-64 h-64 bg-green-wellness/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        />
        
        {/* Orbit Rings inspired by the logo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full border-t-2 border-r-2 border-green-leaf/30"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full border-b-2 border-l-2 border-primary/20"
        />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          {/* We use a standard img tag here since image optimization is disabled for static export */}
          <img src="/logo.png" alt="Calorie Choice Logo" className="h-28 sm:h-36 object-contain drop-shadow-2xl" />
        </motion.div>
        
        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute -bottom-16 text-primary font-heading font-semibold text-sm tracking-[0.2em] uppercase"
        >
          <span className="animate-pulse">Curating your nutrition...</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
