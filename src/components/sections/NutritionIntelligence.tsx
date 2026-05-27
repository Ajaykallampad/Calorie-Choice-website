"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function NutritionIntelligence() {
  const [age, setAge] = useState<number | ''>('');
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [activity, setActivity] = useState(1.55);
  const [goal, setGoal] = useState(1);
  
  const [result, setResult] = useState<any>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!age || !weight || !height) {
      alert('Please fill all fields.');
      return;
    }
    
    const w = Number(weight);
    const h = Number(height);
    const a = Number(age);
    
    const bmr = gender === 'male'
      ? (10 * w) + (6.25 * h) - (5 * a) + 5
      : (10 * w) + (6.25 * h) - (5 * a) - 161;
      
    const tdee = Math.round(bmr * activity);
    const goalCals = Math.round(tdee * goal);
    const bmiVal = +(w / Math.pow(h / 100, 2)).toFixed(1);
    const protein = Math.round(w * 1.6);
    
    let category = "Normal";
    if (bmiVal < 18.5) category = "Underweight";
    else if (bmiVal >= 25 && bmiVal < 30) category = "Overweight";
    else if (bmiVal >= 30) category = "Obese";
    
    let plan = "High Protein";
    if (bmiVal > 25) plan = "Weight Loss";
    else if (bmiVal < 18.5) plan = "Muscle Gain";
    
    const leftPct = Math.min(Math.max((bmiVal - 15) / (40 - 15), 0), 1) * 100;
    
    setResult({
      bmr: Math.round(bmr),
      bmi: bmiVal,
      goalCals,
      protein,
      category,
      plan,
      leftPct
    });
  };

  return (
    <section id="nutrition-calculator" className="py-20" style={{ background: 'linear-gradient(160deg, #EFF7E0, #F5EEFF, #E8F5C8)' }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-[#7AB419] uppercase text-[0.78rem] font-bold tracking-[0.1em] block mb-2">Nutrition Intelligence</span>
          <h2 className="font-heading font-extrabold text-[2.8rem] text-[#1C1533] leading-tight mb-4">Know Your Numbers</h2>
          <p className="text-[#4A4560] max-w-[540px] mx-auto">
            Understand your daily calorie and nutrition needs with our free calculators.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 w-full max-w-[1000px] mx-auto">
          {/* Left Column: Calculator */}
          <motion.div layout className="bg-white rounded-[24px] p-6 sm:p-9 shadow-[0_8px_32px_rgba(61,26,120,0.14)] w-full max-w-[480px]">
            <h3 className="font-heading font-extrabold text-[1.3rem] text-[#1C1533] mb-6">🔢 Calorie & BMI Calculator</h3>
            <form onSubmit={calculate} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[0.82rem] font-semibold text-[#4A4560] mb-1.5">Age</label>
                  <input type="number" min="10" max="100" placeholder="e.g. 28" value={age} onChange={e => setAge(e.target.value ? Number(e.target.value) : '')} className="w-full px-4 py-2.5 border-[1.5px] border-[#E0DDF0] rounded-xl text-[0.9rem] outline-none transition-colors focus:border-[#5B2EA0]" required />
                </div>
                <div>
                  <label className="block text-[0.82rem] font-semibold text-[#4A4560] mb-1.5">Gender</label>
                  <select value={gender} onChange={e => setGender(e.target.value)} className="w-full px-4 py-2.5 border-[1.5px] border-[#E0DDF0] rounded-xl text-[0.9rem] outline-none transition-colors focus:border-[#5B2EA0] bg-white appearance-none cursor-pointer" style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%234A4560%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px top 50%', backgroundSize: '0.65rem auto' }}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[0.82rem] font-semibold text-[#4A4560] mb-1.5">Weight (kg)</label>
                  <input type="number" placeholder="e.g. 70" value={weight} onChange={e => setWeight(e.target.value ? Number(e.target.value) : '')} className="w-full px-4 py-2.5 border-[1.5px] border-[#E0DDF0] rounded-xl text-[0.9rem] outline-none transition-colors focus:border-[#5B2EA0]" required />
                </div>
                <div>
                  <label className="block text-[0.82rem] font-semibold text-[#4A4560] mb-1.5">Height (cm)</label>
                  <input type="number" placeholder="e.g. 170" value={height} onChange={e => setHeight(e.target.value ? Number(e.target.value) : '')} className="w-full px-4 py-2.5 border-[1.5px] border-[#E0DDF0] rounded-xl text-[0.9rem] outline-none transition-colors focus:border-[#5B2EA0]" required />
                </div>
              </div>
              <div>
                <label className="block text-[0.82rem] font-semibold text-[#4A4560] mb-1.5">Activity Level</label>
                <select value={activity} onChange={e => setActivity(Number(e.target.value))} className="w-full px-4 py-2.5 border-[1.5px] border-[#E0DDF0] rounded-xl text-[0.9rem] outline-none transition-colors focus:border-[#5B2EA0] bg-white appearance-none cursor-pointer" style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%234A4560%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px top 50%', backgroundSize: '0.65rem auto' }}>
                  <option value={1.2}>Sedentary</option>
                  <option value={1.375}>Lightly active</option>
                  <option value={1.55}>Moderately active</option>
                  <option value={1.725}>Very active</option>
                  <option value={1.9}>Athlete</option>
                </select>
              </div>
              <div>
                <label className="block text-[0.82rem] font-semibold text-[#4A4560] mb-1.5">Goal</label>
                <select value={goal} onChange={e => setGoal(Number(e.target.value))} className="w-full px-4 py-2.5 border-[1.5px] border-[#E0DDF0] rounded-xl text-[0.9rem] outline-none transition-colors focus:border-[#5B2EA0] bg-white appearance-none cursor-pointer" style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%234A4560%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px top 50%', backgroundSize: '0.65rem auto' }}>
                  <option value={0.8}>Lose Weight</option>
                  <option value={1}>Maintain</option>
                  <option value={1.1}>Gain Muscle</option>
                  <option value={1.2}>Bulk Up</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-gradient-to-br from-[#3D1A78] to-[#5B2EA0] text-white py-3.5 rounded-[50px] font-bold text-[0.95rem] shadow-[0_6px_20px_rgba(61,26,120,0.3)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_10px_28px_rgba(61,26,120,0.4)] active:translate-y-0 active:shadow-[0_3px_10px_rgba(61,26,120,0.25)] mt-2">
                Calculate Numbers
              </button>
            </form>
          </motion.div>
          
          <AnimatePresence>
            {result && (
              <motion.div 
                layout
                initial={{ opacity: 0, x: 50, scale: 0.95 }} 
                animate={{ opacity: 1, x: 0, scale: 1 }} 
                exit={{ opacity: 0, x: 50, scale: 0.95 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.25 }}
                className="bg-white rounded-[24px] p-6 sm:p-9 shadow-[0_8px_32px_rgba(61,26,120,0.14)] w-full max-w-[480px]"
              >
                <h3 className="font-heading font-extrabold text-[1.3rem] text-[#1C1533] mb-6">📊 Your Results</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-[#EDF5CF] rounded-2xl p-4 text-center">
                    <div className="text-[0.72rem] uppercase tracking-wider font-semibold text-[#5A8010] mb-1">Daily Calories</div>
                    <div className="font-heading font-extrabold text-[1.5rem] text-[#5A8010]">{result.goalCals}</div>
                  </div>
                  <div className="bg-[#F2F7E8] rounded-2xl p-4 text-center">
                    <div className="text-[0.72rem] uppercase tracking-wider font-semibold text-[#3D1A78] mb-1">BMI</div>
                    <div className="font-heading font-extrabold text-[1.5rem] text-[#3D1A78]">{result.bmi}</div>
                  </div>
                  <div className="bg-[#EDF5CF] rounded-2xl p-4 text-center">
                    <div className="text-[0.72rem] uppercase tracking-wider font-semibold text-[#5A8010] mb-1">Protein</div>
                    <div className="font-heading font-extrabold text-[1.5rem] text-[#5A8010]">{result.protein}g</div>
                  </div>
                  <div className="bg-[#F2F7E8] rounded-2xl p-4 text-center">
                    <div className="text-[0.72rem] uppercase tracking-wider font-semibold text-[#3D1A78] mb-1">BMR</div>
                    <div className="font-heading font-extrabold text-[1.5rem] text-[#3D1A78]">{result.bmr} <span className="text-sm font-normal">kcal</span></div>
                  </div>
                </div>
                
                {/* BMI Visual Bar */}
                <div className="mb-6">
                  <div className="text-[0.78rem] font-semibold text-[#4A4560] mb-2">BMI Range</div>
                  <div className="h-3 rounded-full relative" style={{ background: 'linear-gradient(90deg, #60D394 0%, #60D394 30%, #FFD166 55%, #EF4565 100%)' }}>
                    <div 
                      className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#3D1A78] border-[3px] border-white shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
                      style={{ left: `${result.leftPct}%`, transition: 'left 0.8s cubic-bezier(0.34,1.56,0.64,1)' }}
                    />
                  </div>
                  <div className="flex justify-between text-[0.65rem] text-[#7A7590] font-semibold mt-2 px-1">
                    <span>Underweight</span>
                    <span>Normal</span>
                    <span>Overweight</span>
                    <span>Obese</span>
                  </div>
                </div>
                
                <div className="bg-[#F0EAF8] rounded-xl p-3.5 text-[0.82rem] text-[#3D1A78] font-medium leading-relaxed">
                  Your BMI is {result.bmi} ({result.category}). You need ~{result.goalCals} kcal/day to reach your goal. Our <strong className="font-bold">{result.plan} Plan</strong> is perfect for you!
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
