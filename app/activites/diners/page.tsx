import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, ChevronRight } from "lucide-react"

const dinners = [
  {
    id: 1,
    title: "Grand Dîner Annuel de l'Académie",
    date: "25 novembre 2024",
    location: "Palais Zahia, Tanger",
    description:
      "Le dîner de gala annuel de l'Académie réunira membres et invités d'honneur autour d'un menu d'exception célébrant les saveurs traditionnelles marocaines.",
    image: "/placeholder.svg?height=400&width=600&query=elegant moroccan gala dinner setting",
  },
  {
    id: 2,
    title: "Dîner Thématique : Palais Zahia",
    date: "18 juillet 2024",
    location: "Palais Zahia, Tanger",
    description:
      "Une soirée dédiée à la découverte des spécialités culinaires de la région du Moyen Atlas, préparées par des chefs originaires de cette région.",
    image: "/placeholder.svg?height=400&width=600&query=middle atlas moroccan cuisine dinner",
  },
  {
    id: 3,
    title: "Dîner des Chefs Étoilés",
    date: "22 septembre 2024",
    location: "La Mamounia, Marrakech",
    description:
      "Un dîner exceptionnel où des chefs étoilés marocains et internationaux réinterprètent les classiques de la cuisine marocaine avec une touche contemporaine.",
    image: "/placeholder.svg?height=400&width=600&query=starred chefs moroccan fusion dinner",
  },
  {
    id: 4,
    title: "Dîner Caritatif : Préservation du Patrimoine Culinaire",
    date: "10 octobre 2024",
    location: "Royal Mansour, Rabat",
    description:
      "Un dîner de bienfaisance dont les bénéfices seront reversés à des projets de documentation et de préservation des recettes traditionnelles en voie de disparition.",
    image: "/placeholder.svg?height=400&width=600&query=charity dinner for moroccan culinary heritage",
  },
]

export default function DinersPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="/placeholder.svg?height=500&width=1920&query=elegant moroccan dinner with traditional setting"
          alt="Dîners de l'Académie"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dîners Gastronomiques</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Des expériences culinaires d'exception organisées par l'Académie Marocaine de Gastronomie
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Nos Dîners</h2>
            <p className="text-lg mb-4">
              L'Académie Marocaine de Gastronomie organise régulièrement des dîners d'exception mettant en valeur la
              richesse de la gastronomie marocaine.
            </p>
            <p>
              Ces événements culinaires réunissent membres, invités et personnalités autour de menus élaborés par des
              chefs renommés, célébrant ainsi l'excellence de notre patrimoine gastronomique.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Dinners */}
      <section className="py-12 bg-[var(--secondary)]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-8 text-center">Dîners à Venir</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dinners.map((dinner) => (
              <div
                key={dinner.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64">
                  <Image src={dinner.image || "/placeholder.svg"} alt={dinner.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{dinner.title}</h3>

                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{dinner.date}</span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{dinner.location}</span>
                  </div>

                  <p className="text-gray-700 mb-4 flex-1">{dinner.description}</p>

                  <div className="mt-auto flex justify-between items-center">
                    <Link
                      href="#"
                      className="inline-flex items-center text-[var(--primary)] hover:text-[var(--accent)] font-medium transition-colors"
                    >
                      Plus de détails
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>

                    <Link href="#" className="btn-primary text-sm py-2">
                      Réserver
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Dinners Gallery */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-8 text-center">Galerie des Dîners Passés</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300&query=moroccan gala dinner 2023"
                alt="Dîner de Gala 2023"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300&query=moroccan seafood dinner event"
                alt="Dîner des Produits de la Mer"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300&query=moroccan desert cuisine dinner"
                alt="Dîner des Saveurs du Désert"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300&query=moroccan royal dinner setting"
                alt="Dîner Royal"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300&query=moroccan chefs collaborative dinner"
                alt="Dîner des Chefs"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300&query=moroccan traditional tagine dinner"
                alt="Dîner des Tagines"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300&query=moroccan pastry showcase dinner"
                alt="Dîner des Pâtisseries"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300&query=moroccan spice dinner event"
                alt="Dîner des Épices"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="#" className="btn-secondary inline-flex items-center">
              Voir tous les dîners passés
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-[var(--primary)] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Témoignages</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <p className="italic mb-4">
                "Un dîner d'exception qui m'a fait redécouvrir les saveurs de mon enfance avec une présentation digne
                des plus grands restaurants."
              </p>
              <p className="font-bold">— Karim Bennani, Critique Gastronomique</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <p className="italic mb-4">
                "L'Académie réussit à chaque fois à créer des événements où la gastronomie devient un véritable art, une
                expérience sensorielle complète."
              </p>
              <p className="font-bold">— Sophia Alami, Chef Étoilée</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <p className="italic mb-4">
                "Ces dîners sont bien plus que de simples repas, ce sont des voyages à travers l'histoire et la culture
                marocaines."
              </p>
              <p className="font-bold">— Ahmed Lahrichi, Membre de l'Académie</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
