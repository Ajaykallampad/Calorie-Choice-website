"use client";
import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

const plans = [
  {
    title: "Weight Loss Plan",
    cals: "1200 - 1500",
    description: "High fiber, portion controlled meals for sustainable fat loss.",
    cardBg: "bg-gradient-to-br from-white/90 to-[#EDE7FF]/90 backdrop-blur-[12px]",
    cardBorder: "border-[2px] border-[#5B2EA0]/40",
    cardShadow: "shadow-[0_10px_30px_rgba(61,26,120,0.04),0_20px_60px_rgba(61,26,120,0.06),0_8px_20px_rgba(122,180,25,0.02)]",
    ambientGlow: "bg-[#7B4CD6]",
    textColor: "text-[#3D1A78]",
    descColor: "text-[#5B2EA0]/70",
    calsColor: "text-[#5B2EA0]",
    tagTheme: "bg-white/80 text-[#3D1A78] border-[rgba(255,255,255,0.8)]",
    macroBg: "bg-white/60 backdrop-blur-md",
    macroBorder: "border-[rgba(255,255,255,0.6)]",
    macroValColor: "text-[#3D1A78]",
    macroLabelColor: "text-[#3D1A78]/50",
    btnTheme: "green",
    tags: ["High Fiber", "Low Calorie"],
    stats: [
      { value: "1400", label: "KCAL" },
      { value: "85g", label: "PROTEIN" },
      { value: "120g", label: "CARBS" }
    ],
    buttonText: "Coming Soon",
    isCustom: false
  },
  {
    title: "High Protein",
    cals: "1800 - 2200",
    description: "30g-45g protein per meal. Perfect for gym-goers.",
    cardBg: "bg-gradient-to-br from-white/90 to-[#EDE7FF]/90 backdrop-blur-[12px]",
    cardBorder: "border-[2px] border-[#5B2EA0]/40",
    cardShadow: "shadow-[0_10px_30px_rgba(61,26,120,0.04),0_20px_60px_rgba(61,26,120,0.06),0_8px_20px_rgba(122,180,25,0.02)]",
    ambientGlow: "bg-[#7B4CD6]",
    textColor: "text-[#3D1A78]",
    descColor: "text-[#5B2EA0]/70",
    calsColor: "text-[#5B2EA0]",
    tagTheme: "bg-white/80 text-[#3D1A78] border-[rgba(255,255,255,0.8)]",
    macroBg: "bg-white/60 backdrop-blur-md",
    macroBorder: "border-[rgba(255,255,255,0.6)]",
    macroValColor: "text-[#3D1A78]",
    macroLabelColor: "text-[#3D1A78]/50",
    btnTheme: "green",
    tags: ["Muscle Gain", "Gym Focus"],
    stats: [
      { value: "2200", label: "KCAL" },
      { value: "150g", label: "PROTEIN" },
      { value: "200g", label: "CARBS" }
    ],
    buttonText: "Coming Soon",
    isCustom: false
  },
  {
    title: "Diabetic Friendly",
    cals: "1400 - 1600",
    description: "Low GI ingredients with carefully controlled carbs.",
    cardBg: "bg-gradient-to-br from-white/90 to-[#EDE7FF]/90 backdrop-blur-[12px]",
    cardBorder: "border-[2px] border-[#5B2EA0]/40",
    cardShadow: "shadow-[0_10px_30px_rgba(61,26,120,0.04),0_20px_60px_rgba(61,26,120,0.06),0_8px_20px_rgba(122,180,25,0.02)]",
    ambientGlow: "bg-[#7B4CD6]",
    textColor: "text-[#3D1A78]",
    descColor: "text-[#5B2EA0]/70",
    calsColor: "text-[#5B2EA0]",
    tagTheme: "bg-white/80 text-[#3D1A78] border-[rgba(255,255,255,0.8)]",
    macroBg: "bg-white/60 backdrop-blur-md",
    macroBorder: "border-[rgba(255,255,255,0.6)]",
    macroValColor: "text-[#3D1A78]",
    macroLabelColor: "text-[#3D1A78]/50",
    btnTheme: "green",
    tags: ["Low GI", "Health Focus"],
    stats: [
      { value: "1500", label: "KCAL" },
      { value: "110g", label: "PROTEIN" },
      { value: "110g", label: "CARBS" }
    ],
    buttonText: "Coming Soon",
    isCustom: false
  },
  {
    title: "Custom Plan",
    cals: "Tailored",
    description: "Tell us your health goals, allergies, and preferences. Our dietitians will build your perfect plan.",
    cardBg: "bg-gradient-to-br from-white/90 to-[#EDE7FF]/90 backdrop-blur-[12px]",
    cardBorder: "border-[2px] border-[#5B2EA0]/40",
    cardShadow: "shadow-[0_10px_30px_rgba(61,26,120,0.04),0_20px_60px_rgba(61,26,120,0.06),0_8px_20px_rgba(122,180,25,0.02)]",
    ambientGlow: "bg-[#7B4CD6]",
    textColor: "text-[#3D1A78]",
    descColor: "text-[#5B2EA0]/70",
    calsColor: "text-[#5B2EA0]",
    tagTheme: "bg-white/80 text-[#3D1A78] border-[rgba(255,255,255,0.8)]",
    macroBg: "bg-white/60 backdrop-blur-md",
    macroBorder: "border-[rgba(255,255,255,0.6)]",
    macroValColor: "text-[#3D1A78]",
    macroLabelColor: "text-[#3D1A78]/50",
    btnTheme: "green",
    tags: ["Personalized", "Any Goal"],
    stats: [
      { value: "Your", label: "KCAL" },
      { value: "Your", label: "MACROS" },
      { value: "Your", label: "GOALS" }
    ],
    buttonText: "Customize",
    isCustom: true
  }
];

export function MealPlansPreview() {
  return (
    <section id="meal-plans" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
            Scientifically Designed Meal Plans
          </h2>
          <p className="text-gray-600 text-lg">
            Choose a plan that fits your goals. Every meal is carefully measured and prepared fresh daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card glass={false} className={`h-full flex flex-col relative overflow-hidden group border ${plan.cardBorder} ${plan.cardShadow} hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01] transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${plan.isCustom ? 'border-dashed' : ''} ${plan.cardBg} rounded-[28px]`}>
                
                {/* Ambient Decorative Lighting */}
                <div className={`absolute -bottom-24 -left-24 w-64 h-64 ${plan.ambientGlow} rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-[400ms] pointer-events-none mix-blend-screen`}></div>
                <div className={`absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity duration-[400ms] pointer-events-none`}></div>
                
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-50 mix-blend-overlay pointer-events-none group-hover:opacity-100 transition-opacity duration-[400ms]"></div>
                
                <div className="relative z-10 flex-1 flex flex-col p-2">
                  <div className="flex gap-2 mb-4">
                    {plan.tags.map(tag => (
                      <Badge key={tag} className={`border ${plan.tagTheme} shadow-sm backdrop-blur-sm transition-colors duration-300`}>{tag}</Badge>
                    ))}
                  </div>
                  
                  <h3 className={`font-heading font-bold text-2xl ${plan.textColor} mb-2 tracking-tight`}>{plan.title}</h3>
                  <p className={`font-bold text-lg mb-4 ${plan.calsColor}`}>{plan.cals} <span className="text-sm font-normal opacity-80">kcal/day</span></p>
                  
                  <p className={`text-sm mb-6 flex-1 ${plan.descColor} leading-relaxed`}>{plan.description}</p>
                  
                  {/* Stats / Macros tags */}
                  <div className="flex gap-2 mb-6">
                    {plan.stats.map((stat, idx) => (
                      <div key={idx} className={`flex-1 flex flex-col items-center justify-center py-2.5 rounded-[16px] border shadow-[0_4px_12px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.6)] group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.06),inset_0_1px_2px_rgba(255,255,255,0.8)] transition-shadow duration-[350ms] ${plan.macroBg} ${plan.macroBorder}`}>
                        <span className={`font-bold text-sm ${plan.macroValColor}`}>{stat.value}</span>
                        <span className={`text-[10px] uppercase font-semibold mt-1 tracking-[0.1em] ${plan.macroLabelColor}`}>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full font-bold !border-0 transition-all duration-[350ms] ease-out ${plan.btnTheme === 'purple' ? 'bg-gradient-to-r from-[#3D1A78] to-[#5B2EA0] text-white shadow-[0_4px_14px_rgba(61,26,120,0.3)] hover:shadow-[0_0_24px_rgba(91,46,160,0.5)] hover:-translate-y-0.5' : 'bg-gradient-to-r from-[#7AB419] to-[#9DC82A] text-white shadow-[0_4px_14px_rgba(122,180,25,0.3)] hover:shadow-[0_0_24px_rgba(122,180,25,0.5)] hover:-translate-y-0.5'}`}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
