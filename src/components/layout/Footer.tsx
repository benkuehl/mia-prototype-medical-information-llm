import { Link } from "react-router-dom";
import { Shield, FileText, Mail } from "lucide-react";
import MiaLogo from "@/components/MiaLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <MiaLogo className="h-9 w-9" />
              <span className="font-display text-lg font-bold text-foreground">
                MIA
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Improving Medication Safety Through AI — backed by verified clinical research and regulatory compliance.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/chat" className="text-muted-foreground hover:text-primary transition-colors">
                  Ask Questions
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Health Dashboard
                </Link>
              </li>
              <li>
                <Link to="/trust" className="text-muted-foreground hover:text-primary transition-colors">
                  Data & Compliance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                  <Shield className="h-3 w-3" />
                  HIPAA Compliance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:support@mia-health.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                  <Mail className="h-3 w-3" />
                  support@mia-health.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MIA — Medical Information App. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground max-w-md text-center md:text-right">
            This service provides health information only and does not replace professional medical advice. Always consult a healthcare provider.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
