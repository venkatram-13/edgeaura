import { Mail, Linkedin, Github } from "lucide-react";
import logo from "@/assets/edgeaura-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="EdgeAura Logo" className="h-8 w-8" />
            <span className="text-lg font-semibold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              EdgeAura
            </span>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@edgeaura.ai"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Patent Filings in Progress • MSME India • Security-First Edge Intelligence
            </p>
            <p className="text-sm text-muted-foreground mt-2">© 2025 EdgeAura Labs</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
