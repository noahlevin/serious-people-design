import { Link } from "react-router-dom";

const Prepare = () => {
  const tips = [
    {
      number: 1,
      text: "Make space. Give it 20–30 minutes without multitasking.",
    },
    {
      number: 2,
      text: "Be honest and specific. The more detail you share, the sharper the advice.",
    },
    {
      number: 3,
      text: "Expect pushback. The coach may challenge fuzzy thinking—that's a feature, not a bug.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-lg">
        <div className="bg-card border border-border rounded-sm p-8 md:p-10">
          <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Welcome to Serious People
          </h1>
          
          <p className="text-muted-foreground text-lg mb-8">
            This is a real coaching session, not a quick quiz. Treat it like a trusted coach who's on your side.
          </p>

          <p className="font-medium text-foreground mb-5">
            To get the most out of it:
          </p>

          <div className="space-y-5 mb-8">
            {tips.map((tip) => (
              <div key={tip.number} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0 text-sm font-medium">
                  {tip.number}
                </div>
                <p className="text-foreground pt-1">{tip.text}</p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground mb-8">
            When you're ready, we'll start by getting a clear picture of what's going on and what's at stake.
          </p>

          <Link to="/interview/chat">
            <button className="w-full py-4 bg-foreground text-background text-base font-medium hover:bg-foreground/90 transition-colors">
              I'm ready, start the interview
            </button>
          </Link>

          <Link 
            to="/"
            className="block text-center mt-4 text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors"
          >
            Not ready yet? Save and come back later →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Prepare;
