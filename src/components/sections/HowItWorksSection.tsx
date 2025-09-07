import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Heart, Shield, UserCheck } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserCheck,
      title: "Register & Verify",
      description: "Complete your profile with medical information and verify your identity through our secure platform.",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Match & Connect", 
      description: "Our AI-powered system matches donors with recipients based on compatibility, urgency, and location.",
      color: "text-success"
    },
    {
      icon: Shield,
      title: "Secure & Donate",
      description: "All donations are tracked on blockchain for transparency. Medical professionals coordinate the process.",
      color: "text-warning"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How LifeLink Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our secure, three-step process makes organ and blood donation safe, transparent, and efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="medical-card text-center group hover:shadow-lg transition-all duration-300">
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-full bg-muted mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${step.color}`} />
                  </div>
                  <div className="text-sm font-medium text-primary mb-2">
                    Step {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="flex items-center space-x-3 p-4 bg-background rounded-lg">
            <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
            <span className="text-sm font-medium text-foreground">Real-time Matching</span>
          </div>
          
          <div className="flex items-center space-x-3 p-4 bg-background rounded-lg">
            <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
            <span className="text-sm font-medium text-foreground">Blockchain Verified</span>
          </div>
          
          <div className="flex items-center space-x-3 p-4 bg-background rounded-lg">
            <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
            <span className="text-sm font-medium text-foreground">HIPAA Compliant</span>
          </div>
          
          <div className="flex items-center space-x-3 p-4 bg-background rounded-lg">
            <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
            <span className="text-sm font-medium text-foreground">24/7 Support</span>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="px-8 py-4">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;