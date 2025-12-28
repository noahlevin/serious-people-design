import { Check, Lock, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { JourneyStepWithStatus } from '@/hooks/useJourneyProgress';

interface ProgressStepProps {
  step: JourneyStepWithStatus;
  index: number;
  isLast: boolean;
  onClick?: () => void;
}

export function ProgressStep({ step, index, isLast, onClick }: ProgressStepProps) {
  const isClickable = step.status === 'completed' || step.status === 'current';
  
  return (
    <div 
      className={cn(
        "relative flex gap-4 group",
        isClickable && "cursor-pointer"
      )}
      onClick={isClickable ? onClick : undefined}
    >
      {/* Vertical connector line */}
      {!isLast && (
        <div 
          className={cn(
            "absolute left-[15px] top-[32px] w-[2px] h-[calc(100%-8px)]",
            step.status === 'completed' ? "bg-primary/40" : "bg-border"
          )}
        />
      )}
      
      {/* Icon column */}
      <div className="flex-shrink-0 relative z-10">
        {step.status === 'completed' && (
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
          </div>
        )}
        {step.status === 'current' && (
          <div className="w-8 h-8 rounded-full border-2 border-primary bg-background flex items-center justify-center">
            <Circle className="w-3 h-3 fill-primary text-primary" />
          </div>
        )}
        {step.status === 'locked' && (
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
            <Lock className="w-4 h-4 text-muted-foreground" />
          </div>
        )}
      </div>
      
      {/* Content column */}
      <div className={cn(
        "flex-1 pb-6 transition-colors",
        isClickable && "group-hover:opacity-80"
      )}>
        <h3 className={cn(
          "font-playfair text-lg leading-tight",
          step.status === 'locked' ? "text-muted-foreground" : "text-foreground",
          step.status === 'current' && "font-semibold"
        )}>
          {step.title}
        </h3>
        <p className={cn(
          "font-sans text-sm mt-1",
          step.status === 'locked' ? "text-muted-foreground/70" : "text-muted-foreground"
        )}>
          {step.description}
        </p>
        {step.status === 'current' && step.estimatedTime && (
          <span className="inline-block mt-2 text-xs font-sans text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            ~{step.estimatedTime}
          </span>
        )}
      </div>
    </div>
  );
}
