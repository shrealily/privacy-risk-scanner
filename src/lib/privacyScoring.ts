// Privacy scoring logic - simulates Google Sheets backend rules
// In production, these rules would be fetched from Google Sheets API

export interface PermissionData {
  locationAccess: boolean;
  cameraAccess: boolean;
  microphoneAccess: boolean;
  contactsAccess: boolean;
  storageAccess: boolean;
  hasPrivacyPolicy: boolean;
  sharesWithThirdParties: boolean;
}

export interface ScoringRule {
  permission: keyof PermissionData;
  riskPoints: number;
  description: string;
  recommendation: string;
}

// Simulated Google Sheets data - Privacy Scoring Rules
export const scoringRules: ScoringRule[] = [
  {
    permission: "locationAccess",
    riskPoints: 20,
    description: "Location tracking can reveal your home, workplace, and daily patterns",
    recommendation: "Only grant location access when absolutely necessary, and prefer 'While Using' over 'Always'"
  },
  {
    permission: "cameraAccess",
    riskPoints: 18,
    description: "Camera access could potentially be used for unauthorized surveillance",
    recommendation: "Be cautious of apps requesting camera access without clear functionality need"
  },
  {
    permission: "microphoneAccess",
    riskPoints: 18,
    description: "Microphone access can capture conversations and ambient audio",
    recommendation: "Grant microphone access only to calling, recording, or voice assistant apps"
  },
  {
    permission: "contactsAccess",
    riskPoints: 15,
    description: "Contacts access exposes your personal network and relationships",
    recommendation: "Consider if the app truly needs your contacts or if manual entry is possible"
  },
  {
    permission: "storageAccess",
    riskPoints: 12,
    description: "Storage access allows reading files, photos, and documents on your device",
    recommendation: "Use scoped storage options when available to limit what apps can access"
  },
  {
    permission: "hasPrivacyPolicy",
    riskPoints: -10, // Reduces risk if present
    description: "A privacy policy shows transparency about data handling practices",
    recommendation: "Always read privacy policies, especially sections on data sharing and retention"
  },
  {
    permission: "sharesWithThirdParties",
    riskPoints: 25,
    description: "Third-party data sharing means your information goes beyond the original app",
    recommendation: "Avoid apps that share data with third parties, or opt-out where possible"
  }
];

export type RiskLevel = "low" | "medium" | "high";

export interface PrivacyResult {
  score: number;
  riskLevel: RiskLevel;
  riskPercentage: number;
  breakdown: {
    permission: string;
    active: boolean;
    points: number;
    description: string;
    recommendation: string;
  }[];
  summary: string;
  overallRecommendations: string[];
}

export function calculatePrivacyScore(permissions: PermissionData): PrivacyResult {
  let totalRiskPoints = 0;
  const breakdown: PrivacyResult["breakdown"] = [];

  // Calculate risk based on each permission
  for (const rule of scoringRules) {
    const isActive = permissions[rule.permission];
    const points = isActive ? rule.riskPoints : 0;
    
    // Special handling for privacy policy (inverted logic)
    const effectivePoints = rule.permission === "hasPrivacyPolicy" 
      ? (isActive ? 0 : Math.abs(rule.riskPoints)) // No policy = add risk
      : points;
    
    totalRiskPoints += effectivePoints;
    
    breakdown.push({
      permission: formatPermissionName(rule.permission),
      active: isActive,
      points: effectivePoints,
      description: rule.description,
      recommendation: rule.recommendation
    });
  }

  // Normalize to 0-100 scale (max possible is ~98 points)
  const maxPossibleRisk = 108; // Sum of all positive risk points
  const riskPercentage = Math.min(100, Math.round((totalRiskPoints / maxPossibleRisk) * 100));
  const score = 100 - riskPercentage; // Privacy score is inverse of risk

  // Determine risk level
  let riskLevel: RiskLevel;
  if (riskPercentage <= 30) {
    riskLevel = "low";
  } else if (riskPercentage <= 70) {
    riskLevel = "medium";
  } else {
    riskLevel = "high";
  }

  // Generate summary
  const summary = generateSummary(riskLevel, permissions);
  const overallRecommendations = generateRecommendations(permissions);

  return {
    score,
    riskLevel,
    riskPercentage,
    breakdown,
    summary,
    overallRecommendations
  };
}

function formatPermissionName(permission: string): string {
  const names: Record<string, string> = {
    locationAccess: "Location Access",
    cameraAccess: "Camera Access",
    microphoneAccess: "Microphone Access",
    contactsAccess: "Contacts Access",
    storageAccess: "Storage Access",
    hasPrivacyPolicy: "Privacy Policy",
    sharesWithThirdParties: "Third-Party Sharing"
  };
  return names[permission] || permission;
}

function generateSummary(riskLevel: RiskLevel, permissions: PermissionData): string {
  const summaries: Record<RiskLevel, string> = {
    low: "This app or website appears to have good privacy practices. It requests minimal permissions and handles your data responsibly.",
    medium: "This app or website has some privacy concerns. While not alarming, you should be aware of what data is being collected and how it's used.",
    high: "This app or website poses significant privacy risks. It requests extensive permissions and/or shares your data with third parties. Consider whether you truly need this app."
  };
  return summaries[riskLevel];
}

function generateRecommendations(permissions: PermissionData): string[] {
  const recommendations: string[] = [];

  if (permissions.locationAccess) {
    recommendations.push("Consider disabling location access or setting it to 'Only While Using'");
  }
  if (permissions.cameraAccess || permissions.microphoneAccess) {
    recommendations.push("Review if camera and microphone access are essential for your use case");
  }
  if (permissions.sharesWithThirdParties) {
    recommendations.push("Look for privacy settings within the app to limit third-party data sharing");
  }
  if (!permissions.hasPrivacyPolicy) {
    recommendations.push("Be cautious with apps lacking privacy policies - they may not be transparent about data usage");
  }
  if (recommendations.length === 0) {
    recommendations.push("Continue practicing good privacy hygiene by regularly reviewing app permissions");
  }

  return recommendations;
}
