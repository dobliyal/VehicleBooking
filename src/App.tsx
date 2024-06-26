// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalDetails from './components/PersonalDetails';
import ServiceDetails from './components/ServiceDetails';
import BookingDetails from './components/BookingDetails';
import Confirmation from './components/Confirmation';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalDetails />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/booking-details" element={<BookingDetails />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
};

export default App;
