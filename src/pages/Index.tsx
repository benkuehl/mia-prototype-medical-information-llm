import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  MessageCircle, 
  Camera, 
  Shield, 
  Database, 
  Lock, 
  CheckCircle2,
  ArrowRight,
  Sparkles,
  FileText,
  Users,
  Smartphone
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Ask Any Health Question",
      description: "Get instant, personalized answers about medications, symptoms, and treatments from our AI trained on verified clinical data.",
    },
    {
      icon: Camera,
      title: "Medication Image Analysis",
      description: "Upload photos of your medications and get detailed information about dosage, interactions, and side effects.",
    },
    {
      icon: Shield,
      title: "Verified Clinical Sources",
      description: "All responses are generated from internally verified research data collected through rigorous drug development processes.",
    },
    {
      icon: Database,
      title: "Personalized Health Profile",
      description: "Premium users can build a health profile for tailored recommendations based on their medical history and conditions.",
    },
  ];

  const trustPoints = [
    "FDA & state regulatory compliance",
    "HIPAA-compliant data handling",
    "Internal clinical research sources",
    "Regular expert review process",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden gradient-subtle">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--mia-teal)/0.1),transparent_50%)]" />
          <div className="container relative py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Improving Medication Safety Through AI
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight">
                Your Trusted Source for{" "}
                <span className="text-gradient">Medication Answers</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Ask questions about your medications, upload images for instant analysis, 
                and get personalized health insights backed by verified clinical research.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="gradient-mia border-0 text-lg px-8 h-14">
                  <Link to="/chat">
                    Start Asking Questions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 h-14">
                  <Link to="/trust">
                    Learn About Our Data
                  </Link>
                </Button>
              </div>
              
              <div className="pt-4">
                <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
                  <Link to="/dashboard-mobile">
                    <Smartphone className="mr-2 h-4 w-4" />
                    View Mobile App Demo
                  </Link>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-primary" />
                  HIPAA Compliant
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  FDA Standards
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  Verified Sources
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-card">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                How MIA Helps You
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get reliable, personalized healthcare guidance powered by AI and backed by verified clinical research.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-border hover:border-primary/30 transition-colors group">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-12 w-12 rounded-lg gradient-mia flex items-center justify-center group-hover:scale-110 transition-transform">
                        <feature.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 gradient-subtle">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Built on Trust & Compliance
                </h2>
                <p className="text-muted-foreground mb-8">
                  Unlike general AI assistants, MIA is trained exclusively on verified 
                  internal clinical research data, ensuring every response meets the highest 
                  standards of medical accuracy and regulatory compliance.
                </p>
                
                <ul className="space-y-4">
                  {trustPoints.map((point, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="mt-8" variant="outline">
                  <Link to="/trust">
                    Learn More About Our Standards
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative">
                <Card className="border-border shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-14 w-14 rounded-full gradient-mia flex items-center justify-center">
                        <Shield className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground">Regulatory Compliance</h3>
                        <p className="text-sm text-muted-foreground">US State & Federal Standards</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 rounded-lg bg-secondary">
                        <span className="text-sm text-secondary-foreground">HIPAA Compliance</span>
                        <span className="text-sm font-medium text-primary">Certified</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-secondary">
                        <span className="text-sm text-secondary-foreground">FDA Guidelines</span>
                        <span className="text-sm font-medium text-primary">Aligned</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-secondary">
                        <span className="text-sm text-secondary-foreground">Data Encryption</span>
                        <span className="text-sm font-medium text-primary">AES-256</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card">
          <div className="container">
            <Card className="gradient-mia border-0 overflow-hidden">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
                  Ready to Get Personalized Health Answers?
                </h2>
                <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                  Start asking questions for free, or upgrade to premium for a personalized 
                  health dashboard with tailored recommendations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                    <Link to="/chat">
                      Try Free Version
                    </Link>
                  </Button>
                  <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8">
                    <Link to="/dashboard">
                      Explore Premium
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
