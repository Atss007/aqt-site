// import Link from "next/link";
// import { User, CheckCircle, Users, Globe, Star } from "lucide-react";

// export default function SuccessSection() {
//   const stats = [
//     {
//       icon: <Users size={28} />,
//       value: "27,000+",
//       label: "Successful Projects",
//     },
//     {
//       icon: <Star size={28} />,
//       value: "15,000+",
//       label: "Happy Clients",
//     },
//     {
//       icon: <User size={28} />,
//       value: "1,000+",
//       label: "Expert Team Members",
//     },
//     {
//       icon: <CheckCircle size={28} />,
//       value: "95%",
//       label: "Customer Satisfaction",
//     },
//     {
//       icon: <Globe size={28} />,
//       value: "6+",
//       label: "Offices Worldwide",
//     },
//   ];

//   return (
//     <section className="bg-gray-900 text-white py-20">
//       <div className="max-w-7xl mx-auto px-6 text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold">
//           Built Relationships With 15,000+ Happy Clients
//         </h2>
//         <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
//           Trusted by clients worldwide, we consistently deliver proven results through timely execution and exceptional service.
//         </p>
//       </div>

//       {/* Stats Grid */}
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
//         {stats.map((item, idx) => (
//           <div key={idx} className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
//             <div className="text-orange-500 mb-4">{item.icon}</div>
//             <h3 className="text-2xl font-bold text-white">{item.value}</h3>
//             <p className="text-gray-300 mt-1 text-sm">{item.label}</p>
//           </div>
//         ))}
//       </div>

//       {/* Get in Touch Button */}
//       <div className="mt-12 text-center">
//         <Link
//           href="/contact"
//           className="inline-block px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold text-lg hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
//         >
//           Get in Touch
//         </Link>
//       </div>
//     </section>
//   );
// }







import Link from "next/link";
import { User, CheckCircle, Users, Globe, Star } from "lucide-react";

// Icon mapping for cleaner data structure
const icons = { Users, Star, User, CheckCircle, Globe };

// Compact stats data: [iconName, value, label]
const stats = [
  ["Users", "27,000+", "Successful Projects"],
  ["Star", "15,000+", "Happy Clients"],
  ["User", "1,000+", "Expert Team Members"],
  ["CheckCircle", "95%", "Customer Satisfaction"],
  ["Globe", "6+", "Offices Worldwide"],
];

export default function SuccessSection() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Built Relationships With 15,000+ Happy Clients
        </h2>
        <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
          Trusted by clients worldwide, we consistently deliver proven results through timely execution and exceptional service.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
        {stats.map(([icon, value, label], i) => {
          const Icon = icons[icon];
          return (
            <div key={i} className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Icon size={28} className="text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold">{value}</h3>
              <p className="text-gray-300 mt-1 text-sm">{label}</p>
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="mt-12 text-center">
        <Link href="/contact-us" className="inline-block px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold text-lg hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg">
          Get in Touch
        </Link>
      </div>
    </section>
  );
}