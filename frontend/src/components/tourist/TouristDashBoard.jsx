import React, { useState } from "react";
import { MessageSquare, MapPin, Calendar, DollarSign, Clock, Send, Bot, User, Globe } from "lucide-react";
import Footer from "../Footer";
import Navbar from "../navbar/Navbar";


const TouristDashboard = () => {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [days, setDays] = useState("");
  const [preferences, setPreferences] = useState("");
  const [language, setLanguage] = useState("English");
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hello! I\'m your AI travel assistant. Tell me about your dream trip to Jharkhand!' }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState(null);

  const languages = ["English", "Hindi", "Bengali", "Odia", "Santali"];

  const generateTripPlan = () => {
    if (!destination || !budget || !days) {
      alert("Please fill in all required fields!");
      return;
    }

    // Mock AI-generated trip plan
    const mockPlan = {
      destination: destination,
      duration: `${days} days`,
      budget: `₹${budget}`,
      itinerary: [
        {
          day: 1,
          activities: ["Arrive in Ranchi", "Visit Rock Garden", "Explore Tagore Hill"],
          accommodation: "Hotel Radisson Blu",
          budget: "₹3,500"
        },
        {
          day: 2,
          activities: ["Hundru Falls", "Jonha Falls", "Local cuisine tour"],
          accommodation: "Hotel Radisson Blu",
          budget: "₹2,800"
        },
        {
          day: 3,
          activities: ["Netarhat Sunrise Point", "Betla National Park"],
          accommodation: "Forest Lodge",
          budget: "₹2,200"
        }
      ],
      totalCost: budget,
      tips: [
        "Book accommodations in advance during peak season",
        "Carry comfortable walking shoes for nature trails",
        "Try local tribal cuisine and handicrafts"
      ]
    };

    setGeneratedPlan(mockPlan);
  };

  const sendMessage = () => {
    if (!currentMessage.trim()) return;

    const newMessages = [
      ...chatMessages,
      { type: 'user', message: currentMessage },
      { 
        type: 'bot', 
        message: `Great question! Based on your interest in "${currentMessage}", I recommend exploring Jharkhand's beautiful waterfalls like Hundru Falls and Dassam Falls. Would you like specific details about accommodation or activities there?` 
      }
    ];

    setChatMessages(newMessages);
    setCurrentMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <br /> <br /> <br />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Tourist Dashboard
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Plan your trips and explore the beautiful state of Jharkhand!
          </p>
        </div>

        {/* Main Grid - Responsive Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          
          {/* AI Trip Planner - Takes full width on mobile, 2/3 on desktop */}
          <div className="xl:col-span-2 bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Bot className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-xl md:text-2xl font-semibold">AI Trip Planner</h2>
            </div>
            
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Personalized travel plans based on your preferences, budget, and time with multilingual chatbot assistance.
            </p>

            {/* Language Selector */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Globe className="w-4 h-4 inline mr-1" />
                Preferred Language
              </label>
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full md:w-auto border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>

            {/* Input Form - Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Destination *
                </label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g., Ranchi, Jamshedpur, Deoghar"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <DollarSign className="w-4 h-4 inline mr-1" />
                  Budget (₹) *
                </label>
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="10000"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Duration (Days) *
                </label>
                <input
                  type="number"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  placeholder="3"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Travel Preferences
                </label>
                <input
                  type="text"
                  value={preferences}
                  onChange={(e) => setPreferences(e.target.value)}
                  placeholder="Adventure, Culture, Nature"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                onClick={generateTripPlan}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Generate AI Trip Plan
              </button>
              <button
                onClick={() => setShowChat(!showChat)}
                className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                {showChat ? 'Hide' : 'Show'} Chat Assistant
              </button>
            </div>

            {/* Chat Interface */}
            {showChat && (
              <div className="border border-gray-200 rounded-lg p-4 mb-6">
                <div className="h-64 overflow-y-auto mb-4 bg-gray-50 p-3 rounded">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`mb-3 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-3 py-2 rounded-lg ${
                        msg.type === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-white border border-gray-200'
                      }`}>
                        <div className="flex items-center mb-1">
                          {msg.type === 'bot' ? <Bot className="w-4 h-4 mr-1" /> : <User className="w-4 h-4 mr-1" />}
                          <span className="text-xs font-medium">
                            {msg.type === 'bot' ? 'AI Assistant' : 'You'}
                          </span>
                        </div>
                        <p className="text-sm">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder={`Ask me anything in ${language}...`}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={sendMessage}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Generated Trip Plan */}
            {generatedPlan && (
              <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Your Personalized Trip Plan</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p><strong>Destination:</strong> {generatedPlan.destination}</p>
                    <p><strong>Duration:</strong> {generatedPlan.duration}</p>
                  </div>
                  <div>
                    <p><strong>Total Budget:</strong> ₹{generatedPlan.totalCost}</p>
                    <p><strong>Language:</strong> {language}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {generatedPlan.itinerary.map((day, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 border border-green-200">
                      <h4 className="font-medium text-green-700">Day {day.day}</h4>
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Activities:</strong> {day.activities.join(', ')}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Stay:</strong> {day.accommodation} | <strong>Cost:</strong> {day.budget}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <h4 className="font-medium text-green-700 mb-2">Travel Tips:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {generatedPlan.tips.map((tip, index) => (
                      <li key={index}>• {tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Map - Responsive */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-red-600 mr-2" />
              <h2 className="text-xl font-semibold">Interactive Map</h2>
            </div>
            <div className="aspect-square w-full">
              <iframe
                title="Jharkhand Map"
                className="w-full h-full rounded-lg border"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5558969476!2d85.5094!3d23.6102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5729e3%3A0x6be830c993039301!2sJharkhand%2C%20India!5e0!3m2!1sen!2sus!4v1609459200000!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Explore popular destinations and plan your route across Jharkhand's beautiful landscapes.
            </p>
          </div>
        </div>

        {/* Quick Stats - Responsive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-100 rounded-lg p-4 text-center">
            <h3 className="text-2xl font-bold text-blue-600">50+</h3>
            <p className="text-sm text-blue-800">Tourist Destinations</p>
          </div>
          <div className="bg-green-100 rounded-lg p-4 text-center">
            <h3 className="text-2xl font-bold text-green-600">24/7</h3>
            <p className="text-sm text-green-800">AI Assistant</p>
          </div>
          <div className="bg-purple-100 rounded-lg p-4 text-center">
            <h3 className="text-2xl font-bold text-purple-600">5+</h3>
            <p className="text-sm text-purple-800">Languages</p>
          </div>
          <div className="bg-orange-100 rounded-lg p-4 text-center">
            <h3 className="text-2xl font-bold text-orange-600">1000+</h3>
            <p className="text-sm text-orange-800">Happy Travelers</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TouristDashboard;