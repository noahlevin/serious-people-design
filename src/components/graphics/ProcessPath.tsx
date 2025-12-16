interface ProcessPathProps {
  isRevealed: boolean;
}

const ProcessPath = ({ isRevealed }: ProcessPathProps) => {
  return (
    <div className="hidden lg:block absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 300"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        {/* Main flowing path connecting all three steps */}
        <path
          d="M120 150 
             C 200 150, 250 80, 350 80 
             C 450 80, 450 150, 500 150 
             C 550 150, 550 220, 650 220 
             C 750 220, 800 150, 880 150"
          stroke="hsl(var(--sage-light))"
          strokeWidth="2"
          strokeLinecap="round"
          className="transition-all duration-1000"
        />
        
        {/* Animated path overlay */}
        <path
          d="M120 150 
             C 200 150, 250 80, 350 80 
             C 450 80, 450 150, 500 150 
             C 550 150, 550 220, 650 220 
             C 750 220, 800 150, 880 150"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="800"
          strokeDashoffset={isRevealed ? "0" : "800"}
          className="transition-all duration-[2s] ease-out"
          style={{ transitionDelay: "0.3s" }}
        />

        {/* Step 1 node */}
        <g className={`transition-all duration-500 ${isRevealed ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: "0.5s" }}>
          <circle cx="120" cy="150" r="24" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="2" />
          <circle cx="120" cy="150" r="16" fill="hsl(var(--primary) / 0.1)" />
          {/* Chat bubble icon */}
          <path d="M112 145 L128 145 L128 155 L122 155 L118 160 L118 155 L112 155 Z" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
        </g>

        {/* Step 2 node */}
        <g className={`transition-all duration-500 ${isRevealed ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: "1s" }}>
          <circle cx="500" cy="150" r="24" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="2" />
          <circle cx="500" cy="150" r="16" fill="hsl(var(--primary) / 0.1)" />
          {/* Compass/target icon */}
          <circle cx="500" cy="150" r="8" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
          <circle cx="500" cy="150" r="3" fill="hsl(var(--primary))" />
        </g>

        {/* Step 3 node */}
        <g className={`transition-all duration-500 ${isRevealed ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: "1.5s" }}>
          <circle cx="880" cy="150" r="24" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="2" />
          <circle cx="880" cy="150" r="16" fill="hsl(var(--primary) / 0.1)" />
          {/* Checkmark/plan icon */}
          <path d="M872 150 L878 156 L890 144" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Decorative elements along path */}
        <g className={`transition-all duration-700 ${isRevealed ? 'opacity-60' : 'opacity-0'}`} style={{ transitionDelay: "0.8s" }}>
          {/* Small dots */}
          <circle cx="260" cy="100" r="3" fill="hsl(var(--sage-medium))" />
          <circle cx="400" cy="110" r="2" fill="hsl(var(--terracotta))" opacity="0.5" />
          <circle cx="600" cy="190" r="3" fill="hsl(var(--sage-medium))" />
          <circle cx="750" cy="180" r="2" fill="hsl(var(--terracotta))" opacity="0.5" />
        </g>

        {/* Arrow indicators */}
        <g className={`transition-all duration-500 ${isRevealed ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: "1.8s" }}>
          <path d="M300 85 L310 80 L305 90" fill="hsl(var(--primary))" />
          <path d="M580 200 L590 195 L585 205" fill="hsl(var(--primary))" />
          <path d="M820 160 L830 150 L825 165" fill="hsl(var(--primary))" />
        </g>
      </svg>
    </div>
  );
};

export default ProcessPath;
