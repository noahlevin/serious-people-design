import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const situations = [
  "wondering if it's time to leave",
  "dealing with a difficult manager",
  "burned out but unsure what's next",
  "negotiating your exit",
  "considering a counter-offer",
  "stuck between two opportunities",
];

const Landing = () => {
  const [currentSituation, setCurrentSituation] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSituation((prev) => (prev + 1) % situations.length);
        setIsVisible(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - Simple, understated */}
      <nav className="sp-container py-8 flex items-center justify-between">
        <div className="font-display text-lg italic">
          Serious People
        </div>
        <div className="flex items-center gap-8">
          <a href="/guides" className="sp-link text-sm text-muted-foreground hover:text-foreground transition-colors">
            Guides
          </a>
          <a href="/resources" className="sp-link text-sm text-muted-foreground hover:text-foreground transition-colors">
            Resources
          </a>
          <a href="/login" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            Log in
          </a>
        </div>
      </nav>

      {/* Hero - Book-like, centered, intimate */}
      <section className="sp-container sp-section">
        <div className="max-w-2xl mx-auto text-center">
          <p className="sp-chapter animate-fade-in">
            A guide for senior professionals
          </p>
          
          <h1 className="text-balance mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            You're{" "}
            <span 
              className={`text-primary transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              {situations[currentSituation]}
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            A structured coaching experience that helps you think clearly about 
            your career—and leave with a concrete plan, not vague advice.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <button className="sp-btn sp-btn-primary group">
              Start your free interview
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="sp-btn sp-btn-ghost">
              See how it works
            </button>
          </div>
        </div>
      </section>

      {/* Ornamental divider */}
      <div className="sp-rule-ornament">❧</div>

      {/* Pull Quote */}
      <section className="sp-container sp-section-sm">
        <div className="max-w-xl mx-auto">
          <blockquote className="sp-quote">
            "I spent months going in circles. One hour with this process gave me more clarity than a year of overthinking."
          </blockquote>
          <p className="mt-6 text-center text-sm text-muted-foreground italic">
            — VP of Engineering, Series C startup
          </p>
        </div>
      </section>

      {/* Ornamental divider */}
      <div className="sp-rule-ornament">❧</div>

      {/* Situations Section */}
      <section className="sp-container sp-section">
        <div className="max-w-3xl mx-auto">
          <p className="sp-chapter text-center">Chapter One</p>
          <h2 className="text-balance text-center mb-4">
            What brings people here
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
            These are the moments when career decisions feel weightiest—when you need thinking, not just advice.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 stagger-children">
            {[
              {
                title: "Stay or go?",
                description: "You've been thinking about leaving for months, but can't decide if it's the right move."
              },
              {
                title: "A difficult manager",
                description: "Your boss is making your life difficult. You're not sure if it's fixable or time to exit."
              },
              {
                title: "Burnout",
                description: "You're exhausted and know something needs to change, but what? A new job? A break?"
              },
              {
                title: "Negotiating an exit",
                description: "You've decided to leave. Now you need to navigate the conversation without burning bridges."
              },
              {
                title: "The counter-offer",
                description: "They matched your offer. Now you're second-guessing everything."
              },
              {
                title: "Two paths",
                description: "You have options, but comparing them feels impossible. Different roles, different tradeoffs."
              }
            ].map((situation, index) => (
              <div 
                key={index} 
                className="sp-card"
              >
                <h3 className="font-display text-lg mb-2">
                  {situation.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {situation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ornamental divider */}
      <div className="sp-rule-ornament">❧</div>

      {/* How it works */}
      <section className="sp-container sp-section">
        <div className="max-w-2xl mx-auto">
          <p className="sp-chapter text-center">Chapter Two</p>
          <h2 className="text-balance text-center mb-4">
            Three sessions. One clear plan.
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            A simple process designed to cut through the noise.
          </p>
          
          <div className="space-y-12">
            {[
              {
                step: "I",
                title: "The Interview",
                description: "A free 15-minute AI conversation to understand your situation. We'll map out what's really going on—the facts, the feelings, and the forces at play.",
                note: "Free, no commitment"
              },
              {
                step: "II",
                title: "The Coaching",
                description: "Three focused modules tailored to your situation. Not generic advice you could find in a book—specific guidance for your circumstances.",
                note: "Personalized to you"
              },
              {
                step: "III",
                title: "The Plan",
                description: "Walk away with scripts for difficult conversations, realistic timelines, and decision frameworks. Everything you need to act with confidence.",
                note: "Concrete deliverables"
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex-shrink-0">
                  <span className="font-display text-3xl text-primary/60">{step.step}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    {step.description}
                  </p>
                  <p className="text-sm text-primary italic">{step.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ornamental divider */}
      <div className="sp-rule-ornament">❧</div>

      {/* Social proof */}
      <section className="sp-container sp-section-sm">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-12 text-center">
            <div>
              <p className="font-display text-3xl text-foreground mb-1">500+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Sessions</p>
            </div>
            <div className="text-primary/40">•</div>
            <div>
              <p className="font-display text-3xl text-foreground mb-1">4.9</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Rating</p>
            </div>
            <div className="text-primary/40">•</div>
            <div>
              <p className="font-display text-3xl text-foreground mb-1">VP+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Level</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sp-container sp-section border-t border-border">
        <div className="max-w-lg mx-auto text-center">
          <p className="sp-chapter">Begin</p>
          <h2 className="text-balance mb-4">
            Ready to think clearly?
          </h2>
          <p className="text-muted-foreground mb-8">
            Start with a free interview. In 15 minutes, you'll have more clarity than months of ruminating.
          </p>
          <button className="sp-btn sp-btn-primary group">
            Start your free interview
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="mt-4 text-xs text-muted-foreground italic">
            No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="sp-container py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-display italic">Serious People</div>
            <div className="flex items-center gap-8">
              <a href="/guides" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Guides
              </a>
              <a href="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Resources
              </a>
              <a href="mailto:hello@seriouspeople.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2024 Serious People
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
