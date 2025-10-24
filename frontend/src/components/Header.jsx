import { Link, useLocation } from "react-router-dom";
import { User, Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
  const location = useLocation(); // React Router's useLocation (object, not tuple)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/compare-colleges", label: "Compare Colleges" },
    { href: "/education-plan", label: "Education Plan" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            data-testid="link-home"
            className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2 transition-transform hover:scale-105"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-bold tracking-tight text-foreground hidden sm:inline">
              College Compass
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-testid={`link-${link.label
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className={`px-4 py-2 rounded-md text-base font-medium transition-colors hover-elevate active-elevate-2 ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <Link to="/login" className="hidden sm:flex">
              <Button variant="ghost" size="icon" data-testid="button-profile">
                <User className="h-5 w-5" />
                <span className="sr-only">User Profile</span>
              </Button>
            </Link>

            <Link to="/login" className="hidden md:flex">
              <Button variant="default" data-testid="button-login">
                Login / Signup
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
              className="md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-testid={`mobile-link-${link.label
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className={`block px-4 py-2 rounded-md text-base font-medium transition-colors hover-elevate active-elevate-2 ${
                  location.pathname === link.href
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t mt-2">
              <Link
                to="/login"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button
                  variant="default"
                  data-testid="button-mobile-login"
                  className="w-full"
                >
                  Login / Signup
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
