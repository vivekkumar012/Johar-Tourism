import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Calendar, Users, DollarSign, TrendingUp, MapPin, Star, Share2, Eye, Ticket, Music, Megaphone } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/navbar/Navbar';

const EventDashboard = () => {
  const [activeTab, setActiveTab] = useState('promotion');
  const [newEvent, setNewEvent] = useState({ name: '', date: '', location: '', category: 'cultural' });

  // Mock data
  const events = [
    { id: 1, name: 'Raipur Cultural Festival', date: '2024-11-15', location: 'Marine Drive', ticketsSold: 2845, capacity: 5000, revenue: 568000, rating: 4.7 },
    { id: 2, name: 'Folk Dance Workshop', date: '2024-11-20', location: 'Cultural Center', ticketsSold: 156, capacity: 200, revenue: 31200, rating: 4.9 },
    { id: 3, name: 'Traditional Music Concert', date: '2024-11-25', location: 'Amphitheater', ticketsSold: 892, capacity: 1500, revenue: 223000, rating: 4.5 }
  ];

  const promotionData = [
    { platform: 'Facebook', reach: 125000, engagement: 8500, cost: 15000 },
    { platform: 'Instagram', reach: 89000, engagement: 12000, cost: 12000 },
    { platform: 'Google Ads', reach: 65000, engagement: 4500, cost: 20000 }
  ];

  const salesData = [
    { week: 'Week 1', sales: 245 }, { week: 'Week 2', sales: 380 }, { week: 'Week 3', sales: 520 },
    { week: 'Week 4', sales: 750 }, { week: 'Week 5', sales: 890 }, { week: 'Week 6', sales: 1200 }
  ];

  const audienceData = [
    { name: 'Tourists', value: 62 }, { name: 'Locals', value: 38 }
  ];

  const culturalCategories = [
    { name: 'Traditional Music', events: 8, attendance: 5200 },
    { name: 'Folk Dance', events: 6, attendance: 3800 },
    { name: 'Art Exhibitions', events: 12, attendance: 7500 }
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  const MetricCard = ({ icon: Icon, title, value, color }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center">
        <div className={`p-3 rounded-lg ${color} mr-4`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  );

  const EventCard = ({ event }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-gray-900">{event.name}</h3>
        <div className="flex items-center text-yellow-500">
          <Star className="h-4 w-4 fill-current mr-1" />
          <span className="text-sm">{event.rating}</span>
        </div>
      </div>
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-2" />
          {new Date(event.date).toLocaleDateString()}
        </div>
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-2" />
          {event.location}
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <span className="font-medium">{event.ticketsSold}/{event.capacity}</span>
          <span className="font-semibold text-green-600">₹{(event.revenue/1000).toFixed(0)}k</span>
        </div>
      </div>
    </div>
  );

  const renderPromotion = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard icon={Eye} title="Total Reach" value="324K" color="bg-blue-600" />
        <MetricCard icon={Share2} title="Engagement" value="8.7%" color="bg-green-600" />
        <MetricCard icon={DollarSign} title="Ad Spend" value="₹55K" color="bg-purple-600" />
        <MetricCard icon={TrendingUp} title="ROI" value="240%" color="bg-orange-600" />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Platform Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={promotionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="platform" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="reach" fill="#3B82F6" name="Reach" />
            <Bar dataKey="engagement" fill="#10B981" name="Engagement" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Create Campaign</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select className="border border-gray-300 rounded-md px-3 py-2">
            <option>Select Event to Promote</option>
            {events.map(event => (
              <option key={event.id}>{event.name}</option>
            ))}
          </select>
          <input type="number" placeholder="Budget (₹)" className="border border-gray-300 rounded-md px-3 py-2" />
          <div className="md:col-span-2">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
              <Megaphone className="inline h-4 w-4 mr-2" />
              Launch Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSales = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard icon={Ticket} title="Tickets Sold" value="3,893" color="bg-blue-600" />
        <MetricCard icon={DollarSign} title="Revenue" value="₹8.2L" color="bg-green-600" />
        <MetricCard icon={Users} title="Occupancy" value="68%" color="bg-purple-600" />
        <MetricCard icon={TrendingUp} title="Growth" value="+15%" color="bg-orange-600" />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Sales Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#3B82F6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Event Performance</h3>
        <div className="space-y-4">
          {events.map(event => (
            <div key={event.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium">{event.name}</h4>
                <p className="text-sm text-gray-600">{event.ticketsSold}/{event.capacity} sold</p>
              </div>
              <div className="text-right">
                <div className="font-semibold text-green-600">₹{(event.revenue/1000).toFixed(0)}k</div>
                <div className="text-sm text-gray-600">{Math.round((event.ticketsSold/event.capacity)*100)}% full</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard icon={Users} title="Total Attendees" value="26.6K" color="bg-blue-600" />
        <MetricCard icon={MapPin} title="Int'l Visitors" value="62%" color="bg-green-600" />
        <MetricCard icon={Star} title="Satisfaction" value="4.7" color="bg-yellow-500" />
        <MetricCard icon={Share2} title="Social Shares" value="1.8K" color="bg-pink-600" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Audience Split</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={audienceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                dataKey="value"
              >
                {audienceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Key Insights</h3>
          <div className="space-y-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="font-medium text-blue-900">Peak Booking Time</div>
              <div className="text-sm text-blue-800">67% book 2+ weeks in advance</div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="font-medium text-green-900">Group Bookings</div>
              <div className="text-sm text-green-800">45% of tickets sold in groups</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="font-medium text-purple-900">Return Visitors</div>
              <div className="text-sm text-purple-800">34% attend multiple events</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCultural = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {culturalCategories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{category.name}</h3>
              <Music className="h-5 w-5 text-purple-600" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Events</span>
                <span className="font-medium">{category.events}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Attendance</span>
                <span className="font-medium">{category.attendance.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Featured Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Create New Event</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Event Name"
            value={newEvent.name}
            onChange={(e) => setNewEvent({...newEvent, name: e.target.value})}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          <input 
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          <input 
            type="text" 
            placeholder="Location"
            value={newEvent.location}
            onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          <select 
            value={newEvent.category}
            onChange={(e) => setNewEvent({...newEvent, category: e.target.value})}
            className="border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="cultural">Cultural Festival</option>
            <option value="workshop">Workshop</option>
            <option value="concert">Concert</option>
            <option value="exhibition">Art Exhibition</option>
          </select>
          <div className="md:col-span-2">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
              <Calendar className="inline h-4 w-4 mr-2" />
              Create Event
            </button>
          </div>
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
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Cultural Events Dashboard</h1>
              <p className="text-sm text-gray-600">Promote cultural events, festivals, and activities to engage tourists</p>
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
              Export Report
            </button>
          </div>

          {/* Navigation */}
          <div className="flex space-x-1">
            {[
              { id: 'promotion', label: 'Event Promotion', icon: Megaphone },
              { id: 'sales', label: 'Ticket Sales', icon: Ticket },
              { id: 'analytics', label: 'Audience Analytics', icon: Users },
              { id: 'cultural', label: 'Cultural Showcasing', icon: Music }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'promotion' && renderPromotion()}
        {activeTab === 'sales' && renderSales()}
        {activeTab === 'analytics' && renderAnalytics()}
        {activeTab === 'cultural' && renderCultural()}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default EventDashboard;