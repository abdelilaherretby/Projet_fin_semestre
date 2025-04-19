// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingPage from './pages/booking_page';
import LoginPage from './pages/login_page';
import AgencyProfile from './pages/agency_profile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/agence_profile" element={<AgencyProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
