import { Link, useNavigate, Outlet } from 'react-router-dom';
import { Button } from '../../../components/button';

export default function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Back Office</h1>
            <Button variant="outline" onClick={handleLogout}>
              Déconnexion
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md min-h-screen">
          <nav className="mt-5 px-2">
            <Link
              to="/admin/dashboard"
              className="group flex items-center px-2 py-2 text-base font-medium rounded-md hover:bg-gray-100"
            >
              📊 Dashboard
            </Link>
            <Link
              to="/admin/users"
              className="group flex items-center px-2 py-2 text-base font-medium rounded-md hover:bg-gray-100 mt-1"
            >
              👥 Utilisateurs
            </Link>
            <Link
              to="/admin/drivers"
              className="group flex items-center px-2 py-2 text-base font-medium rounded-md hover:bg-gray-100 mt-1"
            >
              🚗 Chauffeurs
            </Link>
            <Link
              to="/admin/patients"
              className="group flex items-center px-2 py-2 text-base font-medium rounded-md hover:bg-gray-100 mt-1"
            >
              🏥 Patients
            </Link>
            <Link
              to="/admin/appointments"
              className="group flex items-center px-2 py-2 text-base font-medium rounded-md hover:bg-gray-100 mt-1"
            >
              📅 Rendez-vous
            </Link>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
