import { createFileRoute } from "@tanstack/react-router";
import { Topbar } from "@/components/sasviral/Topbar";
import { KPIS, CHART_DATA, ACTIVITY } from "@/lib/mock";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

export const Route = createFileRoute("/app/dashboard")({ component: Dashboard });

function StatCard({ label, value, change, color }: { label: string; value: string; change: string; color: string }) {
  return (
    <div className="relative rounded-2xl border border-border bg-card p-5 overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 rounded-full" style={{ background: color, opacity: 0.15 }} />
      <div className="relative">
        <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-2 text-3xl font-extrabold">{value}</div>
        <div className="mt-2 flex items-center gap-1 text-xs font-bold" style={{ color: "var(--brand-green)" }}>
          <TrendingUp className="h-3.5 w-3.5" /> {change}
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <>
      <Topbar title="Dashboard" subtitle="Welcome back — here's what's happening today." />
      <main className="p-6 space-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {KPIS.map((k) => <StatCard key={k.label} {...k} />)}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-extrabold">Performance Overview</h3>
                <p className="text-xs text-muted-foreground">Videos generated & signups, last 7 days</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-brand/15 text-brand text-xs font-bold">Weekly</span>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={CHART_DATA}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.66 0.21 280)" stopOpacity={0.7} />
                    <stop offset="100%" stopColor="oklch(0.66 0.21 280)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.83 0.13 195)" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="oklch(0.83 0.13 195)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="oklch(0.25 0.04 280)" strokeDasharray="3 3" />
                <XAxis dataKey="day" stroke="oklch(0.65 0.025 280)" fontSize={12} />
                <YAxis stroke="oklch(0.65 0.025 280)" fontSize={12} />
                <Tooltip contentStyle={{ background: "oklch(0.14 0.03 280)", border: "1px solid oklch(0.25 0.04 280)", borderRadius: 8 }} />
                <Area type="monotone" dataKey="videos" stroke="oklch(0.66 0.21 280)" fill="url(#g1)" strokeWidth={2} />
                <Area type="monotone" dataKey="signups" stroke="oklch(0.83 0.13 195)" fill="url(#g2)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-extrabold">Recent Activity</h3>
              <a className="text-xs text-brand font-bold inline-flex items-center gap-1" href="#">View all <ArrowUpRight className="h-3 w-3" /></a>
            </div>
            <ul className="space-y-3">
              {ACTIVITY.map((a, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ background: a.color }} />
                  <div className="flex-1">
                    <div className="text-sm font-semibold">{a.title}</div>
                    <div className="text-xs text-muted-foreground">{a.meta}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
