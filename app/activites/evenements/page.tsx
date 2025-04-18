import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, ChevronRight } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Conférence sur les Épices Marocaines",
    date: "15 juin 2024",
    location: "Palais des Congrès, Marrakech",
    description:
      "Une journée dédiée à la découverte des épices marocaines, leur histoire, leurs utilisations traditionnelles et leurs bienfaits pour la santé.",
    image: "/placeholder.svg?height=400&width=600&query=moroccan spices display at conference",
  },
  {
    id: 2,
    title: "Symposium sur la Cuisine Berbère",
    date: "22-23 juillet 2024",
    location: "Centre Culturel, Agadir",
    description:
      "Deux jours d'échanges et de démonstrations autour des traditions culinaires berbères, avec la participation de chefs et d'historiens spécialisés.",
    image: "/placeholder.svg?height=400&width=600&query=berber cuisine symposium with traditional dishes",
  },
  {
    id: 3,
    title: "Forum International de la Gastronomie Marocaine",
    date: "10-12 septembre 2024",
    location: "Megarama, Casablanca",
    description:
      "Le rendez-vous annuel des professionnels et passionnés de la gastronomie marocaine, avec conférences, ateliers et dégustations.",
    image: "/placeholder.svg?height=400&width=600&query=international moroccan gastronomy forum with chefs",
  },
  {
    id: 4,
    title: "Débat : Tradition et Innovation en Cuisine Marocaine",
    date: "5 octobre 2024",
    location: "Institut Français, Rabat",
    description:
      "Une table ronde réunissant chefs traditionnels et innovants pour discuter de l'évolution de la cuisine marocaine contemporaine.",
    image: "/placeholder.svg?height=400&width=600&query=moroccan chefs debate on traditional vs modern cuisine",
  },
  {
    id: 5,
    title: "Journée d'Étude sur les Pâtisseries Marocaines",
    date: "18 novembre 2024",
    location: "École Hôtelière, Fès",
    description:
      "Une journée consacrée aux pâtisseries traditionnelles marocaines, leur histoire, leurs techniques et leurs variations régionales.",
    image: "/placeholder.svg?height=400&width=600&query=moroccan pastries study day with displays",
  },
  {
    id: 6,
    title: "Conférence : Les Routes des Épices et la Cuisine Marocaine",
    date: "8 décembre 2024",
    location: "Musée Mohammed VI, Rabat",
    description:
      "Une exploration historique de l'influence des routes commerciales sur le développement de la cuisine marocaine à travers les siècles.",
    image: "/placeholder.svg?height=400&width=600&query=spice routes conference with historical maps and moroccan food",
  },
]

export default function EvenementsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="/placeholder.svg?height=500&width=1920&query=moroccan gastronomy conference with audience"
          alt="Événements de l'Académie"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Événements</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Conférences, débats et rencontres organisés par l'Académie Marocaine de Gastronomie
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Nos Événements</h2>
            <p className="text-lg mb-4">
              L'Académie Marocaine de Gastronomie organise régulièrement des conférences, débats et rencontres autour de
              la gastronomie marocaine et de son patrimoine culinaire.
            </p>
            <p>
              Ces événements réunissent experts, professionnels et passionnés pour échanger, apprendre et célébrer la
              richesse de notre culture gastronomique.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 bg-[var(--secondary)]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-8 text-center">Événements à Venir</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>

                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>

                  <p className="text-gray-700 mb-4 flex-1">{event.description}</p>

                  <Link
                    href="#"
                    className="mt-auto inline-flex items-center text-[var(--primary)] hover:text-[var(--accent)] font-medium transition-colors"
                  >
                    Plus de détails
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-8 text-center">Événements Passés</h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="border-l-4 border-[var(--primary)] pl-4 py-2">
                <h3 className="font-bold text-lg">Conférence sur l'Avenir de la Gastronomie Marocaine</h3>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>18 septembre 2023</span>
                  <span className="mx-2">•</span>
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>Institut Français, Rabat</span>
                </div>
                <p className="mt-2 text-gray-700">
                  Une journée d'échanges et de débats sur les enjeux et perspectives de la gastronomie marocaine
                  contemporaine.
                </p>
              </div>

              <div className="border-l-4 border-[var(--primary)] pl-4 py-2">
                <h3 className="font-bold text-lg">Symposium sur les Traditions Culinaires du Ramadan</h3>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>15 mars 2023</span>
                  <span className="mx-2">•</span>
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>Palais des Congrès, Marrakech</span>
                </div>
                <p className="mt-2 text-gray-700">
                  Un événement dédié aux traditions culinaires spécifiques au mois sacré du Ramadan dans les différentes
                  régions du Maroc.
                </p>
              </div>

              <div className="border-l-4 border-[var(--primary)] pl-4 py-2">
                <h3 className="font-bold text-lg">Conférence : L'Huile d'Argan dans la Cuisine Marocaine</h3>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>22 novembre 2022</span>
                  <span className="mx-2">•</span>
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>Université Mohammed V, Rabat</span>
                </div>
                <p className="mt-2 text-gray-700">
                  Une exploration des utilisations traditionnelles et modernes de l'huile d'argan dans la gastronomie
                  marocaine.
                </p>
              </div>

              <div className="border-l-4 border-[var(--primary)] pl-4 py-2">
                <h3 className="font-bold text-lg">Forum sur le Patrimoine Culinaire Marocain</h3>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>5-7 octobre 2022</span>
                  <span className="mx-2">•</span>
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>Megarama, Casablanca</span>
                </div>
                <p className="mt-2 text-gray-700">
                  Trois jours de conférences et d'ateliers sur la préservation et la valorisation du patrimoine
                  culinaire marocain.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="#" className="btn-secondary inline-flex items-center">
                Voir tous les événements passés
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
