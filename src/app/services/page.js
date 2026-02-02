"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code,
  Palette,
  ShoppingCart,
  Plug,
  Cloud,
  BarChart3,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Monitor,
  Database,
  Cpu,
  GitBranch,
} from "lucide-react";

const services = [
  {
    id: "web-dev",
    title: "Web Development",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    shortDesc: "Modern, responsive websites built with cutting-edge technologies",
    description:
      "We create fast, scalable, and responsive websites tailored to your business needs. From landing pages to complex web applications, our solutions are designed to deliver exceptional user experiences and drive results.",
    features: [
      "Custom Website Development",
      "Progressive Web Apps (PWA)",
      "Single Page Applications (SPA)",
      "E-Commerce Solutions",
      "Content Management Systems",
      "API Development & Integration",
    ],
    technologies: ["React", "Next.js", "Vue.js", "Angular", "Node.js", "Django", "Laravel"],
    benefits: [
      "Fast loading times",
      "SEO optimized",
      "Mobile responsive",
      "Scalable architecture",
      "Security best practices",
      "Analytics integration",
    ],
    process: [
      { step: "Discovery", desc: "Understanding your requirements and goals" },
      { step: "Planning", desc: "Creating wireframes and technical specifications" },
      { step: "Development", desc: "Building your website with best practices" },
      { step: "Testing", desc: "Rigorous QA across devices and browsers" },
      { step: "Launch", desc: "Deployment and performance optimization" },
      { step: "Support", desc: "Ongoing maintenance and updates" },
    ],
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    shortDesc: "Native and cross-platform mobile applications for iOS and Android",
    description:
      "We develop high-performance mobile applications that deliver seamless experiences across iOS and Android platforms. Whether native or cross-platform, our apps are built to engage users and drive business growth.",
    features: [
      "Native iOS Development",
      "Native Android Development",
      "Cross-Platform Solutions",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
    ],
    technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "SwiftUI"],
    benefits: [
      "Native performance",
      "Intuitive UI/UX",
      "Secure data handling",
      "Scalable backend",
      "Regular updates",
      "App store compliance",
    ],
    process: [
      { step: "Strategy", desc: "Defining app concept and target audience" },
      { step: "Design", desc: "Creating engaging UI/UX designs" },
      { step: "Development", desc: "Building robust mobile applications" },
      { step: "Testing", desc: "Comprehensive device and OS testing" },
      { step: "Deployment", desc: "App store submission and launch" },
      { step: "Maintenance", desc: "Updates, bug fixes, and enhancements" },
    ],
  },
  {
    id: "software-dev",
    title: "Software Development",
    icon: Code,
    color: "from-green-500 to-teal-500",
    shortDesc: "Custom enterprise software solutions and system integrations",
    description:
      "We build custom software solutions that solve complex business problems efficiently. From CRM systems to enterprise applications, our software is designed to streamline operations and boost productivity.",
    features: [
      "Enterprise Software",
      "CRM/ERP Systems",
      "Business Automation",
      "Legacy System Modernization",
      "Microservices Architecture",
      "System Integration",
    ],
    technologies: ["Java", "Python", ".NET", "Go", "Rust", "PostgreSQL", "MongoDB"],
    benefits: [
      "Tailored solutions",
      "Scalable architecture",
      "Enhanced productivity",
      "Cost reduction",
      "Better data insights",
      "Competitive advantage",
    ],
    process: [
      { step: "Analysis", desc: "Understanding business processes and pain points" },
      { step: "Architecture", desc: "Designing scalable system architecture" },
      { step: "Development", desc: "Agile development with regular iterations" },
      { step: "Integration", desc: "Connecting with existing systems" },
      { step: "Deployment", desc: "Smooth rollout and user training" },
      { step: "Evolution", desc: "Continuous improvement and scaling" },
    ],
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    icon: Palette,
    color: "from-pink-500 to-red-500",
    shortDesc: "User-centered design that delights and converts",
    description:
      "We create intuitive and engaging user experiences that drive conversions and customer satisfaction. Our design process is rooted in user research, testing, and iterative improvement.",
    features: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Visual Design",
      "Interaction Design",
      "Design Systems",
      "Usability Testing",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer"],
    benefits: [
      "Improved user satisfaction",
      "Higher conversion rates",
      "Reduced development costs",
      "Brand consistency",
      "Accessibility compliance",
      "Competitive differentiation",
    ],
    process: [
      { step: "Research", desc: "User interviews and competitive analysis" },
      { step: "Ideation", desc: "Brainstorming and concept development" },
      { step: "Wireframing", desc: "Creating low-fidelity layouts" },
      { step: "Design", desc: "High-fidelity visual designs" },
      { step: "Prototype", desc: "Interactive prototypes for testing" },
      { step: "Iterate", desc: "Refining based on user feedback" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    icon: Cloud,
    color: "from-indigo-500 to-blue-500",
    shortDesc: "Scalable cloud infrastructure and migration services",
    description:
      "We help businesses leverage the power of cloud computing with AWS, Azure, and Google Cloud. From migration to optimization, we ensure your infrastructure is secure, scalable, and cost-effective.",
    features: [
      "Cloud Migration",
      "Infrastructure as Code",
      "Auto-scaling Setup",
      "Disaster Recovery",
      "Cost Optimization",
      "Multi-cloud Strategy",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability",
      "Enhanced security",
      "Global availability",
      "Automatic backups",
      "Pay-as-you-go pricing",
    ],
    process: [
      { step: "Assessment", desc: "Evaluating current infrastructure" },
      { step: "Strategy", desc: "Designing cloud architecture" },
      { step: "Migration", desc: "Moving workloads to the cloud" },
      { step: "Optimization", desc: "Fine-tuning performance and costs" },
      { step: "Monitoring", desc: "24/7 infrastructure monitoring" },
      { step: "Support", desc: "Ongoing management and updates" },
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: BarChart3,
    color: "from-orange-500 to-yellow-500",
    shortDesc: "Data-driven marketing strategies that drive growth",
    description:
      "We create comprehensive digital marketing strategies that increase your online visibility, drive traffic, and convert visitors into customers. Our approach is data-driven and results-focused.",
    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "Content Marketing",
      "PPC Advertising",
      "Email Campaigns",
      "Analytics & Reporting",
    ],
    technologies: ["Google Ads", "Facebook Ads", "Google Analytics", "SEMrush", "HubSpot", "Mailchimp"],
    benefits: [
      "Increased web traffic",
      "Better search rankings",
      "Higher ROI",
      "Brand awareness",
      "Lead generation",
      "Customer insights",
    ],
    process: [
      { step: "Audit", desc: "Analyzing current digital presence" },
      { step: "Strategy", desc: "Creating comprehensive marketing plan" },
      { step: "Implementation", desc: "Executing campaigns across channels" },
      { step: "Optimization", desc: "A/B testing and refinement" },
      { step: "Reporting", desc: "Transparent performance tracking" },
      { step: "Scale", desc: "Growing successful campaigns" },
    ],
  },
];

const ServiceDetail = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className={`bg-gradient-to-r ${service.color} rounded-2xl p-8 text-white`}>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <IconComponent size={32} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{service.title}</h2>
            <p className="text-white/80">{service.shortDesc}</p>
          </div>
        </div>
        <p className="text-lg leading-relaxed">{service.description}</p>
      </div>

      {/* Features & Technologies */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <CheckCircle className="text-teal-600" size={24} />
            Key Features
          </h3>
          <ul className="space-y-3">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-teal-600 mt-1">✓</span>
                <span className="text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Cpu className="text-purple-600" size={24} />
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech, i) => (
              <span
                key={i}
                className={`px-4 py-2 bg-gradient-to-r ${service.color} bg-opacity-10 text-sm font-medium rounded-full border border-slate-200`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Sparkles className="text-yellow-500" size={24} />
          Benefits You&apos;ll Enjoy
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {service.benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
            >
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}>
                <CheckCircle className="text-white" size={16} />
              </div>
              <span className="text-slate-700 font-medium text-sm">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <GitBranch className="text-blue-600" size={24} />
          Our Process
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.process.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white font-bold text-sm`}>
                {i + 1}
              </div>
              <div className="bg-slate-50 rounded-lg p-6 h-full border-l-4 border-teal-500">
                <h4 className="font-bold text-slate-900 mb-2">{step.step}</h4>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(services[0]);

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
              <Zap className="text-teal-400" size={20} />
              <span className="text-teal-300 font-medium">Comprehensive Technology Solutions</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              From web and mobile development to cloud solutions and digital marketing,
              we offer end-to-end technology services that drive business growth.
            </p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {[
                { icon: Globe, value: "8+", label: "Service Areas" },
                { icon: Monitor, value: "1000+", label: "Projects Delivered" },
                { icon: Shield, value: "100%", label: "Client Satisfaction" },
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

      {/* Services Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 sticky top-0 z-40 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedService.id === service.id
                      ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <IconComponent size={20} />
                  {service.title}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <ServiceDetail key={selectedService.id} service={selectedService} />
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
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Let&apos;s discuss how our services can help you achieve your business goals.
              Schedule a free consultation today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                Get Free Consultation
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:border-teal-500 hover:text-teal-400 transition-all duration-300"
              >
                View Pricing
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
