import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/images/logo-transparent.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Why Choose Us", href: "#why-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3 group" data-testid="link-home">
              <img src={logoImg} alt="NorthBridge Data Solutions" className="h-14" />
              <span className="font-display font-bold text-lg md:text-xl tracking-tight text-foreground whitespace-nowrap hidden sm:block">
                NORTHBRIDGE DATA SOLUTIONS
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-foreground/80 hover:text-primary transition-colors inline-block"
                data-testid={`link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {link.name}
              </motion.a>
            ))}
            <Button asChild className="rounded-full px-6 shadow-sm group">
              <a href="#contact" data-testid="button-nav-contact">
                Book Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-foreground/80 py-2 border-b border-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="mt-4 rounded-full w-full">
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Book Free Consultation
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
