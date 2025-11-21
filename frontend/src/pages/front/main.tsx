import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import Driver from "./driver/Driver";
import DriverProfile from "./driver/DriverProfile";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Foooter";

export default class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/driver" element={<Driver />} />
            <Route path="/driver/:id" element={<DriverProfile />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}
