"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage("Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.")
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("")
      }, 5000)
    }, 1500)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="/placeholder.svg?height=500&width=1920&query=moroccan office building with traditional architecture"
          alt="Contactez-nous"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Pour toute information complémentaire ou demande de collaboration
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-[var(--secondary)] p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold mb-2">Adresse</h3>
              <p>123 Avenue Mohammed V</p>
              <p>Rabat, Maroc</p>
            </div>

            <div className="bg-[var(--secondary)] p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold mb-2">Téléphone</h3>
              <p>+212 5XX XX XX XX</p>
              <p>+212 6XX XX XX XX</p>
            </div>

            <div className="bg-[var(--secondary)] p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p>contact@academiegastronomiemaroc.ma</p>
              <p>info@academiegastronomiemaroc.ma</p>
            </div>

            <div className="bg-[var(--secondary)] p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold mb-2">Horaires d'ouverture</h3>
              <p>Lundi - Vendredi: 9h00 - 17h00</p>
              <p>Samedi: 9h00 - 13h00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-12 bg-[var(--secondary)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Envoyez-nous un message</h2>
              <p className="mb-6">
                Pour toute information complémentaire, demande de collaboration ou question concernant nos activités,
                n'hésitez pas à nous contacter via le formulaire ci-dessous.
              </p>

              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="information">Demande d'information</option>
                    <option value="partnership">Proposition de partenariat</option>
                    <option value="event">Organisation d'événement</option>
                    <option value="press">Contact presse</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--primary)] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span>Envoi en cours...</span>
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>

                {submitMessage && (
                  <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md">{submitMessage}</div>
                )}
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Nous trouver</h2>
              <p className="mb-6">
                L'Académie Marocaine de Gastronomie est située au cœur de Rabat, facilement accessible en transport en
                commun ou en voiture.
              </p>

              <div className="bg-white p-2 rounded-lg shadow-md h-[400px] mb-6">
                {/* Placeholder for Google Maps iframe */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Carte Google Maps</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-4">Comment nous rejoindre</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-[var(--primary)] rounded-full p-1 mr-3 mt-1">
                      <span className="flex h-2 w-2 rounded-full bg-white"></span>
                    </div>
                    <p>En tramway : Ligne 1, arrêt "Mohammed V"</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[var(--primary)] rounded-full p-1 mr-3 mt-1">
                      <span className="flex h-2 w-2 rounded-full bg-white"></span>
                    </div>
                    <p>En bus : Lignes 8, 10 et 12, arrêt "Centre-Ville"</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[var(--primary)] rounded-full p-1 mr-3 mt-1">
                      <span className="flex h-2 w-2 rounded-full bg-white"></span>
                    </div>
                    <p>En voiture : Parking public à 100m du bâtiment</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-[var(--primary)] mb-8 text-center">Questions Fréquentes</h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-[var(--secondary)] p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Comment devenir membre de l'Académie ?</h3>
                <p>
                  L'adhésion à l'Académie Marocaine de Gastronomie se fait sur invitation ou par candidature. Les
                  candidats doivent démontrer une expertise reconnue dans le domaine de la gastronomie marocaine et être
                  parrainés par deux membres actuels. Pour plus d'informations, veuillez nous contacter directement.
                </p>
              </div>

              <div className="bg-[var(--secondary)] p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Peut-on assister aux événements de l'Académie ?</h3>
                <p>
                  Certains événements organisés par l'Académie sont ouverts au public, tandis que d'autres sont réservés
                  aux membres et invités. Les informations concernant les événements publics sont publiées sur notre
                  site web et nos réseaux sociaux.
                </p>
              </div>

              <div className="bg-[var(--secondary)] p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Comment se procurer les publications de l'Académie ?</h3>
                <p>
                  Les publications de l'Académie sont disponibles dans les principales librairies du Maroc ainsi que sur
                  notre site web. Pour les commandes internationales ou en gros, veuillez nous contacter directement.
                </p>
              </div>

              <div className="bg-[var(--secondary)] p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">L'Académie propose-t-elle des formations ou des cours ?</h3>
                <p>
                  L'Académie organise ponctuellement des masterclasses et des ateliers animés par ses membres. Ces
                  formations sont généralement destinées aux professionnels de la gastronomie, mais certaines sont
                  également ouvertes aux amateurs passionnés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
