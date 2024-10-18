import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import Sidebar from '../partials/Sidebar'; 
import Header from '../partials/Header';   
import FilterButton from '../components/DropdownFilter'; 
import Datepicker from '../components/Datepicker'; 
import Banner from '../partials/Banner'; 
import { tailwindConfig } from '../utils/Utils';

function EngagementConversion() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Mock data for the charts
  const trafficData = [
    { name: 'Week 1', Website: 4000, Instagram: 2400, QRScans: 2400 },
    { name: 'Week 2', Website: 3000, Instagram: 1398, QRScans: 2210 },
    { name: 'Week 3', Website: 2000, Instagram: 9800, QRScans: 2290 },
    { name: 'Week 4', Website: 2780, Instagram: 3908, QRScans: 2000 },
  ];

  const eventSuccessData = [
    { name: 'Event A', successRate: 85 },
    { name: 'Event B', successRate: 65 },
    { name: 'Event C', successRate: 95 },
    { name: 'Event D', successRate: 75 },
  ];

  const pieData = [
    { name: 'Converted', value: 400 },
    { name: 'Engaged', value: 300 },
    { name: 'Visitors', value: 300 },
  ];

  const demographicData = [
    { name: '16-30', value: 16 },
    { name: '31-40', value: 23 },
    { name: '41-50', value: 24 },
    { name: '51-60', value: 21 },
    { name: '61 and above', value: 16 },
  ];

  const COLORS = [
    tailwindConfig().theme.colors.violet[500],
    tailwindConfig().theme.colors.sky[500],
    tailwindConfig().theme.colors.violet[800],
  ];

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Engagement Conversion</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton align="right" />
                {/* Datepicker */}
                <Datepicker align="right" />

                {/* Dropdown Import Button */}
                <div className="relative">
                  <button 
                    id="dropdownDefaultButton" 
                    onClick={toggleDropdown}
                    className="text-white bg-violet-500 hover:bg-violet-600 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-900"
                    type="button"
                  >
                    Import Data
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>

                  {/* Dropdown menu */}
                  {dropdownOpen && (
                    <div id="dropdown" className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Instagram Analytics</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">YouTube Analytics</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Facebook Analytics</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Add view button */}
                <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                  <svg className="fill-current shrink-0 xs:hidden" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="max-xs:sr-only">Add View</span>
                </button>                
              </div>
            </div>

            {/* Overview Section */}
            <div className="grid grid-cols-12 gap-6">
              {/* Traffic & Engagement Overview */}
              <div className="col-span-12 lg:col-span-6 bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Traffic & Engagement Overview</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trafficData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Website" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Instagram" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="QRScans" stroke="#ffc658" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Engagement to Conversion Pie Chart */}
              <div className="col-span-12 lg:col-span-6 bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Engagement to Conversion</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Demographics Section */}
            <div className="grid grid-cols-12 gap-6 mt-8">
              <div className="col-span-12 bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Demographic Breakdown of SPCA Members</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={demographicData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label
                    >
                      {demographicData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recommendations Section */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Recommendations</h2>
              <div className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg">
                <ul className="list-disc ml-6 text-gray-800 dark:text-gray-100">
                  <li>Organize more targeted events based on user engagement patterns.</li>
                  <li>Leverage Instagram stories to directly engage with users who scan QR codes at meetups.</li>
                  <li>Analyze website traffic to create personalized product recommendations.</li>
                  <li>Offer exclusive discounts to users who engage with multiple platforms (e.g., Instagram and YouTube).</li>
                </ul>
              </div>
            </div>

            {/* Event Analytics Section */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Event Success Rates</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={eventSuccessData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="successRate" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}

export default EngagementConversion;