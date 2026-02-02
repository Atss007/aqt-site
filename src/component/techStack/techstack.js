// "use client";
// import { motion } from "framer-motion";

// const allTechnologies = [
//   { name: "React.js", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" },
//   { name: "Angular", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/angular.svg" },
//   { name: "Vue.js", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vuedotjs.svg" },
//   { name: "HTML5", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg" },
//   { name: "CSS3", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg" },
//   { name: "JavaScript", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg" },
//   { name: "Node.js", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg" },
//   { name: "Express.js", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg" },
//   { name: "Python", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg" },
//   { name: "Django", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/django.svg" },
//   { name: "React Native", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" },
//   { name: "Flutter", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/flutter.svg" },
//   { name: "Ionic", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/ionic.svg" },
//   { name: "MongoDB", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg" },
//   { name: "MySQL", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg" },
//   { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg" },
//   { name: "Firebase", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/firebase.svg" },
//   { name: "Redis", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/redis.svg" },
// ];

// export default function TechnologyStackMarquee() {
//   return (
//     <section className="py-20 bg-gray-50 relative overflow-hidden">
//       {/* Floating circles background */}
//       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-teal-200/10 blur-3xl -z-10"></div>
//       <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 w-[900px] h-[450px] rounded-full bg-teal-300/10 blur-3xl -z-10"></div>

//       <div className="max-w-7xl mx-auto px-6 text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
//           Our Technology Stack
//         </h2>
//         <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//           We leverage modern technologies across frontend, backend, mobile, and databases to deliver scalable and high-performance solutions.
//         </p>
//       </div>

//       {/* Marquee Container */}
//       <div className="overflow-hidden relative">
//         <motion.div
//           className="flex gap-6 whitespace-nowrap py-2"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
//         >
//           {/* Duplicate array for seamless scroll */}
//           {[...allTechnologies, ...allTechnologies].map((tech, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ scale: 1.15 }}
//               className="flex flex-row items-center bg-white border-2 border-orange-300 rounded-2xl shadow-md p-4 justify-center flex-shrink-0"
//             >
//               <img
//                 src={tech.logo}
//                 alt={tech.name}
//                 className="w-10 h-10 object-contain mb-0"
//               />
//               <span className="ml-2 text-sm md:text-md text-gray-800 font-medium">
//                 {tech.name}
//               </span>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }




"use client";
import { motion } from "framer-motion";

// Base URL for icons - only store icon names
const CDN = "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons";

const technologies = [
  { name: "React.js", icon: "react" },
  { name: "Angular", icon: "angular" },
  { name: "Vue.js", icon: "vuedotjs" },
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Express.js", icon: "express" },
  { name: "Python", icon: "python" },
  { name: "Django", icon: "django" },
  { name: "React Native", icon: "react" },
  { name: "Flutter", icon: "flutter" },
  { name: "Ionic", icon: "ionic" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "MySQL", icon: "mysql" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Firebase", icon: "firebase" },
  { name: "Redis", icon: "redis" },
];

// Duplicate for seamless scroll
const duplicatedTech = [...technologies, ...technologies];

// Animation config
const marqueeAnimation = {
  animate: { x: ["0%", "-50%"] },
  transition: { repeat: Infinity, duration: 30, ease: "linear" }
};

export default function TechnologyStackMarquee() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background blobs */}
      {["top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-teal-200/10", 
        "bottom-0 right-1/2 translate-x-1/2 w-[900px] h-[450px] bg-teal-300/10"
      ].map((cls, i) => (
        <div key={i} className={`absolute rounded-full blur-3xl -z-10 ${cls}`} />
      ))}

      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
          Our Technology Stack
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We leverage modern technologies across frontend, backend, mobile, and databases to deliver scalable and high-performance solutions.
        </p>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden">
        <motion.div className="flex gap-6 whitespace-nowrap py-2" {...marqueeAnimation}>
          {duplicatedTech.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.15 }}
              className="flex items-center bg-white border-2 border-orange-300 rounded-2xl shadow-md p-4 flex-shrink-0"
            >
              <img src={`${CDN}/${tech.icon}.svg`} alt={tech.name} className="w-10 h-10 object-contain" />
              <span className="ml-2 text-sm md:text-base text-gray-800 font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}