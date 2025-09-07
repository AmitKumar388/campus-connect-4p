import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';
import { motion } from 'framer-motion';
import { 
  Users, 
  BookOpen, 
  TrendingUp,
  Calendar,
  AlertCircle,
  CheckCircle,
  Building2,
  BarChart3,
  FileText,
  Clock,
  GraduationCap,
  UserCheck,
  Award,
  Target
} from 'lucide-react';

const HODDashboard = () => {
  const departmentStats = [
    { icon: Users, label: 'Total Faculty', value: '24', change: '+2', color: 'text-primary' },
    { icon: GraduationCap, label: 'Total Students', value: '312', change: '+15', color: 'text-success' },
    { icon: BookOpen, label: 'Active Subjects', value: '18', change: '+1', color: 'text-warning' },
    { icon: Award, label: 'Avg Performance', value: '88%', change: '+3%', color: 'text-secondary' },
  ];

  const facultyList = [
    { name: 'Dr. Priya Sharma', subject: 'Data Structures', experience: '8 years', performance: 92, status: 'active' },
    { name: 'Prof. Rajesh Kumar', subject: 'Database Systems', experience: '12 years', performance: 89, status: 'active' },
    { name: 'Dr. Anita Singh', subject: 'Software Engineering', experience: '6 years', performance: 91, status: 'active' },
    { name: 'Prof. Vikram Gupta', subject: 'Machine Learning', experience: '5 years', performance: 94, status: 'active' },
    { name: 'Dr. Neha Patel', subject: 'Computer Networks', experience: '7 years', performance: 87, status: 'on-leave' },
  ];

  const subjectAssignments = [
    { subject: 'Data Structures & Algorithms', faculty: 'Dr. Priya Sharma', semester: '3rd', students: 65, completion: 78 },
    { subject: 'Database Management Systems', faculty: 'Prof. Rajesh Kumar', semester: '4th', students: 58, completion: 85 },
    { subject: 'Software Engineering', faculty: 'Dr. Anita Singh', semester: '5th', students: 52, completion: 72 },
    { subject: 'Machine Learning', faculty: 'Prof. Vikram Gupta', semester: '6th', students: 48, completion: 90 },
  ];

  const recentActivities = [
    { type: 'info', message: 'New faculty joining next week', time: '2 hours ago' },
    { type: 'success', message: 'Semester exam schedules finalized', time: '4 hours ago' },
    { type: 'warning', message: 'Faculty performance review pending', time: '1 day ago' },
    { type: 'info', message: 'Department meeting scheduled for Friday', time: '2 days ago' },
  ];

  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BreadcrumbNav />
      
      {/* Welcome Section */}
      <motion.div 
        className="bg-gradient-hero rounded-2xl p-8 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Good Morning, Dr. Arvind Mehta</h1>
            <p className="text-white/80 text-lg">
              Computer Science & Engineering Department - Here's your department overview.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span>CS & Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span>Head of Department</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Today</p>
              <p className="text-2xl font-bold">{new Date().getDate()}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Department Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {departmentStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="glass-effect border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold mt-2">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <Badge variant="default" className="text-xs">
                        +{stat.change}
                      </Badge>
                      <span className="text-xs text-muted-foreground ml-2">this month</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl bg-gradient-primary`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Faculty Management */}
        <div className="xl:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-effect border-0 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Faculty Management
                </CardTitle>
                <Button variant="outline" size="sm">
                  View All Faculty
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {facultyList.map((faculty, index) => (
                    <motion.div 
                      key={index}
                      className="p-4 bg-muted/30 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">{faculty.name}</h4>
                          <p className="text-sm text-muted-foreground">{faculty.subject}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={faculty.status === 'active' ? 'default' : 'secondary'} className="text-xs">
                            {faculty.status === 'active' ? 'Active' : 'On Leave'}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{faculty.experience} experience</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{faculty.performance}%</span>
                          <Progress value={faculty.performance} className="w-20 h-2" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Activities & Quick Actions */}
        <div className="space-y-6">
          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
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
                    <motion.div 
                      key={index}
                      className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
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
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-effect border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start gap-2 hover-lift">
                    <FileText className="w-4 h-4" />
                    Generate Department Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2 hover-lift">
                    <UserCheck className="w-4 h-4" />
                    Assign Subjects
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2 hover-lift">
                    <BarChart3 className="w-4 h-4" />
                    View Analytics
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2 hover-lift">
                    <TrendingUp className="w-4 h-4" />
                    Performance Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Subject Assignments */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card className="glass-effect border-0 shadow-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Subject Assignments Overview
            </CardTitle>
            <Button variant="outline" size="sm">
              Manage Assignments
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subjectAssignments.map((assignment, index) => (
                <motion.div 
                  key={index}
                  className="p-4 bg-muted/30 rounded-lg border border-border/50"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">{assignment.subject}</h4>
                      <p className="text-sm text-muted-foreground">{assignment.faculty}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">{assignment.semester}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Students: {assignment.students}</span>
                      <span className="font-medium">{assignment.completion}% Complete</span>
                    </div>
                    <Progress value={assignment.completion} className="h-2" />
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default HODDashboard;