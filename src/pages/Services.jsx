import { Link } from "react-router-dom";
import { SERVICES } from "../data/services";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-16 -left-24 w-[520px] h-[520px] bg-[#2dd4bf] rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-16 -right-24 w-[520px] h-[520px] bg-[#00c9b7] rounded-full blur-3xl opacity-15" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Full-stack technology services—from design and development to cloud and consulting. We transform your ideas into powerful digital solutions.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {["Web Development", "Mobile Apps", "Cloud Solutions", "UI/UX Design", "Backend APIs", "Consulting"].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2942] mb-4">Comprehensive Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Click any service to explore detailed deliverables, process, FAQs, and tech stack. Each service includes a gallery of our work examples.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-16 -left-24 w-[520px] h-[520px] bg-[#2dd4bf] rounded-full blur-3xl opacity-10" />
          <div className="absolute -bottom-16 -right-24 w-[520px] h-[520px] bg-[#00c9b7] rounded-full blur-3xl opacity-10" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
          <p className="text-slate-300 mb-8 text-lg leading-relaxed">
            Tell us about your project. We'll help you choose the right services and get started on your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold bg-[#2dd4bf] text-[#0f2942] hover:bg-[#00c9b7] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border-2 border-white/60 text-white hover:bg-white hover:text-[#0f2942] transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
