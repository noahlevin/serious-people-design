export type StepStatus = 'completed' | 'current' | 'locked';

export interface JourneyStep {
  id: string;
  title: string;
  description: string;
  route: string;
  estimatedTime?: string;
}

export const journeySteps: JourneyStep[] = [
  {
    id: 'interview',
    title: 'Career Interview',
    description: 'Understand your current situation',
    route: '/interview',
    estimatedTime: '15-20 min',
  },
  {
    id: 'module-1',
    title: 'Module 1: The Manager Bottleneck',
    description: "Identify what's blocking your growth",
    route: '/app/module/1',
    estimatedTime: '25 min',
  },
  {
    id: 'module-2',
    title: 'Module 2: Internal vs. External',
    description: 'Evaluate your options strategically',
    route: '/app/module/2',
    estimatedTime: '30 min',
  },
  {
    id: 'module-3',
    title: 'Module 3: The 90-Day Move',
    description: 'Build your action plan',
    route: '/app/module/3',
    estimatedTime: '30 min',
  },
  {
    id: 'serious-plan',
    title: 'Your Serious Plan',
    description: 'Your complete strategic roadmap',
    route: '/app/artifacts',
  },
];
