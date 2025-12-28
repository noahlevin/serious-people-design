import { journeySteps, JourneyStep, StepStatus } from '@/data/journeySteps';

export interface JourneyStepWithStatus extends JourneyStep {
  status: StepStatus;
}

export function useJourneyProgress(currentStepIndex: number = 2) {
  const stepsWithStatus: JourneyStepWithStatus[] = journeySteps.map((step, index) => ({
    ...step,
    status: index < currentStepIndex 
      ? 'completed' 
      : index === currentStepIndex 
        ? 'current' 
        : 'locked'
  }));
  
  const completedCount = currentStepIndex;
  const totalCount = journeySteps.length;
  const currentStep = journeySteps[currentStepIndex];
  
  const getEncouragingMessage = () => {
    if (completedCount === 0) return "Your journey begins here";
    if (completedCount === 1) return "Great start — keep the momentum going";
    if (completedCount === 2) return "You're making real progress";
    if (completedCount === 3) return "The finish line is in sight";
    if (completedCount === 4) return "One final step to your plan";
    return "Congratulations — you've completed your journey";
  };

  return {
    steps: stepsWithStatus,
    completedCount,
    totalCount,
    currentStep,
    encouragingMessage: getEncouragingMessage(),
    progressPercent: Math.round((completedCount / totalCount) * 100),
  };
}
