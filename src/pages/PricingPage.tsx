import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    desc: "Perfect for trying out",
    features: ["5 images/day", "Standard quality", "JPG, PNG, WEBP", "Web dashboard"],
    cta: "Get Started",
    variant: "hero-outline" as const,
  },
  {
    name: "Pro",
    price: "₹499",
    period: "/month",
    desc: "For professionals & teams",
    features: ["Unlimited images", "HD quality output", "Priority processing", "API access", "Bulk upload", "Email support"],
    cta: "Upgrade to Pro",
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Credit Pack",
    price: "₹199",
    period: "/ 50 credits",
    desc: "Pay as you go",
    features: ["50 image credits", "HD quality output", "No expiry", "API access"],
    cta: "Buy Credits",
    variant: "hero-outline" as const,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Simple, Transparent Pricing</h1>
          <p className="text-muted-foreground text-lg">Start free. Scale as you grow.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`glass rounded-2xl p-6 relative ${plan.popular ? "border-primary/50 ring-1 ring-primary/20" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gradient-primary text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-3xl font-extrabold">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-secondary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant={plan.variant} className="w-full" asChild>
                <Link to="/register">{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
