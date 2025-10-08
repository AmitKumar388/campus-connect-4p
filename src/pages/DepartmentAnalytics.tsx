import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Users, BookOpen, Award, ArrowUpRight, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DepartmentAnalytics = () => {
  const navigate = useNavigate();

  const departments = [
    {
      name: "Computer Science",
      students: 450,
      faculty: 28,
      avgAttendance: 87,
      passRate: 92,
      trend: "+5%",
      courses: 12,
    },
    {
      name: "Electronics",
      students: 380,
      faculty: 22,
      avgAttendance: 85,
      passRate: 89,
      trend: "+3%",
      courses: 10,
    },
    {
      name: "Mechanical",
      students: 420,
      faculty: 25,
      avgAttendance: 83,
      passRate: 88,
      trend: "+2%",
      courses: 11,
    },
    {
      name: "Civil",
      students: 360,
      faculty: 20,
      avgAttendance: 86,
      passRate: 90,
      trend: "+4%",
      courses: 9,
    },
  ];

  const performanceMetrics = [
    { label: "Overall Pass Rate", value: "89.5%", change: "+3.2%", icon: Award },
    { label: "Avg Attendance", value: "85.2%", change: "+1.8%", icon: Users },
    { label: "Active Courses", value: "42", change: "+5", icon: BookOpen },
    { label: "Research Papers", value: "156", change: "+28", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 p-6">
      <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Department Analytics
            </h1>
            <p className="text-muted-foreground mt-1">Comprehensive department performance insights</p>
          </div>
          <div className="flex gap-3">
            <Select defaultValue="2024">
              <SelectTrigger className="w-32 backdrop-blur-xl bg-white/50 dark:bg-gray-900/50 border-white/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
              </SelectContent>
            </Select>
            <Button className="gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {performanceMetrics.map((metric, index) => (
            <Card key={index} className="backdrop-blur-xl bg-white/50 dark:bg-gray-900/50 border-white/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <metric.icon className="h-5 w-5 text-primary" />
                  <Badge variant="secondary" className="gap-1">
                    <ArrowUpRight className="h-3 w-3" />
                    {metric.change}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Department Performance Table */}
        <Card className="backdrop-blur-xl bg-white/50 dark:bg-gray-900/50 border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Department Performance
            </CardTitle>
            <CardDescription>Detailed analytics by department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Department</th>
                    <th className="text-left py-3 px-4 font-semibold">Students</th>
                    <th className="text-left py-3 px-4 font-semibold">Faculty</th>
                    <th className="text-left py-3 px-4 font-semibold">Courses</th>
                    <th className="text-left py-3 px-4 font-semibold">Avg Attendance</th>
                    <th className="text-left py-3 px-4 font-semibold">Pass Rate</th>
                    <th className="text-left py-3 px-4 font-semibold">Trend</th>
                    <th className="text-left py-3 px-4 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {departments.map((dept, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4 font-medium">{dept.name}</td>
                      <td className="py-3 px-4">{dept.students}</td>
                      <td className="py-3 px-4">{dept.faculty}</td>
                      <td className="py-3 px-4">{dept.courses}</td>
                      <td className="py-3 px-4">
                        <Badge variant={dept.avgAttendance >= 85 ? "default" : "secondary"}>
                          {dept.avgAttendance}%
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant={dept.passRate >= 90 ? "default" : "secondary"}>
                          {dept.passRate}%
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-green-600 dark:text-green-400 font-medium">
                          {dept.trend}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => navigate('/department-staff')}
                        >
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card 
            className="backdrop-blur-xl bg-white/50 dark:bg-gray-900/50 border-white/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => navigate('/analytics')}
          >
            <CardHeader>
              <CardTitle className="text-lg">Overall Analytics</CardTitle>
              <CardDescription>View institution-wide metrics</CardDescription>
            </CardHeader>
          </Card>
          <Card 
            className="backdrop-blur-xl bg-white/50 dark:bg-gray-900/50 border-white/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => navigate('/academic-performance')}
          >
            <CardHeader>
              <CardTitle className="text-lg">Academic Performance</CardTitle>
              <CardDescription>Student performance tracking</CardDescription>
            </CardHeader>
          </Card>
          <Card 
            className="backdrop-blur-xl bg-white/50 dark:bg-gray-900/50 border-white/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => navigate('/financial-reports')}
          >
            <CardHeader>
              <CardTitle className="text-lg">Financial Reports</CardTitle>
              <CardDescription>Department budget & expenses</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DepartmentAnalytics;
