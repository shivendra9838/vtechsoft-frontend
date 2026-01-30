import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [showSecuritySettings, setShowSecuritySettings] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [loginActivity, setLoginActivity] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Simulate loading user data
    setTimeout(() => {
      // Mock projects data
      const mockProjects = [
        {
          id: 1,
          name: "E-commerce Platform Development",
          status: "In Progress",
          startDate: "2024-01-15",
          assignedTeam: ["Vivek Shukla", "Development Team"],
          description: "Building a modern e-commerce platform with React and Node.js"
        },
        {
          id: 2,
          name: "Mobile App Design",
          status: "Inquiry",
          startDate: "2024-01-20",
          assignedTeam: ["Design Team"],
          description: "UI/UX design for mobile application"
        }
      ];

      // Mock login activity
      const mockLoginActivity = [
        { time: "2024-01-30 10:30 AM", device: "Chrome on Windows", location: "Noida, India" },
        { time: "2024-01-29 02:15 PM", device: "Safari on iPhone", location: "Noida, India" },
        { time: "2024-01-28 09:45 AM", device: "Chrome on Windows", location: "Noida, India" }
      ];

      setProjects(mockProjects);
      setLoginActivity(mockLoginActivity);
      setLoading(false);
    }, 1000);
  }, []);

  const calculatePasswordStrength = (password) => {
    if (!password) return 0;
    
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.length >= 12) strength += 25;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 12.5;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 12.5;
    
    return Math.min(strength, 100);
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
    
    if (name === "newPassword") {
      setPasswordStrength(calculatePasswordStrength(value));
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (passwordStrength < 50) {
      alert("Password is too weak. Please choose a stronger password.");
      return;
    }

    // Simulate password change
    alert("Password changed successfully!");
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    setPasswordStrength(0);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800 border-green-200";
      case "In Progress": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Inquiry": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 30) return "bg-red-500";
    if (passwordStrength < 60) return "bg-yellow-500";
    if (passwordStrength < 80) return "bg-blue-500";
    return "bg-green-500";
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength < 30) return "Weak";
    if (passwordStrength < 60) return "Fair";
    if (passwordStrength < 80) return "Good";
    return "Strong";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#2dd4bf] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-[#0f2942] to-[#1e4a6f] rounded-2xl p-8 text-white">
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {user?.name || "User"}! 👋
            </h1>
            <p className="text-slate-300 mb-4">
              Here's what's happening with your account and projects.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Account Status: Active</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-sm">Email: {user?.email || "user@example.com"}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Account Details */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#0f2942] mb-4">Account Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-[#0f2942] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Personal Information
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-slate-500">Full Name</span>
                  <p className="font-medium text-[#0f2942]">{user?.name || "Not available"}</p>
                </div>
                <div>
                  <span className="text-sm text-slate-500">Email Address</span>
                  <p className="font-medium text-[#0f2942]">{user?.email || "Not available"}</p>
                </div>
                <div>
                  <span className="text-sm text-slate-500">Account Type</span>
                  <p className="font-medium text-[#0f2942]">{user?.role || "User"}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-[#0f2942] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Account Activity
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-slate-500">Member Since</span>
                  <p className="font-medium text-[#0f2942]">
                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }) : "January 30, 2024"}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-slate-500">Last Login</span>
                  <p className="font-medium text-[#0f2942]">
                    {new Date().toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-slate-500">Account ID</span>
                  <p className="font-medium text-[#0f2942] text-sm font-mono">
                    {user?.id ? user.id.substring(0, 8) + '...' : 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#0f2942] mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <button
              onClick={() => setShowSecuritySettings(!showSecuritySettings)}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#2dd4bf]/40 transition-all duration-300 text-left"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0f2942] mb-2">Security Settings</h3>
              <p className="text-slate-600 text-sm">Manage your password and account security</p>
            </button>

            <Link
              to="/contact"
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#2dd4bf]/40 transition-all duration-300 text-left block"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0f2942] mb-2">Contact Support</h3>
              <p className="text-slate-600 text-sm">Get help from our support team</p>
            </Link>

            <Link
              to="/services"
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#2dd4bf]/40 transition-all duration-300 text-left block"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0f2942] mb-2">Browse Services</h3>
              <p className="text-slate-600 text-sm">Explore our service offerings</p>
            </Link>
          </div>
        </section>

        {/* Security Settings */}
        {showSecuritySettings && (
          <section className="mb-8">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#0f2942]">Security Settings</h2>
                <button
                  onClick={() => setShowSecuritySettings(false)}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Change Password */}
                <div>
                  <h3 className="text-lg font-semibold text-[#0f2942] mb-4">Change Password</h3>
                  <form onSubmit={handlePasswordSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Current Password
                      </label>
                      <input
                        type="password"
                        name="currentPassword"
                        value={passwordData.currentPassword}
                        onChange={handlePasswordChange}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        name="newPassword"
                        value={passwordData.newPassword}
                        onChange={handlePasswordChange}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] focus:border-transparent"
                        required
                      />
                      
                      {/* Password Strength Indicator */}
                      {passwordData.newPassword && (
                        <div className="mt-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-slate-600">Password Strength</span>
                            <span className="text-xs font-medium text-slate-700">{getPasswordStrengthText()}</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                              style={{ width: `${passwordStrength}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={passwordData.confirmPassword}
                        onChange={handlePasswordChange}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] focus:border-transparent"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-4 py-2 rounded-lg bg-[#2dd4bf] text-[#0f2942] font-semibold hover:bg-[#00c9b7] transition-colors"
                    >
                      Update Password
                    </button>
                  </form>
                </div>

                {/* Login Activity */}
                <div>
                  <h3 className="text-lg font-semibold text-[#0f2942] mb-4">Login Activity</h3>
                  <div className="space-y-3">
                    {loginActivity.map((activity, index) => (
                      <div key={index} className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-[#0f2942]">{activity.time}</span>
                          {index === 0 && (
                            <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-slate-600">
                          <div className="flex items-center gap-2 mb-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {activity.device}
                          </div>
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {activity.location}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full mt-4 px-4 py-2 rounded-lg border border-red-200 text-red-600 font-semibold hover:bg-red-50 transition-colors">
                    Logout from all devices
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#0f2942]">Your Projects</h2>
            <button
              onClick={() => {
                console.log('Start New Project clicked');
                navigate('/contact');
              }}
              className="inline-flex items-center px-4 py-2 rounded-lg bg-[#2dd4bf] text-[#0f2942] font-semibold hover:bg-[#00c9b7] transition-colors"
            >
              👉 Start New Project
            </button>
          </div>

          {projects.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-[#2dd4bf]/40"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-[#0f2942]">{project.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 text-sm mb-4">{project.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Started: {project.startDate}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Team: {project.assignedTeam.join(", ")}
                      </div>
                    </div>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="w-full px-4 py-2 rounded-lg border border-[#0f2942] text-[#0f2942] font-semibold hover:bg-[#0f2942] hover:text-white transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0f2942] mb-2">
                You haven't started a project yet. Let's build something!
              </h3>
              <p className="text-slate-600 mb-6">
                Ready to bring your ideas to life? Start your first project with us today.
              </p>
              <button
                onClick={() => {
                  console.log('Start New Project clicked - empty state');
                  navigate('/contact');
                }}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-[#2dd4bf] text-[#0f2942] font-semibold hover:bg-[#00c9b7] transition-colors"
              >
                👉 Start New Project
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#0f2942]">{selectedProject.name}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(selectedProject.status)}`}>
                  {selectedProject.status}
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 mb-2">Description</h3>
                  <p className="text-slate-700">{selectedProject.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 mb-2">Start Date</h3>
                    <p className="text-slate-700">{selectedProject.startDate}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 mb-2">Assigned Team</h3>
                    <p className="text-slate-700">{selectedProject.assignedTeam.join(", ")}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 mb-2">Project ID</h3>
                  <p className="text-slate-700 font-mono text-sm">#{selectedProject.id.toString().padStart(6, '0')}</p>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => {
                    navigate('/contact');
                    setSelectedProject(null);
                  }}
                  className="flex-1 px-4 py-2 rounded-lg bg-[#2dd4bf] text-[#0f2942] font-semibold hover:bg-[#00c9b7] transition-colors"
                >
                  Contact Team
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
