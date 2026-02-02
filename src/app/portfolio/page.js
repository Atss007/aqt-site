"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Globe,
  ShoppingCart,
  Heart,
  GraduationCap,
  Plane,
  TrendingUp,
  ExternalLink,
  Award,
  Users,
  Code,
  Sparkles,
  Filter,
  Search,
} from "lucide-react";
import Image from "next/image";

const categories = [
  { id: "all", name: "All Projects", icon: Sparkles },
  { id: "web", name: "Web Apps", icon: Globe },
  { id: "mobile", name: "Mobile Apps", icon: Smartphone },
  { id: "ecommerce", name: "E-Commerce", icon: ShoppingCart },
  { id: "healthcare", name: "Healthcare", icon: Heart },
  { id: "education", name: "Education", icon: GraduationCap },
];

const projects = [
  {
    id: 1,
    title: "HealthSync Pro",
    category: "healthcare",
    type: "Web & Mobile App",
    description: "Comprehensive telemedicine platform connecting patients with healthcare providers through video consultations, appointment scheduling, and electronic health records.",
    image: "/assets/portfolio/healthsync.jpg",
    tags: ["React", "Node.js", "MongoDB", "WebRTC"],
    stats: { users: "50K+", rating: 4.8, downloads: "100K+" },
    color: "from-blue-500 to-cyan-500",
    challenge: "Ensuring HIPAA compliance while maintaining seamless user experience",
    solution: "Implemented end-to-end encryption and secure authentication protocols",
    results: ["50K active users", "4.8★ rating", "30% reduction in wait times"],
  },
  {
    id: 2,
    title: "ShopNow Marketplace",
    category: "ecommerce",
    type: "E-Commerce Platform",
    description: "Multi-vendor e-commerce platform with advanced inventory management, payment processing, and real-time analytics dashboard for sellers.",
    image: "/assets/portfolio/shopnow.jpg",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    stats: { users: "200K+", rating: 4.9, revenue: "$5M+" },
    color: "from-purple-500 to-pink-500",
    challenge: "Scaling infrastructure to handle Black Friday traffic spikes",
    solution: "Implemented microservices architecture with auto-scaling capabilities",
    results: ["200K users", "99.9% uptime", "$5M+ revenue"],
  },
  {
    id: 3,
    title: "EduLearn Academy",
    category: "education",
    type: "Learning Management System",
    description: "Interactive online learning platform with live classes, course management, progress tracking, and certification system for students and educators.",
    image: "/assets/portfolio/edulearn.jpg",
    tags: ["React", "Django", "AWS", "Zoom API"],
    stats: { users: "75K+", courses: "500+", rating: 4.7 },
    color: "from-green-500 to-teal-500",
    challenge: "Supporting simultaneous live classes for thousands of students",
    solution: "Integrated CDN and optimized video streaming infrastructure",
    results: ["75K students", "500+ courses", "95% completion rate"],
  },
  {
    id: 4,
    title: "TravelEase",
    category: "mobile",
    type: "Mobile Travel App",
    description: "All-in-one travel companion app featuring flight booking, hotel reservations, itinerary planning, and AI-powered travel recommendations.",
    image: "/assets/portfolio/travelease.jpg",
    tags: ["React Native", "Firebase", "Google Maps", "AI/ML"],
    stats: { downloads: "500K+", rating: 4.9, countries: "150+" },
    color: "from-orange-500 to-red-500",
    challenge: "Integrating multiple third-party booking APIs seamlessly",
    solution: "Built a unified API gateway with intelligent fallback mechanisms",
    results: ["500K downloads", "4.9★ rating", "150+ countries"],
  },
  {
    id: 5,
    title: "FinanceHub",
    category: "web",
    type: "Financial Dashboard",
    description: "Enterprise-grade financial management platform with real-time analytics, budgeting tools, and automated reporting for businesses.",
    image: "/assets/portfolio/financehub.jpg",
    tags: ["Vue.js", "Python", "Chart.js", "Plaid API"],
    stats: { users: "30K+", transactions: "10M+", rating: 4.8 },
    color: "from-indigo-500 to-purple-500",
    challenge: "Real-time processing of millions of financial transactions",
    solution: "Implemented event-driven architecture with message queues",
    results: ["30K businesses", "10M transactions", "Zero downtime"],
  },
  {
    id: 6,
    title: "FitLife Tracker",
    category: "mobile",
    type: "Health & Fitness App",
    description: "Comprehensive fitness tracking app with workout plans, nutrition tracking, AI coach, and social features to keep users motivated.",
    image: "/assets/portfolio/fitlife.jpg",
    tags: ["Flutter", "TensorFlow", "HealthKit", "Firebase"],
    stats: { downloads: "1M+", rating: 4.7, workouts: "5M+" },
    color: "from-pink-500 to-red-500",
    challenge: "Accurate fitness tracking across different devices and sensors",
    solution: "Developed ML models for activity recognition and calorie estimation",
    results: ["1M+ downloads", "5M workouts", "4.7★ rating"],
  },
  {
    id: 7,
    title: "SmartHome Hub",
    category: "web",
    type: "IoT Control Platform",
    description: "Centralized smart home control system managing lights, security, climate, and energy consumption with voice control integration.",
    image: "/assets/portfolio/smarthome.jpg",
    tags: ["Angular", "IoT", "Alexa", "Google Home"],
    stats: { devices: "50K+", homes: "15K+", rating: 4.6 },
    color: "from-teal-500 to-blue-500",
    challenge: "Ensuring secure communication between diverse IoT devices",
    solution: "Implemented end-to-end encryption and device authentication",
    results: ["50K devices", "15K homes", "30% energy savings"],
  },
  {
    id: 8,
    title: "FoodieDelight",
    category: "ecommerce",
    type: "Food Delivery Platform",
    description: "On-demand food delivery platform connecting restaurants with customers, featuring real-time tracking and intelligent order routing.",
    image: "/assets/portfolio/foodie.jpg",
    tags: ["React Native", "Node.js", "Socket.io", "Google Maps"],
    stats: { restaurants: "5K+", orders: "2M+", rating: 4.8 },
    color: "from-yellow-500 to-orange-500",
    challenge: "Optimizing delivery routes for faster order fulfillment",
    solution: "Implemented AI-based routing algorithm reducing delivery times by 25%",
    results: ["5K restaurants", "2M orders", "25min avg delivery"],
  },
  {
    id: 9,
    title: "TaskMaster Pro",
    category: "web",
    type: "Project Management Tool",
    description: "Collaborative project management platform with kanban boards, time tracking, team chat, and advanced reporting capabilities.",
    image: "/assets/portfolio/taskmaster.jpg",
    tags: ["React", "GraphQL", "MongoDB", "WebSocket"],
    stats: { teams: "20K+", projects: "100K+", rating: 4.9 },
    color: "from-cyan-500 to-blue-500",
    challenge: "Real-time collaboration for distributed teams across time zones",
    solution: "Implemented WebSocket-based real-time sync with conflict resolution",
    results: ["20K teams", "100K projects", "40% productivity boost"],
  },
];

const ProjectCard = ({ project, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group h-[500px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-700 transform-style-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
          <div className="relative h-64 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
            <div className="absolute inset-0 bg-slate-900/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Code className="text-white/20" size={120} strokeWidth={1} />
            </div>
            
            <div className="absolute top-4 right-4 flex gap-2">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-900">
                {project.type}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <div className="flex items-center gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <Users size={14} /> {project.stats.users || project.stats.downloads}
                </span>
                {project.stats.rating && (
                  <span className="flex items-center gap-1">
                    ⭐ {project.stats.rating}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="p-6">
            <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-10 text-xs font-medium rounded-full`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-center pt-4">
              <motion.div
                className="flex items-center gap-2 text-teal-600 font-semibold text-sm"
                whileHover={{ x: 5 }}
              >
                Hover for details
                <ExternalLink size={16} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br ${project.color} text-white p-6`}
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-white" size={24} />
                <h4 className="font-bold text-xl">{project.title}</h4>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-semibold mb-2 opacity-90">Challenge</h5>
                  <p className="text-sm opacity-80 leading-relaxed">{project.challenge}</p>
                </div>

                <div>
                  <h5 className="text-sm font-semibold mb-2 opacity-90">Solution</h5>
                  <p className="text-sm opacity-80 leading-relaxed">{project.solution}</p>
                </div>

                <div>
                  <h5 className="text-sm font-semibold mb-2 opacity-90">Results</h5>
                  <ul className="space-y-1">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm opacity-80">
                        <span className="text-white mt-1">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Case Study
              <ExternalLink size={18} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-[600px] relative max-h-screen bg-gradient-to-br from-teal-900 via-blue-900 to-teal-800 pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
              <Award className="text-teal-400" size={20} />
              <span className="text-teal-300 font-medium">1000+ Successful Projects Delivered</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our Project
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Explore our diverse portfolio of innovative solutions across web, mobile, and enterprise applications.
              Each project represents our commitment to excellence and client success.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search projects by name, technology, or industry..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "1000+", label: "Projects Completed", icon: Award },
              { value: "500+", label: "Happy Clients", icon: Users },
              { value: "50M+", label: "Users Reached", icon: TrendingUp },
              { value: "98%", label: "Success Rate", icon: Sparkles },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white rounded-xl shadow-lg p-6"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-teal-600" />
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white sticky top-0 z-40 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="text-slate-600" size={20} />
            <span className="text-slate-600 font-medium">Filter by Category:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                <cat.icon size={18} />
                {cat.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Code className="w-20 h-20 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-600 text-lg">No projects found matching your criteria.</p>
              <p className="text-slate-500 text-sm mt-2">Try a different category or search term.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
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
            <Sparkles className="w-20 h-20 text-teal-400 mx-auto mb-6 drop-shadow-lg" />
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Let&apos;s create something extraordinary together. Share your vision and we&apos;ll bring it to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}
