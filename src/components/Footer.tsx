import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/envisionweb", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/envisionweb", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/envisionweb", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/envisionweb", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/envisionweb", label: "YouTube" }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Work", href: "#projects" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "#packages" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" }
  ];

  const services = [
    { name: "Website Design", href: "/services" },
    { name: "E-commerce Development", href: "/services" },
    { name: "Branding & Identity", href: "/services" },
    { name: "SEO Optimization", href: "/services" },
    { name: "Website Maintenance", href: "/services" },
    { name: "Custom Development", href: "/services" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup");
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  E
                </div>
                <span className="text-2xl font-serif font-bold">Envision</span>
              </div>
              <p className="text-background/80 mb-6 leading-relaxed">
                We put low visibility businesses on the map through exceptional web design and digital marketing solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href="tel:+1-555-ENVISION"
                  className="flex items-center space-x-3 text-background/80 hover:text-white transition-colors group"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="group-hover:text-primary">+1-555-ENVISION</span>
                </a>
                <a 
                  href="mailto:hello@envisionweb.com"
                  className="flex items-center space-x-3 text-background/80 hover:text-white transition-colors group"
                >
                  <Mail className="h-5 w-5 text-secondary" />
                  <span className="group-hover:text-secondary">hello@envisionweb.com</span>
                </a>
                <div className="flex items-center space-x-3 text-background/80">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>Serving Nationwide</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-serif font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-background/80 hover:text-white hover:text-primary transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-serif font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-background/80 hover:text-white hover:text-secondary transition-colors"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h3 className="text-xl font-serif font-semibold mb-6">Stay Connected</h3>
              <p className="text-background/80 mb-4">
                Get web design tips, industry insights, and exclusive offers delivered to your inbox.
              </p>
              
              {/* Newsletter Signup */}
              <form onSubmit={handleNewsletterSubmit} className="mb-6">
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="bg-gradient-primary text-white px-6 hover:scale-105 transition-transform"
                  >
                    Subscribe
                  </Button>
                </div>
              </form>

              {/* Social Media Icons */}
              <div>
                <p className="text-sm text-background/80 mb-3">Follow us on social media:</p>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-background/80 hover:text-white hover:bg-gradient-primary transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-background/80">
                © {currentYear} Envision Web Design. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="/privacy" className="text-background/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-background/80 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-background/80 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Emergency Contact Strip */}
        <div className="bg-gradient-primary text-white py-3 -mx-4 -mb-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-center">
              <span className="font-medium">Need Urgent Support?</span>
              <div className="flex items-center space-x-4">
                <a 
                  href="tel:+1-555-ENVISION"
                  className="flex items-center space-x-2 hover:text-yellow-200 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call: +1-555-ENVISION</span>
                </a>
                <span className="text-white/60">|</span>
                <a 
                  href="mailto:urgent@envisionweb.com"
                  className="flex items-center space-x-2 hover:text-yellow-200 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email: urgent@envisionweb.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;