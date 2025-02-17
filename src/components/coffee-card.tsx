import { Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CoffeeCardProps {
  title: string;
  description: string;
  strength: number;
  roastLevel: string;
  imageUrl?: string;
  className?: string;
  onSelect?: () => void;
}

export function CoffeeCard({
  title,
  description,
  strength,
  roastLevel,
  imageUrl,
  className,
  onSelect,
}: CoffeeCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all hover:shadow-lg",
        className
      )}
    >
      <CardHeader className="p-0">
        <div className="aspect-[4/3] w-full relative bg-muted">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <Coffee className="w-12 h-12 text-muted-foreground" />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="mb-2">{title}</CardTitle>
        <Typography.P className="mb-4 line-clamp-2">{description}</Typography.P>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <Typography.Small>Strength</Typography.Small>
            <Typography.Small>{strength}/5</Typography.Small>
          </div>
          <div className="flex justify-between">
            <Typography.Small>Roast</Typography.Small>
            <Typography.Small>{roastLevel}</Typography.Small>
          </div>
        </div>
        <Button 
          className="w-full"
          onClick={onSelect}
        >
          Select This Blend
        </Button>
      </CardContent>
    </Card>
  );
}