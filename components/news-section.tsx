"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronRight } from "lucide-react"

const news = [
  {
    id: 1,
    title: "Grand dîner annuel de l'Académie Marocaine de Gastronomie",
    excerpt:
      "L'Académie a organisé son dîner  au Palais Zahia, à l'occasion du nouvel an Amazigh.",
    content:
      "Le 15 novembre dernier, l'Académie Marocaine de Gastronomie a tenu son traditionnel dîner annuel dans le cadre somptueux du Palais Soleiman à Marrakech. Cet événement prestigieux a réuni plus de 150 convives, dont les membres de l'Académie, des chefs renommés, des personnalités du monde de la culture et des représentants institutionnels.\n\nLe menu, élaboré par le chef étoilé Youssef Benjelloun, membre de l'Académie, proposait une réinterprétation raffinée des classiques de la cuisine marocaine. Parmi les plats servis figuraient une pastilla de pigeon aux amandes caramélisées, un tajine d'agneau aux coings et aux épices rares, ainsi qu'une sélection de pâtisseries traditionnelles revisitées.\n\nLors de cette soirée, le président de l'Académie, Mohammed Alaoui, a présenté les projets réalisés au cours de l'année écoulée et a annoncé les initiatives à venir pour 2024, notamment un programme de documentation des recettes en voie de disparition dans les régions rurales du Maroc.",
    date: " 22 janvier 2023 ",
    image: "/Moroccan-Food.jpg",
    category: "Événements",
  },

  {
    id: 3,
    title: "Conférence sur l'avenir de la gastronomie marocaine",
    excerpt:
      "Une journée d'échanges et de débats sur les enjeux et perspectives de la gastronomie marocaine contemporaine.",
    content:
      "Le 18 septembre dernier, l'Académie Marocaine de Gastronomie a organisé une conférence intitulée \"Gastronomie Marocaine : Tradition et Innovation\" à l'Institut Français de Rabat. Cet événement a réuni plus de 200 participants, dont des chefs, des chercheurs, des producteurs et des passionnés de cuisine marocaine.\n\nLa journée a été structurée autour de trois tables rondes thématiques. La première, consacrée à la préservation du patrimoine culinaire, a mis en lumière l'importance de documenter les recettes traditionnelles et les techniques ancestrales. La deuxième table ronde a abordé la question de l'innovation en cuisine marocaine, avec des interventions de chefs qui réinterprètent les classiques avec une approche contemporaine. Enfin, la troisième session a exploré les enjeux de la formation et de la transmission aux nouvelles générations.\n\nParmi les intervenants figuraient des personnalités reconnues comme Fatima Bennani, vice-présidente de l'Académie, le chef étoilé Youssef Benjelloun, et l'historienne de la gastronomie Nadia Chaoui. Des démonstrations culinaires et des dégustations ont ponctué cette journée riche en échanges et en réflexions sur l'avenir de notre patrimoine gastronomique.",
    date: "18 septembre 2023",
    image: "/Conference.jpg",
    category: "Événements",
  },

  {
    id: 5,
    title: "Lancement du programme de documentation des recettes traditionnelles",
    excerpt:
      "L'Académie initie un vaste projet de collecte et de documentation des recettes traditionnelles en voie de disparition.",
    content:
      "L'Académie Marocaine de Gastronomie a officiellement lancé le 15 mars 2023 son programme de documentation des recettes traditionnelles marocaines en voie de disparition. Ce projet ambitieux, qui s'étendra sur trois ans, vise à préserver le patrimoine culinaire des différentes régions du Maroc en recueillant les recettes et techniques qui risquent de se perdre avec le temps.\n\nUne équipe composée d'ethnologues, de nutritionnistes et de chefs sillonnera le pays pour rencontrer les détenteurs de ce savoir, principalement des femmes âgées en milieu rural. Les recettes seront documentées sous forme écrite, photographique et vidéo, avec une attention particulière portée aux gestes techniques et aux ingrédients spécifiques utilisés.\n\nCe programme bénéficie du soutien du Ministère de la Culture et de plusieurs fondations privées. Les données recueillies seront archivées dans une base de données numérique accessible au public et feront l'objet d'une publication en plusieurs volumes.\n\n\"Il s'agit d'une course contre la montre pour sauvegarder ces trésors culinaires avant qu'ils ne disparaissent avec leurs détenteurs\", a déclaré Mohammed Alaoui, président de l'Académie, lors de la conférence de presse de lancement du projet.",
    date: "15 mars 2023",
    image: "/Couverture.jpeg",
    category: "Projets",
  },
  {
    id: 6,
    title: "À la découverte du meilleur tajine lors d'un concours organisé à Tanger",
    excerpt:
      "A la découverte du meilleur tajine lors d'un concours organisé à Tanger : découverte de talents et enrichissement de la culture et des traditions culinaires marocaines.",
    content:
      "Dans une belle initiative alliant passion pour les arts culinaires et compétition amicale, et à l'occasion du Nouvel An Amazigh, la Fondation Académie Marocaine des Arts Culinaires, en partenariat avec l'Association Tamunt pour le Patrimoine et la Culture Amazigh, a organisé un concours du meilleur tajine du Royaume du Maroc. La compétition s'est déroulée dimanche 12 janvier au Palais Ezzahia dans la vieille ville de Tanger.",
    date: "15 mars 2023",
    image: "/meilleurTajine.jpg",
    category: "Projets",
  },

]

export function NewsSection() {
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

    const elements = document.querySelectorAll(".news-animate")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-[var(--secondary)]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="news-animate animate-fade-in heading-lg text-[var(--primary)] mb-4">Actualités</h2>
            <p className="news-animate animate-fade-in text-lg max-w-2xl">
              Restez informés des dernières actualités et événements de l'Académie Marocaine de Gastronomie.
            </p>
          </div>
          <Link
            href="/actualites"
            className="news-animate animate-fade-in mt-4 md:mt-0 btn-secondary inline-flex items-center"
          >
            Toutes les actualités
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item) => (
            <div
              key={item.id}
              className="news-animate animate-fade-in bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* <Link href={item.link} className="block"> */}
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-3">{item.excerpt}</p>
                  <span className="inline-flex items-center text-[var(--primary)] hover:text-[var(--accent)] font-medium text-sm transition-colors">
                    
                   
                  </span>
                </div>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
