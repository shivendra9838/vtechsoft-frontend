import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:border-[#2dd4bf]/40 hover:shadow-2xl hover:shadow-[#2dd4bf]/10 transition-all duration-500 transform hover:-translate-y-2"
    >
      {/* Service Image */}
      <div className="relative h-64 bg-gradient-to-br from-[#0f2942] to-[#1e4a6f] overflow-hidden">
        <img
          src={service.image}
          alt={`${service.title} service image`}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2942]/30 to-transparent" />
        
        {/* Premium Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full bg-[#2dd4bf]/20 text-[#2dd4bf] border border-[#2dd4bf]/30 text-xs font-semibold backdrop-blur-sm">
            Premium
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-xl font-semibold text-[#0f2942] mb-3 group-hover:text-[#1e4a6f] transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
        
        {/* Features */}
        <ul className="space-y-3 mb-6">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-sm text-slate-600">
              <div className="w-2 h-2 rounded-full bg-[#2dd4bf] flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        
        {/* CTA */}
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
  );
}
