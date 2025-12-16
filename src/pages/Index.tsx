import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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

  // Scroll reveal hooks for each section
  const heroReveal = useScrollReveal();
  const quoteReveal = useScrollReveal({ rootMargin: "0px 0px -100px 0px" });
  const situationsHeaderReveal = useScrollReveal();
  const situationsCardsReveal = useScrollReveal();
  const processReveal = useScrollReveal();
  const statsReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();

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
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <nav className="sp-container py-6 flex items-center justify-between animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <div className="font-display text-xl tracking-tight hover:text-primary transition-colors duration-300 cursor-pointer">
          Serious People
        </div>
        <div className="flex items-center gap-8">
          <a href="/guides" className="sp-link text-sm text-muted-foreground hover:text-foreground transition-colors">
            Guides
          </a>
          <a href="/resources" className="sp-link text-sm text-muted-foreground hover:text-foreground transition-colors">
            Resources
          </a>
          <a href="/login" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Log in
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      </nav>

      {/* Hero - Asymmetric Layout */}
      <section className="sp-container sp-section">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Main content - offset to the left */}
          <div 
            ref={heroReveal.ref}
            className={`lg:col-span-7 lg:col-start-1 reveal-left ${heroReveal.isRevealed ? "revealed" : ""}`}
          >
            <p className="sp-eyebrow mb-6">
              Career coaching for senior professionals
            </p>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-balance mb-8">
              You're{" "}
              <span 
                className={`text-primary inline-block transition-all duration-500 ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-2"
                }`}
              >
                {situations[currentSituation]}
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mb-10">
              A structured coaching experience that helps you think clearly about 
              your career—and leave with a concrete plan, not vague advice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-foreground text-background hover:bg-foreground/90 px-8 h-12 text-base relative overflow-hidden shimmer"
              >
                <span className="relative z-10 flex items-center">
                  Start free interview
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-muted-foreground hover:text-foreground h-12 text-base group"
              >
                <span className="relative">
                  See how it works
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                </span>
              </Button>
            </div>
          </div>
          
          {/* Pull quote - offset to the right */}
          <div 
            ref={quoteReveal.ref}
            className={`lg:col-span-4 lg:col-start-9 lg:mt-24 reveal-right ${quoteReveal.isRevealed ? "revealed" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <blockquote className="sp-quote animate-float-delayed">
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
          <div 
            ref={situationsHeaderReveal.ref}
            className={`lg:col-span-4 reveal ${situationsHeaderReveal.isRevealed ? "revealed" : ""}`}
          >
            <p className="sp-eyebrow mb-4">What brings people here</p>
            <h2 className="font-display text-balance">
              Career decisions shouldn't feel like guesswork
            </h2>
          </div>
          
          <div 
            ref={situationsCardsReveal.ref}
            className={`lg:col-span-7 lg:col-start-6 stagger-children ${situationsCardsReveal.isRevealed ? "revealed" : ""}`}
          >
            <div className="grid sm:grid-cols-2 gap-6">
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
                  className="sp-card cursor-pointer group transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/20"
                >
                  <h3 className="font-display text-lg mb-2 transition-colors duration-300 group-hover:text-primary">
                    {situation.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/70">
                    {situation.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-primary opacity-0 translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    Learn more <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="sp-container sp-section border-t border-border">
        <div 
          ref={processReveal.ref}
          className={`max-w-content-medium mx-auto reveal ${processReveal.isRevealed ? "revealed" : ""}`}
        >
          <p className="sp-eyebrow mb-4 text-center">The process</p>
          <h2 className="font-display text-balance text-center mb-16">
            Three sessions. One clear plan.
          </h2>
          
          <div className="relative">
            {/* Animated connecting line */}
            <div className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-2/3 h-px bg-border overflow-hidden">
              <div 
                className={`h-full bg-primary transition-all duration-1000 ease-out ${
                  processReveal.isRevealed ? "w-full" : "w-0"
                }`}
                style={{ transitionDelay: "0.5s" }}
              />
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
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
                  className={`relative text-center md:text-left transition-all duration-700 ${
                    processReveal.isRevealed 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${0.3 + index * 0.2}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-secondary-foreground font-display text-lg mb-6 relative z-10 transition-all duration-500 hover:bg-primary hover:text-primary-foreground hover:scale-110 cursor-default group">
                    <span className="transition-transform duration-300 group-hover:scale-110">{step.step}</span>
                  </div>
                  <h3 className="font-display text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="sp-eyebrow text-primary animate-pulse-subtle">{step.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-t border-border">
        <div 
          ref={statsReveal.ref}
          className={`sp-container sp-section-sm reveal-scale ${statsReveal.isRevealed ? "revealed" : ""}`}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
            {[
              { value: "500+", label: "Coaching sessions" },
              { value: "4.9/5", label: "Average rating" },
              { value: "VP+", label: "Senior professionals" }
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-8 md:gap-16">
                <div 
                  className={`transition-all duration-700 ${
                    statsReveal.isRevealed 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
                >
                  <p className="font-display text-3xl mb-1 hover:text-primary transition-colors duration-300 cursor-default">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
                {index < 2 && (
                  <div 
                    className={`hidden md:block w-px h-12 bg-border transition-all duration-500 ${
                      statsReveal.isRevealed ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                    }`}
                    style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sp-container sp-section border-t border-border">
        <div 
          ref={ctaReveal.ref}
          className={`max-w-content-narrow mx-auto text-center reveal ${ctaReveal.isRevealed ? "revealed" : ""}`}
        >
          <h2 className="font-display text-balance mb-6">
            Ready to think clearly about your career?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Start with a free interview. In 15 minutes, you'll have more clarity than months of ruminating.
          </p>
          <Button 
            size="lg" 
            className="group bg-foreground text-background hover:bg-foreground/90 px-10 h-12 text-base transition-all duration-300 hover:shadow-xl hover:shadow-foreground/10 hover:-translate-y-0.5"
          >
            Start free interview
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <p className="mt-4 text-xs text-muted-foreground">
            No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="sp-container py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-display text-lg hover:text-primary transition-colors duration-300 cursor-pointer">
              Serious People
            </div>
            <div className="flex items-center gap-8">
              {["Guides", "Resources", "Contact"].map((item, index) => (
                <a 
                  key={index}
                  href={item === "Contact" ? "mailto:hello@seriouspeople.com" : `/${item.toLowerCase()}`} 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
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
