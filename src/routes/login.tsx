import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/sasviral/Logo";
import { useAuth } from "@/lib/auth";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — SASViral" }, { name: "description", content: "Sign in to your SASViral creator account." }] }),
  component: LoginPage,
});

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4">
      <path fill="#EA4335" d="M12 11v3.2h7.6c-.3 1.7-2.2 5-7.6 5-4.6 0-8.3-3.8-8.3-8.5S7.4 2.2 12 2.2c2.6 0 4.4 1.1 5.4 2L19.7 2C18 .5 15.3-.5 12-.5 5.7-.5.7 4.5.7 11s5 11.5 11.3 11.5c6.5 0 10.8-4.6 10.8-11 0-.7-.1-1.3-.2-1.5H12z"/>
    </svg>
  );
}

function LoginPage() {
  const { signInWithGoogle, signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { setErr("Enter email and password"); return; }
    signIn({ id: "u_" + Date.now(), name: email.split("@")[0] || "Creator", email, role: "user", plan: "Standard" });
    toast.success("Welcome back!");
    navigate({ to: "/app/dashboard" });
  };

  const google = () => {
    signInWithGoogle();
    toast.success("Signed in with Google");
    navigate({ to: "/app/dashboard" });
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex relative overflow-hidden bg-bg-secondary border-r border-border">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="relative p-12 flex flex-col justify-between w-full">
          <Logo size={36} />
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">
              Welcome back to your <span className="text-gradient-brand">creator studio</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Pick up where you left off. Generate scripts, edit videos, schedule uploads — all from one beautiful dashboard.
            </p>
            <div className="mt-8 flex gap-2">
              {["AI Scripts", "TTS Voices", "Captions", "SEO", "Publish"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full bg-card/70 border border-border text-xs font-semibold">{t}</span>
              ))}
            </div>
          </div>
          <div className="text-xs text-muted-foreground">© 2026 SASViral · Built by Sawera, Faizan & Ahmed</div>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 flex justify-center"><Logo size={36} /></div>
          <h1 className="text-3xl font-extrabold">Sign in to SASViral</h1>
          <p className="mt-2 text-sm text-muted-foreground">Use your Google account or email to continue.</p>

          <Button onClick={google} variant="outline" className="w-full mt-6 h-11 font-semibold gap-2">
            <GoogleIcon /> Continue with Google
          </Button>

          <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex-1 h-px bg-border" /> OR <div className="flex-1 h-px bg-border" />
          </div>

          <form onSubmit={submit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="mt-1.5 h-11" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a className="text-xs text-brand hover:underline" href="#">Forgot?</a>
              </div>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="mt-1.5 h-11" />
            </div>
            {err && <div className="text-sm text-destructive">{err}</div>}
            <Button type="submit" className="w-full h-11 bg-gradient-brand text-white font-bold">Sign In</Button>
          </form>

          <p className="mt-6 text-sm text-center text-muted-foreground">
            New to SASViral?{" "}
            <Link to="/" className="text-brand font-semibold hover:underline">Explore plans</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
