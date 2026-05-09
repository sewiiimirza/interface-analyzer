import { createFileRoute } from "@tanstack/react-router";
import { Topbar } from "@/components/sasviral/Topbar";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Key, Sparkles } from "lucide-react";

export const Route = createFileRoute("/app/profile")({ component: ProfilePage });

function ProfilePage() {
  const { user } = useAuth();
  return (
    <>
      <Topbar title="Profile" subtitle="Your account & preferences" />
      <main className="p-6">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 flex items-center gap-5">
            <div className="h-20 w-20 rounded-2xl bg-gradient-brand text-white font-extrabold text-2xl inline-flex items-center justify-center shadow-glow">
              {(user?.name ?? "U").slice(0,2).toUpperCase()}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-extrabold">{user?.name}</h2>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
              <span className="mt-2 inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-brand/15 text-brand">{user?.role.replace("_"," ")}</span>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-extrabold mb-4">Account info</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Label>Display name</Label><Input className="mt-1.5" defaultValue={user?.name} /></div>
              <div><Label>Email</Label><Input className="mt-1.5" defaultValue={user?.email} /></div>
            </div>
            <Button className="mt-5 bg-gradient-brand text-white font-bold">Save changes</Button>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-extrabold mb-2 flex items-center gap-2"><Key className="h-4 w-4 text-brand" /> Security</h3>
            <p className="text-sm text-muted-foreground">Change your password to keep the account secure.</p>
            <Button variant="outline" className="mt-4">Change password</Button>
          </div>

          {user?.role === "user" && (
            <div className="rounded-2xl bg-gradient-brand p-6 text-white shadow-glow">
              <div className="text-xs font-bold uppercase tracking-wider opacity-80">Subscription</div>
              <div className="mt-1 flex items-baseline gap-3">
                <h3 className="text-2xl font-extrabold">{user?.plan}</h3>
                <span className="text-sm opacity-90">renews May 30, 2026</span>
              </div>
              <Button variant="outline" className="mt-4 border-white/40 text-white hover:bg-white/10"><Sparkles className="h-4 w-4 mr-1.5" /> Manage Plan</Button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
