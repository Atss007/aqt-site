"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What are your business hours?",
        answer: "Our office hours are Monday to Friday, 9 AM to 6 PM EST.",
    },
    {
        question: "Can I schedule a consultation?",
        answer: "Yes, use the 'Get a Free Consultation' button on our website to book a time that suits you.",
    },
    {
        question: "How can I contact support?",
        answer: "You can contact our support team via the contact form, email, or phone. Our team responds within 24 hours.",
    },
    {
        question: "Do you offer ongoing support after project delivery?",
        answer: "Absolutely! We provide maintenance and support packages tailored to your needs."
    },
    {
        question: "Is my data safe when I submit the contact form?",
        answer: "Yes, we take data privacy seriously and comply with industry standards to keep your information secure."
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="relative py-20 bg-gray-900 overflow-hidden">
            {/* Background tech lines */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-[1px] bg-gradient-to-r from-blue-500/20 to-purple-500/10 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${60 + Math.random() * 120}px`,
                        }}
                        animate={{ y: [0, Math.random() * 20, 0] }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-5xl mx-auto px-6 z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                    Find answers to common questions about our IT services, technologies, and how we help
                    businesses transform digitally.
                </p>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                        const isActive = activeIndex === idx;

                        return (
                            <motion.div
                                key={idx}
                                layout
                                className="bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all"
                            >
                                {/* Header */}
                                <button
                                    onClick={() => toggleFAQ(idx)}
                                    className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
                                >
                                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                                    <motion.div
                                        animate={{ rotate: isActive ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-6 h-6 text-blue-400" />
                                    </motion.div>
                                </button>

                                {/* Answer (Animated Expand) */}
                                <AnimatePresence initial={false}>
                                    {isActive && (
                                        <motion.div
                                            key="content"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-5 text-gray-300 leading-relaxed border-t border-gray-700/70">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
