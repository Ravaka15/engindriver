import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Truck,
} from "lucide-react";
import { Button } from "../../../components/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* À propos */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link
                to="/"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <div className="h-8 w-8 rounded bg-secondary flex items-center justify-center">
                  <Truck className="h-4 w-4 text-primary-foreground" />
                </div>
                <h1 className="text-xl font-bold text-foreground">
                  EnginDriver
                </h1>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              La plateforme de référence pour trouver des chauffeurs d'engin
              qualifiés et certifiés.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-primary">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Recherche de chauffeurs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Vérification CACES
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Gestion des missions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Support 24/7
                </a>
              </li>
            </ul>
          </div>

          {/* Engins */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Types d'engins</h4>
            <ul className="space-y-2 text-sm text-primary">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Pelleteuses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Grues
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Bulldozers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Chargeurs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3 text-sm text-primary">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Rue du BTP, 75001 Paris</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@engindriver.fr</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-primary">
          <p>
            &copy; 2025 EnginDriver. Tous droits réservés. |
            <a
              href="#"
              className="hover:text-foreground transition-colors ml-1"
            >
              Mentions légales
            </a>{" "}
            |
            <a
              href="#"
              className="hover:text-foreground transition-colors ml-1"
            >
              Politique de confidentialité
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
