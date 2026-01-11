import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { 
  MapPin, Camera, Mic, Users, HardDrive, 
  FileText, Share2, ScanLine, Info 
} from "lucide-react";
import { PermissionData } from "@/lib/privacyScoring";

const permissions = [
  { 
    id: "locationAccess", 
    label: "Location Access", 
    icon: MapPin,
    description: "App can track your physical location"
  },
  { 
    id: "cameraAccess", 
    label: "Camera Access", 
    icon: Camera,
    description: "App can use your device camera"
  },
  { 
    id: "microphoneAccess", 
    label: "Microphone Access", 
    icon: Mic,
    description: "App can record audio"
  },
  { 
    id: "contactsAccess", 
    label: "Contacts Access", 
    icon: Users,
    description: "App can read your contact list"
  },
  { 
    id: "storageAccess", 
    label: "Storage Access", 
    icon: HardDrive,
    description: "App can read files on your device"
  },
];

const dataHandling = [
  { 
    id: "hasPrivacyPolicy", 
    label: "Has a Privacy Policy", 
    icon: FileText,
    description: "The app/website has a published privacy policy"
  },
  { 
    id: "sharesWithThirdParties", 
    label: "Shares Data with Third Parties", 
    icon: Share2,
    description: "Your data may be shared with other companies"
  },
];

const Scan = () => {
  const navigate = useNavigate();
  const [targetName, setTargetName] = useState("");
  const [permissionData, setPermissionData] = useState<PermissionData>({
    locationAccess: false,
    cameraAccess: false,
    microphoneAccess: false,
    contactsAccess: false,
    storageAccess: false,
    hasPrivacyPolicy: false,
    sharesWithThirdParties: false,
  });

  const handlePermissionChange = (id: keyof PermissionData, checked: boolean) => {
    setPermissionData(prev => ({ ...prev, [id]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store the scan data in sessionStorage for the results page
    sessionStorage.setItem("scanData", JSON.stringify({
      targetName: targetName || "Unknown App",
      permissions: permissionData
    }));
    
    navigate("/results");
  };

  const selectedCount = Object.values(permissionData).filter(Boolean).length;

  return (
    <Layout>
      <div className="container py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 animate-slide-up">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 text-primary mb-4">
              <ScanLine className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Privacy Scan</h1>
            <p className="text-muted-foreground">
              Enter the app or website details and select the permissions it requests
            </p>
          </div>

          {/* Scan Form */}
          <form onSubmit={handleSubmit} className="space-y-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
            {/* Target Input */}
            <div className="card-elevated p-6">
              <Label htmlFor="target" className="text-base font-medium mb-3 block">
                App Name or Website URL
              </Label>
              <Input
                id="target"
                type="text"
                placeholder="e.g., Facebook, instagram.com, TikTok..."
                value={targetName}
                onChange={(e) => setTargetName(e.target.value)}
                className="h-12 text-base"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Enter the name of the app or website you want to analyze
              </p>
            </div>

            {/* Permissions Section */}
            <div className="card-elevated p-6">
              <h2 className="text-lg font-semibold mb-4">Permissions Requested</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Check all permissions that this app or website requests from you
              </p>
              
              <div className="space-y-4">
                {permissions.map((permission) => (
                  <div 
                    key={permission.id}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <Checkbox
                      id={permission.id}
                      checked={permissionData[permission.id as keyof PermissionData]}
                      onCheckedChange={(checked) => 
                        handlePermissionChange(permission.id as keyof PermissionData, checked as boolean)
                      }
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label 
                        htmlFor={permission.id} 
                        className="flex items-center gap-2 text-base font-medium cursor-pointer"
                      >
                        <permission.icon className="h-4 w-4 text-muted-foreground" />
                        {permission.label}
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        {permission.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Handling Section */}
            <div className="card-elevated p-6">
              <h2 className="text-lg font-semibold mb-4">Data Handling Practices</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Indicate what you know about this app's data practices
              </p>
              
              <div className="space-y-4">
                {dataHandling.map((item) => (
                  <div 
                    key={item.id}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <Checkbox
                      id={item.id}
                      checked={permissionData[item.id as keyof PermissionData]}
                      onCheckedChange={(checked) => 
                        handlePermissionChange(item.id as keyof PermissionData, checked as boolean)
                      }
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label 
                        htmlFor={item.id} 
                        className="flex items-center gap-2 text-base font-medium cursor-pointer"
                      >
                        <item.icon className="h-4 w-4 text-muted-foreground" />
                        {item.label}
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
              <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-primary mb-1">How we calculate your score</p>
                <p className="text-muted-foreground">
                  Our privacy scoring rules are powered by Google Sheets, making them transparent 
                  and easily auditable. Each permission is weighted based on its potential privacy impact.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" variant="hero" size="xl" className="w-full">
              Analyze Privacy Risk
              <ScanLine className="h-5 w-5" />
            </Button>

            {selectedCount > 0 && (
              <p className="text-center text-sm text-muted-foreground">
                {selectedCount} item{selectedCount !== 1 ? 's' : ''} selected for analysis
              </p>
            )}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Scan;
