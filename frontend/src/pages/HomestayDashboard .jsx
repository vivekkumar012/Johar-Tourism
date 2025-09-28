import React, { useState } from "react";
import {
  Home,
  Calendar,
  MessageSquare,
  DollarSign,
  Plus,
  Camera,
  MapPin,
  Users,
  Star,
  Bed,
  Wifi,
  Car,
  Coffee,
  Edit3,
  Eye,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Clock,
  Phone,
  Mail,
  Upload,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";

const HomestayDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [newProperty, setNewProperty] = useState({
    name: "",
    pricePerNight: "",
    location: "",
    rooms: "",
    guests: "",
    description: "",
    amenities: [],
    houseRules: "",
    checkIn: "",
    checkOut: "",
  });

  const [properties] = useState([
    {
      id: 1,
      name: "Traditional Jharkhand Village Home",
      location: "Ranchi, Jharkhand",
      pricePerNight: 1200,
      rooms: 3,
      guests: 6,
      rating: 4.8,
      reviews: 24,
      bookings: 18,
      revenue: 21600,
      status: "active",
      image: "/api/placeholder/300/200",
      amenities: ["WiFi", "Kitchen", "Parking", "Garden"],
      nextBooking: "2024-10-20",
    },
    {
      id: 2,
      name: "Tribal Heritage Cottage",
      location: "Jamshedpur, Jharkhand",
      pricePerNight: 1500,
      rooms: 2,
      guests: 4,
      rating: 4.9,
      reviews: 16,
      bookings: 12,
      revenue: 18000,
      status: "active",
      image: "/api/placeholder/300/200",
      amenities: ["WiFi", "Meals", "Cultural Tours"],
      nextBooking: "2024-10-18",
    },
  ]);

  const [bookings] = useState([
    {
      id: 1,
      property: "Traditional Jharkhand Village Home",
      guest: "Sarah Johnson",
      checkIn: "2024-10-15",
      checkOut: "2024-10-17",
      guests: 2,
      amount: 2400,
      status: "confirmed",
      phone: "+91-9876543210",
      email: "sarah.j@email.com",
    },
    {
      id: 2,
      property: "Tribal Heritage Cottage",
      guest: "Michael Chen",
      checkIn: "2024-10-18",
      checkOut: "2024-10-21",
      guests: 3,
      amount: 4500,
      status: "pending",
      phone: "+91-9876543211",
      email: "m.chen@email.com",
    },
    {
      id: 3,
      property: "Traditional Jharkhand Village Home",
      guest: "Priya Patel",
      checkIn: "2024-10-20",
      checkOut: "2024-10-22",
      guests: 4,
      amount: 2400,
      status: "arriving_today",
      phone: "+91-9876543212",
      email: "priya.p@email.com",
    },
  ]);

  const [messages] = useState([
    {
      id: 1,
      guest: "Sarah Johnson",
      property: "Traditional Jharkhand Village Home",
      message: "Hi! Could you please provide directions from Ranchi airport?",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      guest: "Michael Chen",
      property: "Tribal Heritage Cottage",
      message: "What time is the cultural tour included in the stay?",
      time: "4 hours ago",
      unread: true,
    },
    {
      id: 3,
      guest: "Priya Patel",
      property: "Traditional Jharkhand Village Home",
      message: "Thank you for the warm welcome! The food was amazing.",
      time: "1 day ago",
      unread: false,
    },
  ]);

  const amenitiesList = [
    { id: "wifi", label: "WiFi", icon: Wifi },
    { id: "parking", label: "Parking", icon: Car },
    { id: "kitchen", label: "Kitchen", icon: Coffee },
    { id: "meals", label: "Home-cooked Meals", icon: Coffee },
    { id: "garden", label: "Garden", icon: Home },
    { id: "tours", label: "Cultural Tours", icon: MapPin },
  ];

  const handleInputChange = (field, value) => {
    setNewProperty((prev) => ({ ...prev, [field]: value }));
  };

  const handleAmenityToggle = (amenity) => {
    setNewProperty((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handlePropertyAdd = () => {
    if (!newProperty.name || !newProperty.pricePerNight) {
      alert("Please fill in all required fields!");
      return;
    }
    console.log("Adding property:", newProperty);
    alert("Property added successfully!");
    setNewProperty({
      name: "",
      pricePerNight: "",
      location: "",
      rooms: "",
      guests: "",
      description: "",
      amenities: [],
      houseRules: "",
      checkIn: "",
      checkOut: "",
    });
  };

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
        activeTab === id
          ? "bg-blue-600 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      <Icon className="w-4 h-4 mr-2" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );

  return (
    <div>
      <Navbar />
      <br /> <br /> <br />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Homestay Owner Dashboard
                  </h1>
                  <p className="mt-1 text-sm md:text-base text-gray-600">
                    List your property, manage bookings, and provide authentic
                    local accommodation
                  </p>
                </div>

                {/* Host Badge */}
                <div className="mt-4 sm:mt-0 flex items-center">
                  <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm">
                    <Home className="w-4 h-4 mr-2" />
                    <span className="font-medium">Verified Host</span>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="mt-6">
                <div className="flex flex-wrap gap-2 overflow-x-auto">
                  <TabButton id="overview" label="Overview" icon={TrendingUp} />
                  <TabButton id="properties" label="Properties" icon={Home} />
                  <TabButton
                    id="add-property"
                    label="Add Property"
                    icon={Plus}
                  />
                  <TabButton id="bookings" label="Bookings" icon={Calendar} />
                  <TabButton
                    id="messages"
                    label="Messages"
                    icon={MessageSquare}
                  />
                  <TabButton id="revenue" label="Revenue" icon={DollarSign} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
                    <Home className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {properties.length}
                  </h3>
                  <p className="text-sm text-gray-600">Active Properties</p>
                </div>

                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">30</h3>
                  <p className="text-sm text-gray-600">Total Bookings</p>
                </div>

                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-3">
                    <Star className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">4.85</h3>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </div>

                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-3">
                    <DollarSign className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">₹39,600</h3>
                  <p className="text-sm text-gray-600">Monthly Revenue</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Recent Bookings
                  </h3>
                  <div className="space-y-3">
                    {bookings.slice(0, 3).map((booking) => (
                      <div
                        key={booking.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">
                            {booking.guest}
                          </p>
                          <p className="text-sm text-gray-600">
                            {booking.checkIn} - {booking.checkOut}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">
                            ₹{booking.amount}
                          </p>
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                              booking.status === "confirmed"
                                ? "bg-green-100 text-green-800"
                                : booking.status === "arriving_today"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {booking.status.replace("_", " ")}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Unread Messages
                  </h3>
                  <div className="space-y-3">
                    {messages
                      .filter((msg) => msg.unread)
                      .map((message) => (
                        <div
                          key={message.id}
                          className="p-3 bg-blue-50 rounded-lg"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-medium text-gray-900">
                              {message.guest}
                            </p>
                            <span className="text-xs text-gray-500">
                              {message.time}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            {message.message}
                          </p>
                          <p className="text-xs text-blue-600 mt-1">
                            {message.property}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Property Performance */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Property Performance
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {properties.map((property) => (
                    <div
                      key={property.id}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900">
                          {property.name}
                        </h4>
                        <span className="text-sm text-green-600 font-medium">
                          ₹{property.revenue}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <p className="font-medium text-gray-900">
                            {property.bookings}
                          </p>
                          <p className="text-gray-600">Bookings</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-gray-900">
                            {property.rating}
                          </p>
                          <p className="text-gray-600">Rating</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-gray-900">
                            {property.reviews}
                          </p>
                          <p className="text-gray-600">Reviews</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Property Listing Tab */}
          {activeTab === "properties" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">My Properties</h3>
                <button
                  onClick={() => setActiveTab("add-property")}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Property
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {properties.map((property) => (
                  <div
                    key={property.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="relative">
                      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                        <Camera className="w-12 h-12 text-gray-400" />
                      </div>
                      <div className="absolute top-2 right-2">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            property.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {property.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {property.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {property.location}
                      </p>
                      <p className="text-lg font-bold text-blue-600 mb-3">
                        ₹{property.pricePerNight}/night
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center">
                          <Bed className="w-4 h-4 mr-1 text-gray-500" />
                          {property.rooms} rooms
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1 text-gray-500" />
                          {property.guests} guests
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-500" />
                          {property.rating} ({property.reviews})
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1 text-green-500" />
                          {property.bookings} bookings
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {property.amenities.map((amenity) => (
                          <span
                            key={amenity}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700">
                          <Edit3 className="w-4 h-4 inline mr-1" />
                          Edit
                        </button>
                        <button className="flex-1 bg-gray-600 text-white px-3 py-2 rounded text-sm hover:bg-gray-700">
                          <Eye className="w-4 h-4 inline mr-1" />
                          View
                        </button>
                      </div>

                      <div className="mt-4 p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-800">
                          <strong>Next Booking:</strong> {property.nextBooking}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add Property Tab */}
          {activeTab === "add-property" && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-6">
                  List Your Property
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Property Details */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Name *
                      </label>
                      <input
                        type="text"
                        value={newProperty.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="e.g., Traditional Jharkhand Village Home"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Price per Night (₹) *
                        </label>
                        <input
                          type="number"
                          value={newProperty.pricePerNight}
                          onChange={(e) =>
                            handleInputChange("pricePerNight", e.target.value)
                          }
                          placeholder="1200"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location *
                        </label>
                        <input
                          type="text"
                          value={newProperty.location}
                          onChange={(e) =>
                            handleInputChange("location", e.target.value)
                          }
                          placeholder="Ranchi, Jharkhand"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Rooms
                        </label>
                        <input
                          type="number"
                          value={newProperty.rooms}
                          onChange={(e) =>
                            handleInputChange("rooms", e.target.value)
                          }
                          placeholder="3"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Max Guests
                        </label>
                        <input
                          type="number"
                          value={newProperty.guests}
                          onChange={(e) =>
                            handleInputChange("guests", e.target.value)
                          }
                          placeholder="6"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Description
                      </label>
                      <textarea
                        rows={4}
                        value={newProperty.description}
                        onChange={(e) =>
                          handleInputChange("description", e.target.value)
                        }
                        placeholder="Describe your property, its unique features, local culture, and what makes it special..."
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Amenities
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {amenitiesList.map((amenity) => {
                          const IconComponent = amenity.icon;
                          return (
                            <label
                              key={amenity.id}
                              className="flex items-center"
                            >
                              <input
                                type="checkbox"
                                checked={newProperty.amenities.includes(
                                  amenity.id
                                )}
                                onChange={() => handleAmenityToggle(amenity.id)}
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              />
                              <IconComponent className="w-4 h-4 mx-2 text-gray-500" />
                              <span className="text-sm text-gray-700">
                                {amenity.label}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Images
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">
                          Upload property images
                        </p>
                        <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 flex items-center mx-auto">
                          <Upload className="w-4 h-4 mr-2" />
                          Choose Images
                        </button>
                        <p className="text-xs text-gray-500 mt-2">
                          PNG, JPG up to 5MB each
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Check-in Time
                        </label>
                        <input
                          type="time"
                          value={newProperty.checkIn}
                          onChange={(e) =>
                            handleInputChange("checkIn", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Check-out Time
                        </label>
                        <input
                          type="time"
                          value={newProperty.checkOut}
                          onChange={(e) =>
                            handleInputChange("checkOut", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        House Rules
                      </label>
                      <textarea
                        rows={4}
                        value={newProperty.houseRules}
                        onChange={(e) =>
                          handleInputChange("houseRules", e.target.value)
                        }
                        placeholder="e.g., No smoking, No pets, Quiet hours after 10 PM..."
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Local Experience Features */}
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-medium text-blue-800 mb-3">
                        Authentic Local Experience
                      </h4>
                      <div className="space-y-2 text-sm text-blue-700">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-2"
                          />
                          Traditional home-cooked meals
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-2"
                          />
                          Cultural activities & storytelling
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-2"
                          />
                          Local village tours
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-2"
                          />
                          Traditional craft workshops
                        </label>
                      </div>
                    </div>

                    {/* Pricing Guidelines */}
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-medium text-green-800 mb-3">
                        Pricing Guidelines
                      </h4>
                      <div className="text-sm text-green-700 space-y-1">
                        <p>• Basic room: ₹800-1200/night</p>
                        <p>• With meals: ₹1200-1800/night</p>
                        <p>• Cultural experience: ₹1500-2500/night</p>
                        <p>• Premium homestay: ₹2000-3500/night</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-4 mt-8">
                  <button
                    onClick={() => setActiveTab("properties")}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handlePropertyAdd}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    List Property
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Booking Management Tab */}
          {activeTab === "bookings" && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold">Booking Management</h3>
                  <p className="text-gray-600">
                    Manage your property reservations and guest information
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Booking ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Guest
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Property
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Check-in
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Check-out
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Guests
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {bookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-mono text-sm">
                            #{booking.id.toString().padStart(4, "0")}
                          </td>
                          <td className="px-6 py-4">
                            <div>
                              <p className="font-medium text-gray-900">
                                {booking.guest}
                              </p>
                              <div className="flex items-center text-sm text-gray-500 mt-1">
                                <Phone className="w-3 h-3 mr-1" />
                                {booking.phone}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {booking.property}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {booking.checkIn}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {booking.checkOut}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {booking.guests}
                          </td>
                          <td className="px-6 py-4 font-medium text-gray-900">
                            ₹{booking.amount}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                                booking.status === "confirmed"
                                  ? "bg-green-100 text-green-800"
                                  : booking.status === "arriving_today"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {booking.status.replace("_", " ")}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-700 text-sm">
                                Contact
                              </button>
                              <button className="text-gray-600 hover:text-gray-700 text-sm">
                                Details
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Today's Arrivals
                  </h4>
                  <p className="text-2xl font-bold text-blue-600">2</p>
                  <p className="text-sm text-gray-600">Guests checking in</p>
                </div>

                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Today's Departures
                  </h4>
                  <p className="text-2xl font-bold text-orange-600">1</p>
                  <p className="text-sm text-gray-600">Guests checking out</p>
                </div>

                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Pending Confirmations
                  </h4>
                  <p className="text-2xl font-bold text-yellow-600">1</p>
                  <p className="text-sm text-gray-600">Awaiting response</p>
                </div>
              </div>
            </div>
          )}

          {/* Guest Communication Tab */}
          {activeTab === "messages" && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold">Guest Communication</h3>
                  <p className="text-gray-600">
                    Manage conversations with your guests
                  </p>
                </div>

                <div className="divide-y divide-gray-200">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-6 ${
                        message.unread ? "bg-blue-50" : "bg-white"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                              <Users className="w-5 h-5 text-gray-500" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">
                                {message.guest}
                              </p>
                              <p className="text-sm text-gray-500">
                                {message.property}
                              </p>
                            </div>
                            {message.unread && (
                              <div className="ml-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                            )}
                          </div>
                          <p className="text-gray-700 mb-2">
                            {message.message}
                          </p>
                          <p className="text-sm text-gray-500">
                            {message.time}
                          </p>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center ml-4">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Reply
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Message Templates */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Quick Message Templates
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Welcome Message
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      "Welcome to our homestay! We're excited to host you. Here
                      are the directions and check-in details..."
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 text-sm">
                      Use Template
                    </button>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Pre-arrival Instructions
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      "Hi! Looking forward to your arrival tomorrow. Here's what
                      you need to know about check-in..."
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 text-sm">
                      Use Template
                    </button>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Local Recommendations
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      "Here are some amazing local experiences we recommend
                      during your stay in Jharkhand..."
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 text-sm">
                      Use Template
                    </button>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Check-out Instructions
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      "Thank you for staying with us! Here are the check-out
                      instructions and feedback request..."
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 text-sm">
                      Use Template
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Revenue Tracking Tab */}
          {activeTab === "revenue" && (
            <div className="space-y-6">
              {/* Revenue Summary */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <h4 className="font-medium text-gray-900 mb-2">This Month</h4>
                  <p className="text-2xl font-bold text-green-600">₹39,600</p>
                  <p className="text-sm text-gray-600">+22% from last month</p>
                </div>

                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <h4 className="font-medium text-gray-900 mb-2">This Year</h4>
                  <p className="text-2xl font-bold text-blue-600">₹3,24,800</p>
                  <p className="text-sm text-gray-600">Average ₹27,067/month</p>
                </div>

                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Average Booking
                  </h4>
                  <p className="text-2xl font-bold text-purple-600">₹2,640</p>
                  <p className="text-sm text-gray-600">2.2 nights average</p>
                </div>

                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Occupancy Rate
                  </h4>
                  <p className="text-2xl font-bold text-orange-600">68%</p>
                  <p className="text-sm text-gray-600">
                    Above average for area
                  </p>
                </div>
              </div>

              {/* Property Revenue Breakdown */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Revenue by Property
                </h3>
                <div className="space-y-4">
                  {properties.map((property) => (
                    <div
                      key={property.id}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900">
                          {property.name}
                        </h4>
                        <span className="text-lg font-bold text-green-600">
                          ₹{property.revenue}
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Bookings</p>
                          <p className="font-medium">{property.bookings}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Avg. Rate</p>
                          <p className="font-medium">
                            ₹{property.pricePerNight}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Rating</p>
                          <p className="font-medium">{property.rating}/5</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Reviews</p>
                          <p className="font-medium">{property.reviews}</p>
                        </div>
                      </div>
                      <div className="mt-3 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{
                            width: `${(property.revenue / 25000) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Financial Insights */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold mb-4">Monthly Trends</h3>
                  <div className="space-y-3">
                    {[
                      {
                        month: "October",
                        revenue: 39600,
                        bookings: 30,
                        trend: "+22%",
                      },
                      {
                        month: "September",
                        revenue: 32400,
                        bookings: 24,
                        trend: "+15%",
                      },
                      {
                        month: "August",
                        revenue: 28200,
                        bookings: 21,
                        trend: "+8%",
                      },
                    ].map((data) => (
                      <div
                        key={data.month}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-gray-900">
                            {data.month}
                          </p>
                          <p className="text-sm text-gray-600">
                            {data.bookings} bookings
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">
                            ₹{data.revenue.toLocaleString()}
                          </p>
                          <p
                            className={`text-sm ${
                              data.trend.startsWith("+")
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {data.trend}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold mb-4">Revenue Tips</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <TrendingUp className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Optimize Pricing
                        </h4>
                        <p className="text-sm text-gray-600">
                          Adjust rates based on local events and seasons
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <Star className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Improve Ratings
                        </h4>
                        <p className="text-sm text-gray-600">
                          Higher ratings lead to better visibility and bookings
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <Coffee className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Add Experiences
                        </h4>
                        <p className="text-sm text-gray-600">
                          Offer cultural activities for premium pricing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomestayDashboard;
