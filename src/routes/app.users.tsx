import { createFileRoute } from "@tanstack/react-router";
import { Topbar } from "@/components/sasviral/Topbar";
import { USERS } from "@/lib/mock";
import { useAuth } from "@/lib/auth";
import { Lock, Trash2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/app/users")({ component: UsersPage });

function UsersPage() {
  const { user } = useAuth();
  if (user?.role !== "super_admin") {
    return (
      <>
        <Topbar title="User Management" />
        <main className="p-10 flex items-center justify-center">
          <div className="text-center max-w-md">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-pink/15 text-brand-pink mb-4">
              <Lock className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-extrabold">Super Admin Only</h2>
            <p className="mt-2 text-muted-foreground text-sm">You need elevated permissions to view this page.</p>
          </div>
        </main>
      </>
    );
  }

  const roleStyle = (r: string) =>
    r === "super_admin" ? "bg-brand/15 text-brand"
      : r === "admin" ? "bg-brand-2/15 text-brand-2"
      : "bg-brand-yellow/15 text-brand-yellow";

  return (
    <>
      <Topbar title="User Management" subtitle={`${USERS.length} accounts in workspace`} />
      <main className="p-6">
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-bg-tertiary/60">
              <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground font-bold">
                <th className="p-4">User</th>
                <th className="p-4">Role</th>
                <th className="p-4">Plan</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {USERS.map((u) => (
                <tr key={u.id} className="border-t border-border hover:bg-card-hover transition">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-gradient-brand text-white font-bold inline-flex items-center justify-center text-xs">{u.name.slice(0,2).toUpperCase()}</div>
                      <div>
                        <div className="font-bold">{u.name}</div>
                        <div className="text-xs text-muted-foreground">{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${roleStyle(u.role)}`}>
                      {u.role.replace("_"," ")}
                    </span>
                  </td>
                  <td className="p-4 font-semibold">{u.plan}</td>
                  <td className="p-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${u.status === "active" ? "bg-brand-green/15 text-brand-green" : "bg-destructive/15 text-destructive"}`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-end gap-2">
                      {u.role === "admin" && (
                        <Button size="sm" variant="outline" className="h-8 text-brand-2 border-brand-2/40"><Shield className="h-3.5 w-3.5 mr-1" /> Perms</Button>
                      )}
                      {u.role !== "super_admin" && (
                        <Button size="sm" variant="outline" className="h-8 text-destructive border-destructive/40"><Trash2 className="h-3.5 w-3.5" /></Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
