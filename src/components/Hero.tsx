import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 animate-fade-in-up">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="text-white font-medium">
              #1 Rated Web Design Agency
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight animate-fade-in-up">
            We Put <span className="text-yellow-300">Low Visibility</span><br />
            Businesses on the Map
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            From startups to established brands looking to rebrand, we create stunning digital experiences that convert visitors into loyal customers.
          </p>

          {/* Mission Statement */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in-up">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-left">
              <h3 className="text-xl font-serif font-semibold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-white/90 leading-relaxed">
                To empower every business with a digital presence that truly reflects their unique value and drives measurable growth in today's competitive market.
              </p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-left">
              <h3 className="text-xl font-serif font-semibold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-white/90 leading-relaxed">
                To deliver world-class web design and development solutions tailored to each client's needs, investment level, and growth ambitions.
              </p>
            </Card>
          </div>

          {/* Value Propositions */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 animate-fade-in-up">
            {[
              "Free Consultation",
              "Custom Design",
              "Mobile Responsive",
              "SEO Optimized",
              "24/7 Support"
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent-hover text-white px-8 py-4 text-lg font-semibold shadow-accent hover-lift group"
            >
              Get Your FREE Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToPackages}
              className="border-white/30 text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold backdrop-blur-sm"
            >
              View Our Packages
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-white/70 animate-fade-in-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm">Websites Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5★</div>
              <div className="text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;