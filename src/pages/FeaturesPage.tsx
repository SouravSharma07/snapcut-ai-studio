import { motion } from "framer-motion";
import { Zap, Shield, Image, Globe, Clock, Layers, Cpu, Download } from "lucide-react";

const features = [
  { icon: Cpu, title: "AI-Powered Precision", desc: "Advanced deep learning models detect subjects with pixel-perfect accuracy, handling hair, fur, and complex edges." },
  { icon: Zap, title: "Sub-5s Processing", desc: "Optimized pipeline delivers results in under 5 seconds for most images, even at high resolution." },
  { icon: Image, title: "Up to 5000×5000px", desc: "Support for high-resolution images in JPG, PNG, and WEBP formats up to 10MB." },
  { icon: Shield, title: "Privacy First", desc: "All images are encrypted in transit and auto-deleted within 24 hours. No permanent storage." },
  { icon: Globe, title: "RESTful API", desc: "Integrate background removal into your products with our developer-friendly API and SDKs." },
  { icon: Layers, title: "Bulk Processing", desc: "Upload and process multiple images at once with Pro plans for maximum efficiency." },
  { icon: Clock, title: "99.5% Uptime", desc: "Enterprise-grade infrastructure with global CDN ensures your service is always available." },
  { icon: Download, title: "Transparent PNG", desc: "Download clean, high-quality transparent PNGs ready for any design project." },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-3">Powerful Features</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Everything you need for professional background removal at scale
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
