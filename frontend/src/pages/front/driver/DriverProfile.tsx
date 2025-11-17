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
    id: 7,
    name: "Hery Randrianarisoa",
    location: "Antananarivo",
    experience: 10,
    rating: 4.7,
    vehicleTypes: ["Bulldozer", "Excavatrice", "Compacteur"],
    availability: "Disponible",
    phone: "+261 34 10 223 11",
    email: "hery.randria@email.mg",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop",
    completedJobs: 145,
    joinDate: "2017",
    certifications: ["CACES R482", "FIMO", "FCO"],
    equipment: ["Bulldozer", "Chargeuse"],
    bio: "Chauffeur expérimenté avec plus de 10 ans dans le secteur BTP, spécialisé dans la manipulation d'engins lourds. Reconnu pour sa précision et sa discipline sur terrain.",
    reviews: [
      {
        name: "BTP Expert Madagascar",
        rating: 5,
        text: "Très professionnel et efficace.",
      },
      { name: "InfraRoute", rating: 4, text: "Bon travail, à recommander." },
    ],
    pastProjects: [
      { name: "Route ANK-12 – Nivellement", date: "2023" },
      { name: "Terrassement Lotissement ITA", date: "2022" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=300",
      "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=300",
    ],
    responseTime: "< 2 heures",
    successRate: 98,
  },

  {
    id: 8,
    name: "Tiana Ravelomanana",
    location: "Toliara",
    experience: 4,
    rating: 4.3,
    vehicleTypes: ["Camion-benne", "Tracteur"],
    availability: "Occupé",
    phone: "+261 33 66 554 21",
    email: "tiana.ravelo@email.mg",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop",
    completedJobs: 51,
    joinDate: "2022",
    certifications: ["CACES R482", "FIMO"],
    equipment: ["Chargeuse"],
    bio: "Jeune conductrice polyvalente, spécialisée dans les travaux de transport et d’évacuation. Fiable et rapide dans l'exécution.",
    reviews: [
      {
        name: "Toliara Trans",
        rating: 4,
        text: "Professionnelle et ponctuelle.",
      },
      { name: "Sud Construction", rating: 5, text: "Très bonne prestation." },
    ],
    pastProjects: [{ name: "Transport Matériaux Toliara", date: "2024" }],
    gallery: [
      "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=300",
    ],
    responseTime: "< 3 heures",
    successRate: 94,
  },

  {
    id: 9,
    name: "Fetra Andrianina",
    location: "Antsirabe",
    experience: 9,
    rating: 4.6,
    vehicleTypes: ["Grue", "Excavatrice"],
    availability: "Disponible",
    phone: "+261 32 77 444 90",
    email: "fetra.andrianina@email.mg",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=150&h=150&fit=crop",
    completedJobs: 132,
    joinDate: "2018",
    certifications: ["CACES R482", "FCO"],
    equipment: ["Pelleteuse", "Grue"],
    bio: "Spécialiste du levage et des opérations délicates avec grue. Très apprécié pour sa maîtrise technique.",
    reviews: [
      {
        name: "Levage Center",
        rating: 5,
        text: "Impeccable, très professionnel.",
      },
    ],
    pastProjects: [{ name: "Levage Site Industriel", date: "2023" }],
    gallery: [
      "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=300",
    ],
    responseTime: "< 2 heures",
    successRate: 97,
  },

  {
    id: 10,
    name: "Rado Herimanana",
    location: "Antananarivo",
    experience: 6,
    rating: 4.5,
    vehicleTypes: ["Niveleuse", "Compacteur"],
    availability: "Disponible",
    phone: "+261 34 55 332 18",
    email: "rado.heri@email.mg",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    completedJobs: 80,
    joinDate: "2020",
    certifications: ["CACES R482"],
    equipment: ["Compacteur"],
    bio: "Conducteur spécialisé dans la préparation et la finition de routes. Très méthodique et fiable.",
    reviews: [
      { name: "RoutePro", rating: 4, text: "Très bonne maîtrise des engins." },
    ],
    pastProjects: [{ name: "Nivellement RN7", date: "2024" }],
    gallery: [
      "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=300",
    ],
    responseTime: "< 2 heures",
    successRate: 95,
  },

  {
    id: 11,
    name: "Hery Ravelonarivo",
    location: "Antananarivo",
    experience: 9,
    rating: 4.6,
    vehicleTypes: ["Excavatrice", "Niveleuse"],
    availability: "Disponible",
    phone: "+261 34 21 345 98",
    email: "hery.ravelo@email.mg",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    completedJobs: 164,
    joinDate: "2018",
    certifications: ["CACES R482", "FIMO"],
    equipment: ["Niveleuse", "Pelleteuse"],
  },
  {
    id: 12,
    name: "Anita Rabetokana",
    location: "Antsirabe",
    experience: 4,
    rating: 4.3,
    vehicleTypes: ["Chariot élévateur", "Tracteur"],
    availability: "Occupé",
    phone: "+261 33 77 021 45",
    email: "anita.rabetokana@email.mg",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
    completedJobs: 51,
    joinDate: "2022",
    certifications: ["FIMO", "FCO"],
    equipment: ["Chariot élévateur"],
  },
  {
    id: 13,
    name: "Toky Rabemanana",
    location: "Toamasina",
    experience: 11,
    rating: 4.9,
    vehicleTypes: ["Bulldozer", "Compacteur"],
    availability: "Disponible",
    phone: "+261 32 13 548 77",
    email: "tokyrabe@email.mg",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face",
    completedJobs: 210,
    joinDate: "2015",
    certifications: ["CACES R482", "FCO"],
    equipment: ["Bulldozer", "Compacteur"],
  },
  {
    id: 14,
    name: "Miora Rasoazanakolona",
    location: "Mahajanga",
    experience: 6,
    rating: 4.4,
    vehicleTypes: ["Camion-benne"],
    availability: "Disponible",
    phone: "+261 34 66 113 54",
    email: "miora.rasoa@email.mg",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face",
    completedJobs: 74,
    joinDate: "2021",
    certifications: ["FIMO"],
    equipment: ["Camion-benne"],
  },
  {
    id: 15,
    name: "Dada Randrianarisoa",
    location: "Toliara",
    experience: 14,
    rating: 4.8,
    vehicleTypes: ["Excavatrice", "Niveleuse", "Bulldozer"],
    availability: "Occupé",
    phone: "+261 32 44 897 12",
    email: "dada.randria@email.mg",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    completedJobs: 265,
    joinDate: "2014",
    certifications: ["CACES R482", "FIMO", "FCO"],
    equipment: ["Excavatrice", "Niveleuse"],
  },
  {
    id: 16,
    name: "Lalao Andrianantenaina",
    location: "Antananarivo",
    experience: 7,
    rating: 4.7,
    vehicleTypes: ["Grue", "Camion-benne"],
    availability: "Disponible",
    phone: "+261 34 22 331 90",
    email: "lalao.andria@email.mg",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=150&h=150&fit=crop&crop=face",
    completedJobs: 112,
    joinDate: "2019",
    certifications: ["FCO", "CACES R482"],
    equipment: ["Grue"],
  },
  {
    id: 17,
    name: "Henri Ralison",
    location: "Fianarantsoa",
    experience: 5,
    rating: 4.5,
    vehicleTypes: ["Tracteur", "Excavatrice"],
    availability: "Disponible",
    phone: "+261 33 61 120 04",
    email: "henri.ralison@email.mg",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=150&fit=crop&crop=face",
    completedJobs: 88,
    joinDate: "2020",
    certifications: ["FIMO"],
    equipment: ["Tracteur"],
  },
  {
    id: 18,
    name: "Clara Ramiandrisoa",
    location: "Sambava",
    experience: 4,
    rating: 4.2,
    vehicleTypes: ["Compacteur"],
    availability: "Occupé",
    phone: "+261 34 98 777 32",
    email: "clara.ramiandrisoa@email.mg",
    image:
      "https://images.unsplash.com/photo-1543997385-7a3b5a779610?w=150&h=150&fit=crop&crop=face",
    completedJobs: 39,
    joinDate: "2022",
    certifications: ["FIM0"],
    equipment: ["Compacteur"],
  },
  {
    id: 19,
    name: "Faniry Rakotomalala",
    location: "Morondava",
    experience: 10,
    rating: 4.7,
    vehicleTypes: ["Chariot élévateur", "Camion-benne"],
    availability: "Disponible",
    phone: "+261 32 55 155 77",
    email: "faniry.rakoto@email.mg",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
    completedJobs: 156,
    joinDate: "2017",
    certifications: ["FCO"],
    equipment: ["Chariot élévateur"],
  },
  {
    id: 20,
    name: "Patrick Randrianomenjanahary",
    location: "Antsiranana",
    experience: 13,
    rating: 4.9,
    vehicleTypes: ["Grue", "Excavatrice", "Bulldozer"],
    availability: "Disponible",
    phone: "+261 33 14 774 21",
    email: "patrick.randria@email.mg",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    completedJobs: 280,
    joinDate: "2013",
    certifications: ["CACES R482", "FIMO", "FCO"],
    equipment: ["Grue", "Bulldozer"],
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
