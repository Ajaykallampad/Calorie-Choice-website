"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { MealPlansPreview } from "@/components/sections/MealPlansPreview";
import { NutritionIntelligence } from "@/components/sections/NutritionIntelligence";
import { ContactUs } from "@/components/sections/ContactUs";
import { Loader } from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <main className={`min-h-screen overflow-x-hidden transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <MealPlansPreview />
      <NutritionIntelligence />
      <ContactUs />
      <Footer />
      </main>
    </>
  );
}
