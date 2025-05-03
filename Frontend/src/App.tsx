// App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BookingPage from './pages/booking_page';
import LoginClient from './pages/Login_client';
import LoginAgence from './pages/Login_agence';
import AgenceProfile from './pages/Agence_profile';
import ClientProfile from './pages/Client_profile';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/booking_page" element={<BookingPage />} />
      <Route path="/login_client" element={<LoginClient />} />
      <Route path="/login_agence" element={<LoginAgence />} />
      <Route path="/agence_profile" element={<AgenceProfile />} />
      <Route path="/client_profile" element={<ClientProfile />} />
      
    </Routes>
  );
}


