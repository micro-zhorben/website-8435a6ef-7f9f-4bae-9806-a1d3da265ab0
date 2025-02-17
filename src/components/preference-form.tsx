import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Typography } from "@/components/ui/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface PreferenceFormProps {
  onSubmit: (preferences: {
    strength: number;
    roastLevel: string;
    brewMethod: string;
  }) => void;
  className?: string;
}

export function PreferenceForm({ onSubmit, className }: PreferenceFormProps) {
  const [strength, setStrength] = useState(3);
  const [roastLevel, setRoastLevel] = useState("");
  const [brewMethod, setBrewMethod] = useState("");

  const handleSubmit = () => {
    onSubmit({
      strength,
      roastLevel,
      brewMethod,
    });
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Coffee Preferences</CardTitle>
        <CardDescription>
          Tell us your preferences and we'll recommend the perfect coffee for you
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Typography.Small>Coffee Strength</Typography.Small>
          <Slider
            value={[strength]}
            onValueChange={(value) => setStrength(value[0])}
            min={1}
            max={5}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between">
            <Typography.Muted>Mild</Typography.Muted>
            <Typography.Muted>Strong</Typography.Muted>
          </div>
        </div>

        <div className="space-y-2">
          <Typography.Small>Roast Level</Typography.Small>
          <Select value={roastLevel} onValueChange={setRoastLevel}>
            <SelectTrigger>
              <SelectValue placeholder="Select roast level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light Roast</SelectItem>
              <SelectItem value="medium">Medium Roast</SelectItem>
              <SelectItem value="dark">Dark Roast</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Typography.Small>Brewing Method</Typography.Small>
          <Select value={brewMethod} onValueChange={setBrewMethod}>
            <SelectTrigger>
              <SelectValue placeholder="Select brewing method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="drip">Drip Coffee</SelectItem>
              <SelectItem value="espresso">Espresso</SelectItem>
              <SelectItem value="french">French Press</SelectItem>
              <SelectItem value="pour">Pour Over</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          className="w-full" 
          onClick={handleSubmit}
          disabled={!roastLevel || !brewMethod}
        >
          Get Recommendations
        </Button>
      </CardContent>
    </Card>
  );
}