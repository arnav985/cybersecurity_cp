import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Heart, FileText, User, Clock, AlertCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const RecipientDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Sarah</h1>
          <p className="text-muted-foreground">We're working to find the perfect match for you.</p>
        </div>

        {/* Waitlist Status */}
        <Card className="medical-card mb-8 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-primary" />
              <span>Waitlist Status</span>
            </CardTitle>
            <CardDescription>Your position and estimated time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">#47</div>
                <div className="text-sm text-muted-foreground">Current Position</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">8-12</div>
                <div className="text-sm text-muted-foreground">Estimated Months</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Profile Complete</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Application Status */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle>Application Progress</CardTitle>
                <CardDescription>Complete all steps to improve your matching priority</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm text-muted-foreground">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center space-x-3 p-3 bg-success/5 rounded-lg border border-success/20">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <div>
                        <p className="font-medium text-sm">Medical Records</p>
                        <p className="text-xs text-muted-foreground">Complete</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-success/5 rounded-lg border border-success/20">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <div>
                        <p className="font-medium text-sm">Insurance Verification</p>
                        <p className="text-xs text-muted-foreground">Verified</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-warning/5 rounded-lg border border-warning/20">
                      <AlertCircle className="h-5 w-5 text-warning" />
                      <div>
                        <p className="font-medium text-sm">Additional Documents</p>
                        <p className="text-xs text-muted-foreground">1 pending</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-success/5 rounded-lg border border-success/20">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <div>
                        <p className="font-medium text-sm">Support System</p>
                        <p className="text-xs text-muted-foreground">Approved</p>
                      </div>
                    </div>
                  </div>
                  <Button asChild className="mt-4">
                    <Link to="/recipient/documents">Upload Missing Document</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Matches */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle>Recent Match Opportunities</CardTitle>
                <CardDescription>Potential matches found in your area</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Kidney Match - 92% Compatibility</p>
                      <p className="text-sm text-muted-foreground">Living donor, 45 miles away</p>
                    </div>
                    <div className="flex space-x-2">
                      <Badge variant="outline" className="text-primary border-primary">High Priority</Badge>
                      <Button size="sm">Review</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
                    <div className="w-10 h-10 bg-muted-foreground/10 rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Kidney Match - 78% Compatibility</p>
                      <p className="text-sm text-muted-foreground">Declined on March 10, 2024</p>
                    </div>
                    <Badge variant="outline">Declined</Badge>
                  </div>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/recipient/matches">View All Matches</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Medical Info */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-lg">Medical Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Organ Needed</span>
                    <span className="text-sm font-medium">Kidney</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Blood Type</span>
                    <span className="text-sm font-medium">O+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Urgency Level</span>
                    <Badge variant="outline" className="text-warning border-warning">Medium</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Wait Time</span>
                    <span className="text-sm font-medium">2 years, 3 months</span>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/recipient/profile">
                    <User className="h-4 w-4 mr-2" />
                    Update Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Support Team */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-lg">Your Care Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Dr. Jennifer Smith</p>
                      <p className="text-xs text-muted-foreground">Transplant Coordinator</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Sarah Johnson</p>
                      <p className="text-xs text-muted-foreground">Patient Advocate</p>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    <Clock className="h-4 w-4 mr-2" />
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipientDashboard;