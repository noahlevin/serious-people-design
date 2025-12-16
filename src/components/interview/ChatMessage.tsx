import { Message } from "@/data/mockInterview";

interface ChatMessageProps {
  message: Message;
  isTyping?: boolean;
}

const ChatMessage = ({ message, isTyping = false }: ChatMessageProps) => {
  const isAssistant = message.role === 'assistant';
  
  return (
    <div 
      className={`flex items-start gap-2.5 ${isAssistant ? 'justify-start' : 'justify-end'} animate-fade-in`}
    >
      {/* Coach avatar */}
      {isAssistant && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
          <span className="text-accent-foreground text-xs font-medium">SP</span>
        </div>
      )}
      
      <div 
        className={`max-w-[75%] md:max-w-[65%] rounded-2xl px-4 py-2.5 ${
          isAssistant 
            ? 'bg-muted' 
            : 'bg-accent/15'
        }`}
      >
        <p className="font-chat text-foreground text-[15px] leading-relaxed whitespace-pre-wrap">
          {message.content}
          {isTyping && (
            <span className="inline-flex ml-1 items-center">
              <span className="w-1 h-1 bg-accent/60 rounded-full animate-pulse" />
              <span className="w-1 h-1 bg-accent/60 rounded-full animate-pulse ml-0.5" style={{ animationDelay: '0.2s' }} />
              <span className="w-1 h-1 bg-accent/60 rounded-full animate-pulse ml-0.5" style={{ animationDelay: '0.4s' }} />
            </span>
          )}
        </p>
      </div>
      
      {/* User avatar */}
      {!isAssistant && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center">
          <span className="text-foreground/70 text-xs font-medium">You</span>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
