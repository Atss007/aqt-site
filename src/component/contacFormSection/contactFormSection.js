"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  DollarSign,
  Briefcase,
  CheckCircle,
  Globe,
  Smartphone,
  Code,
  Palette,
  ShoppingCart,
  Plug,
  Cloud,
  BarChart3,
  Monitor,
  Clock,
  Shield,
  Award,
  Users,
  AlertCircle,
} from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    budget: "",
    type: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const serviceTypes = [
    { value: "web", label: "Web Development", icon: Globe },
    { value: "software", label: "Software Development", icon: Monitor },
    { value: "mobile", label: "Mobile App Development", icon: Smartphone },
    { value: "uiux", label: "UI/UX Development", icon: Palette },
    { value: "ecommerce", label: "E-Commerce Development", icon: ShoppingCart },
    { value: "api", label: "API Development", icon: Plug },
    { value: "cloud", label: "Cloud Solutions", icon: Cloud },
    { value: "digital", label: "Digital Marketing", icon: BarChart3 },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else {
      const cleaned = formData.contact.replace(/\D/g, "");
      if (cleaned.length < 10) {
        newErrors.contact = "Contact number must be at least 10 digits";
      }
    }

    if (!formData.description.trim()) {
      newErrors.description = "Project description is required";
    } else if (formData.description.trim().length < 20) {
      newErrors.description = "Description must be at least 20 characters";
    }

    if (!agreeToTerms) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      const firstError = document.querySelector('.border-red-500');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        contact: "",
        budget: "",
        type: "",
        description: "",
      });
      setAgreeToTerms(false);
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Hero Section */}
      <section className="  h-[600px] relative max-h-screen bg-gradient-to-br from-teal-900 via-blue-900 to-teal-800 pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle grid pattern overlay */}
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
              <Shield className="text-teal-400" size={20} />
              <span className="text-teal-300 font-medium">Trusted by 500+ Companies</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Discuss
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Your Project
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Share your vision with us. Our team of experts will respond within 24 hours with a customized solution tailored to your needs.
            </p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {[
                { value: "24h", label: "Response Time" },
                { value: "500+", label: "Projects Delivered" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Form Section with Background */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
        {/* Animated Background SVG Patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Geometric Pattern */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="geometric-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="2" fill="#0d9488" />
                <circle cx="75" cy="25" r="2" fill="#0891b2" />
                <circle cx="25" cy="75" r="2" fill="#0891b2" />
                <circle cx="75" cy="75" r="2" fill="#0d9488" />
                <path d="M25 25 L75 25 L75 75 L25 75 Z" fill="none" stroke="#0d9488" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
          </svg>

          {/* Floating Abstract Shapes */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-10 w-64 h-64 opacity-10"
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#0d9488"
                d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,40.4,76.9C27,84.8,13.5,88,-0.3,88.5C-14.1,89,-28.2,86.8,-41.2,78.9C-54.2,71,-66.1,57.4,-73.8,42.1C-81.5,26.8,-85,10.4,-84.9,-6.1C-84.8,-22.6,-81.1,-39.2,-72.8,-53.5C-64.5,-67.8,-51.6,-79.8,-37.2,-87C-22.8,-94.2,-11.4,-96.6,1.5,-99.1C14.4,-101.6,28.8,-104.2,44.7,-76.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 left-10 w-80 h-80 opacity-10"
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#0891b2"
                d="M39.5,-65.9C51.4,-58.5,61.5,-48.3,68.6,-36.2C75.7,-24.1,79.8,-10.1,79.5,3.8C79.2,17.7,74.5,31.5,66.3,43.1C58.1,54.7,46.4,64.1,33.3,69.8C20.2,75.5,5.7,77.5,-8.1,75.9C-21.9,74.3,-35.1,69.1,-47.8,62.3C-60.5,55.5,-72.7,47.1,-79.4,35.4C-86.1,23.7,-87.3,8.7,-84.7,-5.3C-82.1,-19.3,-75.7,-32.3,-66.8,-43.8C-57.9,-55.3,-46.5,-65.3,-33.8,-72.3C-21.1,-79.3,-7.1,-83.3,5.3,-81.9C17.7,-80.5,27.6,-73.3,39.5,-65.9Z"
                transform="translate(100 100)"
              />
            </svg>
          </motion.div>

          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 bg-white rounded-xl shadow-xl border border-slate-200 p-8 lg:p-10 relative overflow-hidden"
            >
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-slate-600">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </motion.div>

                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 overflow-hidden"
                    >
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                      <div>
                        <p className="text-green-900 font-semibold text-sm">Message sent successfully!</p>
                        <p className="text-green-700 text-sm mt-1">
                          We&apos;ve received your inquiry and will respond within 24 hours.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Name */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <motion.div
                        animate={{
                          scale: focusedField === 'name' ? [1, 1.1, 1] : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${focusedField === 'name'
                          ? 'bg-teal-500 shadow-lg shadow-teal-500/30'
                          : 'bg-slate-100'
                          }`}
                      >
                        <User
                          className={`transition-colors duration-200 ${focusedField === 'name' ? 'text-white' : 'text-slate-600'
                            }`}
                          size={18}
                          strokeWidth={2.5}
                        />
                      </motion.div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="John Doe"
                        className={`w-full pl-16 pr-4 py-3 border-2 ${errors.name ? "border-red-300 bg-red-50" : "border-slate-300 bg-white"
                          } rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300 transition-all duration-200 outline-none text-slate-900 placeholder:text-slate-400 hover:border-slate-400`}
                      />
                    </div>
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="text-red-600 text-xs mt-1.5 flex items-center gap-1"
                        >
                          <AlertCircle size={12} />
                          {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Email & Phone Grid */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <motion.div
                          animate={{
                            scale: focusedField === 'email' ? [1, 1.1, 1] : 1,
                          }}
                          transition={{ duration: 0.3 }}
                          className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${focusedField === 'email'
                            ? 'bg-teal-500 shadow-lg shadow-teal-500/30'
                            : 'bg-slate-100'
                            }`}
                        >
                          <Mail
                            className={`transition-colors duration-200 ${focusedField === 'email' ? 'text-white' : 'text-slate-600'
                              }`}
                            size={18}
                            strokeWidth={2.5}
                          />
                        </motion.div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="john@company.com"
                          className={`w-full pl-16 pr-4 py-3 border-2 ${errors.email ? "border-red-300 bg-red-50" : "border-slate-300 bg-white"
                            } rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300 transition-all duration-200 outline-none text-slate-900 placeholder:text-slate-400 hover:border-slate-400`}
                        />
                      </div>
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="text-red-600 text-xs mt-1.5 flex items-center gap-1"
                          >
                            <AlertCircle size={12} />
                            {errors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <label htmlFor="contact" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <motion.div
                          animate={{
                            scale: focusedField === 'contact' ? [1, 1.1, 1] : 1,
                          }}
                          transition={{ duration: 0.3 }}
                          className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${focusedField === 'contact'
                            ? 'bg-teal-500 shadow-lg shadow-teal-500/30'
                            : 'bg-slate-100'
                            }`}
                        >
                          <Phone
                            className={`transition-colors duration-200 ${focusedField === 'contact' ? 'text-white' : 'text-slate-600'
                              }`}
                            size={18}
                            strokeWidth={2.5}
                          />
                        </motion.div>
                        <input
                          type="tel"
                          id="contact"
                          name="contact"
                          value={formData.contact}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('contact')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="+1 (555) 000-0000"
                          className={`w-full pl-16 pr-4 py-3 border-2 ${errors.contact ? "border-red-300 bg-red-50" : "border-slate-300 bg-white"
                            } rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300 transition-all duration-200 outline-none text-slate-900 placeholder:text-slate-400 hover:border-slate-400`}
                        />
                      </div>
                      <AnimatePresence>
                        {errors.contact && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="text-red-600 text-xs mt-1.5 flex items-center gap-1"
                          >
                            <AlertCircle size={12} />
                            {errors.contact}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>

                  {/* Service Type & Budget Grid */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-2">
                        Service Type
                      </label>
                      <div className="relative">
                        <motion.div
                          animate={{
                            scale: focusedField === 'type' ? [1, 1.1, 1] : 1,
                          }}
                          transition={{ duration: 0.3 }}
                          className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg flex items-center justify-center z-10 transition-all duration-200 ${focusedField === 'type'
                            ? 'bg-teal-500 shadow-lg shadow-teal-500/30'
                            : 'bg-slate-100'
                            }`}
                        >
                          <Briefcase
                            className={`transition-colors duration-200 ${focusedField === 'type' ? 'text-white' : 'text-slate-600'
                              }`}
                            size={18}
                            strokeWidth={2.5}
                          />
                        </motion.div>
                        <select
                          id="type"
                          name="type"
                          value={formData.type}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('type')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-16 pr-10 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300 transition-all duration-200 outline-none appearance-none bg-white text-slate-900 cursor-pointer hover:border-slate-400"
                        >
                          <option value="">Select a service</option>
                          {serviceTypes.map((service) => (
                            <option key={service.value} value={service.value}>
                              {service.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                        Budget Range
                      </label>
                      <div className="relative">
                        <motion.div
                          animate={{
                            scale: focusedField === 'budget' ? [1, 1.1, 1] : 1,
                          }}
                          transition={{ duration: 0.3 }}
                          className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${focusedField === 'budget'
                            ? 'bg-teal-500 shadow-lg shadow-teal-500/30'
                            : 'bg-slate-100'
                            }`}
                        >
                          <DollarSign
                            className={`transition-colors duration-200 ${focusedField === 'budget' ? 'text-white' : 'text-slate-600'
                              }`}
                            size={18}
                            strokeWidth={2.5}
                          />
                        </motion.div>
                        <input
                          type="text"
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('budget')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="e.g., $5,000 - $10,000"
                          className="w-full pl-16 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300 transition-all duration-200 outline-none text-slate-900 placeholder:text-slate-400 hover:border-slate-400 bg-white"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-2">
                      Project Description <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <motion.div
                        animate={{
                          scale: focusedField === 'description' ? [1, 1.1, 1] : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`absolute left-3.5 top-3.5 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${focusedField === 'description'
                          ? 'bg-teal-500 shadow-lg shadow-teal-500/30'
                          : 'bg-slate-100'
                          }`}
                      >
                        <MessageSquare
                          className={`transition-colors duration-200 ${focusedField === 'description' ? 'text-white' : 'text-slate-600'
                            }`}
                          size={18}
                          strokeWidth={2.5}
                        />
                      </motion.div>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('description')}
                        onBlur={() => setFocusedField(null)}
                        rows="5"
                        placeholder="Please describe your project requirements, goals, and timeline..."
                        className={`w-full pl-16 pr-4 py-3 border-2 ${errors.description ? "border-red-300 bg-red-50" : "border-slate-300 bg-white"
                          } rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300 transition-all duration-200 outline-none resize-none text-slate-900 placeholder:text-slate-400 hover:border-slate-400`}
                      ></textarea>
                    </div>
                    <AnimatePresence>
                      {errors.description && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="text-red-600 text-xs mt-1.5 flex items-center gap-1"
                        >
                          <AlertCircle size={12} />
                          {errors.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <motion.p
                      className="text-slate-500 text-xs mt-1.5"
                      animate={{
                        color: formData.description.length >= 20 ? '#10b981' : '#64748b'
                      }}
                    >
                      Minimum 20 characters ({formData.description.length}/20)
                    </motion.p>
                  </motion.div>

                  {/* Terms and Conditions Checkbox */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    whileHover={{ scale: 1.01 }}
                    className={`p-4 rounded-lg border-2 ${errors.terms
                      ? 'border-red-300 bg-red-50'
                      : agreeToTerms
                        ? 'border-teal-200 bg-teal-50'
                        : 'border-slate-200 bg-slate-50'
                      } transition-all duration-300 cursor-pointer`}
                  >
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <motion.input
                          type="checkbox"
                          checked={agreeToTerms}
                          onChange={(e) => {
                            setAgreeToTerms(e.target.checked);
                            if (errors.terms) {
                              setErrors((prev) => ({ ...prev, terms: "" }));
                            }
                          }}
                          whileTap={{ scale: 0.9 }}
                          className="w-5 h-5 text-teal-600 border-2 border-slate-300 rounded focus:ring-2 focus:ring-teal-500/20 focus:ring-offset-0 cursor-pointer transition-all duration-200"
                        />
                        {/* <AnimatePresence>
                          {agreeToTerms && (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              exit={{ scale: 0, rotate: 180 }}
                              transition={{ type: "spring", stiffness: 300, damping: 20 }}
                              className="absolute pointer-events-none"
                            >
                               <CheckCircle className="text-teal-600" size={20} strokeWidth={2.5} />
                            </motion.div>
                          )}
                        </AnimatePresence> */}
                      </div>
                      <div className="flex-1">
                        <span className="text-sm text-slate-700 leading-relaxed">
                          I agree to the{" "}
                          <motion.a
                            href="/terms"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-600 font-medium underline decoration-transparent hover:decoration-teal-600 transition-all duration-200"
                            whileHover={{ scale: 1.05, color: "#0d9488" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Terms and Conditions
                          </motion.a>
                          {" "}and{" "}
                          <motion.a
                            href="/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-600 font-medium underline decoration-transparent hover:decoration-teal-600 transition-all duration-200"
                            whileHover={{ scale: 1.05, color: "#0d9488" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Privacy Policy
                          </motion.a>
                          . I understand that my information will be processed according to these policies.
                        </span>
                      </div>
                    </label>
                    <AnimatePresence>
                      {errors.terms && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="text-red-600 text-xs mt-2 ml-8 flex items-center gap-1"
                        >
                          <AlertCircle size={12} />
                          {errors.terms}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !agreeToTerms}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    whileHover={!isSubmitting && agreeToTerms ? {
                      scale: 1.02,
                      boxShadow: "0 10px 25px -5px rgba(13, 148, 136, 0.3)"
                    } : {}}
                    whileTap={!isSubmitting && agreeToTerms ? { scale: 0.98 } : {}}
                    className={`w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-sm relative overflow-hidden
                      ${isSubmitting || !agreeToTerms ? 'opacity-60 cursor-not-allowed' : ''}`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                      animate={{
                        x: isSubmitting ? ['-100%', '100%'] : '-100%',
                      }}
                      transition={{
                        duration: 1,
                        repeat: isSubmitting ? Infinity : 0,
                        ease: "linear"
                      }}
                    />
                    {isSubmitting ? (
                      <>
                        <motion.svg
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </motion.svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Send size={18} />
                        </motion.div>
                      </>
                    )}
                  </motion.button>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-center text-slate-500 text-xs flex items-center justify-center gap-1"
                  >
                    <Shield className="w-3 h-3" />
                    Your information is secure and will never be shared with third parties
                  </motion.p>
                </form>
              </div>
            </motion.div>

            {/* Sidebar Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Code className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-800">
                      Your Query Journey
                    </h3>
                    <p className="text-slate-600 text-xs lg:text-sm">Simple 4-step process</p>
                  </div>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      step: 1,
                      title: "You Submit",
                      desc: "Fill the form with project details",
                      icon: Send,
                      bgColor: "bg-blue-100",
                      iconColor: "text-blue-600",
                    },
                    {
                      step: 2,
                      title: "We Receive",
                      desc: "Query reaches our expert team instantly",
                      icon: Mail,
                      bgColor: "bg-teal-100",
                      iconColor: "text-teal-600",
                    },
                    {
                      step: 3,
                      title: "We Analyze",
                      desc: "Specialists review your requirements",
                      icon: Code,
                      bgColor: "bg-purple-100",
                      iconColor: "text-purple-600",
                    },
                    {
                      step: 4,
                      title: "We Respond",
                      desc: "Personalized quote within 24 hours",
                      icon: CheckCircle,
                      bgColor: "bg-green-100",
                      iconColor: "text-green-600",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-3 group relative"
                    >
                      {index < 3 && (
                        <div className="absolute left-5 top-10 w-0.5 h-10 bg-slate-200"></div>
                      )}
                      <div className={`w-10 h-10 rounded-full ${item.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform relative z-10`}>
                        <item.icon className={item.iconColor} size={18} strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-xs font-bold text-slate-400">
                            STEP {item.step}
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-800 mb-0.5 text-sm lg:text-base">
                          {item.title}
                        </h4>
                        <p className="text-xs lg:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Cards */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Get In Touch</h3>

                <div className="space-y-4">
                  {[
                    { icon: Phone, label: "Phone", value: "+1 (123) 456-7890", href: "tel:+11234567890" },
                    { icon: Mail, label: "Email", value: "info@atlantaquantum.com", href: "mailto:info@atlantaquantum.com" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0"
                      >
                        <item.icon className="text-teal-600" size={18} />
                      </motion.div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{item.label}</p>
                        <a href={item.href} className="text-sm text-slate-600 hover:text-teal-600 transition-colors duration-200">
                          {item.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0"
                    >
                      <MapPin className="text-teal-600" size={18} />
                    </motion.div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Office</p>
                      <p className="text-sm text-slate-600">
                        123 Tech Boulevard, Suite 456<br />
                        Atlanta, GA 30303
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0"
                    >
                      <Clock className="text-teal-600" size={18} />
                    </motion.div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Business Hours</p>
                      <p className="text-sm text-slate-600">
                        Mon - Fri: 9:00 AM - 6:00 PM EST
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>



              {/* Why Choose Us */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-xl shadow-sm p-6 text-white hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold mb-4">Why Choose Us</h3>
                <div className="space-y-3">
                  {[
                    { icon: Award, text: "Industry-leading expertise" },
                    { icon: Users, text: "Dedicated project team" },
                    { icon: Clock, text: "24-hour response time" },
                    { icon: Shield, text: "Secure & confidential" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="flex items-center gap-3"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon className="flex-shrink-0" size={18} />
                      </motion.div>
                      <span className="text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              Visit Our Office
            </h2>
            <p className="text-slate-600 text-lg">
              We&apos;re always happy to meet in person
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-xl overflow-hidden shadow-lg border border-slate-200 h-96 lg:h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps?q=E-11/517,+C+Block,+Prateek+Fedora,+Sector+61,+Noida,+Uttar+Pradesh+201301,+India&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}