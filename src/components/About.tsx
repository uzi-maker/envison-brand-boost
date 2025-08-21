import { Users, Award, Lightbulb, Target, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const values = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "We don't just build websites – we craft digital strategies that align with your business goals and drive measurable results."
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "Our team stays ahead of design trends and technology to ensure your website stands out in today's competitive landscape."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We believe in building lasting relationships, working closely with you through every step of your digital transformation journey."
    },
    {
      icon: Award,
      title: "Excellence Driven",
      description: "Quality isn't negotiable. Every project receives our full attention to detail and commitment to exceeding expectations."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              About <span className="text-gradient">Envision</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're passionate about transforming businesses through exceptional web design and development. 
              Our mission is to help companies of all sizes establish a powerful digital presence that drives growth.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in-left">
              <h3 className="text-3xl font-serif font-semibold text-foreground mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a simple belief that every business deserves a exceptional digital presence, 
                  Envision has grown from a small startup to a trusted partner for companies across industries.
                </p>
                <p>
                  We've helped over 500 businesses transform their online presence, from innovative startups 
                  launching their first website to established companies undergoing complete digital rebranding.
                </p>
                <p>
                  Our approach is different. We don't believe in one-size-fits-all solutions. Instead, we take 
                  the time to understand your unique business needs, target audience, and goals to create 
                  custom solutions that deliver real results.
                </p>
              </div>
              <Button 
                onClick={scrollToContact}
                className="mt-6 bg-gradient-primary text-white shadow-primary hover-lift group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="animate-fade-in-right">
              <Card className="gradient-card shadow-custom hover-lift">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">500+</div>
                      <div className="text-sm text-muted-foreground">Websites Created</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-secondary mb-2">98%</div>
                      <div className="text-sm text-muted-foreground">Client Retention</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Support Coverage</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">5★</div>
                      <div className="text-sm text-muted-foreground">Average Rating</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-semibold text-center text-foreground mb-12 animate-fade-in-up">
              What Drives Us
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={value.title} 
                  className="gradient-card shadow-custom hover-lift group text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-serif font-semibold text-foreground mb-3">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center animate-fade-in-up">
            <Card className="gradient-card shadow-custom max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h3 className="text-3xl font-serif font-semibold text-foreground mb-6">
                  Ready to Work Together?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our team of experienced designers, developers, and digital strategists is ready to 
                  bring your vision to life. Let's discuss how we can help your business thrive online.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={scrollToContact}
                    size="lg"
                    className="bg-gradient-primary text-white shadow-primary hover-lift"
                  >
                    Get Free Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    View Our Work
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

export default About;