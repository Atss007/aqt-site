"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Solutions Inc.",
    feedback:
      "Working with this team was a game-changer. They delivered our web and mobile apps on time and exceeded our expectations.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    company: "InnovateX",
    feedback:
      "Their expertise in modern technologies helped us scale our platform quickly. Highly recommended for complex IT projects.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Johnson",
    company: "NextGen Corp",
    feedback:
      "Professional, responsive, and innovative. They truly understand how to solve business challenges with technology.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Emily Davis",
    company: "Alpha Systems",
    feedback:
      "Their team is top-notch! The solutions they provided streamlined our processes and improved overall productivity.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Our clients trust us to deliver cutting-edge IT solutions. Here’s what they have to say about working with us.
        </p>
      </div>

      {/* Testimonials Container */}
       <div className="max-w-7xl px-2 mx-auto relative overflow-hidden">
        <motion.div
          className="flex gap-8 px-6 py-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...testimonials, ...testimonials].map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 w-80 bg-gray-50 rounded-2xl shadow-lg p-6 text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-gray-500 text-sm">{t.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{t.feedback}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
