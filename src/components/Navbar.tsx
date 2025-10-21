import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/edgeaura-logo.svg";

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar = ({ onContactClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/why", label: "Why" },
    { to: "/technology", label: "Technology" },
    { to: "/use-cases", label: "Use Cases" },
    { to: "/roadmap", label: "Roadmap" },
    { to: "/join-us", label: "Join Us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={logo} alt="EdgeAura Logo" className="h-10 w-10 transition-transform group-hover:scale-110" />
            <span className="text-xl font-semibold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              EdgeAura
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Button
            onClick={onContactClick}
            className="bg-gradient-to-r from-secondary to-primary hover:shadow-[0_0_30px_rgba(0,245,160,0.3)] transition-all duration-300"
          >
            Contact Us
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
