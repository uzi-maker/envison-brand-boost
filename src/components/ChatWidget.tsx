import { useState } from "react";
import { MessageCircle, X, Send, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the message to your backend
    console.log("Chat message:", { name, email, message });
    // Reset form
    setMessage("");
    setName("");
    setEmail("");
    // Show success message or handle response
  };

  return (
    <div className="chat-widget">
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-primary shadow-primary hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="h-8 w-8 text-white" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-80 h-96 shadow-lg animate-scale-in">
          <CardHeader className="bg-gradient-primary text-white rounded-t-lg relative">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg">Live Support</CardTitle>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-white/90">Online 24/7</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-4 h-full flex flex-col">
            {/* Welcome Message */}
            <div className="bg-muted rounded-lg p-3 mb-4">
              <p className="text-sm text-muted-foreground">
                👋 Hi! I'm here to help you with your web design needs. Let's start with a quick message!
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge 
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-white transition-colors text-xs"
                onClick={() => setMessage("I need a new website")}
              >
                New Website
              </Badge>
              <Badge 
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-white transition-colors text-xs"
                onClick={() => setMessage("I want to rebrand")}
              >
                Rebranding
              </Badge>
              <Badge 
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-white transition-colors text-xs"
                onClick={() => setMessage("Tell me about pricing")}
              >
                Pricing Info
              </Badge>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-3">
              <Input
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="text-sm"
              />
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-sm"
              />
              <Textarea
                placeholder="How can we help you today?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="flex-1 min-h-[60px] text-sm resize-none"
              />
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary text-white shadow-primary"
                disabled={!name || !email || !message}
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>

            {/* Quick Contact */}
            <div className="border-t pt-3 mt-3">
              <p className="text-xs text-muted-foreground mb-2 text-center">
                Or contact us directly:
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="tel:+1-555-ENVISION"
                  className="flex items-center space-x-1 text-xs text-primary hover:text-primary-hover transition-colors"
                >
                  <Phone className="h-3 w-3" />
                  <span>Call Now</span>
                </a>
                <a
                  href="mailto:hello@envisionweb.com"
                  className="flex items-center space-x-1 text-xs text-primary hover:text-primary-hover transition-colors"
                >
                  <Mail className="h-3 w-3" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ChatWidget;