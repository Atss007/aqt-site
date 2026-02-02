"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Globe,
  Database,
  Cloud,
  Code,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
  Award,
  CheckCircle,
} from "lucide-react";

const techCategories = [
  { id: "all", name: "All Technologies", icon: Layers },
  { id: "frontend", name: "Frontend", icon: Globe },
  { id: "backend", name: "Backend", icon: Database },
  { id: "mobile", name: "Mobile", icon: Smartphone },
  { id: "cloud", name: "Cloud & DevOps", icon: Cloud },
  { id: "emerging", name: "Emerging Tech", icon: Cpu },
];

const technologies = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    icon: "⚛️",
    description: "Building dynamic, component-based user interfaces with React",
    experience: "8+ years",
    projects: "350+",
    expertise: "Expert",
    color: "from-cyan-500 to-blue-500",
    features: ["Component Architecture", "Hooks & Context", "Performance Optimization", "Server-Side Rendering"],
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: "▲",
    description: "Production-grade React framework for modern web applications",
    experience: "5+ years",
    projects: "200+",
    expertise: "Expert",
    color: "from-slate-700 to-slate-900",
    features: ["Static Generation", "API Routes", "Image Optimization", "Incremental Static Regeneration"],
  },
  {
    name: "Vue.js",
    category: "frontend",
    icon: "💚",
    description: "Progressive JavaScript framework for building user interfaces",
    experience: "6+ years",
    projects: "150+",
    expertise: "Advanced",
    color: "from-green-500 to-teal-500",
    features: ["Composition API", "Reactive Data Binding", "Single File Components", "Vuex State Management"],
  },
  {
    name: "Angular",
    category: "frontend",
    icon: "🅰️",
    description: "TypeScript-based platform for building enterprise applications",
    experience: "7+ years",
    projects: "180+",
    expertise: "Expert",
    color: "from-red-500 to-pink-500",
    features: ["TypeScript Support", "Dependency Injection", "RxJS Integration", "Material Design"],
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "🎨",
    description: "Utility-first CSS framework for rapid UI development",
    experience: "4+ years",
    projects: "300+",
    expertise: "Expert",
    color: "from-sky-500 to-cyan-500",
    features: ["Utility Classes", "Responsive Design", "Dark Mode", "Custom Themes"],
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: "📗",
    description: "JavaScript runtime for building scalable network applications",
    experience: "8+ years",
    projects: "400+",
    expertise: "Expert",
    color: "from-green-600 to-green-800",
    features: ["Express.js", "RESTful APIs", "WebSockets", "Microservices"],
  },
  {
    name: "Python",
    category: "backend",
    icon: "🐍",
    description: "Versatile language for web development, data science, and AI",
    experience: "9+ years",
    projects: "350+",
    expertise: "Expert",
    color: "from-blue-500 to-yellow-500",
    features: ["Django", "Flask", "FastAPI", "Machine Learning"],
  },
  {
    name: "PostgreSQL",
    category: "backend",
    icon: "🐘",
    description: "Advanced open-source relational database system",
    experience: "7+ years",
    projects: "250+",
    expertise: "Expert",
    color: "from-blue-700 to-indigo-700",
    features: ["ACID Compliance", "Complex Queries", "JSON Support", "Full-text Search"],
  },
  {
    name: "MongoDB",
    category: "backend",
    icon: "🍃",
    description: "NoSQL database for modern applications",
    experience: "6+ years",
    projects: "300+",
    expertise: "Advanced",
    color: "from-green-600 to-teal-600",
    features: ["Document Model", "Horizontal Scaling", "Aggregation", "Real-time Analytics"],
  },
  {
    name: "GraphQL",
    category: "backend",
    icon: "◆",
    description: "Query language for APIs with strong typing",
    experience: "5+ years",
    projects: "120+",
    expertise: "Advanced",
    color: "from-pink-500 to-purple-500",
    features: ["Type Safety", "Single Endpoint", "Real-time Subscriptions", "Efficient Queries"],
  },

  // Mobile
  {
    name: "React Native",
    category: "mobile",
    icon: "📱",
    description: "Cross-platform mobile development with React",
    experience: "6+ years",
    projects: "200+",
    expertise: "Expert",
    color: "from-blue-500 to-cyan-500",
    features: ["Cross-Platform", "Hot Reload", "Native Modules", "Code Sharing"],
  },
  {
    name: "Flutter",
    category: "mobile",
    icon: "🦋",
    description: "Google's UI toolkit for beautiful native apps",
    experience: "4+ years",
    projects: "150+",
    expertise: "Advanced",
    color: "from-blue-400 to-sky-500",
    features: ["Fast Development", "Beautiful UI", "Native Performance", "Single Codebase"],
  },
  {
    name: "Swift",
    category: "mobile",
    icon: "🍎",
    description: "Apple's powerful language for iOS development",
    experience: "7+ years",
    projects: "180+",
    expertise: "Expert",
    color: "from-orange-500 to-red-500",
    features: ["SwiftUI", "Combine", "ARKit", "Core ML"],
  },
  {
    name: "Kotlin",
    category: "mobile",
    icon: "🤖",
    description: "Modern language for Android app development",
    experience: "6+ years",
    projects: "160+",
    expertise: "Advanced",
    color: "from-purple-500 to-indigo-500",
    features: ["Jetpack Compose", "Coroutines", "Null Safety", "Interoperability"],
  },

  // Cloud & DevOps
  {
    name: "AWS",
    category: "cloud",
    icon: "☁️",
    description: "Amazon Web Services cloud platform",
    experience: "8+ years",
    projects: "300+",
    expertise: "Expert",
    color: "from-orange-600 to-yellow-500",
    features: ["EC2", "S3", "Lambda", "RDS"],
  },
  {
    name: "Docker",
    category: "cloud",
    icon: "🐳",
    description: "Containerization platform for consistent deployments",
    experience: "7+ years",
    projects: "350+",
    expertise: "Expert",
    color: "from-blue-500 to-cyan-500",
    features: ["Containerization", "Multi-stage Builds", "Docker Compose", "Swarm"],
  },
  {
    name: "Kubernetes",
    category: "cloud",
    icon: "☸️",
    description: "Container orchestration for automated deployment",
    experience: "5+ years",
    projects: "150+",
    expertise: "Advanced",
    color: "from-blue-600 to-indigo-600",
    features: ["Auto-scaling", "Service Discovery", "Rolling Updates", "Self-healing"],
  },
  {
    name: "CI/CD",
    category: "cloud",
    icon: "🔄",
    description: "Continuous Integration and Deployment pipelines",
    experience: "6+ years",
    projects: "400+",
    expertise: "Expert",
    color: "from-green-500 to-teal-500",
    features: ["Jenkins", "GitHub Actions", "GitLab CI", "Automated Testing"],
  },

  // Emerging Tech
  {
    name: "AI/ML",
    category: "emerging",
    icon: "🤖",
    description: "Artificial Intelligence and Machine Learning solutions",
    experience: "5+ years",
    projects: "100+",
    expertise: "Advanced",
    color: "from-purple-600 to-pink-600",
    features: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
  },
  {
    name: "Blockchain",
    category: "emerging",
    icon: "⛓️",
    description: "Decentralized applications and smart contracts",
    experience: "4+ years",
    projects: "60+",
    expertise: "Advanced",
    color: "from-yellow-500 to-orange-500",
    features: ["Ethereum", "Smart Contracts", "Web3", "DeFi"],
  },
  {
    name: "IoT",
    category: "emerging",
    icon: "📡",
    description: "Internet of Things solutions and device integration",
    experience: "5+ years",
    projects: "80+",
    expertise: "Advanced",
    color: "from-teal-500 to-cyan-500",
    features: ["MQTT", "Device Management", "Edge Computing", "Sensor Networks"],
  },
  {
    name: "AR/VR",
    category: "emerging",
    icon: "🥽",
    description: "Augmented and Virtual Reality experiences",
    experience: "3+ years",
    projects: "40+",
    expertise: "Intermediate",
    color: "from-indigo-500 to-purple-500",
    features: ["Unity", "ARKit", "ARCore", "WebXR"],
  },
];

const TechCard = ({ tech, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 h-full hover:shadow-xl transition-all duration-300 overflow-hidden relative"
      >
        {/* Gradient Background on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.1 : 0 }}
          className={`absolute inset-0 bg-gradient-to-br ${tech.color}`}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-4xl">{tech.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{tech.name}</h3>
                <span className={`inline-block px-2 py-1 bg-gradient-to-r ${tech.color} bg-opacity-10 text-xs font-semibold rounded-full mt-1`}>
                  {tech.expertise}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-sm mb-4 leading-relaxed">{tech.description}</p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-slate-50 rounded-lg p-3">
              <div className="text-xs text-slate-500 mb-1">Experience</div>
              <div className="text-sm font-bold text-slate-900">{tech.experience}</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-3">
              <div className="text-xs text-slate-500 mb-1">Projects</div>
              <div className="text-sm font-bold text-slate-900">{tech.projects}</div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-700 mb-2">Key Features</div>
            <div className="flex flex-wrap gap-2">
              {tech.features.slice(0, 4).map((feature, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Hover Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-center gap-2 text-teal-600 font-semibold text-sm"
          >
            <CheckCircle size={16} />
            Production Ready
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Technologies() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTechs =
    selectedCategory === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  const categoryStats = techCategories.map((cat) => ({
    ...cat,
    count: cat.id === "all" ? technologies.length : technologies.filter((t) => t.category === cat.id).length,
  }));

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
              <Code className="text-teal-400" size={20} />
              <span className="text-teal-300 font-medium">20+ Cutting-Edge Technologies</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our Technology
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Stack
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              We leverage the latest and most powerful technologies to build scalable,
              secure, and high-performance solutions for your business.
            </p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {[
                { icon: Code, value: "20+", label: "Technologies" },
                { icon: TrendingUp, value: "1000+", label: "Projects Built" },
                { icon: Award, value: "Expert", label: "Level Expertise" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-2 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                    <stat.icon className="text-teal-400" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 sticky top-0 z-40 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categoryStats.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === cat.id
                      ? "bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <IconComponent size={20} />
                  {cat.name}
                  <span
                    className={`ml-1 px-2 py-0.5 rounded-full text-xs font-bold ${
                      selectedCategory === cat.id ? "bg-white/20" : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {cat.count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredTechs.map((tech, index) => (
                <TechCard key={tech.name} tech={tech} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
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
              Ready to Build with the Best?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Let&apos;s leverage these powerful technologies to create innovative solutions for your business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Start Your Project
            </motion.button>
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
