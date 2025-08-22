import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "About Us", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Reviews", id: "reviews" },
    { name: "Packages", id: "packages" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  const pages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Customers Served", path: "/customers" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 nav-blur shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-105">
            E
          </div>
          <span className="text-2xl font-serif font-bold text-gradient">
            Envision
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Contact Info & Pages Dropdown */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Quick Contact */}
          <div className="flex items-center space-x-3 text-sm">
            <a 
              href="tel:+1-555-ENVISION"
              className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+1-555-ENVISION</span>
            </a>
            <a 
              href="mailto:hello@envisionweb.com"
              className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>hello@envisionweb.com</span>
            </a>
          </div>

          {/* Pages Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="ml-4">
                Pages <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {pages.map((page) => (
                <DropdownMenuItem
                  key={page.path}
                  onClick={() => navigateToPage(page.path)}
                  className="cursor-pointer"
                >
                  {page.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col space-y-6 mt-8">
              {/* Navigation Links */}
              <div className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Pages */}
              <div className="border-t pt-4 space-y-4">
                <h3 className="font-semibold text-muted-foreground uppercase text-sm tracking-wide">
                  Pages
                </h3>
                {pages.map((page) => (
                  <button
                    key={page.path}
                    onClick={() => navigateToPage(page.path)}
                    className="block w-full text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {page.name}
                  </button>
                ))}
              </div>

              {/* Contact Info */}
              <div className="border-t pt-4 space-y-3">
                <h3 className="font-semibold text-muted-foreground uppercase text-sm tracking-wide">
                  Contact
                </h3>
                <a 
                  href="tel:+1-555-ENVISION"
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>+1-555-ENVISION</span>
                </a>
                <a 
                  href="mailto:hello@envisionweb.com"
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>hello@envisionweb.com</span>
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navigation;