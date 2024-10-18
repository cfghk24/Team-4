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
            <div className="grid grid-cols-12 gap-6">
              {/* Column Headers */}
              <div className="col-span-12 grid grid-cols-3 bg-gray-200 p-2 rounded font-bold">
                <div>Event Name</div>
                <div>Date</div>
                <div>Location</div>
              </div>

              {/* List of Events */}
              {events.map(event => (
                <div key={event.id} className="col-span-12 grid grid-cols-3 bg-white dark:bg-gray-800 p-2 rounded-lg shadow">
                  <div>{event.name}</div>
                  <div>{event.date}</div>
                  <div>{event.location}</div>
                </div>
              ))}
            </div>

          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}

export default Event;
