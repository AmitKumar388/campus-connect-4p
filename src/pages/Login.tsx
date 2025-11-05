import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import { Eye, EyeOff, GraduationCap, Users, BookOpen, Building } from 'lucide-react';

type AppRole = 'student' | 'faculty' | 'hod' | 'principal' | 'accountant' | 'admin';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signUpData, setSignUpData] = useState({ 
    email: '', 
    password: '', 
    fullName: '', 
    role: '' as AppRole | '' 
  });
  const navigate = useNavigate();
  const { signIn, signUp, user, roles } = useAuth();

  useEffect(() => {
    // Redirect if already logged in
    if (user && roles.length > 0) {
      const primaryRole = roles[0];
      navigate(`/dashboard/${primaryRole}`);
    }
  }, [user, roles, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginData.email || !loginData.password) {
      return;
    }

    try {
      await signIn(loginData.email, loginData.password);
      // Navigation handled by useEffect
    } catch (error) {
      // Error handled in signIn
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!signUpData.email || !signUpData.password || !signUpData.fullName || !signUpData.role) {
      return;
    }

    try {
      await signUp(signUpData.email, signUpData.password, signUpData.fullName, signUpData.role as AppRole);
      setIsSignUp(false);
      setLoginData({ email: signUpData.email, password: signUpData.password });
    } catch (error) {
      // Error handled in signUp
    }
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

        {/* Login/SignUp Form */}
        <Card className="glass-effect shadow-elegant border-0">
          <CardContent className="pt-6">
            <Tabs value={isSignUp ? 'signup' : 'login'} onValueChange={(v) => setIsSignUp(v === 'signup')}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login">
                <div className="text-center mb-4">
                  <CardTitle className="text-2xl font-semibold text-foreground">
                    Welcome Back
                  </CardTitle>
                  <CardDescription>
                    Sign in to access your dashboard
                  </CardDescription>
                </div>
                
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email Address</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="Enter your email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                      className="bg-background/50 border-2 hover:border-primary/50 focus:border-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="login-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        className="bg-background/50 border-2 hover:border-primary/50 focus:border-primary pr-12"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold py-3"
                  >
                    Sign In
                  </Button>
                </form>
              </TabsContent>

              {/* Sign Up Tab */}
              <TabsContent value="signup">
                <div className="text-center mb-4">
                  <CardTitle className="text-2xl font-semibold text-foreground">
                    Create Account
                  </CardTitle>
                  <CardDescription>
                    Sign up to get started
                  </CardDescription>
                </div>
                
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input
                      id="signup-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={signUpData.fullName}
                      onChange={(e) => setSignUpData({...signUpData, fullName: e.target.value})}
                      className="bg-background/50 border-2 hover:border-primary/50 focus:border-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email Address</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="Enter your email"
                      value={signUpData.email}
                      onChange={(e) => setSignUpData({...signUpData, email: e.target.value})}
                      className="bg-background/50 border-2 hover:border-primary/50 focus:border-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="signup-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Create a password"
                        value={signUpData.password}
                        onChange={(e) => setSignUpData({...signUpData, password: e.target.value})}
                        className="bg-background/50 border-2 hover:border-primary/50 focus:border-primary pr-12"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-role">Select Your Role</Label>
                    <Select value={signUpData.role} onValueChange={(value) => setSignUpData({...signUpData, role: value as AppRole})}>
                      <SelectTrigger className="bg-background/50 border-2 hover:border-primary/50">
                        <SelectValue placeholder="Choose your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="principal">
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4 text-primary" />
                            Principal
                          </div>
                        </SelectItem>
                        <SelectItem value="hod">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-secondary" />
                            Head of Department
                          </div>
                        </SelectItem>
                        <SelectItem value="faculty">
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-success" />
                            Faculty
                          </div>
                        </SelectItem>
                        <SelectItem value="student">
                          <div className="flex items-center gap-2">
                            <GraduationCap className="w-4 h-4 text-warning" />
                            Student
                          </div>
                        </SelectItem>
                        <SelectItem value="admin">
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4 text-muted-foreground" />
                            Admin
                          </div>
                        </SelectItem>
                        <SelectItem value="accountant">
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-destructive" />
                            Accountant
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold py-3"
                  >
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
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