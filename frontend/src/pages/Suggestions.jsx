import React, { useState, useEffect } from 'react';
import Sidebar from '../partials/Sidebar'; // Reusing sidebar
import Header from '../partials/Header';   // Reusing header
import FilterButton from '../components/DropdownFilter'; // Reusing filter button
import Datepicker from '../components/Datepicker'; // Reusing datepicker
import Banner from '../partials/Banner'; // Reusing banner
import { useNavigate } from 'react-router-dom';

function Suggestions() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
  const [events, setEvents] = useState([]); // Dummy events data
  const [message, setMessage] = useState(''); // State for input field
  const [suggestions, setSuggestions] = useState([]); // State for server response suggestions
  const [loading, setLoading] = useState(false); // State to track loading status
  const navigate = useNavigate();

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

  const handleCreateEventClick = () => {
    navigate('create'); // Navigate to /events/create when clicked
  };

  const handleSendMessage = async () => {
    setLoading(true); // Set loading to true when starting the request
    try {
      const response = await fetch('http://127.0.0.1:5000/get_suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }), // Send the message as JSON
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data); // Log the response data for debugging
      setSuggestions(data.suggestions); // Update state with suggestions

    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false); // Reset loading state after request is complete
    }
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
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Events</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton align="right" />
                {/* Datepicker */}
                <Datepicker align="right" />
                {/* Add view button */}
                <button
                  className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                  onClick={handleCreateEventClick} // Add onClick handler
                >
                  Create Event
                </button>
              </div>

            </div>

            {/* Input field and button for sending message */}
            <div className="mb-4">
              <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="example: 'target group: age 50-70'" 
                className="border rounded p-2 mr-2 w-full" // Adjusted for full width
                style={{ width: '400px' }} // Optional fixed width style
              />
              <button 
                onClick={handleSendMessage} 
                className="btn bg-blue-600 text-white hover:bg-blue-500"
              >
                Generate marketing strategy/events
              </button>
            </div>

            {/* Suggestions List Grid */}
            <div className="bg-white dark:bg-gray-800 p-4 shadow-lg rounded-lg">
              <h2 className="text-xl font-bold mb-4">Suggestions</h2>
              {loading ? ( // Check if loading
                <p>Loading suggestions...</p> // Show loading message while waiting for response
              ) : suggestions.length > 0 ? (
                <>
                  {/* <p className="mb-2">Number of suggestions: {suggestions.length}</p> Display number of suggestions */}
                  <table className="min-w-full table-auto">
                    <thead>
                      {/* <tr className="bg-gray-200 text-left">
                        <th className="px-4 py-2">Suggestion</th>
                      </tr> */}
                    </thead>
                    <tbody>
                      {suggestions.map((suggestion, index) => (
                        <tr key={index} className="border-t">
                          <td className="px-4 py-4">
                            {index + 1}. {suggestion.idea} {/* Displaying index + 1 for numbering */}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              ) : (
                <p>No suggestions available.</p>
              )}
            </div>

          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}

export default Suggestions;