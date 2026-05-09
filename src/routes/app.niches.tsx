import { createFileRoute } from "@tanstack/react-router";
import { Topbar } from "@/components/sasviral/Topbar";
import { Button } from "@/components/ui/button";
import { Plus, Upload, FileVideo, ImageIcon, FileText, MoreVertical } from "lucide-react";
import { NICHES } from "@/lib/mock";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const Route = createFileRoute("/app/niches")({ component: Niches });

function Niches() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Topbar title="Niche Manager" subtitle="Organize content niches and upload assets." />
      <main className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{NICHES.length} niches · {NICHES.reduce((s,n)=>s+n.videos,0)} videos total</p>
          <div className="flex gap-2">
            <Button onClick={() => setOpen(true)} variant="outline"><Upload className="h-4 w-4 mr-2" /> Upload</Button>
            <Button className="bg-gradient-brand text-white font-bold"><Plus className="h-4 w-4 mr-2" /> New Niche</Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {NICHES.map((n) => (
            <div key={n.id} className="rounded-2xl border border-border bg-card p-5 hover:border-brand/40 hover:bg-card-hover transition">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-extrabold">{n.name}</h3>
                  <span className={`mt-1 inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    n.status === "active" ? "bg-brand-green/15 text-brand-green" : "bg-brand-yellow/15 text-brand-yellow"
                  }`}>{n.status}</span>
                </div>
                <button className="text-muted-foreground hover:text-foreground"><MoreVertical className="h-4 w-4" /></button>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div>
                  <FileVideo className="h-4 w-4 mx-auto text-brand" />
                  <div className="mt-1 text-lg font-extrabold">{n.videos}</div>
                  <div className="text-[10px] uppercase text-muted-foreground font-bold">Videos</div>
                </div>
                <div>
                  <ImageIcon className="h-4 w-4 mx-auto text-brand-pink" />
                  <div className="mt-1 text-lg font-extrabold">{n.images}</div>
                  <div className="text-[10px] uppercase text-muted-foreground font-bold">Images</div>
                </div>
                <div>
                  <FileText className="h-4 w-4 mx-auto text-brand-2" />
                  <div className="mt-1 text-lg font-extrabold">{n.docs}</div>
                  <div className="text-[10px] uppercase text-muted-foreground font-bold">Docs</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-[520px]">
            <DialogHeader>
              <DialogTitle>Upload Assets</DialogTitle>
              <DialogDescription>Drop files here or pick a category below.</DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="videos">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="images">Images</TabsTrigger>
                <TabsTrigger value="docs">Documents</TabsTrigger>
              </TabsList>
              {["videos","images","docs"].map((t) => (
                <TabsContent key={t} value={t}>
                  <div className="border-2 border-dashed border-border rounded-2xl p-10 text-center">
                    <Upload className="h-8 w-8 mx-auto text-brand" />
                    <p className="mt-3 text-sm font-semibold">Drag & drop {t} here</p>
                    <p className="text-xs text-muted-foreground mt-1">Max: Videos 500MB · Images 10MB · Docs 50MB</p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </DialogContent>
        </Dialog>
      </main>
    </>
  );
}
