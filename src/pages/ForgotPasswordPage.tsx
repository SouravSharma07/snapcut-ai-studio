import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <img src={logo} alt="SnapCut AI" className="w-16 h-16 mx-auto mb-4 rounded-2xl" />
          <h1 className="text-2xl font-bold">Reset Password</h1>
          <p className="text-sm text-muted-foreground mt-1">We'll send you a reset link</p>
        </div>
        <div className="glass rounded-2xl p-6">
          <form className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-sm">Email</Label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input id="email" type="email" placeholder="you@example.com" className="pl-9" />
              </div>
            </div>
            <Button variant="hero" className="w-full" type="submit">Send Reset Link</Button>
          </form>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          <Link to="/login" className="text-primary hover:underline">Back to sign in</Link>
        </p>
      </div>
    </div>
  );
}
