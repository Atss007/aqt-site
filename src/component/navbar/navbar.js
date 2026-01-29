"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Users } from "lucide-react";
import { Briefcase } from "lucide-react";
import { Mail } from "lucide-react";
import { Info } from "lucide-react";
import { FileText } from "lucide-react";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileSubmenu, setMobileSubmenu] = useState(null);

    const menuItems = [
        {
            title: "Home",
            content: (
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    <div className="group">
                        <h4 className="font-semibold text-blue-600 mb-2 pb-2 border-b-2 border-blue-600 inline-block">
                            Company Profile
                        </h4>
                        <p className="text-sm mt-3 text-gray-600 leading-relaxed">
                            Atlanta Quantum Tech pioneers smart software, AI, and digital ecosystems for next-gen enterprises.
                        </p>
                    </div>
                    <div className="group">
                        <h4 className="font-semibold text-blue-600 mb-2 pb-2 border-b-2 border-blue-600 inline-block">
                            Client Testimonials
                        </h4>
                        <p className="text-sm mt-3 text-gray-600 leading-relaxed">
                            Trusted by global enterprises for reliability, innovation, and speed.
                        </p>
                    </div>
                    <div className="group">
                        <h4 className="font-semibold text-blue-600 mb-2 pb-2 border-b-2 border-blue-600 inline-block">
                            Career @AQT
                        </h4>
                        <p className="text-sm mt-3 text-gray-600 leading-relaxed">
                            Join a culture of innovation where ideas meet quantum excellence.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            title: "About",
            content: (
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">

                    {/* About Us */}
                    <Link
                        href="/about-us"
                        className="group hover:shadow-xl transition-all duration-300 p-5 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-teal-50 cursor-pointer border border-transparent hover:border-blue-200"
                        onClick={() => {
                            setOpenMenu(null);
                            setMobileOpen(false);
                        }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                <Info className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <h4 className="font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                                About Us
                            </h4>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                            Learn more about who we are, what we do, and our mission in the digital world.
                        </p>
                        <div className="flex items-center gap-1 text-xs font-medium text-blue-600 mt-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                            Discover more
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>

                    {/* Contact Us */}
                    <Link
                        href="/contact-us"
                        className="group hover:shadow-xl transition-all duration-300 p-5 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-teal-50 cursor-pointer border border-transparent hover:border-blue-200"
                        onClick={() => {
                            setOpenMenu(null);
                            setMobileOpen(false);
                        }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                <Mail className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <h4 className="font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                                Contact Us
                            </h4>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                            Have a question or project in mind? We’re here to help — let’s talk.
                        </p>
                        <div className="flex items-center gap-1 text-xs font-medium text-blue-600 mt-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                            Get in touch
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>

                    {/* Our Experts */}
                    <Link
                        href="/experts"
                        className="group hover:shadow-xl transition-all duration-300 p-5 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-teal-50 cursor-pointer border border-transparent hover:border-blue-200"
                        onClick={() => {
                            setOpenMenu(null);
                            setMobileOpen(false);
                        }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                <Users className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <h4 className="font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                                Our Experts
                            </h4>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                            Meet the professionals who bring vision, strategy, and innovation to life.
                        </p>
                        <div className="flex items-center gap-1 text-xs font-medium text-blue-600 mt-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                            Meet the team
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>

                     {/* Terms & Conditions */}
                    <Link
                        href="/terms-and-conditions"
                        className="group hover:shadow-xl transition-all duration-300 p-5 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-teal-50 cursor-pointer border border-transparent hover:border-blue-200"
                        onClick={() => {
                            setOpenMenu(null);
                            setMobileOpen(false);
                        }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                <FileText className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <h4 className="font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                                Terms & Conditions
                            </h4>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                            Read our legal terms, policies, and guidelines for using our services.
                        </p>
                        <div className="flex items-center gap-1 text-xs font-medium text-blue-600 mt-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                            View details
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>
                </div>
            ),
        },
        {
            title: "Services",
            content: (
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    <div className="group">
                        <h4 className="font-semibold text-blue-600 mb-2 pb-2 border-b-2 border-blue-600 inline-block">
                            Design & Development
                        </h4>
                        <ul className="text-sm mt-3 space-y-2 text-gray-600">
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">→ Web, App & E-commerce</li>
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">→ Software & API Development</li>
                        </ul>
                    </div>
                    <div className="group">
                        <h4 className="font-semibold text-blue-600 mb-2 pb-2 border-b-2 border-blue-600 inline-block">
                            Support Services
                        </h4>
                        <ul className="text-sm mt-3 space-y-2 text-gray-600">
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">→ Hosting & Server Support</li>
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">→ Development Assistance</li>
                        </ul>
                    </div>
                    <div className="group">
                        <h4 className="font-semibold text-blue-600 mb-2 pb-2 border-b-2 border-blue-600 inline-block">
                            Digital Marketing
                        </h4>
                        <ul className="text-sm mt-3 space-y-2 text-gray-600">
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">→ SEO & Social Media Marketing</li>
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">→ Performance Optimization</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: "Technologies",
            content: (
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    <div className="group">
                        <h4 className="font-semibold text-blue-600 mb-2 pb-2 border-b-2 border-blue-600 inline-block">
                            Mobile
                        </h4>
                        <ul className="text-sm mt-3 space-y-2 text-gray-600">
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">→ Android</li>
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">→ iOS</li>
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">→ React Native</li>
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">→ Ionic</li>
                        </ul>
                    </div>
                    <div className="group">
                        <h4 className="font-semibold text-blue-600 mb-2 pb-2 border-b-2 border-blue-600 inline-block">
                            Web
                        </h4>
                        <ul className="text-sm mt-3 space-y-2 text-gray-600">
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">→ MEAN / MERN Stack</li>
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">→ React.js / Next.js</li>
                        </ul>
                    </div>
                    <div className="group">
                        <h4 className="font-semibold text-blue-600 mb-2 pb-2 border-b-2 border-blue-600 inline-block">
                            Custom
                        </h4>
                        <ul className="text-sm mt-3 space-y-2 text-gray-600">
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">→ HTML5 / Node.js</li>
                            <li className="hover:text-blue-600 transition-colors cursor-pointer">→ Python / Angular / Express.js</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: "Insights",
            content: (
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div className="group">
                        <h4 className="font-semibold text-blue-600 mb-2 pb-2 border-b-2 border-blue-600 inline-block">
                            Our Portfolio
                        </h4>
                        <p className="text-sm mt-3 text-gray-600 leading-relaxed">
                            Explore innovative solutions crafted for industries worldwide.
                        </p>
                    </div>
                    <div className="group">
                        <h4 className="font-semibold text-blue-600 mb-2 pb-2 border-b-2 border-blue-600 inline-block">
                            FAQs
                        </h4>
                        <p className="text-sm mt-3 text-gray-600 leading-relaxed">
                            Answers to questions about our services, pricing, and process.
                        </p>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <header className="fixed w-full top-0 left-0 z-50 bg-black shadow-lg">
            {/* Top Sub Navbar */}
            <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-2.5 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
                    <span className="text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] font-medium tracking-wide text-white text-center sm:text-left">
                        Empowering Innovation with Quantum Precision
                    </span>


                    <Link
                        href="/contact"
                        className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                    >
                        Get Free Consultation
                    </Link>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="bg-white backdrop-blur-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center h-16 sm:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                                Atlanta Quantum Tech
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {menuItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => setOpenMenu(index)}
                                    onMouseLeave={() => setOpenMenu(null)}
                                >
                                    <button className="px-4 py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 flex items-center gap-1 group">
                                        {item.title}
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-200 ${openMenu === index ? "rotate-180" : ""
                                                }`}
                                        />
                                        <span
                                            className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 transform origin-left transition-transform duration-300 ${openMenu === index ? "scale-x-100" : "scale-x-0"
                                                }`}
                                        ></span>
                                    </button>

                                    <AnimatePresence>
                                        {openMenu === index && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 mt-5 border border-white/95-500 bg-white rounded-b-xl rounded-t-none overflow-hidden min-w-[300px] max-w-[90vw] lg:min-w-[650px]"
                                            >
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>
                                                {item.content}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}

                            {/* Contact Button */}
                            <Link
                                href="/contact"
                                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-blue-500 hover:to-teal-400"
                            >
                                Contact Us
                            </Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden max-h-[calc(100vh-140px)] overflow-y-auto"
                        >
                            <div className="px-4 py-2 space-y-1">
                                {menuItems.map((item, i) => (
                                    <div key={i} className="border-b border-gray-100 last:border-b-0">
                                        <button
                                            onClick={() =>
                                                setMobileSubmenu(mobileSubmenu === i ? null : i)
                                            }
                                            className="w-full px-4 py-3 text-left font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-between"
                                        >
                                            {item.title}
                                            <ChevronDown
                                                size={18}
                                                className={`transition-transform duration-200 ${mobileSubmenu === i ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        <AnimatePresence>
                                            {mobileSubmenu === i && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="overflow-hidden bg-gray-50 rounded-lg mb-2"
                                                >
                                                    {item.content}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}

                                <div className="pt-4 pb-2">
                                    <Link
                                        href="/contact"
                                        className="block text-center bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full py-3 font-semibold shadow-lg hover:from-blue-500 hover:to-teal-400 transition-all duration-300"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}