import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Send, 
  ImagePlus, 
  X, 
  Bot, 
  User,
  Sparkles,
  Pill,
  AlertCircle,
  Clock,
  FileText
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  image?: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm MedAssistAI, your trusted healthcare assistant. I can help you understand your medications, answer health questions, and analyze medication images. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const exampleQuestions = [
    "What are the side effects of ibuprofen?",
    "Can I take aspirin with blood pressure medication?",
    "What should I know about taking metformin?",
    "How does lisinopril work for blood pressure?",
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSend = async () => {
    if (!input.trim() && !selectedImage) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      image: selectedImage || undefined,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setSelectedImage(null);
    setIsLoading(true);

    // Simulate AI response with a drafted medical answer
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: generateDraftedResponse(input),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const generateDraftedResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes("ibuprofen")) {
      return `**Ibuprofen Overview**

Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) commonly used to reduce fever and treat pain or inflammation.

**Common Side Effects:**
• Stomach pain, heartburn, or nausea
• Dizziness or headache
• Mild skin rash

**Serious Side Effects (seek medical attention):**
• Signs of stomach bleeding (bloody stools, vomiting blood)
• Shortness of breath or chest pain
• Swelling of face, lips, or throat

**Important Precautions:**
• Take with food to reduce stomach irritation
• Avoid alcohol while taking ibuprofen
• Do not exceed recommended dosage

**Drug Interactions:**
Ibuprofen may interact with blood thinners, certain blood pressure medications, and other NSAIDs.

*This information is based on verified clinical research data. Always consult your healthcare provider for personalized medical advice.*`;
    }

    if (lowerQuestion.includes("aspirin") || lowerQuestion.includes("blood pressure")) {
      return `**Aspirin and Blood Pressure Medication Interactions**

Taking aspirin with blood pressure medications requires careful consideration.

**Key Points:**
• Low-dose aspirin (81mg) is generally safe with most blood pressure medications
• High-dose aspirin may reduce the effectiveness of some blood pressure drugs
• ACE inhibitors and diuretics may be affected by regular aspirin use

**Recommendations:**
1. Consult your doctor before combining these medications
2. Monitor your blood pressure regularly
3. Report any unusual symptoms to your healthcare provider

**When to Seek Medical Advice:**
• If you experience unusual bleeding or bruising
• If your blood pressure becomes harder to control
• Before making any changes to your medication routine

*Based on internal clinical research data. Individual responses may vary—consult your healthcare provider.*`;
    }

    if (lowerQuestion.includes("metformin")) {
      return `**Metformin: Essential Information**

Metformin is a first-line medication for type 2 diabetes that helps control blood sugar levels.

**How It Works:**
• Reduces glucose production in the liver
• Improves insulin sensitivity in muscles
• Decreases intestinal absorption of glucose

**Common Side Effects:**
• Gastrointestinal issues (nausea, diarrhea, stomach upset)
• Metallic taste in mouth
• These often improve after a few weeks

**Important Considerations:**
• Take with meals to reduce stomach upset
• Stay hydrated and maintain regular eating patterns
• Regular B12 monitoring may be recommended for long-term use

**Warning Signs to Watch:**
Seek immediate medical attention if you experience muscle pain, unusual fatigue, or difficulty breathing (rare signs of lactic acidosis).

*Information sourced from verified clinical research. Consult your healthcare provider for personalized guidance.*`;
    }

    return `Thank you for your question about "${question}".

**Based on our verified clinical database:**

I understand you're looking for information about this health topic. Here's what you should know:

**General Guidance:**
• Always consult with your healthcare provider for personalized medical advice
• Follow prescribed dosages and instructions carefully
• Report any unusual symptoms or side effects to your doctor

**Next Steps:**
1. If this is about a specific medication, I can provide more detailed information if you share the name
2. For urgent concerns, please contact your healthcare provider directly
3. Consider uploading an image of your medication for more specific information

**Premium Features Available:**
With a premium account, you can get personalized recommendations based on your health profile, including your medical history and current medications.

*All information is sourced from verified internal clinical research data and reviewed for accuracy.*`;
  };

  const handleExampleClick = (question: string) => {
    setInput(question);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container py-6">
        <div className="max-w-4xl mx-auto">
          {/* Chat Header */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
              Ask Your Health Questions
            </h1>
            <p className="text-muted-foreground">
              Get instant answers powered by verified clinical research
            </p>
          </div>

          {/* Example Questions */}
          {messages.length === 1 && (
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-3 text-center">Try asking:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {exampleQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={() => handleExampleClick(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="space-y-4 mb-6 min-h-[400px] max-h-[600px] overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                {message.role === "assistant" && (
                  <div className="flex-shrink-0 h-8 w-8 rounded-full gradient-healthcare flex items-center justify-center">
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}
                <Card className={`max-w-[80%] ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-card"}`}>
                  <CardContent className="p-4">
                    {message.image && (
                      <img 
                        src={message.image} 
                        alt="Uploaded medication" 
                        className="max-w-full h-auto rounded-lg mb-3 max-h-48 object-contain"
                      />
                    )}
                    <div className={`text-sm whitespace-pre-wrap ${message.role === "user" ? "text-primary-foreground" : "text-foreground"}`}>
                      {message.content}
                    </div>
                  </CardContent>
                </Card>
                {message.role === "user" && (
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                    <User className="h-4 w-4 text-secondary-foreground" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 justify-start animate-fade-in">
                <div className="flex-shrink-0 h-8 w-8 rounded-full gradient-healthcare flex items-center justify-center">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
                <Card className="bg-card">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
                      </div>
                      <span className="text-sm">Analyzing your question...</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Input Area */}
          <Card className="border-border">
            <CardContent className="p-4">
              {selectedImage && (
                <div className="relative inline-block mb-3">
                  <img 
                    src={selectedImage} 
                    alt="Selected" 
                    className="h-20 w-20 object-cover rounded-lg"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute -top-2 -right-2 h-6 w-6"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              )}
              
              <div className="flex gap-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-shrink-0"
                >
                  <ImagePlus className="h-4 w-4" />
                </Button>
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about your medications, symptoms, or upload an image..."
                  className="min-h-[44px] max-h-32 resize-none"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                />
                <Button
                  onClick={handleSend}
                  disabled={(!input.trim() && !selectedImage) || isLoading}
                  className="gradient-healthcare border-0 flex-shrink-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-3 text-center">
                MedAssistAI provides information only and does not replace professional medical advice.
              </p>
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <Card className="border-border">
              <CardContent className="p-4 flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-foreground text-sm">AI-Powered</h3>
                  <p className="text-xs text-muted-foreground">Trained on verified clinical data</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-4 flex items-start gap-3">
                <Pill className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-foreground text-sm">Drug Interactions</h3>
                  <p className="text-xs text-muted-foreground">Check medication compatibility</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-4 flex items-start gap-3">
                <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-foreground text-sm">Image Analysis</h3>
                  <p className="text-xs text-muted-foreground">Upload medication photos</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Chat;
