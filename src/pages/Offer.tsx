import { Link } from "react-router-dom";
import { Check, Clock, Lock, Shield, User } from "lucide-react";

const Offer = () => {
  const userName = "Sarah";

  const modules = [
    {
      number: 1,
      title: "The Performance Paradox",
      description: "Understand why \"doing good work\" hasn't translated to advancement",
      duration: "10–15 min",
      outcome: "Clarity on what's actually blocking your promotion",
      status: "upcoming" as const,
    },
    {
      number: 2,
      title: "The Family Factor",
      description: "Map your options with realistic timelines and constraints",
      duration: "10–15 min",
      outcome: "A clear view of 2-3 paths that work with your life",
      status: "upcoming" as const,
    },
    {
      number: 3,
      title: "The Decisive Move",
      description: "Build a concrete action plan for the next 90 days",
      duration: "10–15 min",
      outcome: "A step-by-step plan with decision points and fallback options",
      status: "upcoming" as const,
    },
  ];

  const deliverables = [
    { title: "Decision Snapshot", description: "A concise summary of your situation, options, and recommended path forward" },
    { title: "Boss Conversation Plan", description: "Scripts and strategies for navigating your manager conversation" },
    { title: "Action Plan", description: "A time-boxed plan with concrete steps and decision checkpoints" },
    { title: "Module Recap", description: "Key insights and decisions from each coaching session" },
    { title: "Curated Resources", description: "Articles, books, and tools specifically chosen for your situation" },
    { title: "Promotion Positioning Doc", description: "Custom artifact for your situation" },
  ];

  const whyThisMatters = [
    "Get clarity on whether your manager is actually in your corner — we'll decode the \"supportive in 1-on-1s but doesn't advocate in calibrations\" dynamic",
    "Make a decision that accounts for your family timeline — this isn't just career moves, it's about planning around parental leave",
    "Stop spinning on \"am I good enough?\" — the vague feedback is designed to keep you guessing; we'll break that cycle",
  ];

  const features = [
    { icon: Clock, title: "30 Minutes", subtitle: "Focused, structured session" },
    { icon: Lock, title: "Pause Anytime", subtitle: "Return when you're ready" },
    { icon: Shield, title: "Private & Secure", subtitle: "Your data is protected" },
    { icon: User, title: "Tailored to You", subtitle: "Based on your interview" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="sp-container py-4 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-muted rounded flex items-center justify-center">
              <span className="font-display font-semibold text-foreground text-sm">SP</span>
            </div>
            <span className="font-display font-medium text-foreground tracking-tight">
              SERIOUS PEOPLE
            </span>
          </Link>
        </div>
      </header>
      {/* Hero */}
      <section className="bg-muted/30 border-b border-border py-12 md:py-16">
        <div className="sp-container-medium text-center">
          <p className="sp-eyebrow text-accent mb-3">Your Coaching Plan</p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            {userName}, Your Plan is Ready
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            We've designed a personalized session based on your situation.
          </p>
          <p className="text-muted-foreground mb-6">
            30 minutes to clarity. Pause and return anytime.
          </p>
          <button className="px-8 py-4 bg-foreground text-background text-base font-medium hover:bg-foreground/90 transition-colors">
            Start Your Session — <span className="line-through opacity-60">$98</span> $48
          </button>
        </div>
      </section>

      {/* Journey */}
      <section className="sp-section">
        <div className="sp-container-medium">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
            {userName}'s Coaching Journey
          </h2>

          {/* Completed interview */}
          <div className="bg-card border border-border p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="sp-eyebrow text-primary">Complete</span>
            </div>
            <p className="sp-eyebrow text-muted-foreground mb-1">Interview</p>
            <h3 className="font-display text-xl text-foreground mb-2">Discovery Session</h3>
            <p className="text-muted-foreground mb-4">
              We explored your current situation, constraints, and what you're looking for next.
            </p>
            <p className="text-sm text-muted-foreground">Completed today</p>
          </div>

          {/* Upcoming modules */}
          <div className="space-y-4">
            <p className="sp-eyebrow text-muted-foreground">Up Next</p>
            {modules.map((module) => (
              <div key={module.number} className="bg-card border border-border p-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="sp-eyebrow text-muted-foreground">Module {module.number}</p>
                  <span className="text-sm text-muted-foreground">{module.duration}</span>
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{module.title}</h3>
                <p className="text-muted-foreground mb-4">{module.description}</p>
                <div className="bg-muted/50 p-3 rounded-sm">
                  <p className="text-sm">
                    <span className="font-medium text-foreground">What you'll get: </span>
                    <span className="text-muted-foreground">{module.outcome}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="sp-section bg-muted/30 border-y border-border">
        <div className="sp-container-medium">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">
            {userName}'s Tools to Take Away
          </h2>
          <p className="text-muted-foreground mb-8">
            After completing the session, you'll receive a comprehensive package of personalized deliverables:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {deliverables.map((item) => (
              <div key={item.title} className="bg-card border border-border p-5">
                <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this matters */}
      <section className="sp-section">
        <div className="sp-container-medium">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
            Why This Matters for {userName}
          </h2>

          <ul className="space-y-4 mb-12">
            {whyThisMatters.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <p className="text-foreground">{item}</p>
              </li>
            ))}
          </ul>

          {/* Features grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-4">
                <feature.icon className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                <p className="font-medium text-foreground text-sm">{feature.title}</p>
                <p className="text-xs text-muted-foreground">{feature.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="bg-foreground text-background p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl md:text-3xl mb-4">
              Ready to move forward?
            </h3>
            <p className="text-background/70 mb-6">
              Your personalized coaching session is waiting.
            </p>
            <button className="px-8 py-4 bg-background text-foreground text-base font-medium hover:bg-background/90 transition-colors">
              Start Your Session — <span className="line-through opacity-60">$98</span> $48
            </button>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 border-t border-border">
        <div className="sp-container-medium text-center">
          <blockquote className="font-display text-xl md:text-2xl text-foreground italic mb-4">
            "You make your own reality."
          </blockquote>
          <cite className="text-sm text-muted-foreground not-italic">— Logan Roy</cite>
        </div>
      </section>
    </div>
  );
};

export default Offer;
