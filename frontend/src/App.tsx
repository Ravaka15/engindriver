import { Routes, Route, Navigate } from 'react-router-dom';

// Front
import FrontLayout from './pages/front/layout/FrontLayout';
import Home from './pages/front/home/Home';
import About from './pages/front/about/About';
import Contact from './pages/front/contact/Contact';
import Driver from './pages/front/driver/Driver';
import DriverProfile from './pages/front/driver/DriverProfile';

// Admin
import Login from './pages/admin/auth/Login';
import AdminLayout from './pages/admin/layout/AdminLayout';
import AdminDashboard from './pages/admin/dashboard/AdminDashboard';
import UsersList from './pages/admin/users/UsersList';
import DriversList from './pages/admin/drivers/DriversList';

function App() {
  return (
    <Routes>
      {/* Front-office (avec Navbar + Footer) */}
      <Route element={<FrontLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/driver/:id" element={<DriverProfile />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Back-office - Authentification */}
      <Route path="/admin/login" element={<Login />} />

      {/* Back-office - Pages avec layout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<UsersList />} />
        <Route path="drivers" element={<DriversList />} />
      </Route>
    </Routes>
  );
}

export default App;
