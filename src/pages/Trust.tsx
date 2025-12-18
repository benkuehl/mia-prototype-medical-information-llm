import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Shield, 
  Database, 
  Lock, 
  FileCheck, 
  Building2, 
  Scale,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Users,
  Microscope,
  Award
} from "lucide-react";

const Trust = () => {
  const dataSourcePrinciples = [
    {
      icon: Microscope,
      title: "Clinical Research Data",
      description: "All information is derived from rigorous clinical trials and drug development research conducted internally over decades.",
    },
    {
      icon: BookOpen,
      title: "Peer-Reviewed Studies",
      description: "Every medical claim is backed by peer-reviewed scientific literature and validated by our internal medical affairs team.",
    },
    {
      icon: Users,
      title: "Expert Medical Review",
      description: "Board-certified physicians and pharmacists continuously review and validate AI-generated responses for accuracy.",
    },
    {
      icon: Database,
      title: "Proprietary Database",
      description: "Our AI is trained exclusively on our proprietary medical database, not on general internet sources or unverified content.",
    },
  ];

  const complianceItems = [
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Full compliance with the Health Insurance Portability and Accountability Act for protecting patient health information.",
      status: "Certified",
    },
    {
      icon: Scale,
      title: "FDA Guidelines",
      description: "All drug information aligns with FDA labeling requirements and approved indications for medications.",
      status: "Aligned",
    },
    {
      icon: Building2,
      title: "State Regulations",
      description: "Compliance with state-specific healthcare regulations across all 50 US states.",
      status: "Compliant",
    },
    {
      icon: Lock,
      title: "Data Security",
      description: "AES-256 encryption for data at rest and TLS 1.3 for data in transit, with SOC 2 Type II certification.",
      status: "Verified",
    },
  ];

  const qualityMeasures = [
    "Regular accuracy audits by independent medical professionals",
    "Continuous monitoring for outdated or recalled drug information",
    "Immediate updates when FDA issues new warnings or guidelines",
    "Transparent source citations for all medical information",
    "User feedback integration for continuous improvement",
    "Zero tolerance for unsubstantiated health claims",
  ];

  const limitations = [
    "MedAssistAI provides health information, not medical diagnoses",
    "Always consult a healthcare provider for medical decisions",
    "Emergency situations require immediate professional care",
    "Individual responses to medications may vary",
    "Information may not cover every possible interaction or side effect",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-subtle py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
                <Shield className="h-4 w-4" />
                Our Commitment to You
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                Trust, Transparency & <span className="text-gradient">Compliance</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Learn how MedAssistAI ensures every piece of health information you receive 
                is accurate, verified, and compliant with the highest regulatory standards.
              </p>
            </div>
          </div>
        </section>

        {/* Data Sources Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Our Data Sources
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Unlike generic AI assistants, MedAssistAI is trained exclusively on verified 
                internal clinical research and drug development data.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {dataSourcePrinciples.map((principle, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-12 w-12 rounded-lg gradient-healthcare flex items-center justify-center">
                        <principle.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                          {principle.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory Compliance Section */}
        <section className="py-16 gradient-subtle">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Regulatory Compliance
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We maintain strict adherence to US federal and state healthcare regulations 
                to ensure your safety and privacy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {complianceItems.map((item, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-display font-semibold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Measures Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  Quality Assurance Measures
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our commitment to quality goes beyond initial training. We continuously 
                  monitor, verify, and improve the accuracy of our health information.
                </p>
                
                <ul className="space-y-4">
                  {qualityMeasures.map((measure, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Card className="border-border shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg gradient-healthcare flex items-center justify-center">
                        <Award className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Quality Certifications</CardTitle>
                        <p className="text-sm text-muted-foreground">Industry-recognized standards</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 rounded-lg bg-secondary">
                        <div>
                          <span className="text-sm font-medium text-foreground">SOC 2 Type II</span>
                          <p className="text-xs text-muted-foreground">Security & Privacy</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Certified</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-secondary">
                        <div>
                          <span className="text-sm font-medium text-foreground">ISO 27001</span>
                          <p className="text-xs text-muted-foreground">Information Security</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Certified</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-secondary">
                        <div>
                          <span className="text-sm font-medium text-foreground">HITRUST CSF</span>
                          <p className="text-xs text-muted-foreground">Healthcare Security</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Certified</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Limitations Section */}
        <section className="py-16 gradient-subtle">
          <div className="container">
            <Card className="border-border bg-card max-w-4xl mx-auto">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-yellow-700 dark:text-yellow-400" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Important Limitations</CardTitle>
                    <p className="text-sm text-muted-foreground">Please understand these boundaries</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  While MedAssistAI strives to provide accurate health information, it's important 
                  to understand the limitations of any AI-powered health tool:
                </p>
                <ul className="space-y-3">
                  {limitations.map((limitation, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-muted-foreground font-medium">{index + 1}</span>
                      </div>
                      <span className="text-foreground text-sm">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-card">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Questions About Our Standards?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Our compliance and medical affairs teams are available to answer questions 
              about our data sources, security measures, and regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:compliance@medassistai.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
              >
                <FileCheck className="h-4 w-4 mr-2" />
                Contact Compliance Team
              </a>
              <a 
                href="mailto:medical@medassistai.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg gradient-healthcare text-primary-foreground"
              >
                <Users className="h-4 w-4 mr-2" />
                Contact Medical Affairs
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Trust;
