import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown, Users, DollarSign, MapPin, Calendar, AlertTriangle, CheckCircle, Activity, FileText } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/navbar/Navbar';

const OfficialDashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('6months');
  const [activeTab, setActiveTab] = useState('analytics');

  // Mock data for various metrics
  const monthlyData = [
    { month: 'Jan', tourists: 1200, revenue: 320000, satisfaction: 4.2, avgStay: 3.5 },
    { month: 'Feb', tourists: 1450, revenue: 380000, satisfaction: 4.3, avgStay: 3.8 },
    { month: 'Mar', tourists: 1800, revenue: 485000, satisfaction: 4.1, avgStay: 4.1 },
    { month: 'Apr', tourists: 2100, revenue: 560000, satisfaction: 4.4, avgStay: 4.2 },
    { month: 'May', tourists: 2350, revenue: 640000, satisfaction: 4.2, avgStay: 4.0 },
    { month: 'Jun', tourists: 1950, revenue: 520000, satisfaction: 4.0, avgStay: 3.9 },
  ];

  const touristOrigins = [
    { country: 'India', visitors: 8500, percentage: 45 },
    { country: 'USA', visitors: 3200, percentage: 17 },
    { country: 'UK', visitors: 2800, percentage: 15 },
    { country: 'Germany', visitors: 2100, percentage: 11 },
    { country: 'Others', visitors: 2300, percentage: 12 },
  ];

  const attractionData = [
    { name: 'Historical Sites', visitors: 4200, growth: 12, revenue: 1200000 },
    { name: 'Natural Parks', visitors: 3800, growth: 8, revenue: 980000 },
    { name: 'Cultural Centers', visitors: 2950, growth: -3, revenue: 750000 },
    { name: 'Adventure Sports', visitors: 2100, growth: 25, revenue: 840000 },
    { name: 'Religious Sites', visitors: 1850, growth: 5, revenue: 420000 },
  ];

  const policyInsights = [
    {
      category: 'Infrastructure',
      priority: 'High',
      insight: 'Transportation connectivity needs improvement - 23% of tourists report accessibility issues',
      recommendation: 'Invest in improved road networks and public transport to key attractions',
      impact: 'Potential 15-20% increase in tourist satisfaction',
      status: 'Under Review'
    },
    {
      category: 'Marketing',
      priority: 'Medium',
      insight: 'Digital presence is driving 68% of new tourist acquisitions',
      recommendation: 'Expand social media marketing and virtual tour offerings',
      impact: 'Estimated 12% growth in international visitors',
      status: 'In Progress'
    },
    {
      category: 'Sustainability',
      priority: 'High',
      insight: 'Environmental impact concerns raised by 34% of visitors',
      recommendation: 'Implement eco-friendly tourism initiatives and certifications',
      impact: 'Long-term sustainability and premium positioning',
      status: 'Planning Phase'
    },
    {
      category: 'Services',
      priority: 'Medium',
      insight: 'Language barriers affect 28% of international visitors',
      recommendation: 'Multilingual signage and trained guide programs',
      impact: 'Improved visitor experience and extended stay duration',
      status: 'Approved'
    }
  ];

  const currentMetrics = useMemo(() => {
    const totalTourists = monthlyData.reduce((sum, month) => sum + month.tourists, 0);
    const totalRevenue = monthlyData.reduce((sum, month) => sum + month.revenue, 0);
    const avgSatisfaction = monthlyData.reduce((sum, month) => sum + month.satisfaction, 0) / monthlyData.length;
    const avgStayDuration = monthlyData.reduce((sum, month) => sum + month.avgStay, 0) / monthlyData.length;

    return {
      totalTourists,
      totalRevenue,
      avgSatisfaction: avgSatisfaction.toFixed(1),
      avgStayDuration: avgStayDuration.toFixed(1),
      monthlyGrowth: ((monthlyData[5].tourists - monthlyData[4].tourists) / monthlyData[4].tourists * 100).toFixed(1),
      revenueGrowth: ((monthlyData[5].revenue - monthlyData[4].revenue) / monthlyData[4].revenue * 100).toFixed(1)
    };
  }, [monthlyData]);

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  const MetricCard = ({ icon: Icon, title, value, change, changeType, color }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className={`flex items-center ${changeType === 'positive' ? 'text-green-600' : changeType === 'negative' ? 'text-red-600' : 'text-gray-600'}`}>
          {changeType === 'positive' && <TrendingUp className="h-4 w-4 mr-1" />}
          {changeType === 'negative' && <TrendingDown className="h-4 w-4 mr-1" />}
          <span className="text-sm font-medium">{change}</span>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        <p className="text-sm text-gray-600 mt-1">{title}</p>
      </div>
    </div>
  );

  const TabButton = ({ id, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-6 py-3 font-medium text-sm rounded-lg transition-all ${
        isActive
          ? 'bg-blue-600 text-white shadow-md'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
      }`}
    >
      {label}
    </button>
  );

  const renderAnalytics = () => (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          icon={Users}
          title="Total Tourists"
          value={currentMetrics.totalTourists.toLocaleString()}
          change={`${currentMetrics.monthlyGrowth}%`}
          changeType={currentMetrics.monthlyGrowth > 0 ? 'positive' : 'negative'}
          color="bg-blue-600"
        />
        <MetricCard
          icon={DollarSign}
          title="Revenue Generated"
          value={`₹${(currentMetrics.totalRevenue / 100000).toFixed(1)}L`}
          change={`${currentMetrics.revenueGrowth}%`}
          changeType={currentMetrics.revenueGrowth > 0 ? 'positive' : 'negative'}
          color="bg-green-600"
        />
        <MetricCard
          icon={Activity}
          title="Satisfaction Rating"
          value={`${currentMetrics.avgSatisfaction}/5`}
          change="↗ 0.2"
          changeType="positive"
          color="bg-purple-600"
        />
        <MetricCard
          icon={Calendar}
          title="Avg Stay Duration"
          value={`${currentMetrics.avgStayDuration} days`}
          change="↗ 0.3"
          changeType="positive"
          color="bg-orange-600"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Tourist Trends */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tourist Arrival Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="tourists" stroke="#3B82F6" strokeWidth={3} dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Trends */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" tickFormatter={(value) => `₹${(value/100000).toFixed(1)}L`} />
              <Tooltip 
                formatter={(value) => [`₹${(value/100000).toFixed(1)}L`, 'Revenue']}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tourist Origins */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tourist Origins</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={touristOrigins}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ country, percentage }) => `${country} (${percentage}%)`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="visitors"
              >
                {touristOrigins.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [value.toLocaleString(), 'Visitors']} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Attraction Performance */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Attraction Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={attractionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#6b7280" angle={-45} textAnchor="end" height={100} />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                formatter={(value, name) => [
                  name === 'visitors' ? value.toLocaleString() : `₹${(value/100000).toFixed(1)}L`,
                  name === 'visitors' ? 'Visitors' : 'Revenue'
                ]}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar dataKey="visitors" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderTrendAnalysis = () => (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Seasonal Trend Analysis</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Peak Season</h4>
            <p className="text-sm text-blue-800">April-May shows highest tourist influx with 25% growth in adventure tourism</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">Revenue Patterns</h4>
            <p className="text-sm text-green-800">Historical sites generate consistent revenue throughout the year</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-900 mb-2">Emerging Trends</h4>
            <p className="text-sm text-orange-800">Eco-tourism and sustainable travel preferences increasing by 18%</p>
          </div>
        </div>

        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis yAxisId="left" stroke="#6b7280" />
              <YAxis yAxisId="right" orientation="right" stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="tourists" stroke="#3B82F6" strokeWidth={2} name="Tourists" />
              <Line yAxisId="right" type="monotone" dataKey="satisfaction" stroke="#10B981" strokeWidth={2} name="Satisfaction Rating" />
              <Line yAxisId="left" type="monotone" dataKey="avgStay" stroke="#F59E0B" strokeWidth={2} name="Avg Stay (days)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderImpactAssessment = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Tourism Impact Assessment</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">₹28.5Cr</div>
            <div className="text-sm text-blue-800 font-medium">Economic Impact</div>
            <div className="text-xs text-blue-600 mt-1">Annual contribution to local economy</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-green-50 to-green-100 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">2,850</div>
            <div className="text-sm text-green-800 font-medium">Jobs Created</div>
            <div className="text-xs text-green-600 mt-1">Direct and indirect employment</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-purple-100 rounded-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
            <div className="text-sm text-purple-800 font-medium">Local Business Growth</div>
            <div className="text-xs text-purple-600 mt-1">Increase in local business revenue</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Environmental Impact</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <span className="text-sm">Carbon Footprint</span>
                <span className="text-red-600 font-semibold">12% increase</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="text-sm">Waste Management</span>
                <span className="text-green-600 font-semibold">8% improvement</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <span className="text-sm">Water Usage</span>
                <span className="text-yellow-600 font-semibold">5% increase</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Social Impact</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="text-sm">Cultural Preservation</span>
                <span className="text-green-600 font-semibold">Positive</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-sm">Infrastructure Development</span>
                <span className="text-blue-600 font-semibold">15% improvement</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <span className="text-sm">Community Engagement</span>
                <span className="text-purple-600 font-semibold">High</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPolicyInsights = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Policy Recommendations</h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Priority Filter:</span>
            <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
              <option>All Priorities</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {policyInsights.map((insight, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    insight.priority === 'High' ? 'bg-red-100 text-red-800' :
                    insight.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {insight.priority} Priority
                  </div>
                  <span className="text-sm font-medium text-gray-600">{insight.category}</span>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  insight.status === 'Approved' ? 'bg-green-100 text-green-800' :
                  insight.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  insight.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {insight.status}
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Key Insight</h4>
                  <p className="text-sm text-gray-600">{insight.insight}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Recommendation</h4>
                  <p className="text-sm text-gray-600">{insight.recommendation}</p>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div>
                    <span className="text-xs font-medium text-gray-500">Expected Impact: </span>
                    <span className="text-xs text-gray-700">{insight.impact}</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div>
        <Navbar />
        <br /> <br /> <br />
        <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Tourism Official Dashboard</h1>
              <p className="mt-1 text-sm text-gray-600">
                Monitor tourism trends, analyze data, and make informed policy decisions
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="1month">Last Month</option>
                <option value="3months">Last 3 Months</option>
                <option value="6months">Last 6 Months</option>
                <option value="1year">Last Year</option>
              </select>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                Export Report
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 border-t border-gray-200 pt-4 pb-2">
            <TabButton id="analytics" label="Analytics Dashboard" isActive={activeTab === 'analytics'} onClick={setActiveTab} />
            <TabButton id="trends" label="Trend Analysis" isActive={activeTab === 'trends'} onClick={setActiveTab} />
            <TabButton id="impact" label="Impact Assessment" isActive={activeTab === 'impact'} onClick={setActiveTab} />
            <TabButton id="policy" label="Policy Insights" isActive={activeTab === 'policy'} onClick={setActiveTab} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'analytics' && renderAnalytics()}
        {activeTab === 'trends' && renderTrendAnalysis()}
        {activeTab === 'impact' && renderImpactAssessment()}
        {activeTab === 'policy' && renderPolicyInsights()}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default OfficialDashboard;