import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sp-container py-6 flex items-center justify-between border-b border-border">
        <div className="font-display text-sm font-medium uppercase tracking-[0.15em]">
          Serious People
        </div>
        <div className="flex items-center gap-8">
          <a href="/guides" className="sp-link text-xs uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors">
            Guides
          </a>
          <a href="/resources" className="sp-link text-xs uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors">
            Resources
          </a>
          <a href="/login" className="text-xs uppercase tracking-[0.1em] font-medium hover:text-primary transition-colors">
            Log in
          </a>
        </div>
      </nav>

      {/* Hero - Bold Modernist */}
      <section className="sp-container sp-section relative">
        {/* Background number */}
        <div className="absolute top-0 right-0 sp-bg-number hidden lg:block">
          01
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <div className="sp-marker mb-8 animate-fade-in">
            <span className="sp-marker-line" />
            <span>Career coaching for senior professionals</span>
          </div>
          
          <h1 className="text-balance mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Career decisions
            <br />
            for serious people.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            A structured coaching experience that helps you think clearly about 
            your career—and leave with a concrete plan, not vague advice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <button className="sp-btn sp-btn-primary group">
              Start free interview
              <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="sp-btn sp-btn-secondary">
              See how it works
            </button>
          </div>
        </div>
      </section>

      <div className="sp-container">
        <div className="sp-rule" />
      </div>

      {/* Situations Section */}
      <section className="sp-container sp-section relative">
        {/* Background number */}
        <div className="absolute top-0 left-0 sp-bg-number hidden lg:block">
          02
        </div>
        
        <div className="relative z-10">
          <div className="sp-marker mb-6">
            <span>02</span>
            <span className="sp-marker-line" />
            <span>Situations</span>
          </div>
          
          <h2 className="text-balance mb-16 max-w-xl">
            What brings people here
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
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
                description: "You're exhausted and know something needs to change, but what? A new job? A break?"
              },
              {
                title: "Negotiating an exit",
                description: "You've decided to leave. Now you need to navigate the conversation without burning bridges."
              },
              {
                title: "Counter-offer dilemma",
                description: "They matched your offer. Now you're second-guessing everything."
              },
              {
                title: "Two opportunities",
                description: "You have options, but comparing them feels impossible. Different roles, different tradeoffs."
              }
            ].map((situation, index) => (
              <div 
                key={index} 
                className="sp-card cursor-pointer"
              >
                <h3 className="font-display text-lg mb-3">
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

      <div className="sp-container">
        <div className="sp-rule" />
      </div>

      {/* How it works */}
      <section className="sp-container sp-section relative">
        {/* Background number */}
        <div className="absolute top-0 right-0 sp-bg-number hidden lg:block">
          03
        </div>
        
        <div className="relative z-10">
          <div className="sp-marker mb-6">
            <span>03</span>
            <span className="sp-marker-line" />
            <span>Process</span>
          </div>
          
          <h2 className="text-balance mb-16 max-w-lg">
            Three sessions. One clear plan.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-0">
            {[
              {
                step: "01",
                title: "The Interview",
                description: "A free 15-minute AI conversation to understand your situation. We'll map out what's really going on.",
                note: "Free, no commitment"
              },
              {
                step: "02",
                title: "The Coaching",
                description: "Three focused modules tailored to your situation. Not generic advice—specific to you.",
                note: "Personalized curriculum"
              },
              {
                step: "03",
                title: "The Plan",
                description: "Walk away with scripts, timelines, and decision frameworks. Everything you need to act.",
                note: "Concrete deliverables"
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className={`p-8 ${index !== 2 ? 'md:border-r border-border' : ''}`}
              >
                <span className="font-display text-6xl md:text-7xl font-bold text-muted/30 leading-none mb-6 block">
                  {step.step}
                </span>
                <h3 className="font-display text-xl mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {step.description}
                </p>
                <p className="text-xs uppercase tracking-[0.1em] text-primary font-medium">
                  {step.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-t border-b border-border">
        <div className="sp-container">
          <div className="grid grid-cols-3 divide-x divide-border">
            <div className="py-12 md:py-16 text-center">
              <p className="sp-stat mb-2">500+</p>
              <p className="text-xs uppercase tracking-[0.1em] text-muted-foreground">Sessions</p>
            </div>
            <div className="py-12 md:py-16 text-center">
              <p className="sp-stat mb-2">4.9</p>
              <p className="text-xs uppercase tracking-[0.1em] text-muted-foreground">Rating</p>
            </div>
            <div className="py-12 md:py-16 text-center">
              <p className="sp-stat mb-2">VP+</p>
              <p className="text-xs uppercase tracking-[0.1em] text-muted-foreground">Level</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Inverted */}
      <section className="sp-inverted">
        <div className="sp-container sp-section">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-balance mb-6">
              Ready to think clearly?
            </h2>
            <p className="text-background/70 mb-10 text-lg max-w-md mx-auto">
              Start with a free interview. In 15 minutes, you'll have more clarity than months of ruminating.
            </p>
            <button className="sp-btn bg-background text-foreground hover:bg-background/90 group">
              Start free interview
              <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mt-6 text-xs text-background/50 uppercase tracking-[0.1em]">
              No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="sp-container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-display text-xs font-medium uppercase tracking-[0.15em]">
              Serious People
            </div>
            <div className="flex items-center gap-8">
              <a href="/guides" className="text-xs uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors">
                Guides
              </a>
              <a href="/resources" className="text-xs uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors">
                Resources
              </a>
              <a href="mailto:hello@seriouspeople.com" className="text-xs uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors">
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
