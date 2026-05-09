import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, User, Shield, Menu, X, Smartphone } from "lucide-react";
import { useState } from "react";
import MiaLogo from "@/components/MiaLogo";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/chat", label: "Ask a Question", icon: MessageCircle },
    { path: "/dashboard", label: "My Health", icon: User },
    { path: "/trust", label: "Our Promise", icon: Shield },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <MiaLogo className="h-10 w-10" />
          <span className="font-display text-xl font-bold text-foreground">
            MIA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant={isActive(item.path) ? "secondary" : "ghost"}
                className={`gap-2 ${isActive(item.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" asChild>
            <Link to="/phone">
              <Smartphone className="mr-2 h-4 w-4" />
              Phone view
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/dashboard">Sign In</Link>
          </Button>
          <Button asChild className="gradient-mia border-0">
            <Link to="/chat">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card animate-fade-in">
          <nav className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={isActive(item.path) ? "secondary" : "ghost"}
                  className={`w-full justify-start gap-2 ${isActive(item.path) ? "text-primary" : "text-muted-foreground"}`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
              <Button variant="outline" asChild>
                <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
              </Button>
              <Button asChild className="gradient-mia border-0">
                <Link to="/chat" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
