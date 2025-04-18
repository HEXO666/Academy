"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const partners = [
  {
    id: 1,
    name: "Ministère du Tourisme",
    logo: "/ummai.jpg",
  },
  {
    id: 2,
    name: "Office National Marocain du Tourisme",
    logo: "/images.png",
  },
  {
    id: 3,
    name: "Fédération Nationale de l'Industrie Hôtelière",
    logo: "/SMIT.jpg",
  },
  {
    id: 4,
    name: "Confédération Nationale du Tourisme",
    logo: "/OFPPT_Logo.png",
  },
  {
    id: 5,
    name: "Association des Chefs Marocains",
    logo: "/partenaire1.png",
  },
  {
    id: 6,
    name: "Académie Internationale de la Gastronomie",
    logo: "/isitt.png",
  },
]

export function PartnersSection() {
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

    const elements = document.querySelectorAll(".partner-animate")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="partner-animate animate-fade-in heading-lg text-[var(--primary)] mb-4">Nos Partenaires</h2>
          <p className="partner-animate animate-fade-in text-lg max-w-3xl mx-auto">
            L'Académie Marocaine de Gastronomie collabore avec des institutions et organisations prestigieuses pour
            promouvoir la gastronomie marocaine.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="partner-animate animate-fade-in flex items-center justify-center p-4 bg-[var(--secondary)] rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={150}
                height={80}
                className="max-h-20 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
