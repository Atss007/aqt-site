"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Quote,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";
import TechnologyStackMarquee from "@/component/techStack/techstack";
import Testimonials from "@/component/testimonials/testimonialsSection";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "CTO, Fintech Startup",
    company: "SkyPay Technologies",
    quote:
      "The team helped us re‑architect our platform for scale. Our deployment cycle went from once a month to multiple times a day with zero downtime.",
    avatarInitials: "AS",
    industry: "Fintech",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Digital",
    company: "Urban Realty Group",
    quote:
      "From discovery to launch, they felt like an extension of our in‑house team. Our new property portal boosted qualified leads by more than 45%.",
    avatarInitials: "SJ",
    industry: "Real Estate",
  },
  {
    name: "Vikram Patel",
    role: "Founder",
    company: "Health360",
    quote:
      "They understood our compliance and security requirements deeply and still shipped features fast. The product experience exceeded expectations.",
    avatarInitials: "VP",
    industry: "Healthcare",
  },
  {
    name: "Emily Davis",
    role: "Product Lead",
    company: "Northline Logistics",
    quote:
      "We modernized a 10‑year‑old legacy system without interrupting operations. The new dashboards completely transformed how our ops team works.",
    avatarInitials: "ED",
    industry: "Logistics",
  },
];

export default function TestimonialsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="h-[520px] relative max-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500 rounded-full filter blur-3xl"
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-teal-500/10 backdrop-blur-sm border border-teal-400/20 rounded-full px-4 py-2 mb-5">
              <Sparkles className="text-teal-300" size={20} />
              <span className="text-teal-100 text-sm font-medium">
                Trusted by teams around the world
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              What our clients{" "}
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                say about us
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
              Real stories from product, technology, and business leaders who
              partnered with us to build high‑impact digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlighted testimonial + metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[3fr,2fr] gap-10 items-stretch">
          {/* Slider */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 md:p-10 relative overflow-hidden"
          >
            <Quote className="absolute -top-6 -left-4 w-24 h-24 text-teal-100" />
            <Quote className="absolute -bottom-10 -right-4 w-24 h-24 text-blue-50" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                  {testimonials[activeIndex].avatarInitials}
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {testimonials[activeIndex].role} •{" "}
                    {testimonials[activeIndex].company}
                  </p>
                  <p className="text-xs text-teal-600 mt-1">
                    {testimonials[activeIndex].industry}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
                <span className="text-xs text-slate-500 ml-2">
                  Rated 5.0 by our clients
                </span>
              </div>

              <p className="text-slate-700 text-base leading-relaxed mb-6">
                “{testimonials[activeIndex].quote}”
              </p>

              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-teal-500 w-6"
                          : "bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900"
                >
                  Share your experience
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-3xl text-white p-8 md:p-10 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-medium mb-4">
                <Users size={16} />
                <span>Client success in numbers</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-5">
                Proven impact across industries
              </h2>
              <p className="text-sm md:text-base text-teal-50 mb-6">
                From early‑stage startups to large enterprises, we help
                organizations launch, scale, and modernize digital products with
                measurable business outcomes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-3xl font-extrabold">500+</div>
                <p className="text-xs text-teal-100">Active client projects</p>
              </div>
              <div>
                <div className="text-3xl font-extrabold">45%</div>
                <p className="text-xs text-teal-100">
                  Avg. increase in conversions
                </p>
              </div>
              <div>
                <div className="text-3xl font-extrabold">25+</div>
                <p className="text-xs text-teal-100">Countries we serve</p>
              </div>
              <div>
                <div className="text-3xl font-extrabold">9+</div>
                <p className="text-xs text-teal-100">
                  Years of partnership journeys
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid of testimonials */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Stories from our partners
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-sm md:text-base">
              Every engagement is different, but the goal is always the same:
              ship reliable products, move faster, and create memorable
              experiences for end users.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <motion.div
                key={t.name + t.company}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center text-white text-sm font-semibold">
                    {t.avatarInitials}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {t.name}
                    </h3>
                    <p className="text-xs text-slate-600">
                      {t.role} • {t.company}
                    </p>
                    <p className="text-[11px] text-teal-600 mt-0.5">
                      {t.industry}
                    </p>
                  </div>
                  <Building2 className="ml-auto text-slate-300" size={20} />
                </div>

                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  “{t.quote}”
                </p>

                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  <span className="text-[11px] text-slate-500 ml-1">
                    5.0 verified rating
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       <Testimonials/>
      <TechnologyStackMarquee />

      {/* CTA */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] bg-teal-500/20 blur-[140px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl px-8 py-14"
          >
            <Users className="w-16 h-16 text-teal-400 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Let&apos;s write your success story
            </h2>
            <p className="text-slate-200 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
              Whether you&apos;re planning a new product or modernizing
              existing systems, our team can help you move from idea to impact
              faster and with confidence.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#"
                className="px-7 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
              >
                Start a project
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/portfolio"
                className="px-7 py-3 border border-white/30 text-white font-semibold rounded-full hover:border-teal-400 hover:text-teal-300 transition-all duration-300 inline-flex items-center gap-2"
              >
                View our work
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}
