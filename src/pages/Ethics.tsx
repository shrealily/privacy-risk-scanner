import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Heart, Lock, Eye, Handshake, Code, 
  Database, ArrowRight, CheckCircle2
} from "lucide-react";

const principles = [
  {
    icon: Lock,
    title: "No Data Collection",
    description: "We don't collect, store, or transmit any personal user data. Your privacy analysis stays entirely on your device."
  },
  {
    icon: Eye,
    title: "Transparency First",
    description: "Our scoring rules are powered by Google Sheets, making them fully auditable and transparent to anyone who wants to review them."
  },
  {
    icon: Heart,
    title: "Educational Purpose",
    description: "This tool exists solely to educate users about privacy risks. We believe informed users make better decisions."
  },
  {
    icon: Handshake,
    title: "No Judgment",
    description: "We don't shame anyone for using specific apps. We simply provide information to help you make informed choices."
  },
  {
    icon: Code,
    title: "Open Approach",
    description: "Our methodology is documented and our scoring rules are accessible, allowing anyone to verify our approach."
  },
  {
    icon: Database,
    title: "Google-Powered",
    description: "By using Google Sheets as our rule backend, we ensure our logic is maintainable and can be updated transparently."
  }
];

const commitments = [
  "We will never sell or share user data",
  "We will never show advertisements",
  "We will never require account creation",
  "We will always explain our methodology",
  "We will update our rules as privacy landscape evolves",
  "We will remain accessible and free for educational use"
];

const Ethics = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 text-primary mb-4">
              <Heart className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Ethics & Transparency</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe privacy tools should themselves be private, transparent, 
              and built with strong ethical foundations.
            </p>
          </div>

          {/* Our Motivation */}
          <section className="mb-16 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <h2 className="text-2xl font-bold mb-6">Our Ethical Motivation</h2>
            <div className="card-elevated p-6 md:p-8">
              <p className="text-muted-foreground mb-4">
                The Privacy Risk Scanner was created out of a genuine concern for digital 
                privacy in an increasingly connected world. Too often, people unknowingly 
                give away their most personal information without understanding the implications.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Our goal is awareness, not fear.</strong> We 
                don't want to scare users away from technology—we want to empower them to 
                use it wisely. Technology can be a force for good when used with informed consent.
              </p>
              <p className="text-muted-foreground">
                This project is not about surveillance, hacking, or exploiting privacy concerns 
                for profit. It's about education and empowerment. We believe everyone deserves 
                to understand how their data is being used.
              </p>
            </div>
          </section>

          {/* Guiding Principles */}
          <section className="mb-16 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-2xl font-bold mb-6">Our Guiding Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {principles.map((principle, index) => (
                <div key={principle.title} className="card-elevated p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <principle.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{principle.title}</h3>
                      <p className="text-sm text-muted-foreground">{principle.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Data Statement */}
          <section className="mb-16 animate-slide-up" style={{ animationDelay: "300ms" }}>
            <h2 className="text-2xl font-bold mb-6">Our Data Statement</h2>
            <div className="card-elevated p-6 md:p-8 border-2 border-risk-low/20 bg-risk-low/5">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-risk-low text-white flex-shrink-0">
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-risk-low mb-2">
                    We Do Not Store User Data
                  </h3>
                  <p className="text-muted-foreground">
                    All privacy analysis happens locally in your browser. The app names, 
                    permissions, and scores you see are processed entirely on your device 
                    and are never sent to any server.
                  </p>
                </div>
              </div>
              <div className="pl-16 text-sm text-muted-foreground">
                <p className="mb-2">
                  <strong>What stays on your device:</strong> Your scan inputs, privacy scores, 
                  and all analysis results.
                </p>
                <p>
                  <strong>What we might fetch:</strong> Only the scoring rules from our 
                  public Google Sheet—no personal data is ever transmitted.
                </p>
              </div>
            </div>
          </section>

          {/* Our Commitments */}
          <section className="mb-16 animate-slide-up" style={{ animationDelay: "400ms" }}>
            <h2 className="text-2xl font-bold mb-6">Our Commitments</h2>
            <div className="card-elevated p-6 md:p-8">
              <ul className="space-y-4">
                {commitments.map((commitment, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-risk-low flex-shrink-0" />
                    <span className="text-muted-foreground">{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Google Technology */}
          <section className="mb-16 animate-slide-up" style={{ animationDelay: "500ms" }}>
            <h2 className="text-2xl font-bold mb-6">Google Technology Integration</h2>
            <div className="card-elevated p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <Database className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Powered by Google Sheets API</h3>
                  <p className="text-muted-foreground">
                    Our privacy scoring rules are stored in Google Sheets, making our 
                    methodology transparent and easily auditable. Anyone can review the 
                    exact weights and thresholds we use.
                  </p>
                </div>
              </div>
              
              <div className="border-t border-border pt-6">
                <h4 className="font-medium mb-3">Future Integration: Google Gemini</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  We're exploring integration with Google's Gemini API to provide:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Plain-language summaries of complex privacy policies
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Automatic detection of concerning privacy practices
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Personalized privacy recommendations
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center animate-slide-up" style={{ animationDelay: "600ms" }}>
            <p className="text-muted-foreground mb-6">
              Ready to put our ethical approach to work for your privacy?
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

export default Ethics;
