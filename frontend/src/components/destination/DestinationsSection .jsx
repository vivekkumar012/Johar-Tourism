import React from "react";
import { ChevronRight } from "lucide-react";
import Footer from "../Footer";
import Navbar from "../navbar/Navbar";

const DestinationsSection = () => {
  const destinations = [
    {
      name: "Netarhat",
      description: "Hill Station Paradise",
      image:
        "https://imgs.search.brave.com/0nFFsPCOT5dmZv1gFhg2-WrWYNx83MQJ-J0EXI88VCE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aWRl/b2Nkbi5jZG5way5u/ZXQvdmlkZW9zL2U5/MjkzMTFiLTMwNmIt/NGMzNi04NDNmLTll/ZDIxMzMwYzUxYy9o/b3Jpem9udGFsL3Ro/dW1ibmFpbHMvc21h/bGwuanBn",
      features: ["Sunrise Point", "Pine Forest", "Cool Climate"],
    },
    {
      name: "Hundru Falls",
      description: "Majestic Waterfall",
      image:
        "https://imgs.search.brave.com/jOGTEiEYN4MLut6QXx3tinAGNI5-I1Ay9KjrO0wTBls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZTMubW91dGhzaHV0/LmNvbS9pbWFnZXMv/aW1hZ2VzcC85MjU3/NzQ2OTJzLmpwZw",
      features: ["98m High", "Natural Pool", "Trekking"],
    },
    {
      name: "Betla National Park",
      description: "Wildlife Sanctuary",
      image:
        "https://imgs.search.brave.com/2Tc5drxI50qgLUeVVb6IUO5n0PZiV5o6F8nprWhEOgQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/LnRyaXBvdG8uY29t/L21lZGlhL2ZpbHRl/ci9ubC9pbWcvMjM4/MDI5MS9JbWFnZS8x/Njk4NDg5NzM0X2V1/YjNzN2l1MGFhMHVk/YS5qcGcud2VicA",
      features: ["Tigers", "Elephants", "Safari Tours"],
    },
    {
      name: "Deoghar",
      description: "Spiritual Center",
      image:
        "https://imgs.search.brave.com/5uoK2sxAht9vc0ZwiO_m4H8STKDUcSMIktmV5x2W9WU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I5LzVh/LzE0L2I5NWExNGI1/ZDIwMzc5Yjk1ZmUy/NWM1Njg0YTViMTcx/LmpwZw",
      features: ["Baidyanath Temple", "Pilgrimage", "Cultural Heritage"],
    },
    {
      name: "Patratu",
      description: "Valley of Flowers",
      image:
        "https://imgs.search.brave.com/QrBWFNnKUwuKjfYPnmpwIMoO9gQco07I2bkoPzaDeuc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/LnRyaXBvdG8uY29t/L21lZGlhL2ZpbHRl/ci9ubC9pbWcvNjU3/MzMvSW1hZ2UvMTY1/NzQ0MjM2NF8yMDE5/MDYxM18xMDMzMDgu/anBn",
      features: ["Dam View", "Boating", "Scenic Beauty"],
    },
    {
      name: "Tribal Villages",
      description: "Cultural Experience",
      image:
        "https://imgs.search.brave.com/y1kgROHkVwrYYCk7oDCHfkXEjVy6LZhFT9GuJbjcYF8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIw/MTk2ODMwNi9waG90/by9pbmRpYW4tdHJp/YmFsLXZpbGxhZ2Ut/YXQtYm9scHVyLXdl/c3QtYmVuZ2FsLXdp/dGgtdmlldy1vZi1t/dWQtaG91c2UtYW5k/LWEtdHJpYmFsLXdv/bWFuLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1JVXlIallO/MG9faXFQVzRLOENU/Wmw0MDBFUXoxeHhl/WTI3UHFhUzRqanFF/PQ",
      features: ["Handicrafts", "Folk Dance", "Local Cuisine"],
    },
  ];

  return (
    <div>
      <Navbar />
      <br />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Explore Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From pristine waterfalls to ancient temples, discover the hidden
              gems of Jharkhand with our curated destination guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{destination.name}</h3>
                    <p className="text-gray-200">{destination.description}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Explore Now</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DestinationsSection;
