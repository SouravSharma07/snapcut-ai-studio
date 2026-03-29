import { motion } from "framer-motion";
import { Code, Key, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const endpoints = [
  { method: "POST", path: "/api/v1/remove-bg", desc: "Remove background from an image" },
  { method: "GET", path: "/api/v1/status/:id", desc: "Check processing status" },
  { method: "GET", path: "/api/v1/credits", desc: "Get remaining credits" },
  { method: "GET", path: "/api/v1/history", desc: "List recent uploads" },
];

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">API Documentation</h1>
          <p className="text-muted-foreground text-lg">Integrate background removal into your applications</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {[
            { icon: Key, title: "API Keys", desc: "Generate keys from your dashboard" },
            { icon: Zap, title: "Rate Limits", desc: "100 req/min on Pro, 10 req/min on Free" },
            { icon: Shield, title: "Auth", desc: "Bearer token via X-API-Key header" },
            { icon: Code, title: "SDKs", desc: "JavaScript, Python, cURL examples" },
          ].map((item, i) => (
            <div key={item.title} className="glass rounded-xl p-4 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Endpoints</h2>
        <div className="space-y-3 mb-12">
          {endpoints.map((ep) => (
            <div key={ep.path} className="glass rounded-xl p-4 flex items-center gap-4">
              <span className={`px-2 py-1 rounded text-xs font-mono font-bold ${ep.method === "POST" ? "bg-secondary/20 text-secondary" : "bg-primary/20 text-primary"}`}>
                {ep.method}
              </span>
              <code className="font-mono text-sm text-foreground">{ep.path}</code>
              <span className="text-sm text-muted-foreground ml-auto hidden sm:block">{ep.desc}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
        <div className="glass rounded-xl p-6 mb-8">
          <pre className="text-sm overflow-x-auto text-muted-foreground">
{`curl -X POST https://api.snapcutai.com/v1/remove-bg \\
  -H "X-API-Key: your_api_key" \\
  -F "image=@photo.jpg"

# Response
{
  "id": "proc_abc123",
  "status": "completed",
  "result_url": "https://cdn.snapcutai.com/results/abc123.png",
  "credits_remaining": 47
}`}
          </pre>
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">Get Your API Key</Button>
        </div>
      </div>
    </div>
  );
}
