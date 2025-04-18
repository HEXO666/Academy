import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/academie-gastronomie-maroc-logo-white.png"
                alt="Académie Gastronomie Maroc"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm mt-4">
              L'Académie Marocaine de Gastronomie est une association à but non lucratif qui a pour mission de
              promouvoir la gastronomie marocaine.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-white hover:text-[var(--accent)] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-[var(--accent)] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-[var(--accent)] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/academie/qui-sommes-nous" className="text-sm hover:text-[var(--accent)] transition-colors">
                  Qui sommes-nous
                </Link>
              </li>
              <li>
                <Link href="/activites" className="text-sm hover:text-[var(--accent)] transition-colors">
                  Nos activités
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="text-sm hover:text-[var(--accent)] transition-colors">
                  Actualités
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="text-sm hover:text-[var(--accent)] transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-[var(--accent)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Tanger, Maroc</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-sm">+212 (aucun numéro public disponible)</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-sm">contact@academiegastronomiemaroc.ma</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Inscrivez-vous pour recevoir nos actualités</p>
            <form className="space-y-2">
              <div>
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-2 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--accent)] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Académie Marocaine de Gastronomie. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
