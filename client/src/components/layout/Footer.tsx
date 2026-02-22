import { Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import logoImg from "@/assets/images/logo-transparent.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <img src={logoImg} alt="NorthBridge Data Solutions" className="h-16 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
              <span className="font-display font-bold text-xl tracking-tight text-white drop-shadow-sm">
                NORTHBRIDGE DATA SOLUTIONS
              </span>
            </div>
            <p className="text-primary-foreground/70 max-w-sm mb-6 leading-relaxed">
              We empower B2B and B2C organizations with accurate data, targeted prospect lists, and comprehensive virtual assistance to drive real growth.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="LinkedIn" data-testid="social-linkedin">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Twitter" data-testid="social-twitter">
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-primary-foreground/70 hover:text-white transition-colors">B2B Lead Generation</a></li>
              <li><a href="#services" className="text-primary-foreground/70 hover:text-white transition-colors">LinkedIn Sales Navigator</a></li>
              <li><a href="#services" className="text-primary-foreground/70 hover:text-white transition-colors">Email List Building</a></li>
              <li><a href="#services" className="text-primary-foreground/70 hover:text-white transition-colors">Data Entry & VA</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
                <a href="https://wa.link/parbtx" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-white transition-colors">+1 (548) 314-8589 (WhatsApp)</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">contact.northbridgesolution<br/>@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">1 World Trade Center, Suite 8500<br/>New York, NY 10007, USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} NorthBridge Data Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
