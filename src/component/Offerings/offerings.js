"use client";
import Image from "next/image";
import { Smartphone, PencilRuler, Laptop2, MonitorCheck } from "lucide-react";

const offerings = [
  {
    title: "Web Development",
    description:
      "Responsive websites & web applications built with modern technologies like React, Next.js, and Node.js.",
    icon: <Laptop2 size={28} className="text-white" />,
    image: "/assets/4132609_2175137.jpg",
    hoverText:
      "We build fast, scalable, and responsive websites tailored to your business needs. From landing pages to complex web applications, our solutions are designed to impress.",
    iconBg: "bg-blue-500",
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions, APIs, and backend systems tailored to your business needs.",
    icon: <MonitorCheck size={28} className="text-white" />,
    image: "/assets/4132609_2175137.jpg",
    hoverText:
      "Our custom software is designed to solve complex business problems efficiently. We develop robust systems that scale with your organization.",
    iconBg: "bg-green-500",
  },
  {
    title: "Mobile App Development",
    description:
      "Native & cross-platform apps for iOS and Android with seamless user experience.",
    icon: <Smartphone size={28} className="text-white" />,
    image: "/assets/4132609_2175137.jpg",
    hoverText:
      "We create intuitive and engaging mobile applications for iOS and Android, ensuring seamless performance and a great user experience.",
    iconBg: "bg-purple-500",
  },
  {
    title: "UI/UX Development",
    description:
      "Intuitive, engaging, and brand-aligned interfaces for web and mobile applications.",
    icon: <PencilRuler size={28} className="text-white" />,
    image: "/assets/4132609_2175137.jpg",
    hoverText:
      "Our UI/UX designs focus on user-centered experiences, making your applications not only functional but visually appealing and easy to use.",
    iconBg: "bg-pink-500",
  },
  {
    title: "E-Commerce Development",
    description:
      "Custom e-commerce platforms with secure payment integration and optimized shopping experience.",
    icon: <Laptop2 size={28} className="text-white" />,
    image: "/assets/4132609_2175137.jpg",
    hoverText:
      "We create scalable online stores with smooth UX and secure checkout to boost your sales.",
    iconBg: "bg-yellow-500",
  },
  {
    title: "API Development",
    description:
      "Robust APIs to connect your systems and services seamlessly for automation and efficiency.",
    icon: <MonitorCheck size={28} className="text-white" />,
    image: "/assets/4132609_2175137.jpg",
    hoverText:
      "Our APIs ensure smooth integration between applications and third-party services.",
    iconBg: "bg-teal-500",
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and hosting solutions to optimize performance and cost.",
    icon: <Laptop2 size={28} className="text-white" />,
    image: "/assets/4132609_2175137.jpg",
    hoverText:
      "We deploy and manage cloud resources to ensure high availability and performance.",
    iconBg: "bg-indigo-500",
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, social media campaigns, and performance marketing to grow your business online.",
    icon: <Smartphone size={28} className="text-white" />,
    image: "/assets/4132609_2175137.jpg",
    hoverText:
      "We improve your brand visibility and drive leads through data-driven marketing strategies.",
    iconBg: "bg-red-500",
  },
  {
    title: "Analytics & Insights",
    description:
      "Data analytics and business intelligence to help you make informed decisions.",
    icon: <PencilRuler size={28} className="text-white" />,
    image: "/assets/4132609_2175137.jpg",
    hoverText:
      "We analyze your data to provide actionable insights and optimize your business processes.",
    iconBg: "bg-gray-500",
  },
];

export default function OfferingsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our{" "}
          <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
            Expertise
          </span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          We deliver cutting-edge solutions across Web, Software, Mobile, and
          UI/UX Development to elevate your business.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {offerings.map((item, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:-translate-y-2"
          >
            {/* Background Image (optimized Next.js <Image>) */}
            <div className="absolute inset-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={idx < 3} // only prioritize top visible items
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-500" />

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col h-full justify-between">
              <div>
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full mb-4 ${item.iconBg} shadow-lg`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Hover Extra Text */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-gray-100 text-sm leading-relaxed">
                {item.hoverText}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
