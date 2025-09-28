import React, { useState } from "react";
import {
  User,
  Star,
  Calendar,
  MapPin,
  Camera,
  Award,
  Users,
  Clock,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Edit3,
  Upload,
  MessageSquare,
  TrendingUp,
  Shield,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";

const GuideDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [profileData, setProfileData] = useState({
    name: "Rajesh Kumar",
    rating: 4.8,
    totalReviews: 127,
    toursCompleted: 89,
    languages: ["Hindi", "English", "Bengali"],
    specialties: ["Wildlife", "Culture", "Adventure"],
    verified: true,
    blockchainId: "0x7f9c...8a2b",
    experience: "5+ years",
  });

  const [bookingRequests] = useState([
    {
      id: 1,
      tourist: "John Doe",
      tour: "Ranchi Heritage Tour",
      date: "2024-10-15",
      status: "pending",
      amount: "₹2,500",
    },
    {
      id: 2,
      tourist: "Priya Sharma",
      tour: "Netarhat Trek",
      date: "2024-10-18",
      status: "confirmed",
      amount: "₹3,200",
    },
    {
      id: 3,
      tourist: "Mike Johnson",
      tour: "Tribal Village Experience",
      date: "2024-10-20",
      status: "pending",
      amount: "₹4,000",
    },
  ]);

  const [reviews] = useState([
    {
      id: 1,
      tourist: "Sarah Wilson",
      rating: 5,
      comment: "Amazing guide! Very knowledgeable about local culture.",
      date: "2024-09-28",
    },
    {
      id: 2,
      tourist: "Amit Patel",
      rating: 4,
      comment: "Great experience, would recommend to others.",
      date: "2024-09-25",
    },
    {
      id: 3,
      tourist: "Lisa Chen",
      rating: 5,
      comment: "Perfect guide for wildlife photography!",
      date: "2024-09-22",
    },
  ]);

  const handleBookingAction = (id, action) => {
    console.log(`${action} booking ${id}`);
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
                    Local Guide Dashboard
                  </h1>
                  <p className="mt-1 text-sm md:text-base text-gray-600">
                    Get verified, showcase expertise, and connect with tourists
                    for authentic experiences
                  </p>
                </div>

                {/* Verification Badge */}
                <div className="mt-4 sm:mt-0 flex items-center">
                  <div className="flex items-center bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm">
                    <Shield className="w-4 h-4 mr-2" />
                    <span className="font-medium">Blockchain Verified</span>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs - Responsive */}
              <div className="mt-6">
                <div className="flex flex-wrap gap-2 overflow-x-auto">
                  <TabButton id="overview" label="Overview" icon={TrendingUp} />
                  <TabButton id="profile" label="Profile" icon={User} />
                  <TabButton id="bookings" label="Bookings" icon={Calendar} />
                  <TabButton id="reviews" label="Reviews" icon={Star} />
                  <TabButton
                    id="certification"
                    label="Certification"
                    icon={Award}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats Cards - Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {profileData.rating}
                  </h3>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </div>

                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {profileData.toursCompleted}
                  </h3>
                  <p className="text-sm text-gray-600">Tours Completed</p>
                </div>

                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-3">
                    <MessageSquare className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {profileData.totalReviews}
                  </h3>
                  <p className="text-sm text-gray-600">Total Reviews</p>
                </div>

                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-3">
                    <DollarSign className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">₹45,280</h3>
                  <p className="text-sm text-gray-600">Monthly Earnings</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Recent Booking Requests
                  </h3>
                  <div className="space-y-3">
                    {bookingRequests.slice(0, 3).map((booking) => (
                      <div
                        key={booking.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">
                            {booking.tourist}
                          </p>
                          <p className="text-sm text-gray-600">
                            {booking.tour}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">
                            {booking.amount}
                          </p>
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                              booking.status === "confirmed"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {booking.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold mb-4">Latest Reviews</h3>
                  <div className="space-y-3">
                    {reviews.slice(0, 3).map((review) => (
                      <div
                        key={review.id}
                        className="p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium text-gray-900">
                            {review.tourist}
                          </p>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Profile Management Tab */}
          {activeTab === "profile" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Info */}
                <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">
                      Profile Information
                    </h3>
                    <button className="flex items-center text-blue-600 hover:text-blue-700">
                      <Edit3 className="w-4 h-4 mr-1" />
                      Edit
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={profileData.name}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Experience
                      </label>
                      <input
                        type="text"
                        value={profileData.experience}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Languages
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {profileData.languages.map((lang) => (
                          <span
                            key={lang}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Specialties
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {profileData.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell tourists about your expertise and what makes your tours special..."
                    />
                  </div>
                </div>

                {/* Profile Picture & Quick Stats */}
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Profile Picture
                    </h3>
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <User className="w-16 h-16 text-gray-400" />
                      </div>
                      <button className="flex items-center justify-center w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Photo
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Response Rate</span>
                        <span className="font-medium">98%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Response Time</span>
                        <span className="font-medium">&lt; 1 hour</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Member Since</span>
                        <span className="font-medium">2019</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Booking System Tab */}
          {activeTab === "bookings" && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold">Booking Requests</h3>
                  <p className="text-gray-600">
                    Manage your tour bookings and schedule
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Tourist
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Tour
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Date
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
                      {bookingRequests.map((booking) => (
                        <tr key={booking.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                                <User className="w-4 h-4 text-gray-500" />
                              </div>
                              <span className="font-medium text-gray-900">
                                {booking.tourist}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-gray-900">
                            {booking.tour}
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {booking.date}
                          </td>
                          <td className="px-6 py-4 font-medium text-gray-900">
                            {booking.amount}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                                booking.status === "confirmed"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {booking.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex space-x-2">
                              {booking.status === "pending" ? (
                                <>
                                  <button
                                    onClick={() =>
                                      handleBookingAction(booking.id, "accept")
                                    }
                                    className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                                  >
                                    Accept
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleBookingAction(booking.id, "decline")
                                    }
                                    className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                                  >
                                    Decline
                                  </button>
                                </>
                              ) : (
                                <button className="text-blue-600 hover:text-blue-700 text-sm">
                                  View Details
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Rating & Reviews Tab */}
          {activeTab === "reviews" && (
            <div className="space-y-6">
              {/* Rating Summary */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {profileData.rating}
                    </div>
                    <div className="flex items-center justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-6 h-6 ${
                            i < Math.floor(profileData.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">
                      {profileData.totalReviews} total reviews
                    </p>
                  </div>

                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div key={star} className="flex items-center">
                        <span className="text-sm text-gray-600 w-3">
                          {star}
                        </span>
                        <Star className="w-4 h-4 text-yellow-400 fill-current mx-2" />
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{
                              width: `${
                                star === 5
                                  ? 70
                                  : star === 4
                                  ? 20
                                  : star === 3
                                  ? 7
                                  : star === 2
                                  ? 2
                                  : 1
                              }%`,
                            }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 ml-2 w-8">
                          {star === 5
                            ? 89
                            : star === 4
                            ? 25
                            : star === 3
                            ? 9
                            : star === 2
                            ? 3
                            : 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reviews List */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold">Customer Reviews</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {reviews.map((review) => (
                    <div key={review.id} className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                              <User className="w-5 h-5 text-gray-500" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">
                                {review.tourist}
                              </p>
                              <p className="text-sm text-gray-500">
                                {review.date}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Digital Certification Tab */}
          {activeTab === "certification" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Blockchain Verification */}
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold">
                      Blockchain Verification
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <span className="font-medium text-green-800">
                          Identity Verified
                        </span>
                      </div>
                      <span className="text-sm text-green-600">✓</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <span className="font-medium text-green-800">
                          License Verified
                        </span>
                      </div>
                      <span className="text-sm text-green-600">✓</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <span className="font-medium text-green-800">
                          Background Check
                        </span>
                      </div>
                      <span className="text-sm text-green-600">✓</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Blockchain ID
                    </h4>
                    <p className="text-sm text-gray-600 font-mono">
                      {profileData.blockchainId}
                    </p>
                  </div>
                </div>

                {/* Certifications & Awards */}
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold">
                      Certifications & Awards
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <Award className="w-8 h-8 text-yellow-500 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Tourism Excellence Award
                        </h4>
                        <p className="text-sm text-gray-600">
                          Jharkhand Tourism Board - 2023
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <Award className="w-8 h-8 text-blue-500 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Certified Wildlife Guide
                        </h4>
                        <p className="text-sm text-gray-600">
                          Forest Department - 2022
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <Award className="w-8 h-8 text-green-500 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900">
                          First Aid Certified
                        </h4>
                        <p className="text-sm text-gray-600">
                          Red Cross - 2023
                        </p>
                      </div>
                    </div>

                    <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload New Certificate
                    </button>
                  </div>
                </div>
              </div>

              {/* Verification Process */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Verification Process
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Upload className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Submit Documents
                    </h4>
                    <p className="text-sm text-gray-600">
                      Upload ID, licenses, and certifications
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Verification
                    </h4>
                    <p className="text-sm text-gray-600">
                      Our team reviews and verifies documents
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Blockchain Record
                    </h4>
                    <p className="text-sm text-gray-600">
                      Verified status recorded on blockchain
                    </p>
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

export default GuideDashboard;
