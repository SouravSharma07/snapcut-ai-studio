import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Upload, Zap, Download, Shield, Globe, CreditCard, Image, Sparkles, Clock, CheckCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Remove backgrounds in under 5 seconds with AI precision" },
  { icon: Shield, title: "Secure Processing", desc: "Enterprise-grade encryption. Images auto-deleted after 24h" },
  { icon: Image, title: "HD Quality", desc: "Support for images up to 5000×5000px in JPG, PNG, WEBP" },
  { icon: Globe, title: "REST API", desc: "Integrate background removal into your apps with our API" },
  { icon: CreditCard, title: "Flexible Plans", desc: "Free tier with 5 images/day. Unlimited Pro plans available" },
  { icon: Download, title: "Instant Download", desc: "Download transparent PNGs immediately after processing" },
];

const steps = [
  { num: "01", title: "Upload", desc: "Drag & drop or browse for your image" },
  { num: "02", title: "Process", desc: "AI removes the background instantly" },
  { num: "03", title: "Download", desc: "Get your transparent PNG in seconds" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              AI-Powered Background Removal
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Remove Backgrounds{" "}
              <span className="text-gradient">Instantly</span> with AI
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Professional background removal in seconds. No design skills needed. 
              Upload, process, download — it's that simple.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/register">
                  <Upload className="w-5 h-5" />
                  Start Removing — Free
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/api-docs">
                  <Globe className="w-5 h-5" />
                  Explore API
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-secondary" /> No credit card</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-secondary" /> 5 free images/day</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-secondary" /> HD quality</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <div className="glass rounded-2xl p-8 text-center animate-float">
              <img src={logo} alt="SnapCut AI" className="w-32 h-32 mx-auto mb-4 rounded-2xl" />
              <p className="text-muted-foreground text-sm">Your workspace preview</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How It Works</h2>
            <p className="text-muted-foreground">Three simple steps to a clean background</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-black text-gradient mb-3">{step.num}</div>
                <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Why SnapCut AI?</h2>
            <p className="text-muted-foreground">Built for speed, quality, and scale</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                  <f.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12 max-w-2xl mx-auto"
          >
            <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-3">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">Join thousands of users removing backgrounds with AI</p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/register">Create Free Account</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
