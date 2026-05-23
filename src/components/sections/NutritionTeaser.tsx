"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function NutritionTeaser() {
  return (
    <section id="nutrition" className="py-24 bg-gray-bg relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="glass rounded-[32px] p-8 shadow-xl relative z-10 max-w-md mx-auto lg:mx-0">
              <h4 className="font-heading font-bold text-xl mb-6 text-primary">Smart Calorie Tracker</h4>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span className="text-gray-600">Daily Calories</span>
                    <span className="text-primary">1,450 / 2,000</span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-[72%] h-full bg-gradient-cta rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-mint-soft rounded-xl p-4">
                    <p className="text-xs font-semibold text-green-forest uppercase">Weight Goal</p>
                    <p className="text-lg font-bold text-green-forest mt-1">Loss Mode</p>
                  </div>
                  <div className="bg-primary/10 rounded-xl p-4">
                    <p className="text-xs font-semibold text-primary uppercase">Water</p>
                    <p className="text-lg font-bold text-primary mt-1">1.5 / 3 L</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-wellness rounded-full blur-3xl opacity-50 -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex flex-col gap-6"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary w-fit text-sm font-semibold uppercase tracking-wider">
              Nutrition Education Hub
            </div>
            
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary leading-tight">
              Eat smarter, not less. Understand your food.
            </h2>
            
            <p className="text-lg text-gray-600">
              Stop guessing your calories. Our interactive hub helps you understand BMR, macronutrients, and how to build sustainable healthy habits with Kerala's finest ingredients.
            </p>
            
            <ul className="space-y-4 pt-2 mb-4">
              {[
                "Calculate your exact daily calorie needs",
                "Understand the science of fat loss",
                "Learn portion control with visual guides"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-green-wellness flex items-center justify-center text-white shrink-0">
                    ✓
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            
            <Button variant="primary" size="lg" className="w-fit">
              Explore Nutrition Hub
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
