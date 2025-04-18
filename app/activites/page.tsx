import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const activities = [
  {
    id: 1,
    title: "Dîners Gastronomiques",
    description:
      "L'Académie organise régulièrement des dîners d'exception mettant en valeur la richesse de la gastronomie marocaine. Ces événements réunissent membres, invités et personnalités autour de menus élaborés par des chefs renommés.",
    image: "/DinnerMarocaine.png",
    link: "/activites/diners",
  },
  {
    id: 2,
    title: "Conférences & Débats",
    description:
      "Des rencontres et échanges sont organisés autour de thématiques liées à la gastronomie et au patrimoine culinaire marocain. Ces conférences permettent d'approfondir la connaissance et la réflexion sur notre culture gastronomique.",
    image: "/Conference.jpg",
    link: "/activites/evenements",
  },
  {
    id: 3,
    title: "Publications",
    description:
      "L'Académie édite des ouvrages et guides valorisant la cuisine marocaine et ses traditions. Ces publications contribuent à la documentation et à la transmission des savoirs culinaires marocains.",
    image: "/Publication.jpg",
    link: "/activites/publications",
  },
  {
    id: 4,
    title: "Concours Culinaires",
    description:
      "Pour encourager l'excellence et la créativité, l'Académie organise des concours culinaires destinés aux professionnels et aux jeunes talents. Ces compétitions mettent en valeur le savoir-faire et l'innovation dans la cuisine marocaine.",
    image: "/Cooking.jpg",
    link: "/activites/concours",
  },
  {
    id: 5,
    title: "Partenariats Internationaux",
    description:
      "L'Académie développe des collaborations avec des institutions internationales pour promouvoir la gastronomie marocaine à l'étranger et favoriser les échanges culturels culinaires.",
    image: "/Patronariat.jpg",
    link: "/activites/partenariats",
  },
  {
    id: 6,
    title: "Formation & Transmission",
    description:
      "Des ateliers et masterclasses sont proposés pour transmettre les techniques et savoirs de la cuisine marocaine traditionnelle, contribuant ainsi à la préservation de ce patrimoine immatériel.",
    image:
      "/Formation.jpg",
    link: "/activites/formation",
  },
]

export default function ActivitiesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="/Banner.png"
          alt="Activités de l'Académie Marocaine de Gastronomie"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Activités</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Découvrez les différentes activités organisées par l'Académie Marocaine de Gastronomie
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3 text-[var(--primary)]">{activity.title}</h2>
                  <p className="mb-4 text-gray-700">{activity.description}</p>
                  {/* <Link href={activity.link} className="btn-primary inline-flex items-center">
                    En savoir plus
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
