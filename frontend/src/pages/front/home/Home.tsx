import { NavLink } from "react-router-dom";
import { Truck, Users, Calendar, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const featureCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="flex-1"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-4 text-sm font-medium text-primary"
              variants={itemVariants}
            >
              <Zap className="h-4 w-4" />
              La solution transport simplifiée
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight"
              variants={itemVariants}
            >
              Trouvez les meilleurs chauffeurs d'engin
            </motion.h1>
            <motion.p
              className="text-lg text-secondary mb-8 leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Simple,
              rapide et fiable.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <NavLink
                to="/driver"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 gap-2"
              >
                Voir les chauffeurs
                <ArrowRight className="h-4 w-4" />
              </NavLink>
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all duration-200"
              >
                Contactez-nous
              </NavLink>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-full h-80 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 rounded-2xl flex items-center justify-center text-secondary shadow-lg">
              <div className="text-center">
                <Truck className="h-24 w-24 mx-auto text-primary/40 mb-4" />
                <p>Illustration (placeholder)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/5 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Truck,
              title: "Flotte fiable",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus.",
            },
            {
              icon: Users,
              title: "Chauffeurs certifiés",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.",
            },
            {
              icon: Calendar,
              title: "Disponibilité 24/7",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            },
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                className="p-8 bg-background rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={featureCardVariants}
              >
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "500+", label: "Chauffeurs vérifiés" },
            { number: "2000+", label: "Missions réussies" },
            { number: "98%", label: "Satisfaction client" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={statVariants}
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <p className="text-secondary font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ce que nos clients pensent
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. EnginDriver a rendu notre logistique simple et fiable.",
                author: "Jean Dupont",
                role: "Responsable logistique",
                initials: "JD",
              },
              {
                text: "Service impeccable ! Équipe réactive et professionnelle. Nous recommandons vivement EnginDriver.",
                author: "Marie Caron",
                role: "Directrice projet BTP",
                initials: "MC",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-background p-8 rounded-lg border border-border shadow-sm"
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="text-yellow-400">
                      ★
                    </div>
                  ))}
                </div>
                <p className="text-secondary mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-secondary">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 text-center border border-primary/20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Prêt à commencer ?
          </motion.h2>
          <motion.p
            className="text-lg text-secondary mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Rejoignez les centaines de entreprises qui font confiance à
            EnginDriver pour leurs besoins en transport d'engins.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 gap-2"
            >
              Démarrez gratuitement
              <ArrowRight className="h-4 w-4" />
            </NavLink>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
