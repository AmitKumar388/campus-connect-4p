import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, Bell, MessageSquare, Settings, User, Sun, Moon, Monitor } from 'lucide-react';

interface User {
  email: string;
  role: string;
  name: string;
}

interface HeaderProps {
  user: User;
}

export const Header = ({ user }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes('/dashboard/')) {
      return `${user.role} Dashboard`;
    }
    
    const titleMap: Record<string, string> = {
      '/profile': 'My Profile',
      '/settings': 'Settings',
      '/analytics': 'Analytics & Reports',
      '/manage-users': 'User Management',
      '/system-logs': 'System Logs',
      '/department-staff': 'Department Staff',
      '/subject-assignment': 'Subject Assignment',
      '/student-management': 'Student Management',
      '/upload-materials': 'Upload Materials',
      '/qr-attendance': 'QR Code Attendance',
      '/ai-predictions': 'AI Performance Predictions',
      '/student-queries': 'Student Queries',
      '/my-courses': 'My Courses',
      '/class-schedule': 'Class Schedule',
      '/my-attendance': 'My Attendance',
      '/fee-payment': 'Fee Payment',
      '/mou-requests': 'MoU Requests',
      '/ai-recommendations': 'AI Recommendations',
      '/document-management': 'Document Management',
      '/file-storage': 'File Storage',
      '/fee-management': 'Fee Management',
      '/payment-history': 'Payment History',
      '/ai-assistant': 'AI Assistant',
      '/help': 'Help & Support'
    };

    return titleMap[path] || 'CampusConnect';
  };

  const getCurrentTime = () => {
    return new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <header className="sticky top-0 z-40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-b border-border">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Section - Title & Search */}
        <div className="flex items-center gap-6 flex-1">
          <div>
            <h1 className="text-2xl font-bold text-foreground">{getPageTitle()}</h1>
            <p className="text-sm text-muted-foreground">{getCurrentTime()}</p>
          </div>
          
          <div className="hidden md:block flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/30 border-0 focus:bg-background transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Right Section - Actions & Profile */}
        <div className="flex items-center gap-4">
          {/* Quick Stats */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Today's Classes</p>
              <p className="text-sm font-semibold">6</p>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Pending Tasks</p>
              <p className="text-sm font-semibold text-warning">3</p>
            </div>
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative hover:bg-primary/10">
            <Bell className="w-5 h-5" />
            <Badge variant="destructive" className="absolute -top-1 -right-1 w-5 h-5 text-xs p-0 flex items-center justify-center">
              3
            </Badge>
          </Button>

          {/* Messages */}
          <Button variant="ghost" size="icon" className="relative hover:bg-primary/10">
            <MessageSquare className="w-5 h-5" />
            <Badge variant="secondary" className="absolute -top-1 -right-1 w-5 h-5 text-xs p-0 flex items-center justify-center">
              2
            </Badge>
          </Button>

          {/* Theme Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Theme</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Sun className="mr-2 h-4 w-4" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Moon className="mr-2 h-4 w-4" />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Monitor className="mr-2 h-4 w-4" />
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-3 px-3 py-2 hover:bg-primary/10">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-semibold">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.role}</p>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};