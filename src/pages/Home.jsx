import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { SERVICES } from "../data/services";

export default function Home() {
  const featured = [
    SERVICES.find((s) => s.slug === "web-development"),
    SERVICES.find((s) => s.slug === "mobile-development"),
    SERVICES.find((s) => s.slug === "cloud-devops"),
    SERVICES.find((s) => s.slug === "api-backend"),
  ].filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2942] via-[#12385a] to-[#0f2942] text-white">
        <div className="absolute inset-0">
          <div className="absolute -top-16 -left-24 w-[520px] h-[520px] bg-[#2dd4bf] rounded-full blur-3xl opacity-25" />
          <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] bg-[#00c9b7] rounded-full blur-3xl opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(45,212,191,0.15),transparent_40%),radial-gradient(circle_at_60%_80%,rgba(255,255,255,0.08),transparent_40%)]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#2dd4bf]" />
                <span className="text-sm text-slate-200">
                  Web • Mobile • Cloud • Backend • UI/UX
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Build a <span className="text-[#2dd4bf]">modern</span> digital product with VTECHSOFT
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
                We design and develop high-quality websites, apps, and backend systems—fast, secure, and scalable—so your business grows with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold bg-[#2dd4bf] text-[#0f2942] hover:bg-[#00c9b7] transition-colors shadow-lg"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold border-2 border-white/60 text-white hover:bg-white/10 transition-colors"
                >
                  Explore Services
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
                {[
                  { v: "50+", l: "Projects" },
                  { v: "10+", l: "Years" },
                  { v: "24h", l: "Response" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-2xl font-bold text-white">{s.v}</div>
                    <div className="text-xs text-slate-300 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visuals */}
            <div className="relative">
              <div className="absolute -inset-6 bg-white/5 border border-white/10 rounded-3xl blur-xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <Logo className="h-14 opacity-95" />
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#2dd4bf]/20 text-[#2dd4bf] border border-[#2dd4bf]/30">
                      Premium Quality
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {featured.slice(0, 4).map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="group rounded-2xl border border-white/10 bg-[#0b1f33]/40 overflow-hidden hover:border-[#2dd4bf]/40 transition-colors"
                      >
                        <div className="h-28 bg-gradient-to-br from-[#0f2942] to-[#1e4a6f]">
                          <img
                            src={s.image}
                            alt=""
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4">
                          <div className="text-sm font-semibold text-white">{s.title}</div>
                          <div className="text-xs text-slate-300 mt-1">View details →</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-16 -left-24 w-[520px] h-[520px] bg-[#2dd4bf] rounded-full blur-3xl opacity-5" />
          <div className="absolute -bottom-16 -right-24 w-[520px] h-[520px] bg-[#00c9b7] rounded-full blur-3xl opacity-5" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0f2942] mb-6">Trusted by Leading Companies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We're proud to partner with innovative companies across industries to deliver exceptional digital solutions that drive business growth.
            </p>
          </div>
          
          {/* Main Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
            {[
              { 
                name: "Reltio", 
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Reltio_logo.svg/2560px-Reltio_logo.svg.png",
                fallback: "https://ui-avatars.com/api/?name=Reltio&background=0f2942&color=2dd4bf&size=128&bold=true",
                description: "Data Integration Platform"
              },
              { 
                name: "Deloitte", 
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Deloitte.svg/2560px-Deloitte.svg.png",
                fallback: "https://ui-avatars.com/api/?name=Deloitte&background=0f2942&color=2dd4bf&size=128&bold=true",
                description: "Professional Services"
              },
              { 
                name: "VTPL", 
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Vtpl_logo.svg/2560px-Vtpl_logo.svg.png",
                fallback: "https://ui-avatars.com/api/?name=VTPL&background=0f2942&color=2dd4bf&size=128&bold=true",
                description: "Engineering Solutions"
              },
              { 
                name: "Microsoft", 
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg",
                fallback: "https://ui-avatars.com/api/?name=Microsoft&background=0f2942&color=2dd4bf&size=128&bold=true",
                description: "Technology Partner"
              },
              { 
                name: "Amazon", 
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazon/amazon-original.svg",
                fallback: "https://ui-avatars.com/api/?name=Amazon&background=0f2942&color=2dd4bf&size=128&bold=true",
                description: "Cloud Services"
              },
              { 
                name: "Google", 
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
                fallback: "https://ui-avatars.com/api/?name=Google&background=0f2942&color=2dd4bf&size=128&bold=true",
                description: "Digital Solutions"
              },
              { 
                name: "Apple", 
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
                fallback: "https://ui-avatars.com/api/?name=Apple&background=0f2942&color=2dd4bf&size=128&bold=true",
                description: "Mobile Development"
              },
              { 
                name: "Meta", 
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/meta/meta-original.svg",
                fallback: "https://ui-avatars.com/api/?name=Meta&background=0f2942&color=2dd4bf&size=128&bold=true",
                description: "Social Media Solutions"
              },
              { 
                name: "Accenture", 
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Accenture.svg/2560px-Accenture.svg.png",
                fallback: "https://ui-avatars.com/api/?name=Accenture&background=0f2942&color=2dd4bf&size=128&bold=true",
                description: "Consulting Services"
              },
              { 
                name: "IBM", 
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
                fallback: "https://ui-avatars.com/api/?name=IBM&background=0f2942&color=2dd4bf&size=128&bold=true",
                description: "Enterprise Solutions"
              },
              { 
                name: "Oracle", 
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Oracle_logo.svg/2560px-Oracle_logo.svg.png",
                fallback: "https://ui-avatars.com/api/?name=Oracle&background=0f2942&color=2dd4bf&size=128&bold=true",
                description: "Database Solutions"
              }
            ].map((partner, index) => (
              <div 
                key={partner.name} 
                className="group relative bg-white rounded-2xl border border-slate-200 p-6 hover:border-[#2dd4bf]/40 hover:shadow-xl hover:shadow-[#2dd4bf]/10 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#2dd4bf] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {partner.description}
                  </div>
                </div>
                <div className="flex items-center justify-center h-20">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = partner.fallback;
                    }}
                    className="h-16 w-16 md:h-20 md:w-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110" 
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-semibold text-[#0f2942] group-hover:text-[#2dd4bf] transition-colors">
                    {partner.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              { number: "500+", label: "Projects Delivered", icon: "🚀" },
              { number: "100+", label: "Happy Clients", icon: "😊" },
              { number: "50+", label: "Team Members", icon: "👥" },
              { number: "8+", label: "Years Experience", icon: "⭐" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-[#2dd4bf]/40 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#0f2942] mb-1">{stat.number}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-[#2dd4bf] to-[#00c9b7] text-[#0f2942] hover:from-[#00c9b7] hover:to-[#2dd4bf] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Join Our Success Stories
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold border-2 border-[#0f2942] text-[#0f2942] hover:bg-[#0f2942] hover:text-white transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2942] text-center mb-4">
            What We Offer
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">
            End-to-end technology services tailored to your business needs.
          </p>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              SERVICES.find((s) => s.slug === "web-development"),
              SERVICES.find((s) => s.slug === "cloud-devops"),
              SERVICES.find((s) => s.slug === "consulting-strategy"),
            ]
              .filter(Boolean)
              .map((s, i) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#2dd4bf]/40 hover:shadow-xl hover:shadow-[#2dd4bf]/5 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#0f2942] to-[#1e4a6f]">
                      <svg className="w-6 h-6 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-[#2dd4bf] group-hover:text-[#1e4a6f] transition-colors">
                      View →
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0f2942] mb-3">
                    {i === 0 ? "Web & Mobile Development" : s.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {i === 0
                      ? "Custom web and mobile applications built with modern frameworks and great UX."
                      : s.desc}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Featured services (image-heavy) */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2942]">Featured Services</h2>
              <p className="text-slate-600 mt-2 max-w-2xl">
                Click any service to see full details, deliverables, process, FAQs, and tech stack.
              </p>
            </div>
            <Link to="/services" className="text-sm font-semibold text-[#2dd4bf] hover:text-[#1e4a6f]">
              View all services →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featured.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group rounded-3xl overflow-hidden border border-slate-200 bg-white hover:border-[#2dd4bf]/40 hover:shadow-xl hover:shadow-[#2dd4bf]/5 transition-all duration-300"
              >
                <div className="h-56 bg-gradient-to-br from-[#0f2942] to-[#1e4a6f]">
                  <img
                    src={s.image}
                    alt={`${s.title} illustration`}
                    className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#0f2942] group-hover:text-[#1e4a6f] transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-slate-600 mt-2">{s.short}</p>
                    </div>
                    <span className="text-sm font-semibold text-[#2dd4bf]">Details →</span>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.highlights.slice(0, 4).map((h) => (
                      <span
                        key={h}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-50">
              <div className="h-64 bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-6 w-full max-w-lg">
                  {[
                    { t: "Clean UI", d: "Modern design that converts" },
                    { t: "Secure", d: "Best-practice auth & validation" },
                    { t: "Fast", d: "Performance-first development" },
                    { t: "Scalable", d: "Architecture ready to grow" },
                  ].map((c) => (
                    <div key={c.t} className="rounded-2xl bg-white/10 border border-white/10 p-5">
                      <div className="text-white font-semibold">{c.t}</div>
                      <div className="text-slate-300 text-sm mt-1">{c.d}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#0f2942]">Built for business outcomes</h3>
                <p className="text-slate-600 mt-2">
                  We focus on clarity, quality, and delivery. You get production-ready work with strong communication and predictable timelines.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2942]">Why companies choose us</h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                From startups to established teams, we help deliver products that are reliable, maintainable, and beautiful.
                Our approach blends modern engineering with practical execution.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Weekly updates", d: "Clear progress and checkpoints." },
                  { t: "Best practices", d: "Security, performance, and clean code." },
                  { t: "Transparent scope", d: "No surprises in delivery." },
                  { t: "Long-term support", d: "We help after launch too." },
                ].map((b) => (
                  <div key={b.t} className="p-5 rounded-2xl border border-slate-200 bg-slate-50">
                    <div className="font-semibold text-[#0f2942]">{b.t}</div>
                    <div className="text-sm text-slate-600 mt-1">{b.d}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-[#0f2942] text-white hover:bg-[#1e4a6f] transition-colors"
                >
                  Talk to us
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold border-2 border-[#0f2942] text-[#0f2942] hover:bg-[#0f2942] hover:text-white transition-colors"
                >
                  Read our story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2942] mb-4">Trusted by Leading Companies</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We're proud to partner with innovative companies across industries to deliver exceptional digital solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              { 
                name: "Reltio", 
                logo: "https://cdn.logo.com/hottag/logo-reltio.svg",
                fallback: "https://ui-avatars.com/api/?name=Reltio&background=0f2942&color=2dd4bf&size=128&bold=true"
              },
              { 
                name: "Deloitte", 
                logo: "https://cdn.logo.com/hottag/logo-deloitte.svg",
                fallback: "https://ui-avatars.com/api/?name=Deloitte&background=0f2942&color=2dd4bf&size=128&bold=true"
              },
              { 
                name: "VTPL", 
                logo: "https://ui-avatars.com/api/?name=VTPL&background=0f2942&color=2dd4bf&size=128&bold=true",
                fallback: "https://ui-avatars.com/api/?name=VTPL&background=0f2942&color=2dd4bf&size=128&bold=true"
              },
              { 
                name: "Microsoft", 
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg",
                fallback: "https://ui-avatars.com/api/?name=Microsoft&background=0f2942&color=2dd4bf&size=128&bold=true"
              },
              { 
                name: "Amazon", 
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazon/amazon-original.svg",
                fallback: "https://ui-avatars.com/api/?name=Amazon&background=0f2942&color=2dd4bf&size=128&bold=true"
              },
              { 
                name: "Google", 
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
                fallback: "https://ui-avatars.com/api/?name=Google&background=0f2942&color=2dd4bf&size=128&bold=true"
              },
            ].map((partner) => (
              <div key={partner.name} className="flex items-center justify-center p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#2dd4bf]/40 hover:shadow-lg transition-all duration-300">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = partner.fallback;
                  }}
                  className="h-12 w-12 md:h-16 md:w-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2942] text-center mb-4">What Our Clients Say</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mt-3 mb-12">
            Don't just take our word for it. Here's what our valued clients have to say about working with us.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                q: "VTECHSOFT transformed our business with a cutting-edge web application. Their attention to detail and commitment to excellence is unmatched. The team delivered beyond our expectations.",
                n: "Sarah Johnson",
                c: "CTO",
                company: "TechCorp Solutions",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
                rating: 5,
                bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
                borderColor: "border-blue-200"
              },
              {
                q: "Outstanding mobile development team! They created our iOS and Android apps with seamless performance and beautiful UI. Communication was transparent throughout the entire process.",
                n: "Michael Chen",
                c: "Product Manager",
                company: "InnovateLabs",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                rating: 5,
                bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
                borderColor: "border-emerald-200"
              },
              {
                q: "Their cloud migration expertise saved us 40% in infrastructure costs. The team's technical knowledge and professional approach made a complex project feel effortless.",
                n: "Emily Rodriguez",
                c: "VP Engineering",
                company: "DataFlow Systems",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                rating: 5,
                bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
                borderColor: "border-purple-200"
              },
            ].map((t, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border ${t.borderColor} ${t.bgColor} hover:shadow-xl hover:shadow-[#2dd4bf]/10 transition-all duration-300 group`}>
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-12 h-12 text-[#0f2942]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-slate-700 leading-relaxed mb-6 text-sm font-medium">{t.q}</p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src={t.avatar} alt={t.n} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-bold text-[#0f2942]">{t.n}</div>
                    <div className="text-sm text-slate-600 font-medium">{t.c}</div>
                    <div className="text-xs text-slate-500">{t.company}</div>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="absolute top-6 left-6">
                  <div className="flex items-center gap-1 px-2 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200">
                    <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-xs font-medium text-slate-700">Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Testimonial Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "1000+", label: "Projects Completed" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "5.0", label: "Average Rating" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#2dd4bf] mb-2">{stat.number}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2942] mb-4">Our Technology Stack</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We work with cutting-edge technologies to build robust, scalable, and future-proof solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
              { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
              { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
              { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
              { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
              { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
              { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
              { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
              { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
              { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
              { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
              { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            ].map((tech) => (
              <div key={tech.name} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#2dd4bf]/40 hover:shadow-lg transition-all duration-300 group">
                <img src={tech.logo} alt={tech.name} className="h-12 w-12 md:h-16 md:w-16 object-contain mb-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium text-slate-700 group-hover:text-[#0f2942] transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2942] mb-4">How We Work</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our streamlined process ensures your project is delivered on time, within budget, and to the highest quality standards.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We start by understanding your business goals, requirements, and target audience to create a comprehensive project roadmap.",
                icon: "🔍"
              },
              {
                step: "02", 
                title: "Design & Prototyping",
                description: "Our design team creates wireframes and interactive prototypes to visualize the user experience and interface.",
                icon: "🎨"
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "We build your solution using agile methodologies, with continuous testing to ensure quality and performance.",
                icon: "⚡"
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "After deployment, we provide ongoing support, maintenance, and optimization to ensure continued success.",
                icon: "🚀"
              }
            ].map((process) => (
              <div key={process.step} className="relative group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {process.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#2dd4bf] text-[#0f2942] text-sm font-bold flex items-center justify-center">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-[#0f2942] mb-3">{process.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Impact by the Numbers</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We're proud of the results we've delivered for our clients across various industries.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Completed", icon: "📊" },
              { number: "98%", label: "Client Satisfaction", icon: "😊" },
              { number: "50+", label: "Team Members", icon: "👥" },
              { number: "24/7", label: "Support Available", icon: "🌟" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl sm:text-5xl font-bold text-[#2dd4bf] mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0f2942] to-[#1e4a6f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-slate-300 mb-8">
            Get in touch or create an account to start your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold bg-[#2dd4bf] text-[#0f2942] hover:bg-[#00c9b7] transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold border-2 border-white/60 text-white hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
