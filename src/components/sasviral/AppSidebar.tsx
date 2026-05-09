import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { LayoutDashboard, FolderKanban, BarChart3, Wrench, CreditCard, Users, User as UserIcon, LogOut } from "lucide-react";
import { Logo } from "./Logo";
import { useAuth, type Role } from "@/lib/auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

type Item = { to: string; label: string; icon: any; roles: Role[] };
const ITEMS: Item[] = [
  { to: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard, roles: ["super_admin", "admin"] },
  { to: "/app/niches", label: "Niche Manager", icon: FolderKanban, roles: ["super_admin", "admin"] },
  { to: "/app/analytics", label: "Analytics", icon: BarChart3, roles: ["super_admin", "admin"] },
  { to: "/app/tools", label: "Tools Hub", icon: Wrench, roles: ["super_admin", "admin", "user"] },
  { to: "/app/billing", label: "Billing", icon: CreditCard, roles: ["super_admin", "admin", "user"] },
  { to: "/app/users", label: "User Management", icon: Users, roles: ["super_admin"] },
  { to: "/app/profile", label: "Profile", icon: UserIcon, roles: ["super_admin", "admin", "user"] },
];

export function AppSidebar() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const role = user?.role ?? "user";
  const items = ITEMS.filter((i) => i.roles.includes(role));

  return (
    <aside className="w-64 shrink-0 hidden md:flex flex-col bg-bg-secondary border-r border-border">
      <div className="h-16 px-5 flex items-center border-b border-border">
        <Logo size={30} />
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {items.map((it) => {
          const active = path === it.to || path.startsWith(it.to + "/");
          return (
            <Link
              key={it.to}
              to={it.to}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                active
                  ? "bg-gradient-brand text-white shadow-glow"
                  : "text-muted-foreground hover:bg-card-hover hover:text-foreground"
              }`}
            >
              <it.icon className="h-4 w-4" />
              {it.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-3 border-t border-border">
        <div className="flex items-center gap-3 px-2 py-2">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-gradient-brand text-white text-xs font-bold">
              {(user?.name ?? "U").slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-bold truncate">{user?.name}</div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">{role.replace("_", " ")}</div>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="w-full justify-start mt-1 text-muted-foreground"
          onClick={() => { signOut(); navigate({ to: "/" }); }}>
          <LogOut className="h-4 w-4 mr-2" /> Sign out
        </Button>
      </div>
    </aside>
  );
}
