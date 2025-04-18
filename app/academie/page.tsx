import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function AcademiePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="/placeholder.svg?height=500&width=1920&query=moroccan gastronomy academy members meeting"
          alt="L'Académie Marocaine de Gastronomie"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">L'Académie</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Découvrez l'Académie Marocaine de Gastronomie, son histoire et sa mission
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[var(--secondary)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">Qui sommes-nous</h2>
              <p className="mb-4">
                L'Académie Marocaine de Gastronomie est une association à but non lucratif qui œuvre pour la promotion
                et la préservation du patrimoine culinaire marocain.
              </p>
              <Link
                href="/academie/qui-sommes-nous"
                className="inline-flex items-center text-[var(--primary)] hover:text-[var(--accent)] font-medium transition-colors"
              >
                En savoir plus
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-[var(--secondary)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">Notre histoire</h2>
              <p className="mb-4">
                Fondée en 2022, l'Académie a été créée par un groupe de passionnés désireux de valoriser la richesse de
                la gastronomie marocaine.
              </p>
              <Link
                href="/academie/notre-histoire"
                className="inline-flex items-center text-[var(--primary)] hover:text-[var(--accent)] font-medium transition-colors"
              >
                En savoir plus
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-[var(--secondary)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">Nos membres</h2>
              <p className="mb-4">
                L'Académie réunit des personnalités du monde de la gastronomie, de la culture et des arts culinaires
                marocains.
              </p>
              <Link
                href="/academie/nos-membres"
                className="inline-flex items-center text-[var(--primary)] hover:text-[var(--accent)] font-medium transition-colors"
              >
                En savoir plus
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
