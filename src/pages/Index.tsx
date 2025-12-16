import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

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
      }, 300);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="sp-glow-orb w-[600px] h-[600px] -top-48 -left-48 bg-primary/20 animate-glow-pulse" />
      <div className="sp-glow-orb w-[500px] h-[500px] top-1/2 -right-48 bg-accent/15 animate-glow-pulse" style={{ animationDelay: '2s' }} />
      <div className="sp-glow-orb w-[400px] h-[400px] bottom-0 left-1/3 bg-primary/10 animate-glow-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Navigation */}
      <nav className="sp-container py-6 flex items-center justify-between relative z-10">
        <div className="text-xl font-semibold tracking-tight">
          Serious People
        </div>
        <div className="flex items-center gap-8">
          <a href="/guides" className="sp-link text-sm">Guides</a>
          <a href="/resources" className="sp-link text-sm">Resources</a>
          <a href="/login" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Log in
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="sp-container sp-section relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI-powered career coaching</span>
          </div>
          
          <h1 className="text-balance mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            You're{" "}
            <span 
              className={`sp-gradient-text transition-all duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              {situations[currentSituation]}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            A structured coaching experience that helps you think clearly about 
            your career—and leave with a concrete plan, not vague advice.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <button className="sp-button-primary group flex items-center">
              Start free interview
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="sp-button-secondary">
              See how it works
            </button>
          </div>
        </div>
        
        {/* Floating quote card */}
        <div className="mt-20 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="sp-card sp-gradient-border">
            <p className="text-foreground/90 italic mb-4">
              "I spent months going in circles. One hour with this process gave me more clarity than a year of overthinking."
            </p>
            <p className="text-sm text-muted-foreground">
              — VP of Engineering, Series C startup
            </p>
          </div>
        </div>
      </section>

      {/* Situations Section */}
      <section className="relative z-10">
        <div className="sp-divider" />
        <div className="sp-container sp-section">
          <div className="text-center mb-16">
            <p className="sp-eyebrow mb-4">What brings people here</p>
            <h2 className="text-balance max-w-xl mx-auto">
              Career decisions shouldn't feel like guesswork
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children max-w-5xl mx-auto">
            {[
              {
                title: "Stay or go?",
                description: "You've been thinking about leaving for months, but can't decide if it's the right move."
              },
              {
                title: "Bad manager",
                description: "Your boss is making your life difficult. You're not sure if it's fixable or time to exit."
              },
              {
                title: "Burnout",
                description: "You're exhausted and know something needs to change, but what?"
              },
              {
                title: "Negotiating an exit",
                description: "You've decided to leave. Now you need to navigate the conversation."
              },
              {
                title: "Counter-offer dilemma",
                description: "They matched your offer. Now you're second-guessing everything."
              },
              {
                title: "Two opportunities",
                description: "You have options, but comparing them feels impossible."
              }
            ].map((situation, index) => (
              <div 
                key={index} 
                className="sp-card group cursor-pointer"
              >
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
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

      {/* How it works */}
      <section className="relative z-10">
        <div className="sp-divider" />
        <div className="sp-container sp-section">
          <div className="text-center mb-16">
            <p className="sp-eyebrow mb-4">The process</p>
            <h2 className="text-balance">Three sessions. One clear plan.</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "The Interview",
                description: "A free 15-minute AI conversation to understand your situation.",
                note: "Free, no commitment"
              },
              {
                step: "02",
                title: "The Coaching",
                description: "Three focused modules tailored specifically to your situation.",
                note: "Personalized curriculum"
              },
              {
                step: "03",
                title: "The Plan",
                description: "Scripts, timelines, and decision frameworks. Everything you need.",
                note: "Concrete deliverables"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary border border-border text-foreground font-semibold text-lg mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {step.description}
                </p>
                <p className="sp-eyebrow text-primary">{step.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="relative z-10">
        <div className="sp-divider" />
        <div className="sp-container sp-section-sm">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            <div className="text-center">
              <p className="text-4xl font-semibold sp-gradient-text mb-1">500+</p>
              <p className="text-sm text-muted-foreground">Coaching sessions</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-semibold sp-gradient-text mb-1">4.9/5</p>
              <p className="text-sm text-muted-foreground">Average rating</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-semibold sp-gradient-text mb-1">VP+</p>
              <p className="text-sm text-muted-foreground">Senior professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10">
        <div className="sp-divider" />
        <div className="sp-container sp-section">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-balance mb-6">
              Ready to think clearly about your career?
            </h2>
            <p className="text-muted-foreground mb-8">
              Start with a free interview. In 15 minutes, you'll have more clarity than months of ruminating.
            </p>
            <button className="sp-button-primary group flex items-center mx-auto">
              Start free interview
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mt-4 text-xs text-muted-foreground">
              No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10">
        <div className="sp-divider" />
        <div className="sp-container py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-lg font-semibold">Serious People</div>
            <div className="flex items-center gap-8">
              <a href="/guides" className="sp-link text-sm">Guides</a>
              <a href="/resources" className="sp-link text-sm">Resources</a>
              <a href="mailto:hello@seriouspeople.com" className="sp-link text-sm">Contact</a>
            </div>
            <p className="text-xs text-muted-foreground">© 2024 Serious People</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;