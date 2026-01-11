import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Shield, Eye, Lock, Users, ArrowRight, Database } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Understand Permissions",
    description: "Learn what each app permission really means for your privacy"
  },
  {
    icon: Lock,
    title: "Risk Assessment",
    description: "Get a clear privacy score with detailed explanations"
  },
  {
    icon: Users,
    title: "Third-Party Awareness",
    description: "Discover who else might access your personal data"
  },
  {
    icon: Database,
    title: "Google-Powered",
    description: "Transparent rules powered by Google Sheets API"
  }
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        <div className="container relative py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              <span>Privacy-First Tool</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Privacy Risk Scanner
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Scan apps and websites before you trust them.
            </p>
            
            <p className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto">
              Before sharing your personal information, understand the privacy risks. 
              Our scanner helps you make informed decisions about which apps and websites 
              deserve your trust.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/scan">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Start Privacy Scan
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/education">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Learn About Privacy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Privacy Awareness Matters</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every app permission you grant is a potential doorway to your personal data. 
              Understanding these risks is the first step to protecting yourself.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="card-elevated p-6 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A simple three-step process to understand your privacy exposure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Enter Details", description: "Input the app name or website URL you want to analyze" },
              { step: "2", title: "Select Permissions", description: "Check which permissions the app requests from you" },
              { step: "3", title: "Get Results", description: "Receive a detailed privacy risk score with recommendations" }
            ].map((item, index) => (
              <div key={item.step} className="text-center animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground text-2xl font-bold mx-auto mb-4 shadow-elevated">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Technology Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="card-elevated-lg p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Database className="h-10 w-10" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Powered by Google Sheets</h2>
                <p className="text-muted-foreground mb-4">
                  Our privacy scoring rules are stored in Google Sheets, making them transparent, 
                  auditable, and easily updatable. This ensures our risk calculations are always 
                  current and can be reviewed by anyone.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    Google Sheets API
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                    Transparent Rules
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                    Future: Gemini AI Integration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Privacy?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Start your first privacy scan now. It's free, educational, and we never store your personal data.
          </p>
          <Link to="/scan">
            <Button variant="hero" size="xl">
              Start Privacy Scan
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
