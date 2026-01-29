import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t  border-white/20 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Atlanta Quantum Tech Pvt Ltd
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Innovating technology solutions that drive business transformation, AI-powered applications, and scalable enterprise software.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 border-b border-blue-500 pb-2 w-max">
            Quick Links
          </h3>
          <ul className="space-y-2 mt-4">
            <li>
              <Link href="/" className="hover:text-blue-400 transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 transition-colors duration-300">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-400 transition-colors duration-300">Services</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-400 transition-colors duration-300">Projects</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition-colors duration-300">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 border-b border-green-400 pb-2 w-max">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>📍 Bangalore, India</li>
            <li>📞 +91 98765 43210</li>
            <li>📧 contact@atlantaquantumtech.com</li>
          </ul>
          <Link
            href="/contact"
            className="inline-block mt-6 px-5 py-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm relative z-10">
        © {new Date().getFullYear()} Atlanta Quantum Tech Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}
