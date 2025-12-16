import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import ChatMessage from "@/components/interview/ChatMessage";
import ChatInput from "@/components/interview/ChatInput";

import { Message, initialMessage, mockResponses, interviewQuestions } from "@/data/mockInterview";

const InterviewChat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const totalQuestions = interviewQuestions.length;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    const nextIndex = questionIndex + 1;
    setQuestionIndex(nextIndex);

    // Simulate AI typing
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      
      if (nextIndex >= totalQuestions) {
        // Final message before results
        const finalMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: mockResponses[7],
          timestamp: new Date()
        };
        setMessages(prev => [...prev, finalMessage]);
        setIsComplete(true);

        // Navigate to results after a delay
        setTimeout(() => {
          navigate("/interview/results");
        }, 2500);
      } else {
        // Add AI response
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: mockResponses[nextIndex],
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiMessage]);
      }
    }, 1500);
  };

  const handleExit = () => {
    if (window.confirm("Are you sure you want to exit? Your progress will be lost.")) {
      navigate("/");
    }
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="shrink-0">
        <div className="sp-container">
          <div className="flex items-center justify-between h-16 gap-4">
            <Link to="/" className="font-display text-xl tracking-tight text-foreground shrink-0">
              Serious People
            </Link>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleExit}
              className="text-muted-foreground hover:text-foreground shrink-0"
            >
              Save and Exit
              <X className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
        
        {/* Progress bar as the separator line */}
        <div className="h-[2px] bg-border relative">
          <div 
            className="absolute top-0 left-0 h-full bg-accent transition-all duration-500 ease-out"
            style={{ width: `${(questionIndex / totalQuestions) * 100}%` }}
          />
        </div>
      </header>

      {/* Chat Messages */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-3">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          
          {isTyping && (
            <ChatMessage 
              message={{
                id: 'typing',
                role: 'assistant',
                content: '',
                timestamp: new Date()
              }}
              isTyping={true}
            />
          )}
          
          {isComplete && (
            <div className="text-center py-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm">Analyzing your responses...</span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input Area */}
      <ChatInput 
        onSend={handleSendMessage}
        disabled={isTyping || isComplete}
        placeholder={isComplete ? "Interview complete..." : "Type your response..."}
      />
    </div>
  );
};

export default InterviewChat;
