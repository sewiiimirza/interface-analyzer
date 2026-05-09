import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PLANS } from "@/lib/mock";
import { Check, Sparkles } from "lucide-react";
import { PaymentModal } from "./PaymentModal";

export function PricingSection() {
  const [open, setOpen] = useState(false);
  const [planName, setPlanName] = useState("");

  return (
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-gradient-brand">Pricing</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">Pricing</h2>
        <p className="mt-3 text-muted-foreground">Choose the plan that fits your needs. Upgrade anytime.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {PLANS.map((p) => (
          <div
            key={p.id}
            className={`relative rounded-3xl p-7 border bg-card overflow-hidden transition-all hover:-translate-y-1 ${
              p.highlight ? "border-brand/60 shadow-glow" : "border-border"
            }`}
          >
            {p.badge && (
              <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-warm text-black">
                {p.badge}
              </span>
            )}
            <div
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl mb-4"
              style={{ background: `color-mix(in oklab, ${p.color} 22%, transparent)` }}
            >
              <Sparkles className="h-6 w-6" style={{ color: p.color }} />
            </div>
            <h3 className="text-xl font-extrabold">{p.name}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold">Rs.{p.price.toLocaleString()}</span>
              <span className="text-sm text-muted-foreground">/{p.days} days</span>
            </div>
            <ul className="mt-6 space-y-2.5 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2 items-start">
                  <Check className="h-4 w-4 mt-0.5" style={{ color: p.color }} />
                  <span className="text-foreground/85">{f}</span>
                </li>
              ))}
            </ul>
            <Button
              onClick={() => { setPlanName(p.name); setOpen(true); }}
              className={`w-full mt-7 font-bold ${
                p.highlight ? "bg-gradient-brand text-white hover:opacity-95" : ""
              }`}
              variant={p.highlight ? "default" : "outline"}
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>

      <PaymentModal open={open} onOpenChange={setOpen} planName={planName} />
    </section>
  );
}
