"use client";
import React from 'react';

const rawCards = [
  {
    "id": "protein",
    "name": "Protein",
    "category": "Macronutrient",
    "description": "Builds and repairs muscle, tissues, enzymes, and hormones.",
    "rdi": {
      "men": { "value": 56, "unit": "g" },
      "women": { "value": 46, "unit": "g" }
    },
    "food_sources": ["Meat", "Eggs", "Legumes", "Dairy", "Tofu"],
    "note": "RDA based on 0.8 g/kg body weight. Source: NIH DRI.",
    "authority": "NIH"
  },
  {
    "id": "carbohydrates",
    "name": "Carbohydrates",
    "category": "Macronutrient",
    "description": "Primary energy source for the brain and muscles.",
    "rdi": {
      "general": { "value": "225–325", "unit": "g" }
    },
    "food_sources": ["Grains", "Fruits", "Vegetables", "Legumes"],
    "note": "45–65% of a 2,000 kcal diet. FDA Daily Value: 275 g. Source: FDA/IOM.",
    "authority": "FDA / IOM"
  },
  {
    "id": "dietary-fiber",
    "name": "Dietary Fiber",
    "category": "Macronutrient",
    "description": "Supports gut health, regulates blood sugar and cholesterol.",
    "rdi": {
      "men": { "value": 38, "unit": "g" },
      "women": { "value": 25, "unit": "g" }
    },
    "food_sources": ["Whole grains", "Beans", "Vegetables", "Fruits"],
    "note": "Adequate Intake (AI) values. Source: Institute of Medicine.",
    "authority": "IOM"
  },
  {
    "id": "saturated-fats",
    "name": "Saturated Fats",
    "category": "Macronutrient",
    "description": "Limit intake to reduce cardiovascular disease risk.",
    "rdi": {
      "general": { "value": "< 22", "unit": "g" }
    },
    "food_sources": ["Butter", "Red meat", "Cheese", "Coconut oil"],
    "note": "Less than 10% of total daily calories. Based on 2,000 kcal diet. Source: WHO / FDA.",
    "authority": "WHO / FDA"
  },
  {
    "id": "sodium",
    "name": "Sodium",
    "category": "Mineral",
    "description": "Regulates fluid balance and supports nerve and muscle function.",
    "rdi": {
      "general": { "value": "< 2300", "unit": "mg" }
    },
    "food_sources": ["Table salt", "Processed foods", "Bread", "Canned goods"],
    "note": "FDA upper limit. WHO recommends < 2,000 mg/day. Source: FDA / WHO.",
    "authority": "FDA / WHO"
  },
  {
    "id": "vitamin-a",
    "name": "Vitamin A",
    "category": "Vitamin",
    "description": "Essential for vision, immune function, and cell growth.",
    "rdi": {
      "men": { "value": 900, "unit": "mcg RAE" },
      "women": { "value": 700, "unit": "mcg RAE" }
    },
    "food_sources": ["Liver", "Carrots", "Sweet potato", "Spinach"],
    "note": "RDA as Retinol Activity Equivalents (RAE). Source: NIH.",
    "authority": "NIH"
  },
  {
    "id": "vitamin-c",
    "name": "Vitamin C",
    "category": "Vitamin",
    "description": "Antioxidant supporting immune defense and collagen synthesis.",
    "rdi": {
      "men": { "value": 90, "unit": "mg" },
      "women": { "value": 75, "unit": "mg" }
    },
    "food_sources": ["Citrus fruits", "Bell peppers", "Broccoli", "Strawberries"],
    "note": "RDA (NIH). Smokers need an additional 35 mg/day.",
    "authority": "NIH"
  },
  {
    "id": "vitamin-d",
    "name": "Vitamin D",
    "category": "Vitamin",
    "description": "Regulates calcium absorption; vital for bone and immune health.",
    "rdi": {
      "general": { "value": 600, "unit": "IU (15 mcg)" }
    },
    "food_sources": ["Sunlight exposure", "Fatty fish", "Fortified milk", "Eggs"],
    "note": "RDA for ages 19–70. Adults 71+ need 800 IU. Source: NIH.",
    "authority": "NIH"
  },
  {
    "id": "vitamin-e",
    "name": "Vitamin E",
    "category": "Vitamin",
    "description": "Fat-soluble antioxidant that protects cells from oxidative damage.",
    "rdi": {
      "general": { "value": 15, "unit": "mg" }
    },
    "food_sources": ["Almonds", "Sunflower seeds", "Sunflower oil", "Spinach"],
    "note": "RDA as alpha-tocopherol. Source: NIH.",
    "authority": "NIH"
  },
  {
    "id": "vitamin-k",
    "name": "Vitamin K",
    "category": "Vitamin",
    "description": "Critical for blood clotting and bone metabolism.",
    "rdi": {
      "men": { "value": 120, "unit": "mcg" },
      "women": { "value": 90, "unit": "mcg" }
    },
    "food_sources": ["Kale", "Spinach", "Broccoli", "Soybean oil"],
    "note": "Adequate Intake (AI) values. No established RDA. Source: NIH.",
    "authority": "NIH"
  },
  {
    "id": "calcium",
    "name": "Calcium",
    "category": "Mineral",
    "description": "Builds and maintains strong bones and teeth; aids nerve signaling.",
    "rdi": {
      "general": { "value": 1000, "unit": "mg" }
    },
    "food_sources": ["Dairy", "Tofu", "Kale", "Fortified plant milk"],
    "note": "RDA for ages 19–50. Adults 51+ women / 71+ men need 1,200 mg. Source: NIH.",
    "authority": "NIH"
  },
  {
    "id": "phosphorus",
    "name": "Phosphorus",
    "category": "Mineral",
    "description": "Supports bone structure, ATP energy metabolism, and cell repair.",
    "rdi": {
      "general": { "value": 700, "unit": "mg" }
    },
    "food_sources": ["Meat", "Fish", "Dairy", "Nuts", "Whole grains"],
    "note": "RDA for adults 19+. Source: NIH.",
    "authority": "NIH"
  },
  {
    "id": "magnesium",
    "name": "Magnesium",
    "category": "Mineral",
    "description": "Involved in 300+ enzymatic reactions; supports muscle and nerve function.",
    "rdi": {
      "men": { "value": 420, "unit": "mg" },
      "women": { "value": 320, "unit": "mg" }
    },
    "food_sources": ["Nuts", "Seeds", "Leafy greens", "Whole grains"],
    "note": "RDA for ages 31–50. Source: NIH.",
    "authority": "NIH"
  },
  {
    "id": "iron",
    "name": "Iron",
    "category": "Mineral",
    "description": "Carries oxygen in red blood cells; essential for preventing anemia.",
    "rdi": {
      "men": { "value": 8, "unit": "mg" },
      "women": { "value": 18, "unit": "mg" }
    },
    "food_sources": ["Red meat", "Lentils", "Spinach", "Fortified cereals"],
    "note": "Women's higher value applies to premenopausal ages 19–50. Source: NIH.",
    "authority": "NIH"
  },
  {
    "id": "zinc",
    "name": "Zinc",
    "category": "Mineral",
    "description": "Supports immune function, wound healing, and DNA synthesis.",
    "rdi": {
      "men": { "value": 11, "unit": "mg" },
      "women": { "value": 8, "unit": "mg" }
    },
    "food_sources": ["Oysters", "Beef", "Pumpkin seeds", "Legumes"],
    "note": "RDA. Source: NIH.",
    "authority": "NIH"
  }
];

const emojis: Record<string, string> = {
  "protein": "🥩",
  "carbohydrates": "🌾",
  "dietary-fiber": "🥦",
  "saturated-fats": "🧈",
  "sodium": "🧂",
  "vitamin-a": "🥕",
  "vitamin-c": "🍊",
  "vitamin-d": "☀️",
  "vitamin-e": "🌻",
  "vitamin-k": "🥬",
  "calcium": "🥛",
  "phosphorus": "🐟",
  "magnesium": "🎃",
  "iron": "🥬",
  "zinc": "🦪"
};

const gradients = [
  "linear-gradient(148deg, #2D1356, #5B2EA0)",
  "linear-gradient(148deg, #1E4A08, #5A8010)",
  "linear-gradient(148deg, #3D1A78, #7AB419)",
  "linear-gradient(148deg, #4D229A, #8A5DC8)",
  "linear-gradient(148deg, #102A08, #2E6B12)",
  "linear-gradient(148deg, #3A1670, #6634B8)"
];

const getRdiString = (rdi: any) => {
  if (rdi.general) return `${rdi.general.value} ${rdi.general.unit} / Day`;
  if (rdi.men && rdi.women) return `M: ${rdi.men.value}${rdi.men.unit} | W: ${rdi.women.value}${rdi.women.unit} / Day`;
  return "";
};

export function NutrientCarousel() {
  return (
    <div className="nutri-scene" onTouchStart={() => {}}>
      <div className="nutri-ambient"></div>
      <div className="nutri-flipper">
        {rawCards.map((card, i) => (
          <div 
            className="ncard" 
            key={i} 
            style={{ 
              background: gradients[i % gradients.length], 
              animationDelay: `${i * 4}s` 
            }}
          >
            <div className="ncard-ambient-circle"></div>
            <div className="ncard-emoji">{emojis[card.id] || "🥗"}</div>
            <div className="ncard-category">{card.category}</div>
            <div className="ncard-name">{card.name}</div>
            <div className="ncard-divider"></div>
            <div className="ncard-body">{card.description}</div>
            <div className="ncard-sources"><strong>Sources:</strong> {card.food_sources.join(', ')}</div>
            <div className="ncard-pill">📅 {getRdiString(card.rdi)}</div>
          </div>
        ))}
      </div>
      
      <div className="nutri-hint">Paused — hover away to continue</div>
      <style dangerouslySetInnerHTML={{ __html: `
        .nutri-scene {
          width: 400px;
          height: 520px;
          perspective: 1200px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }

        @media (hover: hover) and (pointer: fine) {
          .nutri-scene:hover .ncard {
            animation-play-state: paused;
          }
          .nutri-scene:hover .nutri-hint {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nutri-scene:active .ncard {
          animation-play-state: paused;
        }
        .nutri-scene:active .nutri-hint {
          opacity: 1;
          transform: translateY(0);
        }

        .nutri-ambient {
          position: absolute;
          bottom: 20px;
          width: 320px;
          height: 60px;
          background: radial-gradient(circle, rgba(122,180,25,0.3) 0%, rgba(122,180,25,0) 70%);
          border-radius: 50%;
          animation: ambientPulse 4s infinite ease-in-out;
          pointer-events: none;
        }

        @keyframes ambientPulse {
          0%, 100% { opacity: 0.5; transform: scaleX(0.8); }
          50% { opacity: 1; transform: scaleX(1.2); }
        }

        .nutri-flipper {
          width: 320px;
          height: 440px;
          position: relative;
          transform-style: preserve-3d;
          z-index: 2;
        }

        .ncard {
          position: absolute;
          inset: 0;
          border-radius: 28px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.28);
          border-left: 1px solid rgba(255,255,255,0.14);
          box-shadow: 0 32px 72px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.22);
          animation: flipReveal 60s infinite ease-in-out backwards;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .ncard-ambient-circle {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 140px;
          height: 140px;
          background: rgba(255,255,255,0.07);
          border-radius: 50%;
          pointer-events: none;
        }

        .ncard-emoji {
          font-size: 2.2rem;
          margin-bottom: 4px;
          line-height: 1;
        }

        .ncard-category {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.55);
          line-height: 1;
        }

        .ncard-name {
          font-family: 'Outfit', sans-serif;
          font-size: 1.4rem;
          font-weight: 900;
          color: white;
          line-height: 1.1;
        }

        .ncard-divider {
          width: 40px;
          height: 2px;
          background: rgba(255,255,255,0.25);
          margin: 4px 0;
        }

        .ncard-body {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.9);
          line-height: 1.5;
        }
        
        .ncard-sources {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.8);
          line-height: 1.4;
          margin-top: 4px;
        }


        .ncard-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50px;
          background: rgba(255,255,255,0.16);
          border: 1px solid rgba(255,255,255,0.28);
          color: white;
          padding: 6px 12px;
          font-size: 0.75rem;
          font-weight: 600;
          width: fit-content;
          margin-top: auto;
          white-space: nowrap;
        }

        @keyframes flipReveal {
          0% { transform: rotateY(-90deg); opacity: 0; }
          1.66% { transform: rotateY(0deg); opacity: 1; }
          5% { transform: rotateY(0deg); opacity: 1; }
          6.66% { transform: rotateY(90deg); opacity: 0; }
          100% { transform: rotateY(90deg); opacity: 0; }
        }

        .nutri-hint {
          position: absolute;
          bottom: 0px;
          background: #5B2EA0;
          color: white;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
          pointer-events: none;
          z-index: 20;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        @media (max-width: 640px) {
          .nutri-scene { width: 100%; height: 420px; }
          .nutri-flipper { width: 240px; height: 340px; }
          .ncard { padding: 20px; gap: 6px; }
          .ncard-ambient-circle { width: 100px; height: 100px; top: -30px; right: -30px; }
          .ncard-emoji { font-size: 1.8rem; margin-bottom: 2px; }
          .ncard-category { font-size: 0.55rem; }
          .ncard-name { font-size: 1.2rem; }
          .ncard-divider { width: 30px; margin: 2px 0; }
          .ncard-body { font-size: 0.75rem; line-height: 1.4; }
          .ncard-sources { font-size: 0.65rem; margin-top: 2px; }
          .ncard-pill { font-size: 0.65rem; padding: 4px 8px; }
        }

        @media (max-width: 400px) {
          .nutri-scene { height: 360px; }
          .nutri-flipper { width: 200px; height: 280px; }
          .ncard { padding: 14px; gap: 4px; }
          .ncard-emoji { font-size: 1.5rem; }
          .ncard-category { font-size: 0.45rem; }
          .ncard-name { font-size: 1rem; }
          .ncard-divider { width: 24px; margin: 2px 0; }
          .ncard-body { font-size: 0.65rem; line-height: 1.3; }
          .ncard-sources { font-size: 0.55rem; }
          .ncard-pill { font-size: 0.55rem; padding: 3px 6px; }
        }
      `}} />
    </div>
  );
}
