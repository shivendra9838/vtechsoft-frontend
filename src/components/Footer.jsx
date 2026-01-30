import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";

const footerLinks = {
  Company: [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ],
  Services: [
    { to: "/services", label: "Web Development" },
    { to: "/services", label: "Mobile Apps" },
    { to: "/services", label: "Cloud Solutions" },
    { to: "/services", label: "UI/UX Design" },
    { to: "/services", label: "DevOps" },
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    href: "https://linkedin.com/company/vtechsoft",
    label: "VTECHSOFT"
  },
  {
    name: "GitHub",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    href: "https://github.com/vtechsoft",
    label: "vtechsoft"
  },
  {
    name: "Instagram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
      </svg>
    ),
    href: "https://instagram.com/vtechsoft",
    label: "@vtechsoft"
  },
  {
    name: "Gmail",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    href: "mailto:vtechsoft9838@gmail.com",
    label: "vtechsoft9838@gmail.com"
  },
  {
    name: "Phone",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    ),
    href: "tel:+918052808612",
    label: "+91 8052808612"
  },
];

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  return (
    <footer className="relative overflow-hidden">
      {/* Premium Dark Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f]">
        <div className="absolute inset-0">
          {/* Subtle Tech Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(45, 212, 191, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(45, 212, 191, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          ></div>
          
          {/* Ambient Glow Effects */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#2dd4bf] rounded-full blur-3xl opacity-5"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00c9b7] rounded-full blur-3xl opacity-3"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-24">
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2dd4bf]/30 to-transparent"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
          {/* Brand Section - Premium Glassmorphism Card */}
          <div className="lg:col-span-1">
            <div className="group">
              {/* Glassmorphism Logo Card */}
              <div className="relative inline-flex items-center justify-center mb-8">
                {/* Subtle Teal Glow Behind Logo */}
                <div className="absolute inset-0 bg-[#2dd4bf] rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 scale-110"></div>
                
                {/* Glassmorphism Container */}
                <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
                  
                  {/* Logo Container */}
                  <Link to="/" className="relative block">
                    <Logo className="h-16 w-auto filter drop-shadow-xl brightness-110" />
                  </Link>
                </div>
              </div>

              {/* Company Name & Tagline */}
              <div className="text-center lg:text-left space-y-3">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  VTECHSOFT
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light max-w-xs">
                  Enterprise technology solutions for the modern digital landscape
                </p>
              </div>

              {/* Premium Badge */}
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2dd4bf]/10 border border-[#2dd4bf]/20">
                <div className="w-2 h-2 bg-[#2dd4bf] rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-[#2dd4bf] tracking-wide">ENTERPRISE GRADE</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-6 relative">
              Company
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#2dd4bf] to-transparent"></div>
            </h4>
            <ul className="space-y-4">
              {footerLinks.Company.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`relative text-sm transition-all duration-300 inline-flex items-center gap-2 ${
                      hoveredLink === to 
                        ? 'text-[#2dd4bf] translate-x-1' 
                        : 'text-slate-400 hover:text-slate-300'
                    }`}
                    onMouseEnter={() => setHoveredLink(to)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className={`transition-transform duration-300 ${
                      hoveredLink === to ? 'translate-x-1' : 'translate-x-0'
                    }`}>
                      {label}
                    </span>
                    {hoveredLink === to && (
                      <div className="absolute bottom-0 left-0 w-full h-px bg-[#2dd4bf]"></div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Icons */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-6 relative">
              Connect With Us
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#2dd4bf] to-transparent"></div>
            </h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`group relative flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 ${
                    hoveredSocial === social.name
                      ? 'border-[#2dd4bf] bg-[#2dd4bf]/10 shadow-lg shadow-[#2dd4bf]/30 scale-110'
                      : 'border-slate-600/50 bg-slate-900/30 backdrop-blur-sm hover:border-slate-500'
                  }`}
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  title={social.label}
                >
                  {/* Teal Hover Glow */}
                  <div className={`absolute inset-0 rounded-full bg-[#2dd4bf] blur-md opacity-0 transition-opacity duration-300 ${
                    hoveredSocial === social.name ? 'opacity-20' : ''
                  }`}></div>
                  
                  {/* Icon */}
                  <div className={`relative z-10 transition-colors duration-300 ${
                    hoveredSocial === social.name ? 'text-[#2dd4bf]' : 'text-slate-400'
                  }`}>
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Bottom Section */}
        <div className="relative mt-20 pt-8 border-t border-slate-700/30">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2dd4bf]/20 to-transparent"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-slate-500 font-light">
                © {new Date().getFullYear()} VTECHSOFT Technology. All rights reserved.
              </p>
            </div>
            
            {/* Enterprise CTA */}
            <div className="flex items-center gap-6">
              <a
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2dd4bf] to-[#00c9b7] text-[#0a192f] font-medium text-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#2dd4bf]/25"
              >
                <span>Get Started</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2dd4bf]/30 to-transparent"></div>
    </footer>
  );
}
