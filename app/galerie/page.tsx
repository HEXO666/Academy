"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

// Gallery categories and images
const categories = [
  { id: "all", name: "Tous" },
  { id: "events", name: "Événements" },
  { id: "dishes", name: "Plats Traditionnels" },
  { id: "ingredients", name: "Ingrédients" },
  { id: "people", name: "Personnalités" },
]

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=800&query=moroccan gala dinner event with formal setting",
    alt: "Dîner de Gala 2023",
    category: "events",
    description: "Dîner annuel de l'Académie au Palais Soleiman, novembre 2023",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=600&width=800&query=traditional moroccan tagine dish with meat and vegetables",
    alt: "Tagine Traditionnel",
    category: "dishes",
    description: "Tagine d'agneau aux pruneaux et amandes, plat emblématique de la cuisine marocaine",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=600&width=800&query=moroccan spices display at market",
    alt: "Épices Marocaines",
    category: "ingredients",
    description: "Sélection d'épices traditionnelles marocaines sur un marché de Marrakech",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=600&width=800&query=moroccan chefs at culinary conference",
    alt: "Conférence Culinaire",
    category: "events",
    description: "Conférence sur l'avenir de la gastronomie marocaine, septembre 2023",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=600&width=800&query=moroccan couscous dish with vegetables",
    alt: "Couscous Royal",
    category: "dishes",
    description: "Couscous royal aux sept légumes, préparé lors d'une démonstration culinaire",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=600&width=800&query=argan oil production traditional method",
    alt: "Production d'Huile d'Argan",
    category: "ingredients",
    description: "Méthode traditionnelle de production d'huile d'argan dans la région de Souss",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=600&width=800&query=moroccan pastry assortment on display",
    alt: "Pâtisseries Marocaines",
    category: "dishes",
    description: "Assortiment de pâtisseries traditionnelles marocaines",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=600&width=800&query=moroccan chef demonstrating cooking techniques",
    alt: "Démonstration Culinaire",
    category: "events",
    description: "Chef Youssef Benjelloun lors d'une démonstration de techniques culinaires traditionnelles",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=600&width=800&query=moroccan saffron harvesting",
    alt: "Récolte du Safran",
    category: "ingredients",
    description: "Récolte du safran de Taliouine, l'or rouge du Maroc",
  },
  {
    id: 10,
    src: "/placeholder.svg?height=600&width=800&query=moroccan culinary academy members group photo",
    alt: "Membres de l'Académie",
    category: "people",
    description: "Les membres de l'Académie Marocaine de Gastronomie lors de l'assemblée générale 2023",
  },
  {
    id: 11,
    src: "/placeholder.svg?height=600&width=800&query=moroccan bread varieties display",
    alt: "Pains Marocains",
    category: "dishes",
    description: "Variétés de pains traditionnels marocains exposés lors du SIAM 2023",
  },
  {
    id: 12,
    src: "/placeholder.svg?height=600&width=800&query=moroccan olive harvest in traditional way",
    alt: "Récolte d'Olives",
    category: "ingredients",
    description: "Récolte traditionnelle des olives dans la région de Meknès",
  },
  {
    id: 13,
    src: "/placeholder.svg?height=600&width=800&query=moroccan chef receiving award",
    alt: "Remise de Prix",
    category: "people",
    description: "Remise du prix d'excellence gastronomique à la chef Samira Tazi",
  },
  {
    id: 14,
    src: "/placeholder.svg?height=600&width=800&query=moroccan cooking class with students",
    alt: "Cours de Cuisine",
    category: "events",
    description: "Atelier de cuisine traditionnelle organisé par l'Académie pour les jeunes chefs",
  },
  {
    id: 15,
    src: "/placeholder.svg?height=600&width=800&query=moroccan dates variety display",
    alt: "Variétés de Dattes",
    category: "ingredients",
    description: "Présentation des différentes variétés de dattes marocaines lors d'une exposition",
  },
]

export default function GaleriePage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<null | (typeof galleryImages)[0]>(null)

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="/placeholder.svg?height=500&width=1920&query=moroccan gastronomy photo gallery collage"
          alt="Galerie de l'Académie"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Galerie</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Découvrez en images les activités et le patrimoine culinaire marocain
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-[var(--primary)] text-white"
                    : "bg-[var(--secondary)] text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="font-bold">{image.alt}</h3>
                    <p className="text-sm mt-1 text-white/80">
                      {image.category === "events"
                        ? "Événement"
                        : image.category === "dishes"
                          ? "Plat"
                          : image.category === "ingredients"
                            ? "Ingrédient"
                            : "Personnalité"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>

          <div className="max-w-4xl w-full">
            <div className="relative w-full" style={{ height: "70vh" }}>
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-white text-center">
              <h3 className="text-xl font-bold">{selectedImage.alt}</h3>
              <p className="mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
