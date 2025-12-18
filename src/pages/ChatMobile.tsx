import { useState } from "react";
import { Link } from "react-router-dom";
import { Send, Bot, User, ArrowLeft, ImagePlus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const ChatMobile = () => {
  const [messages] = useState<Message[]>([
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
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 flex flex-col items-center justify-center p-8">
      {/* Back Button */}
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Smartphone Frame */}
      <div className="relative">
        {/* Phone outer frame */}
        <div className="w-[375px] h-[812px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
          {/* Phone inner bezel */}
          <div className="w-full h-full bg-slate-800 rounded-[2.5rem] p-1 relative overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-20" />
            
            {/* Screen */}
            <div className="w-full h-full bg-background rounded-[2.25rem] overflow-hidden flex flex-col">
              {/* Status bar */}
              <div className="h-12 bg-background flex items-end justify-between px-8 pb-1 text-xs text-muted-foreground flex-shrink-0">
                <span>9:41</span>
                <div className="flex gap-1 items-center">
                  <div className="w-4 h-2 border border-muted-foreground rounded-sm relative">
                    <div className="absolute inset-0.5 bg-muted-foreground rounded-sm" style={{ width: '70%' }} />
                  </div>
                </div>
              </div>

              {/* App Content */}
              <div className="flex-1 flex flex-col px-4 pb-4 overflow-hidden">
                {/* Chat Header */}
                <div className="text-center py-3 flex-shrink-0">
                  <h1 className="text-base font-display font-bold text-foreground">Ask MIA</h1>
                  <p className="text-muted-foreground text-[10px]">Powered by verified clinical research</p>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-3 mb-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.role === "assistant" && (
                        <div className="flex-shrink-0 h-6 w-6 rounded-full gradient-mia flex items-center justify-center">
                          <Bot className="h-3 w-3 text-primary-foreground" />
                        </div>
                      )}
                      <Card className={`max-w-[75%] ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-card"}`}>
                        <CardContent className="p-2">
                          <div className={`text-[10px] whitespace-pre-wrap leading-relaxed ${message.role === "user" ? "text-primary-foreground" : "text-foreground"}`}>
                            {message.content}
                          </div>
                        </CardContent>
                      </Card>
                      {message.role === "user" && (
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center">
                          <User className="h-3 w-3 text-secondary-foreground" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Input Area */}
                <Card className="border-border flex-shrink-0">
                  <CardContent className="p-2">
                    <div className="flex gap-2 items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 flex-shrink-0"
                      >
                        <ImagePlus className="h-3 w-3" />
                      </Button>
                      <div className="flex-1 bg-muted rounded-md px-2 py-1.5">
                        <span className="text-[10px] text-muted-foreground">Ask about medications...</span>
                      </div>
                      <Button
                        size="icon"
                        className="gradient-mia border-0 h-7 w-7 flex-shrink-0"
                      >
                        <Send className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="text-[8px] text-muted-foreground mt-2 text-center">
                      MIA provides information only, not medical advice.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-600 rounded-full" />
      </div>
    </div>
  );
};

export default ChatMobile;
