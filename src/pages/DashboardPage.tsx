import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Image, Download, Sparkles, Clock, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const MAX_SIZE = 10 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export default function DashboardPage() {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleFile = useCallback((file: File) => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      alert("Please upload a JPG, PNG, or WEBP image.");
      return;
    }
    if (file.size > MAX_SIZE) {
      alert("File must be under 10MB.");
      return;
    }
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
  }, [handleFile]);

  const handleProcess = () => {
    setProcessing(true);
    // Will call n8n webhook
    setTimeout(() => setProcessing(false), 3000);
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Image, label: "Images Today", value: "2 / 5" },
            { icon: CreditCard, label: "Credits Left", value: "3" },
            { icon: Clock, label: "Avg Speed", value: "3.2s" },
            { icon: Sparkles, label: "Plan", value: "Free" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="font-semibold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Zone */}
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div
              className={`glass rounded-2xl p-8 border-2 border-dashed transition-colors cursor-pointer min-h-[320px] flex flex-col items-center justify-center ${
                dragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
              }`}
              onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
              onDragLeave={() => setDragActive(false)}
              onDrop={handleDrop}
              onClick={() => document.getElementById("file-input")?.click()}
            >
              <input
                id="file-input"
                type="file"
                accept=".jpg,.jpeg,.png,.webp"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
              />
              {preview ? (
                <img src={preview} alt="Preview" className="max-h-64 rounded-lg object-contain" />
              ) : (
                <>
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4">
                    <Upload className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Drag & Drop or Browse</h3>
                  <p className="text-sm text-muted-foreground">JPG, PNG, WEBP • Max 10MB</p>
                </>
              )}
            </div>
            {selectedFile && (
              <div className="mt-4 flex gap-3">
                <Button variant="hero" className="flex-1" onClick={handleProcess} disabled={processing}>
                  {processing ? (
                    <><span className="animate-spin mr-2">⏳</span>Processing...</>
                  ) : (
                    <><Sparkles className="w-4 h-4" /> Remove Background</>
                  )}
                </Button>
                <Button variant="outline" onClick={() => { setSelectedFile(null); setPreview(null); }}>
                  Clear
                </Button>
              </div>
            )}
          </motion.div>

          {/* Result */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="glass rounded-2xl p-8 min-h-[320px] flex flex-col items-center justify-center">
              <div className="w-full h-full flex items-center justify-center" style={{ backgroundImage: "repeating-conic-gradient(hsl(var(--muted)) 0% 25%, transparent 0% 50%)", backgroundSize: "16px 16px" }}>
                <div className="text-center p-8">
                  <Download className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-40" />
                  <p className="text-muted-foreground text-sm">Result will appear here</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent History */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Recent Uploads</h2>
          <div className="glass rounded-xl p-6 text-center text-muted-foreground">
            <Image className="w-10 h-10 mx-auto mb-2 opacity-40" />
            <p className="text-sm">No uploads yet. Start by uploading an image above.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
