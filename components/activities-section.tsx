"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const activities = [
  {
    id: 1,
    title: "Compétition Culinaire",
    description: "Organisation de compétitions culinaires palpitantes où des chefs passionnés s'affrontent pour créer des plats exceptionnels, célébrant l'art de la cuisine marocaine dans une ambiance dynamique et conviviale.",
    image: "/challenge.jpg",
    link: "/activites/diners",
  },
  {
    id: 2,
    title: "L'Assemblée Générale",
    description: "Organisation de l'Assemblée Générale annuelle, un événement clé réunissant les membres pour faire le point sur les actions réalisées, discuter des projets à venir et prendre des décisions stratégiques pour l'avenir de l'organisation.",
    image: "/AssembleGeneral.jpg",
    link: "/activites/evenements",
  },
  {
    id: 3,
    title: "Nouvel An Amazigh",
    description: "Célébration du Nouvel An Amazigh, une occasion de rendre hommage à la riche culture berbère à travers des traditions festives, des mets typiques et des activités culturelles, marquant le début d'une nouvelle année selon le calendrier Amazigh.",
    image: "/AmazighYear.png",
    link: "/activites/publications",
  },
]

export function ActivitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

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

    const elements = document.querySelectorAll(".activity-animate")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="activity-animate animate-fade-in heading-lg text-[var(--primary)] mb-4">Nos Activités</h2>
          <p className="activity-animate animate-fade-in text-lg max-w-3xl mx-auto">
            Découvrez les différentes activités organisées par l'Académie Marocaine de Gastronomie pour promouvoir et
            valoriser notre patrimoine culinaire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="activity-animate animate-fade-in bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image src={activity.image || "/placeholder.svg"} alt={activity.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
                <p className="mb-4">{activity.description}</p>
                {/* <Link
                  href={activity.link}
                  className="inline-flex items-center text-[var(--primary)] hover:text-[var(--accent)] font-medium transition-colors"
                >
                  En savoir plus
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link> */}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/activites" className="btn-primary inline-flex items-center activity-animate animate-fade-in">
            Toutes nos activités
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
