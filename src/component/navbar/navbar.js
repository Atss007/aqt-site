// "use client";
// import { useState, useCallback, memo } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, ChevronDown, Users, Mail, Info, FileText } from "lucide-react";

// // ============ CONSTANTS ============
// const ANIM = {
//   dropdown: { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 10 }, transition: { duration: 0.2 } },
//   mobile: { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, transition: { duration: 0.3 } }
// };

// const ICONS = { Info, Mail, Users, FileText };

// // ============ DATA ============
// const aboutLinks = [
//   ["about-us", "Info", "About Us", "Learn about who we are and our mission.", "Discover more"],
//   ["contact-us", "Mail", "Contact Us", "Have a question? Let's talk.", "Get in touch"],
//   ["experts", "Users", "Our Experts", "Meet our talented professionals.", "Meet the team"],
//   ["terms-and-conditions", "FileText", "Terms & Conditions", "Read our legal terms and policies.", "View details"],
// ];

// const menuData = {
//   Home: [
//     ["Company Profile", "Atlanta Quantum Tech pioneers smart software and AI solutions."],
//     ["Client Testimonials", "Trusted by global enterprises for reliability and innovation."],
//     ["Career @AQT", "Join a culture where ideas meet quantum excellence."],
//   ],
//   Services: [
//     ["Design & Development", ["Web, App & E-commerce", "Software & API Development"]],
//     ["Support Services", ["Hosting & Server Support", "Development Assistance"]],
//     ["Digital Marketing", ["SEO & Social Media", "Performance Optimization"]],
//   ],
//   Technologies: [
//     ["Mobile", ["Android", "iOS", "React Native", "Ionic"]],
//     ["Web", ["MEAN / MERN Stack", "React.js / Next.js"]],
//     ["Custom", ["HTML5 / Node.js", "Python / Angular / Express.js"]],
//   ],
//   Insights: [
//     ["Our Portfolio", "Innovative solutions crafted for industries worldwide."],
//     ["FAQs", "Answers about our services, pricing, and process."],
//   ],
// };

// // ============ SUB-COMPONENTS ============
// const Arrow = memo(() => (
//   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//   </svg>
// ));
// Arrow.displayName = "Arrow";

// const Section = memo(({ title, content }) => {
//   const isList = Array.isArray(content);
//   return (
//     <div>
//       <h4 className="font-semibold text-blue-600 mb-2 pb-2 border-b-2 border-blue-600 inline-block text-sm sm:text-base">
//         {title}
//       </h4>
//       {isList ? (
//         <ul className="text-sm mt-3 space-y-2 text-gray-600">
//           {content.map((item, i) => (
//             <li key={i} className="hover:text-blue-600 transition-colors cursor-pointer">→ {item}</li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-sm mt-3 text-gray-600 leading-relaxed">{content}</p>
//       )}
//     </div>
//   );
// });
// Section.displayName = "Section";

// const MenuCard = memo(({ data, onClose }) => {
//   const [href, iconName, title, desc, cta] = data;
//   const Icon = ICONS[iconName];
  
//   return (
//     <Link 
//       href={`/${href}`} 
//       onClick={onClose}
//       className="group p-4 sm:p-5 rounded-xl border border-transparent hover:border-blue-200 hover:shadow-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-teal-50 transition-all duration-300"
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
//           <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 group-hover:text-white transition-colors" />
//         </div>
//         <h4 className="font-semibold text-blue-600 text-sm sm:text-base">{title}</h4>
//       </div>
//       <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{desc}</p>
//       <div className="flex items-center gap-1 text-xs font-medium text-blue-600 mt-3 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0">
//         {cta} <Arrow />
//       </div>
//     </Link>
//   );
// });
// MenuCard.displayName = "MenuCard";

// const NavBtn = memo(({ href, onClick, className = "", children }) => (
//   <Link
//     href={href}
//     onClick={onClick}
//     className={`bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:from-blue-500 hover:to-teal-400 transition-all duration-300 ${className}`}
//   >
//     {children}
//   </Link>
// ));
// NavBtn.displayName = "NavBtn";

// // ============ MAIN COMPONENT ============
// export default function Navbar() {
//   const [openMenu, setOpenMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileSubmenu, setMobileSubmenu] = useState(null);

//   const closeAll = useCallback(() => {
//     setOpenMenu(null);
//     setMobileOpen(false);
//   }, []);

//   const toggleMobile = useCallback(() => setMobileOpen(prev => !prev), []);
//   const toggleSubmenu = useCallback((i) => setMobileSubmenu(prev => prev === i ? null : i), []);

//   // Build menu content
//   const renderGrid = useCallback((data, cols = 3) => (
//     <div className={`p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 ${cols === 3 ? 'lg:grid-cols-3' : ''} gap-4 lg:gap-6`}>
//       {data.map(([title, content], i) => (
//         <Section key={i} title={title} content={content} />
//       ))}
//     </div>
//   ), []);

//   const menuItems = [
//     { title: "Home", content: renderGrid(menuData.Home) },
//     { 
//       title: "About", 
//       content: (
//         <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//           {aboutLinks.map((link, i) => <MenuCard key={i} data={link} onClose={closeAll} />)}
//         </div>
//       )
//     },
//     { title: "Services", content: renderGrid(menuData.Services) },
//     { title: "Technologies", content: renderGrid(menuData.Technologies) },
//     { title: "Insights", content: renderGrid(menuData.Insights, 2) },
//   ];

//   return (
//     <header className="fixed w-full top-0 left-0 z-50 shadow-lg">
//       {/* Top Bar */}
//       <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
//           <span className="text-xs font-medium tracking-wide text-white text-center sm:text-left">
//             Empowering Innovation with Quantum Precision
//           </span>
//           <Link 
//             href="/contact" 
//             className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-4 py-1.5 rounded-full text-xs shadow-lg hover:from-orange-600 hover:to-orange-700 hover:scale-105 transition-all"
//           >
//             Get Free Consultation
//           </Link>
//         </div>
//       </div>

//       {/* Main Nav */}
//       <nav className="bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
//             {/* Logo */}
//             <Link href="/" className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
//               Atlanta Quantum Tech
//             </Link>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex items-center gap-1">
//               {menuItems.map((item, i) => (
//                 <div 
//                   key={i} 
//                   className="relative"
//                   onMouseEnter={() => setOpenMenu(i)}
//                   onMouseLeave={() => setOpenMenu(null)}
//                 >
//                   <button className="px-3 xl:px-4 py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center gap-1 text-sm xl:text-base">
//                     {item.title}
//                     <ChevronDown size={16} className={`transition-transform duration-200 ${openMenu === i ? "rotate-180" : ""}`} />
//                   </button>
                  
//                   {/* Underline */}
//                   <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 origin-left transition-transform duration-300 ${openMenu === i ? "scale-x-100" : "scale-x-0"}`} />
                  
//                   {/* Dropdown */}
//                   <AnimatePresence>
//                     {openMenu === i && (
//                       <motion.div 
//                         {...ANIM.dropdown} 
//                         className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden min-w-[280px] lg:min-w-[600px] xl:min-w-[650px]"
//                       >
//                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />
//                         {item.content}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}
              
//               <NavBtn href="/contact" className="ml-2 xl:ml-4 px-5 xl:px-6 py-2 text-sm xl:text-base hover:scale-105 hover:shadow-xl">
//                 Contact Us
//               </NavBtn>
//             </div>

//             {/* Mobile Toggle */}
//             <button 
//               onClick={toggleMobile} 
//               className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
//               aria-label="Toggle menu"
//             >
//               {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.div 
//               {...ANIM.mobile} 
//               className="lg:hidden bg-white border-t border-gray-200 max-h-[70vh] overflow-y-auto"
//             >
//               <div className="px-4 py-3 space-y-1">
//                 {menuItems.map((item, i) => (
//                   <div key={i} className="border-b border-gray-100 last:border-b-0">
//                     <button 
//                       onClick={() => toggleSubmenu(i)} 
//                       className="w-full px-3 py-3 text-left font-medium text-gray-700 hover:bg-gray-50 rounded-lg flex items-center justify-between"
//                     >
//                       {item.title}
//                       <ChevronDown size={18} className={`transition-transform duration-200 ${mobileSubmenu === i ? "rotate-180" : ""}`} />
//                     </button>
                    
//                     <AnimatePresence>
//                       {mobileSubmenu === i && (
//                         <motion.div {...ANIM.dropdown} className="bg-gray-50 rounded-lg mb-2 overflow-hidden">
//                           {item.content}
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 ))}
                
//                 <div className="pt-3 pb-2">
//                   <NavBtn href="/contact" onClick={closeAll} className="block text-center py-3 text-sm">
//                     Contact Us
//                   </NavBtn>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </header>
//   );
// }





"use client";
import { useState, useCallback, memo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Users, Mail, Info, FileText } from "lucide-react";

// ============ CONSTANTS ============
const ANIM = {
  dropdown: { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 10 }, transition: { duration: 0.2 } },
  mobile: { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, transition: { duration: 0.3 } }
};

const ICONS = { Info, Mail, Users, FileText };

// ============ DATA ============
const aboutLinks = [
  ["about-us", "Info", "About Us", "Learn about who we are and our mission.", "Discover more"],
  ["contact-us", "Mail", "Contact Us", "Have a question? Let's talk.", "Get in touch"],
  ["experts", "Users", "Our Experts", "Meet our talented professionals.", "Meet the team"],
  ["terms-and-conditions", "FileText", "Terms & Conditions", "Read our legal terms and policies.", "View details"],
];

const menuData = {
  Home: [
    { title: "Company Profile", desc: "Atlanta Quantum Tech pioneers smart software and AI solutions.", href: "/about-us" },
    { title: "Client Testimonials", desc: "Trusted by global enterprises for reliability and innovation.", href: "/testimonials" },
    { title: "Career @AQT", desc: "Join a culture where ideas meet quantum excellence.", href: "/careers" },
  ],
  Services: [
    { 
      title: "Design & Development", 
      items: [
        { name: "Web Development", href: "s#web" },
        { name: "App Development", href: "s#mobile" },
        { name: "E-commerce", href: "s#ecommerce" },
        { name: "Software Development", href: "s#software" },
        { name: "API Development", href: "s#api" }
      ]
    },
    { 
      title: "Support Services", 
      items: [
        { name: "Hosting & Server Support", href: "s#hosting" },
        { name: "Development Assistance", href: "s#support" }
      ]
    },
    { 
      title: "Digital Marketing", 
      items: [
        { name: "SEO & Social Media", href: "s#marketing" },
        { name: "Performance Optimization", href: "s#optimization" }
      ]
    },
  ],
  Technologies: [
    { 
      title: "Mobile", 
      items: [
        { name: "Android", href: "/technologies#android" },
        { name: "iOS", href: "/technologies#ios" },
        { name: "React Native", href: "/technologies#react-native" },
        { name: "Ionic", href: "/technologies#ionic" }
      ]
    },
    { 
      title: "Web", 
      items: [
        { name: "MEAN / MERN Stack", href: "/technologies#mern" },
        { name: "React.js / Next.js", href: "/technologies#react" }
      ]
    },
    { 
      title: "Custom", 
      items: [
        { name: "HTML5 / Node.js", href: "/technologies#node" },
        { name: "Python", href: "/technologies#python" },
        { name: "Angular", href: "/technologies#angular" },
        { name: "Express.js", href: "/technologies#express" }
      ]
    },
  ],
  Insights: [
    { title: "Our Portfolio", desc: "Innovative solutions crafted for industries worldwide.", href: "/portfolio" },
    { title: "FAQs", desc: "Answers about our services, pricing, and process.", href: "/faqs" },
  ],
};

// ============ SUB-COMPONENTS ============
const Arrow = memo(() => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
));
Arrow.displayName = "Arrow";

const Section = memo(({ title, content, onClose }) => {
  const hasItems = content.items && Array.isArray(content.items);
  const hasHref = content.href;
  
  if (hasHref) {
    // Simple link section (for Home and Insights)
    return (
      <Link 
        href={content.href}
        onClick={onClose}
        className="block group hover:bg-blue-50 p-3 rounded-lg transition-colors"
      >
        <h4 className="font-semibold text-blue-600 mb-1 text-sm sm:text-base group-hover:text-blue-700">
          {title}
        </h4>
        <p className="text-sm text-gray-600 leading-relaxed">{content.desc}</p>
      </Link>
    );
  }
  
  if (hasItems) {
    // Section with items list (for Services and Technologies)
    return (
      <div>
        <h4 className="font-semibold text-blue-600 mb-2 pb-2 border-b-2 border-blue-600 inline-block text-sm sm:text-base">
          {title}
        </h4>
        <ul className="text-sm mt-3 space-y-2">
          {content.items.map((item, i) => (
            <li key={i}>
              <Link 
                href={item.href}
                onClick={onClose}
                className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer block"
              >
                → {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  return null;
});
Section.displayName = "Section";

const MenuCard = memo(({ data, onClose }) => {
  const [href, iconName, title, desc, cta] = data;
  const Icon = ICONS[iconName];
  
  return (
    <Link 
      href={`/${href}`} 
      onClick={onClose}
      className="group p-4 sm:p-5 rounded-xl border border-transparent hover:border-blue-200 hover:shadow-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-teal-50 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 group-hover:text-white transition-colors" />
        </div>
        <h4 className="font-semibold text-blue-600 text-sm sm:text-base">{title}</h4>
      </div>
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{desc}</p>
      <div className="flex items-center gap-1 text-xs font-medium text-blue-600 mt-3 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0">
        {cta} <Arrow />
      </div>
    </Link>
  );
});
MenuCard.displayName = "MenuCard";

const NavBtn = memo(({ href, onClick, className = "", children }) => (
  <Link
    href={href}
    onClick={onClick}
    className={`bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:from-blue-500 hover:to-teal-400 transition-all duration-300 ${className}`}
  >
    {children}
  </Link>
));
NavBtn.displayName = "NavBtn";

// ============ MAIN COMPONENT ============
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  const closeAll = useCallback(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSubmenu(null);
  }, []);

  const toggleMobile = useCallback(() => setMobileOpen(prev => !prev), []);
  const toggleSubmenu = useCallback((i) => setMobileSubmenu(prev => prev === i ? null : i), []);

  // Build menu content
  const renderGrid = useCallback((data, cols = 3) => (
    <div className={`p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 ${cols === 3 ? 'lg:grid-cols-3' : ''} gap-4 lg:gap-6`}>
      {data.map((item, i) => (
        <Section key={i} title={item.title} content={item} onClose={closeAll} />
      ))}
    </div>
  ), [closeAll]);

  const menuItems = [
    { 
      title: "Home", 
      content: renderGrid(menuData.Home),
      href: "/" 
    },
    { 
      title: "About", 
      content: (
        <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {aboutLinks.map((link, i) => <MenuCard key={i} data={link} onClose={closeAll} />)}
        </div>
      )
    },
    { 
      title: "Services", 
      content: renderGrid(menuData.Services),
      href: "s"
    },
    { 
      title: "Technologies", 
      content: renderGrid(menuData.Technologies),
      href: "/technologies"
    },
    { 
      title: "Insights", 
      content: renderGrid(menuData.Insights, 2),
      href: "/insights"
    },
  ];

  return (
    <header className="fixed w-full top-0 left-0 z-50 shadow-lg">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="text-xs font-medium tracking-wide text-white text-center sm:text-left">
            Empowering Innovation with Quantum Precision
          </span>
          <Link 
            href="/contact-us" 
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-4 py-1.5 rounded-full text-xs shadow-lg hover:from-orange-600 hover:to-orange-700 hover:scale-105 transition-all"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Atlanta Quantum Tech
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item, i) => (
                <div 
                  key={i} 
                  className="relative"
                  onMouseEnter={() => setOpenMenu(i)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {item.href ? (
                    // If menu item has direct href, make it clickable
                    <Link 
                      href={item.href}
                      className="px-3 xl:px-4 py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center gap-1 text-sm xl:text-base"
                    >
                      {item.title}
                      <ChevronDown size={16} className={`transition-transform duration-200 ${openMenu === i ? "rotate-180" : ""}`} />
                    </Link>
                  ) : (
                    // Otherwise, show as button with dropdown
                    <button className="px-3 xl:px-4 py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center gap-1 text-sm xl:text-base">
                      {item.title}
                      <ChevronDown size={16} className={`transition-transform duration-200 ${openMenu === i ? "rotate-180" : ""}`} />
                    </button>
                  )}
                  
                  {/* Underline */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 origin-left transition-transform duration-300 ${openMenu === i ? "scale-x-100" : "scale-x-0"}`} />
                  
                  {/* Dropdown */}
                  <AnimatePresence>
                    {openMenu === i && (
                      <motion.div 
                        {...ANIM.dropdown} 
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden min-w-[280px] lg:min-w-[600px] xl:min-w-[650px]"
                      >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />
                        {item.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <NavBtn href="/contact-us" className="ml-2 xl:ml-4 px-5 xl:px-6 py-2 text-sm xl:text-base hover:scale-105 hover:shadow-xl">
                Contact Us
              </NavBtn>
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={toggleMobile} 
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div 
              {...ANIM.mobile} 
              className="lg:hidden bg-white border-t border-gray-200 max-h-[70vh] overflow-y-auto"
            >
              <div className="px-4 py-3 space-y-1">
                {menuItems.map((item, i) => (
                  <div key={i} className="border-b border-gray-100 last:border-b-0">
                    {item.href ? (
                      // Main menu item is clickable
                      <div>
                        <Link
                          href={item.href}
                          onClick={closeAll}
                          className="w-full px-3 py-3 text-left font-medium text-gray-700 hover:bg-gray-50 rounded-lg flex items-center justify-between"
                        >
                          <span>{item.title}</span>
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              toggleSubmenu(i);
                            }}
                            className="p-1"
                          >
                            <ChevronDown size={18} className={`transition-transform duration-200 ${mobileSubmenu === i ? "rotate-180" : ""}`} />
                          </button>
                        </Link>
                      </div>
                    ) : (
                      // No direct link, just toggle submenu
                      <button 
                        onClick={() => toggleSubmenu(i)} 
                        className="w-full px-3 py-3 text-left font-medium text-gray-700 hover:bg-gray-50 rounded-lg flex items-center justify-between"
                      >
                        {item.title}
                        <ChevronDown size={18} className={`transition-transform duration-200 ${mobileSubmenu === i ? "rotate-180" : ""}`} />
                      </button>
                    )}
                    
                    <AnimatePresence>
                      {mobileSubmenu === i && (
                        <motion.div {...ANIM.dropdown} className="bg-gray-50 rounded-lg mb-2 overflow-hidden">
                          {item.content}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                <div className="pt-3 pb-2">
                  <NavBtn href="/contact-us" onClick={closeAll} className="block text-center py-3 text-sm">
                    Contact Us
                  </NavBtn>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}