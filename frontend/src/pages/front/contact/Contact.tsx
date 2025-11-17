import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    setSubmitting(true);
    // Simulate API request — replace with real call when available
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      // Hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 900);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

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
            Contactez-nous
          </motion.h1>
          <motion.p
            className="text-xl text-secondary mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nous serons
            ravis de répondre à vos questions. Notre équipe vous répondra dans
            les 24 heures.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Cards */}
      <section className="bg-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Phone,
                title: "Téléphone",
                details: "+33 1 23 45 67 89",
                extra: "Disponible 24/7",
              },
              {
                icon: Mail,
                title: "Email",
                details: "contact@engindriver.fr",
                extra: "Réponse en 24h",
              },
              {
                icon: MapPin,
                title: "Adresse",
                details: "123 Rue du BTP",
                extra: "75001 Paris, France",
              },
              {
                icon: Clock,
                title: "Horaires",
                details: "Lun - Ven: 09:00-18:00",
                extra: "Sam - Dim: Fermé",
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  className="bg-background p-6 rounded-lg border border-border shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                  }}
                >
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-secondary text-sm">{card.details}</p>
                  <p className="text-xs text-secondary/60 mt-1">{card.extra}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Envoyez-nous un message
          </h2>
          <p className="text-secondary mb-8">
            Remplissez le formulaire ci-dessous et nous vous recontacterons dès
            que possible.
          </p>

          {success && (
            <motion.div
              className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-green-900">
                  Message envoyé !
                </h4>
                <p className="text-sm text-green-800">
                  Merci de nous avoir contactés. Nous vous répondrons dès que
                  possible.
                </p>
              </div>
            </motion.div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Votre nom"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="votre@email.com"
                  required
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <label className="block text-sm font-medium text-foreground mb-2">
                Sujet *
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Objet de votre message"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label className="block text-sm font-medium text-foreground mb-2">
                Message *
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                rows={7}
                placeholder="Votre message..."
                required
              />
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <button
                type="submit"
                disabled={submitting}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                    Envoi...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Envoyer
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all duration-200"
              >
                Réinitialiser
              </button>
            </motion.div>
          </form>

          <p className="text-xs text-secondary/60 mt-6">
            * Champs obligatoires
          </p>
        </motion.div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="bg-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-2xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Questions fréquentes
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                question: "Quel est le délai de réponse ?",
                answer:
                  "Nous répondons généralement dans les 24 heures. Pour les urgences, appelez le numéro ci-dessus.",
              },
              {
                question: "Comment modifier ma commande ?",
                answer:
                  "Contactez notre support immédiatement. Les modifications sont possibles jusqu'à 24h avant la mission.",
              },
              {
                question: "Avez-vous des partenaires locaux ?",
                answer:
                  "Oui ! Nous travaillons avec des entreprises partenaires. Contactez-nous pour en savoir plus.",
              },
              {
                question: "Comment devenir chauffeur ?",
                answer:
                  "Visitez notre page recrutement ou appelez-nous. Nous recherchons des chauffeurs qualifiés en continu.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                className="bg-background p-6 rounded-lg border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                }}
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-secondary text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
