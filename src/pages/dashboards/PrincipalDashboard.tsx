import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  TrendingUp,
  DollarSign,
  Calendar,
  AlertCircle,
  CheckCircle,
  Building,
  BarChart3,
  FileText,
  Clock
} from 'lucide-react';

const PrincipalDashboard = () => {
  const stats = [
    { icon: Users, label: 'Total Students', value: '1,247', change: '+5.2%', color: 'text-primary' },
    { icon: BookOpen, label: 'Faculty Members', value: '89', change: '+2.1%', color: 'text-success' },
    { icon: GraduationCap, label: 'Departments', value: '12', change: '0%', color: 'text-warning' },
    { icon: DollarSign, label: 'Fee Collection', value: '₹2.4M', change: '+12.3%', color: 'text-secondary' },
  ];

  const recentActivities = [
    { type: 'info', message: 'New admission batch started', time: '2 hours ago' },
    { type: 'success', message: 'Department performance review completed', time: '4 hours ago' },
    { type: 'warning', message: 'Fee payment deadline approaching', time: '6 hours ago' },
    { type: 'info', message: 'Faculty meeting scheduled', time: '1 day ago' },
  ];

  const departmentPerformance = [
    { name: 'Computer Science', students: 312, attendance: 92, performance: 88 },
    { name: 'Electronics', students: 289, attendance: 89, performance: 85 },
    { name: 'Mechanical', students: 267, attendance: 87, performance: 82 },
    { name: 'Civil', students: 223, attendance: 85, performance: 80 },
    { name: 'Electrical', students: 156, attendance: 90, performance: 86 },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-hero rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Good Morning, Dr. Sarah Johnson</h1>
            <p className="text-white/80 text-lg">
              Welcome to your Principal Dashboard. Here's what's happening at your institute today.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Today</p>
              <p className="text-2xl font-bold">{new Date().getDate()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="glass-effect border-0 shadow-card hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <Badge variant={stat.change.startsWith('+') ? 'default' : 'secondary'} className="text-xs">
                      {stat.change}
                    </Badge>
                    <span className="text-xs text-muted-foreground ml-2">vs last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-xl bg-gradient-primary ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Department Performance */}
        <div className="xl:col-span-2">
          <Card className="glass-effect border-0 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Department Performance Overview
              </CardTitle>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departmentPerformance.map((dept, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-lg border border-border/50">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-foreground">{dept.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {dept.students} Students
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Attendance</span>
                          <span className="font-medium">{dept.attendance}%</span>
                        </div>
                        <Progress value={dept.attendance} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Performance</span>
                          <span className="font-medium">{dept.performance}%</span>
                        </div>
                        <Progress value={dept.performance} className="h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <div className="space-y-6">
          <Card className="glass-effect border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg">
                    <div className={`p-1 rounded-full mt-1 ${
                      activity.type === 'success' ? 'bg-success/20' :
                      activity.type === 'warning' ? 'bg-warning/20' : 'bg-primary/20'
                    }`}>
                      {activity.type === 'success' ? (
                        <CheckCircle className="w-3 h-3 text-success" />
                      ) : activity.type === 'warning' ? (
                        <AlertCircle className="w-3 h-3 text-warning" />
                      ) : (
                        <AlertCircle className="w-3 h-3 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{activity.message}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="glass-effect border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <FileText className="w-4 h-4" />
                  Generate Institute Report
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Users className="w-4 h-4" />
                  View All Faculty
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Academic Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <TrendingUp className="w-4 h-4" />
                  System Performance
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrincipalDashboard;