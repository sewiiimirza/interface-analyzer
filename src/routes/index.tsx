import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/sasviral/Logo";
import { PricingSection } from "@/components/sasviral/PricingSection";
import { TOOLS } from "@/lib/mock";
import { ArrowRight, Play, Sparkles, Zap, Wand2, Mic, Captions, TrendingUp, Rocket, Image as ImageIcon, MessageSquare, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SASViral — Your Complete AI-Powered YouTube Studio" },
      { name: "description", content: "SASViral helps creators turn ideas into viral YouTube & TikTok content. AI scripts, video clips, captions, SEO, and one-click publishing." },
      { property: "og:title", content: "SASViral — AI YouTube & TikTok Studio" },
      { property: "og:description", content: "Generate scripts, edit videos, add captions, and publish — all from one beautiful AI portal." },
    ],
  }),
  component: Landing,
});

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#tools" className="hover:text-foreground transition">Tools</a>
          <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm"><Link to="/login">Log in</Link></Button>
          <Button asChild size="sm" className="bg-gradient-brand text-white font-semibold">
            <Link to="/login">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 text-xs font-semibold text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-brand" /> AI YouTube + TikTok Automation Suite
          </span>
          <h1 className="mt-5 text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
            Your Complete <span className="text-gradient-brand">AI-Powered</span> YouTube Studio
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            From scripting to publishing — generate professional videos with AI scripts, scenes, voices, captions, SEO and one-click upload. Built by SASViral.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-brand text-white font-bold shadow-glow">
              <Link to="/login">Start Creating Free <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#features"><Play className="mr-2 h-4 w-4" /> See How It Works</a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-green" /> No credit card required</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-2" /> Cancel anytime</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-pink" /> 14-day trial</span>
          </div>
        </div>

        <HeroPreview />
      </div>

      <div className="border-y border-border bg-card/40">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-10 text-center">
          {[
            { v: "10,000+", l: "Active Creators" },
            { v: "500+", l: "Niche Channels" },
            { v: "18+", l: "AI Tools" },
            { v: "4.9/5", l: "User Rating" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl md:text-4xl font-extrabold text-gradient-brand">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground font-semibold">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroPreview() {
  const items = [
    { i: <Wand2 className="h-5 w-5" />, t: "AI Script", c: "var(--brand)" },
    { i: <Captions className="h-5 w-5" />, t: "Captions", c: "var(--brand-2)" },
    { i: <Mic className="h-5 w-5" />, t: "Voiceover", c: "var(--brand-pink)" },
    { i: <ImageIcon className="h-5 w-5" />, t: "Thumbnails", c: "var(--brand-yellow)" },
    { i: <TrendingUp className="h-5 w-5" />, t: "Trends", c: "var(--brand-green)" },
    { i: <Rocket className="h-5 w-5" />, t: "Publish", c: "var(--brand)" },
  ];
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
      <div className="relative rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-6 shadow-card">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold">SASViral Engine</div>
            <div className="text-lg font-extrabold mt-0.5">Production Studio</div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-green/15 text-brand-green text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" /> Live
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-5">
          {items.map((x) => (
            <div key={x.t} className="rounded-2xl border border-border bg-bg-tertiary/60 p-3 hover:bg-card-hover transition">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: `color-mix(in oklab, ${x.c} 20%, transparent)`, color: x.c }}>
                {x.i}
              </div>
              <div className="mt-2 text-sm font-semibold">{x.t}</div>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-border bg-background/50 p-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground font-semibold uppercase tracking-wider">Video Generation Pipeline</span>
            <span className="text-brand font-bold">82%</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-bg-tertiary overflow-hidden">
            <div className="h-full bg-gradient-brand" style={{ width: "82%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Features() {
  const features = [
    { i: Wand2, t: "AI Script Generation", d: "Generate viral hooks, full scripts, and SEO outlines in seconds.", c: "var(--brand)" },
    { i: Play, t: "AI Video Clips", d: "Auto-cut long videos into perfectly edited shorts.", c: "var(--brand-2)" },
    { i: Mic, t: "Text to Speech", d: "Multi-character premium voices in 30+ languages.", c: "var(--brand-pink)" },
    { i: Captions, t: "Dynamic Captions", d: "Animated viral-style captions with one click.", c: "var(--brand-yellow)" },
    { i: TrendingUp, t: "SEO Optimization", d: "Optimize titles, tags, and descriptions for max reach.", c: "var(--brand-green)" },
    { i: Rocket, t: "One-Click Publishing", d: "Cross-post to YouTube and TikTok at the click of a button.", c: "var(--brand-3)" },
  ];
  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-gradient-brand">Features</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">Everything You Need to Create</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Powerful AI tools that handle every aspect of YouTube video creation, from scripting to publishing.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => (
          <div key={f.t} className="group rounded-2xl border border-border bg-card p-6 hover:border-brand/40 hover:bg-card-hover transition-all">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl mb-4"
              style={{ background: `color-mix(in oklab, ${f.c} 20%, transparent)`, color: f.c }}>
              <f.i className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-extrabold">{f.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ToolsGrid() {
  return (
    <section id="tools" className="py-24 px-6 bg-bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-gradient-brand">Tools</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">Powerful AI Tools at Your Fingertips</h2>
          <p className="mt-3 text-muted-foreground">A comprehensive suite to scale every step of your content creation workflow.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {TOOLS.map((t) => (
            <div key={t.id} className="rounded-2xl border border-border bg-card p-5 hover:border-brand/40 transition-all">
              <div className="text-2xl">{t.icon}</div>
              <h4 className="mt-3 text-sm font-extrabold">{t.name}</h4>
              <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    { n: "01", t: "Enter Your Topic", d: "Give us your niche or topic idea." },
    { n: "02", t: "AI Generates Script", d: "Hook, body, CTA — fully optimized." },
    { n: "03", t: "Video Production", d: "Voiceover, visuals, captions, music." },
    { n: "04", t: "Download & Publish", d: "One-click publish to YouTube & TikTok." },
  ];
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-gradient-brand">How It Works</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">From Idea to YouTube in 4 Steps</h2>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <div key={s.n} className="relative rounded-2xl border border-border bg-card p-6">
            <div className="text-xs font-bold text-muted-foreground tracking-widest uppercase">Step {s.n}</div>
            <h4 className="mt-3 text-lg font-extrabold">{s.t}</h4>
            <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            {i < steps.length - 1 && <ChevronRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-brand/60" />}
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-brand p-10 md:p-14 text-center shadow-glow">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Ready to Transform Your YouTube Channel?</h2>
        <p className="mt-3 text-white/85 max-w-2xl mx-auto">Join thousands of creators who are already using AI to scale their content effortlessly.</p>
        <Button asChild size="lg" className="mt-6 bg-white text-brand font-bold hover:bg-white/90">
          <Link to="/login"><Zap className="mr-2 h-4 w-4" /> Get Started Free</Link>
        </Button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="about" className="border-t border-border bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Built by a 3-member team — Sawera, Faizan & Ahmed — SASViral is the all-in-one AI studio for YouTube & TikTok creators.
          </p>
        </div>
        <div>
          <h5 className="text-sm font-extrabold uppercase tracking-wider text-muted-foreground">Product</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#features" className="hover:text-brand">Features</a></li>
            <li><a href="#tools" className="hover:text-brand">Tools</a></li>
            <li><a href="#pricing" className="hover:text-brand">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-extrabold uppercase tracking-wider text-muted-foreground">Contact</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2"><MessageSquare className="h-4 w-4 text-brand" /> WhatsApp: 0305-9526598</li>
            <li className="text-muted-foreground">© 2026 SASViral. All rights reserved.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <ToolsGrid />
        <Steps />
        <PricingSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
