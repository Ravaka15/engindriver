import { CheckCircle2, Award, Users, Lightbulb, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            À propos d'EnginDriver
          </motion.h1>
          <motion.p
            className="text-xl text-secondary mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Notre mission
                  </h2>
                  <p className="text-secondary leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Notre vision
                  </h2>
                  <p className="text-secondary leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas malesuada. Praesent congue erat at massa. Sed
                    cursus turpis vitae tortor. Donec ac lorem sed lorem.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nos valeurs
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: CheckCircle2,
              title: "Fiabilité",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nous garantissons la qualité.",
            },
            {
              icon: Users,
              title: "Transparence",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Communication claire.",
            },
            {
              icon: Award,
              title: "Excellence",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nous visons le meilleur.",
            },
          ].map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={i}
                className="p-8 bg-background rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow text-center"
                custom={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.6,
                }}
              >
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-secondary">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Notre équipe
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                initials: "AR",
                name: "A. Randria",
                role: "CEO & Fondateur",
                description: "Passionné par la logistique",
              },
              {
                initials: "RK",
                name: "R. Koto",
                role: "Directeur Opérations",
                description: "Expert en gestion",
              },
              {
                initials: "LM",
                name: "L. Marie",
                role: "Responsable Support",
                description: "Dévouée au service",
              },
              {
                initials: "SB",
                name: "S. Bernard",
                role: "Tech Lead",
                description: "Innove en permanence",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                className="bg-background p-6 rounded-lg border border-border text-center hover:shadow-md transition-shadow group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center font-semibold text-primary mb-4 text-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {member.initials}
                </motion.div>
                <div className="font-semibold text-foreground mb-1">
                  {member.name}
                </div>
                <div className="text-sm text-secondary mb-3">{member.role}</div>
                <p className="text-xs text-secondary/70">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Siege Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Notre siège social
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">
                  Adresse
                </h3>
                <p className="text-secondary">
                  123 Rue du BTP, 75001 Paris, France
                </p>
              </div>
            </div>
            <div className="space-y-4 text-secondary">
              <div>
                <p className="font-medium text-foreground mb-1">Téléphone</p>
                <p>+33 1 23 45 67 89</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Email</p>
                <p>contact@engindriver.fr</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Horaires</p>
                <p>Lun - Ven: 09:00 - 18:00</p>
                <p>Sam - Dim: Fermé</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full h-80 rounded-lg overflow-hidden shadow-lg border border-border"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="Localisation du siège social EnginDriver - Paris"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9991404323377!2d2.3522219!3d48.8566136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2s75001%20Paris!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Timeline / History */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Notre histoire
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {[
              {
                year: "2020",
                title: "Création d'EnginDriver",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                year: "2021",
                title: "Premiers 100 chauffeurs",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                year: "2023",
                title: "500+ chauffeurs certifiés",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                year: "2025",
                title: "Expansion nationale",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                isLast: true,
              },
            ].map((milestone, i) => (
              <motion.div
                key={i}
                className="flex gap-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                }}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className={`h-12 w-12 rounded-full flex items-center justify-center font-semibold ${
                      milestone.isLast
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/20 text-primary"
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {milestone.year}
                  </motion.div>
                  {!milestone.isLast && (
                    <div className="w-1 h-16 bg-primary/20 mt-4"></div>
                  )}
                </div>
                <motion.div
                  className="pb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                >
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-secondary">{milestone.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
