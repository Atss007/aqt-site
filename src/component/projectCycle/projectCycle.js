// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Code, MonitorCheck, Smartphone, Rocket, Users } from "lucide-react";

// const developmentCycle = [
//     {
//         step: "Planning",
//         description: "Understand requirements and set goals.",
//         detail: "We gather requirements, analyze needs, and plan the roadmap for your project.",
//         icon: Users,
//     },
//     {
//         step: "Design",
//         description: "Create UI/UX designs and wireframes.",
//         detail: "Our design team creates wireframes and prototypes to visualize the user experience.",
//         icon: MonitorCheck,
//     },
//     {
//         step: "Development",
//         description: "Code the project with best practices.",
//         detail: "We develop clean, maintainable code with modern technologies.",
//         icon: Code,
//     },
//     {
//         step: "Testing",
//         description: "QA testing to ensure quality and performance.",
//         detail: "Every feature is tested rigorously for functionality, security, and performance.",
//         icon: Smartphone,
//     },
//     {
//         step: "Launch",
//         description: "Deploy the project and monitor results.",
//         detail: "We deploy the project, monitor performance, and provide support for smooth operations.",
//         icon: Rocket,
//     },
// ];

// export default function ProjectCycleSection() {
//     const [hoveredIndex, setHoveredIndex] = useState(null);

//     return (
//         <section className="py-20 bg-white">
//             <div className="max-w-7xl mx-auto px-4 text-center">
//                 <h2 className="text-4xl font-bold mb-16 text-gray-900">
//                     Our Project Development Cycle
//                 </h2>

//                 <div className="relative flex flex-col md:flex-row items-center justify-between">
//                     {/* Full connecting line */}
//                     <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-300 -translate-y-1/2 z-0 rounded-full" />

//                     {developmentCycle.map((item, index) => {
//                         const Icon = item.icon;
//                         const isHovered = hoveredIndex === index;

//                         return (
//                             <div
//                                 key={index}
//                                 className="relative z-10 flex flex-col items-center mb-10 md:mb-0 w-full md:w-1/5 cursor-pointer group"
//                                 onMouseEnter={() => setHoveredIndex(index)}
//                                 onMouseLeave={() => setHoveredIndex(null)}
//                             >
//                                 {/* Circle with icon */}
//                                 <motion.div
//                                     whileHover={{ scale: 1.2 }}
//                                     className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900 text-gray-100 rounded-full shadow-lg mb-4"
//                                 >
//                                     <Icon className="w-8 h-8 text-gray-100" />
//                                 </motion.div>


//                                 {/* Default step title */}
//                                 <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
//                                     {item.step}
//                                 </h3>

//                                 {/* Default short description */}
//                                 {!isHovered && (
//                                     <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
//                                 )}

//                                 {/* Hovered detailed description */}
//                                 <AnimatePresence>
//                                     {isHovered && (
//                                         <motion.div
//                                             initial={{ opacity: 0, y: 10 }}
//                                             animate={{ opacity: 1, y: -10 }}
//                                             exit={{ opacity: 0, y: 10 }}
//                                             transition={{ duration: 0.3 }}
//                                             className="absolute top-28 md:top-32 left-1/2 -translate-x-1/2 w-64 bg-white shadow-xl rounded-xl p-4 border border-gray-100 text-left text-gray-700 z-20"
//                                         >
//                                             <h4 className="font-semibold text-lg mb-2">{item.step}</h4>
//                                             <p className="text-sm">{item.detail}</p>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>

//                                 {/* Mobile connecting line */}
//                                 {index !== developmentCycle.length - 1 && (
//                                     <div className="md:hidden w-1 h-12 bg-gray-300 mt-4"></div>
//                                 )}
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// }




"use client";

import { useState } from "react";
import { Code, MonitorCheck, Smartphone, Rocket, Users } from "lucide-react";

const developmentCycle = [
  {
    step: "Planning",
    description: "Understand requirements and set goals.",
    detail:
      "We gather requirements, analyze needs, and plan the roadmap for your project.",
    icon: Users,
    color: "from-blue-500 to-indigo-500",
  },
  {
    step: "Design",
    description: "Create UI/UX designs and wireframes.",
    detail:
      "Our design team creates wireframes and prototypes to visualize the user experience.",
    icon: MonitorCheck,
    color: "from-purple-500 to-pink-500",
  },
  {
    step: "Development",
    description: "Code the project with best practices.",
    detail:
      "We develop clean, maintainable code with modern technologies for long-term success.",
    icon: Code,
    color: "from-teal-500 to-blue-600",
  },
  {
    step: "Testing",
    description: "QA testing to ensure quality and performance.",
    detail:
      "Every feature is tested rigorously for functionality, security, and performance.",
    icon: Smartphone,
    color: "from-green-500 to-emerald-600",
  },
  {
    step: "Launch",
    description: "Deploy the project and monitor results.",
    detail:
      "We deploy the project, monitor performance, and provide ongoing support.",
    icon: Rocket,
    color: "from-orange-500 to-red-500",
  },
];

export default function ProjectCycleSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-gray-900">
          Our Project Development Cycle
        </h2>

        {/* Timeline */}
        <div className="relative flex flex-col md:flex-row items-center justify-between md:space-x-6">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-gray-200 to-gray-300 -translate-y-1/2 z-0 rounded-full"></div>

          {developmentCycle.map((item, i) => {
            const Icon = item.icon;
            const isActive = hovered === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5 mb-12 md:mb-0 cursor-pointer group"
              >
                {/* Icon Circle */}
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full shadow-lg bg-gradient-to-r ${item.color} transition-transform duration-300 transform group-hover:scale-110`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Step title */}
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {item.step}
                </h3>

                {/* Default description */}
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>

                {/* Tooltip (desktop hover detail) */}
                {isActive && (
                  <div className="absolute top-28 md:top-32 left-1/2 -translate-x-1/2 w-64 bg-white border border-gray-100 shadow-2xl rounded-xl p-4 text-left text-gray-700 transition-all duration-200">
                    <h4 className="font-semibold text-base mb-2 text-gray-900">
                      {item.step}
                    </h4>
                    <p className="text-sm leading-relaxed">{item.detail}</p>
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45"></div>
                  </div>
                )}

                {/* Mobile connector line */}
                {i !== developmentCycle.length - 1 && (
                  <div className="md:hidden w-1 h-12 bg-gray-300 mt-4 rounded-full"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
