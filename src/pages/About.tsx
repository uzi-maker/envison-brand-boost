import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Target, Lightbulb, ArrowRight } from "lucide-react";

const About = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=300&h=300&fit=crop&crop=face&auto=format",
      bio: "10+ years in web design with a passion for creating brands that resonate with audiences."
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format", 
      bio: "Full-stack developer specializing in modern web technologies and performance optimization."
    },
    {
      name: "Emily Rodriguez",
      role: "Digital Strategy Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face&auto=format",
      bio: "Expert in SEO, digital marketing, and conversion optimization with proven track record."
    },
    {
      name: "David Park",
      role: "UX/UI Designer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face&auto=format",
      bio: "User experience specialist focused on creating intuitive, conversion-driven designs."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every project is designed with your business goals and ROI in mind."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of trends to ensure your website uses the latest best practices."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work as an extension of your team, ensuring clear communication throughout."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We don't settle for good enough. Every detail matters in creating exceptional experiences."
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
              About <span className="text-yellow-300">Envision</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              We're passionate web designers and developers dedicated to transforming businesses 
              through exceptional digital experiences.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Envision was founded with a simple but powerful belief: every business, regardless of size, 
                  deserves a digital presence that truly represents their value and drives growth.
                </p>
                <p>
                  What started as a small team of passionate designers and developers has grown into a 
                  full-service digital agency that has helped over 500 businesses transform their online presence.
                </p>
                <p>
                  We specialize in working with businesses that have been overlooked by the digital revolution - 
                  startups looking to make their mark, established companies ready for a rebrand, and growing 
                  businesses that need to scale their online presence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-bold text-center text-foreground mb-16">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value) => (
                <Card key={value.title} className="gradient-card shadow-custom hover-lift text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our diverse team of designers, developers, and strategists brings together decades 
                of experience in creating digital solutions that drive business growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member) => (
                <Card key={member.name} className="gradient-card shadow-custom hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Websites Created</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-secondary mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Industries Served</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">5★</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <Card className="gradient-card shadow-custom max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  Ready to Work with Us?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Let's discuss how our team can help transform your digital presence and 
                  drive real results for your business.
                </p>
                <Button 
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-gradient-primary text-white shadow-primary hover-lift group"
                >
                  Start Your Project Today
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
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

export default About;