import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronRight } from "lucide-react"

const news = [
  {
    id: 1,
    title: "Grand dîner annuel de l'Académie Marocaine de Gastronomie",
    excerpt:
      "L'Académie a organisé son dîner annuel au Palais Soleiman, réunissant membres et personnalités autour d'un menu d'exception.",
    content:
      "Le 15 novembre dernier, l'Académie Marocaine de Gastronomie a tenu son traditionnel dîner annuel dans le cadre somptueux du Palais Soleiman à Marrakech. Cet événement prestigieux a réuni plus de 150 convives, dont les membres de l'Académie, des chefs renommés, des personnalités du monde de la culture et des représentants institutionnels.\n\nLe menu, élaboré par le chef étoilé Youssef Benjelloun, membre de l'Académie, proposait une réinterprétation raffinée des classiques de la cuisine marocaine. Parmi les plats servis figuraient une pastilla de pigeon aux amandes caramélisées, un tajine d'agneau aux coings et aux épices rares, ainsi qu'une sélection de pâtisseries traditionnelles revisitées.\n\nLors de cette soirée, le président de l'Académie, Mohammed Alaoui, a présenté les projets réalisés au cours de l'année écoulée et a annoncé les initiatives à venir pour 2024, notamment un programme de documentation des recettes en voie de disparition dans les régions rurales du Maroc.",
    date: "15 novembre 2023",
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

]

export default function ActualitesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="/Banner.png"
          alt="Actualités de l'Académie"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Actualités</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Restez informés des dernières actualités et événements de l'Académie Marocaine de Gastronomie
            </p>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-10">
                {news.map((item) => (
                  <article
                    key={item.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-64">
                      <Image src={item.image || "/.svg"} alt={item.title} fill className="object-cover" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[var(--primary)] text-white text-sm px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.date}
                      </div>
                      <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                      <p className="text-gray-700 mb-4">{item.excerpt}</p>
                      <Link href={`/actualites/${item.id}`} className="btn-primary inline-flex items-center">
                        Lire la suite
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <nav className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    Précédent
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 bg-[var(--primary)] border border-[var(--primary)] text-sm font-medium text-white"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    3
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    Suivant
                  </a>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="bg-[var(--secondary)] p-6 rounded-lg mb-8">
                <h3 className="text-lg font-bold mb-4">Rechercher</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-[var(--secondary)] p-6 rounded-lg mb-8">
                <h3 className="text-lg font-bold mb-4">Catégories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="flex justify-between items-center hover:text-[var(--primary)] transition-colors"
                    >
                      <span>Événements</span>
                      <span className="bg-white px-2 py-1 rounded-full text-xs">12</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex justify-between items-center hover:text-[var(--primary)] transition-colors"
                    >
                      <span>Publications</span>
                      <span className="bg-white px-2 py-1 rounded-full text-xs">8</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex justify-between items-center hover:text-[var(--primary)] transition-colors"
                    >
                      <span>Projets</span>
                      <span className="bg-white px-2 py-1 rounded-full text-xs">5</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex justify-between items-center hover:text-[var(--primary)] transition-colors"
                    >
                      <span>Partenariats</span>
                      <span className="bg-white px-2 py-1 rounded-full text-xs">3</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex justify-between items-center hover:text-[var(--primary)] transition-colors"
                    >
                      <span>Actualités</span>
                      <span className="bg-white px-2 py-1 rounded-full text-xs">7</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-[var(--secondary)] p-6 rounded-lg mb-8">
                <h3 className="text-lg font-bold mb-4">Articles Récents</h3>
                <div className="space-y-4">
                  {news.slice(0, 3).map((item) => (
                    <div key={item.id} className="flex space-x-3">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2">
                          <Link
                            href={`/actualites/${item.id}`}
                            className="hover:text-[var(--primary)] transition-colors"
                          >
                            {item.title}
                          </Link>
                        </h4>
                        <p className="text-gray-500 text-xs mt-1">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-[var(--primary)] p-6 rounded-lg text-white">
                <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                <p className="mb-4 text-sm">
                  Inscrivez-vous pour recevoir nos actualités et ne manquer aucun événement.
                </p>
                <form>
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-4 py-2 rounded-md text-foreground mb-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-[var(--accent)] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    S'inscrire
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
