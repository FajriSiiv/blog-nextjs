import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import SubmitButton from "../dashboard/SubmitButtons";

interface PricingProps {
  id: number;
  cardTitle: string;
  cardDescription: string;
  priceTitle: string;
  benefits: string[];
}
export const PricingPlans: PricingProps[] = [
  {
    id: 0,
    cardTitle: "Freelancer",
    cardDescription: "The best pricing plan for starting",
    benefits: [
      "1 Site",
      "Up to 1000 Visitors",
      "Up to 1000 Visitors",
      "Up to 1000 Visitors",
    ],
    priceTitle: "Free",
  },
  {
    id: 1,
    cardTitle: "Startup",
    cardDescription: "The best pricing plan for proffesionals.",
    benefits: [
      "20 Site",
      "Up to 10k Visitors",
      "Up to 1000 Visitors",
      "Up to 1000 Visitors",
      "Up to 1000 Visitors",
      "Up to 1000 Visitors",
    ],
    priceTitle: "$40",
  },
];

export default function PricingTable() {
  return (
    <>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-bold tracking-tight text-primary text-4xl sm:text-5xl">
          Pricing Plans
        </h1>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center leading-tight text-muted-foreground">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
        illo nihil quasi
      </p>

      <div className="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-2">
        {PricingPlans.map((item) => (
          <Card
            key={item.id}
            className={`flex justify-between flex-col
              ${item.id === 1 ? "border-primary" : ""}
            `}
          >
            <CardHeader>
              <CardTitle>
                {item.id === 1 ? (
                  <div className="flex items-center justify-between">
                    <h3 className="text-primary">Startup</h3>
                    <p className="rounded-full border bg-primary/10 px-3 py-1 text-xs font-semibold leading-5 text-primary">
                      Most popular
                    </p>
                  </div>
                ) : (
                  item.cardTitle
                )}
              </CardTitle>
              <CardDescription>{item.cardDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mt-6 text-4xl font-bold tracking-tight">
                {item.priceTitle}
              </p>

              <ul className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                {item.benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-x-3">
                    <Check className="text-primary size-5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {item.id === 1 ? (
                <form className="w-full">
                  <SubmitButton text="Buy plan" className="w-full mt-5" />
                </form>
              ) : (
                <Button variant="outline" className="mt-5 w-full">
                  Try for free
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
