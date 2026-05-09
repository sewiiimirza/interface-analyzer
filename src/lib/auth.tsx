import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Role = "super_admin" | "admin" | "user";
export interface User { id: string; name: string; email: string; role: Role; avatar?: string; plan?: string }

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (u: User) => void;
  signInWithGoogle: () => void;
  signOut: () => void;
  setRole: (r: Role) => void;
}

const AuthCtx = createContext<AuthState | null>(null);

const KEY = "sasviral.user";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem(KEY);
    if (raw) try { setUser(JSON.parse(raw)); } catch {}
  }, []);
  const persist = (u: User | null) => {
    setUser(u);
    if (typeof window !== "undefined") {
      if (u) localStorage.setItem(KEY, JSON.stringify(u));
      else localStorage.removeItem(KEY);
    }
  };
  const value: AuthState = {
    user,
    isAuthenticated: !!user,
    signIn: persist,
    signInWithGoogle: () =>
      persist({ id: "u_1", name: "Sawera", email: "sawera@sasviral.app", role: "super_admin", plan: "Super Unlimited" }),
    signOut: () => persist(null),
    setRole: (r) => user && persist({ ...user, role: r }),
  };
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
  const v = useContext(AuthCtx);
  if (!v) throw new Error("useAuth outside AuthProvider");
  return v;
}
