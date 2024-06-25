import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import PersonalDetails from './components/PersonalDetails';
import ServiceDetails from './components/ServiceDetails';
import BookingDetails from './components/BookingDetails';
import Confirmation from './components/Confirmation';

function App() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   address: '',
  //   vehicleType: '',
  //   vehicleModel: '',
  //   appointmentDate: '',
  //   appointmentTime: '',
  // });

  // const updateFormData = (data) => {
  //   setFormData({
  //     ...formData,
  //     ...data,
  //   });
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalDetails/>} />
        <Route path="/service-details" element={<ServiceDetails/>} />
        <Route path="/booking-details" element={<BookingDetails/>} />
        <Route path="/confirmation" element={<Confirmation/>} />
      </Routes>
    </Router>
  );
}

export default App;

