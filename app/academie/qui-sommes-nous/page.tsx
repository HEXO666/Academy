import Image from "next/image"

export default function QuiSommesNousPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image src="/QuiSommesNous.jpg" alt="Qui sommes-nous" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Qui sommes-nous</h1>
            <p className="text-xl max-w-2xl mx-auto">Découvrez l'Académie Marocaine de Gastronomie et sa mission</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Notre Mission</h2>

              <p>
              La FAM est constituée conformément aux dispositions du Dahir n° 1-58-376 du 3 Joumada I 1378 (15 novembre 1958) relatif au droit d’association, tel que modifié et complété par le Dahir portant loi n° 1-73-283 du 6 Rebia I 1393 (10 avril 1973). Elle bénéficie de la personnalité morale et de la pleine capacité juridique lui permettant de réaliser les objectifs pour lesquels elle a été créée.
              </p>

              <p>
                Nous œuvrons à la reconnaissance de l'excellence gastronomique marocaine et à la transmission des
                savoirs et techniques culinaires traditionnels aux nouvelles générations.
              </p>

              <div className="my-8 relative rounded-xl overflow-hidden">
                <Image
                  src="/QuiSommes2.jpg"
                  alt="Membres de l'Académie"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Nos Objectifs</h2>

              <ul>
                <li>Préserver et valoriser le patrimoine culinaire marocain</li>
                <li>Promouvoir la gastronomie marocaine à l'échelle nationale et internationale</li>
                <li>Encourager la recherche et la documentation sur les traditions culinaires marocaines</li>
                <li>Soutenir la formation et l'excellence dans les métiers de la gastronomie</li>
                <li>Favoriser les échanges culturels autour de la gastronomie</li>
                <li>Contribuer au développement du tourisme gastronomique au Maroc</li>
              </ul>

              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Notre Vision</h2>

              <p>
                L'Académie Marocaine de Gastronomie aspire à faire de la gastronomie marocaine l'une des cuisines les
                plus reconnues et appréciées au monde. Nous croyons fermement que notre patrimoine culinaire, riche de
                ses influences berbères, arabes, andalouses, méditerranéennes et africaines, mérite d'être célébré et
                partagé avec le monde entier.
              </p>

              <p>
                Nous envisageons un avenir où les techniques, les ingrédients et les traditions culinaires marocaines
                sont non seulement préservés, mais aussi réinterprétés de manière créative pour s'adapter aux goûts
                contemporains tout en respectant leur authenticité.
              </p>

              <div className="my-8 relative rounded-xl overflow-hidden">
                <Image
                  src="/moroccan-feast.png"
                  alt="Cuisine marocaine traditionnelle"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Notre Structure</h2>

              <p>
                L'Académie est dirigée par un conseil d'administration composé de personnalités reconnues dans le
                domaine de la gastronomie, de la culture et des arts culinaires. Nos membres comprennent des chefs
                renommés, des historiens de la gastronomie, des critiques culinaires, des producteurs de produits du
                terroir et des passionnés de la cuisine marocaine.
              </p>

              <p>
                Nous travaillons en étroite collaboration avec des institutions nationales et internationales pour mener
                à bien notre mission et atteindre nos objectifs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
