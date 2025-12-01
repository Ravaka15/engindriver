import { useEffect, useState } from 'react';
import { dashboardApi } from '../../../service/apiClient';
import type { DashboardStats } from '../../../service/apiClient';
import { Card } from '../../../components/card';

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentAppointments, setRecentAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const [statsRes, appointmentsRes] = await Promise.all([
        dashboardApi.getStats(),
        dashboardApi.getRecentAppointments(),
      ]);
      setStats(statsRes.data);
      setRecentAppointments(appointmentsRes.data);
    } catch (error) {
      console.error('Erreur lors du chargement du dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-8">Chargement...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard Administrateur</h1>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-500">Utilisateurs</h3>
          <p className="text-3xl font-bold mt-2">{stats?.totalUsers || 0}</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-500">Chauffeurs</h3>
          <p className="text-3xl font-bold mt-2">{stats?.totalDrivers || 0}</p>
          <p className="text-sm text-green-600 mt-1">
            {stats?.activeDrivers || 0} actifs
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-500">Patients</h3>
          <p className="text-3xl font-bold mt-2">{stats?.totalPatients || 0}</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-500">Rendez-vous</h3>
          <p className="text-3xl font-bold mt-2">{stats?.totalAppointments || 0}</p>
          <p className="text-sm text-orange-600 mt-1">
            {stats?.pendingAppointments || 0} en attente
          </p>
        </Card>
      </div>

      {/* Rendez-vous récents */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4">Rendez-vous récents</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Patient</th>
                <th className="text-left py-3 px-4">Chauffeur</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Statut</th>
              </tr>
            </thead>
            <tbody>
              {recentAppointments.map((appointment) => (
                <tr key={appointment.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{appointment.patient}</td>
                  <td className="py-3 px-4">{appointment.driver}</td>
                  <td className="py-3 px-4">{appointment.appointmentDate}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        appointment.status === 'pending'
                          ? 'bg-orange-100 text-orange-800'
                          : appointment.status === 'confirmed'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
