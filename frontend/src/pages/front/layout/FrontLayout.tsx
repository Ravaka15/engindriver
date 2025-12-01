import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Foooter';

export default function FrontLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
