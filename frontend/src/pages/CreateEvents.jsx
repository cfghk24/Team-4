import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar'; // Assuming you're reusing the sidebar
import Header from '../partials/Header';   // Reusing the header
import Banner from '../partials/Banner';   // Reusing banner

function CreateEvent() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
  const [eventName, setEventName] = useState(''); // Event name state
  const [selectedFeatures, setSelectedFeatures] = useState([]); // Multi-select state
  const [showFeaturesDropdown, setShowFeaturesDropdown] = useState(false); // Dropdown visibility state

  const features = ['Age', 'Location', 'Interest', 'Gender', 'Occupation']; // Example feature options

  // Handle event name input change
  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  // Handle feature selection
  const toggleFeature = (feature) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Created:', { eventName, selectedFeatures });
    alert(`Event Created: ${eventName}\nFeatures: ${selectedFeatures.join(', ')}`);
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

            {/* Page title */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Create Event</h1>
              </div>
            </div>

            {/* Event creation form */}
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-4 shadow-lg rounded-lg">

              {/* Event Name Input */}
              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="event-name">Event Name</label>
                <input
                  type="text"
                  id="event-name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={eventName}
                  onChange={handleEventNameChange}
                  required
                />
              </div>

              {/* Custom Multi-select Dropdown for Features */}
              <div className="mb-6 relative">
                <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="features">Select Features</label>
                <div
                  className="w-full p-2 border border-gray-300 rounded-md bg-white dark:bg-gray-700 cursor-pointer"
                  onClick={() => setShowFeaturesDropdown(!showFeaturesDropdown)}
                >
                  {selectedFeatures.length > 0 ? selectedFeatures.join(', ') : 'Select Features'}
                </div>

                {showFeaturesDropdown && (
                  <div className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-700 border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                    {features.map((feature) => (
                      <label key={feature} className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedFeatures.includes(feature)}
                          onChange={() => toggleFeature(feature)}
                          className="mr-2"
                        />
                        {feature}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Create Event Button */}
              <div>
                <button
                  type="submit"
                  className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white px-4 py-2 rounded-md"
                >
                  Create Event
                </button>
              </div>

            </form>

          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}

export default CreateEvent;

