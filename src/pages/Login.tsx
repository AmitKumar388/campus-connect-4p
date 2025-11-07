import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, GraduationCap, Users, BookOpen, Building } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: ''
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password || !formData.role) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Mock authentication - store user data in localStorage
    const userData = {
      email: formData.email,
      role: formData.role,
      name: getNameByRole(formData.role),
      loginTime: new Date().toISOString()
    };
    
    localStorage.setItem('campusConnectUser', JSON.stringify(userData));
    
    toast({
      title: "Login successful!",
      description: `Welcome to CampusConnect, ${userData.name}`,
    });
    
    // Navigate to role-specific dashboard
    navigate(`/dashboard/${formData.role.toLowerCase()}`);
  };

  const getNameByRole = (role: string) => {
    const names = {
      'Principal': 'Dr. Anil Mehra',
      'HOD': 'Prof. Kavita Iyer',
      'Faculty': 'Dr. Ramesh Sharma',
      'Student': 'Aarav Patel',
      'Admin': 'Suresh Reddy',
      'Accountant': 'Priya Nair'
    };
    return names[role as keyof typeof names] || 'User';
  };

  return (
    <div className="min-h-screen academic-pattern flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in-up">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-primary p-4 rounded-2xl shadow-glow animate-pulse-glow">
              <GraduationCap className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            CampusConnect
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Educational Excellence Management System
          </p>
        </div>

        {/* Login Form */}
        <Card className="glass-effect shadow-elegant border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-semibold text-foreground">
              Welcome Back
            </CardTitle>
            <p className="text-muted-foreground">
              Sign in to access your dashboard
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Role Selection */}
              <div className="space-y-2">
                <Label htmlFor="role" className="text-sm font-medium">
                  Select Your Role
                </Label>
                <Select value={formData.role} onValueChange={(value) => setFormData({...formData, role: value})}>
                  <SelectTrigger className="bg-background/50 border-2 hover:border-primary/50 transition-colors">
                    <SelectValue placeholder="Choose your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Principal">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-primary" />
                        Principal
                      </div>
                    </SelectItem>
                    <SelectItem value="HOD">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-secondary" />
                        Head of Department
                      </div>
                    </SelectItem>
                    <SelectItem value="Faculty">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-success" />
                        Faculty
                      </div>
                    </SelectItem>
                    <SelectItem value="Student">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-warning" />
                        Student
                      </div>
                    </SelectItem>
                    <SelectItem value="Admin">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-muted-foreground" />
                        Admin
                      </div>
                    </SelectItem>
                    <SelectItem value="Accountant">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-destructive" />
                        Accountant
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-background/50 border-2 hover:border-primary/50 focus:border-primary transition-colors"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="bg-background/50 border-2 hover:border-primary/50 focus:border-primary transition-colors pr-12"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-primary/10"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold py-3 rounded-lg shadow-elegant transition-all duration-300 hover:shadow-glow"
              >
                Sign In
              </Button>

                <p className="text-xs text-muted-foreground mt-2">
                  Select any role and use these.
                </p>
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Need help? Contact{' '}
            <Link to="/support" className="text-primary hover:text-primary-hover transition-colors">
              IT Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;