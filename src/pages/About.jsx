import { useState } from "react";
import { Link } from "react-router-dom";

const values = [
  { title: "Innovation", desc: "We stay at the forefront of technology to deliver cutting-edge solutions." },
  { title: "Quality", desc: "Every line of code and every design decision reflects our commitment to excellence." },
  { title: "Partnership", desc: "We grow with our clients, treating their success as our success." },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "10+", label: "Years Experience" },
  { value: "30+", label: "Team Members" },
];

const companies = [
  {
    name: "Reltio",
    description: "Master Data Management platform - Built scalable data solutions for enterprise clients, handling millions of records with real-time processing and advanced analytics capabilities.",
    industry: "Data Management",
    duration: "2+ years",
    technologies: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    name: "Deloitte",
    description: "Consulting and advisory services - Developed custom enterprise applications for financial consulting, risk assessment, and client management systems with advanced security features.",
    industry: "Professional Services",
    duration: "3+ years",
    technologies: ["Angular", "Java", "PostgreSQL", "Azure"]
  },
  {
    name: "VTPL",
    description: "Transport and logistics solutions - Created comprehensive fleet management system with real-time tracking, route optimization, and automated reporting for transportation companies.",
    industry: "Logistics",
    duration: "1+ years",
    technologies: ["Vue.js", "Python", "MySQL", "Docker"]
  },
  {
    name: "and more",
    description: "Various startups and enterprises - Delivered diverse solutions including e-commerce platforms, healthcare systems, educational portals, and custom CRM applications across multiple industries.",
    industry: "Various",
    duration: "Ongoing",
    technologies: ["React", "Node.js", "Python", "Cloud Platforms"]
  }
];

export default function About() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] text-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">About VTECHSOFT</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            We are a technology company focused on delivering software solutions that drive real business outcomes.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0f2942] mb-6">Our Story</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                VTECHSOFT Technology was founded with a simple mission: to bridge the gap between great ideas and great software. Our team combines deep technical expertise with a client-first mindset to build products that matter.
              </p>
              <p className="text-slate-600 leading-relaxed">
                From web and mobile apps to cloud infrastructure and digital strategy, we help businesses of all sizes transform their operations and reach new audiences. We've delivered projects for teams and companies such as <span className="font-semibold text-[#0f2942]">Reltio</span>, <span className="font-semibold text-[#0f2942]">Deloitte</span>, <span className="font-semibold text-[#0f2942]">VTPL</span>, and more. The circuit in our logo reflects our belief in connected, reliable systems—both in code and in partnerships.
              </p>

              <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-sm font-semibold text-[#0f2942] mb-3">Projects delivered for</div>
                <div className="flex flex-wrap gap-3">
                  {companies.map((company) => (
                    <button
                      key={company.name}
                      onClick={() => setSelectedCompany(company)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                        selectedCompany?.name === company.name
                          ? "bg-[#0f2942] text-white border-[#0f2942] shadow-md"
                          : "bg-white border-slate-200 text-slate-700 hover:border-[#2dd4bf] hover:text-[#0f2942] hover:shadow-sm"
                      }`}
                    >
                      {company.name}
                    </button>
                  ))}
                </div>

                {/* Company Details Modal/Card */}
                {selectedCompany && (
                  <div className="mt-6 p-6 rounded-2xl bg-white border border-[#2dd4bf]/20 shadow-lg animate-in slide-in-from-top duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#0f2942] mb-1">{selectedCompany.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            {selectedCompany.industry}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {selectedCompany.duration}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedCompany(null)}
                        className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                      >
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <p className="text-slate-700 leading-relaxed mb-4">
                      {selectedCompany.description}
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-[#0f2942] mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCompany.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg text-xs font-medium bg-[#2dd4bf]/10 text-[#0f2942] border border-[#2dd4bf]/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#0f2942] to-[#1e4a6f]">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2942]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose VTECHSOFT */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2942] mb-4">Why Choose VTECHSOFT</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Trusted technology partner focused on quality, clarity, and long-term success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Client-First Approach */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#2dd4bf]/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0f2942] mb-4 group-hover:text-[#1e4a6f] transition-colors">Client-First Approach</h3>
              <p className="text-slate-600 leading-relaxed">
                We put our clients at the center of everything we do. Every decision—from architecture to design—is aligned with your business goals, users, and long-term growth. We listen carefully, adapt quickly, and build solutions that truly solve problems.
              </p>
            </div>

            {/* Transparent Communication */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#2dd4bf]/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0f2942] mb-4 group-hover:text-[#1e4a6f] transition-colors">Transparent Communication</h3>
              <p className="text-slate-600 leading-relaxed">
                Clear and honest communication is a core part of our process. We provide regular updates, realistic timelines, and full visibility into progress, ensuring you always know where your project stands.
              </p>
            </div>

            {/* Secure & Scalable Architecture */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#2dd4bf]/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0f2942] mb-4 group-hover:text-[#1e4a6f] transition-colors">Secure & Scalable Architecture</h3>
              <p className="text-slate-600 leading-relaxed">
                Security and scalability are built into our solutions from day one. We follow best practices in secure coding, data protection, and cloud-ready architecture so your product remains reliable as your business grows.
              </p>
            </div>

            {/* On-Time Delivery */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#2dd4bf]/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0f2942] mb-4 group-hover:text-[#1e4a6f] transition-colors">On-Time Delivery</h3>
              <p className="text-slate-600 leading-relaxed">
                We respect deadlines and deliver projects on schedule without compromising quality. Our structured workflow and experienced team ensure efficient execution at every stage.
              </p>
            </div>

            {/* Long-Term Technical Support */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#2dd4bf]/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0f2942] mb-4 group-hover:text-[#1e4a6f] transition-colors">Long-Term Technical Support</h3>
              <p className="text-slate-600 leading-relaxed">
                Our partnership doesn't end at launch. We provide ongoing support, maintenance, and optimization to ensure your product continues to perform, scale, and evolve over time.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed">
              We don't just build software — we build reliable digital foundations that support long-term business success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2942] mb-6">Our Vision</h2>
            <p className="text-xl text-slate-700 font-medium leading-relaxed">
              Our vision is to become a globally trusted technology partner by creating intelligent, secure, and scalable software solutions that stand the test of time.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-200 p-10 shadow-sm">
              <p className="text-slate-700 leading-relaxed mb-6">
                At VTECHSOFT, we envision a future where technology empowers businesses to innovate faster, operate smarter, and grow sustainably. We aim to build software that is not only functional but also future-ready—designed to adapt as technology and business needs evolve.
              </p>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                We believe long-term success comes from strong partnerships, continuous innovation, and a commitment to quality. By combining modern technologies with thoughtful design and reliable engineering, we strive to create digital products that make a lasting impact.
              </p>

              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#0f2942]/5 to-transparent border border-[#0f2942]/10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-[#0f2942] mb-2">Innovation</h4>
                  <p className="text-sm text-slate-600">Cutting-edge solutions that drive business forward</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#0f2942]/5 to-transparent border border-[#0f2942]/10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-[#0f2942] mb-2">Quality</h4>
                  <p className="text-sm text-slate-600">Reliable solutions built with best practices</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#0f2942]/5 to-transparent border border-[#0f2942]/10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-[#0f2942] mb-2">Partnership</h4>
                  <p className="text-sm text-slate-600">Long-term relationships built on trust and success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work (enhanced) */}
      <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-28 w-[520px] h-[520px] bg-[#2dd4bf] rounded-full blur-3xl opacity-10" />
          <div className="absolute -bottom-28 -right-28 w-[520px] h-[520px] bg-[#00c9b7] rounded-full blur-3xl opacity-10" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2942]">How We Work</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-3">
              A structured workflow that keeps communication clear and results high-quality—every time.
            </p>
          </div>

          {(() => {
            const steps = [
              {
                title: "INSIGHT",
                top: "Customer-centric delivery aligned to requirements",
                bottom: "Understand goals, users & success metrics",
                color: "#06b6d4",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
              },
              {
                title: "ANALYSIS",
                top: "Examine every element and structure of the project",
                bottom: "Define scope, timeline & risks",
                color: "#10b981",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 19h16M7 16V8m5 8V5m5 11v-6" />
                  </svg>
                ),
              },
              {
                title: "BRAINSTORMING",
                top: "Experts collaborate to craft the right solution",
                bottom: "Explore options & finalize approach",
                color: "#84cc16",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3a7 7 0 00-4 12.74V19a1 1 0 001 1h6a1 1 0 001-1v-3.26A7 7 0 0012 3zM9 21h6" />
                  </svg>
                ),
              },
              {
                title: "DESIGN",
                top: "Creative team designs the product experience",
                bottom: "UI/UX + architecture blueprint",
                color: "#f59e0b",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 20h9" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
                  </svg>
                ),
              },
              {
                title: "DEVELOPMENT",
                top: "Developers build the solution with best practices",
                bottom: "Build, integrate & review",
                color: "#f97316",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 9l3 3-3 3m8-6l-3 3 3 3" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" />
                  </svg>
                ),
              },
              {
                title: "TESTING",
                top: "Rigorous testing before launch",
                bottom: "QA, performance & security checks",
                color: "#ef4444",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5h6m-6 4h6m-7 4h8m-7 4h6" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
                  </svg>
                ),
              },
            ];

            return (
              <>
                {/* Desktop: premium connected timeline */}
                <div className="hidden lg:block">
                  <div className="relative rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(45,212,191,0.10),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(15,41,66,0.08),transparent_45%)]" />
                    <div className="relative p-10">
                      {/* Line */}
                      <div className="absolute left-10 right-10 top-[154px] h-[8px] bg-slate-200 rounded-full" />
                      <div
                        className="absolute left-10 right-10 top-[154px] h-[8px] rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg,#06b6d4 0%,#10b981 20%,#84cc16 40%,#f59e0b 60%,#f97316 80%,#ef4444 100%)",
                          opacity: 0.35,
                        }}
                      />

                      <div className="grid grid-cols-6 gap-6">
                        {steps.map((s, idx) => (
                          <div
                            key={s.title}
                            className="group text-center"
                            style={{ "--step": s.color }}
                          >
                            <div className="min-h-[64px] text-slate-600 text-sm leading-relaxed">
                              {s.top}
                            </div>

                            {/* Step pill */}
                            <div className="mt-5 flex items-center justify-center">
                              <div
                                className="w-[168px] py-3 rounded-2xl border bg-white font-extrabold tracking-wide text-[#0f2942] shadow-sm group-hover:shadow-md group-hover:-translate-y-0.5 transition-all"
                                style={{ borderColor: s.color }}
                              >
                                {s.title}
                              </div>
                            </div>

                            {/* Node + connector */}
                            <div className="mt-5 flex items-center justify-center">
                              <div className="relative">
                                <div
                                  className="w-10 h-10 rounded-2xl border bg-white flex items-center justify-center shadow-sm"
                                  style={{ borderColor: s.color, color: s.color }}
                                >
                                  {s.icon}
                                </div>
                                <div
                                  className="absolute left-1/2 -translate-x-1/2 -top-[26px] w-3 h-3 rounded-full"
                                  style={{ backgroundColor: s.color }}
                                />
                              </div>
                            </div>

                            <div className="mt-5 text-slate-600 text-sm leading-relaxed">
                              {s.bottom}
                            </div>

                            {/* Small step index */}
                            <div className="mt-3 text-xs font-semibold text-slate-400">
                              Step {idx + 1}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile/Tablet: vertical timeline with icons */}
                <div className="lg:hidden">
                  <div className="relative pl-6">
                    <div className="absolute left-2 top-2 bottom-2 w-[3px] bg-slate-200 rounded-full" />
                    <div className="space-y-5">
                      {steps.map((s, idx) => (
                        <div key={s.title} className="relative">
                          <div
                            className="absolute -left-[2px] top-6 w-4 h-4 rounded-full border-4 bg-white"
                            style={{ borderColor: s.color }}
                          />
                          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <div className="text-xs font-semibold text-slate-500">Step {idx + 1}</div>
                                <div className="text-lg font-extrabold mt-1" style={{ color: s.color }}>
                                  {s.title}
                                </div>
                                <div className="text-sm text-slate-600 mt-2">{s.top}</div>
                              </div>
                              <div
                                className="w-12 h-12 rounded-2xl border bg-slate-50 flex items-center justify-center"
                                style={{ borderColor: `${s.color}55`, color: s.color }}
                              >
                                {s.icon}
                              </div>
                            </div>
                            <div className="mt-4 text-sm text-slate-600">{s.bottom}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0f2942] text-center mb-4">Our Values</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">
            The principles that guide how we work and what we deliver.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#2dd4bf]/40 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0f2942] mb-3 group-hover:text-[#1e4a6f] transition-colors">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-16 -left-24 w-[520px] h-[520px] bg-[#2dd4bf] rounded-full blur-3xl opacity-10" />
          <div className="absolute -bottom-16 -right-24 w-[520px] h-[520px] bg-[#00c9b7] rounded-full blur-3xl opacity-10" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Impact by the Numbers</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We're proud of the results we've delivered for our clients across various industries.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 lg:gap-12 text-center">
            {stats.map((item, i) => (
              <div key={i} className="group">
                <div className="text-5xl sm:text-6xl font-bold text-[#2dd4bf] mb-3 group-hover:scale-110 transition-transform duration-300">{item.value}</div>
                <div className="text-slate-300 font-medium text-lg">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#0f2942] mb-4">Want to work with us?</h2>
          <p className="text-slate-600 mb-8">
            Explore our services or get in touch to discuss your next project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-[#2dd4bf] text-[#0f2942] hover:bg-[#00c9b7] transition-colors"
            >
              View Services
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold border-2 border-[#0f2942] text-[#0f2942] hover:bg-[#0f2942] hover:text-white transition-colors"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
