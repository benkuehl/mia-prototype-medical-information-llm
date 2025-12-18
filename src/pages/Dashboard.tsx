import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  User, 
  Heart, 
  Activity, 
  Weight, 
  Ruler, 
  Pill,
  AlertCircle,
  Calendar,
  TrendingUp,
  Shield,
  Crown,
  Plus,
  X,
  Edit2,
  Check
} from "lucide-react";

interface HealthMetric {
  label: string;
  value: string;
  unit: string;
  icon: React.ElementType;
  status: "normal" | "warning" | "alert";
}

interface Condition {
  name: string;
  diagnosedDate: string;
  status: "active" | "managed" | "resolved";
}

interface Medication {
  name: string;
  dosage: string;
  frequency: string;
}

const Dashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isPremium] = useState(true); // Simulating premium status

  const [profile, setProfile] = useState({
    name: "Sarah Johnson",
    age: "42",
    bloodType: "O+",
  });

  const [metrics] = useState<HealthMetric[]>([
    { label: "Height", value: "5'6\"", unit: "", icon: Ruler, status: "normal" },
    { label: "Weight", value: "145", unit: "lbs", icon: Weight, status: "normal" },
    { label: "Blood Pressure", value: "120/80", unit: "mmHg", icon: Heart, status: "normal" },
    { label: "Heart Rate", value: "72", unit: "bpm", icon: Activity, status: "normal" },
  ]);

  const [conditions] = useState<Condition[]>([
    { name: "Type 2 Diabetes", diagnosedDate: "2019", status: "managed" },
    { name: "Hypertension", diagnosedDate: "2020", status: "managed" },
    { name: "Seasonal Allergies", diagnosedDate: "2015", status: "active" },
  ]);

  const [medications] = useState<Medication[]>([
    { name: "Metformin", dosage: "500mg", frequency: "Twice daily" },
    { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
    { name: "Cetirizine", dosage: "10mg", frequency: "As needed" },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal":
      case "managed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "warning":
      case "active":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "alert":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container py-6">
        <div className="max-w-6xl mx-auto">
          {/* Premium Banner */}
          {isPremium && (
            <Card className="mb-6 gradient-healthcare border-0">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <Crown className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-primary-foreground">Premium Member</h3>
                    <p className="text-sm text-primary-foreground/80">Personalized health recommendations enabled</p>
                  </div>
                </div>
                <Badge className="bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30">
                  Active
                </Badge>
              </CardContent>
            </Card>
          )}

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                My Health Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage your health profile for personalized recommendations
              </p>
            </div>
            <Button
              variant={isEditing ? "default" : "outline"}
              onClick={() => setIsEditing(!isEditing)}
              className={isEditing ? "gradient-healthcare border-0" : ""}
            >
              {isEditing ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              ) : (
                <>
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit Profile
                </>
              )}
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <User className="h-5 w-5 text-primary" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center mb-6">
                  <div className="h-20 w-20 rounded-full gradient-healthcare flex items-center justify-center mb-3">
                    <User className="h-10 w-10 text-primary-foreground" />
                  </div>
                  {isEditing ? (
                    <Input 
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="text-center font-display font-semibold"
                    />
                  ) : (
                    <h3 className="font-display font-semibold text-lg text-foreground">{profile.name}</h3>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-muted-foreground text-sm">Age</Label>
                    {isEditing ? (
                      <Input 
                        value={profile.age}
                        onChange={(e) => setProfile({ ...profile, age: e.target.value })}
                      />
                    ) : (
                      <p className="text-foreground font-medium">{profile.age} years old</p>
                    )}
                  </div>
                  <div>
                    <Label className="text-muted-foreground text-sm">Blood Type</Label>
                    {isEditing ? (
                      <Input 
                        value={profile.bloodType}
                        onChange={(e) => setProfile({ ...profile, bloodType: e.target.value })}
                      />
                    ) : (
                      <p className="text-foreground font-medium">{profile.bloodType}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Health Metrics */}
            <Card className="border-border lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Activity className="h-5 w-5 text-primary" />
                  Health Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {metrics.map((metric, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-lg bg-secondary/50 flex items-center gap-4"
                    >
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <metric.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{metric.label}</p>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-semibold text-foreground">{metric.value}</span>
                          <span className="text-sm text-muted-foreground">{metric.unit}</span>
                        </div>
                      </div>
                      <Badge className={getStatusColor(metric.status)}>
                        {metric.status}
                      </Badge>
                    </div>
                  ))}
                </div>

                {isEditing && (
                  <Button variant="outline" className="w-full mt-4">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Metric
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Medical History */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Medical History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {conditions.map((condition, index) => (
                    <div 
                      key={index}
                      className="p-3 rounded-lg border border-border flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium text-foreground text-sm">{condition.name}</p>
                        <p className="text-xs text-muted-foreground">Since {condition.diagnosedDate}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(condition.status)}>
                          {condition.status}
                        </Badge>
                        {isEditing && (
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <X className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {isEditing && (
                  <Button variant="outline" className="w-full mt-4">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Condition
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Current Medications */}
            <Card className="border-border lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Pill className="h-5 w-5 text-primary" />
                  Current Medications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {medications.map((medication, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-lg border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Pill className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{medication.name}</p>
                          <p className="text-sm text-muted-foreground">{medication.dosage}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">{medication.frequency}</Badge>
                        {isEditing && (
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {isEditing && (
                  <Button variant="outline" className="w-full mt-4">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Medication
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Personalization Info */}
          <Card className="mt-6 border-border bg-secondary/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg gradient-healthcare flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    How Your Profile Helps
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Your health profile enables MedAssistAI to provide personalized recommendations 
                    that consider your medical history, current medications, and health conditions. 
                    This means more accurate answers about drug interactions, dosage considerations, 
                    and health advice tailored specifically to you.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-primary border-primary">
                      <Shield className="h-3 w-3 mr-1" />
                      Data Encrypted
                    </Badge>
                    <Badge variant="outline" className="text-primary border-primary">
                      <Calendar className="h-3 w-3 mr-1" />
                      Auto-updated
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
