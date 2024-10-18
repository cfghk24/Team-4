import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';
import Login from './pages/Login'
// Import pages
import Dashboard from './pages/Dashboard';
import EngagementConversion from './pages/EngagementConversion';
import Event from './pages/Events';
import CreateEvent from './pages/CreateEvents';
import Suggestions from './pages/Suggestions';


function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Event />} />
        <Route path="/events/create" element={<CreateEvent />} />
        <Route path="/pages/EngagementConversion/" element={<EngagementConversion />} />
        <Route path="/events/pages/EngagementConversion/" element={<EngagementConversion />} />
        <Route path="/pages/" element={<EngagementConversion />} />
        <Route path="/suggestions" element={<Suggestions />} />
      </Routes>
    </>
  );
}

export default App;
