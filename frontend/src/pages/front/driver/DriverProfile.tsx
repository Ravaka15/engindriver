import { useParams, useNavigate } from "react-router-dom";
import {
  MapPin,
  Star,
  Phone,
  Mail,
  Briefcase,
  CheckCircle,
} from "lucide-react";
import { Button } from "../../../components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/card";
import { Badge } from "../../../components/badge";
import { Separator } from "../../../components/separator";

const drivers = [
  {
    id: 1,
    name: "Jean-Pierre Rakoto",
    location: "Antananarivo",
    experience: 8,
    rating: 4.8,
    vehicleTypes: ["Bulldozer", "Excavatrice", "Camion-benne"],
    availability: "Disponible",
    phone: "+261 34 12 345 67",
    email: "jp.rakoto@email.mg",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    completedJobs: 156,
    joinDate: "2019",
    certifications: ["CACES R482", "FIMO", "FCO"],
    equipment: ["Pelleteuse", "Bulldozer", "Chargeuse"],
    bio: "Professionnel expérimenté avec 8 ans d'expertise dans les travaux de terrassement et la conduite d'engins lourds. Spécialiste reconnu pour la précision et la sécurité sur chantier.",
    reviews: [
      {
        name: "Entreprise BTP SA",
        rating: 5,
        text: "Excellent travail, très professionnel et ponctuel. Recommandé !",
      },
      {
        name: "Construction Moderne",
        rating: 5,
        text: "Chauffeur de confiance, travail impeccable et communication claire.",
      },
      {
        name: "Travaux Publics Ltd",
        rating: 4,
        text: "Très satisfaits. À réutiliser sans hésiter.",
      },
    ],
    pastProjects: [
      { name: "Route nationale RN5 - Terrassement", date: "2024" },
      { name: "Fondations Centre Commercial - Excavation", date: "2023" },
      { name: "Aménagement Zone Industrielle", date: "2023" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=300&h=200&fit=crop",
    ],
    responseTime: "< 2 heures",
    successRate: 99,
  },
  {
    id: 2,
    name: "Marie Razafy",
    location: "Fianarantsoa",
    experience: 5,
    rating: 4.6,
    vehicleTypes: ["Grue", "Chariot élévateur", "Tracteur"],
    availability: "Occupé",
    phone: "+261 33 98 765 43",
    email: "m.razafy@email.mg",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    completedJobs: 89,
    joinDate: "2021",
    certifications: ["CACES R482", "FIMO", "FCO"],
    equipment: ["Pelleteuse", "Bulldozer", "Chargeuse"],
    bio: "Professionnelle dynamique avec 5 ans d'expérience en manutention et levage. Adaptée aux petits et moyens projets avec grande flexibilité.",
    reviews: [
      {
        name: "Logistique Plus",
        rating: 5,
        text: "Très professionnelle et efficace.",
      },
      {
        name: "Entreposage Moderne",
        rating: 4,
        text: "Bon travail, très fiable.",
      },
    ],
    pastProjects: [
      { name: "Transport Usine - Manutention", date: "2024" },
      { name: "Installation Grue Site 2", date: "2023" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=300&h=200&fit=crop",
    ],
    responseTime: "< 3 heures",
    successRate: 96,
  },
  {
    id: 3,
    name: "Paul Andriamana",
    location: "Toamasina",
    experience: 12,
    rating: 4.9,
    vehicleTypes: ["Bulldozer", "Excavatrice", "Niveleuse", "Compacteur"],
    availability: "Disponible",
    phone: "+261 32 11 223 45",
    email: "p.andriamana@email.mg",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    completedJobs: 234,
    joinDate: "2016",
    certifications: ["CACES R482", "FIMO", "FCO"],
    equipment: ["Pelleteuse", "Bulldozer", "Chargeuse"],
    bio: "Expert chevronné avec 12 ans d'expérience dans les grands travaux d'infrastructure. Leader reconnu en gestion de chantiers complexes et sécurité.",
    reviews: [
      {
        name: "Grands Travaux Corp",
        rating: 5,
        text: "Le meilleur dans son domaine. Exemplaire !",
      },
      {
        name: "Infrastructure Publique",
        rating: 5,
        text: "Professionnel de très haut niveau. Confiance absolue.",
      },
      {
        name: "Génie Civil International",
        rating: 5,
        text: "Références impeccables. À privilégier.",
      },
    ],
    pastProjects: [
      { name: "Autoroute A7 - Phase 3", date: "2024" },
      { name: "Port Commercial - Aménagement", date: "2023" },
      { name: "Projet Aéroport - Infrastructure", date: "2022" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=300&h=200&fit=crop",
    ],
    responseTime: "< 1 heure",
    successRate: 100,
  },
];

const DriverProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const driverId = Number(id);
  const driver = drivers.find((d) => d.id === driverId);

  if (!driver) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Chauffeur introuvable</h2>
        <p className="text-muted-foreground mb-6">
          Le chauffeur demandé est introuvable.
        </p>
        <Button onClick={() => navigate(-1)}>Retour</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {/* Profile Card */}
        <Card className="col-span-1">
          <CardHeader>
            <div className="flex flex-col items-center text-center">
              <img
                src={driver.image}
                alt={driver.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <CardTitle className="text-2xl">{driver.name}</CardTitle>
              <div className="flex items-center justify-center gap-1 text-sm text-accent mt-2">
                <Star className="h-5 w-5 fill-accent text-accent" />
                <span className="font-bold">{driver.rating}</span>
              </div>
              <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mt-1">
                <MapPin className="h-4 w-4" />
                <span>{driver.location}</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Availability Badge */}
            <div className="text-center">
              <Badge
                variant={
                  driver.availability === "Disponible" ? "default" : "secondary"
                }
                className={
                  driver.availability === "Disponible"
                    ? "bg-green-100 text-green-800"
                    : "bg-orange-100 text-orange-600"
                }
              >
                {driver.availability}
              </Badge>
            </div>

            <Separator />

            {/* Quick Stats */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Expérience</span>
                <span className="font-semibold">{driver.experience} ans</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Chantiers</span>
                <span className="font-semibold">{driver.completedJobs}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Taux réussite</span>
                <span className="font-semibold text-green-600">
                  {driver.successRate}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Temps réponse</span>
                <span className="font-semibold">{driver.responseTime}</span>
              </div>
            </div>

            <Separator />

            {/* Contact */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href={`tel:${driver.phone}`}
                  className="text-accent hover:underline"
                >
                  {driver.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href={`mailto:${driver.email}`}
                  className="text-accent hover:underline"
                >
                  {driver.email}
                </a>
              </div>
            </div>

            <Separator />

            {/* Action Buttons */}
            <div className="space-y-2">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Contacter
              </Button>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Réserver
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="col-span-3 space-y-6">
          {/* About Section */}
          <Card>
            <CardHeader>
              <CardTitle>À propos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {driver.bio}
              </p>
            </CardContent>
          </Card>

          {/* Certifications & Equipment */}
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {driver.certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Engins maîtrisés</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {driver.equipment.map((eq) => (
                    <Badge key={eq} variant="outline" className="text-xs">
                      {eq}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Specialties */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Spécialités</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {driver.vehicleTypes.map((type) => (
                  <Badge
                    key={type}
                    className="bg-primary text-primary-foreground"
                  >
                    {type}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Gallery Section */}
      {driver.gallery && driver.gallery.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Galerie de travaux</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {driver.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-lg aspect-square hover:shadow-lg transition-shadow"
                >
                  <img
                    src={img}
                    alt={`Projet ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Past Projects */}
      {driver.pastProjects && driver.pastProjects.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Projets récents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {driver.pastProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 pb-3 border-b last:border-b-0"
                >
                  <Briefcase className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">{project.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {project.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Reviews Section */}
      {driver.reviews && driver.reviews.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Avis clients ({driver.reviews.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {driver.reviews.map((review, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-medium text-sm">{review.name}</p>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Bottom Actions */}
      <div className="flex gap-4 justify-center">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Contacter ce chauffeur
        </Button>
        <Button variant="outline" onClick={() => navigate(-1)}>
          Retour à la liste
        </Button>
      </div>
    </div>
  );
};

export default DriverProfile;
