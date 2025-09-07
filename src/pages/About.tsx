import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Globe, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion First",
      description: "Every decision we make is guided by our commitment to saving lives and supporting families through their medical journey."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We use blockchain technology and medical-grade security to ensure complete transparency and data protection."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our platform brings together donors, recipients, hospitals, and medical professionals in a unified ecosystem."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Connecting people across geographical boundaries to maximize life-saving donation opportunities."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Lives Saved" },
    { number: "50,000+", label: "Active Donors" },
    { number: "500+", label: "Partner Hospitals" },
    { number: "25+", label: "Countries Served" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="medical-gradient p-4 rounded-2xl">
                <Heart className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Saving Lives Through 
              <span className="text-primary block">Technology & Compassion</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              LifeLink is the world's first blockchain-verified organ and blood donation platform, 
              connecting donors and recipients through secure, transparent, and efficient technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Target className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Mission</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Bridging the Gap Between Donors and Recipients
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every day, thousands of people wait for life-saving organ transplants and blood donations. 
                We believe technology can make this process more efficient, transparent, and accessible to everyone.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Eliminate geographical barriers in organ matching</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Ensure complete transparency through blockchain verification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Provide 24/7 support for donors and recipients</span>
                </div>
              </div>
            </div>
            
            <div className="medical-card">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="medical-card group hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Medical professionals, technologists, and advocates working together to save lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="medical-card text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Dr. Sarah Chen</h3>
              <p className="text-primary font-medium mb-2">Chief Medical Officer</p>
              <p className="text-sm text-muted-foreground">Transplant surgeon with 15+ years experience</p>
            </div>

            <div className="medical-card text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Michael Rodriguez</h3>
              <p className="text-primary font-medium mb-2">Chief Technology Officer</p>
              <p className="text-sm text-muted-foreground">Blockchain and healthcare tech expert</p>
            </div>

            <div className="medical-card text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Lisa Thompson</h3>
              <p className="text-primary font-medium mb-2">Chief Operating Officer</p>
              <p className="text-sm text-muted-foreground">Healthcare operations and compliance specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="medical-card max-w-4xl mx-auto text-center">
            <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our community of donors, recipients, and medical professionals working together to save lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4" asChild>
                <Link to="/auth/register?role=donor">Become a Donor</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4" asChild>
                <Link to="/auth/register?role=recipient">Find a Match</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;