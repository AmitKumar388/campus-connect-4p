import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';
import { motion } from 'framer-motion';
import { 
  CreditCard,
  TrendingUp,
  DollarSign,
  FileText,
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
  Receipt,
  PieChart,
  BarChart3,
  Download,
  Send,
  Users,
  Calculator,
  Banknote,
  Wallet
} from 'lucide-react';

const AccountantDashboard = () => {
  const financeStats = [
    { icon: DollarSign, label: 'Total Collection', value: '₹18.5L', change: '+₹2.3L', color: 'text-primary' },
    { icon: Wallet, label: 'Pending Fees', value: '₹4.2L', change: '-₹1.1L', color: 'text-warning' },
    { icon: Banknote, label: 'Monthly Revenue', value: '₹6.8L', change: '+12%', color: 'text-success' },
    { icon: Receipt, label: 'Receipts Generated', value: '1,247', change: '+89', color: 'text-secondary' },
  ];

  const pendingPayments = [
    { name: 'Aarav Patel', studentId: 'CS2021001', amount: '₹45,000', dueDate: '15 Dec 2024', semester: '6th', status: 'overdue' },
    { name: 'Priya Singh', studentId: 'CS2021002', amount: '₹22,500', dueDate: '20 Dec 2024', semester: '4th', status: 'due' },
    { name: 'Rahul Kumar', studentId: 'EC2021015', amount: '₹45,000', dueDate: '25 Dec 2024', semester: '6th', status: 'due' },
    { name: 'Sneha Sharma', studentId: 'ME2022010', amount: '₹30,000', dueDate: '30 Dec 2024', semester: '2nd', status: 'pending' },
    { name: 'Vikram Gupta', studentId: 'CS2020045', amount: '₹15,000', dueDate: '5 Jan 2025', semester: '8th', status: 'partial' },
  ];

  const recentTransactions = [
    { type: 'credit', student: 'Aarav Patel', amount: '₹45,000', method: 'UPI', time: '10:30 AM', status: 'completed' },
    { type: 'credit', student: 'Priya Singh', amount: '₹22,500', method: 'Net Banking', time: '11:15 AM', status: 'completed' },
    { type: 'refund', student: 'Rahul Kumar', amount: '₹5,000', method: 'Bank Transfer', time: '12:00 PM', status: 'processing' },
    { type: 'credit', student: 'Sneha Sharma', amount: '₹30,000', method: 'Card Payment', time: '2:30 PM', status: 'completed' },
  ];

  const departmentFees = [
    { department: 'Computer Science', collected: 85, total: '₹45.2L', pending: '₹7.8L', students: 312 },
    { department: 'Electronics', collected: 78, total: '₹38.6L', pending: '₹10.2L', students: 289 },
    { department: 'Mechanical', collected: 82, total: '₹35.4L', pending: '₹7.6L', students: 267 },
    { department: 'Civil', collected: 76, total: '₹28.9L', pending: '₹9.1L', students: 223 },
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
            <h1 className="text-3xl font-bold mb-2">Financial Management Portal</h1>
            <p className="text-white/80 text-lg">
              Welcome to the accounts department. Manage fee collections, generate receipts, and track payments.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                <span>Finance Department</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>Collection Rate: 82%</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <PieChart className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-medium">This Month</p>
              <p className="text-2xl font-bold">₹6.8L</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Financial Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {financeStats.map((stat, index) => (
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
                        {stat.change}
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
        {/* Pending Payments */}
        <div className="xl:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-effect border-0 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  Pending Fee Payments
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Send className="w-4 h-4 mr-2" />
                  Send Reminders
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pendingPayments.map((payment, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-semibold text-foreground">{payment.name}</h4>
                          <Badge 
                            variant={
                              payment.status === 'overdue' ? 'destructive' : 
                              payment.status === 'due' ? 'default' : 'secondary'
                            } 
                            className="text-xs"
                          >
                            {payment.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{payment.studentId} - {payment.semester} Semester</p>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-medium text-primary">{payment.amount}</span>
                          <span className="text-xs text-muted-foreground">Due: {payment.dueDate}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Receipt className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Transactions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="glass-effect border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Recent Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentTransactions.map((transaction, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`p-1 rounded-full mt-1 ${
                      transaction.type === 'credit' ? 'bg-success/20' : 'bg-warning/20'
                    }`}>
                      {transaction.type === 'credit' ? (
                        <CheckCircle className="w-3 h-3 text-success" />
                      ) : (
                        <AlertCircle className="w-3 h-3 text-warning" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <p className="text-sm font-medium text-foreground">{transaction.student}</p>
                        <Badge 
                          variant={transaction.status === 'completed' ? 'default' : 'secondary'} 
                          className="text-xs"
                        >
                          {transaction.status}
                        </Badge>
                      </div>
                      <p className="text-sm font-bold text-primary">{transaction.amount}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-muted-foreground">{transaction.method}</span>
                        <span className="text-xs text-muted-foreground">{transaction.time}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Department-wise Fee Collection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card className="glass-effect border-0 shadow-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Department-wise Fee Collection
            </CardTitle>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {departmentFees.map((dept, index) => (
                <motion.div 
                  key={index}
                  className="p-4 bg-muted/30 rounded-lg border border-border/50"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-foreground">{dept.department}</h4>
                    <Badge variant="outline" className="text-xs">{dept.students} students</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Collection Rate</span>
                      <span className="font-medium">{dept.collected}%</span>
                    </div>
                    <Progress value={dept.collected} className="h-2" />
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-muted-foreground">Collected:</span>
                        <p className="font-medium text-success">{dept.total}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Pending:</span>
                        <p className="font-medium text-warning">{dept.pending}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="glass-effect border-0 shadow-card hover:shadow-elegant transition-all cursor-pointer hover-lift">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-primary p-3 rounded-full w-fit mx-auto mb-4">
                <Receipt className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Generate Receipts</h3>
              <p className="text-sm text-muted-foreground mb-4">Create payment receipts for students</p>
              <Button variant="outline" className="w-full">
                Generate Now
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="glass-effect border-0 shadow-card hover:shadow-elegant transition-all cursor-pointer hover-lift">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-secondary p-3 rounded-full w-fit mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Financial Reports</h3>
              <p className="text-sm text-muted-foreground mb-4">Generate comprehensive financial analytics</p>
              <Button variant="outline" className="w-full">
                View Reports
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="glass-effect border-0 shadow-card hover:shadow-elegant transition-all cursor-pointer hover-lift">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-hero p-3 rounded-full w-fit mx-auto mb-4">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Payment Reminders</h3>
              <p className="text-sm text-muted-foreground mb-4">Send automated fee payment reminders</p>
              <Button variant="outline" className="w-full">
                Send Reminders
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AccountantDashboard;