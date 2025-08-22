import { ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "TechStartup Pro",
      category: "Startup Launch",
      description: "Complete brand identity and web presence for a innovative SaaS startup, resulting in 300% increase in lead generation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&auto=format",
      tags: ["Branding", "Web Design", "E-commerce"],
      results: "+300% Leads"
    },
    {
      title: "Local Restaurant Chain",
      category: "Rebranding",
      description: "Modern rebrand and digital transformation for a family restaurant chain, boosting online orders by 250%.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=entropy&auto=format",
      tags: ["Rebranding", "Mobile App", "Online Ordering"],
      results: "+250% Orders"
    },
    {
      title: "Professional Services Firm",
      category: "Corporate Website",
      description: "Sophisticated website design for a law firm that established their authority and increased client inquiries by 180%.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=entropy&auto=format",
      tags: ["Corporate", "SEO", "Lead Generation"],
      results: "+180% Inquiries"
    },
    {
      title: "E-commerce Fashion Brand",
      category: "Online Store",
      description: "Complete e-commerce solution for emerging fashion brand, achieving $1M+ in revenue within first year.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=entropy&auto=format",
      tags: ["E-commerce", "Fashion", "Mobile-First"],
      results: "$1M+ Revenue"
    },
    {
      title: "Healthcare Practice",
      category: "Medical Website",
      description: "Patient-focused website design with online booking system, reducing administrative calls by 60%.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=entropy&auto=format",
      tags: ["Healthcare", "Booking System", "HIPAA Compliant"],
      results: "-60% Admin Calls"
    },
    {
      title: "Non-Profit Organization",
      category: "Mission-Driven",
      description: "Compelling website that tells their story and increased donations by 400% through strategic design.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop&crop=entropy&auto=format",
      tags: ["Non-Profit", "Storytelling", "Donation Platform"],
      results: "+400% Donations"
    }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Our <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From startups to established enterprises, we've helped businesses across industries 
              achieve remarkable digital transformations and measurable growth.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="gradient-card shadow-custom hover-lift group overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-white/90 text-foreground">
                    {project.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    variant="ghost" 
                    className="w-full text-primary hover:text-primary-hover hover:bg-primary/5"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-3xl font-serif font-semibold text-foreground mb-12">
              Our Proven Process
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "We dive deep into your business, goals, and target audience" },
                { step: "02", title: "Strategy", description: "We create a comprehensive digital strategy tailored to your needs" },
                { step: "03", title: "Design & Build", description: "We craft beautiful, functional websites that convert visitors" },
                { step: "04", title: "Launch & Support", description: "We ensure a smooth launch and provide ongoing optimization" }
              ].map((phase, index) => (
                <div key={phase.step} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h4 className="text-lg font-serif font-semibold text-foreground mb-2">
                    {phase.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center animate-fade-in-up">
            <Card className="gradient-card shadow-custom max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h3 className="text-3xl font-serif font-semibold text-foreground mb-6">
                  Ready to Create Your Success Story?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Join hundreds of businesses that have transformed their digital presence with Envision. 
                  Let's discuss how we can help you achieve remarkable results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={scrollToContact}
                    size="lg"
                    className="bg-gradient-primary text-white shadow-primary hover-lift"
                  >
                    Start Your Project Today
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    View Our Packages
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;