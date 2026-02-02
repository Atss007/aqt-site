import Link from "next/link";

const features = ["24/7 Support", "Expert Team", "Fast Delivery"];

export default function DiscussRequirement() {
  return (
    <section className="py-6 sm:py-10 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 sm:p-10 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:justify-between gap-6">
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight">
              Discuss Your <span className="text-orange-400">Requirement</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
              Have a unique project? Our experts provide tailored IT solutions that drive growth and innovation.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
              {features.map((f, i) => (
                <span key={i} className="flex items-center gap-1.5 text-gray-400 text-xs sm:text-sm">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />{f}
                </span>
              ))}
            </div>
          </div>
          
          <Link href="/contact-us" className="group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:scale-105 transition-all">
            Discuss with us
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}