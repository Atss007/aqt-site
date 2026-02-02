"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  BookOpen,
  Lightbulb,
  Award,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Filter,
  Sparkles,
  Users,
  Heart,
  Share2,
  Eye,
} from "lucide-react";

const categories = [
  { id: "all", name: "All Insights", icon: BookOpen },
  { id: "trends", name: "Industry Trends", icon: TrendingUp },
  { id: "case-studies", name: "Case Studies", icon: Award },
  { id: "tutorials", name: "Tutorials", icon: Lightbulb },
  { id: "news", name: "Company News", icon: Sparkles },
];

const insights = [
  {
    id: 1,
    title: "The Future of AI in Web Development: What to Expect in 2026",
    category: "trends",
    excerpt: "Explore how artificial intelligence is revolutionizing web development and what developers need to know to stay ahead of the curve.",
    image: "/assets/insights/ai-web.jpg",
    author: "Dr. Sarah Chen",
    authorRole: "CTO",
    date: "2026-01-15",
    readTime: "8 min read",
    views: "12.5K",
    likes: "856",
    color: "from-purple-500 to-pink-500",
    tags: ["AI", "Web Development", "Future Tech"],
  },
  {
    id: 2,
    title: "Case Study: How We Scaled HealthSync to 50K+ Users",
    category: "case-studies",
    excerpt: "A deep dive into the architecture decisions and optimizations that enabled HealthSync to handle massive growth while maintaining performance.",
    image: "/assets/insights/healthsync-case.jpg",
    author: "Michael Rodriguez",
    authorRole: "Head of Design",
    date: "2026-01-10",
    readTime: "12 min read",
    views: "18.2K",
    likes: "1.2K",
    color: "from-blue-500 to-cyan-500",
    tags: ["Case Study", "Scaling", "Healthcare"],
  },
  {
    id: 3,
    title: "Building Accessible Web Applications: A Complete Guide",
    category: "tutorials",
    excerpt: "Learn how to create inclusive web experiences that work for everyone, including users with disabilities. WCAG 2.1 compliance made easy.",
    image: "/assets/insights/accessibility.jpg",
    author: "Priya Sharma",
    authorRole: "Senior Developer",
    date: "2026-01-08",
    readTime: "10 min read",
    views: "9.8K",
    likes: "672",
    color: "from-green-500 to-teal-500",
    tags: ["Accessibility", "Tutorial", "Web Development"],
  },
  {
    id: 4,
    title: "Atlanta Quantum Tech Expands to Asia-Pacific Region",
    category: "news",
    excerpt: "We're excited to announce the opening of our new offices in Singapore and Tokyo, bringing our services closer to APAC clients.",
    image: "/assets/insights/expansion.jpg",
    author: "Company News",
    authorRole: "Press Release",
    date: "2026-01-05",
    readTime: "5 min read",
    views: "15.3K",
    likes: "924",
    color: "from-orange-500 to-red-500",
    tags: ["Company News", "Expansion", "Global"],
  },
  {
    id: 5,
    title: "Microservices vs Monolithic: Choosing the Right Architecture",
    category: "trends",
    excerpt: "Understanding the pros and cons of different architectural patterns to make informed decisions for your next project.",
    image: "/assets/insights/architecture.jpg",
    author: "James Wilson",
    authorRole: "Blockchain Architect",
    date: "2026-01-03",
    readTime: "15 min read",
    views: "21.6K",
    likes: "1.5K",
    color: "from-indigo-500 to-purple-500",
    tags: ["Architecture", "Backend", "Best Practices"],
  },
  {
    id: 6,
    title: "React Server Components: A Practical Tutorial",
    category: "tutorials",
    excerpt: "Get hands-on with React Server Components and learn how they can improve your app's performance and user experience.",
    image: "/assets/insights/react-server.jpg",
    author: "Emily Zhang",
    authorRole: "Data Scientist",
    date: "2025-12-28",
    readTime: "11 min read",
    views: "14.7K",
    likes: "983",
    color: "from-cyan-500 to-blue-500",
    tags: ["React", "Tutorial", "Performance"],
  },
  {
    id: 7,
    title: "Case Study: E-Commerce Platform Performance Optimization",
    category: "case-studies",
    excerpt: "How we reduced ShopNow's page load time by 60% and increased conversion rates by 35% through strategic optimizations.",
    image: "/assets/insights/ecommerce-perf.jpg",
    author: "David Okonkwo",
    authorRole: "Mobile Lead",
    date: "2025-12-25",
    readTime: "9 min read",
    views: "16.4K",
    likes: "1.1K",
    color: "from-yellow-500 to-orange-500",
    tags: ["Performance", "E-Commerce", "Case Study"],
  },
  {
    id: 8,
    title: "The Rise of Edge Computing in Modern Applications",
    category: "trends",
    excerpt: "Discover how edge computing is transforming application architecture and enabling faster, more responsive user experiences.",
    image: "/assets/insights/edge-computing.jpg",
    author: "Sofia Martinez",
    authorRole: "Security Expert",
    date: "2025-12-20",
    readTime: "7 min read",
    views: "11.2K",
    likes: "745",
    color: "from-pink-500 to-red-500",
    tags: ["Edge Computing", "Cloud", "Infrastructure"],
  },
  {
    id: 9,
    title: "Cybersecurity Best Practices for Modern Web Apps",
    category: "tutorials",
    excerpt: "Essential security measures every developer should implement to protect web applications from common vulnerabilities.",
    image: "/assets/insights/security.jpg",
    author: "Alex Kim",
    authorRole: "DevOps Engineer",
    date: "2025-12-18",
    readTime: "13 min read",
    views: "19.8K",
    likes: "1.3K",
    color: "from-red-500 to-pink-500",
    tags: ["Security", "Best Practices", "Tutorial"],
  },
];

const InsightCard = ({ insight, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group h-full"
    >
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-slate-200">
          <div className={`absolute inset-0 bg-gradient-to-br ${insight.color} opacity-60`} />
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <BookOpen className="text-white/30" size={100} strokeWidth={1} />
          </motion.div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 bg-gradient-to-r ${insight.color} text-white text-xs font-semibold rounded-full shadow-lg`}>
              {categories.find((c) => c.id === insight.category)?.name}
            </span>
          </div>

          {/* Stats Overlay */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <div className="flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
              <Eye size={12} />
              {insight.views}
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
              <Heart size={12} />
              {insight.likes}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors">
              {insight.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
              {insight.excerpt}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {insight.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md hover:bg-slate-200 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${insight.color} flex items-center justify-center text-white font-bold`}>
                  {insight.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{insight.author}</div>
                  <div className="text-xs text-slate-500">{insight.authorRole}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {new Date(insight.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {insight.readTime}
                </span>
              </div>

              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-1 text-teal-600 font-semibold hover:text-teal-700"
              >
                Read More
                <ArrowRight size={14} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};

const FeaturedInsight = ({ insight }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden mb-12"
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative h-96 md:h-auto overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${insight.color} opacity-60`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <Award className="text-white/30" size={150} strokeWidth={1} />
          </div>
          <div className="absolute top-6 left-6">
            <span className="px-4 py-2 bg-white text-slate-900 text-sm font-bold rounded-full shadow-lg">
              ⭐ Featured
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className={`inline-block px-3 py-1 bg-gradient-to-r ${insight.color} text-white text-xs font-semibold rounded-full mb-4 w-fit`}>
            {categories.find((c) => c.id === insight.category)?.name}
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{insight.title}</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">{insight.excerpt}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {insight.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-slate-200">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${insight.color} flex items-center justify-center text-white font-bold text-lg`}>
                {insight.author.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-slate-900">{insight.author}</div>
                <div className="text-sm text-slate-500">{insight.authorRole}</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 bg-gradient-to-r ${insight.color} text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
            >
              Read Article
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInsights = insights.filter((insight) => {
    const matchesCategory = selectedCategory === "all" || insight.category === selectedCategory;
    const matchesSearch =
      insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredInsight = insights[0];
  const regularInsights = filteredInsights.filter((i) => i.id !== featuredInsight.id);

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
              <Lightbulb className="text-teal-400" size={20} />
              <span className="text-teal-300 font-medium">Expert Insights & Industry Trends</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Insights &
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Resources
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Stay ahead with the latest trends, tutorials, and case studies from our team of experts.
              Learn, grow, and innovate with Atlanta Quantum Tech.
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
                  placeholder="Search articles, tutorials, and case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 sticky top-0 z-40 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="text-slate-600" size={20} />
            <span className="text-slate-600 font-medium">Filter by Category:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === cat.id
                      ? "bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <IconComponent size={18} />
                  {cat.name}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      {selectedCategory === "all" && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <FeaturedInsight insight={featuredInsight} />
          </div>
        </section>
      )}

      {/* Insights Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {regularInsights.map((insight, index) => (
                <InsightCard key={insight.id} insight={insight} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {regularInsights.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="w-20 h-20 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-600 text-lg">No insights found matching your criteria.</p>
              <p className="text-slate-500 text-sm mt-2">Try a different category or search term.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
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
              Never Miss an Update
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Subscribe to our newsletter and get the latest insights, tutorials, and industry news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}
