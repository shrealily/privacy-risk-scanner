import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, AlertTriangle, Building2, ShieldCheck, 
  MapPin, Camera, Mic, Users, HardDrive, ArrowRight
} from "lucide-react";

const dangerousPermissions = [
  {
    icon: MapPin,
    name: "Location Access",
    risk: "High",
    explanation: "Location data reveals where you live, work, shop, and socialize. This information can be used for targeted advertising, sold to data brokers, or in worst cases, enable stalking or burglary.",
    protection: "Only grant 'While Using' permission, and regularly audit which apps have location access."
  },
  {
    icon: Camera,
    name: "Camera Access",
    risk: "High",
    explanation: "Camera access could theoretically allow apps to capture images or video without your knowledge, potentially exposing private moments or sensitive documents.",
    protection: "Grant camera access only to apps that clearly need it (camera, video calling, QR scanning)."
  },
  {
    icon: Mic,
    name: "Microphone Access",
    risk: "High",
    explanation: "Microphone access enables recording of conversations, ambient sounds, and voice commands. This data could be used for voice profiling or capturing private discussions.",
    protection: "Be extremely selective. Deny access to apps that don't have an obvious need for audio input."
  },
  {
    icon: Users,
    name: "Contacts Access",
    risk: "Medium-High",
    explanation: "Your contacts represent your social network. Apps can harvest names, phone numbers, emails, and relationship data to build social graphs or spam your contacts.",
    protection: "Manually enter contacts when possible instead of syncing entire address books."
  },
  {
    icon: HardDrive,
    name: "Storage Access",
    risk: "Medium",
    explanation: "Storage access means apps can read your photos, documents, downloads, and other files. This could expose personal photos, financial documents, or work files.",
    protection: "Use apps that support scoped storage, limiting access to only specific folders."
  }
];

const companyMisuse = [
  {
    title: "Targeted Advertising",
    description: "Companies build detailed profiles based on your behavior, location, interests, and social connections to serve highly personalized ads."
  },
  {
    title: "Data Broker Sales",
    description: "Your personal data is packaged and sold to data brokers who aggregate information from multiple sources, creating comprehensive profiles."
  },
  {
    title: "Algorithm Manipulation",
    description: "Social media platforms use your data to keep you engaged longer, sometimes promoting sensational or divisive content."
  },
  {
    title: "Insurance & Credit Decisions",
    description: "Data about your behavior, health apps usage, and location patterns can influence insurance rates or credit decisions."
  }
];

const safetyTips = [
  "Review app permissions regularly and revoke unnecessary access",
  "Read privacy policies, especially sections on data sharing and retention",
  "Use privacy-focused alternatives when available (Signal, DuckDuckGo, etc.)",
  "Enable 'Ask' or 'While Using' instead of 'Always Allow' for sensitive permissions",
  "Use unique passwords and enable two-factor authentication",
  "Be cautious with apps that ask for permissions unrelated to their function",
  "Regularly clear cookies and browser history",
  "Consider using a VPN for sensitive browsing"
];

const Education = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 text-primary mb-4">
              <BookOpen className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Education</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding how your data is collected and used is the first step 
              toward protecting your digital privacy.
            </p>
          </div>

          {/* Why Privacy Matters */}
          <section className="mb-16 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <h2 className="text-2xl font-bold mb-6">Why Data Privacy Matters</h2>
            <div className="card-elevated p-6 md:p-8">
              <p className="text-muted-foreground mb-4">
                In the digital age, your personal data has become one of the most valuable 
                commodities. Every app you use, every website you visit, and every permission 
                you grant contributes to a digital profile that companies use to influence 
                your decisions, target advertisements, and even make judgments about you.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">The average person has data held by 350+ companies.</strong> Most 
                of this data collection happens silently in the background, often without 
                meaningful consent or understanding.
              </p>
              <p className="text-muted-foreground">
                Privacy isn't about having something to hide—it's about maintaining control 
                over your own life. When others know everything about you, they hold power 
                over you. Privacy is fundamental to freedom.
              </p>
            </div>
          </section>

          {/* Dangerous Permissions */}
          <section className="mb-16 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-risk-high" />
              Common Dangerous Permissions
            </h2>
            
            <div className="space-y-4">
              {dangerousPermissions.map((permission, index) => (
                <div key={permission.name} className="card-elevated p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <permission.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">{permission.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          permission.risk === "High" 
                            ? "bg-risk-high/10 text-risk-high" 
                            : "bg-risk-medium/10 text-risk-medium"
                        }`}>
                          {permission.risk} Risk
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-3">{permission.explanation}</p>
                      <p className="text-sm text-primary">
                        <strong>🛡️ Protection:</strong> {permission.protection}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How Companies Misuse Data */}
          <section className="mb-16 animate-slide-up" style={{ animationDelay: "300ms" }}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Building2 className="h-6 w-6 text-muted-foreground" />
              How Companies Misuse Your Data
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {companyMisuse.map((item, index) => (
                <div key={item.title} className="card-elevated p-6">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Safety Tips */}
          <section className="mb-16 animate-slide-up" style={{ animationDelay: "400ms" }}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-risk-low" />
              Tips to Stay Safe Online
            </h2>
            
            <div className="card-elevated p-6 md:p-8">
              <ul className="space-y-4">
                {safetyTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-risk-low text-white text-xs font-medium flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center animate-slide-up" style={{ animationDelay: "500ms" }}>
            <p className="text-muted-foreground mb-6">
              Ready to check an app's privacy practices?
            </p>
            <Link to="/scan">
              <Button variant="hero" size="xl">
                Start Privacy Scan
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Education;
