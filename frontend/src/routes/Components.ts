import Appointment from "../pages/admin/appointment/Appointment";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import Patient from "../pages/admin/patients/Patient";
import Wrapper from "../pages/admin/wrapper";

export const Components = [
  {
    key: "dashboard",
    path: "/dashboard",
    component: Wrapper(Dashboard),
  },
  {
    key: "patient",
    path: "/patient",
    component: Wrapper(Patient),
  },
  {
    key: "appointment",
    path: "/appointment",
    component: Wrapper(Appointment),
  },

  // {
  //   key: "register",
  //   path: "/register",
  //   component: Register,
  // },
  // {
  //   key: "profile",
  //   path: "/profile",
  //   component: Profile,
  // },
  // {
  //   key: "settings",
  //   path: "/settings",
  //   component: Settings,
  // },
  // {
  //   key: "notFound",
  //   path: "*",
  //   component: NotFound,
  // },
];
