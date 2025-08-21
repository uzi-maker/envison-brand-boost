import { Check, Star, ArrowRight, Zap, Crown, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Packages = () => {
  const packages = [
    {
      name: "Startup Launch",
      icon: Rocket,
      price: "$2,999",
      originalPrice: "$3,999",
      description: "Perfect for new businesses ready to establish their online presence",
      popular: false,
      features: [
        "Custom Website Design (5 pages)",
        "Mobile-Responsive Development", 
        "Basic SEO Setup",
        "Contact Form Integration",
        "Social Media Integration",
        "1 Month Free Support",
        "Google Analytics Setup",
        "SSL Certificate Included"
      ],
      notIncluded: [
        "E-commerce functionality",
        "Advanced SEO package",
        "Content Management System"
      ],
      deliveryTime: "2-3 weeks",
      bestFor: "New businesses, startups, personal brands"
    },
    {
      name: "Professional Growth",
      icon: Zap,
      price: "$4,999",
      originalPrice: "$6,499",
      description: "Ideal for growing businesses that need advanced features and functionality",
      popular: true,
      features: [
        "Custom Website Design (10 pages)",
        "Content Management System",
        "Advanced SEO Optimization",
        "E-commerce Integration (up to 50 products)",
        "Email Marketing Setup",
        "Live Chat Integration",
        "3 Months Free Support",
        "Performance Optimization",
        "Lead Generation Forms",
        "Blog Setup & Integration"
      ],
      notIncluded: [
        "Custom app development",
        "Advanced integrations"
      ],
      deliveryTime: "4-6 weeks",
      bestFor: "Growing businesses, professional services, small retailers"
    },
    {
      name: "Enterprise Premium",
      icon: Crown,
      price: "$9,999",
      originalPrice: "$12,999",
      description: "Complete digital transformation for established businesses and enterprises",
      popular: false,
      features: [
        "Unlimited Custom Pages",
        "Advanced E-commerce Platform",
        "Custom CMS Development",
        "Multi-language Support",
        "Advanced Analytics & Reporting",
        "Third-party Integrations",
        "6 Months Premium Support",
        "Training & Documentation",
        "Performance Monitoring",
        "Security Audit & Protection",
        "Email & Phone Support",
        "Dedicated Project Manager"
      ],
      notIncluded: [],
      deliveryTime: "8-12 weeks",
      bestFor: "Large businesses, enterprises, complex requirements"
    }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="bg-accent text-white px-4 py-2 mb-4">
              🎉 Limited Time Offer - Save up to 25%
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Choose Your <span className="text-gradient">Perfect Package</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you're just starting out or ready to scale, we have tailored packages 
              designed to meet your specific needs and budget. All packages include our satisfaction guarantee.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.name}
                className={`relative overflow-hidden transition-all duration-300 animate-fade-in-up ${
                  pkg.popular 
                    ? 'ring-2 ring-primary shadow-primary scale-105 gradient-card' 
                    : 'gradient-card shadow-custom hover-lift'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2 text-sm font-semibold">
                    <Star className="inline-block h-4 w-4 mr-1" />
                    Most Popular Choice
                  </div>
                )}

                <CardHeader className={`text-center ${pkg.popular ? 'pt-12' : 'pt-6'}`}>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <pkg.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-serif font-bold text-foreground mb-2">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {pkg.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                      {pkg.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          {pkg.originalPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">One-time payment</p>
                    <Badge variant="outline" className="text-xs">
                      {pkg.deliveryTime} delivery
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  {/* Best For */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Perfect for:</h4>
                    <p className="text-sm text-muted-foreground">{pkg.bestFor}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-foreground">What's included:</h4>
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Not Included */}
                  {pkg.notIncluded.length > 0 && (
                    <div className="space-y-2 mb-6 opacity-60">
                      <h4 className="font-semibold text-muted-foreground text-xs uppercase tracking-wide">
                        Available as add-ons:
                      </h4>
                      {pkg.notIncluded.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-3 h-3 border border-muted-foreground rounded-full flex-shrink-0"></div>
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <Button 
                    onClick={scrollToContact}
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-gradient-primary text-white shadow-primary' 
                        : 'bg-gradient-primary text-white shadow-primary'
                    } hover-lift group`}
                    size="lg"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Custom Solutions */}
          <div className="text-center mb-16 animate-fade-in-up">
            <Card className="gradient-card shadow-custom max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h3 className="text-3xl font-serif font-semibold text-foreground mb-6">
                  Need Something Custom?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Every business is unique. If our packages don't perfectly fit your needs, 
                  we'd be happy to create a custom solution tailored specifically for your requirements and budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={scrollToContact}
                    size="lg"
                    className="bg-gradient-primary text-white shadow-primary hover-lift"
                  >
                    Request Custom Quote
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Have Questions?
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Guarantees */}
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-serif font-semibold text-foreground mb-2">
                100% Satisfaction Guarantee
              </h4>
              <p className="text-muted-foreground text-sm">
                Not happy with the results? We'll work until you are, or your money back.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-serif font-semibold text-foreground mb-2">
                Fast Delivery
              </h4>
              <p className="text-muted-foreground text-sm">
                We deliver quality work on time, every time. No delays, no excuses.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-serif font-semibold text-foreground mb-2">
                Premium Support
              </h4>
              <p className="text-muted-foreground text-sm">
                Ongoing support and maintenance to keep your website running perfectly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;