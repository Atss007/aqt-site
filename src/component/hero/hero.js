"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const words = [
    "Building Intelligent IT Solutions",
    "Empowering Businesses with AI",
    "Transforming Ideas Into Reality",
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <section
      className="relative flex items-center justify-center min-h-screen text-white overflow-hidden"
      onMouseEnter={() => setSpeed(40)}
      onMouseLeave={() => setSpeed(100)}
    >
      {/* 🔹 Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/hero/hero.mp4" type="video/mp4" />
      </video>

      {/* 🔹 Overlay (for readability) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 🔹 Animated floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 20 - 10, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}

      {/* 🔹 Hero Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
        >
          {text}
          <span className="border-r-4 border-blue-400 ml-1 animate-pulse"></span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-10"
        >
          At{" "}
          <span className="text-blue-400 font-semibold">
            Atlanta Quantum Tech
          </span>
          , we harness innovation, AI, and cloud technologies to help
          enterprises scale smarter, faster, and more securely.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center flex-wrap gap-4"
        >
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-blue-500 hover:to-teal-400"
          >
            Get in Touch
          </Link>

          <Link
            href="/services"
            className="px-6 py-3 border border-gray-400 hover:border-blue-400 text-gray-200 hover:text-white rounded-xl font-semibold transition-all duration-300"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
