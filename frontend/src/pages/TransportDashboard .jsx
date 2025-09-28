import React, { useState } from "react";
import {
  Car,
  Truck,
  MapPin,
  CreditCard,
  Shield,
  Users,
  Clock,
  Navigation,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Phone,
  Route,
  Fuel,
  Calendar,
  TrendingUp,
  Plus,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";

const TransportDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const vehicles = [
    {
      id: 1,
      name: "Swift Dzire",
      type: "car",
      status: "available",
      location: "Ranchi",
      fuel: 85,
      earnings: 2400,
      trips: 12,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Innova Crysta",
      type: "suv",
      status: "booked",
      location: "Jamshedpur",
      fuel: 65,
      earnings: 3200,
      trips: 8,
      rating: 4.9,
    },
    {
      id: 3,
      name: "Tempo Traveller",
      type: "van",
      status: "maintenance",
      location: "Workshop",
      fuel: 45,
      earnings: 1800,
      trips: 4,
      rating: 4.7,
    },
  ];

  const trips = [
    {
      id: 1,
      route: "Ranchi → Netarhat",
      vehicle: "Swift Dzire",
      passenger: "John Doe",
      amount: 1200,
      status: "ongoing",
      eta: "2:30 PM",
    },
    {
      id: 2,
      route: "Jamshedpur → Deoghar",
      vehicle: "Innova Crysta",
      passenger: "Sarah Wilson",
      amount: 2800,
      status: "confirmed",
      eta: "4:00 PM",
    },
    {
      id: 3,
      route: "Ranchi → Betla",
      vehicle: "Tempo Traveller",
      passenger: "Mike Johnson",
      amount: 3500,
      status: "completed",
      eta: "Arrived",
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      available: "bg-green-100 text-green-800",
      booked: "bg-blue-100 text-blue-800",
      maintenance: "bg-red-100 text-red-800",
      ongoing: "bg-blue-100 text-blue-800",
      confirmed: "bg-yellow-100 text-yellow-800",
      completed: "bg-green-100 text-green-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Transport Provider Dashboard
                </h1>
                <p className="mt-1 text-sm md:text-base text-gray-600">
                  Offer reliable transport services with real-time tracking and
                  secure payments
                </p>
              </div>
              <div className="mt-4 sm:mt-0 flex items-center bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm">
                <Shield className="w-4 h-4 mr-2" />
                <span className="font-medium">Verified Driver</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 overflow-x-auto">
              <TabButton id="overview" label="Overview" icon={TrendingUp} />
              <TabButton id="fleet" label="Fleet" icon={Car} />
              <TabButton id="trips" label="Trips" icon={Route} />
              <TabButton id="payments" label="Payments" icon={CreditCard} />
              <TabButton id="safety" label="Safety" icon={Shield} />
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
                  <Car className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {vehicles.length}
                  </h3>
                  <p className="text-sm text-gray-600">Total Vehicles</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <Route className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-gray-900">24</h3>
                  <p className="text-sm text-gray-600">Total Trips</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-gray-900">₹7,400</h3>
                  <p className="text-sm text-gray-600">Today's Earnings</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-gray-900">4.8</h3>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </div>
              </div>

              {/* Active Trips */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Active Trips</h3>
                <div className="space-y-3">
                  {trips
                    .filter((trip) => trip.status === "ongoing")
                    .map((trip) => (
                      <div
                        key={trip.id}
                        className="flex items-center justify-between p-4 bg-blue-50 rounded-lg"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">
                            {trip.route}
                          </p>
                          <p className="text-sm text-gray-600">
                            {trip.vehicle} • {trip.passenger}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-blue-600">
                            ETA: {trip.eta}
                          </p>
                          <p className="text-sm text-gray-600">
                            ₹{trip.amount}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {/* Fleet Management Tab */}
          {activeTab === "fleet" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Fleet Management</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Vehicle
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="bg-white rounded-lg shadow p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {vehicle.type === "car" && (
                          <Car className="w-6 h-6 text-blue-600 mr-2" />
                        )}
                        {vehicle.type === "suv" && (
                          <Car className="w-6 h-6 text-green-600 mr-2" />
                        )}
                        {vehicle.type === "van" && (
                          <Truck className="w-6 h-6 text-purple-600 mr-2" />
                        )}
                        <h4 className="font-semibold text-gray-900">
                          {vehicle.name}
                        </h4>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          vehicle.status
                        )}`}
                      >
                        {vehicle.status}
                      </span>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          Location
                        </span>
                        <span className="font-medium">{vehicle.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 flex items-center">
                          <Fuel className="w-4 h-4 mr-1" />
                          Fuel
                        </span>
                        <span className="font-medium">{vehicle.fuel}%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Today's Earnings</span>
                        <span className="font-medium text-green-600">
                          ₹{vehicle.earnings}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Trips</span>
                        <span className="font-medium">{vehicle.trips}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex space-x-2">
                      <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700">
                        Track
                      </button>
                      <button className="flex-1 bg-gray-600 text-white px-3 py-2 rounded text-sm hover:bg-gray-700">
                        Maintain
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Route Optimization Tab */}
          {activeTab === "trips" && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold">
                    Trip Management & Route Optimization
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Route
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Vehicle
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Passenger
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          ETA
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {trips.map((trip) => (
                        <tr key={trip.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">
                            {trip.route}
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {trip.vehicle}
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {trip.passenger}
                          </td>
                          <td className="px-6 py-4 font-medium text-green-600">
                            ₹{trip.amount}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                                trip.status
                              )}`}
                            >
                              {trip.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {trip.eta}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Route Optimization Tips */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Route Optimization
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <Navigation className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium text-blue-800">
                          Smart Navigation
                        </p>
                        <p className="text-sm text-blue-600">
                          AI-powered route suggestions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <Clock className="w-5 h-5 text-green-600 mr-3" />
                      <div>
                        <p className="font-medium text-green-800">
                          Time Optimization
                        </p>
                        <p className="text-sm text-green-600">
                          Avoid traffic & save fuel
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <Fuel className="w-5 h-5 text-purple-600 mr-3" />
                      <div>
                        <p className="font-medium text-purple-800">
                          Fuel Efficiency
                        </p>
                        <p className="text-sm text-purple-600">
                          Optimize routes for economy
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                      <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                      <div>
                        <p className="font-medium text-orange-800">
                          Live Tracking
                        </p>
                        <p className="text-sm text-orange-600">
                          Real-time location updates
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Digital Payments Tab */}
          {activeTab === "payments" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <CreditCard className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-gray-900">₹28,450</h3>
                  <p className="text-sm text-gray-600">Total Earnings</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-gray-900">₹7,400</h3>
                  <p className="text-sm text-gray-600">Today's Collection</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-gray-900">₹3,200</h3>
                  <p className="text-sm text-gray-600">Pending Settlements</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <CreditCard className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="font-medium">UPI Payments</span>
                      </div>
                      <span className="text-green-600 font-medium">85%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <DollarSign className="w-5 h-5 text-green-600 mr-3" />
                        <span className="font-medium">Cash Payments</span>
                      </div>
                      <span className="text-blue-600 font-medium">15%</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-3">
                      Quick Settlement
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Automatic daily settlements to your bank account
                    </p>
                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      Setup Auto-Settlement
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Safety Features Tab */}
          {activeTab === "safety" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Shield className="w-5 h-5 text-green-600 mr-2" />
                    Safety Status
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-green-800">
                        Driver Verification
                      </span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-green-800">Vehicle Insurance</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-green-800">GPS Tracking</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <span className="text-yellow-800">Emergency Button</span>
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Emergency Contacts
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                      <Phone className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Police Helpline
                        </p>
                        <p className="text-sm text-gray-600">100</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                      <Phone className="w-5 h-5 text-red-600 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Medical Emergency
                        </p>
                        <p className="text-sm text-gray-600">108</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                      <Phone className="w-5 h-5 text-green-600 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Tourist Helpline
                        </p>
                        <p className="text-sm text-gray-600">1363</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Safety Guidelines
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">
                      Before Trip
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Vehicle safety check</li>
                      <li>• Verify passenger identity</li>
                      <li>• Share trip details</li>
                      <li>• Check weather conditions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">
                      During Trip
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Follow traffic rules</li>
                      <li>• Maintain safe speed</li>
                      <li>• Keep emergency contacts ready</li>
                      <li>• Update trip status regularly</li>
                    </ul>
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

export default TransportDashboard;
