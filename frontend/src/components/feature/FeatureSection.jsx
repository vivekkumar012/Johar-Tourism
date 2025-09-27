import React from "react";
import {
  Bot,
  Shield,
  Camera,
  MapPin,
  ShoppingBag,
  TrendingUp,
} from "lucide-react"; // import all icons you need
import Footer from "../Footer";
import Navbar from "../navbar/Navbar";

const FeaturesSection = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Itinerary Planning",
      description:
        "Personalized travel plans based on your preferences, budget, and time with multilingual chatbot assistance.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description:
        "Secure transactions, verified guides, and digital certificates for local service providers using blockchain technology.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Camera,
      title: "AR/VR Previews",
      description:
        "Interactive maps and immersive AR/VR previews of tourist destinations and cultural sites.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Real-time Location Services",
      description:
        "Live transport updates, GPS navigation, and location-based recommendations for seamless travel.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: ShoppingBag,
      title: "Local Marketplace",
      description:
        "Integrated platform for tribal handicrafts, homestays, local events, and eco-tourism experiences.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description:
        "AI-driven feedback analysis and comprehensive dashboard for tourism officials to monitor trends.",
      gradient: "from-teal-500 to-green-500",
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
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology meets authentic Jharkhand experiences to
              create the most comprehensive tourism platform in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FeaturesSection;
