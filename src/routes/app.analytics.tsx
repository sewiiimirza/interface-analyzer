import { createFileRoute } from "@tanstack/react-router";
import { Topbar } from "@/components/sasviral/Topbar";
import { CHART_DATA, KPIS } from "@/lib/mock";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from "recharts";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/app/analytics")({ component: Analytics });

const CONTENT_MIX = [
  { name: "Videos", value: 68, color: "oklch(0.66 0.21 280)" },
  { name: "Images", value: 45, color: "oklch(0.78 0.16 350)" },
  { name: "Docs", value: 23, color: "oklch(0.83 0.13 195)" },
];

function Analytics() {
  return (
    <>
      <Topbar title="Analytics" subtitle="Performance insights across all niches." />
      <main className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <Tabs defaultValue="7d">
            <TabsList>
              <TabsTrigger value="7d">7 days</TabsTrigger>
              <TabsTrigger value="30d">30 days</TabsTrigger>
              <TabsTrigger value="90d">90 days</TabsTrigger>
              <TabsTrigger value="all">All time</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {KPIS.map((k) => (
            <div key={k.label} className="rounded-2xl border border-border bg-card p-5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{k.label}</div>
              <div className="mt-2 text-2xl font-extrabold">{k.value}</div>
              <div className="text-xs font-bold mt-1" style={{ color: "var(--brand-green)" }}>{k.change}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-extrabold mb-4">Daily Output</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={CHART_DATA}>
                <CartesianGrid stroke="oklch(0.25 0.04 280)" strokeDasharray="3 3" />
                <XAxis dataKey="day" stroke="oklch(0.65 0.025 280)" fontSize={12} />
                <YAxis stroke="oklch(0.65 0.025 280)" fontSize={12} />
                <Tooltip contentStyle={{ background: "oklch(0.14 0.03 280)", border: "1px solid oklch(0.25 0.04 280)", borderRadius: 8 }} />
                <Bar dataKey="videos" fill="oklch(0.66 0.21 280)" radius={[8,8,0,0]} />
                <Bar dataKey="signups" fill="oklch(0.83 0.13 195)" radius={[8,8,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-extrabold mb-4">Content Mix</h3>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={CONTENT_MIX} dataKey="value" innerRadius={50} outerRadius={80} paddingAngle={4}>
                  {CONTENT_MIX.map((c) => <Cell key={c.name} fill={c.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-2">
              {CONTENT_MIX.map((c) => (
                <div key={c.name} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: c.color }} />{c.name}
                  </span>
                  <span className="font-bold">{c.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
