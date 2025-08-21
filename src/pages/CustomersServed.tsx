import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Stethoscope, 
  ShoppingBag, 
  Gavel, 
  GraduationCap, 
  Home,
  Utensils,
  Car,
  Palette,
  Calculator,
  ArrowRight,
  Star,
  TrendingUp
} from "lucide-react";

const CustomersServed = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  const industries = [
    {
      icon: Building,
      name: "Technology & SaaS",
      description: "Startups and established tech companies looking to establish or enhance their digital presence.",
      projectCount: "85+",
      avgResults: "+275% Lead Generation",
      examples: ["Software Companies", "Tech Startups", "SaaS Platforms", "App Developers"]
    },
    {
      icon: Stethoscope,
      name: "Healthcare & Medical",
      description: "Medical practices, clinics, and healthcare organizations focused on patient engagement.",
      projectCount: "65+",
      avgResults: "+180% Patient Inquiries",
      examples: ["Medical Practices", "Dental Clinics", "Veterinary Services", "Health Coaches"]
    },
    {
      icon: ShoppingBag,
      name: "E-commerce & Retail",
      description: "Online stores and retail businesses driving sales through optimized shopping experiences.",
      projectCount: "120+",
      avgResults: "+320% Online Sales",
      examples: ["Fashion Brands", "Electronics Stores", "Specialty Retailers", "Marketplace Sellers"]
    },
    {
      icon: Gavel,
      name: "Legal & Professional Services",
      description: "Law firms and professional service providers building trust and authority online.",
      projectCount: "45+",
      avgResults: "+200% Client Consultations",
      examples: ["Law Firms", "Accounting Firms", "Consulting Agencies", "Financial Advisors"]
    },
    {
      icon: Home,
      name: "Real Estate",
      description: "Real estate agents and agencies showcasing properties and generating qualified leads.",
      projectCount: "55+",
      avgResults: "+225% Property Inquiries",
      examples: ["Real Estate Agents", "Property Management", "Commercial Real Estate", "Home Builders"]
    },
    {
      icon: Utensils,
      name: "Restaurants & Food Services",
      description: "Restaurants, cafes, and food service businesses increasing orders and reservations.",
      projectCount: "75+",
      avgResults: "+280% Online Orders",
      examples: ["Restaurants", "Cafes", "Food Trucks", "Catering Services"]
    },
    {
      icon: GraduationCap,
      name: "Education & Training",
      description: "Educational institutions and training providers enhancing student engagement.",
      projectCount: "35+",
      avgResults: "+190% Enrollment",
      examples: ["Schools", "Training Centers", "Online Courses", "Coaching Services"]
    },
    {
      icon: Palette,
      name: "Creative & Agencies",
      description: "Creative professionals and agencies showcasing their work and attracting clients.",
      projectCount: "40+",
      avgResults: "+210% Project Inquiries",
      examples: ["Design Agencies", "Marketing Firms", "Photography Studios", "Creative Freelancers"]
    },
    {
      icon: Car,
      name: "Automotive",
      description: "Auto dealerships, repair shops, and automotive service providers driving foot traffic.",
      projectCount: "30+",
      avgResults: "+165% Service Bookings",
      examples: ["Auto Dealerships", "Repair Shops", "Car Rentals", "Auto Parts Stores"]
    },
    {
      icon: Calculator,
      name: "Financial Services",
      description: "Banks, credit unions, and financial service providers building customer relationships.",
      projectCount: "25+",
      avgResults: "+155% Client Applications",
      examples: ["Banks", "Credit Unions", "Insurance Companies", "Investment Firms"]
    }
  ];

  const successStories = [
    {
      company: "TechFlow Solutions",
      industry: "SaaS Startup",
      challenge: "Needed to establish credibility and generate leads for their new project management platform.",
      solution: "Complete brand identity, website design, and SEO strategy focused on converting visitors to trial users.",
      results: [
        "300% increase in trial signups",
        "150% improvement in conversion rate", 
        "$500K in new revenue within 6 months"
      ]
    },
    {
      company: "Verde Fashion Boutique",
      industry: "E-commerce Fashion",
      challenge: "Small fashion retailer wanted to compete with larger brands and increase online sales.",
      solution: "Modern e-commerce website with mobile-first design, social media integration, and email marketing.",
      results: [
        "450% increase in online sales",
        "280% growth in social media followers",
        "$1.2M in revenue in first year"
      ]
    },
    {
      company: "Wellness Medical Center", 
      industry: "Healthcare",
      challenge: "Medical practice struggling with patient acquisition and online appointment booking.",
      solution: "Professional website with integrated booking system, patient portal, and local SEO optimization.",
      results: [
        "220% increase in new patients",
        "85% reduction in phone bookings",
        "4.9-star average online rating"
      ]
    }
  ];

  const businessSizes = [
    {
      title: "Startups & New Businesses",
      description: "0-10 employees, establishing initial digital presence",
      percentage: "35%",
      services: "Brand identity, website launch, basic SEO"
    },
    {
      title: "Growing Small Businesses",
      description: "11-50 employees, scaling operations and marketing",
      percentage: "40%", 
      services: "Website redesign, e-commerce, advanced SEO"
    },
    {
      title: "Established Mid-Size Companies",
      description: "51-200 employees, digital transformation and optimization",
      percentage: "20%",
      services: "Enterprise solutions, integrations, ongoing optimization"
    },
    {
      title: "Enterprise & Large Organizations",
      description: "200+ employees, complex requirements and custom solutions",
      percentage: "5%",
      services: "Custom development, enterprise integrations, dedicated support"
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
              Customers We <span className="text-yellow-300">Serve</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              From startups to enterprises, across all industries - we've helped over 500 businesses 
              transform their digital presence and achieve remarkable growth.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">500+</div>
                <div className="text-white/80">Businesses Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">50+</div>
                <div className="text-white/80">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300">98%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                Industries We Specialize In
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our team has deep experience across multiple industries, understanding the unique 
                challenges and opportunities each sector presents.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card 
                  key={industry.name}
                  className="gradient-card shadow-custom hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <industry.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                          {industry.name}
                        </h3>
                        <div className="flex space-x-2 mb-3">
                          <Badge variant="outline" className="text-xs">{industry.projectCount} Projects</Badge>
                          <Badge className="bg-primary/10 text-primary text-xs">{industry.avgResults}</Badge>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <div className="space-y-1">
                      {industry.examples.map((example) => (
                        <div key={example} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-xs text-muted-foreground">{example}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                Client Success Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real businesses, real results. Here are just a few examples of how we've helped 
                our clients achieve their digital goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card 
                  key={story.company}
                  className="gradient-card shadow-custom hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                        {story.company}
                      </h3>
                      <Badge className="bg-secondary/10 text-secondary">{story.industry}</Badge>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">Challenge:</h4>
                        <p className="text-muted-foreground text-sm">{story.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">Solution:</h4>
                        <p className="text-muted-foreground text-sm">{story.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-2">Results:</h4>
                        <div className="space-y-1">
                          {story.results.map((result) => (
                            <div key={result} className="flex items-center space-x-2">
                              <TrendingUp className="h-3 w-3 text-primary flex-shrink-0" />
                              <span className="text-xs text-foreground">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Business Sizes */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                We Work With All Business Sizes
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From solo entrepreneurs to Fortune 500 companies, we have packages and solutions 
                tailored to businesses at every stage of growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessSizes.map((size, index) => (
                <Card 
                  key={size.title}
                  className="gradient-card shadow-custom hover-lift animate-fade-in-up text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary mb-4">{size.percentage}</div>
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                      {size.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {size.description}
                    </p>
                    <div className="border-t pt-4">
                      <p className="text-xs text-muted-foreground font-medium">
                        Common Services: {size.services}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <Card className="gradient-card shadow-custom max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  Ready to Join Our Success Stories?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  No matter what industry you're in or what size your business is, we have the 
                  expertise and experience to help you achieve your digital goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={scrollToContact}
                    size="lg"
                    className="bg-gradient-primary text-white shadow-primary hover-lift group"
                  >
                    Start Your Success Story
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    onClick={() => window.location.href = "/#reviews"}
                  >
                    Read More Reviews
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

export default CustomersServed;