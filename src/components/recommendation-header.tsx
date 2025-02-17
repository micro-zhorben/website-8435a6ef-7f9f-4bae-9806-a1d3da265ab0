import { Coffee } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface RecommendationHeaderProps {
  className?: string;
}

export function RecommendationHeader({ className }: RecommendationHeaderProps) {
  return (
    <div className={cn("text-center space-y-4", className)}>
      <div className="flex justify-center">
        <div className="inline-block p-3 rounded-full bg-primary/10">
          <Coffee className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="space-y-2">
        <Typography.H1>AI Coffee Recommendations</Typography.H1>
        <Typography.Lead>
          Discover your perfect coffee match with our AI-powered recommendation system
        </Typography.Lead>
      </div>
    </div>
  );
}