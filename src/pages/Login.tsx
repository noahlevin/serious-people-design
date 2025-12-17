import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, MessageSquare } from "lucide-react";

type LoginState = "form" | "sent";

const Login = () => {
  const [state, setState] = useState<LoginState>("form");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setState("sent");
    }
  };

  const handleGoogleLogin = () => {
    // Mock Google login - would integrate with Supabase
    console.log("Google login clicked");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="sp-container py-4 flex items-center gap-3">
          <div className="w-9 h-9 bg-muted rounded flex items-center justify-center">
            <span className="font-display font-semibold text-foreground text-sm">SP</span>
          </div>
          <span className="font-display font-medium text-foreground tracking-tight">
            SERIOUS PEOPLE
          </span>
        </div>
      </header>

      {/* Main content */}
      <main className="flex items-center justify-center px-6 py-16 md:py-24">
        <div className="w-full max-w-md">
          <div className="bg-card border border-border rounded-sm p-8 md:p-10">
            <h1 className="font-display text-2xl md:text-3xl text-foreground text-center mb-8">
              Log in to continue
            </h1>

            {state === "form" ? (
              <>
                {/* Google login */}
                <Button
                  variant="outline"
                  className="w-full h-12 text-base font-medium mb-6"
                  onClick={handleGoogleLogin}
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </Button>

                {/* Divider */}
                <div className="sp-divider text-sm text-muted-foreground mb-6">
                  or
                </div>

                {/* Email form */}
                <form onSubmit={handleSubmit}>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email address
                  </label>
                  <div className="relative mb-6">
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 pr-12"
                      required
                    />
                    <MessageSquare className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 text-base font-medium bg-foreground text-background hover:bg-foreground/90"
                  >
                    Send login link
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground text-center mt-6">
                  Logging in allows us to save your progress so you can pick up where you left off.
                </p>
              </>
            ) : (
              /* Email sent state */
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-display text-xl text-foreground mb-2">
                  Check your email
                </h2>
                <p className="text-muted-foreground mb-1">
                  We sent a login link to
                </p>
                <p className="font-medium text-foreground mb-2">
                  {email}
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  The link will expire in 15 minutes.
                </p>
                <button
                  onClick={() => setState("form")}
                  className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors"
                >
                  Use a different email
                </button>

                <p className="text-sm text-muted-foreground mt-8">
                  Logging in allows us to save your progress so you can pick up where you left off.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
