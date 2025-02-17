import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { RecommendationHeader } from "@/components/recommendation-header";
import { PreferenceForm } from "@/components/preference-form";
import { CoffeeCard } from "@/components/coffee-card";
import { LoadingRecommendation } from "@/components/loading-recommendation";

// Mock data for coffee recommendations
const COFFEE_RECOMMENDATIONS = [
  {
    id: 1,
    title: "Ethiopian Yirgacheffe",
    description: "A light roasted coffee with floral and citrus notes, perfect for pour-over brewing.",
    strength: 3,
    roastLevel: "Light Roast",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Colombian Supremo",
    description: "Medium roasted with caramel sweetness and nutty undertones. Well-balanced and smooth.",
    strength: 4,
    roastLevel: "Medium Roast",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Sumatra Mandheling",
    description: "Dark roasted with full body, earthy notes, and low acidity. Perfect for espresso.",
    strength: 5,
    roastLevel: "Dark Roast",
    imageUrl: "/placeholder.svg",
  },
];

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handlePreferenceSubmit = (preferences: {
    strength: number;
    roastLevel: string;
    brewMethod: string;
  }) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowRecommendations(true);
    }, 2000);
    console.log("Preferences:", preferences);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto px-4 py-4">
        <div className="flex justify-end">
          <ModeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <RecommendationHeader className="mb-12" />

          {!showRecommendations && (
            <PreferenceForm
              onSubmit={handlePreferenceSubmit}
              className="max-w-md mx-auto"
            />
          )}

          {isLoading && <LoadingRecommendation />}

          {showRecommendations && !isLoading && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {COFFEE_RECOMMENDATIONS.map((coffee) => (
                  <CoffeeCard
                    key={coffee.id}
                    title={coffee.title}
                    description={coffee.description}
                    strength={coffee.strength}
                    roastLevel={coffee.roastLevel}
                    imageUrl={coffee.imageUrl}
                    onSelect={() => {
                      console.log("Selected coffee:", coffee.title);
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}