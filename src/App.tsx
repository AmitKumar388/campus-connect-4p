import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import AppLayout from "./components/layout/AppLayout";
import PrincipalDashboard from "./pages/dashboards/PrincipalDashboard";
import StudentDashboard from "./pages/dashboards/StudentDashboard";
import FacultyDashboard from "./pages/dashboards/FacultyDashboard";
import HODDashboard from "./pages/dashboards/HODDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import AccountantDashboard from "./pages/dashboards/AccountantDashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import FeeManagement from "./pages/FeeManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Dashboard Routes */}
          <Route path="/dashboard/*" element={<AppLayout />}>
            <Route path="principal" element={<PrincipalDashboard />} />
            <Route path="hod" element={<HODDashboard />} />
            <Route path="faculty" element={<FacultyDashboard />} />
            <Route path="student" element={<StudentDashboard />} />
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="accountant" element={<AccountantDashboard />} />
          </Route>

          {/* Feature Pages */}
          <Route element={<AppLayout />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/fee-management" element={<FeeManagement />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/manage-users" element={<ManageUsers />} />
            <Route path="/my-courses" element={<MyCourses />} />
            <Route
              path="/system-logs"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  System Logs - Coming Soon
                </div>
              }
            />
            <Route
              path="/department-staff"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Department Staff - Coming Soon
                </div>
              }
            />
            <Route
              path="/subject-assignment"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Subject Assignment - Coming Soon
                </div>
              }
            />
            <Route
              path="/student-management"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Student Management - Coming Soon
                </div>
              }
            />
            <Route
              path="/upload-materials"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Upload Materials - Coming Soon
                </div>
              }
            />
            <Route
              path="/qr-attendance"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  QR Attendance - Coming Soon
                </div>
              }
            />
            <Route
              path="/ai-predictions"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  AI Predictions - Coming Soon
                </div>
              }
            />
            <Route
              path="/student-queries"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Student Queries - Coming Soon
                </div>
              }
            />
            <Route
              path="/my-courses"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  My Courses - Coming Soon
                </div>
              }
            />
            <Route
              path="/class-schedule"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Class Schedule - Coming Soon
                </div>
              }
            />
            <Route
              path="/my-attendance"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  My Attendance - Coming Soon
                </div>
              }
            />
            <Route
              path="/fee-payment"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Fee Payment - Coming Soon
                </div>
              }
            />
            <Route
              path="/mou-requests"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  MoU Requests - Coming Soon
                </div>
              }
            />
            <Route
              path="/ai-recommendations"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  AI Recommendations - Coming Soon
                </div>
              }
            />
            <Route
              path="/document-management"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Document Management - Coming Soon
                </div>
              }
            />
            <Route
              path="/file-storage"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  File Storage - Coming Soon
                </div>
              }
            />
            <Route
              path="/fee-management"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Fee Management - Coming Soon
                </div>
              }
            />
            <Route
              path="/payment-history"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Payment History - Coming Soon
                </div>
              }
            />
            <Route
              path="/ai-assistant"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  AI Assistant - Coming Soon
                </div>
              }
            />
            <Route
              path="/institute-settings"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Institute Settings - Coming Soon
                </div>
              }
            />
            <Route
              path="/academic-performance"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Academic Performance - Coming Soon
                </div>
              }
            />
            <Route
              path="/academic-calendar"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Academic Calendar - Coming Soon
                </div>
              }
            />
            <Route
              path="/department-analytics"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Department Analytics - Coming Soon
                </div>
              }
            />
            <Route
              path="/student-assignments"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Student Assignments - Coming Soon
                </div>
              }
            />

            <Route
              path="/user-records"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  User Records - Coming Soon
                </div>
              }
            />
            <Route
              path="/system-management"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  System Management - Coming Soon
                </div>
              }
            />
            <Route
              path="/admin-notifications"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Admin Notification - Coming Soon
                </div>
              }
            />

            <Route
              path="/generate-receipts"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Generate Receipts - Coming Soon
                </div>
              }
            />
            <Route
              path="/financial-reports"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Financial Reports - Coming Soon
                </div>
              }
            />
            <Route
              path="/payment-reminders"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Payment Reminder - Coming Soon
                </div>
              }
            />

            <Route
              path="/assignments"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Assignment - Coming Soon
                </div>
              }
            />
            <Route
              path="/faculty-schedule"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Schedule - Coming Soon
                </div>
              }
            />
            <Route
              path="/help"
              element={
                <div className="p-6 text-center text-muted-foreground">
                  Help & Support - Coming Soon
                </div>
              }
            />
          </Route>

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
