"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  HelpCircle,
  ChevronDown,
  MessageCircle,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  DollarSign,
  Code,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Users,
} from "lucide-react";

const faqCategories = [
  {
    id: "general",
    name: "General",
    icon: HelpCircle,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "services",
    name: "Services",
    icon: Code,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "pricing",
    name: "Pricing",
    icon: DollarSign,
    color: "from-green-500 to-teal-500",
  },
  {
    id: "process",
    name: "Process",
    icon: CheckCircle,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "technical",
    name: "Technical",
    icon: Zap,
    color: "from-indigo-500 to-purple-500",
  },
];

const faqs = [
  // General
  {
    category: "general",
    question: "What services does Atlanta Quantum Tech provide?",
    answer:
      "We offer comprehensive IT solutions including web development, mobile app development, software development, UI/UX design, e-commerce solutions, API development, cloud solutions, and digital marketing. Our team specializes in creating custom solutions tailored to your specific business needs.",
  },
  {
    category: "general",
    question: "How long has Atlanta Quantum Tech been in business?",
    answer:
      "Atlanta Quantum Tech was founded in 2015 and has been delivering innovative technology solutions for over 9 years. We've successfully completed 1000+ projects for 500+ clients across 25+ countries worldwide.",
  },
  {
    category: "general",
    question: "What industries do you serve?",
    answer:
      "We serve diverse industries including Healthcare, Finance, Education, Retail & E-Commerce, Travel & Hospitality, and Manufacturing. Our solutions are customized to meet the unique challenges and regulatory requirements of each sector.",
  },
  {
    category: "general",
    question: "Do you work with startups or only established companies?",
    answer:
      "We work with businesses of all sizes - from early-stage startups to Fortune 500 companies. Our flexible engagement models and scalable solutions make us an ideal partner regardless of your company's size or stage.",
  },

  // Services
  {
    category: "services",
    question: "What web technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies including React.js, Next.js, Node.js, Angular, Vue.js, and full MEAN/MERN stack development. We also work with Python, PHP, and other backend technologies based on project requirements.",
  },
  {
    category: "services",
    question: "Do you offer mobile app development for both iOS and Android?",
    answer:
      "Yes, we develop native iOS and Android apps, as well as cross-platform applications using React Native, Flutter, and Ionic. We help you choose the best approach based on your requirements, budget, and timeline.",
  },
  {
    category: "services",
    question: "Can you help with UI/UX design for existing products?",
    answer:
      "Absolutely! We offer UI/UX redesign services for existing products. Our design team conducts thorough user research, creates wireframes and prototypes, and implements modern, user-friendly interfaces that improve engagement and conversion rates.",
  },
  {
    category: "services",
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer comprehensive post-launch support including bug fixes, updates, hosting management, and feature enhancements. We provide flexible support packages including 24/7 emergency support options.",
  },

  // Pricing
  {
    category: "pricing",
    question: "How much does it cost to build a website?",
    answer:
      "Website costs vary based on complexity, features, and design requirements. A basic website starts from $5,000, while complex web applications can range from $20,000 to $100,000+. We provide detailed estimates after understanding your specific requirements.",
  },
  {
    category: "pricing",
    question: "What are your pricing models?",
    answer:
      "We offer flexible pricing models including fixed-price projects, time & materials (hourly), and dedicated team arrangements. We'll recommend the best model based on your project scope, timeline, and budget.",
  },
  {
    category: "pricing",
    question: "Do you require upfront payment?",
    answer:
      "Typically, we require a 30-50% upfront payment to begin work, with the remainder split into milestone-based payments throughout the project. Payment terms are discussed and agreed upon before project kickoff.",
  },
  {
    category: "pricing",
    question: "Are there any hidden costs?",
    answer:
      "No, we believe in transparent pricing. All costs including development, design, testing, and initial support are clearly outlined in our proposals. Any additional costs for third-party services or scope changes are discussed and approved before implementation.",
  },

  // Process
  {
    category: "process",
    question: "What is your typical project timeline?",
    answer:
      "Timelines vary by project scope. A simple website takes 4-6 weeks, while complex applications can take 3-6 months or more. We provide detailed timelines during the planning phase and keep you updated throughout development.",
  },
  {
    category: "process",
    question: "How does your development process work?",
    answer:
      "We follow an agile methodology: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development, 4) Testing & QA, 5) Deployment, 6) Support. You'll have regular updates and opportunities to review progress at each stage.",
  },
  {
    category: "process",
    question: "Will I own the source code after project completion?",
    answer:
      "Yes, upon final payment, you receive full ownership of all source code, designs, and project assets. We provide complete documentation and transfer all intellectual property rights to you.",
  },
  {
    category: "process",
    question: "How do you handle project communication?",
    answer:
      "We assign a dedicated project manager who serves as your main point of contact. Communication happens via email, Slack, video calls, and project management tools. We schedule regular check-ins and provide weekly progress reports.",
  },

  // Technical
  {
    category: "technical",
    question: "Do you ensure website security and data protection?",
    answer:
      "Security is our top priority. We implement industry-standard security practices including SSL certificates, data encryption, secure authentication, regular security audits, and GDPR compliance. We follow OWASP guidelines for web application security.",
  },
  {
    category: "technical",
    question: "Will my website/app be mobile-responsive?",
    answer:
      "Yes, all our web solutions are fully responsive and optimized for mobile, tablet, and desktop devices. We follow mobile-first design principles and test across multiple devices and browsers to ensure consistent performance.",
  },
  {
    category: "technical",
    question: "Do you provide SEO optimization?",
    answer:
      "Yes, we implement technical SEO best practices including optimized site structure, meta tags, fast loading speeds, mobile responsiveness, and clean code. We also offer comprehensive SEO and digital marketing services for ongoing optimization.",
  },
  {
    category: "technical",
    question: "What hosting solutions do you recommend?",
    answer:
      "We recommend cloud hosting solutions like AWS, Google Cloud, or Azure for scalability and reliability. We can help with hosting setup, management, and optimization based on your specific requirements and budget.",
  },
  {
    category: "technical",
    question: "Can you integrate third-party APIs and services?",
    answer:
      "Absolutely! We have extensive experience integrating payment gateways (Stripe, PayPal), CRMs (Salesforce, HubSpot), analytics tools, social media APIs, shipping services, and various other third-party platforms.",
  },
];

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-slate-200 last:border-b-0"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 flex items-start justify-between gap-4 hover:bg-slate-50 transition-colors duration-200 text-left group"
      >
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
            {faq.question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="text-slate-400 group-hover:text-teal-600" size={24} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("general");

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
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
              <HelpCircle className="text-teal-400" size={20} />
              <span className="text-teal-300 font-medium">Quick Answers to Common Questions</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Frequently Asked
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Find answers to common questions about our services, pricing, process, and more.
              Can&apos;t find what you&apos;re looking for? Contact our team.
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
                  placeholder="Search for answers..."
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
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            <motion.button
              onClick={() => setSelectedCategory("all")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              All Questions
            </motion.button>
            {faqCategories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <cat.icon size={18} />
                {cat.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
            >
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => <FAQItem key={index} faq={faq} index={index} />)
              ) : (
                <div className="py-20 text-center">
                  <HelpCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-600 text-lg">No questions found matching your search.</p>
                  <p className="text-slate-500 text-sm mt-2">Try a different search term or category.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our team is here to help. Choose your preferred way to get in touch.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Live Chat",
                description: "Chat with our support team in real-time",
                action: "Start Chat",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Mail,
                title: "Email Us",
                description: "Send us a detailed message",
                action: "Send Email",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Phone,
                title: "Call Us",
                description: "Speak directly with our experts",
                action: "Call Now",
                color: "from-green-500 to-teal-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{item.title}</h3>
                <p className="text-slate-600 mb-6 text-center">{item.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 bg-gradient-to-r ${item.color} text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300`}
                >
                  {item.action}
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white text-center"
          >
            <Clock className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Business Hours</h3>
            <p className="text-lg opacity-90">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
            <p className="text-sm opacity-75 mt-2">24/7 emergency support available for active clients</p>
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
