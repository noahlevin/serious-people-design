import { Message } from "@/data/mockInterview";

interface ChatMessageProps {
  message: Message;
  isTyping?: boolean;
}

const ChatMessage = ({ message, isTyping = false }: ChatMessageProps) => {
  const isAssistant = message.role === 'assistant';
  
  return (
    <div 
      className={`flex ${isAssistant ? 'justify-start' : 'justify-end'} animate-fade-in`}
    >
      <div 
        className={`max-w-[85%] md:max-w-[75%] ${
          isAssistant 
            ? 'bg-sage-wash/40 border border-border' 
            : 'bg-foreground/5 border border-border/50'
        } rounded-sm px-5 py-4`}
      >
        {isAssistant && (
          <span className="text-xs font-medium text-accent uppercase tracking-wider mb-2 block">
            Interviewer
          </span>
        )}
        <p className={`${isAssistant ? 'font-serif text-foreground' : 'text-foreground'} leading-relaxed whitespace-pre-wrap`}>
          {message.content}
          {isTyping && (
            <span className="inline-flex ml-1">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse ml-1" style={{ animationDelay: '0.2s' }} />
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse ml-1" style={{ animationDelay: '0.4s' }} />
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
