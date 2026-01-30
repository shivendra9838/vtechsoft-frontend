import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "../components/Logo";

export default function Login() {
  const navigate = useNavigate();
  const { login, user } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Redirect if already logged in
  if (user) {
    navigate("/");
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await login(form.email, form.password);
      navigate("/");
    } catch (err) {
      setError(err.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center py-16 px-4 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-16 -left-24 w-[520px] h-[520px] bg-[#2dd4bf] rounded-full blur-3xl opacity-10" />
          <div className="absolute -bottom-16 -right-24 w-[520px] h-[520px] bg-[#00c9b7] rounded-full blur-3xl opacity-10" />
        </div>
        <div className="relative w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block mb-6">
              <Logo className="h-20 mx-auto" />
            </Link>
            <h1 className="text-3xl font-bold text-[#0f2942] mb-2">Welcome Back</h1>
            <p className="text-slate-600">
              Sign in to your account to continue your journey with VTECHSOFT
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Don't have an account?{" "}
              <Link to="/register" className="font-semibold text-[#2dd4bf] hover:text-[#1e4a6f] transition-colors">
                Create one here
              </Link>
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 space-y-6"
          >
            {error && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#0f2942] mb-3">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 pl-12 rounded-xl border border-slate-300 bg-white text-[#0f2942] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] focus:border-transparent transition-all duration-300"
                />
                <svg className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-[#0f2942] mb-3">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 pl-12 rounded-xl border border-slate-300 bg-white text-[#0f2942] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] focus:border-transparent transition-all duration-300"
                />
                <svg className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-3 text-slate-600 cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300 text-[#2dd4bf] focus:ring-[#2dd4bf] w-4 h-4" />
                <span>Remember me</span>
              </label>
              <a href="#" className="font-semibold text-[#2dd4bf] hover:text-[#1e4a6f] transition-colors">
                Forgot password?
              </a>
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
                  Signing in...
                </span>
              ) : (
                "Sign In to Your Account"
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
