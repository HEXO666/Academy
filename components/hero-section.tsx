"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

const slides = [
  {
    id: 3,
    image: "/Moroccan-Feast.png",
    title: "Promouvoir l'Excellence",
    subtitle: "Célébrer la richesse de notre gastronomie",
    cta: "Nos événements",
    link: "/activites/evenements",
  },
  {
    id: 1,
    image: "/moroccan-feast.png",
    title: "L'Art Culinaire Marocain",
    subtitle: "Une tradition millénaire reconnue mondialement",
    cta: "Découvrir notre mission",
    link: "/academie/qui-sommes-nous",
  },
  {
    id: 2,
    image: "/tagine-trio.png",
    title: "Préserver Notre Patrimoine",
    subtitle: "Transmettre les savoirs et techniques culinaires",
    cta: "Voir nos activités",
    link: "/activites",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Animation for text elements when slide changes
    const animateElements = document.querySelectorAll(".animate-fade-in")
    animateElements.forEach((el) => {
      el.classList.remove("appear")
      setTimeout(() => {
        el.classList.add("appear")
      }, 100)
    })
  }, [currentSlide])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {slides[currentSlide].title}
            </h1>
            <p className="animate-fade-in text-xl md:text-2xl text-white/90 mb-8">{slides[currentSlide].subtitle}</p>
            <a
              href={slides[currentSlide].link}
              className="animate-fade-in inline-flex items-center bg-[var(--accent)] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300"
            >
              {slides[currentSlide].cta}
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-[var(--accent)] w-10" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
