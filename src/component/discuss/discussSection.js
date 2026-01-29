// "use client";
// import Link from "next/link";

// export default function DiscussRequirement() {
//   return (
//     <section className="bg-gray-50">
//       <div className="max-w-7xl mx-auto p-6 border">
//         <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
//           {/* Left Side: Paragraph */}
//           <div className="md:w-2/3">
//             <p className="text-gray-700 text-lg md:text-xl">
//               Have a unique project or a business challenge? Our experts are here to understand your requirements and provide tailored IT solutions that drive growth, efficiency, and innovation. Connect with us and let’s explore how we can bring your vision to life.
//             </p>
//           </div>
//           {/* Right Side: Call-to-action */}
//           <div className="md:w-1/3 flex justify-center md:justify-end">
//             <Link
//               href="/contact"
//               className="px-6 py-4 bg-orange-500 hover:bg-teal-700 text-white rounded-xl font-semibold shadow-lg transition-all duration-300"
//             >
//               Discuss with us
//             </Link>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



"use client";
import Link from "next/link";

export default function DiscussRequirement() {
  return (
    <section className="py-5 bg-gray-50">
      <div className="max-w-7xl mx-auto p-8 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-3xl shadow-2xl">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
          
          {/* Left Side: Paragraph */}
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Discuss Your Requirement
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Have a unique project or a business challenge? Our experts are ready to understand your requirements and provide tailored IT solutions that drive growth, efficiency, and innovation. Connect with us and let’s explore how we can bring your vision to life.
            </p>
          </div>

          {/* Right Side: Call-to-action */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <Link
              href="/contact"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-semibold shadow-lg transition-all duration-300"
            >
              Discuss with us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
