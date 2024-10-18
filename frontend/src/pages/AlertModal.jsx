import React from 'react';

const AlertModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-600">{message}</h2>
        <button
          onClick={onClose}
          className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300"
        >
          Acknowledge
        </button>
      </div>
    </div>
  );
};

export default AlertModal;