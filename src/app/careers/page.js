// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   ArrowRight,
//   Briefcase,
//   Building2,
//   Calendar,
//   Clock,
//   GraduationCap,
//   Heart,
//   MapPin,
//   Sparkles,
//   Target,
//   TrendingUp,
//   Users,
// } from "lucide-react";
// import Link from "next/link";
// import TechnologyStackMarquee from "@/component/techStack/techstack";

// // Counter hook (same style as AboutUs)
// const useCounter = (end, duration = 2000, shouldStart = false) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!shouldStart) return;

//     let startTime;
//     let animationFrame;

//     const animate = (currentTime) => {
//       if (startTime === undefined) startTime = currentTime;
//       const progress = (currentTime - startTime) / duration;

//       if (progress < 1) {
//         setCount(Math.floor(end * progress));
//         animationFrame = requestAnimationFrame(animate);
//       } else {
//         setCount(end);
//       }
//     };

//     animationFrame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationFrame);
//   }, [end, duration, shouldStart]);

//   return count;
// };

// const StatCard = ({
//   icon: Icon,
//   value,
//   suffix,
//   label,
//   index,
// }) => {
//   const ref = useRef();
//   const isInView = useInView(ref, { once: true });
//   const count = useCounter(value, 2000, isInView);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.1 }}
//       whileHover={{ scale: 1.05 }}
//       className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
//     >
//       <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
//         <Icon className="text-white" size={26} />
//       </div>
//       <div className="text-3xl font-bold text-slate-900">
//         {count}
//         {suffix}
//       </div>
//       <p className="text-slate-600 mt-1 font-medium text-sm">{label}</p>
//     </motion.div>
//   );
// };

// const JobCard = ({  job,  index}) => (

//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ delay: index * 0.1 }}
//     whileHover={{ y: -6 }}
//     className="bg-white/90 backdrop-blur-sm border border-slate-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col gap-4"
//   >
//     <div className="flex items-start justify-between gap-3">
//       <div>
//         <h3 className="text-xl font-semibold text-slate-900 mb-1">
//           {job.title}
//         </h3>
//         <div className="flex flex-wrap gap-2 text-sm text-slate-500">
//           <span className="inline-flex items-center gap-1">
//             <Briefcase size={16} /> {job.type}
//           </span>
//           <span className="inline-flex items-center gap-1">
//             <GraduationCap size={16} /> {job.level}
//           </span>
//           <span className="inline-flex items-center gap-1">
//             <MapPin size={16} /> {job.location}
//           </span>
//           <span className="inline-flex items-center gap-1">
//             <Clock size={16} /> {job.experience}
//           </span>
//         </div>
//       </div>
//       <div className="hidden sm:flex items-center">
//         <span className="px-3 py-1 text-xs font-medium rounded-full bg-teal-50 text-teal-700 border border-teal-100">
//           Hiring now
//         </span>
//       </div>
//     </div>

//     <div className="flex flex-wrap gap-2">
//       {job.tags.map((tag) => (
//         <span
//           key={tag}
//           className="px-3 py-1 rounded-full bg-slate-50 text-slate-700 text-xs font-medium border border-slate-100"
//         >
//           {tag}
//         </span>
//       ))}
//     </div>

//     <div className="flex flex-wrap justify-between items-center gap-3 pt-2 border-t border-slate-100 mt-2">
//       <p className="text-sm text-slate-500">
//         We are looking for passionate team players who love solving real-world
//         problems with technology.
//       </p>
//       <Link
//         href="/about-you"
//         className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-semibold shadow hover:shadow-lg transition-all duration-300"
//       >
//         Apply Now
//         <ArrowRight size={16} />
//       </Link>
//     </div>
//   </motion.div>
// );

// export default function CareersPage() {
//   const stats = [
//     {
//       icon: Users,
//       value: 150,
//       suffix: "+",
//       label: "Talented Professionals",
//     },
//     {
//       icon: Building2,
//       value: 5,
//       suffix: "+",
//       label: "Global Offices",
//     },
//     {
//       icon: TrendingUp,
//       value: 9,
//       suffix: "+",
//       label: "Years of Growth",
//     },
//     {
//       icon: Heart,
//       value: 90,
//       suffix: "%",
//       label: "Employee Retention",
//     },
//   ];

//   const jobs = [
//     {
//       title: "Senior Full Stack Developer",
//       type: "Full-time",
//       level: "Senior",
//       location: "Remote / On-site",
//       experience: "5+ years",
//       tags: ["React", "Next.js", "Node.js", "REST APIs", "AWS"],
//     },
//     {
//       title: "UI/UX Designer",
//       type: "Full-time",
//       level: "Mid-level",
//       location: "Jaipur, India",
//       experience: "3+ years",
//       tags: ["Figma", "Prototyping", "Design Systems", "User Research"],
//     },
//     {
//       title: "DevOps Engineer",
//       type: "Full-time",
//       level: "Mid/Senior",
//       location: "Hybrid",
//       experience: "4+ years",
//       tags: ["CI/CD", "Docker", "Kubernetes", "Monitoring"],
//     },
//     {
//       title: "Business Analyst",
//       type: "Full-time",
//       level: "Mid-level",
//       location: "Jaipur, India",
//       experience: "2+ years",
//       tags: ["Requirements", "Stakeholder Communication", "Documentation"],
//     },
//   ];

//   const benefits = [
//     {
//       icon: Calendar,
//       title: "Flexible Work Culture",
//       description:
//         "Hybrid and remote friendly work options to help you balance work and life.",
//     },
//     {
//       icon: Target,
//       title: "Growth & Learning",
//       description:
//         "Access to courses, certifications, and mentorship to accelerate your career.",
//     },
//     {
//       icon: Heart,
//       title: "Health & Wellness",
//       description:
//         "Comprehensive health benefits and wellness initiatives for you and your family.",
//     },
//     {
//       icon: TrendingUp,
//       title: "Performance Rewards",
//       description:
//         "Competitive salary, bonuses, and clear growth paths for high performers.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero */}
//       <section className="h-[560px] relative max-h-screen bg-gradient-to-br from-teal-900 via-blue-900 to-teal-800 pt-24 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-grid-pattern opacity-10" />
//           <motion.div
//             animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
//             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl"
//           />
//           <motion.div
//             animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
//             transition={{
//               duration: 10,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 1,
//             }}
//             className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500 rounded-full filter blur-3xl"
//           />
//         </div>

//         <div className="max-w-6xl mx-auto relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="inline-flex items-center gap-2 bg-teal-500/10 backdrop-blur-sm border border-teal-400/20 rounded-full px-4 py-2 mb-5">
//               <Sparkles className="text-teal-300" size={20} />
//               <span className="text-teal-100 text-sm font-medium">
//                 Join a team that builds the future
//               </span>
//             </div>

//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
//               Careers at{" "}
//               <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
//                 Our Company
//               </span>
//             </h1>

//             <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-8">
//               Work with passionate innovators, solve meaningful challenges, and
//               build products that make a real impact across the globe.
//             </p>

//             <div className="flex flex-wrap justify-center gap-4">
//               <motion.a
//                 href="#open-roles"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-7 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
//               >
//                 View Open Positions
//                 <ArrowRight size={18} />
//               </motion.a>
//               <motion.a
//                 href="#life-here"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-7 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/15 transition-all duration-300 inline-flex items-center gap-2"
//               >
//                 Life at Our Company
//               </motion.a>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
//         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
//           {stats.map((s, i) => (
//             <StatCard key={s.label} {...s} index={i} />
//           ))}
//         </div>
//       </section>

//       {/* Life at Company */}
//       <section
//         id="life-here"
//         className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50"
//       >
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-teal-100 rounded-full px-5 py-2 mb-4">
//               <Users className="text-teal-600" size={18} />
//               <span className="text-teal-700 text-sm font-semibold">
//                 Life at Our Company
//               </span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
//               Grow your career with a world‑class team
//             </h2>
//             <p className="text-slate-600 max-w-3xl mx-auto">
//               We believe great products are built by happy, empowered people.
//               We focus on ownership, learning, and a culture where every voice
//               matters.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {benefits.map((b, i) => (
//               <motion.div
//                 key={b.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 whileHover={{ y: -6 }}
//                 className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg p-6"
//               >
//                 <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center mb-3">
//                   <b.icon className="text-white" size={22} />
//                 </div>
//                 <h3 className="text-lg font-semibold text-slate-900 mb-1">
//                   {b.title}
//                 </h3>
//                 <p className="text-sm text-slate-600">{b.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Open Roles */}
//       <section
//         id="open-roles"
//         className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
//       >
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
//           >
//             <div>
//               <h2 className="text-3xl font-bold text-slate-900 mb-2">
//                 Open positions
//               </h2>
//               <p className="text-slate-600 max-w-xl text-sm md:text-base">
//                 Don&apos;t see a perfect fit? You can still share your profile
//                 with us and we&apos;ll reach out when something relevant opens
//                 up.
//               </p>
//             </div>
//             <div className="flex gap-3">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600">
//                 <Calendar size={16} />
//                 Updated weekly
//               </div>
//             </div>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {jobs.map((job, index) => (
//               <JobCard key={job.title} job={job} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA + tech stack */}
//       <TechnologyStackMarquee />

//       <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
//         <div className="absolute inset-0 flex justify-center pointer-events-none">
//           <div className="w-[500px] h-[500px] bg-teal-500/20 blur-[140px] rounded-full" />
//         </div>

//         <div className="max-w-4xl mx-auto text-center relative">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl px-8 py-14"
//           >
//             <Briefcase className="w-16 h-16 text-teal-400 mx-auto mb-4" />
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
//               Ready to build what&apos;s next?
//             </h2>
//             <p className="text-slate-200 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
//               If you&apos;re excited about solving complex problems and
//               building world‑class digital products, we&apos;d love to hear from
//               you. Tell us about yourself and the kind of work you want to do.
//             </p>

//             <div className="flex flex-wrap justify-center gap-4">
//               <Link
//                 href="/about-you"
//                 className="px-7 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
//               >
//                 Share your profile
//                 <ArrowRight size={18} />
//               </Link>
//               <Link
//                 href="/contact"
//                 className="px-7 py-3 border border-white/30 text-white font-semibold rounded-full hover:border-teal-400 hover:text-teal-300 transition-all duration-300 inline-flex items-center gap-2"
//               >
//                 Talk to our team
//                 <ArrowRight size={18} />
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* grid bg like AboutUs */}
//       <style jsx global>{`
//         .bg-grid-pattern {
//           background-image: linear-gradient(
//               rgba(255, 255, 255, 0.05) 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               90deg,
//               rgba(255, 255, 255, 0.05) 1px,
//               transparent 1px
//             );
//           background-size: 50px 50px;
//         }
//       `}</style>
//     </div>
//   );
// }




"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Calendar,
  Clock,
  GraduationCap,
  Heart,
  MapPin,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
// FIX THIS PATH if needed (component vs components)
import TechnologyStackMarquee from "@/component/techStack/techstack";

// Counter hook
const useCounter = (end, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (startTime === undefined) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
};

const StatCard = ({ icon: Icon, value, suffix, label, index }) => {
  // IMPORTANT: call useRef(), not useRef
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useCounter(value, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
        <Icon className="text-white" size={26} />
      </div>
      <div className="text-3xl font-bold text-slate-900">
        {count}
        {suffix}
      </div>
      <p className="text-slate-600 mt-1 font-medium text-sm">{label}</p>
    </motion.div>
  );
};

const JobCard = ({ job, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -6 }}
    className="bg-white/90 backdrop-blur-sm border border-slate-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col gap-4"
  >
    <div className="flex items-start justify-between gap-3">
      <div>
        <h3 className="text-xl font-semibold text-slate-900 mb-1">
          {job.title}
        </h3>
        <div className="flex flex-wrap gap-2 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1">
            <Briefcase size={16} /> {job.type}
          </span>
          <span className="inline-flex items-center gap-1">
            <GraduationCap size={16} /> {job.level}
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin size={16} /> {job.location}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={16} /> {job.experience}
          </span>
        </div>
      </div>
      <div className="hidden sm:flex items-center">
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-teal-50 text-teal-700 border border-teal-100">
          Hiring now
        </span>
      </div>
    </div>

    <div className="flex flex-wrap gap-2">
      {job.tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 rounded-full bg-slate-50 text-slate-700 text-xs font-medium border border-slate-100"
        >
          {tag}
        </span>
      ))}
    </div>

    <div className="flex flex-wrap justify-between items-center gap-3 pt-2 border-t border-slate-100 mt-2">
      <p className="text-sm text-slate-500">
        We are looking for passionate team players who love solving real-world
        problems with technology.
      </p>
      <Link
        href="#"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-semibold shadow hover:shadow-lg transition-all duration-300"
      >
        Apply Now
        <ArrowRight size={16} />
      </Link>
    </div>
  </motion.div>
);

export default function CareersPage() {
  const stats = [
    {
      icon: Users,
      value: 150,
      suffix: "+",
      label: "Talented Professionals",
    },
    {
      icon: Building2,
      value: 5,
      suffix: "+",
      label: "Global Offices",
    },
    {
      icon: TrendingUp,
      value: 9,
      suffix: "+",
      label: "Years of Growth",
    },
    {
      icon: Heart,
      value: 90,
      suffix: "%",
      label: "Employee Retention",
    },
  ];

  const jobs = [
    {
      title: "Senior Full Stack Developer",
      type: "Full-time",
      level: "Senior",
      location: "Remote / On-site",
      experience: "5+ years",
      tags: ["React", "Next.js", "Node.js", "REST APIs", "AWS"],
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      level: "Mid-level",
      location: "Jaipur, India",
      experience: "3+ years",
      tags: ["Figma", "Prototyping", "Design Systems", "User Research"],
    },
    {
      title: "DevOps Engineer",
      type: "Full-time",
      level: "Mid/Senior",
      location: "Hybrid",
      experience: "4+ years",
      tags: ["CI/CD", "Docker", "Kubernetes", "Monitoring"],
    },
    {
      title: "Business Analyst",
      type: "Full-time",
      level: "Mid-level",
      location: "Jaipur, India",
      experience: "2+ years",
      tags: ["Requirements", "Stakeholder Communication", "Documentation"],
    },
  ];

  const benefits = [
    {
      icon: Calendar,
      title: "Flexible Work Culture",
      description:
        "Hybrid and remote friendly work options to help you balance work and life.",
    },
    {
      icon: Target,
      title: "Growth & Learning",
      description:
        "Access to courses, certifications, and mentorship to accelerate your career.",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health benefits and wellness initiatives for you and your family.",
    },
    {
      icon: TrendingUp,
      title: "Performance Rewards",
      description:
        "Competitive salary, bonuses, and clear growth paths for high performers.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="h-[560px] relative max-h-screen bg-gradient-to-br from-teal-900 via-blue-900 to-teal-800 pt-24 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
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

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-teal-500/10 backdrop-blur-sm border border-teal-400/20 rounded-full px-4 py-2 mb-5">
              <Sparkles className="text-teal-300" size={20} />
              <span className="text-teal-100 text-sm font-medium">
                Join a team that builds the future
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Careers at{" "}
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Our Company
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-8">
              Work with passionate innovators, solve meaningful challenges, and
              build products that make a real impact across the globe.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#open-roles"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                View Open Positions
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#life-here"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/15 transition-all duration-300 inline-flex items-center gap-2"
              >
                Life at Our Company
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>
      </section>

      {/* Life at Company */}
      <section
        id="life-here"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-teal-100 rounded-full px-5 py-2 mb-4">
              <Users className="text-teal-600" size={18} />
              <span className="text-teal-700 text-sm font-semibold">
                Life at Our Company
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Grow your career with a world‑class team
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              We believe great products are built by happy, empowered people. We
              focus on ownership, learning, and a culture where every voice
              matters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center mb-3">
                  <b.icon className="text-white" size={22} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  {b.title}
                </h3>
                <p className="text-sm text-slate-600">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section
        id="open-roles"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
          >
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Open positions
              </h2>
              <p className="text-slate-600 max-w-xl text-sm md:text-base">
                Don&apos;t see a perfect fit? You can still share your profile
                with us and we&apos;ll reach out when something relevant opens
                up.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600">
                <Calendar size={16} />
                Updated weekly
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <JobCard key={job.title} job={job} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA + tech stack */}
      <TechnologyStackMarquee />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] bg-teal-500/20 blur-[140px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl px-8 py-14"
          >
            <Briefcase className="w-16 h-16 text-teal-400 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to build what&apos;s next?
            </h2>
            <p className="text-slate-200 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
              If you&apos;re excited about solving complex problems and
              building world‑class digital products, we&apos;d love to hear from
              you. Tell us about yourself and the kind of work you want to do.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#"
                className="px-7 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
              >
                Share your profile
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact-us"
                className="px-7 py-3 border border-white/30 text-white font-semibold rounded-full hover:border-teal-400 hover:text-teal-300 transition-all duration-300 inline-flex items-center gap-2"
              >
                Talk to our team
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
