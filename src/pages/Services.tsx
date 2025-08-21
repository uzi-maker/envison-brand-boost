import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  ShoppingCart, 
  Palette, 
  Search, 
  Wrench, 
  Code, 
  Smartphone,
  BarChart,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  const services = [
    {
      icon: Globe,
      title: "Website Design & Development",
      description: "Custom websites built from the ground up to reflect your brand and convert visitors into customers.",
      features: [
        "Responsive Design",
        "Custom Development",
        "CMS Integration", 
        "Performance Optimization",
        "Cross-browser Testing"
      ],
      pricing: "Starting at $2,999"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with secure payment processing, inventory management, and customer accounts.",
      features: [
        "Shopping Cart Development",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Processing",
        "Customer Accounts"
      ],
      pricing: "Starting at $4,999"
    },
    {
      icon: Palette,
      title: "Branding & Identity",
      description: "Comprehensive brand development including logos, color schemes, typography, and brand guidelines.",
      features: [
        "Logo Design",
        "Brand Guidelines", 
        "Color Palette",
        "Typography Selection",
        "Marketing Materials"
      ],
      pricing: "Starting at $1,999"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic with our proven SEO strategies.",
      features: [
        "Keyword Research",
        "On-page Optimization",
        "Technical SEO",
        "Content Strategy",
        "Performance Monitoring"
      ],
      pricing: "Starting at $899/month"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps that extend your brand to iOS and Android devices.",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-platform Solutions",
        "App Store Submission",
        "Ongoing Maintenance"
      ],
      pricing: "Starting at $9,999"
    },
    {
      icon: Wrench,
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and performing at its best with our maintenance services.",
      features: [
        "Security Updates",
        "Content Updates",
        "Performance Monitoring",
        "Backup Management",
        "Technical Support"
      ],
      pricing: "Starting at $199/month"
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored web applications and integrations to meet your unique business requirements.",
      features: [
        "API Development",
        "Third-party Integrations",
        "Custom Features",
        "Database Design",
        "Legacy System Updates"
      ],
      pricing: "Custom Pricing"
    },
    {
      icon: BarChart,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to increase your online visibility and drive conversions.",
      features: [
        "PPC Advertising",
        "Social Media Marketing",
        "Email Marketing",
        "Content Marketing",
        "Analytics & Reporting"
      ],
      pricing: "Starting at $1,499/month"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your business, goals, and target audience to create a comprehensive strategy."
    },
    {
      number: "02", 
      title: "Design & Planning",
      description: "Our team creates detailed wireframes and designs that align with your brand and user experience goals."
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "We build your solution using the latest technologies and conduct thorough testing across all devices."
    },
    {
      number: "04",
      title: "Launch & Optimization",
      description: "We handle the launch process and provide ongoing optimization to ensure peak performance."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our <span className="text-yellow-300">Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              From concept to launch and beyond, we offer comprehensive digital solutions 
              to help your business thrive in the digital landscape.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-accent hover:bg-accent-hover text-white px-8 py-4 text-lg font-semibold shadow-accent hover-lift"
            >
              Get Started Today
            </Button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                Complete Digital Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We provide end-to-end digital services tailored to your business needs and growth objectives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <Card 
                  key={service.title}
                  className="gradient-card shadow-custom hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-serif text-foreground">
                      {service.title}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-4">
                      <Badge className="bg-primary/10 text-primary mb-3">
                        {service.pricing}
                      </Badge>
                      <Button 
                        onClick={scrollToContact}
                        variant="outline" 
                        className="w-full group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                Our Proven Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We follow a structured approach to ensure your project is delivered on time, 
                within budget, and exceeds your expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <Card 
                  key={step.number}
                  className="gradient-card shadow-custom text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                Why Choose Envision?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="gradient-card shadow-custom hover-lift text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                    Fast Delivery
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We deliver quality work on schedule without compromising on quality or attention to detail.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card shadow-custom hover-lift text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                    Quality Guarantee
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    100% satisfaction guarantee. We'll work until you're completely happy with the results.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card shadow-custom hover-lift text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <BarChart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                    Measurable Results
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every project is designed with clear metrics and goals to ensure tangible business results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <Card className="gradient-card shadow-custom max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Let's discuss your project requirements and create a custom solution 
                  that drives real results for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={scrollToContact}
                    size="lg"
                    className="bg-gradient-primary text-white shadow-primary hover-lift group"
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    onClick={() => window.open("tel:+1-555-ENVISION")}
                  >
                    Call Now: +1-555-ENVISION
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Services;