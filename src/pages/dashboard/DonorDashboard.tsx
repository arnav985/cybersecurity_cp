import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Heart, Calendar, FileText, User, MapPin, Clock, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const DonorDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, John</h1>
          <p className="text-muted-foreground">Thank you for your commitment to saving lives.</p>
        </div>

        {/* Profile Completion */}
        <Card className="medical-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5 text-primary" />
              <span>Profile Completion</span>
            </CardTitle>
            <CardDescription>Complete your profile to start receiving matches</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Profile Progress</span>
                <span className="text-sm text-muted-foreground">75%</span>
              </div>
              <Progress value={75} className="h-2" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="bg-success/10 text-success">✓ Basic Info</Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="bg-success/10 text-success">✓ Medical History</Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Consent Pending</Badge>
                </div>
              </div>
              <Button asChild className="mt-4">
                <Link to="/donor/consent">Complete Consent Form</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your donation preferences and schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-24 flex-col space-y-2" asChild>
                    <Link to="/donor/blood/schedule">
                      <Calendar className="h-6 w-6 text-primary" />
                      <span>Schedule Blood Donation</span>
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="h-24 flex-col space-y-2" asChild>
                    <Link to="/donor/profile">
                      <User className="h-6 w-6 text-primary" />
                      <span>Update Profile</span>
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="h-24 flex-col space-y-2" asChild>
                    <Link to="/donor/medical">
                      <FileText className="h-6 w-6 text-primary" />
                      <span>Medical History</span>
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="h-24 flex-col space-y-2" asChild>
                    <Link to="/donor/appointments">
                      <Clock className="h-6 w-6 text-primary" />
                      <span>View Appointments</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest donation activities and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
                    <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-success" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Blood donation scheduled</p>
                      <p className="text-sm text-muted-foreground">March 15, 2024 at City Blood Bank</p>
                    </div>
                    <Badge variant="outline" className="text-success border-success">Confirmed</Badge>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Medical history updated</p>
                      <p className="text-sm text-muted-foreground">Added current medications</p>
                    </div>
                    <Badge variant="outline">Updated</Badge>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
                    <div className="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-warning" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Potential organ match found</p>
                      <p className="text-sm text-muted-foreground">Kidney donation opportunity</p>
                    </div>
                    <Badge variant="outline" className="text-warning border-warning">Pending Review</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Donation Stats */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-lg">Your Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">5</div>
                  <div className="text-sm text-muted-foreground">Blood Donations</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-1">15</div>
                  <div className="text-sm text-muted-foreground">Lives Impacted</div>
                </div>
                
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Next eligible donation</p>
                  <p className="text-xs text-muted-foreground">in 3 weeks</p>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">Blood Donation</span>
                      <Badge variant="outline" className="text-primary border-primary">Confirmed</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">March 15, 2024</p>
                    <p className="text-xs text-muted-foreground">City Blood Bank</p>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/donor/appointments">
                      <Plus className="h-4 w-4 mr-2" />
                      Schedule New
                    </Link>
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

export default DonorDashboard;