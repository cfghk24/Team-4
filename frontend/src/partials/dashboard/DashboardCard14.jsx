import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';
import HongKongMap from '../../components/HongKongMap';
// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard06() {

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Number of pet owners by location</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <HongKongMap />
    </div>
  );
}

export default DashboardCard06;
