import { Bell, Search } from "lucide-react";
import { useAuth, type Role } from "@/lib/auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function Topbar({ title, subtitle }: { title: string; subtitle?: string }) {
  const { user, setRole } = useAuth();
  return (
    <header className="h-16 px-6 flex items-center justify-between bg-bg-secondary border-b border-border sticky top-0 z-30">
      <div>
        <h1 className="text-xl font-extrabold leading-tight">{title}</h1>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 px-3 h-9 rounded-lg border border-border bg-bg-tertiary/60 w-72">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input className="bg-transparent outline-none text-sm flex-1 placeholder:text-muted-foreground" placeholder="Search niches, tools, users…" />
        </div>
        <Select value={user?.role} onValueChange={(v) => setRole(v as Role)}>
          <SelectTrigger className="w-[150px] h-9 text-xs font-semibold">
            <SelectValue placeholder="Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="super_admin">Super Admin</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="user">User</SelectItem>
          </SelectContent>
        </Select>
        <button className="relative h-9 w-9 inline-flex items-center justify-center rounded-lg border border-border bg-bg-tertiary/60 hover:bg-card-hover">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-pink" />
        </button>
        <Avatar className="h-9 w-9">
          <AvatarFallback className="bg-gradient-brand text-white text-xs font-bold">
            {(user?.name ?? "U").slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
