import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="SnapCut AI" className="h-8 w-8 rounded-lg" />
              <span className="text-lg font-bold text-gradient">SnapCut AI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI-powered background removal in seconds. Clean, fast, professional.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Product</h4>
            <div className="space-y-2">
              <Link to="/features" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Features</Link>
              <Link to="/pricing" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
              <Link to="/api-docs" className="block text-sm text-muted-foreground hover:text-primary transition-colors">API</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Company</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              <Link to="/blog" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Legal</h4>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
              <Link to="/terms" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Terms</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SnapCut AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
