import { useState } from "react";
import { ChevronDown, Phone, Mail, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I get started with my project?",
          answer: "Getting started is easy! Simply contact us for a free consultation where we'll discuss your needs, goals, and vision. We'll then provide you with a detailed proposal and timeline. Once approved, we'll begin the discovery phase to dive deep into your brand and requirements."
        },
        {
          question: "What information do you need from me?",
          answer: "We'll need details about your business, target audience, goals, preferred style/colors, any existing branding materials, content (text, images), and examples of websites you like. Don't worry - we'll guide you through everything during our discovery session."
        },
        {
          question: "How long does the entire process take?",
          answer: "Timeline varies by package: Startup Launch (2-3 weeks), Professional Growth (4-6 weeks), Enterprise Premium (8-12 weeks). This includes design, development, revisions, and testing. We'll provide a detailed timeline during your consultation."
        }
      ]
    },
    {
      category: "Design & Development",
      questions: [
        {
          question: "Will my website work on mobile devices?",
          answer: "Absolutely! All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices - smartphones, tablets, and desktops. We test extensively across different screen sizes and browsers."
        },
        {
          question: "Can I update my website content myself?",
          answer: "Yes! Most of our packages include a user-friendly Content Management System (CMS) that allows you to easily update text, images, and other content. We also provide training and documentation to help you manage your site confidently."
        },
        {
          question: "Do you provide SEO optimization?",
          answer: "Yes! All our packages include SEO fundamentals like optimized page structure, meta tags, fast loading speeds, and mobile optimization. Our Professional and Enterprise packages include advanced SEO strategies to help you rank higher in search results."
        },
        {
          question: "What if I don't like the initial design?",
          answer: "No problem! We include revision rounds in all packages and work closely with you throughout the design process. Our goal is your complete satisfaction, and we'll refine the design until it perfectly captures your vision."
        }
      ]
    },
    {
      category: "Pricing & Packages",
      questions: [
        {
          question: "Are there any hidden fees or ongoing costs?",
          answer: "No hidden fees! Our packages are one-time payments that include everything listed. The only ongoing costs would be optional services like hosting, domain renewal, or additional support beyond what's included in your package."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes! We understand that investing in your digital presence is a big decision. We offer flexible payment plans with 50% upfront and 50% upon project completion. Contact us to discuss options that work for your budget."
        },
        {
          question: "What's included in the support period?",
          answer: "Support includes bug fixes, minor content updates, technical assistance, and guidance on using your new website. Support duration varies by package (1-6 months). Extended support plans are available if needed."
        },
        {
          question: "Can I upgrade my package later?",
          answer: "Absolutely! If your needs grow, we can easily add features or upgrade your package. We'll credit what you've already paid toward the higher package, so you only pay the difference."
        }
      ]
    },
    {
      category: "Technical & Support",
      questions: [
        {
          question: "Do you provide website hosting?",
          answer: "We partner with premium hosting providers to offer reliable, fast hosting solutions. We can set this up for you or work with your existing hosting provider. We'll recommend the best option based on your needs and traffic expectations."
        },
        {
          question: "What happens if my website goes down?",
          answer: "We monitor all websites we host and provide quick resolution for any issues. During your support period, we handle technical problems promptly. We also provide guidance on choosing reliable hosting to minimize downtime."
        },
        {
          question: "Can you help with ongoing marketing and SEO?",
          answer: "Yes! While our packages include foundational SEO, we also offer ongoing digital marketing services including advanced SEO, content marketing, social media management, and pay-per-click advertising to help grow your online presence."
        },
        {
          question: "Do you work with businesses outside your local area?",
          answer: "Absolutely! We work with clients nationwide and internationally. Most of our communication happens via video calls, email, and phone, making location irrelevant. We've successfully completed projects for clients across different time zones."
        }
      ]
    }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Got questions? We've got answers! Here are the most common questions we receive 
              about our web design and development services.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-8 mb-16">
            {faqs.map((category, categoryIndex) => (
              <Card 
                key={category.category} 
                className="gradient-card shadow-custom animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 text-center">
                    {category.category}
                  </h3>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${categoryIndex}-${index}`}
                        className="border border-border rounded-lg px-4"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <span className="font-medium text-foreground pr-4">
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 pt-0">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="text-center animate-fade-in-up">
            <Card className="gradient-card shadow-custom">
              <CardContent className="p-12">
                <h3 className="text-3xl font-serif font-semibold text-foreground mb-6">
                  Still Have Questions?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Can't find the answer you're looking for? We're here to help! 
                  Reach out to us and we'll get back to you within 24 hours.
                </p>
                
                {/* Contact Options */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Call Us</h4>
                    <a 
                      href="tel:+1-555-ENVISION"
                      className="text-primary hover:text-primary-hover font-medium"
                    >
                      +1-555-ENVISION
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Fri 9AM-6PM EST</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Email Us</h4>
                    <a 
                      href="mailto:hello@envisionweb.com"
                      className="text-primary hover:text-primary-hover font-medium"
                    >
                      hello@envisionweb.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">24 hour response time</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Live Chat</h4>
                    <p className="text-primary font-medium">Available 24/7</p>
                    <p className="text-sm text-muted-foreground mt-1">Instant responses</p>
                  </div>
                </div>
                
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
                    onClick={() => window.open("tel:+1-555-ENVISION")}
                  >
                    Call Now
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

export default FAQ;