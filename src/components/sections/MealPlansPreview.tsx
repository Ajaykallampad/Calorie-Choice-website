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
    macros: { p: "25%", c: "45%", f: "30%" },
    color: "from-blue-100 to-white",
    tags: ["High Fiber", "Low Calorie"]
  },
  {
    title: "High Protein",
    cals: "1800 - 2200",
    description: "30g-45g protein per meal. Perfect for gym-goers.",
    macros: { p: "40%", c: "40%", f: "20%" },
    color: "from-orange-100 to-white",
    tags: ["Muscle Gain", "Gym Focus"],
    popular: true
  },
  {
    title: "Diabetic Friendly",
    cals: "1400 - 1600",
    description: "Low GI ingredients with carefully controlled carbs.",
    macros: { p: "30%", c: "30%", f: "40%" },
    color: "from-green-100 to-white",
    tags: ["Low GI", "Health Focus"]
  },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col relative overflow-hidden group">
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl z-10">
                    MOST POPULAR
                  </div>
                )}
                <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${plan.color} opacity-50 transition-opacity group-hover:opacity-100`}></div>
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex gap-2 mb-4">
                    {plan.tags.map(tag => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                  
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-2">{plan.title}</h3>
                  <p className="text-primary font-bold text-lg mb-4">{plan.cals} <span className="text-sm font-normal text-gray-500">kcal/day</span></p>
                  
                  <p className="text-gray-600 text-sm mb-6 flex-1">{plan.description}</p>
                  
                  <div className="bg-gray-bg rounded-xl p-4 mb-6">
                    <p className="text-xs font-semibold text-gray-500 mb-2 uppercase">Macro Distribution</p>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden flex">
                      <div className="bg-primary h-full" style={{ width: plan.macros.p }}></div>
                      <div className="bg-green-leaf h-full" style={{ width: plan.macros.c }}></div>
                      <div className="bg-yellow-400 h-full" style={{ width: plan.macros.f }}></div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs font-medium text-gray-600">
                      <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-primary"></div> {plan.macros.p} Pro</span>
                      <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-leaf"></div> {plan.macros.c} Carb</span>
                      <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-yellow-400"></div> {plan.macros.f} Fat</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                    View Menu
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
