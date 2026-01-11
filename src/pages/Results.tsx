import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  calculatePrivacyScore, 
  PermissionData, 
  PrivacyResult 
} from "@/lib/privacyScoring";
import { 
  Shield, ShieldCheck, ShieldAlert, AlertTriangle,
  ChevronRight, RotateCcw, BookOpen, CheckCircle2, XCircle
} from "lucide-react";

const Results = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<PrivacyResult | null>(null);
  const [targetName, setTargetName] = useState<string>("Unknown App");
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const storedData = sessionStorage.getItem("scanData");
    
    if (!storedData) {
      navigate("/scan");
      return;
    }

    const { targetName: name, permissions } = JSON.parse(storedData) as {
      targetName: string;
      permissions: PermissionData;
    };

    setTargetName(name);
    const calculatedResult = calculatePrivacyScore(permissions);
    setResult(calculatedResult);

    // Animate score after a delay
    setTimeout(() => setIsAnimating(false), 500);
  }, [navigate]);

  if (!result) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <p>Loading results...</p>
        </div>
      </Layout>
    );
  }

  const getRiskIcon = () => {
    switch (result.riskLevel) {
      case "low":
        return <ShieldCheck className="h-12 w-12" />;
      case "medium":
        return <Shield className="h-12 w-12" />;
      case "high":
        return <ShieldAlert className="h-12 w-12" />;
    }
  };

  const getRiskColor = () => {
    switch (result.riskLevel) {
      case "low":
        return "text-risk-low";
      case "medium":
        return "text-risk-medium";
      case "high":
        return "text-risk-high";
    }
  };

  const getRiskBgColor = () => {
    switch (result.riskLevel) {
      case "low":
        return "risk-bg-low";
      case "medium":
        return "risk-bg-medium";
      case "high":
        return "risk-bg-high";
    }
  };

  return (
    <Layout>
      <div className="container py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Score Card */}
          <div className="card-elevated-lg p-8 md:p-12 text-center mb-8 animate-scale-in">
            <p className="text-sm text-muted-foreground mb-2">Privacy Analysis for</p>
            <h1 className="text-2xl md:text-3xl font-bold mb-8">{targetName}</h1>

            {/* Score Circle */}
            <div className="relative inline-flex items-center justify-center mb-6">
              <div className={`flex h-40 w-40 items-center justify-center rounded-full ${getRiskColor()}`}>
                <div className="text-center">
                  <span className="text-5xl font-bold">{result.score}</span>
                  <span className="text-xl">/100</span>
                </div>
              </div>
            </div>

            {/* Risk Level Badge */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium ${getRiskBgColor()}`}>
                {getRiskIcon()}
                {result.riskLevel.charAt(0).toUpperCase() + result.riskLevel.slice(1)} Risk
              </span>
            </div>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto mb-6">
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${getRiskBgColor()}`}
                  style={{ width: isAnimating ? '0%' : `${result.riskPercentage}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Low Risk</span>
                <span>High Risk</span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-muted-foreground max-w-xl mx-auto">
              {result.summary}
            </p>
          </div>

          {/* Risk Breakdown */}
          <div className="card-elevated p-6 md:p-8 mb-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-xl font-bold mb-6">Risk Breakdown</h2>
            
            <div className="space-y-4">
              {result.breakdown.map((item, index) => (
                <div 
                  key={item.permission}
                  className="p-4 rounded-xl bg-muted/50"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {item.active ? (
                        item.permission === "Privacy Policy" ? (
                          <CheckCircle2 className="h-5 w-5 text-risk-low" />
                        ) : (
                          <XCircle className="h-5 w-5 text-risk-high" />
                        )
                      ) : (
                        item.permission === "Privacy Policy" ? (
                          <AlertTriangle className="h-5 w-5 text-risk-medium" />
                        ) : (
                          <CheckCircle2 className="h-5 w-5 text-risk-low" />
                        )
                      )}
                      <span className="font-medium">{item.permission}</span>
                    </div>
                    <span className={`text-sm font-medium px-2 py-1 rounded ${
                      item.points > 0 ? 'bg-risk-high/10 text-risk-high' : 
                      item.points < 0 ? 'bg-risk-low/10 text-risk-low' : 
                      'bg-muted text-muted-foreground'
                    }`}>
                      {item.points > 0 ? `+${item.points}` : item.points} pts
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <p className="text-sm text-primary">💡 {item.recommendation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="card-elevated p-6 md:p-8 mb-8 animate-slide-up" style={{ animationDelay: "300ms" }}>
            <h2 className="text-xl font-bold mb-6">Recommendations</h2>
            
            <ul className="space-y-3">
              {result.overallRecommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "400ms" }}>
            <Link to="/scan" className="flex-1">
              <Button variant="outline" size="lg" className="w-full">
                <RotateCcw className="h-4 w-4" />
                Scan Another
              </Button>
            </Link>
            <Link to="/education" className="flex-1">
              <Button variant="default" size="lg" className="w-full">
                <BookOpen className="h-4 w-4" />
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Results;
