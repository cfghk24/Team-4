import React, { useState, useEffect } from 'react';
import Sidebar from '../partials/Sidebar'; // Reusing sidebar
import Header from '../partials/Header';   // Reusing header
import FilterButton from '../components/DropdownFilter'; // Reusing filter button
import Datepicker from '../components/Datepicker'; // Reusing datepicker
import Banner from '../partials/Banner'; // Reusing banner

function Event() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
  const [events, setEvents] = useState([]);

  // Dummy events data
  const dummyEvents = [
    { id: 1, name: 'Event 1', date: '2024-01-01', location: 'Location A' },
    { id: 2, name: 'Event 2', date: '2024-02-01', location: 'Location B' },
    { id: 3, name: 'Event 3', date: '2024-03-01', location: 'Location C' },
    { id: 4, name: 'Event 4', date: '2024-04-01', location: 'Location D' },
    { id: 5, name: 'Event 5', date: '2024-05-01', location: 'Location E' },
  ];

  useEffect(() => {
    setEvents(dummyEvents); // Load dummy events on component mount
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

            {/* Page actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Events</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton align="right" />
                {/* Datepicker */}
                <Datepicker align="right" />
              </div>

            </div>

            {/* Event List Grid */}
            <div className="bg-white dark:bg-gray-800 p-4 shadow-lg rounded-lg">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-left">
                    <th className="px-4 py-2">Event Name</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map(event => (
                    <tr key={event.id} className="border-t">
                      <td className="px-4 py-2">{event.name}</td>
                      <td className="px-4 py-2">{event.date}</td>
                      <td className="px-4 py-2">{event.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}

export default Event;
