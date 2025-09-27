import React from "react";
import {
  Users,
  UserCheck,
  Palette,
  Home,
  Car,
  BarChart3,
  Star,
} from "lucide-react";
import Footer from "../Footer";
import Navbar from "../navbar/Navbar";

const RolesSection = () => {
  const roles = [
    {
      title: "Tourist",
      icon: Users,
      description:
        "Plan personalized itineraries, book services, and explore destinations with AI assistance.",
      features: [
        "AI Trip Planning",
        "Real-time Updates",
        "Secure Payments",
        "Local Experiences",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Local Guide",
      icon: UserCheck,
      description:
        "Get verified, showcase expertise, and connect with tourists for authentic experiences.",
      features: [
        "Digital Certification",
        "Profile Management",
        "Booking System",
        "Rating Reviews",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Tribal Artisan",
      icon: Palette,
      description:
        "Showcase and sell traditional handicrafts to tourists through our marketplace.",
      features: [
        "Product Showcase",
        "Direct Sales",
        "Cultural Stories",
        "Fair Pricing",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Homestay Owner",
      icon: Home,
      description:
        "List your property, manage bookings, and provide authentic local accommodation.",
      features: [
        "Property Listing",
        "Booking Management",
        "Guest Communication",
        "Revenue Tracking",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Transport Provider",
      icon: Car,
      description:
        "Offer reliable transport services with real-time tracking and secure payments.",
      features: [
        "Fleet Management",
        "Route Optimization",
        "Digital Payments",
        "Safety Features",
      ],
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Tourism Official",
      icon: BarChart3,
      description:
        "Monitor tourism trends, analyze data, and make informed policy decisions.",
      features: [
        "Analytics Dashboard",
        "Trend Analysis",
        "Impact Assessment",
        "Policy Insights",
      ],
      color: "from-teal-500 to-green-500",
    },
    {
      title: "Event Organizer",
      icon: Star,
      description:
        "Promote cultural events, festivals, and activities to engage tourists.",
      features: [
        "Event Promotion",
        "Ticket Sales",
        "Audience Analytics",
        "Cultural Showcasing",
      ],
      color: "from-amber-500 to-yellow-500",
    },
  ];

  return (
    <div>
      <Navbar />
      <br />
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Platform for Everyone
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform serves multiple stakeholders in the
              tourism ecosystem, creating opportunities for everyone to benefit
              and contribute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${role.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <role.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {role.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {role.description}
                </p>

                <div className="space-y-3">
                  {role.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${role.color} rounded-full`}
                      ></div>
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full mt-6 bg-gradient-to-r ${role.color} text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105`}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RolesSection;
