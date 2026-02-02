"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Award,
  Briefcase,
  GraduationCap,
  Linkedin,
  Twitter,
  Mail,
  Star,
  Code,
  Palette,
  TrendingUp,
  Shield,
  ChevronRight,
  Sparkles,
  Globe,
} from "lucide-react";
import Image from "next/image";

const experts = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Chief Technology Officer",
    department: "Technology Leadership",
    bio: "15+ years pioneering AI and machine learning solutions for Fortune 500 companies. Published researcher with 40+ patents.",
    image: "/assets/team/sarah.jpg",
    expertise: ["AI/ML", "Cloud Architecture", "Strategic Planning"],
    achievements: ["Forbes 30 Under 30", "MIT Technology Review Innovator", "5x Patent Holder"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "sarah.chen@atlantaquantum.com",
    },
    stats: { projects: 200, clients: 85, experience: 15 },
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Head of Design",
    department: "Creative & UX",
    bio: "Award-winning designer specializing in human-centered digital experiences. Former design lead at Google and Apple.",
    image: "/assets/team/michael.jpg",
    expertise: ["UI/UX Design", "Design Systems", "Brand Strategy"],
    achievements: ["Red Dot Award Winner", "Webby Award 2023", "Awwwards Jury Member"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "michael.r@atlantaquantum.com",
    },
    stats: { projects: 150, clients: 60, experience: 12 },
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Senior Full-Stack Developer",
    department: "Engineering",
    bio: "Full-stack engineer with deep expertise in scalable web applications and microservices architecture.",
    image: "/assets/team/priya.jpg",
    expertise: ["React/Node.js", "System Design", "DevOps"],
    achievements: ["Google Developer Expert", "GitHub Star", "Tech Speaker"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "priya.s@atlantaquantum.com",
    },
    stats: { projects: 180, clients: 70, experience: 10 },
    color: "from-green-500 to-teal-500",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Blockchain Architect",
    department: "Emerging Tech",
    bio: "Blockchain pioneer specializing in DeFi, smart contracts, and decentralized applications.",
    image: "/assets/team/james.jpg",
    expertise: ["Blockchain", "Web3", "Smart Contracts"],
    achievements: ["Ethereum Foundation Grant", "DeFi Protocol Builder", "Crypto Advisor"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "james.w@atlantaquantum.com",
    },
    stats: { projects: 90, clients: 45, experience: 8 },
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    name: "Emily Zhang",
    role: "Data Scientist",
    department: "Analytics & AI",
    bio: "Data science expert transforming complex datasets into actionable business intelligence.",
    image: "/assets/team/emily.jpg",
    expertise: ["Data Science", "Predictive Analytics", "Business Intelligence"],
    achievements: ["Kaggle Grandmaster", "Published Author", "AI Summit Speaker"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "emily.z@atlantaquantum.com",
    },
    stats: { projects: 120, clients: 55, experience: 9 },
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    name: "David Okonkwo",
    role: "Mobile Development Lead",
    department: "Mobile Solutions",
    bio: "Mobile app specialist building high-performance iOS and Android applications for millions of users.",
    image: "/assets/team/david.jpg",
    expertise: ["iOS/Android", "React Native", "App Performance"],
    achievements: ["Apple WWDC Scholar", "Google I/O Speaker", "50M+ Downloads"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "david.o@atlantaquantum.com",
    },
    stats: { projects: 140, clients: 65, experience: 11 },
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 7,
    name: "Sofia Martinez",
    role: "Cybersecurity Expert",
    department: "Security & Compliance",
    bio: "Cybersecurity specialist protecting digital assets and ensuring compliance across global regulations.",
    image: "/assets/team/sofia.jpg",
    expertise: ["Penetration Testing", "Security Architecture", "Compliance"],
    achievements: ["CISSP Certified", "DefCon Speaker", "Bug Bounty Hunter"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "sofia.m@atlantaquantum.com",
    },
    stats: { projects: 110, clients: 50, experience: 13 },
    color: "from-red-500 to-pink-500",
  },
  {
    id: 8,
    name: "Alex Kim",
    role: "DevOps Engineer",
    department: "Infrastructure",
    bio: "DevOps expert automating deployment pipelines and optimizing cloud infrastructure at scale.",
    image: "/assets/team/alex.jpg",
    expertise: ["CI/CD", "Kubernetes", "Cloud Infrastructure"],
    achievements: ["AWS Certified", "Docker Captain", "KubeCon Speaker"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "alex.k@atlantaquantum.com",
    },
    stats: { projects: 160, clients: 72, experience: 10 },
    color: "from-teal-500 to-blue-500",
  },
];

const departments = [
  "All Experts",
  "Technology Leadership",
  "Creative & UX",
  "Engineering",
  "Emerging Tech",
  "Analytics & AI",
  "Mobile Solutions",
  "Security & Compliance",
  "Infrastructure",
];

const ExpertCard = ({ expert, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-[480px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-700 transform-style-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
          <div className="relative h-64 bg-gradient-to-br overflow-hidden group">
            <div className={`absolute inset-0 bg-gradient-to-br ${expert.color} opacity-90`} />
            <motion.div
              className="absolute inset-0"
              animate={{ scale: isFlipped ? 1.1 : 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-10" />
            </motion.div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-white mb-1">{expert.name}</h3>
                <p className="text-white/90 font-medium">{expert.role}</p>
              </motion.div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="text-teal-600" size={18} />
              <span className="text-sm text-slate-600 font-medium">{expert.department}</span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
              {expert.bio}
            </p>

            <div className="flex flex-wrap gap-2">
              {expert.expertise.slice(0, 3).map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full border border-teal-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <motion.div
                className="flex items-center gap-2 text-teal-600 font-semibold text-sm"
                whileHover={{ x: 5 }}
              >
                Hover to see more
                <ChevronRight size={16} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${expert.color} flex items-center justify-center`}>
                  <Star className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{expert.name}</h4>
                  <p className="text-slate-300 text-sm">{expert.role}</p>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="text-sm font-semibold text-slate-300 mb-2">Key Achievements</h5>
                <ul className="space-y-1">
                  {expert.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-200">
                      <Award className="text-teal-400 flex-shrink-0 mt-0.5" size={14} />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-xl font-bold text-teal-400">{expert.stats.projects}+</div>
                  <div className="text-xs text-slate-300">Projects</div>
                </div>
                <div className="text-center p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-xl font-bold text-teal-400">{expert.stats.clients}+</div>
                  <div className="text-xs text-slate-300">Clients</div>
                </div>
                <div className="text-center p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-xl font-bold text-teal-400">{expert.stats.experience}</div>
                  <div className="text-xs text-slate-300">Years</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-3">
                {expert.social.linkedin && (
                  <motion.a
                    href={expert.social.linkedin}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    <Linkedin size={16} />
                  </motion.a>
                )}
                {expert.social.twitter && (
                  <motion.a
                    href={expert.social.twitter}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors"
                  >
                    <Twitter size={16} />
                  </motion.a>
                )}
                {expert.social.email && (
                  <motion.a
                    href={`mailto:${expert.social.email}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors"
                  >
                    <Mail size={16} />
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function OurExperts() {
  const [selectedDepartment, setSelectedDepartment] = useState("All Experts");

  const filteredExperts =
    selectedDepartment === "All Experts"
      ? experts
      : experts.filter((expert) => expert.department === selectedDepartment);

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
              <Users className="text-teal-400" size={20} />
              <span className="text-teal-300 font-medium">150+ Industry Experts</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Meet Our
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Expert Team
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              World-class professionals with deep expertise across technology, design, and innovation.
              Our team brings decades of combined experience to deliver exceptional results.
            </p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {[
                { icon: Award, value: "50+", label: "Industry Awards" },
                { icon: GraduationCap, value: "100+", label: "Certifications" },
                { icon: Globe, value: "25+", label: "Countries" },
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

      {/* Department Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {departments.map((dept) => (
              <motion.button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedDepartment === dept
                    ? "bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {dept}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Experts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDepartment}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredExperts.map((expert, index) => (
                <ExpertCard key={expert.id} expert={expert} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredExperts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-600 text-lg">No experts found in this department.</p>
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
              Ready to Work with Our Experts?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Get access to world-class talent dedicated to bringing your vision to life with cutting-edge solutions.
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
