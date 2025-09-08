import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  User,
  Bell,
  Menu,
  X,
  Home,
  Users,
  Phone,
  Info,
  Truck,
} from "lucide-react";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo et titre */}
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="h-8 w-8 rounded bg-secondary flex items-center justify-center">
                <Truck className="h-4 w-4 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">EnginDriver</h1>
            </Link>
          </div>

          {/* Liens desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className="flex items-center space-x-2 text-secondary hover:text-secondary hover:font-semibold transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Accueil</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-2 text-secondary hover:text-secondary hover:font-semibold transition-colors"
            >
              <Info className="h-4 w-4" />
              <span>À propos</span>
            </Link>
            <Link
              to="/driver"
              className="flex items-center space-x-2 text-secondary hover:text-secondary hover:font-semibold transition-colors"
            >
              <Users className="h-4 w-4" />
              <span>Tous les Chauffeurs</span>
            </Link>

            <Link
              to="/contact"
              className="flex items-center space-x-2 text-secondary hover:text-secondary hover:font-semibold transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Actions utilisateur */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Bell className="h-4 w-4 text-secondary" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4 text-secondary" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4 text-secondary" />
              ) : (
                <Menu className="h-4 w-4 text-secondary" />
              )}
            </Button>
            {/* <button
              onClick={toggleDarkMode}
              className="bg-secondary text-secondary-foreground px-3 py-1 rounded-lg hover:opacity-90 transition"
            >
              Basculer thème
            </button> */}
          </div>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card/95 backdrop-blur">
            <div className="px-4 py-4 space-y-4">
              {/* Liens mobile */}
              <div className="space-y-3">
                <Link
                  to="/"
                  className="flex items-center space-x-3 text-secondary hover:text-secondary hover:font-semibold transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Home className="h-5 w-5" />
                  <span>Accueil</span>
                </Link>
                <Link
                  to="/about"
                  className="flex items-center space-x-3 text-secondary hover:text-secondary hover:font-semibold transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Info className="h-5 w-5" />
                  <span>À propos</span>
                </Link>
                <Link
                  to="/drivers"
                  className="flex items-center space-x-3 text-secondary hover:text-secondary hover:font-semibold transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Users className="h-5 w-5" />
                  <span>Tous les Chauffeurs</span>
                </Link>

                <Link
                  to="/contact"
                  className="flex items-center space-x-3 text-secondary hover:text-secondary hover:font-semibold transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="h-5 w-5" />
                  <span>Contact</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
