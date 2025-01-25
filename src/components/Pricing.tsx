import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import NeWebPay from "@/components/payments/NeWebPay";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "免費版",
    popular: 0,
    price: 0,
    description: "立刻體驗LINE機器人的服務吧!完全免費!",
    buttonText: "Get Started",
    benefitList: [
      "1個群組",
      "100張照片/月",
      "自由開啟或關閉備份功能",
      "技術回饋表單",
    ],
  },
  {
    title: "專業版",
    popular: 1,
    price: 499,
    description: "完整解鎖機器人的功能，讓他為您盡心盡力的服務吧!",
    buttonText: "選擇",
    benefitList: [
      "10個群組",
      "3000張照片/月",
      "自由開啟或關閉備份功能",
      "專人技術服務",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        解鎖
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          無限{" "}
        </span>
        可能
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8"></h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 lg:w-2/3 lg:m-auto gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> NTD</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <NeWebPay>{pricing.buttonText}</NeWebPay>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
