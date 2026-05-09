import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Send, Bot, User, ArrowLeft, ImagePlus, Mic, RotateCcw, Smartphone, Monitor } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import mildSkinRashImage from "@/assets/mild-skin-rash.png";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  image?: string;
}

const allMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "Hello! I'm MIA, your trusted Medical Information App. How can I help you today?",
  },
  {
    id: "2",
    role: "user",
    content: "What are the side effects of ibuprofen?",
  },
  {
    id: "3",
    role: "assistant",
    content: "**Ibuprofen Side Effects:**\n\n• Stomach pain or heartburn\n• Dizziness or headache\n• Mild skin rash\n\n**Serious (seek help):**\n• Stomach bleeding signs\n• Chest pain\n• Swelling of face/throat\n\n*Always consult your healthcare provider.*",
  },
  {
    id: "4",
    role: "user",
    content: "Can you show an example image of a mild skin rash?",
  },
  {
    id: "5",
    role: "assistant",
    content: "Here is an example of a mild skin rash that may occur as a side effect:\n\nThis type of rash typically appears as small, pink or red spots. If you notice a rash after taking ibuprofen, stop use and consult your doctor.",
    image: mildSkinRashImage,
  },
];

const ChatMobile = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const phoneMode = searchParams.get("mode") === "phone";
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typingText]);

  useEffect(() => {
    if (currentStep >= allMessages.length) {
      setIsComplete(true);
      return;
    }

    const message = allMessages[currentStep];
    
    if (message.role === "assistant") {
      // Show typing indicator, then reveal message
      setIsTyping(true);
      const typingDelay = currentStep === 0 ? 500 : 1500;
      
      const timer = setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, message]);
        setCurrentStep(prev => prev + 1);
      }, typingDelay);
      
      return () => clearTimeout(timer);
    } else {
      // Simulate user typing
      const fullText = message.content;
      let charIndex = 0;
      setTypingText("");
      
      const typeInterval = setInterval(() => {
        if (charIndex < fullText.length) {
          setTypingText(fullText.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          // After typing complete, add message and move to next step
          setTimeout(() => {
            setTypingText("");
            setMessages(prev => [...prev, message]);
            setCurrentStep(prev => prev + 1);
          }, 500);
        }
      }, 50);
      
      return () => clearInterval(typeInterval);
    }
  }, [currentStep]);

  const restartDemo = () => {
    setMessages([]);
    setCurrentStep(0);
    setIsTyping(false);
    setTypingText("");
    setIsComplete(false);
  };

  const toggleMode = () => {
    const next = new URLSearchParams(searchParams);
    if (phoneMode) next.delete("mode");
    else next.set("mode", "phone");
    setSearchParams(next);
  };

  // Sizing tokens — bigger in fullscreen phone mode for real iPhone viewing
  const t = phoneMode
    ? {
        title: "text-xl",
        subtitle: "text-xs",
        msg: "text-sm",
        avatar: "h-8 w-8",
        avatarIcon: "h-4 w-4",
        btn: "h-10 w-10",
        btnIcon: "h-4 w-4",
        input: "text-sm",
        disclaimer: "text-[10px]",
        img: "max-h-56",
        gap: "gap-3",
        space: "space-y-4",
        dot: "w-2 h-2",
      }
    : {
        title: "text-base",
        subtitle: "text-[10px]",
        msg: "text-[10px]",
        avatar: "h-6 w-6",
        avatarIcon: "h-3 w-3",
        btn: "h-7 w-7",
        btnIcon: "h-3 w-3",
        input: "text-[10px]",
        disclaimer: "text-[8px]",
        img: "max-h-32",
        gap: "gap-2",
        space: "space-y-3",
        dot: "w-1.5 h-1.5",
      };

  const ScreenContent = (
    <div className="w-full h-full bg-background overflow-hidden flex flex-col">
      {/* Status bar */}
      <div className="h-10 bg-background flex items-end justify-between px-8 pb-1 text-xs text-muted-foreground flex-shrink-0">
        <span>9:41</span>
        <div className="flex gap-1 items-center">
          <div className="w-4 h-2 border border-muted-foreground rounded-sm relative">
            <div className="absolute inset-0.5 bg-muted-foreground rounded-sm" style={{ width: "70%" }} />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col px-4 pb-4 overflow-hidden">
        <div className="text-center py-3 flex-shrink-0">
          <h1 className={`${t.title} font-display font-bold text-foreground`}>Ask MIA</h1>
          <p className={`text-muted-foreground ${t.subtitle}`}>Powered by verified clinical research</p>
        </div>

        <div className={`flex-1 overflow-y-auto ${t.space} mb-3`}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${t.gap} animate-fade-in ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.role === "assistant" && (
                <div className={`flex-shrink-0 ${t.avatar} rounded-full gradient-mia flex items-center justify-center`}>
                  <Bot className={`${t.avatarIcon} text-primary-foreground`} />
                </div>
              )}
              <Card className={`max-w-[75%] ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-card"}`}>
                <CardContent className="p-2">
                  {message.image && (
                    <img
                      src={message.image}
                      alt="Medical illustration"
                      className={`w-full h-auto rounded mb-2 ${t.img} object-cover`}
                    />
                  )}
                  <div className={`${t.msg} whitespace-pre-wrap leading-relaxed ${message.role === "user" ? "text-primary-foreground" : "text-foreground"}`}>
                    {message.content}
                  </div>
                </CardContent>
              </Card>
              {message.role === "user" && (
                <div className={`flex-shrink-0 ${t.avatar} rounded-full bg-secondary flex items-center justify-center`}>
                  <User className={`${t.avatarIcon} text-secondary-foreground`} />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className={`flex ${t.gap} justify-start animate-fade-in`}>
              <div className={`flex-shrink-0 ${t.avatar} rounded-full gradient-mia flex items-center justify-center`}>
                <Bot className={`${t.avatarIcon} text-primary-foreground`} />
              </div>
              <Card className="bg-card">
                <CardContent className="p-2">
                  <div className="flex gap-1">
                    <span className={`${t.dot} bg-primary rounded-full animate-pulse`} />
                    <span className={`${t.dot} bg-primary rounded-full animate-pulse`} style={{ animationDelay: "0.2s" }} />
                    <span className={`${t.dot} bg-primary rounded-full animate-pulse`} style={{ animationDelay: "0.4s" }} />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <Card className="border-border flex-shrink-0">
          <CardContent className="p-2">
            <div className="flex gap-1.5 items-center">
              <Button variant="outline" size="icon" className={`${t.btn} flex-shrink-0`}>
                <ImagePlus className={t.btnIcon} />
              </Button>
              <Button variant="outline" size="icon" className={`${t.btn} flex-shrink-0`}>
                <Mic className={t.btnIcon} />
              </Button>
              <div className="flex-1 bg-muted rounded-md px-2 py-1.5 min-h-[28px]">
                {typingText ? (
                  <span className={`${t.input} text-foreground`}>
                    {typingText}
                    <span className="animate-pulse">|</span>
                  </span>
                ) : (
                  <span className={`${t.input} text-muted-foreground`}>Ask about medications...</span>
                )}
              </div>
              <Button size="icon" className={`gradient-mia border-0 ${t.btn} flex-shrink-0`}>
                <Send className={t.btnIcon} />
              </Button>
            </div>
            <p className={`${t.disclaimer} text-muted-foreground mt-2 text-center`}>
              MIA provides information only, not medical advice.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Floating controls (top-right)
  const Controls = (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <Button variant="outline" size="sm" onClick={toggleMode}>
        {phoneMode ? (
          <>
            <Monitor className="mr-2 h-4 w-4" />
            Frame view
          </>
        ) : (
          <>
            <Smartphone className="mr-2 h-4 w-4" />
            Phone view
          </>
        )}
      </Button>
      {isComplete && (
        <Button variant="outline" size="sm" onClick={restartDemo}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Replay
        </Button>
      )}
    </div>
  );

  if (phoneMode) {
    // Fullscreen — designed to fit a real iPhone viewport (e.g. 390x844)
    return (
      <div className="h-[100dvh] w-screen overflow-hidden bg-background">
        {Controls}
        {ScreenContent}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 flex flex-col items-center justify-center p-8">
      {Controls}
      <div className="mb-6 flex gap-3">
        <Button variant="outline" asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="relative">
        <div className="w-[375px] h-[812px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
          <div className="w-full h-full bg-slate-800 rounded-[2.5rem] p-1 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-20" />
            <div className="w-full h-full rounded-[2.25rem] overflow-hidden">
              {ScreenContent}
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-600 rounded-full" />
      </div>
    </div>
  );
};

export default ChatMobile;
