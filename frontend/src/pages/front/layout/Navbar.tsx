import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
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

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo et titre */}
          <div className="flex items-center space-x-4">
            <NavLink
              to="/"
              className="flex items-center space-x-3 hover:opacity-90 transition-all duration-200 group"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Truck className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-extrabold text-foreground">
                  EnginDriver
                </h1>
                <span className="text-xs text-secondary/80 -mt-0.5 block font-medium">
                  Transport simple et fiable
                </span>
              </div>
            </NavLink>
          </div>

          {/* Liens desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                 ${
                   isActive
                     ? "bg-primary/10 text-primary font-semibold"
                     : "text-secondary hover:text-foreground hover:bg-secondary/5"
                 }`
              }
            >
              <Home className="h-4 w-4" />
              <span>Accueil</span>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                 ${
                   isActive
                     ? "bg-primary/10 text-primary font-semibold"
                     : "text-secondary hover:text-foreground hover:bg-secondary/5"
                 }`
              }
            >
              <Info className="h-4 w-4" />
              <span>À propos</span>
            </NavLink>

            <NavLink
              to="/driver"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                 ${
                   isActive
                     ? "bg-primary/10 text-primary font-semibold"
                     : "text-secondary hover:text-foreground hover:bg-secondary/5"
                 }`
              }
            >
              <Users className="h-4 w-4" />
              <span>Tous les Chauffeurs</span>
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                 ${
                   isActive
                     ? "bg-primary/10 text-primary font-semibold"
                     : "text-secondary hover:text-foreground hover:bg-secondary/5"
                 }`
              }
            >
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </NavLink>
          </div>

          {/* Actions utilisateur */}
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex rounded-lg hover:bg-secondary/10 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5 text-secondary hover:text-foreground" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg hover:bg-secondary/10 transition-colors"
              aria-label="Mon compte"
            >
              <User className="h-5 w-5 text-secondary hover:text-foreground" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-lg hover:bg-secondary/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={
                isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"
              }
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-secondary hover:text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-secondary hover:text-foreground" />
              )}
            </Button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card/95 backdrop-blur px-4 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3 py-3 rounded-md font-medium transition-all duration-200
                   ${
                     isActive
                       ? "bg-primary/10 text-primary"
                       : "text-secondary hover:text-foreground hover:bg-secondary/5"
                   }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="h-5 w-5" />
                <span>Accueil</span>
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3 py-3 rounded-md font-medium transition-all duration-200
                   ${
                     isActive
                       ? "bg-primary/10 text-primary"
                       : "text-secondary hover:text-foreground hover:bg-secondary/5"
                   }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Info className="h-5 w-5" />
                <span>À propos</span>
              </NavLink>

              <NavLink
                to="/driver"
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3 py-3 rounded-md font-medium transition-all duration-200
                   ${
                     isActive
                       ? "bg-primary/10 text-primary"
                       : "text-secondary hover:text-foreground hover:bg-secondary/5"
                   }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Users className="h-5 w-5" />
                <span>Tous les Chauffeurs</span>
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3 py-3 rounded-md font-medium transition-all duration-200
                   ${
                     isActive
                       ? "bg-primary/10 text-primary"
                       : "text-secondary hover:text-foreground hover:bg-secondary/5"
                   }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="h-5 w-5" />
                <span>Contact</span>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
