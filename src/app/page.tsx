import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { MealPlansPreview } from "@/components/sections/MealPlansPreview";
import { NutritionTeaser } from "@/components/sections/NutritionTeaser";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <MealPlansPreview />
      <NutritionTeaser />
      <Footer />
    </main>
  );
}
