import { createFileRoute } from "@tanstack/react-router";
import { Topbar } from "@/components/sasviral/Topbar";
import { TOOLS } from "@/lib/mock";
import { Button } from "@/components/ui/button";
import { Lock, Sparkles } from "lucide-react";

export const Route = createFileRoute("/app/tools")({ component: Tools });

function Tools() {
  return (
    <>
      <Topbar title="Tools Hub" subtitle="All your AI superpowers in one place." />
      <main className="p-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {TOOLS.map((t) => (
            <div key={t.id} className={`rounded-2xl border border-border bg-card p-5 transition ${t.active ? "hover:border-brand/40 hover:bg-card-hover" : "opacity-70"}`}>
              <div className="flex items-start justify-between">
                <div className="text-3xl">{t.icon}</div>
                {t.active ? (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-green/15 text-brand-green">Active</span>
                ) : (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-muted text-muted-foreground inline-flex items-center gap-1"><Lock className="h-3 w-3" /> Soon</span>
                )}
              </div>
              <h3 className="mt-4 text-base font-extrabold">{t.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{t.desc}</p>
              <Button disabled={!t.active} className="w-full mt-4 bg-gradient-brand text-white font-bold disabled:opacity-50 disabled:bg-muted disabled:bg-none">
                <Sparkles className="h-4 w-4 mr-1.5" /> Launch
              </Button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
