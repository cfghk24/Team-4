import React, { useState, useEffect } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import DashboardCard14 from '../partials/dashboard/DashboardCard14';
import Banner from '../partials/Banner';
import HongKongMap from '../components/HongKongMap';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Create the script element for the chatbot config
    const scriptConfig = document.createElement('script');
    scriptConfig.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "FelQPjmR_rkA4mC7vW49M",
        domain: "www.chatbase.co"
      };
    `;
    document.body.appendChild(scriptConfig);

    // Create the script element for loading the chatbot
    const scriptLoader = document.createElement('script');
    scriptLoader.src = "https://www.chatbase.co/embed.min.js";
    scriptLoader.setAttribute('chatbotId', 'FelQPjmR_rkA4mC7vW49M');
    scriptLoader.setAttribute('domain', 'www.chatbase.co');
    scriptLoader.defer = true;
    document.body.appendChild(scriptLoader);

    return () => {
      // Clean up the scripts when the component unmounts
      document.body.removeChild(scriptConfig);
      document.body.removeChild(scriptLoader);
    };
  }, []);

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
            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Dashboard</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                <FilterButton align="right" />
                <Datepicker align="right" />
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              <DashboardCard06 />
              <DashboardCard14 />
              <DashboardCard03 />
              <DashboardCard04 />
              <DashboardCard05 />
            </div>
          </div>
        </main>

        <Banner />
      </div>
    </div>
  );
}

export default Dashboard;