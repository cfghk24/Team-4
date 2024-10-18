import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Login from './pages/Login';
import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import EngagementConversion from './pages/EngagementConversion';
import Event from './pages/Events';
import CreateEvent from './pages/CreateEvents';
import AlertModal from './pages/AlertModal';
import Suggestions from './pages/suggestion';

function App() {

  const location = useLocation();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';

    // Trigger alert on specific routes
    if (location.pathname === '/events') {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
    {showAlert && (
        <AlertModal
          message="ANIMAL IN DANGER, respond immediately"
          onClose={() => setShowAlert(false)}
        />
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<Dashboard />} />
        
        <Route path="/events" element={<Event />} />
        <Route path="/events/create" element={<CreateEvent />} />
        <Route path="/pages/EngagementConversion" element={<EngagementConversion />} />
        <Route path="/events/suggestion" element={<Suggestions />} />
      </Routes>
    </>
  );
}

export default App;
