import { createFileRoute } from "@tanstack/react-router";
import { Topbar } from "@/components/sasviral/Topbar";
import { PLANS } from "@/lib/mock";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PaymentModal } from "@/components/sasviral/PaymentModal";

export const Route = createFileRoute("/app/billing")({ component: Billing });

function Billing() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  return (
    <>
      <Topbar title="Billing & Subscription" subtitle="Manage your plan and payment." />
      <main className="p-6 space-y-6">
        <div className="rounded-2xl bg-gradient-brand p-6 shadow-glow text-white">
          <div className="text-xs font-bold uppercase tracking-wider opacity-80">Current Plan</div>
          <div className="mt-1 flex items-baseline gap-3">
            <h2 className="text-3xl font-extrabold">Super Unlimited</h2>
            <span className="text-sm opacity-90">renews May 30, 2026</span>
          </div>
          <p className="mt-2 text-sm opacity-90 max-w-xl">All features unlocked · Priority support · Unlimited niches.</p>
        </div>

        <h3 className="text-lg font-extrabold pt-2">Upgrade or change plan</h3>
        <div className="grid md:grid-cols-3 gap-5">
          {PLANS.map((p) => (
            <div key={p.id} className={`rounded-2xl p-6 border bg-card ${p.highlight ? "border-brand/60 shadow-glow" : "border-border"}`}>
              {p.badge && <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-warm text-black">{p.badge}</span>}
              <h4 className="mt-3 text-lg font-extrabold">{p.name}</h4>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold">Rs.{p.price.toLocaleString()}</span>
                <span className="text-xs text-muted-foreground">/{p.days} days</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex gap-2 items-start">
                    <Check className="h-4 w-4 mt-0.5" style={{ color: p.color }} /> <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={() => { setName(p.name); setOpen(true); }} className={`w-full mt-5 font-bold ${p.highlight ? "bg-gradient-brand text-white" : ""}`} variant={p.highlight ? "default" : "outline"}>
                <Sparkles className="h-4 w-4 mr-1.5" /> Choose Plan
              </Button>
            </div>
          ))}
        </div>

        <PaymentModal open={open} onOpenChange={setOpen} planName={name} />
      </main>
    </>
  );
}
