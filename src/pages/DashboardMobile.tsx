import { useState } from "react";
import { User, Heart, Activity, Pill, FileText, Edit2, Check, Crown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface HealthMetric {
  label: string;
  value: string;
  unit: string;
  icon: React.ReactNode;
  status: "normal" | "attention" | "good";
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

const DashboardMobile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isPremium] = useState(false);
  
  const [profile, setProfile] = useState({
    name: "Sarah Johnson",
    age: "34",
    bloodType: "O+"
  });

  const [metrics] = useState<HealthMetric[]>([
    { label: "Height", value: "5'6\"", unit: "", icon: <Activity className="h-4 w-4" />, status: "normal" },
    { label: "Weight", value: "145", unit: "lbs", icon: <Activity className="h-4 w-4" />, status: "normal" },
    { label: "Blood Pressure", value: "118/76", unit: "mmHg", icon: <Heart className="h-4 w-4" />, status: "good" },
    { label: "Heart Rate", value: "72", unit: "bpm", icon: <Heart className="h-4 w-4" />, status: "good" },
  ]);

  const [conditions] = useState<Condition[]>([
    { name: "Seasonal Allergies", diagnosedDate: "2019", status: "managed" },
    { name: "Mild Asthma", diagnosedDate: "2015", status: "managed" },
  ]);

  const [medications] = useState<Medication[]>([
    { name: "Cetirizine", dosage: "10mg", frequency: "Daily" },
    { name: "Albuterol Inhaler", dosage: "90mcg", frequency: "As needed" },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
      case "resolved":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "normal":
      case "managed":
        return "bg-primary/10 text-primary border-primary/20";
      case "attention":
      case "active":
        return "bg-amber-500/10 text-amber-600 border-amber-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-8">
      {/* Smartphone Frame */}
      <div className="relative">
        {/* Phone outer frame */}
        <div className="w-[375px] h-[812px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
          {/* Phone inner bezel */}
          <div className="w-full h-full bg-slate-800 rounded-[2.5rem] p-1 relative overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-20" />
            
            {/* Screen */}
            <div className="w-full h-full bg-background rounded-[2.25rem] overflow-hidden overflow-y-auto">
              {/* Status bar */}
              <div className="h-12 bg-background flex items-end justify-between px-8 pb-1 text-xs text-muted-foreground">
                <span>9:41</span>
                <div className="flex gap-1 items-center">
                  <div className="w-4 h-2 border border-muted-foreground rounded-sm relative">
                    <div className="absolute inset-0.5 bg-muted-foreground rounded-sm" style={{ width: '70%' }} />
                  </div>
                </div>
              </div>

              {/* App Content */}
              <div className="px-4 pb-8">
                {/* Premium Banner */}
                {!isPremium && (
                  <div className="gradient-mia rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Crown className="h-4 w-4 text-primary-foreground" />
                        <div>
                          <p className="text-primary-foreground font-medium text-xs">Upgrade to Premium</p>
                          <p className="text-primary-foreground/80 text-[10px]">Personalized insights</p>
                        </div>
                      </div>
                      <Button size="sm" variant="secondary" className="h-7 text-xs px-2">
                        Upgrade
                      </Button>
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h1 className="text-lg font-display font-bold text-foreground">My Health Profile</h1>
                    <p className="text-muted-foreground text-xs">Manage your health information</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                    className="h-8 text-xs"
                  >
                    {isEditing ? <Check className="h-3 w-3 mr-1" /> : <Edit2 className="h-3 w-3 mr-1" />}
                    {isEditing ? "Save" : "Edit"}
                  </Button>
                </div>

                {/* Profile Card */}
                <Card className="border-border mb-3">
                  <CardHeader className="pb-2 pt-3 px-3">
                    <CardTitle className="flex items-center gap-2 text-sm">
                      <User className="h-4 w-4 text-primary" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 px-3 pb-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-full gradient-mia flex items-center justify-center flex-shrink-0">
                        <User className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        {isEditing ? (
                          <Input 
                            value={profile.name}
                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                            className="font-display font-semibold h-7 text-sm"
                          />
                        ) : (
                          <h3 className="font-display font-semibold text-sm text-foreground">{profile.name}</h3>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label className="text-muted-foreground text-[10px]">Age</Label>
                        {isEditing ? (
                          <Input 
                            value={profile.age}
                            onChange={(e) => setProfile({ ...profile, age: e.target.value })}
                            className="h-6 text-xs"
                          />
                        ) : (
                          <p className="text-foreground font-medium text-xs">{profile.age} years</p>
                        )}
                      </div>
                      <div>
                        <Label className="text-muted-foreground text-[10px]">Blood Type</Label>
                        {isEditing ? (
                          <Input 
                            value={profile.bloodType}
                            onChange={(e) => setProfile({ ...profile, bloodType: e.target.value })}
                            className="h-6 text-xs"
                          />
                        ) : (
                          <p className="text-foreground font-medium text-xs">{profile.bloodType}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Health Metrics */}
                <Card className="border-border mb-3">
                  <CardHeader className="pb-2 pt-3 px-3">
                    <CardTitle className="flex items-center gap-2 text-sm">
                      <Activity className="h-4 w-4 text-primary" />
                      Health Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 px-3 pb-3">
                    <div className="grid grid-cols-2 gap-2">
                      {metrics.map((metric, index) => (
                        <div key={index} className="p-2 bg-muted/30 rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-muted-foreground text-[10px]">{metric.label}</span>
                            <Badge variant="outline" className={`text-[8px] px-1 py-0 ${getStatusColor(metric.status)}`}>
                              {metric.status}
                            </Badge>
                          </div>
                          <p className="text-foreground font-semibold text-xs">
                            {metric.value} <span className="text-muted-foreground font-normal">{metric.unit}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Medical History */}
                <Card className="border-border mb-3">
                  <CardHeader className="pb-2 pt-3 px-3">
                    <CardTitle className="flex items-center gap-2 text-sm">
                      <FileText className="h-4 w-4 text-primary" />
                      Medical History
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 px-3 pb-3">
                    <div className="space-y-2">
                      {conditions.map((condition, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
                          <div>
                            <p className="text-foreground font-medium text-xs">{condition.name}</p>
                            <p className="text-muted-foreground text-[10px]">Since {condition.diagnosedDate}</p>
                          </div>
                          <Badge variant="outline" className={`text-[8px] px-1 py-0 ${getStatusColor(condition.status)}`}>
                            {condition.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Medications */}
                <Card className="border-border">
                  <CardHeader className="pb-2 pt-3 px-3">
                    <CardTitle className="flex items-center gap-2 text-sm">
                      <Pill className="h-4 w-4 text-primary" />
                      Current Medications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 px-3 pb-3">
                    <div className="space-y-2">
                      {medications.map((medication, index) => (
                        <div key={index} className="p-2 bg-muted/30 rounded-lg">
                          <p className="text-foreground font-medium text-xs">{medication.name}</p>
                          <p className="text-muted-foreground text-[10px]">
                            {medication.dosage} • {medication.frequency}
                          </p>
                        </div>
                      ))}
                    </div>
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

export default DashboardMobile;
