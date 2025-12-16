import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
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
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sp-container py-6 flex items-center justify-between border-b border-border">
        <div className="font-display text-xl tracking-tight">
          Serious People
        </div>
        <div className="flex items-center gap-8">
          <a href="/guides" className="sp-link text-sm text-muted-foreground hover:text-foreground transition-colors">
            Guides
          </a>
          <a href="/resources" className="sp-link text-sm text-muted-foreground hover:text-foreground transition-colors">
            Resources
          </a>
          <a href="/login" className="text-sm font-medium text-ochre hover:text-ochre-dark transition-colors">
            Log in
          </a>
        </div>
      </nav>

      {/* Hero - Modern Editorial */}
      <section className="sp-container sp-section">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Main content */}
          <div className="lg:col-span-8">
            <p className="sp-eyebrow mb-8 animate-fade-in-up">
              Career coaching for senior professionals
            </p>
            
            <h1 className="font-display text-balance mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              You're{" "}
              <span 
                className={`text-ochre transition-opacity duration-400 ${isVisible ? "opacity-100" : "opacity-0"}`}
              >
                {situations[currentSituation]}
              </span>
            </h1>
            
            <div className="sp-rule mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }} />
            
            <p className="text-lg text-muted-foreground max-w-2xl mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              A structured coaching experience that helps you think clearly about 
              your career—and leave with a concrete plan, not vague advice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button 
                size="lg" 
                className="group bg-foreground text-background hover:bg-ochre px-8 h-12 text-base rounded-none"
              >
                Start free interview
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-muted-foreground hover:text-foreground hover:bg-transparent h-12 text-base underline underline-offset-4"
              >
                See how it works
              </Button>
            </div>
          </div>
          
          {/* Pull quote - offset to the right */}
          <div className="lg:col-span-4 lg:mt-32">
            <blockquote className="sp-quote">
              "I spent months going in circles. One hour with this process gave me more clarity than a year of overthinking."
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground">
              — VP of Engineering, Series C startup
            </p>
          </div>
        </div>
      </section>

      {/* Situations Section */}
      <section className="sp-container sp-section border-t border-border">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="sp-eyebrow mb-4">What brings people here</p>
            <h2 className="font-display text-balance">
              Career decisions shouldn't feel like guesswork
            </h2>
          </div>
          
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="grid sm:grid-cols-2 gap-6 stagger-children">
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
                  description: "You're exhausted and know something needs to change, but what? A new job? A break? A career shift?"
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
                  className="sp-card-accent sp-hover-lift cursor-pointer group"
                >
                  <h3 className="font-display text-lg mb-2 group-hover:text-ochre transition-colors">
                    {situation.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {situation.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="sp-container sp-section border-t border-border">
        <div className="max-w-content-medium mx-auto">
          <p className="sp-eyebrow mb-4 text-center">The process</p>
          <h2 className="font-display text-balance text-center mb-16">
            Three sessions. One clear plan.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
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
              <div key={index} className="relative">
                <div className="sp-rule mb-8" />
                <div className="sp-step-number mb-4">{step.step}</div>
                <h3 className="font-display text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {step.description}
                </p>
                <p className="sp-eyebrow">{step.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-t border-border">
        <div className="sp-container sp-section-sm">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 text-center">
            <div>
              <p className="sp-stat mb-2">500+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Coaching sessions</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-border" />
            <div>
              <p className="sp-stat mb-2">4.9</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Average rating</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-border" />
            <div>
              <p className="sp-stat mb-2">VP+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Senior professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sp-container sp-section border-t border-border">
        <div className="max-w-content-narrow mx-auto text-center">
          <h2 className="font-display text-balance mb-6">
            Ready to think clearly about your career?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Start with a free interview. In 15 minutes, you'll have more clarity than months of ruminating.
          </p>
          <Button 
            size="lg" 
            className="group bg-foreground text-background hover:bg-ochre px-10 h-12 text-base rounded-none"
          >
            Start free interview
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="mt-6 text-xs text-muted-foreground uppercase tracking-wider">
            No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="sp-container py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-display text-lg">Serious People</div>
            <div className="flex items-center gap-8">
              <a href="/guides" className="sp-link text-sm text-muted-foreground hover:text-foreground transition-colors">
                Guides
              </a>
              <a href="/resources" className="sp-link text-sm text-muted-foreground hover:text-foreground transition-colors">
                Resources
              </a>
              <a href="mailto:hello@seriouspeople.com" className="sp-link text-sm text-muted-foreground hover:text-foreground transition-colors">
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
