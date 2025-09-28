import React, { useState } from "react";
import {
  Plus,
  Camera,
  DollarSign,
  ShoppingBag,
  Heart,
  Star,
  Edit3,
  Eye,
  TrendingUp,
  Users,
  BookOpen,
  Package,
  Upload,
  MapPin,
  Award,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

const ArtisanDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    culturalStory: "",
    materials: "",
    timeToMake: "",
  });

  const [products] = useState([
    {
      id: 1,
      name: "Handwoven Santhali Gamcha",
      price: 450,
      category: "Textiles",
      image: "https://imgs.search.brave.com/p9rm0Ojw9xOoaiKx-LzAqVXZ2ri_SEwfB_ILVhAI5-8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/aW5kaWFoYW5kbWFk/ZS5jb20vY2F0YWxv/Zy9wcm9kdWN0L2Nh/Y2hlLzQ5MzYyOTBi/Zjc2ODJkNWE0MTg3/ZGYwZjI3YWY1OThm/L2Evcy9hc3M4Nzkz/NzgucG5n",
      views: 234,
      likes: 45,
      sales: 12,
      status: "active",
      culturalStory:
        "Traditional gamcha used in Santhali festivals and daily rituals.",
      materials: "Pure cotton, natural dyes",
      timeToMake: "5 days",
    },
    {
      id: 2,
      name: "Dokra Metal Elephant",
      price: 1200,
      category: "Metal Craft",
      image: "/api/placeholder/300/300",
      views: 187,
      likes: 38,
      sales: 8,
      status: "active",
      culturalStory:
        "Ancient lost-wax casting technique passed down through generations.",
      materials: "Bronze, beeswax",
      timeToMake: "10 days",
    },
    {
      id: 3,
      name: "Tribal Jewelry Set",
      price: 800,
      category: "Jewelry",
      image: "/api/placeholder/300/300",
      views: 156,
      likes: 29,
      sales: 15,
      status: "sold",
      culturalStory:
        "Traditional ornaments worn by tribal women during celebrations.",
      materials: "Silver, beads, shells",
      timeToMake: "7 days",
    },
  ]);

  const [orders] = useState([
    {
      id: 1,
      product: "Handwoven Santhali Gamcha",
      customer: "Sarah Johnson",
      amount: 450,
      status: "pending",
      date: "2024-10-15",
    },
    {
      id: 2,
      product: "Dokra Metal Elephant",
      customer: "Michael Chen",
      amount: 1200,
      status: "shipped",
      date: "2024-10-14",
    },
    {
      id: 3,
      product: "Tribal Jewelry Set",
      customer: "Priya Patel",
      amount: 800,
      status: "delivered",
      date: "2024-10-12",
    },
  ]);

  const categories = [
    "Textiles",
    "Metal Craft",
    "Jewelry",
    "Pottery",
    "Wood Craft",
    "Bamboo Craft",
  ];

  const handleInputChange = (field, value) => {
    setNewProduct((prev) => ({ ...prev, [field]: value }));
  };

  const handleProductUpload = () => {
    if (!newProduct.name || !newProduct.price) {
      alert("Please fill in all required fields!");
      return;
    }
    console.log("Uploading product:", newProduct);
    setNewProduct({
      name: "",
      price: "",
      category: "",
      description: "",
      culturalStory: "",
      materials: "",
      timeToMake: "",
    });
    alert("Product uploaded successfully!");
  };

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
        activeTab === id
          ? "bg-green-600 text-white"
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
                    Tribal Artisan Dashboard
                  </h1>
                  <p className="mt-1 text-sm md:text-base text-gray-600">
                    Showcase and sell traditional handicrafts to tourists
                    through our marketplace
                  </p>
                </div>

                {/* Artisan Badge */}
                <div className="mt-4 sm:mt-0 flex items-center">
                  <div className="flex items-center bg-orange-100 text-orange-800 px-3 py-2 rounded-full text-sm">
                    <Award className="w-4 h-4 mr-2" />
                    <span className="font-medium">Certified Artisan</span>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="mt-6">
                <div className="flex flex-wrap gap-2 overflow-x-auto">
                  <TabButton id="overview" label="Overview" icon={TrendingUp} />
                  <TabButton id="products" label="Products" icon={Package} />
                  <TabButton id="add-product" label="Add Product" icon={Plus} />
                  <TabButton id="orders" label="Orders" icon={ShoppingBag} />
                  <TabButton
                    id="stories"
                    label="Cultural Stories"
                    icon={BookOpen}
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
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3">
                    <Package className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {products.length}
                  </h3>
                  <p className="text-sm text-gray-600">Total Products</p>
                </div>

                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
                    <ShoppingBag className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">35</h3>
                  <p className="text-sm text-gray-600">Total Sales</p>
                </div>

                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-3">
                    <DollarSign className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">₹28,450</h3>
                  <p className="text-sm text-gray-600">Monthly Revenue</p>
                </div>

                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-3">
                    <Eye className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">577</h3>
                  <p className="text-sm text-gray-600">Product Views</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
                  <div className="space-y-3">
                    {orders.slice(0, 3).map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">
                            {order.customer}
                          </p>
                          <p className="text-sm text-gray-600">
                            {order.product}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">
                            ₹{order.amount}
                          </p>
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                              order.status === "delivered"
                                ? "bg-green-100 text-green-800"
                                : order.status === "shipped"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Top Performing Products
                  </h3>
                  <div className="space-y-3">
                    {products.slice(0, 3).map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="w-12 h-12 bg-gray-200 rounded-lg mr-3 flex items-center justify-center">
                          <Package className="w-6 h-6 text-gray-500" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">
                            {product.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {product.views} views • {product.sales} sales
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">
                            ₹{product.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fair Pricing Guide */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                  Fair Pricing Guidelines
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">
                      Material Cost
                    </h4>
                    <p className="text-sm text-gray-600">
                      Calculate raw material expenses
                    </p>
                    <p className="text-lg font-bold text-green-600 mt-2">
                      30-40%
                    </p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">
                      Labor Value
                    </h4>
                    <p className="text-sm text-gray-600">
                      Fair compensation for time & skill
                    </p>
                    <p className="text-lg font-bold text-blue-600 mt-2">
                      40-50%
                    </p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">
                      Profit Margin
                    </h4>
                    <p className="text-sm text-gray-600">
                      Sustainable business growth
                    </p>
                    <p className="text-lg font-bold text-purple-600 mt-2">
                      20-30%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product Showcase Tab */}
          {activeTab === "products" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">My Products</h3>
                <button
                  onClick={() => setActiveTab("add-product")}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Product
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="relative">
                      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                        <Camera className="w-12 h-12 text-gray-400" />
                      </div>
                      <div className="absolute top-2 right-2">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            product.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {product.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {product.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {product.category}
                      </p>
                      <p className="text-lg font-bold text-green-600 mb-3">
                        ₹{product.price}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {product.views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {product.likes}
                        </div>
                        <div className="flex items-center">
                          <ShoppingBag className="w-4 h-4 mr-1" />
                          {product.sales}
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <p className="text-xs text-gray-600">
                          <Clock className="w-3 h-3 inline mr-1" />
                          Time to make: {product.timeToMake}
                        </p>
                        <p className="text-xs text-gray-600">
                          <Package className="w-3 h-3 inline mr-1" />
                          Materials: {product.materials}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700">
                          <Edit3 className="w-4 h-4 inline mr-1" />
                          Edit
                        </button>
                        <button className="flex-1 bg-gray-600 text-white px-3 py-2 rounded text-sm hover:bg-gray-700">
                          View Story
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add Product Tab */}
          {activeTab === "add-product" && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-6">
                  Add New Product to Marketplace
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Product Details */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product Name *
                      </label>
                      <input
                        type="text"
                        value={newProduct.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="e.g., Handwoven Santhali Gamcha"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Price (₹) *
                        </label>
                        <input
                          type="number"
                          value={newProduct.price}
                          onChange={(e) =>
                            handleInputChange("price", e.target.value)
                          }
                          placeholder="450"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Category *
                        </label>
                        <select
                          value={newProduct.category}
                          onChange={(e) =>
                            handleInputChange("category", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                        >
                          <option value="">Select Category</option>
                          {categories.map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Materials Used
                        </label>
                        <input
                          type="text"
                          value={newProduct.materials}
                          onChange={(e) =>
                            handleInputChange("materials", e.target.value)
                          }
                          placeholder="Pure cotton, natural dyes"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Time to Make
                        </label>
                        <input
                          type="text"
                          value={newProduct.timeToMake}
                          onChange={(e) =>
                            handleInputChange("timeToMake", e.target.value)
                          }
                          placeholder="5 days"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product Description
                      </label>
                      <textarea
                        rows={4}
                        value={newProduct.description}
                        onChange={(e) =>
                          handleInputChange("description", e.target.value)
                        }
                        placeholder="Describe your product, its features, and what makes it special..."
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cultural Story & Heritage
                      </label>
                      <textarea
                        rows={4}
                        value={newProduct.culturalStory}
                        onChange={(e) =>
                          handleInputChange("culturalStory", e.target.value)
                        }
                        placeholder="Share the cultural significance, traditional techniques, or family history behind this craft..."
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  {/* Image Upload & Preview */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product Images
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">
                          Upload product images
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

                    {/* Pricing Helper */}
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-medium text-green-800 mb-3">
                        Fair Pricing Calculator
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Material Cost (35%):
                          </span>
                          <span className="font-medium">
                            ₹
                            {newProduct.price
                              ? Math.round(newProduct.price * 0.35)
                              : 0}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Labor Value (45%):
                          </span>
                          <span className="font-medium">
                            ₹
                            {newProduct.price
                              ? Math.round(newProduct.price * 0.45)
                              : 0}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Profit Margin (20%):
                          </span>
                          <span className="font-medium">
                            ₹
                            {newProduct.price
                              ? Math.round(newProduct.price * 0.2)
                              : 0}
                          </span>
                        </div>
                        <div className="border-t pt-2 flex justify-between font-medium">
                          <span>Total Price:</span>
                          <span>₹{newProduct.price || 0}</span>
                        </div>
                      </div>
                    </div>

                    {/* Cultural Heritage Guidelines */}
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h4 className="font-medium text-orange-800 mb-3">
                        Cultural Story Tips
                      </h4>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li>• Share the traditional technique used</li>
                        <li>• Mention cultural significance or occasions</li>
                        <li>• Include family heritage or tribal history</li>
                        <li>• Describe symbolic meanings or patterns</li>
                        <li>• Tell about learning the craft</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-4 mt-8">
                  <button
                    onClick={() => setActiveTab("products")}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleProductUpload}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 flex items-center"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Product
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Direct Sales/Orders Tab */}
          {activeTab === "orders" && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold">Order Management</h3>
                  <p className="text-gray-600">
                    Track and manage your direct sales
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Order ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Customer
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Product
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {orders.map((order) => (
                        <tr key={order.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-mono text-sm">
                            #{order.id.toString().padStart(4, "0")}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                                <Users className="w-4 h-4 text-gray-500" />
                              </div>
                              <span className="font-medium text-gray-900">
                                {order.customer}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-gray-900">
                            {order.product}
                          </td>
                          <td className="px-6 py-4 font-medium text-gray-900">
                            ₹{order.amount}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                                order.status === "delivered"
                                  ? "bg-green-100 text-green-800"
                                  : order.status === "shipped"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {order.date}
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-blue-600 hover:text-blue-700 text-sm">
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sales Analytics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <h4 className="font-medium text-gray-900 mb-2">This Month</h4>
                  <p className="text-2xl font-bold text-green-600">₹28,450</p>
                  <p className="text-sm text-gray-600">+15% from last month</p>
                </div>

                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Pending Orders
                  </h4>
                  <p className="text-2xl font-bold text-yellow-600">3</p>
                  <p className="text-sm text-gray-600">Awaiting processing</p>
                </div>

                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Avg. Order Value
                  </h4>
                  <p className="text-2xl font-bold text-blue-600">₹813</p>
                  <p className="text-sm text-gray-600">+8% from last month</p>
                </div>
              </div>
            </div>
          )}

          {/* Cultural Stories Tab */}
          {activeTab === "stories" && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Cultural Heritage Stories
                    </h3>
                    <p className="text-gray-600">
                      Share the rich traditions behind your crafts
                    </p>
                  </div>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Story
                  </button>
                </div>

                {/* Featured Cultural Stories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <BookOpen className="w-6 h-6 text-orange-600 mr-3" />
                      <h4 className="font-semibold text-gray-900">
                        The Art of Dokra Casting
                      </h4>
                    </div>
                    <p className="text-gray-700 text-sm mb-4">
                      "For over 4,000 years, our ancestors have practiced the
                      ancient lost-wax casting technique. Each piece tells a
                      story of our tribal identity, passed down through
                      generations of skilled artisans in our village near
                      Ranchi."
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Related to: Dokra Metal Elephant
                      </span>
                      <div className="flex items-center text-sm text-gray-600">
                        <Eye className="w-4 h-4 mr-1" />
                        234 views
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <BookOpen className="w-6 h-6 text-orange-600 mr-3" />
                      <h4 className="font-semibold text-gray-900">
                        Sacred Santhali Weaving
                      </h4>
                    </div>
                    <p className="text-gray-700 text-sm mb-4">
                      "Every thread in our gamcha has meaning. The red border
                      represents the sun, the white center symbolizes purity. My
                      grandmother taught me these patterns, as her grandmother
                      taught her. Each design carries our prayers and
                      blessings."
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Related to: Handwoven Santhali Gamcha
                      </span>
                      <div className="flex items-center text-sm text-gray-600">
                        <Eye className="w-4 h-4 mr-1" />
                        187 views
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <BookOpen className="w-6 h-6 text-orange-600 mr-3" />
                      <h4 className="font-semibold text-gray-900">
                        Tribal Jewelry Traditions
                      </h4>
                    </div>
                    <p className="text-gray-700 text-sm mb-4">
                      "These ornaments are worn during Sohrai festival, our
                      harvest celebration. Each bead placement has significance
                      - shells for prosperity, silver for the moon goddess. When
                      tourists wear our jewelry, they carry our blessings."
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Related to: Tribal Jewelry Set
                      </span>
                      <div className="flex items-center text-sm text-gray-600">
                        <Eye className="w-4 h-4 mr-1" />
                        156 views
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6 bg-orange-50">
                    <div className="flex items-center mb-4">
                      <Plus className="w-6 h-6 text-orange-600 mr-3" />
                      <h4 className="font-semibold text-orange-800">
                        Share Your Story
                      </h4>
                    </div>
                    <p className="text-orange-700 text-sm mb-4">
                      Help tourists understand the cultural significance and
                      traditional techniques behind your crafts. Stories
                      increase engagement and create deeper connections with
                      buyers.
                    </p>
                    <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
                      Write Cultural Story
                    </button>
                  </div>
                </div>

                {/* Story Writing Guidelines */}
                <div className="mt-8 bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    How to Write Compelling Cultural Stories
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">
                        What to Include:
                      </h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Historical background of the craft</li>
                        <li>• Family traditions and learning process</li>
                        <li>• Symbolic meanings and cultural significance</li>
                        <li>• Traditional materials and techniques</li>
                        <li>• Festival or ceremonial connections</li>
                        <li>• Personal memories and experiences</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">
                        Writing Tips:
                      </h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Use simple, engaging language</li>
                        <li>• Share personal anecdotes</li>
                        <li>• Explain cultural context for tourists</li>
                        <li>• Connect stories to specific products</li>
                        <li>• Include emotional connections</li>
                        <li>• Keep stories authentic and heartfelt</li>
                      </ul>
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

export default ArtisanDashboard;
