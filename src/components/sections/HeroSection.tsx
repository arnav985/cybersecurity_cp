import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/20 to-background py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <div className="flex items-center space-x-2 mb-6">
              <div className="medical-gradient p-2 rounded-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Trusted Medical Platform
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Save Lives Through 
              <span className="text-primary block">Organ & Blood</span>
              Donation
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join our secure, blockchain-verified platform connecting donors and recipients. 
              Every donation is tracked, verified, and makes a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/auth/register?role=donor">
                  Become a Donor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/auth/register?role=recipient">
                  Need an Organ
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/auth/register?role=blood_bank">
                  Donate Blood
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-success" />
                <span>Blockchain Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-success" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-muted rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="medical-card text-center">
                  <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">10K+</div>
                  <div className="text-sm text-muted-foreground">Lives Saved</div>
                </div>
                
                <div className="medical-card text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">50K+</div>
                  <div className="text-sm text-muted-foreground">Active Donors</div>
                </div>
                
                <div className="medical-card text-center col-span-2">
                  <Shield className="h-8 w-8 text-success mx-auto mb-3" />
                  <div className="text-lg font-semibold text-foreground mb-1">100% Secure</div>
                  <div className="text-sm text-muted-foreground">Blockchain verified transactions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;