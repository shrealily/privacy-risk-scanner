import { Shield, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Shield className="h-4 w-4" />
              </div>
              <span className="font-semibold">Privacy Risk Scanner</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Empowering users to make informed decisions about their digital privacy.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/scan" className="hover:text-foreground transition-colors">Start Scan</Link>
              <Link to="/education" className="hover:text-foreground transition-colors">Privacy Education</Link>
              <Link to="/ethics" className="hover:text-foreground transition-colors">Our Ethics</Link>
            </nav>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Powered By</h4>
            <p className="text-sm text-muted-foreground">
              Built with Google Sheets API for transparent, editable privacy rules.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-risk-high fill-current" />
              <span>for privacy awareness</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 Privacy Risk Scanner. No user data is stored. Built for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
}
