"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { CheckCircle2, ShieldCheck, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] pt-32 pb-20 flex items-center overflow-hidden bg-[#F7F8FA]">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-mint-soft/60 via-green-wellness/10 to-transparent rounded-full blur-3xl opacity-60 -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/5 via-primary/5 to-transparent rounded-full blur-3xl opacity-50 translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-wellness/10 border border-green-wellness/30 text-green-forest w-fit text-xs md:text-sm font-semibold tracking-wide shadow-[0_2px_10px_rgba(140,203,24,0.1)] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-leaf opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-leaf"></span>
              </span>
              🌿 PALAKKAD’S #1 HEALTHY CLOUD KITCHEN
            </div>
            
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-[72px] leading-[1.05] tracking-tight text-primary drop-shadow-sm">
              Your Daily <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-forest via-green-wellness to-green-leaf">Nutrition,</span><br/>
              Perfectly Balanced.
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 max-w-xl leading-[1.8] font-medium">
              In a world where unhealthy eating silently steals your energy and wellness, we’re here to spark a healthier revolution. We craft nutritionist-approved meals packed with the right balance of macros, micros, vitamins, and minerals — real food that truly fuels your body and soul. From weight loss and muscle gain to disease-focused nutrition, every meal is designed with purpose, and fully customizable to fit your lifestyle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="cta" size="lg" className="w-full sm:w-auto shadow-[0_4px_20px_rgba(66,196,90,0.4)] hover:shadow-[0_4px_25px_rgba(66,196,90,0.6)] hover:-translate-y-1 transition-all">Order Healthy Meals</Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm hover:bg-white hover:-translate-y-1 transition-all border-gray-border/80">Subscribe & Save</Button>
            </div>
            
            <div className="flex items-center gap-6 pt-6">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <p className="text-sm font-semibold text-gray-700 mt-1">1000+ Happy Customers</p>
              </div>
              <div className="h-10 w-px bg-gray-border"></div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <div className="w-8 h-8 rounded-full bg-green-wellness/20 flex items-center justify-center">
                  <ShieldCheck className="text-green-forest" size={18} />
                </div>
                Nutritionist Designed
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full flex items-center justify-center mt-8 lg:mt-0"
          >
            {/* Logo showcase */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Outer glowing rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full border border-green-wellness/20 border-dashed"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] rounded-full border border-primary/10 border-dotted"
              />
              
              <motion.div 
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-3/4 max-w-[400px]"
              >
                <img src="/logo.png" alt="Calorie Choice" className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]" />
              </motion.div>
            </div>

            {/* Floating Widgets */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 right-0 sm:right-10 glass p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 border border-white/60 bg-white/70 backdrop-blur-md hover:scale-105 transition-transform"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold shadow-glow">
                35g
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-primary font-bold uppercase tracking-wider">Protein Target</p>
                <p className="text-xs sm:text-sm font-bold text-foreground">On Track! 🎯</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-0 sm:left-4 glass p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/60 bg-white/70 backdrop-blur-md hover:scale-105 transition-transform"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-wellness/20 flex items-center justify-center">
                <CheckCircle2 className="text-green-forest" size={20} />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-foreground">Hygienic Kitchen</p>
                <p className="text-[10px] sm:text-xs text-gray-500 font-medium">FSSAI Certified</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
