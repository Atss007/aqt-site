
// "use client";
// import Image from "next/image";
// import Link from "next/link";

// export default function AboutSection() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-teal-50 py-20">
//       {/* Subtle Decorative Backgrounds */}
//       <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-20" />
//       <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply blur-3xl opacity-20" />

//       {/* Main Container */}
//       <div className="relative max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        
//         {/* Text Section */}
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
//             About{" "}
//             <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
//               Atlanta Quantum Tech
//             </span>
//           </h2>

//           <p className="text-gray-700 mb-8 leading-relaxed text-lg md:text-xl">
//             At <strong>Atlanta Quantum Tech Pvt Ltd</strong>, we empower
//             businesses with cutting-edge solutions in{" "}
//             <span className="font-semibold">Web & Mobile Development</span>,{" "}
//             <span className="font-semibold">AI & Automation</span>,{" "}
//             <span className="font-semibold">Cloud Infrastructure</span>, and{" "}
//             <span className="font-semibold">Digital Transformation</span>.
//             <br />
//             <br />
//             We combine innovation with precision to deliver measurable results
//             for clients worldwide.
//           </p>

//           <Link
//             href="/about"
//             className="inline-block px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-full shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg"
//           >
//             Learn More
//           </Link>
//         </div>

//         {/* Image Section */}
//         <div className="w-full md:w-1/2 flex justify-center md:justify-end">
//           <div className="relative w-full max-w-md md:max-w-lg">
//             <Image
//               src="/assets/2807771_18146.jpg"
//               alt="About Atlanta Quantum Tech"
//               width={600}
//               height={500}
//               priority={true} // load immediately for above-the-fold image
//               className="rounded-2xl shadow-xl object-cover w-full h-auto"
//             />

//             {/* Subtle glow frame for depth */}
//             <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-teal-400/10 to-blue-500/10 pointer-events-none" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





import Image from "next/image";
import Link from "next/link";

const gradient = "bg-gradient-to-r from-teal-500 to-blue-600";
const services = ["Web & Mobile Development", "AI & Automation", "Cloud Infrastructure", "Digital Transformation"];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-teal-50 py-20">
      {[-40, null].map((pos, i) => (
        <div key={i} className={`absolute w-96 h-96 rounded-full mix-blend-multiply blur-3xl opacity-20 ${i === 0 ? "-top-40 -right-40 bg-blue-100" : "-bottom-40 -left-40 bg-teal-100"}`} />
      ))}

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            About <span className={`${gradient} bg-clip-text text-transparent`}>Atlanta Quantum Tech</span>
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed text-lg md:text-xl">
            At <strong>Atlanta Quantum Tech Pvt Ltd</strong>, we empower businesses with cutting-edge solutions in {services.map((s, i) => <span key={i}><strong>{s}</strong>{i < 3 && ", "}</span>)}.
            <br /><br />We combine innovation with precision to deliver measurable results for clients worldwide.
          </p>
          <Link href="/about-us" className={`inline-block px-8 py-3 ${gradient} text-white font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200`}>
            Learn More
          </Link>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md md:max-w-lg">
            <Image src="/assets/2807771_18146.jpg" alt="About Atlanta Quantum Tech" width={600} height={500} priority className="rounded-2xl shadow-xl object-cover w-full h-auto" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-teal-400/10 to-blue-500/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}