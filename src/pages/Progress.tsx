import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress as ProgressBar } from '@/components/ui/progress';
import { ProgressStep } from '@/components/progress/ProgressStep';
import { useJourneyProgress } from '@/hooks/useJourneyProgress';

// Change this value to configure which step is current (0-4)
const CURRENT_STEP_INDEX = 2;

export default function Progress() {
  const navigate = useNavigate();
  const { 
    steps, 
    completedCount, 
    totalCount, 
    currentStep,
    encouragingMessage,
    progressPercent 
  } = useJourneyProgress(CURRENT_STEP_INDEX);

  const handleStepClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container max-w-2xl mx-auto px-4 py-4">
          <Link to="/" className="font-playfair text-lg tracking-wide text-foreground hover:text-primary transition-colors">
            SERIOUS PEOPLE
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="container max-w-2xl mx-auto px-4 py-12">
        <div className="bg-card border border-border rounded-lg p-8 animate-fade-in">
          {/* Title section */}
          <div className="text-center mb-8">
            <h1 className="font-playfair text-3xl text-foreground mb-2">
              Your Progress
            </h1>
            <p className="font-sans text-muted-foreground">
              {completedCount} of {totalCount} steps completed
            </p>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <ProgressBar value={progressPercent} className="h-1.5" />
          </div>

          {/* Encouraging message */}
          <p className="text-center font-sans text-sm text-primary mb-8 italic">
            {encouragingMessage}
          </p>

          {/* Steps list */}
          <div className="mb-8">
            {steps.map((step, index) => (
              <ProgressStep
                key={step.id}
                step={step}
                index={index}
                isLast={index === steps.length - 1}
                onClick={() => handleStepClick(step.route)}
              />
            ))}
          </div>

          {/* Continue button */}
          {currentStep && (
            <Button 
              onClick={() => navigate(currentStep.route)}
              className="w-full group"
              size="lg"
            >
              Continue
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          )}
        </div>

        {/* Reassurance message */}
        <p className="text-center font-sans text-sm text-muted-foreground mt-6">
          Need a break? Your progress is saved.
        </p>
      </main>
    </div>
  );
}
