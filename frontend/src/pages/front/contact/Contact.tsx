import React, { useState } from "react";
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
            <div className="bg-background p-6 rounded-lg border border-border shadow-sm">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
              <p className="text-secondary text-sm">+33 1 23 45 67 89</p>
              <p className="text-xs text-secondary/60 mt-1">Disponible 24/7</p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border shadow-sm">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-secondary text-sm">contact@engindriver.fr</p>
              <p className="text-xs text-secondary/60 mt-1">Réponse en 24h</p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border shadow-sm">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Adresse</h3>
              <p className="text-secondary text-sm">123 Rue du BTP</p>
              <p className="text-secondary text-sm">75001 Paris, France</p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border shadow-sm">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Horaires</h3>
              <p className="text-secondary text-sm">Lun - Ven: 09:00-18:00</p>
              <p className="text-secondary text-sm">Sam - Dim: Fermé</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Envoyez-nous un message
          </h2>
          <p className="text-secondary mb-8">
            Remplissez le formulaire ci-dessous et nous vous recontacterons dès
            que possible.
          </p>

          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 animate-in fade-in">
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
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
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
              </div>

              <div>
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
              </div>
            </div>

            <div>
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
            </div>

            <div>
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
            </div>

            <div className="flex items-center gap-3">
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
            </div>
          </form>

          <p className="text-xs text-secondary/60 mt-6">
            * Champs obligatoires
          </p>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="bg-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">
            Questions fréquentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                Quel est le délai de réponse ?
              </h3>
              <p className="text-secondary text-sm">
                Nous répondons généralement dans les 24 heures. Pour les
                urgences, appelez le numéro ci-dessus.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                Comment modifier ma commande ?
              </h3>
              <p className="text-secondary text-sm">
                Contactez notre support immédiatement. Les modifications sont
                possibles jusqu'à 24h avant la mission.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                Avez-vous des partenaires locaux ?
              </h3>
              <p className="text-secondary text-sm">
                Oui ! Nous travaillons avec des entreprises partenaires.
                Contactez-nous pour en savoir plus.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                Comment devenir chauffeur ?
              </h3>
              <p className="text-secondary text-sm">
                Visitez notre page recrutement ou appelez-nous. Nous recherchons
                des chauffeurs qualifiés en continu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
