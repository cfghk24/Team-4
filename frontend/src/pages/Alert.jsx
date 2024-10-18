import React from 'react';

const Alert = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-4 z-50">
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 bg-red-800 px-2 py-1 rounded">
        Close
      </button>
    </div>
  );
};

export default Alert;