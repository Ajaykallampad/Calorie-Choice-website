"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { NutrientCarousel } from "../ui/NutrientCarousel";
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
            className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6 relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-wellness/10 border border-green-wellness/30 text-green-forest w-fit text-xs md:text-sm font-semibold tracking-wide shadow-[0_2px_10px_rgba(140,203,24,0.1)] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-leaf opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-leaf"></span>
              </span>
              🌿 PALAKKAD’S #1 HEALTHY CHOICE
            </div>
            
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-[72px] leading-[1.05] tracking-tight text-primary drop-shadow-sm">
              Your Daily <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-forest via-green-wellness to-green-leaf">Nutrition,</span><br/>
              Perfectly Balanced.
            </h1>
            
            <div className="text-base md:text-lg text-gray-600 max-w-xl leading-[1.8] font-medium space-y-4">
              <p>
                In a world of processed fast foods and unhealthy eating habits, we often overlook the importance of whole foods and healthy nutrition. We craft meals packed with the right balance of <strong className="text-green-forest">macros, micros, vitamins, and minerals</strong> — real food that truly fuels your body and soul. From weight loss and muscle gain to wellness-focused nutrition, every bite is made with purpose and personalized for you.
              </p>
              
              <div className="italic text-gray-800 font-semibold lg:border-l-4 lg:border-green-leaf/50 lg:pl-4 mt-2 lg:mt-0 py-1">
                "Because great nutrition should taste just as good as it feels."
              </div>
            </div>
            
            <div className="flex flex-col w-full sm:w-auto sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <Button variant="cta" size="lg" className="w-full sm:w-auto shadow-[0_4px_20px_rgba(66,196,90,0.4)] hover:shadow-[0_4px_25px_rgba(66,196,90,0.6)] hover:-translate-y-1 transition-all">Order Healthy Meals</Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm hover:bg-white hover:-translate-y-1 transition-all border-gray-border/80">Subscribe & Save</Button>
            </div>
            

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full flex items-center justify-center mt-8 lg:mt-0"
          >
            {/* Premium 3D Nutrient Carousel */}
            <div className="relative w-full h-full flex items-center justify-center">
              <NutrientCarousel />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
