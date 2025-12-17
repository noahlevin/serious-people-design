import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Brain, FileText, Target } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "The Interview",
      duration: "15–20 min",
      description: "A structured conversation about where you are, what's happening, and what's at stake. We ask the questions your friends are too polite to ask.",
      detail: "No prep required. Just show up and be honest.",
    },
    {
      number: "02",
      icon: Brain,
      title: "The Analysis",
      duration: "Instant",
      description: "We identify patterns in your situation—the real blockers, the hidden dynamics, the things you might be avoiding.",
      detail: "You'll see your situation with fresh eyes.",
    },
    {
      number: "03",
      icon: Target,
      title: "The Coaching Session",
      duration: "30 min",
      description: "A personalized session built around your specific situation. We work through the hard questions and build a concrete plan.",
      detail: "Pause anytime. Return when you're ready.",
    },
    {
      number: "04",
      icon: FileText,
      title: "The Deliverables",
      duration: "Yours to keep",
      description: "Walk away with actionable artifacts—conversation scripts, decision frameworks, week-by-week action plans tailored to your situation.",
      detail: "Everything you need to execute, not just insights.",
    },
  ];

  const differentiators = [
    {
      title: "Not therapy",
      description: "We're not here to explore your feelings. We're here to help you make a decision and execute it.",
    },
    {
      title: "Not generic advice",
      description: "Every recommendation is based on your specific situation, constraints, and goals.",
    },
    {
      title: "Not a quick fix",
      description: "Real career moves take time. We give you a 90-day plan, not a motivational quote.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="sp-container py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-muted rounded flex items-center justify-center">
              <span className="font-display font-semibold text-foreground text-sm">SP</span>
            </div>
            <span className="font-display font-medium text-foreground tracking-tight">
              SERIOUS PEOPLE
            </span>
          </Link>
          <Link 
            to="/app/login"
            className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
          >
            Sign in
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="sp-container-medium">
          <p className="sp-eyebrow text-accent mb-4">How It Works</p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 max-w-2xl">
            Career coaching that respects your time and intelligence.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            No fluff. No six-week programs. Just a focused conversation, a clear diagnosis, and a concrete plan you can actually execute.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="sp-container-medium">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="grid md:grid-cols-12 gap-6 md:gap-12 items-start"
              >
                {/* Number */}
                <div className="md:col-span-2">
                  <span className="font-display text-4xl md:text-5xl text-muted-foreground/30">
                    {step.number}
                  </span>
                </div>
                
                {/* Content */}
                <div className="md:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <step.icon className="w-5 h-5 text-accent" />
                    <span className="text-sm text-muted-foreground">{step.duration}</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                    {step.title}
                  </h2>
                  <p className="text-foreground leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    {step.detail}
                  </p>
                </div>

                {/* Visual placeholder */}
                <div className="hidden md:block md:col-span-3">
                  <div className="aspect-square bg-muted/50 border border-border" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What this isn't */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="sp-container-medium">
          <h2 className="font-display text-2xl md:text-3xl mb-12">
            What this isn't.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {differentiators.map((item) => (
              <div key={item.title}>
                <h3 className="font-medium text-background mb-2">{item.title}</h3>
                <p className="text-background/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="sp-container-medium">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <p className="sp-eyebrow text-muted-foreground mb-4">Who It's For</p>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                People at an inflection point.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You're not lost—you're stuck. You know something needs to change, but you're not sure what move to make or how to make it without blowing up your life.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 border border-border">
                <p className="text-foreground">
                  "I've been passed over for promotion twice and I don't know why."
                </p>
              </div>
              <div className="p-4 bg-muted/50 border border-border">
                <p className="text-foreground">
                  "I need to make a decision about this offer but I can't think clearly."
                </p>
              </div>
              <div className="p-4 bg-muted/50 border border-border">
                <p className="text-foreground">
                  "My manager says I'm doing great but nothing is changing."
                </p>
              </div>
              <div className="p-4 bg-muted/50 border border-border">
                <p className="text-foreground">
                  "I'm burning out but I can't afford to quit."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="sp-container-medium text-center">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            Ready to get unstuck?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Start with the free interview. We'll give you clarity on your situation—no commitment required.
          </p>
          <Link to="/interview">
            <button className="px-8 py-4 bg-foreground text-background text-base font-medium hover:bg-foreground/90 transition-colors inline-flex items-center gap-2">
              Start the Interview
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="sp-container-medium flex items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Serious People</p>
          <div className="flex items-center gap-6">
            <Link to="/how-it-works" className="hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link to="/app/login" className="hover:text-foreground transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorks;
