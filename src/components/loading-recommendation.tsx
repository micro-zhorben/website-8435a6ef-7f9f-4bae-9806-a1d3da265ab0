import { Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

export function LoadingRecommendation() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6 flex flex-col items-center space-y-4">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <Typography.H3>Brewing Your Recommendations</Typography.H3>
        <Typography.Muted className="text-center">
          Our AI is analyzing your preferences to find the perfect coffee match...
        </Typography.Muted>
      </CardContent>
    </Card>
  );
}