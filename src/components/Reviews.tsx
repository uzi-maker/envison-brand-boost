import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Innovations",
      company: "Technology Startup",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
      review: "Envision transformed our startup from an idea into a powerful digital presence. Their strategic approach and attention to detail helped us secure our Series A funding. The website they created perfectly captures our innovation and has been instrumental in our 300% growth.",
      result: "300% Growth in 6 Months"
    },
    {
      name: "Michael Rodriguez",
      role: "Owner, Rodriguez Family Restaurants",
      company: "Restaurant Chain",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
      review: "We needed a complete rebrand and digital transformation. Envision delivered beyond our expectations. Our online orders increased by 250% within the first quarter, and our brand now feels modern and professional. Best investment we've made!",
      result: "250% Increase in Online Orders"
    },
    {
      name: "Dr. Emily Chen",
      role: "Partner, Metropolitan Medical Group",
      company: "Healthcare Practice",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
      review: "The team at Envision understood our unique needs in healthcare. They created a HIPAA-compliant website with an integrated booking system that reduced our administrative calls by 60%. Our patients love the new experience!",
      result: "60% Reduction in Admin Calls"
    },
    {
      name: "James Thompson",
      role: "Managing Partner, Thompson & Associates",
      company: "Law Firm",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
      review: "Professionalism at its finest. Envision created a sophisticated website that perfectly represents our firm's expertise and values. Client inquiries have increased by 180%, and the quality of leads has significantly improved.",
      result: "180% More Quality Inquiries"
    },
    {
      name: "Lisa Park",
      role: "Founder, EcoWear Fashion",
      company: "E-commerce Brand",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
      review: "From concept to launch, Envision was incredible. They built our e-commerce platform with a mobile-first approach that converted beautifully. We hit $1M in revenue within our first year – something we never thought possible!",
      result: "$1M+ Revenue in Year 1"
    },
    {
      name: "David Williams",
      role: "Executive Director, Hope Foundation",
      company: "Non-Profit Organization",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5,
      review: "Envision helped us tell our story in a way that truly connects with donors. The website they created increased our online donations by 400% and helped us reach our annual fundraising goal three months early. Amazing work!",
      result: "400% Increase in Donations"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % testimonials.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="reviews" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what business owners have to say about 
              their experience working with Envision and the results they've achieved.
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="relative mb-16">
            <Card className="gradient-card shadow-custom max-w-4xl mx-auto overflow-hidden animate-fade-in-up">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Client Photo & Info */}
                  <div className="flex-shrink-0 text-center md:text-left">
                    <Avatar className="w-24 h-24 mx-auto md:mx-0 mb-4">
                      <AvatarImage src={testimonials[currentReview].image} />
                      <AvatarFallback className="bg-gradient-primary text-white text-lg">
                        {testimonials[currentReview].name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="mb-4">
                      <div className="flex justify-center md:justify-start mb-2">
                        {[...Array(testimonials[currentReview].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <h4 className="text-xl font-serif font-semibold text-foreground">
                        {testimonials[currentReview].name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonials[currentReview].role}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        {testimonials[currentReview].company}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1">
                    <Quote className="h-12 w-12 text-primary mb-4 mx-auto md:mx-0" />
                    <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
                      "{testimonials[currentReview].review}"
                    </blockquote>
                    <div className="bg-primary/10 rounded-lg p-4">
                      <p className="text-primary font-semibold text-center">
                        📈 {testimonials[currentReview].result}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevReview}
                className="w-12 h-12 rounded-full"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextReview}
                className="w-12 h-12 rounded-full"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentReview ? 'bg-primary' : 'bg-muted-dark'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-8 mb-16 animate-fade-in-up">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">5.0★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center animate-fade-in-up">
            <Card className="gradient-card shadow-custom max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h3 className="text-3xl font-serif font-semibold text-foreground mb-6">
                  Join Our Success Stories
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Ready to see similar results for your business? Let's schedule a free consultation 
                  to discuss how we can help you achieve your digital goals.
                </p>
                <Button 
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-gradient-primary text-white shadow-primary hover-lift"
                >
                  Get Your Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;