import { Button } from "@/components/ui/button";
import { Activity, Globe, Lock, Users, Zap, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Track donation progress and recipient status updates in real-time with instant notifications."
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description: "End-to-end encryption and blockchain verification ensure complete privacy and security."
    },
    {
      icon: Users,
      title: "Smart Matching",
      description: "AI-powered algorithm matches donors with recipients based on medical compatibility."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with hospitals, blood banks, and medical centers worldwide."
    },
    {
      icon: Zap,
      title: "Instant Alerts",
      description: "Get notified immediately when a match is found or urgent donation is needed."
    },
    {
      icon: Shield,
      title: "Verified Platform",
      description: "All medical professionals and institutions are verified and certified."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose LifeLink?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced technology meets compassionate care to create the most trusted organ and blood donation platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="medical-card group hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="medical-card max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Platform Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">&lt;2min</div>
                <div className="text-muted-foreground">Average Match Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Medical Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;