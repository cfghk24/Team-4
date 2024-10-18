import React, { useState, useEffect } from 'react';
import Sidebar from '../partials/Sidebar'; // Reusing sidebar
import Header from '../partials/Header';   // Reusing header
import FilterButton from '../components/DropdownFilter'; // Reusing filter button
import Datepicker from '../components/Datepicker'; // Reusing datepicker
import Banner from '../partials/Banner'; // Reusing banner

function Event() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
  const [events, setEvents] = useState([]);
<<<<<<< HEAD
=======
  const [selectedEvents, setSelectedEvents] = useState([]); // Track selected events
  const navigate = useNavigate();
>>>>>>> 11ff10c6920b162eba2dde197ac658d3334b2d89

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

<<<<<<< HEAD
=======
  // Handle the selection of an individual event
  const handleSelectEvent = (id) => {
    if (selectedEvents.includes(id)) {
      setSelectedEvents(selectedEvents.filter((eventId) => eventId !== id)); // Deselect event
    } else {
      setSelectedEvents([...selectedEvents, id]); // Select event
    }
  };

  // Handle the select all checkbox
  const handleSelectAll = () => {
    if (selectedEvents.length === events.length) {
      setSelectedEvents([]); // Deselect all
    } else {
      setSelectedEvents(events.map((event) => event.id)); // Select all
    }
  };

  const handleCreateEventClick = () => {
    navigate('create'); // Navigate to /events/create when clicked
  };

  const handleEditClick = (id) => {
    navigate(`/events/edit/${id}`); // Navigate to edit page (assuming /events/edit/:id)
  };

>>>>>>> 11ff10c6920b162eba2dde197ac658d3334b2d89
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

            {/* Event List Table */}
            <div className="bg-white dark:bg-gray-800 p-4 shadow-lg rounded-lg">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-left">
                    <th className="px-4 py-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={selectedEvents.length === events.length}
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th className="px-4 py-2">Event Name</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Location</th>
                    <th className="px-4 py-2">Edit</th> {/* New Edit column */}
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                    <tr key={event.id} className="border-t hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td className="px-4 py-2">
                        <input
                          type="checkbox"
                          className="w-4 h-4"
                          checked={selectedEvents.includes(event.id)}
                          onChange={() => handleSelectEvent(event.id)}
                        />
                      </td>
                      <td className="px-4 py-2">{event.name}</td>
                      <td className="px-4 py-2">{event.date}</td>
                      <td className="px-4 py-2">{event.location}</td>
                      <td className="px-4 py-2">
                        <button
                          className="text-blue-600 hover:underline"
                          onClick={() => handleEditClick(event.id)}
                        >
                          Edit
                        </button>
                      </td>
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

