import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SERVICES, getServiceBySlug } from "../data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const [showBrief, setShowBrief] = useState(false);

  if (!service) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center py-16 px-4 bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0f2942] mb-4">Service not found</h1>
          <Link to="/services" className="text-[#2dd4bf] hover:text-[#1e4a6f] font-medium">
            Back to Services
          </Link>
        </div>
      </section>
    );
  }

  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-16 -left-24 w-[520px] h-[520px] bg-[#2dd4bf] rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-16 -right-24 w-[520px] h-[520px] bg-[#00c9b7] rounded-full blur-3xl opacity-15" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-[#2dd4bf] mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-[#2dd4bf] uppercase tracking-wider mb-4 px-3 py-1 rounded-full bg-[#2dd4bf]/10 border border-[#2dd4bf]/20">
                Premium Service
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">{service.short}</p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowBrief(true)}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold bg-[#2dd4bf] text-[#0f2942] hover:bg-[#00c9b7] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Started Now
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border-2 border-white/60 text-white hover:bg-white/10 transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                <img
                  src={service.image}
                  alt={`${service.title} illustration`}
                  className="w-full h-[320px] sm:h-[400px] object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2942]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#0f2942] mb-6">Service Overview</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{service.desc}</p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-[#0f2942] mb-6">What You Get</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.deliverables.map((d) => (
                    <div key={d} className="p-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 hover:shadow-lg hover:border-[#2dd4bf]/40 transition-all duration-300 group">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-[#2dd4bf] group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-sm font-medium text-slate-700">{d}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-[#0f2942] mb-6">Our Process</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { t: "Discovery", d: "We understand your goals, users, and requirements.", icon: "🔍" },
                    { t: "Planning", d: "We propose scope, timeline, and architecture.", icon: "📋" },
                    { t: "Development", d: "Implementation with weekly updates and reviews.", icon: "⚡" },
                    { t: "Launch", d: "Testing, deployment, and handover documentation.", icon: "🚀" },
                  ].map((step, i) => (
                    <div key={step.t} className="p-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 hover:shadow-lg hover:border-[#2dd4bf]/40 transition-all duration-300 group">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-[#0f2942] text-lg">{step.t}</div>
                          <div className="text-xs text-[#2dd4bf] font-semibold">Step {i + 1}</div>
                        </div>
                      </div>
                      <div className="text-sm text-slate-600 leading-relaxed">{step.d}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#0f2942] mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {service.faqs.map((f, index) => (
                    <div key={f.q} className="p-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 hover:shadow-lg hover:border-[#2dd4bf]/40 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#2dd4bf]/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-[#2dd4bf] font-bold text-sm">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-[#0f2942] mb-2">{f.q}</div>
                          <div className="text-sm text-slate-600 leading-relaxed">{f.a}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="p-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-lg">
                  <h3 className="text-sm font-bold text-[#0f2942] uppercase tracking-wider mb-6 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Key Highlights
                  </h3>
                  <ul className="space-y-4">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3 text-sm text-slate-700">
                        <div className="w-2 h-2 rounded-full bg-[#2dd4bf] flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-lg">
                  <h3 className="text-sm font-bold text-[#0f2942] uppercase tracking-wider mb-6 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-[#0f2942] to-[#1e4a6f] text-white border border-[#2dd4bf]/30 hover:border-[#2dd4bf]/60 transition-all duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 rounded-3xl bg-gradient-to-br from-[#2dd4bf] to-[#00c9b7] text-white shadow-xl">
                  <h3 className="text-lg font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-sm mb-6 opacity-90">
                    Let's discuss how this service can help transform your business.
                  </p>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-white text-[#0f2942] hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#0f2942] mb-4">Related Services</h2>
              <p className="text-slate-600 text-lg">Explore more ways we can help you achieve your goals.</p>
            </div>
            <Link to="/services" className="text-sm font-semibold text-[#2dd4bf] hover:text-[#1e4a6f] transition-colors flex items-center gap-2">
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:border-[#2dd4bf]/40 hover:shadow-2xl hover:shadow-[#2dd4bf]/10 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] relative overflow-hidden">
                  <img src={s.image} alt="" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2942]/30 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-[#2dd4bf]/20 text-[#2dd4bf] border border-[#2dd4bf]/30 text-xs font-semibold backdrop-blur-sm">
                      Related
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-[#0f2942] group-hover:text-[#1e4a6f] transition-colors mb-3">
                    {s.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">{s.short}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#2dd4bf] group-hover:text-[#1e4a6f] transition-colors">
                      Explore Service →
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#2dd4bf]/10 flex items-center justify-center group-hover:bg-[#2dd4bf]/20 transition-colors">
                      <svg className="w-4 h-4 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Brief Modal */}
      {showBrief && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#0f2942]">{service.title} - Service Brief</h2>
                <button
                  onClick={() => setShowBrief(false)}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-6">
                {/* Service Overview */}
                <div>
                  <h3 className="text-lg font-semibold text-[#0f2942] mb-3">Service Overview</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg font-semibold text-[#0f2942] mb-3">Key Features</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features?.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#2dd4bf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    )) || (
                      <div className="col-span-2 text-slate-500 italic">No specific features listed</div>
                    )}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h3 className="text-lg font-semibold text-[#0f2942] mb-3">What You Get</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.deliverables.map((deliverable, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#2dd4bf] mt-2 flex-shrink-0" />
                        <span className="text-slate-600">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div>
                  <h3 className="text-lg font-semibold text-[#0f2942] mb-3">Our Process</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#2dd4bf] text-white flex items-center justify-center font-semibold text-sm">1</div>
                      <div>
                        <h4 className="font-medium text-[#0f2942]">Discovery & Planning</h4>
                        <p className="text-slate-600 text-sm">We understand your requirements and create a detailed project plan.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#2dd4bf] text-white flex items-center justify-center font-semibold text-sm">2</div>
                      <div>
                        <h4 className="font-medium text-[#0f2942]">Design & Development</h4>
                        <p className="text-slate-600 text-sm">Our team builds your solution using best practices and modern technologies.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#2dd4bf] text-white flex items-center justify-center font-semibold text-sm">3</div>
                      <div>
                        <h4 className="font-medium text-[#0f2942]">Testing & Quality Assurance</h4>
                        <p className="text-slate-600 text-sm">Rigorous testing ensures your solution meets the highest quality standards.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#2dd4bf] text-white flex items-center justify-center font-semibold text-sm">4</div>
                      <div>
                        <h4 className="font-medium text-[#0f2942]">Deployment & Support</h4>
                        <p className="text-slate-600 text-sm">We deploy your solution and provide ongoing support and maintenance.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <h3 className="text-lg font-semibold text-[#0f2942] mb-3">Typical Timeline</h3>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-[#2dd4bf]">1-2</div>
                        <div className="text-sm text-slate-600">Weeks</div>
                        <div className="text-xs text-slate-500">Planning</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#2dd4bf]">4-8</div>
                        <div className="text-sm text-slate-600">Weeks</div>
                        <div className="text-xs text-slate-500">Development</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#2dd4bf]">1-2</div>
                        <div className="text-sm text-slate-600">Weeks</div>
                        <div className="text-xs text-slate-500">Testing</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#2dd4bf]">1</div>
                        <div className="text-sm text-slate-600">Week</div>
                        <div className="text-xs text-slate-500">Deployment</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div>
                  <h3 className="text-lg font-semibold text-[#0f2942] mb-3">Investment</h3>
                  <div className="bg-gradient-to-r from-[#0f2942] to-[#1e4a6f] rounded-lg p-6 text-white">
                    <div className="text-3xl font-bold mb-2">Starting at $5,000</div>
                    <p className="text-slate-300 mb-4">Custom pricing based on project scope and requirements</p>
                    <div className="grid sm:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="font-semibold">Basic Package</div>
                        <div className="text-slate-300">$5,000 - $10,000</div>
                      </div>
                      <div>
                        <div className="font-semibold">Professional</div>
                        <div className="text-slate-300">$10,000 - $25,000</div>
                      </div>
                      <div>
                        <div className="font-semibold">Enterprise</div>
                        <div className="text-slate-300">$25,000+</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex gap-4 pt-6 border-t border-slate-200">
                  <Link
                    to="/contact"
                    onClick={() => setShowBrief(false)}
                    className="flex-1 px-6 py-3 rounded-lg bg-[#2dd4bf] text-[#0f2942] font-semibold hover:bg-[#00c9b7] transition-colors text-center"
                  >
                    Get Quote
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setShowBrief(false)}
                    className="flex-1 px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors text-center"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

