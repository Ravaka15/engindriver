import api from '../api/api';

// Types
export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  roles: string[];
  createdAt: string;
};

export type Driver = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  licenseNumber?: string;
  address?: string;
  status: string;
  createdAt: string;
};

export type Patient = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  address?: string;
  medicalNotes?: string;
  createdAt: string;
};

export type Appointment = {
  id: number;
  patient: {
    id: number;
    firstName: string;
    lastName: string;
  };
  driver?: {
    id: number;
    firstName: string;
    lastName: string;
  };
  appointmentDate: string;
  pickupAddress: string;
  destinationAddress: string;
  status: string;
  notes?: string;
  createdAt: string;
};

export type DashboardStats = {
  totalUsers: number;
  totalDrivers: number;
  totalPatients: number;
  totalAppointments: number;
  pendingAppointments: number;
  confirmedAppointments: number;
  completedAppointments: number;
  activeDrivers: number;
};

// Users API
export const usersApi = {
  getAll: () => api.get<User[]>('/admin/users'),
  getById: (id: number) => api.get<User>(`/admin/users/${id}`),
  create: (data: any) => api.post<User>('/admin/users', data),
  update: (id: number, data: any) => api.put<User>(`/admin/users/${id}`, data),
  delete: (id: number) => api.delete(`/admin/users/${id}`),
};

// Drivers API
export const driversApi = {
  getAll: () => api.get<Driver[]>('/admin/drivers'),
  getById: (id: number) => api.get<Driver>(`/admin/drivers/${id}`),
  create: (data: any) => api.post<Driver>('/admin/drivers', data),
  update: (id: number, data: any) => api.put<Driver>(`/admin/drivers/${id}`, data),
  delete: (id: number) => api.delete(`/admin/drivers/${id}`),
};

// Patients API
export const patientsApi = {
  getAll: () => api.get<Patient[]>('/admin/patients'),
  getById: (id: number) => api.get<Patient>(`/admin/patients/${id}`),
  create: (data: any) => api.post<Patient>('/admin/patients', data),
  update: (id: number, data: any) => api.put<Patient>(`/admin/patients/${id}`, data),
  delete: (id: number) => api.delete(`/admin/patients/${id}`),
};

// Appointments API
export const appointmentsApi = {
  getAll: () => api.get<Appointment[]>('/admin/appointments'),
  getById: (id: number) => api.get<Appointment>(`/admin/appointments/${id}`),
  create: (data: any) => api.post<Appointment>('/admin/appointments', data),
  update: (id: number, data: any) => api.put<Appointment>(`/admin/appointments/${id}`, data),
  delete: (id: number) => api.delete(`/admin/appointments/${id}`),
};

// Dashboard API
export const dashboardApi = {
  getStats: () => api.get<DashboardStats>('/admin/dashboard/stats'),
  getRecentAppointments: () => api.get<any[]>('/admin/dashboard/recent-appointments'),
};

// Auth API
export const authApi = {
  login: (email: string, password: string) => api.post('/auth/login', { email, password }),
  logout: () => api.post('/auth/logout', {}),
  refresh: () => api.post('/auth/refresh', {}),
};
