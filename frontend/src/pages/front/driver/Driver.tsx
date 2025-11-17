import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  MapPin,
  Calendar,
  Award,
  Truck,
  Star,
  Grid3X3,
  List,
} from "lucide-react";
import { Button } from "../../../components/button";
import { Badge } from "../../../components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/card";
import { Separator } from "../../../components/separator";

const Driver = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"card" | "table">("card");

  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    experience: "",
    vehicleType: "",
    availability: "",
  });

  // Données simulées de chauffeurs
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
    },
    {
      id: 11,
      name: "Miora Rahantanirina",
      location: "Fianarantsoa",
      experience: 3,
      rating: 4.2,
      vehicleTypes: ["Chariot élévateur", "Camion-benne"],
      availability: "Occupé",
      phone: "+261 33 99 221 76",
      email: "miora.rahan@email.mg",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop",
      completedJobs: 40,
      joinDate: "2023",
      certifications: ["FIMO"],
      equipment: ["Chariot élévateur"],
    },
    {
      id: 12,
      name: "Jean-Luc Rafanomezantsoa",
      location: "Toamasina",
      experience: 14,
      rating: 4.9,
      vehicleTypes: ["Bulldozer", "Excavatrice", "Grue"],
      availability: "Disponible",
      phone: "+261 32 44 118 90",
      email: "jl.rafa@email.mg",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      completedJobs: 260,
      joinDate: "2015",
      certifications: ["CACES R482", "FCO", "FIMO"],
      equipment: ["Bulldozer", "Grue", "Pelleteuse"],
    },
    {
      id: 13,
      name: "Lova Randrianantenaina",
      location: "Mahajanga",
      experience: 7,
      rating: 4.6,
      vehicleTypes: ["Excavatrice", "Niveleuse"],
      availability: "Disponible",
      phone: "+261 34 88 320 45",
      email: "lova.rand@mail.mg",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
      completedJobs: 109,
      joinDate: "2019",
      certifications: ["CACES R482"],
      equipment: ["Excavatrice", "Chargeuse"],
    },
    {
      id: 14,
      name: "Kanto Rasolofonirina",
      location: "Antananarivo",
      experience: 2,
      rating: 4.1,
      vehicleTypes: ["Tracteur"],
      availability: "Occupé",
      phone: "+261 32 77 886 12",
      email: "kanto.raso@mail.mg",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      completedJobs: 22,
      joinDate: "2024",
      certifications: ["FIMO"],
      equipment: ["Tracteur"],
    },
    {
      id: 15,
      name: "Samuel Rakotonirina",
      location: "Antsiranana",
      experience: 11,
      rating: 4.8,
      vehicleTypes: ["Grue", "Camion-benne"],
      availability: "Disponible",
      phone: "+261 34 66 789 34",
      email: "samuel.rako@mail.mg",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      completedJobs: 210,
      joinDate: "2016",
      certifications: ["CACES R482", "FCO"],
      equipment: ["Grue", "Camion-benne"],
    },
    {
      id: 16,
      name: "Faly Randriamampianina",
      location: "Sambava",
      experience: 5,
      rating: 4.4,
      vehicleTypes: ["Excavatrice", "Compacteur"],
      availability: "Disponible",
      phone: "+261 33 44 908 12",
      email: "faly.randria@mail.mg",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop",
      completedJobs: 72,
      joinDate: "2021",
      certifications: ["CACES R482"],
      equipment: ["Compacteur"],
    },
    {
      id: 17,
      name: "Lalasoa Raminosoa",
      location: "Toliara",
      experience: 8,
      rating: 4.5,
      vehicleTypes: ["Camion-benne", "Chariot élévateur"],
      availability: "Occupé",
      phone: "+261 34 21 904 65",
      email: "lalasoa.rami@mail.mg",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      completedJobs: 95,
      joinDate: "2018",
      certifications: ["FIMO"],
      equipment: ["Camion-benne"],
    },
    {
      id: 18,
      name: "Joel Rasoamaromaka",
      location: "Antananarivo",
      experience: 13,
      rating: 4.8,
      vehicleTypes: ["Bulldozer", "Excavatrice", "Grue"],
      availability: "Disponible",
      phone: "+261 32 60 334 77",
      email: "joel.raso@mail.mg",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      completedJobs: 240,
      joinDate: "2014",
      certifications: ["CACES R482", "FCO", "FIMO"],
      equipment: ["Bulldozer", "Excavatrice", "Grue"],
    },
    {
      id: 19,
      name: "Nirina Randriamanana",
      location: "Fianarantsoa",
      experience: 4,
      rating: 4.3,
      vehicleTypes: ["Tracteur"],
      availability: "Disponible",
      phone: "+261 33 77 665 42",
      email: "nirina.randria@mail.mg",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop",
      completedJobs: 48,
      joinDate: "2022",
      certifications: ["FIMO"],
      equipment: ["Tracteur"],
    },
    {
      id: 20,
      name: "Patrick Raveloson",
      location: "Mahajanga",
      experience: 9,
      rating: 4.6,
      vehicleTypes: ["Chariot élévateur", "Compacteur"],
      availability: "Disponible",
      phone: "+261 34 42 789 12",
      email: "patrick.ravelo@mail.mg",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      completedJobs: 120,
      joinDate: "2018",
      certifications: ["CACES R482"],
      equipment: ["Compacteur"],
    },
    {
      id: 21,
      name: "Hanta Ratovonirina",
      location: "Toamasina",
      experience: 7,
      rating: 4.5,
      vehicleTypes: ["Camion-benne", "Tracteur"],
      availability: "Occupé",
      phone: "+261 33 56 890 22",
      email: "hanta.ratovo@mail.mg",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop",
      completedJobs: 104,
      joinDate: "2019",
      certifications: ["FCO"],
      equipment: ["Camion-benne"],
    },
    {
      id: 22,
      name: "David Andriambelo",
      location: "Antananarivo",
      experience: 6,
      rating: 4.4,
      vehicleTypes: ["Niveleuse", "Excavatrice"],
      availability: "Disponible",
      phone: "+261 32 65 321 11",
      email: "david.andriambelo@mail.mg",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      completedJobs: 82,
      joinDate: "2020",
      certifications: ["CACES R482"],
      equipment: ["Niveleuse"],
    },
    {
      id: 23,
      name: "Sarobidy Rasoanarivo",
      location: "Antsirabe",
      experience: 2,
      rating: 4.0,
      vehicleTypes: ["Chariot élévateur"],
      availability: "Disponible",
      phone: "+261 33 43 772 66",
      email: "sarobidy.raso@mail.mg",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      completedJobs: 18,
      joinDate: "2024",
      certifications: [],
      equipment: ["Chariot élévateur"],
    },
    {
      id: 24,
      name: "Henriette Rajoelina",
      location: "Sambava",
      experience: 5,
      rating: 4.3,
      vehicleTypes: ["Camion-benne"],
      availability: "Disponible",
      phone: "+261 33 90 556 43",
      email: "henriette.rajo@mail.mg",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop",
      completedJobs: 60,
      joinDate: "2021",
      certifications: ["FIMO"],
      equipment: ["Camion-benne"],
    },
    {
      id: 25,
      name: "Toky Randriamasy",
      location: "Antananarivo",
      experience: 10,
      rating: 4.7,
      vehicleTypes: ["Bulldozer", "Excavatrice"],
      availability: "Disponible",
      phone: "+261 34 80 908 12",
      email: "toky.randria@mail.mg",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      completedJobs: 144,
      joinDate: "2017",
      certifications: ["CACES R482", "FCO"],
      equipment: ["Bulldozer"],
    },
    {
      id: 26,
      name: "Prisca Ranaivo",
      location: "Fianarantsoa",
      experience: 6,
      rating: 4.5,
      vehicleTypes: ["Tracteur", "Compacteur"],
      availability: "Occupé",
      phone: "+261 32 54 223 78",
      email: "prisca.ranaivo@mail.mg",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      completedJobs: 71,
      joinDate: "2020",
      certifications: ["FIMO"],
      equipment: ["Tracteur"],
    },
    {
      id: 27,
      name: "Ludovic Ravelomanantsoa",
      location: "Mahajanga",
      experience: 11,
      rating: 4.8,
      vehicleTypes: ["Grue", "Excavatrice"],
      availability: "Disponible",
      phone: "+261 34 90 334 12",
      email: "ludovic.ravelo@mail.mg",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      completedJobs: 200,
      joinDate: "2015",
      certifications: ["CACES R482", "FIMO", "FCO"],
      equipment: ["Grue", "Pelleteuse"],
    },
    {
      id: 28,
      name: "Volana Ramiaramanana",
      location: "Toamasina",
      experience: 3,
      rating: 4.2,
      vehicleTypes: ["Camion-benne"],
      availability: "Disponible",
      phone: "+261 33 10 998 43",
      email: "volana.ramia@mail.mg",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      completedJobs: 33,
      joinDate: "2023",
      certifications: ["FIMO"],
      equipment: ["Camion-benne"],
    },
    {
      id: 29,
      name: "Fabien Randriamanisa",
      location: "Antananarivo",
      experience: 9,
      rating: 4.6,
      vehicleTypes: ["Excavatrice", "Chariot élévateur"],
      availability: "Disponible",
      phone: "+261 34 66 112 34",
      email: "fabien.randria@mail.mg",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop",
      completedJobs: 130,
      joinDate: "2018",
      certifications: ["CACES R482"],
      equipment: ["Excavatrice"],
    },
    {
      id: 30,
      name: "Malala Ramahafaly",
      location: "Antsirabe",
      experience: 7,
      rating: 4.5,
      vehicleTypes: ["Grue", "Camion-benne"],
      availability: "Occupé",
      phone: "+261 33 87 441 20",
      email: "malala.rama@mail.mg",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      completedJobs: 101,
      joinDate: "2019",
      certifications: ["CACES R482", "FIMO"],
      equipment: ["Grue", "Camion-benne"],
    },
  ];

  const filteredDrivers = drivers.filter((driver) => {
    const matchesSearch =
      driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.vehicleTypes.some((type) =>
        type.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesLocation =
      !filters.location || driver.location === filters.location;
    const matchesExperience =
      !filters.experience ||
      (filters.experience === "junior" && driver.experience < 3) ||
      (filters.experience === "intermediate" &&
        driver.experience >= 3 &&
        driver.experience < 8) ||
      (filters.experience === "senior" && driver.experience >= 8);
    const matchesVehicle =
      !filters.vehicleType || driver.vehicleTypes.includes(filters.vehicleType);
    const matchesAvailability =
      !filters.availability || driver.availability === filters.availability;

    return (
      matchesSearch &&
      matchesLocation &&
      matchesExperience &&
      matchesVehicle &&
      matchesAvailability
    );
  });

  const resetFilters = () => {
    setFilters({
      location: "",
      experience: "",
      vehicleType: "",
      availability: "",
    });
    setSearchTerm("");
  };
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="flex gap-4 items-center justify-end">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 hover:cursor-pointer"
          >
            <Filter className="h-4 w-4" />
            Filtres
          </Button>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Search Bar */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Nom, ville, ou type d'engin..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Location Filter */}
            <select
              className="px-3 py-2 border border-gray-300 rounded-lg"
              value={filters.location}
              onChange={(e) =>
                setFilters({ ...filters, location: e.target.value })
              }
            >
              <option value="">Toutes les villes</option>
              <option value="Antananarivo">Antananarivo</option>
              <option value="Fianarantsoa">Fianarantsoa</option>
              <option value="Toamasina">Toamasina</option>
              <option value="Mahajanga">Mahajanga</option>
              <option value="Antsirabe">Antsirabe</option>
            </select>

            {/* Experience Filter */}
            <select
              className="px-3 py-2 border border-gray-300 rounded-lg"
              value={filters.experience}
              onChange={(e) =>
                setFilters({ ...filters, experience: e.target.value })
              }
            >
              <option value="">Toute expérience</option>
              <option value="junior">Junior (&lt; 3 ans)</option>
              <option value="intermediate">Intermédiaire (3-8 ans)</option>
              <option value="senior">Senior (8+ ans)</option>
            </select>

            {/* Vehicle Type Filter */}
            <select
              className="px-3 py-2 border border-gray-300 rounded-lg"
              value={filters.vehicleType}
              onChange={(e) =>
                setFilters({ ...filters, vehicleType: e.target.value })
              }
            >
              <option value="">Tous les engins</option>
              <option value="Bulldozer">Bulldozer</option>
              <option value="Excavatrice">Excavatrice</option>
              <option value="Grue">Grue</option>
              <option value="Camion-benne">Camion-benne</option>
              <option value="Tracteur">Tracteur</option>
              <option value="Chariot élévateur">Chariot élévateur</option>
            </select>

            {/* Availability Filter */}
            <select
              className="px-3 py-2 border border-gray-300 rounded-lg"
              value={filters.availability}
              onChange={(e) =>
                setFilters({ ...filters, availability: e.target.value })
              }
            >
              <option value="">Toute disponibilité</option>
              <option value="Disponible">Disponible</option>
              <option value="Occupé">Occupé</option>
            </select>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-600">
              {filteredDrivers.length} chauffeur
              {filteredDrivers.length > 1 ? "s" : ""} trouvé
              {filteredDrivers.length > 1 ? "s" : ""}
            </span>
            <button
              onClick={resetFilters}
              className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 hover:cursor-pointer rounded-lg transition-colors"
            >
              <Filter className="w-4 h-4" />
              Réinitialiser les filtres
            </button>
          </div>
        </div>
      )}

      {/* Results Header */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-muted-foreground">
          {filteredDrivers.length} chauffeur
          {filteredDrivers.length > 1 ? "s" : ""} trouvé
          {filteredDrivers.length > 1 ? "s" : ""}
        </p>
        <div className="flex gap-2">
          <Button
            variant={viewMode === "card" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("card")}
            className="flex items-center gap-2"
            title="Affichage en cartes"
          >
            <Grid3X3 className="h-4 w-4" />
            Cartes
          </Button>
          <Button
            variant={viewMode === "table" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("table")}
            className="flex items-center gap-2"
            title="Affichage en tableau"
          >
            <List className="h-4 w-4" />
            Tableau
          </Button>
        </div>
      </div>

      {/* Driver Cards Grid or Table */}
      {viewMode === "card" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDrivers.map((driver) => (
            <Card key={driver.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={driver.image || "/placeholder.svg"}
                      alt={driver.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{driver.name}</CardTitle>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {driver.location}
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant={
                      driver.availability === "Disponible"
                        ? "default"
                        : "secondary"
                    }
                    className={
                      driver.availability === "Disponible"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : "bg-orange-100 text-orange-400 hover:bg-orange-100"
                    }
                  >
                    {driver.availability}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Experience and Rating */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 text-sm">
                    <Calendar className="h-4 w-4 text-black" />
                    <span>{driver.experience} ans d'expérience</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{driver.rating}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Certifications */}
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <Award className="h-4 w-4 text-black" />
                    <span className="text-sm font-medium">Certifications</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {driver.certifications.map((cert) => (
                      <Badge
                        key={cert}
                        variant="secondary"
                        className="text-xs bg-[#7a73ff6e]"
                      >
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Equipment */}
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <Truck className="h-4 w-4 text-black" />
                    <span className="text-sm font-medium">
                      Engins maîtrisés
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {driver.equipment.map((eq) => (
                      <Badge key={eq} variant="outline" className="text-xs">
                        {eq}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Rate and Actions */}
                <div className="flex justify-end items-center">
                  <div className="flex gap-2">
                    <Link to={`/driver/${driver.id}`}>
                      <Button
                        size="sm"
                        className="bg-accent text-accent-foreground hover:bg-accent/90"
                        aria-label={`Voir le profil de ${driver.name}`}
                      >
                        Voir profil
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Chauffeur
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Localisation
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Expérience
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Note
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Disponibilité
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Engins
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredDrivers.map((driver) => (
                <tr
                  key={driver.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <img
                        src={driver.image || "/placeholder.svg"}
                        alt={driver.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {driver.name}
                        </p>
                        <p className="text-xs text-gray-600">{driver.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      {driver.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {driver.experience} ans
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        {driver.rating}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge
                      variant={
                        driver.availability === "Disponible"
                          ? "default"
                          : "secondary"
                      }
                      className={
                        driver.availability === "Disponible"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : "bg-orange-100 text-orange-400 hover:bg-orange-100"
                      }
                    >
                      {driver.availability}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {driver.vehicleTypes.slice(0, 2).map((type) => (
                        <Badge key={type} variant="outline" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                      {driver.vehicleTypes.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{driver.vehicleTypes.length - 2}
                        </Badge>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/driver/${driver.id}`}>
                      <Button
                        size="sm"
                        className="bg-accent text-accent-foreground hover:bg-accent/90"
                        aria-label={`Voir le profil de ${driver.name}`}
                      >
                        Voir profil
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* No Results */}
      {filteredDrivers.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">
            <Truck className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg">Aucun chauffeur trouvé</p>
            <p className="text-sm">
              Essayez de modifier vos critères de recherche
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Driver;
