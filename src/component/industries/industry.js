
// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Heart, DollarSign, BookOpen, ShoppingCart, Bus, Cpu } from "lucide-react";

// const industries = [
//     {
//         title: "Healthcare",
//         description:
//             "We provide technology solutions that enhance patient care, streamline hospital operations, and enable data-driven decision-making.",
//         bgColor: "from-blue-800 to-blue-600",
//         icon: <Heart size={32} />,
//         software: ["EHR Systems", "Telemedicine Platforms", "Patient Management Apps"]
//     },
//     {
//         title: "Finance",
//         description:
//             "Our fintech solutions ensure secure transactions, regulatory compliance, and innovative financial services for banks and startups.",
//         bgColor: "from-green-800 to-green-600",
//         icon: <DollarSign size={32} />,
//         software: ["Banking Software", "Payment Gateways", "Financial Analytics Tools"]
//     },
//     {
//         title: "Education",
//         description:
//             "We empower educational institutions with e-learning platforms, interactive tools, and scalable management systems.",
//         bgColor: "from-purple-800 to-purple-600",
//         icon: <BookOpen size={32} />,
//         software: ["LMS Platforms", "Virtual Classrooms", "Student Management Systems"]
//     },
//     {
//         title: "Retail & E-Commerce",
//         description:
//             "We build seamless shopping experiences, optimize supply chains, and integrate digital solutions for retail businesses.",
//         bgColor: "from-orange-800 to-orange-600",
//         icon: <ShoppingCart size={32} />,
//         software: ["E-Commerce Platforms", "Inventory Management", "POS Systems"]
//     },
//     {
//         title: "Travel & Hospitality",
//         description:
//             "Our solutions enhance booking systems, customer experiences, and operational efficiency in the travel industry.",
//         bgColor: "from-pink-800 to-pink-600",
//         icon: <Bus size={32} />,
//         software: ["Booking Engines", "CRM Systems", "Customer Experience Platforms"]
//     },
//     {
//         title: "Manufacturing",
//         description:
//             "We deliver smart factory solutions, IoT integration, and automation to boost productivity and efficiency.",
//         bgColor: "from-teal-800 to-teal-600",
//         icon: <Cpu size={32} />,
//         software: ["ERP Systems", "IoT Platforms", "Production Automation Software"]
//     },
// ];

// export default function IndustriesSection() {
//     const [activeIndex, setActiveIndex] = useState(0);

//     return (
//         <section className="relative py-20 bg-gray-900 overflow-hidden">
//             {/* Tech Background */}
//             <motion.div
//                 className="absolute inset-0 pointer-events-none"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//             >
//                 {/* Floating rectangles / lines */}
//                 {[...Array(6)].map((_, i) => (
//                     <motion.div
//                         key={i}
//                         className="absolute h-1 bg-gradient-to-r from-white/20 to-white/10 rounded-full"
//                         style={{
//                             top: `${Math.random() * 100}%`,
//                             left: `${Math.random() * 100}%`,
//                             width: `${50 + Math.random() * 150}px`,
//                         }}
//                         animate={{
//                             y: [0, Math.random() * 30, 0],
//                             rotate: [0, 5, -5, 0],
//                         }}
//                         transition={{
//                             duration: 12 + Math.random() * 8,
//                             repeat: Infinity,
//                             repeatType: "mirror",
//                         }}
//                     />
//                 ))}
//             </motion.div>

//             <div className="relative max-w-7xl mx-auto px-6 z-10">
//                 <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
//                     Empowering Industries
//                 </h2>
//                 <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
//                     Empowering industries means leveraging technology, innovation, and expertise to transform operations.
//                     We work with diverse sectors to optimize performance, efficiency, and drive growth with modern software solutions.
//                 </p>

//                 <div className="flex flex-col md:flex-row gap-8">
//                     {/* Left Side: Industries List */}
//                     <div className="md:w-1/3 flex flex-col space-y-4">
//                         {industries.map((industry, idx) => (
//                             <button
//                                 key={idx}
//                                 onClick={() => setActiveIndex(idx)}
//                                 className={`flex items-center gap-3 px-4 py-4 rounded-xl shadow-sm transition-all duration-300 relative overflow-hidden ${
//                                     activeIndex === idx
//                                         ? `bg-gradient-to-r ${industry.bgColor} text-white font-semibold`
//                                         : "bg-gray-800 text-gray-200 hover:bg-gray-700"
//                                 }`}
//                             >
//                                 {/* Active indicator circle */}
//                                 {activeIndex === idx && (
//                                     <motion.span
//                                         layoutId="activeIndicator"
//                                         className="absolute -left-2 w-2 h-2 bg-white rounded-full"
//                                     />
//                                 )}
//                                 <span className="flex items-center justify-center z-10">
//                                     {industry.icon}
//                                 </span>
//                                 <span className="font-medium z-10">{industry.title}</span>
//                             </button>
//                         ))}
//                     </div>

//                     {/* Right Side: Content Panel */}
//                     <div className="md:w-2/3 relative min-h-[250px] rounded-xl overflow-hidden shadow-lg flex flex-col">
//                         <AnimatePresence mode="wait">
//                             <motion.div
//                                 key={activeIndex}
//                                 initial={{ opacity: 0, x: 30 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 exit={{ opacity: 0, x: -30 }}
//                                 transition={{ duration: 0.3 }}
//                                 className={`bg-gradient-to-r ${industries[activeIndex].bgColor} text-white p-8 rounded-t-xl flex flex-col justify-center relative overflow-hidden`}
//                             >
//                                 {/* Right floating tech lines */}
//                                 <motion.div
//                                     className="absolute inset-0 pointer-events-none"
//                                     animate={{ rotate: [0, 2, -2, 0] }}
//                                     transition={{ duration: 15, repeat: Infinity }}
//                                 >
//                                     <div className="w-full h-1 bg-white/10 absolute top-1/4"></div>
//                                     <div className="w-full h-1 bg-white/10 absolute top-3/4"></div>
//                                 </motion.div>

//                                 <div className="flex items-center gap-4 mb-4 relative z-10">
//                                     <div className="p-3 bg-white/20 rounded-full">
//                                         {industries[activeIndex].icon}
//                                     </div>
//                                     <h3 className="text-2xl font-bold text-white">
//                                         {industries[activeIndex].title}
//                                     </h3>
//                                 </div>
//                                 <p className="text-lg text-white relative z-10">{industries[activeIndex].description}</p>
//                             </motion.div>
//                         </AnimatePresence>

//                         {/* Bottom Section: Supported Software & Promotion */}
//                         <div className="bg-gray-800 p-6 rounded-b-xl mt-2 shadow-inner flex flex-col gap-4">
//                             <h4 className="text-xl font-semibold text-white">
//                                 Supported Solutions
//                             </h4>
//                             <ul className="list-disc list-inside text-gray-300">
//                                 {industries[activeIndex].software.map((item, idx) => (
//                                     <li key={idx}>{item}</li>
//                                 ))}
//                             </ul>
//                             <div className="mt-4 p-4 bg-gray-700 rounded-lg text-center">
//                                 <p className="text-white font-medium">
//                                     Interested in custom software solutions for this industry? 
//                                     <span className="text-blue-400 font-bold ml-1">Contact us today!</span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }



"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, DollarSign, BookOpen, ShoppingCart, Bus, Cpu } from "lucide-react";

const industries = [
  {
    title: "Healthcare",
    description:
      "We provide technology solutions that enhance patient care, streamline hospital operations, and enable data-driven decision-making.",
    bgColor: "from-blue-800 to-blue-600",
    icon: <Heart size={32} />,
    software: ["EHR Systems", "Telemedicine Platforms", "Patient Management Apps"],
  },
  {
    title: "Finance",
    description:
      "Our fintech solutions ensure secure transactions, regulatory compliance, and innovative financial services for banks and startups.",
    bgColor: "from-green-800 to-green-600",
    icon: <DollarSign size={32} />,
    software: ["Banking Software", "Payment Gateways", "Financial Analytics Tools"],
  },
  {
    title: "Education",
    description:
      "We empower educational institutions with e-learning platforms, interactive tools, and scalable management systems.",
    bgColor: "from-purple-800 to-purple-600",
    icon: <BookOpen size={32} />,
    software: ["LMS Platforms", "Virtual Classrooms", "Student Management Systems"],
  },
  {
    title: "Retail & E-Commerce",
    description:
      "We build seamless shopping experiences, optimize supply chains, and integrate digital solutions for retail businesses.",
    bgColor: "from-orange-800 to-orange-600",
    icon: <ShoppingCart size={32} />,
    software: ["E-Commerce Platforms", "Inventory Management", "POS Systems"],
  },
  {
    title: "Travel & Hospitality",
    description:
      "Our solutions enhance booking systems, customer experiences, and operational efficiency in the travel industry.",
    bgColor: "from-pink-800 to-pink-600",
    icon: <Bus size={32} />,
    software: ["Booking Engines", "CRM Systems", "Customer Experience Platforms"],
  },
  {
    title: "Manufacturing",
    description:
      "We deliver smart factory solutions, IoT integration, and automation to boost productivity and efficiency.",
    bgColor: "from-teal-800 to-teal-600",
    icon: <Cpu size={32} />,
    software: ["ERP Systems", "IoT Platforms", "Production Automation Software"],
  },
];

export default function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Floating Tech Lines Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-white/20 to-white/5 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${50 + Math.random() * 150}px`,
            }}
            animate={{
              y: [0, Math.random() * 30, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          Empowering Industries
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Empowering industries means leveraging technology, innovation, and expertise to transform operations.
          We work with diverse sectors to optimize performance, efficiency, and drive growth with modern software solutions.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side: Industry List */}
          <div className="md:w-1/3 flex flex-col space-y-4">
            {industries.map((industry, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl shadow-sm transition-all duration-300 relative overflow-hidden group ${
                  activeIndex === idx
                    ? `bg-gradient-to-r ${industry.bgColor} text-white font-semibold`
                    : "bg-gray-800 text-gray-200 hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                {/* Animated white left border */}
                {activeIndex === idx && (
                  <motion.div
                    layoutId="activeBorder"
                    className="absolute left-0 top-0 h-full w-[4px] bg-white rounded-r-full shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Icon + Title */}
                <span className="flex items-center justify-center z-10">{industry.icon}</span>
                <span className="font-medium z-10">{industry.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Right Side: Industry Details */}
          <div className="md:w-2/3 relative min-h-[250px] rounded-xl overflow-hidden shadow-lg flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className={`bg-gradient-to-r ${industries[activeIndex].bgColor} text-white p-8 rounded-t-xl flex flex-col justify-center relative overflow-hidden`}
              >
                {/* Subtle tech lines overlay */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 15, repeat: Infinity }}
                >
                  <div className="w-full h-[1px] bg-white/10 absolute top-1/4"></div>
                  <div className="w-full h-[1px] bg-white/10 absolute top-3/4"></div>
                </motion.div>

                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="p-3 bg-white/20 rounded-full">{industries[activeIndex].icon}</div>
                  <h3 className="text-2xl font-bold text-white">{industries[activeIndex].title}</h3>
                </div>
                <p className="text-lg text-white/90 relative z-10">
                  {industries[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Section: Supported Software */}
            <div className="bg-gray-800 p-6 rounded-b-xl mt-2 shadow-inner flex flex-col gap-4">
              <h4 className="text-xl font-semibold text-white">Supported Solutions</h4>
              <ul className="list-disc list-inside text-gray-300">
                {industries[activeIndex].software.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="mt-4 p-4 bg-gray-700 rounded-lg text-center">
                <p className="text-white font-medium">
                  Interested in custom software solutions for this industry?{" "}
                  <span className="text-blue-400 font-bold ml-1">Contact us today!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
