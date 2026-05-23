"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { MealPlansPreview } from "@/components/sections/MealPlansPreview";
import { NutritionTeaser } from "@/components/sections/NutritionTeaser";
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
      <MealPlansPreview />
      <NutritionTeaser />
      <Footer />
    </main>
  );
}
