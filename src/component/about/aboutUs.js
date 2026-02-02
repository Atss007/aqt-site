"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Rocket,
    Target,
    Heart,
    Users,
    Globe,
    TrendingUp,
    Shield,
    Zap,
    Code,
    Brain,
    Lightbulb,
    Calendar,
    ArrowRight,
    Sparkles,
    Building2,
    Trophy,
} from "lucide-react";
import TechnologyStackMarquee from "../techStack/techstack";
import Link from "next/link";

// Custom Hook: Animated Counter
const useCounter = (end, duration = 2000, shouldStart = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!shouldStart) return;

        let startTime;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, shouldStart]);

    return count;
};

// Stats Component
const StatCard = ({ icon: Icon, value, suffix, label, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const count = useCounter(value, 2000, isInView);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
        >
            <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
                <Icon className="text-white" size={28} strokeWidth={2} />
            </motion.div>
            <h3 className="text-4xl font-bold text-slate-900 mb-2">
                {count}{suffix}
            </h3>
            <p className="text-slate-600 font-medium">{label}</p>
        </motion.div>
    );
};

// Timeline Item Component
const TimelineItem = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="relative"
    >
        {/* Mobile Layout */}
        <div className="flex md:hidden gap-4 items-start w-full">
            <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg z-10"
            >
                <span className="text-white font-bold text-sm">{item.year}</span>
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-5 border border-white/50 hover:shadow-xl transition-all duration-300"
            >
                <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}>
                        <item.icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-slate-600 text-sm mb-3 leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full border border-teal-200"
                        >
                            {achievement}
                        </span>
                    ))}
                </div>
            </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block w-full">
            <div className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"} mb-4`}>
                <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`w-5/12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/50 hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? "text-right" : ""
                        }`}
                    style={{ marginTop: index === 0 ? "0" : "-80px" }}
                >
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "justify-end" : ""}`}>
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}>
                            <item.icon className="text-white" size={24} />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                            {item.year}
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{item.description}</p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "justify-end" : ""}`}>
                        {item.achievements.map((achievement, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full border border-teal-200"
                            >
                                {achievement}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-full border-4 border-white shadow-lg`}
                />
            </div>
        </div>
    </motion.div>
);

// Value Card Component
const ValueCard = ({ value, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-slate-100"
    >
        <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4`}>
            <value.icon className="text-white" size={24} />
        </div>
        <h4 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h4>
        <p className="text-slate-600 leading-relaxed">{value.description}</p>
    </motion.div>
);

export default function AboutUs() {
    const [activeTab, setActiveTab] = useState("mission");

    // Data
    const stats = [
        { icon: Building2, value: 500, suffix: "+", label: "Happy Clients" },
        { icon: Code, value: 1000, suffix: "+", label: "Projects Completed" },
        { icon: Users, value: 150, suffix: "+", label: "Team Members" },
        { icon: Globe, value: 25, suffix: "+", label: "Countries Served" },
    ];

    const timeline = [
        {
            year: "2015",
            title: "Foundation",
            description: "Started with a vision to transform businesses through technology innovation and digital excellence",
            icon: Rocket,
            color: "from-blue-500 to-cyan-500",
            achievements: ["5 Founding Members", "First Office in Atlanta"],
        },
        {
            year: "2017",
            title: "Global Expansion",
            description: "Opened offices in 5 countries and significantly expanded our service portfolio",
            icon: Globe,
            color: "from-purple-500 to-pink-500",
            achievements: ["5 International Offices", "100+ Clients"],
        },
        {
            year: "2019",
            title: "Innovation Leader",
            description: "Launched AI-powered solutions and received multiple prestigious industry awards",
            icon: Brain,
            color: "from-orange-500 to-red-500",
            achievements: ["AI Solutions Launch", "3 Industry Awards"],
        },
        {
            year: "2021",
            title: "Rapid Growth",
            description: "Achieved major milestone of 500+ clients and doubled our talented team size",
            icon: TrendingUp,
            color: "from-green-500 to-teal-500",
            achievements: ["500+ Clients", "Team Size Doubled"],
        },
        {
            year: "2024",
            title: "Industry Leadership",
            description: "Recognized globally as a leading IT solutions provider with cutting-edge technology",
            icon: Trophy,
            color: "from-yellow-500 to-orange-500",
            achievements: ["Market Leader", "1000+ Projects"],
        },
    ];

    const values = [
        {
            icon: Lightbulb,
            title: "Innovation First",
            description: "We constantly push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.",
            color: "from-yellow-500 to-orange-500",
        },
        {
            icon: Shield,
            title: "Trust & Security",
            description: "Your data security is our priority. We maintain the highest standards of privacy and protection.",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: Heart,
            title: "Client Success",
            description: "Your success is our success. We go above and beyond to ensure exceptional results.",
            color: "from-pink-500 to-red-500",
        },
        {
            icon: Users,
            title: "Team Collaboration",
            description: "We believe in the power of teamwork and foster a culture of collaboration and growth.",
            color: "from-purple-500 to-indigo-500",
        },
        {
            icon: Zap,
            title: "Agile Execution",
            description: "Fast-paced, adaptive, and results-driven approach to deliver projects on time.",
            color: "from-green-500 to-teal-500",
        },
        {
            icon: Target,
            title: "Quality Excellence",
            description: "We never compromise on quality and strive for perfection in everything we do.",
            color: "from-red-500 to-pink-500",
        },
    ];

    const tabContent = {
        mission: {
            gradient: "from-teal-50 to-blue-50",
            border: "border-teal-100",
            iconBg: "from-teal-500 to-blue-500",
            icon: Target,
            title: "Our Mission",
            text: "To empower businesses worldwide with innovative technology solutions that drive growth, efficiency, and digital transformation. We're committed to delivering excellence in every project and building lasting partnerships with our clients.",
        },
        vision: {
            gradient: "from-purple-50 to-pink-50",
            border: "border-purple-100",
            iconBg: "from-purple-500 to-pink-500",
            icon: Rocket,
            title: "Our Vision",
            text: "To be the world's most trusted technology partner, recognized for innovation, quality, and client success. We envision a future where technology seamlessly integrates with business strategy to create unprecedented value and opportunities.",
        },
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className=" h-[600px] relative max-h-screen bg-gradient-to-br from-teal-900 via-blue-900 to-teal-800 pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"
                    />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-teal-500/10 backdrop-blur-sm border border-teal-400/20 rounded-full px-4 py-2 mb-6 hover:bg-teal-500/20 transition-colors duration-300"
                        >
                            <Sparkles className="text-teal-400" size={20} />
                            <span className="text-teal-300 font-medium">Trusted by 500+ Global Brands</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Building Tomorrow&apos;s
                            <br />
                            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                                Digital Solutions
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                            We&apos;re a team of innovators, designers, and developers passionate about creating
                            cutting-edge technology solutions that drive real business results.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                            >
                                Join Our Team
                                <ArrowRight size={20} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                Our Work
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <StatCard key={index} {...stat} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Journey Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 overflow-hidden">
                {/* Background SVG Illustrations */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <svg className="absolute top-0 left-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="journey-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                <circle cx="50" cy="50" r="30" fill="none" stroke="#0d9488" strokeWidth="1" />
                                <circle cx="50" cy="50" r="20" fill="none" stroke="#0891b2" strokeWidth="1" />
                                <circle cx="50" cy="50" r="10" fill="none" stroke="#0d9488" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#journey-pattern)" />
                    </svg>

                    <motion.div
                        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 right-10 opacity-10"
                    >
                        <Rocket className="w-32 h-32 text-teal-600" strokeWidth={1} />
                    </motion.div>

                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-20 left-10 opacity-5"
                    >
                        <Globe className="w-48 h-48 text-blue-600" strokeWidth={1} />
                    </motion.div>

                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-teal-200 rounded-full px-6 py-3 mb-6"
                        >
                            <Calendar className="text-teal-600" size={20} />
                            <span className="text-teal-700 font-semibold">Our Journey Since 2015</span>
                        </motion.div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            A Decade of <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Innovation & Growth</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            From a small startup to a global technology leader - discover the milestones that shaped our success
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative max-w-5xl mx-auto">
                        {/* Lines */}
                        <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-blue-500 to-purple-500" />
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 transform -translate-y-1/2" />

                        <div className="space-y-6 md:space-y-0">
                            {timeline.map((item, index) => (
                                <TimelineItem key={index} item={item} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Achievement Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50"
                    >
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2">
                                    9+ Years
                                </div>
                                <p className="text-slate-600 font-medium">Of Excellence</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                                    1000+
                                </div>
                                <p className="text-slate-600 font-medium">Projects Delivered</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                                    25+
                                </div>
                                <p className="text-slate-600 font-medium">Countries Worldwide</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            What Drives Us
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Our core principles that guide everything we do
                        </p>
                    </motion.div>

                    {/* Tabs */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex bg-slate-100 rounded-full p-2 shadow-lg">
                            {["mission", "vision", "values"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === tab
                                        ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg"
                                        : "text-slate-600 hover:text-slate-900"
                                        }`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-5xl mx-auto"
                    >
                        {activeTab !== "values" ? (
                            <div className={`bg-gradient-to-br ${tabContent[activeTab].gradient} rounded-2xl shadow-xl p-8 lg:p-12 border ${tabContent[activeTab].border}`}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${tabContent[activeTab].iconBg} rounded-full flex items-center justify-center`}>
                                        {(() => {
                                            const IconComponent = tabContent[activeTab].icon;
                                            return <IconComponent className="text-white" size={32} />;
                                        })()}
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900">{tabContent[activeTab].title}</h3>
                                </div>
                                <p className="text-xl text-slate-700 leading-relaxed">
                                    {tabContent[activeTab].text}
                                </p>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {values.map((value, index) => (
                                    <ValueCard key={index} value={value} index={index} />
                                ))}
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>
            <TechnologyStackMarquee />
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
                {/* Decorative gradient glow */}
                <div className="absolute inset-0 flex justify-center pointer-events-none">
                    <div className="w-[600px] h-[600px] bg-teal-500/20 blur-[140px] rounded-full"></div>
                </div>

                <div className="max-w-5xl mx-auto text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl px-10 py-16"
                    >
                        <Users className="w-20 h-20 text-teal-400 mx-auto mb-6 drop-shadow-lg" />

                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
                            Ready to Transform Your Digital Future?
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                            Whether you&apos;re starting a new project or scaling an existing one,
                            our team is ready to deliver innovation, precision, and measurable success.
                        </p>

                        <div className="flex flex-wrap justify-center gap-5">
                            {/* Primary Button */}
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/about-you"
                                    className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 inline-flex"
                                >
                                    Get in Touch
                                    <ArrowRight size={20} />
                                </Link>
                            </motion.div>

                            {/* Secondary Button */}
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/portfolio"
                                    className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:border-teal-500 hover:text-teal-400 transition-all duration-300 flex items-center gap-2 inline-flex group"
                                >
                                    View Our Work
                                    <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Global CSS */}
            <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
        </div>
    );
}