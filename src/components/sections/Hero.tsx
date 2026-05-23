"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { CheckCircle2, ShieldCheck, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-gradient-to-br from-gray-bg via-white to-mint-soft/30">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-wellness/10 text-green-forest w-fit text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-leaf opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-leaf"></span>
              </span>
              Now delivering across Palakkad
            </div>
            
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-primary">
              Your Daily <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-forest to-green-wellness">Nutrition,</span><br/>
              Perfectly Balanced.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
              Fresh scientifically-balanced meals designed for fitness, weight management, and healthy lifestyles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="cta" size="lg" className="w-full sm:w-auto">Order Healthy Meals</Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">Subscribe & Save</Button>
            </div>
            
            <div className="flex items-center gap-6 pt-6">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                </div>
                <p className="text-sm font-medium text-gray-700 mt-1">1000+ Happy Customers</p>
              </div>
              <div className="h-10 w-px bg-gray-border"></div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <ShieldCheck className="text-green-wellness" size={20} />
                Nutritionist Designed
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px] w-full"
          >
            {/* Main Circle Graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-tr from-mint-soft to-white shadow-soft flex items-center justify-center">
               <div className="w-[80%] h-[80%] rounded-full bg-white shadow-inner flex items-center justify-center p-8">
                 <div className="w-full h-full rounded-full border-[12px] border-mint-soft relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-primary font-bold bg-white px-4">PROTEIN</div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-primary font-bold bg-white px-4">CARBS</div>
                    <div className="absolute top-1/2 -left-8 -translate-y-1/2 text-primary font-bold bg-white px-2 py-4">FATS</div>
                    <div className="absolute inset-4 rounded-full border-4 border-dashed border-green-wellness/30 flex items-center justify-center">
                       <span className="text-4xl font-heading font-bold text-green-forest">450 <span className="text-xl">kcal</span></span>
                    </div>
                 </div>
               </div>
            </div>

            {/* Floating Widgets */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-20 right-0 md:right-10 glass p-4 rounded-2xl shadow-lg flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                35g
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase">Protein Target</p>
                <p className="text-sm font-bold text-foreground">On Track! 🎯</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-32 left-0 md:left-10 glass p-4 rounded-2xl shadow-lg flex items-center gap-3"
            >
              <CheckCircle2 className="text-green-wellness" size={24} />
              <div>
                <p className="text-sm font-bold text-foreground">Hygienic Kitchen</p>
                <p className="text-xs text-gray-500">FSSAI Certified</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
