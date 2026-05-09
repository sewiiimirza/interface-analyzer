import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PAYMENT_METHODS, WHATSAPP_NUMBER } from "@/lib/mock";
import { Copy, Check, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export function PaymentModal({
  open,
  onOpenChange,
  planName,
}: { open: boolean; onOpenChange: (v: boolean) => void; planName: string }) {
  const [active, setActive] = useState(PAYMENT_METHODS[1].id);
  const [copied, setCopied] = useState(false);
  const method = PAYMENT_METHODS.find((m) => m.id === active)!;

  const copy = async () => {
    await navigator.clipboard.writeText(method.number);
    setCopied(true);
    toast.success("Account number copied");
    setTimeout(() => setCopied(false), 1500);
  };

  const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi! I just paid for the ${planName} via ${method.name}. Please activate my account.`
  )}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[560px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold">How to Pay — {planName}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Send your payment via one of the options below, then contact us on WhatsApp to confirm access.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
          {PAYMENT_METHODS.map((m) => {
            const isActive = m.id === active;
            return (
              <button
                key={m.id}
                onClick={() => setActive(m.id)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-sm font-semibold transition-all ${
                  isActive
                    ? "border-brand bg-brand/10 text-foreground"
                    : "border-border bg-bg-tertiary/50 text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                <span className="text-base">{m.icon}</span>
                <span className={isActive ? "text-gradient-brand" : ""}>{m.name}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-2 rounded-xl border border-border bg-bg-tertiary/40 p-5">
          <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{method.name}</div>
          <div className="mt-3 flex items-center gap-3">
            <div className="text-2xl">{method.icon}</div>
            <div className="flex-1">
              <div className="text-lg font-bold">{method.account}</div>
              <div className="text-xs text-muted-foreground">{method.note}</div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between gap-3 rounded-lg bg-background/60 px-3 py-2.5 border border-border">
            <div>
              <div className="text-[11px] uppercase text-muted-foreground tracking-wider">Account Number</div>
              <div className="font-mono text-base font-semibold tracking-wide">{method.number}</div>
            </div>
            <Button variant="outline" size="sm" onClick={copy} className="gap-1.5">
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copied" : "Copy"}
            </Button>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-col gap-2 sm:gap-2 sm:space-x-0">
          <Button asChild className="w-full bg-gradient-success text-black font-bold hover:opacity-95">
            <a href={wa} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4 mr-2" /> Contact Us on WhatsApp
            </a>
          </Button>
          <Button variant="outline" className="w-full" onClick={() => onOpenChange(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
