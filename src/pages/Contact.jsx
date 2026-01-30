import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { contactAPI } from "../api/config";

export default function Contact() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // Pre-fill form with user data when logged in
  useEffect(() => {
    if (user) {
      setForm(prev => ({
        ...prev,
        name: user.name || "",
        email: user.email || ""
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setError("");
    setSent(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if user is logged in
    if (!user) {
      setError("Please login to send a message.");
      return;
    }
    
    setError("");
    setSent(false);
    if (!form.name || !form.email || !form.phone || !form.subject || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const response = await contactAPI.submit(form);
      setSent(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setError(err.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  const address = "C-56A/1, Sector-62, Noida, UP";
  const mapQuery = encodeURIComponent(address);

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-16 -left-24 w-[520px] h-[520px] bg-[#2dd4bf] rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-16 -right-24 w-[520px] h-[520px] bg-[#00c9b7] rounded-full blur-3xl opacity-15" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Let's talk about your idea. We'll help you plan, build, and launch with confidence. Our team is ready to transform your vision into reality.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {["Free Consultation", "24h Response", "Expert Team", "Quality Guaranteed"].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#0f2942] mb-8">Get in Touch With Us</h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                We're here to help you bring your ideas to life. Reach out through any of the channels below and we'll get back to you within 24 hours.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 p-6 hover:shadow-lg hover:border-[#2dd4bf]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="text-xs font-semibold text-[#2dd4bf] uppercase tracking-wider mb-2">
                    Founder & CEO
                  </div>
                  <div className="text-lg font-semibold text-[#0f2942]">Vivek Shukla</div>
                  <p className="text-sm text-slate-600 mt-2">
                    Leading VTECHSOFT with expertise and innovation
                  </p>
                </div>

                <div className="rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 p-6 hover:shadow-lg hover:border-[#2dd4bf]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-xs font-semibold text-[#2dd4bf] uppercase tracking-wider mb-2">
                    Email Us
                  </div>
                  <div className="text-lg font-semibold text-[#0f2942]">vtechsoft9838@gmail.com</div>
                  <p className="text-sm text-slate-600 mt-2">We reply within 24 hours</p>
                </div>

                <div className="rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 p-6 hover:shadow-lg hover:border-[#2dd4bf]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-xs font-semibold text-[#2dd4bf] uppercase tracking-wider mb-2">
                    Call Us
                  </div>
                  <a 
                    href="tel:+918052808612" 
                    className="text-lg font-semibold text-[#0f2942] hover:text-[#2dd4bf] transition-colors"
                  >
                    +91 8052808612
                  </a>
                  <p className="text-sm text-slate-600 mt-2">Mon–Sat, 10:00 AM – 6:00 PM</p>
                  <div className="mt-3">
                    <a 
                      href="https://wa.me/918052808612" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.297.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 p-6 hover:shadow-lg hover:border-[#2dd4bf]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-xs font-semibold text-[#2dd4bf] uppercase tracking-wider mb-2">
                    Office Location
                  </div>
                  <div className="text-lg font-semibold text-[#0f2942]">Noida, UP</div>
                  <p className="text-sm text-slate-600 mt-2">{address}</p>
                </div>
              </div>

              <div className="mt-8 rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-lg">
                <div className="p-6 flex items-center justify-between gap-4 bg-gradient-to-r from-[#0f2942] to-[#1e4a6f] text-white">
                  <div>
                    <div className="text-sm font-semibold mb-1">Visit Our Office</div>
                    <div className="text-xs text-slate-300">{address}</div>
                  </div>
                  <a
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold bg-[#2dd4bf] text-[#0f2942] hover:bg-[#00c9b7] transition-colors text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    href={`https://www.google.com/maps?q=${mapQuery}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Directions
                  </a>
                </div>
                <iframe
                  title="VTECHSOFT location map"
                  className="w-full h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold border-2 border-[#0f2942] text-[#0f2942] hover:bg-[#0f2942] hover:text-white transition-all duration-300"
                >
                  Browse Services
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-[#0f2942] text-white hover:bg-[#1e4a6f] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Create Account
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-xl p-8">
              <h2 className="text-3xl font-bold text-[#0f2942] mb-4">Send Us a Message</h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                Tell us what you want to build. We'll respond with a clear plan and next steps within 24 hours.
              </p>

              {/* Login Required Prompt */}
              {!user && (
                <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#0f2942] mb-2">Login Required</h3>
                      <p className="text-slate-600 mb-4">
                        Please login to your account to send us a message. This helps us provide better support and track your inquiries.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Link
                          to="/login"
                          className="inline-flex items-center px-4 py-2 rounded-lg font-semibold bg-[#2dd4bf] text-[#0f2942] hover:bg-[#00c9b7] transition-colors"
                        >
                          Sign In
                        </Link>
                        <Link
                          to="/register"
                          className="inline-flex items-center px-4 py-2 rounded-lg font-semibold border border-[#0f2942] text-[#0f2942] hover:bg-[#0f2942] hover:text-white transition-colors"
                        >
                          Create Account
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {error}
                </div>
              )}
              {sent && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {/* Show form only if user is logged in */}
              {user ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0f2942] mb-3" htmlFor="name">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        disabled={!!user}
                        className={`w-full px-4 py-3 pl-12 rounded-xl border transition-all duration-300 ${
                          user 
                            ? 'border-slate-200 bg-slate-50 text-slate-600 cursor-not-allowed' 
                            : 'border-slate-300 bg-white text-[#0f2942] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] focus:border-transparent'
                        }`}
                        placeholder="John Doe"
                        required
                      />
                      <svg className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {user && (
                        <div className="absolute right-4 top-3.5">
                          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    {user && (
                      <p className="text-xs text-slate-500 mt-1">Using your account name</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0f2942] mb-3" htmlFor="email">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        disabled={!!user}
                        className={`w-full px-4 py-3 pl-12 rounded-xl border transition-all duration-300 ${
                          user 
                            ? 'border-slate-200 bg-slate-50 text-slate-600 cursor-not-allowed' 
                            : 'border-slate-300 bg-white text-[#0f2942] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] focus:border-transparent'
                        }`}
                        placeholder="john@example.com"
                        required
                      />
                      <svg className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {user && (
                        <div className="absolute right-4 top-3.5">
                          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    {user && (
                      <p className="text-xs text-slate-500 mt-1">Using your account email</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0f2942] mb-3" htmlFor="phone">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pl-12 rounded-xl border border-slate-300 bg-white text-[#0f2942] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] focus:border-transparent transition-all duration-300"
                      placeholder="+91 8052808612"
                      required
                    />
                    <svg className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0f2942] mb-3" htmlFor="subject">
                    Subject *
                  </label>
                  <div className="relative">
                    <input
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pl-12 rounded-xl border border-slate-300 bg-white text-[#0f2942] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] focus:border-transparent transition-all duration-300"
                      placeholder="e.g. Website Development, Mobile App, Backend API"
                      required
                    />
                    <svg className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0f2942] mb-3" htmlFor="message">
                    Project Details *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pl-12 rounded-xl border border-slate-300 bg-white text-[#0f2942] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project requirements, timeline, budget, and any specific features you need..."
                      required
                    />
                    <svg className="absolute left-4 top-4 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-xl font-semibold bg-gradient-to-r from-[#2dd4bf] to-[#00c9b7] text-[#0f2942] hover:from-[#00c9b7] hover:to-[#2dd4bf] focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  )}
                </button>

                <p className="text-xs text-slate-500 text-center">
                  By sending this message, you agree to be contacted by VTECHSOFT Technology regarding your project inquiry.
                </p>
              </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <p className="text-slate-500 mb-4">
                    Please login to access the contact form and send us a message.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

