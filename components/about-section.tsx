"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function AboutSection() {
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

    const elements = document.querySelectorAll(".about-animate")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-[var(--secondary)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="about-animate animate-fade-in heading-lg text-[var(--primary)] mb-6">
              L'Académie Marocaine de Gastronomie
            </h2>
            <p className="about-animate animate-fade-in text-lg mb-6">
              Fondée en 2022, l'Académie Marocaine de Gastronomie est une association à but non lucratif qui a pour
              mission de promouvoir la gastronomie marocaine, de préserver son patrimoine culinaire et de contribuer à
              son rayonnement international.
            </p>
            <p className="about-animate animate-fade-in mb-8">
              Composée de personnalités passionnées par l'art culinaire marocain, l'Académie œuvre à la valorisation des
              produits du terroir, à la transmission des savoirs et à la reconnaissance de l'excellence gastronomique
              marocaine.
            </p>
            <div className="about-animate animate-fade-in flex flex-wrap gap-4">
              <Link href="/academie/qui-sommes-nous" className="btn-primary flex items-center">
                En savoir plus
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/academie/nos-membres" className="btn-secondary flex items-center">
                Nos membres
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/Team.jpeg"
                alt="Académie Marocaine de Gastronomie"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--accent)] rounded-full flex items-center justify-center text-white font-bold text-xl p-4 shadow-lg about-animate animate-fade-in">
              Depuis 2022
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-2 transition-transform duration-300 about-animate animate-fade-in">
            <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mb-4">
              <svg fill="#ffffff" width="64px" height="64px" viewBox="-5.76 -5.76 43.52 43.52" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>save</title> <path d="M30.48 13.243l-8.485 8.485-8.484-8.485 2.83-2.828 3.659 3.656v-6.071h-12v20h-4v-24h20v10.071l3.654-3.657 2.826 2.829z"></path> </g></svg>              
            </div>
            <h3 className="text-xl font-bold mb-3">Préserver</h3>
            <p>Sauvegarder le patrimoine culinaire marocain et ses traditions ancestrales.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-2 transition-transform duration-300 about-animate animate-fade-in">
            <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mb-4">
              <svg width="64px" height="64px" viewBox="-71.68 -71.68 655.36 655.36" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M256 29.816l-231 154v106.368l231-154 231 154V183.816zm0 128.043L105 259.783v90.283l151-101.925 151 101.925v-90.283zm0 112l-87 58.725v67.6l87-58 87 58v-67.6zm0 89.957l-87 58v64.368l87-58 87 58v-64.368z"></path></g></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Promouvoir</h3>
            <p>Faire rayonner la gastronomie marocaine à l'échelle nationale et internationale.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-2 transition-transform duration-300 about-animate animate-fade-in">
            <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mb-4">
            <svg width="64px" height="64px" viewBox="-8.96 -8.96 81.92 81.92" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#ffffff" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><line x1="50.4" y1="24.38" x2="58.3" y2="23.14"></line><line x1="47.93" y1="17.11" x2="52.87" y2="14.2"></line><line x1="42.89" y1="11.73" x2="46.21" y2="4.51"></line><line x1="33.45" y1="10.69" x2="33.41" y2="4.96"></line><line x1="24.29" y1="12.09" x2="21.62" y2="4.51"></line><line x1="17.99" y1="17.03" x2="12.96" y2="14.29"></line><line x1="15.78" y1="23.97" x2="8.03" y2="22.66"></line><path d="M26.22,45.47c0-5.16-3.19-9.49-4.91-12.69A12.24,12.24,0,0,1,19.85,27c0-6.79,6.21-12.3,13-12.3"></path><path d="M39.48,45.47c0-5.16,3.19-9.49,4.91-12.69A12.24,12.24,0,0,0,45.85,27c0-6.79-6.21-12.3-13-12.3"></path><rect x="23.63" y="45.19" width="18.93" height="4.25" rx="2.12"></rect><rect x="24.79" y="49.43" width="16.61" height="4.25" rx="2.12"></rect><path d="M36.32,53.68v.84a3.23,3.23,0,1,1-6.44,0v-.84"></path><path d="M24.57,26.25a7.5,7.5,0,0,1,7.88-7.11"></path></g></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Innover</h3>
            <p>Encourager la créativité et l'innovation dans la cuisine marocaine contemporaine.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
