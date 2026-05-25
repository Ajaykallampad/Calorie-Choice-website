"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation, useMotionValue, useSpring, useTransform, useAnimationFrame, animate } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Complete Balanced Nutrition",
    description: "Carefully crafted meals containing essential proteins, carbohydrates, healthy fats, vitamins, and vital micro & macro nutrients your body needs daily.",
    emoji: "🥗",
    shadowColor: "rgba(122,180,25,0.4)",
    chips: ["High Protein", "Balanced Macros"]
  },
  {
    id: 2,
    title: "Personalized Diet Plans",
    description: "Customized meal plans designed to match your lifestyle, fitness goals, body requirements, and dietary preferences.",
    emoji: "🎯",
    shadowColor: "rgba(61,26,120,0.4)",
    chips: ["AI Customized", "Goal Specific"]
  },
  {
    id: 3,
    title: "Disease-Specific & Wellness Nutrition",
    description: "Specialized meals tailored for health conditions and wellness goals, supporting healthier living through targeted nutrition.",
    emoji: "💊",
    shadowColor: "rgba(122,180,25,0.4)",
    chips: ["Heart Healthy", "Immunity Boost"]
  },
  {
    id: 4,
    title: "Expert Nutritionist Consultation",
    description: "Get professional guidance and personalized nutritional support from qualified nutrition experts.",
    emoji: "🧑‍⚕️",
    shadowColor: "rgba(61,26,120,0.4)",
    chips: ["1-on-1 Guidance", "Dietitian Verified"]
  },
  {
    id: 5,
    title: "No Added Sugar • No Preservatives",
    description: "Clean, wholesome meals made with natural ingredients — free from unnecessary additives and artificial preservatives.",
    emoji: "🌿",
    shadowColor: "rgba(157,200,42,0.4)",
    chips: ["100% Organic", "Clean Label"]
  },
  {
    id: 6,
    title: "Detailed Nutrition Transparency",
    description: "Every meal comes with a comprehensive nutrition label including calories, macros, micronutrients, and ingredient details.",
    emoji: "📊",
    shadowColor: "rgba(91,46,160,0.4)",
    chips: ["Track Macros", "Precise Calories"]
  },
  {
    id: 7,
    title: "FSSAI Certified Hygienic Kitchen",
    description: "Prepared in certified hygienic kitchens by experienced chefs following strict food safety and quality standards.",
    emoji: "🛡️",
    shadowColor: "rgba(122,180,25,0.4)",
    chips: ["FSSAI Certified", "Safety First"]
  },
  {
    id: 8,
    title: "Fresh Doorstep Delivery",
    description: "Healthy, nutrient-rich meals delivered fresh and conveniently right to your doorstep.",
    emoji: "🛵",
    shadowColor: "rgba(61,26,120,0.4)",
    chips: ["Same Day Fresh", "Eco-Packaging"]
  }
];

// 3D Premium Card Component
function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Use index to offset animation timings so they don't all float in unison
  const animationDelay = index * 0.3;

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex-shrink-0 w-[340px] sm:w-[380px] flex flex-col transition-all duration-300 hover:-translate-y-[8px] rounded-[28px] group perspective-1000 my-4"
    >
      <div 
        className="h-full bg-[rgba(255,255,255,0.82)] backdrop-blur-[18px] p-8 pb-10 relative flex flex-col transition-all duration-500 overflow-hidden"
        style={{ 
          borderRadius: "28px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.6)",
          border: "1px solid rgba(61,26,120,0.3)"
        }}
      >
        {/* Advanced Hover Shadows (Near, Mid, Ambient) */}
        <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
             style={{
               boxShadow: `0 30px 60px -15px ${feature.shadowColor}, 0 15px 25px -5px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,1)`
             }}
        />

        {/* Animated Gradient Border Layer on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3D1A78]/30 via-[#7AB419]/20 to-[#9DC82A]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[28px] pointer-events-none -z-10 blur-[2px]" style={{ padding: '1px' }}>
          <div className="w-full h-full bg-white/10 rounded-[27px]" />
        </div>

        {/* Ambient Glow Inside Card */}
        <div className="absolute top-[-60px] right-[-60px] w-48 h-48 rounded-full blur-[60px] pointer-events-none bg-gradient-to-br from-white/80 to-[#7AB419]/10 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
        
        <div className="relative z-10 flex-1 flex flex-col">
          {/* Floating Emoji Icon */}
          <motion.div 
            animate={{ y: [0, -8, 0], rotate: [0, 4, -2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: animationDelay }}
            className="mb-6 relative w-fit mt-2"
          >
            <div className="text-6xl drop-shadow-[0_8px_15px_rgba(0,0,0,0.15)] select-none">
              {feature.emoji}
            </div>
            
            {/* Ambient Breathing Glow underneath the icon */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: animationDelay + 1 }}
              className="absolute inset-0 rounded-full bg-[#7AB419] blur-[20px] -z-10"
            />
          </motion.div>
          
          <h3 className="text-[24px] font-bold mb-4 font-heading leading-[1.2] text-gray-900 group-hover:text-[#3D1A78] transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-[15px] font-medium leading-[1.7] flex-1 font-sans mb-6">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  // Drag Carousel State
  const trackRef = useRef<HTMLDivElement>(null);
  const [setWidth, setSetWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);

  const handleNext = () => {
    const cardWidth = window.innerWidth < 640 ? 364 : 404; // w-[340px]+gap vs w-[380px]+gap
    animate(x, x.get() - cardWidth, { type: "spring", stiffness: 300, damping: 30 });
  };

  const handlePrev = () => {
    const cardWidth = window.innerWidth < 640 ? 364 : 404;
    animate(x, x.get() + cardWidth, { type: "spring", stiffness: 300, damping: 30 });
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current) {
        // Rendered 3 sets. Container gap is 24px (gap-6).
        const gap = 24; 
        const singleSetWidth = (trackRef.current.scrollWidth + gap) / 3;
        setSetWidth(singleSetWidth);
        
        // Initialize position to the middle set
        if (x.get() === 0) {
          x.set(-singleSetWidth);
        }
      }
    };
    
    // Slight delay to ensure fonts/layout are fully rendered
    const timer = setTimeout(updateWidth, 250);
    window.addEventListener('resize', updateWidth);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateWidth);
    };
  }, [x]);

  // Handle infinite wrap when dragging or auto-scrolling
  useEffect(() => {
    return x.on("change", (latest) => {
      if (setWidth === 0) return;
      // If scrolled far left (past the middle set)
      if (latest <= -(setWidth * 2)) {
        x.set(latest + setWidth);
      } 
      // If scrolled far right (past the middle set into the first set)
      else if (latest >= 0) {
        x.set(latest - setWidth);
      }
    });
  }, [setWidth, x]);

  // Auto-scroll animation loop
  useAnimationFrame((time, delta) => {
    if (isDragging || setWidth === 0) return; // Note: Hover pause has been intentionally removed
    const moveBy = 0.03 * delta; // Speed of auto-scroll
    x.set(x.get() - moveBy);
  });

  return (
    <section className="relative py-24 md:py-32 bg-[#F7F8FA] overflow-hidden" ref={containerRef}>
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#9DC82A]/15 to-transparent blur-[90px] opacity-70" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-[#5B2EA0]/10 to-transparent blur-[120px] opacity-60" />
        
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-[5%] right-[5%] w-[800px] h-[800px] rounded-full border-[0.5px] border-dashed border-[#7AB419]/20"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] right-[10%] w-[600px] h-[600px] rounded-full border-[0.5px] border-dotted border-[#5B2EA0]/15"
        />
        
        <motion.div animate={{ y: [0, -30, 0], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] left-[12%] w-2.5 h-2.5 rounded-full bg-[#7AB419] blur-[1px]" />
        <motion.div animate={{ y: [0, 40, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[25%] left-[8%] w-3 h-3 rounded-full bg-[#5B2EA0] blur-[1px]" />
        <motion.div animate={{ y: [0, -25, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[35%] right-[10%] w-2 h-2 rounded-full bg-[#9DC82A] blur-[1px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="text-center max-w-3xl mb-16 flex flex-col items-center"
        >
          <div className="relative inline-block mb-4 max-w-full">
            <h2 className="font-heading font-extrabold text-[32px] sm:text-[40px] md:text-5xl lg:text-6xl tracking-tight text-[#3D1A78] pb-2 leading-[1.2] sm:leading-[1.1] sm:whitespace-nowrap">
              Why choose <br className="block sm:hidden" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7AB419] to-[#9DC82A]">
                CALORIE CHOICE ?
              </span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-[2px] w-24 sm:w-32 bg-gradient-to-r from-transparent to-[#7AB419] rounded-full opacity-60"></div>
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-2.5 h-2.5 bg-[#5B2EA0] rounded-full shadow-[0_0_12px_rgba(91,46,160,0.8)]"
              />
              <div className="h-[2px] w-24 sm:w-32 bg-gradient-to-l from-transparent to-[#7AB419] rounded-full opacity-60"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Endless Swipeable Horizontal Marquee Carousel */}
      <div className="w-full relative overflow-hidden py-10 z-20">
        {/* Gradient Masks for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#F7F8FA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#F7F8FA] to-transparent z-10 pointer-events-none" />
        
        {/* Navigation Buttons */}
        <button 
          onClick={handlePrev}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-[#3D1A78] hover:bg-white hover:scale-110 transition-all border border-gray-100 opacity-90 hover:opacity-100 focus:outline-none"
        >
          <ChevronLeft size={24} strokeWidth={2.5} />
        </button>

        <button 
          onClick={handleNext}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-[#3D1A78] hover:bg-white hover:scale-110 transition-all border border-gray-100 opacity-90 hover:opacity-100 focus:outline-none"
        >
          <ChevronRight size={24} strokeWidth={2.5} />
        </button>

        <motion.div 
          ref={trackRef}
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -10000, right: 10000 }} // Loose bounds to allow infinite swipe
          dragElastic={0}
          dragMomentum={true}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className="flex w-max flex-nowrap gap-6 px-6 pb-6 pt-2 items-stretch cursor-grab active:cursor-grabbing touch-pan-y"
        >
          {/* Render 3 sets of features for seamless infinite looping in both directions */}
          {[...features, ...features, ...features].map((feature, index) => (
            <FeatureCard key={`${feature.id}-${index}`} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
