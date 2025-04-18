import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronRight } from "lucide-react"

const publications = [
  {
    id: 1,
    title: "Trésors de la Cuisine Marocaine",
    date: "2023",
    type: "Livre",
    description:
      "Un ouvrage de référence qui recense les recettes traditionnelles des différentes régions du Maroc, accompagné d'explications historiques et culturelles.",
    image: "/placeholder.svg?height=400&width=300&query=moroccan cookbook cover with traditional patterns",
  },
  {
    id: 2,
    title: "Les Épices du Maroc",
    date: "2022",
    type: "Guide",
    description:
      "Un guide complet sur les épices utilisées dans la cuisine marocaine, leur origine, leurs propriétés et leurs utilisations traditionnelles.",
    image: "/placeholder.svg?height=400&width=300&query=moroccan spices guide book cover",
  },
  {
    id: 3,
    title: "Patrimoine Culinaire Marocain",
    date: "2021",
    type: "Revue Annuelle",
    description:
      "La revue annuelle de l'Académie qui présente les recherches et études menées sur le patrimoine culinaire marocain au cours de l'année.",
    image: "/placeholder.svg?height=400&width=300&query=moroccan culinary heritage journal cover",
  },
  {
    id: 4,
    title: "Pâtisseries Marocaines : Traditions et Secrets",
    date: "2020",
    type: "Livre",
    description:
      "Un ouvrage dédié aux pâtisseries traditionnelles marocaines, leurs techniques de préparation et l'histoire de ces douceurs emblématiques.",
    image: "/placeholder.svg?height=400&width=300&query=moroccan pastry cookbook cover",
  },
  {
    id: 5,
    title: "Les Produits du Terroir Marocain",
    date: "2019",
    type: "Guide",
    description:
      "Un guide qui recense les produits d'excellence du terroir marocain, leurs spécificités régionales et leurs utilisations en cuisine.",
    image: "/placeholder.svg?height=400&width=300&query=moroccan local products guide cover",
  },
  {
    id: 6,
    title: "La Route des Saveurs Marocaines",
    date: "2018",
    type: "Livre",
    description:
      "Un voyage culinaire à travers les différentes régions du Maroc, présentant les spécialités locales et les traditions gastronomiques.",
    image: "/placeholder.svg?height=400&width=300&query=moroccan culinary journey book cover",
  },
]

export default function PublicationsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="/placeholder.svg?height=500&width=1920&query=moroccan culinary books and publications display"
          alt="Publications de l'Académie"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Découvrez les ouvrages et publications de l'Académie Marocaine de Gastronomie
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Nos Publications</h2>
            <p className="text-lg mb-4">
              L'Académie Marocaine de Gastronomie édite régulièrement des ouvrages, guides et revues valorisant la
              cuisine marocaine et ses traditions.
            </p>
            <p>
              Ces publications contribuent à la documentation et à la transmission des savoirs culinaires marocains,
              tout en mettant en lumière la richesse et la diversité de notre patrimoine gastronomique.
            </p>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-12 bg-[var(--secondary)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((publication) => (
              <div
                key={publication.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-80 mx-auto p-4">
                  <Image
                    src={publication.image || "/placeholder.svg"}
                    alt={publication.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{publication.title}</h3>
                    <span className="bg-[var(--primary)] text-white text-xs px-2 py-1 rounded">{publication.type}</span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{publication.date}</span>
                  </div>

                  <p className="text-gray-700 mb-4 flex-1">{publication.description}</p>

                  <div className="mt-auto flex justify-between items-center">
                    <Link
                      href="#"
                      className="inline-flex items-center text-[var(--primary)] hover:text-[var(--accent)] font-medium transition-colors"
                    >
                      En savoir plus
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>

                    <Link href="#" className="btn-secondary text-sm py-2">
                      Commander
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-8 text-center">Articles et Contributions</h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="border-l-4 border-[var(--primary)] pl-4 py-2">
                <h3 className="font-bold text-lg">La Préservation des Techniques Traditionnelles de Cuisson</h3>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>Décembre 2023</span>
                  <span className="mx-2">•</span>
                  <span>Revue Gastronomie Internationale</span>
                </div>
                <p className="mt-2 text-gray-700">
                  Article sur l'importance de préserver les méthodes de cuisson traditionnelles marocaines face à la
                  modernisation des cuisines.
                </p>
              </div>

              <div className="border-l-4 border-[var(--primary)] pl-4 py-2">
                <h3 className="font-bold text-lg">L'Influence Andalouse dans la Pâtisserie Marocaine</h3>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>Octobre 2023</span>
                  <span className="mx-2">•</span>
                  <span>Journal des Arts Culinaires</span>
                </div>
                <p className="mt-2 text-gray-700">
                  Étude sur les origines andalouses de nombreuses pâtisseries marocaines et leur évolution au fil des
                  siècles.
                </p>
              </div>

              <div className="border-l-4 border-[var(--primary)] pl-4 py-2">
                <h3 className="font-bold text-lg">
                  Le Rôle des Femmes dans la Transmission du Savoir Culinaire Marocain
                </h3>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>Juillet 2023</span>
                  <span className="mx-2">•</span>
                  <span>Revue d'Anthropologie Culinaire</span>
                </div>
                <p className="mt-2 text-gray-700">
                  Contribution sur l'importance des femmes dans la préservation et la transmission des recettes et
                  techniques traditionnelles.
                </p>
              </div>

              <div className="border-l-4 border-[var(--primary)] pl-4 py-2">
                <h3 className="font-bold text-lg">Les Défis de la Documentation des Recettes Orales</h3>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>Mai 2023</span>
                  <span className="mx-2">•</span>
                  <span>Cahiers du Patrimoine Immatériel</span>
                </div>
                <p className="mt-2 text-gray-700">
                  Article sur les méthodologies et défis liés à la documentation des recettes transmises oralement de
                  génération en génération.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="#" className="btn-secondary inline-flex items-center">
                Voir toutes les contributions
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-[var(--primary)] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Restez Informé</h2>
            <p className="mb-8">
              Abonnez-vous à notre newsletter pour être informé des nouvelles publications de l'Académie Marocaine de
              Gastronomie.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="px-4 py-3 rounded-md text-foreground flex-1 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                required
              />
              <button
                type="submit"
                className="bg-[var(--accent)] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
