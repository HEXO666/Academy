"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Mail, Send } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".contact-animate")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-[var(--primary)]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="contact-animate animate-fade-in heading-lg text-white mb-4">Contactez-nous</h2>
          <p className="contact-animate animate-fade-in text-lg text-white/90 max-w-3xl mx-auto">
            Pour toute information complémentaire ou demande de collaboration, n'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="contact-animate animate-fade-in">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-6">Envoyez-nous un message</h3>

              <form onSubmit={handleSubmit}>
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
          </div>

          <div className="contact-animate animate-fade-in text-white">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Coordonnées</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p>Tanger, Maroc</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p>Non disponible</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p>contact@academiegastronomiemaroc.ma</p>
                  </div>
                </li>
              </ul>
            </div>


            <div>
              <h3 className="text-xl font-bold mb-4">Horaires d'ouverture</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Lundi - Vendredi:</span>
                  <span>9h00 - 17h00</span>
                </li>
                <li className="flex justify-between">
                  <span>Samedi:</span>
                  <span>9h00 - 13h00</span>
                </li>
                <li className="flex justify-between">
                  <span>Dimanche:</span>
                  <span>Fermé</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 h-64 bg-white rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13097.173345988163!2d-5.8348250499999995!3d35.75946510000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b87c05b9db6a3%3A0x7b9bfb9e3f50d18f!2sTanger%2C%20Maroc!5e0!3m2!1sfr!2sma!4v1713434372317!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
