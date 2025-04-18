import Image from "next/image"

export default function NotreHistoirePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image src="/rustic-moroccan-cooking.png" alt="Notre Histoire" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Histoire</h1>
            <p className="text-xl max-w-2xl mx-auto">
              L'évolution de l'Académie Marocaine de Gastronomie depuis sa création
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Les Origines</h2>

              <p>
              La Fondation de l'Académie Marocaine de Gastronomie (FAMG) a été officiellement fondée le 18 mars 2022 au Palais Zahia, situé dans la médina de Tanger. Cette initiative a été portée par Dr Salah Chakor, expert en gestion hôtelière et tourisme, qui en assure la présidence.
              </p>

              <div className="my-8 relative rounded-xl overflow-hidden">
                <Image
                  src="/signature.jpeg"
                  alt="Fondateurs de l'Académie"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">18 mars 2022</h2>

              <p>
              Lancement officiel de la FAMG à Tanger.
              </p>

              <p>
                Dès sa création, l'Académie s'est fixé pour mission de documenter, préserver et promouvoir la richesse
                culinaire marocaine, tant au niveau national qu'international.
              </p>

              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">2022–2023</h2>

              <p>
              Début des travaux pour la création d’un catalogue national et d’un dictionnaire de la gastronomie marocaine, inspiré du Larousse gastronomique.
              </p>

              <p>
                En 2024, Lancement de projets de traduction de terminologies culinaires et de publications de lexiques multilingues.
              </p>

              <div className="my-8 relative rounded-xl overflow-hidden">
                <Image
                  src="/C5.jpeg"
                  alt="Publications de l'Académie"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">
              Objectifs et missions
              </h2>

              <p>
              Préserver et valoriser le patrimoine culinaire marocain dans toute sa diversité (amazigh, juif, arabo-musulman, andalou).
              </p>

              <p>
              Créer une communauté gastronomique nationale, en vue d’une extension maghrébine.
              </p>

              <p>
              Documenter et transmettre les recettes traditionnelles et les savoir-faire régionaux.
              </p>

              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Projets en cours</h2>

              <p>
              La réalisation d’une encyclopédie culinaire dédiée à la cuisine marocaine
              </p>

              <p>
              La traduction multilingue du vocabulaire gastronomique marocain.
              </p>

              <p>
              La création d’une bibliothèque numérique regroupant des documents et ouvrages sur l’alimentation.
              </p>

              <div className="my-8 relative rounded-xl overflow-hidden">
                <Image
                  src="/Photos signature 2.jpeg"
                  alt="Événements modernes de l'Académie"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
