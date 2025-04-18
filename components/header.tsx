"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

const navigation = [
  { name: "Accueil", href: "/" },
  {
    name: "L'Académie",
    href: "/academie",
    submenu: [
      { name: "Qui sommes-nous", href: "/academie/qui-sommes-nous" },
      { name: "Notre histoire", href: "/academie/notre-histoire" },
      { name: "Nos membres", href: "/academie/nos-membres" },
    ],
  },
  {
    name: "Activités",
    href: "/activites",
    submenu: [
      { name: "Événements", href: "/activites/evenements" },
      { name: "Dîners", href: "/activites/diners" },
      { name: "Publications", href: "/activites/publications" },
    ],
  },
  { name: "Actualités", href: "/actualites" },
  { name: "Galerie", href: "/galerie" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Moroccan Culinary Academy Emblem.png"
                alt="Académie Gastronomie Maroc"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`text-lg font-medium ${scrolled ? "text-foreground" : "text-white"} hover:text-accent transition-colors duration-300 flex items-center`}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                    <div className="py-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${scrolled ? "text-foreground" : "text-white"} hover:text-accent focus:outline-none`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navigation.map((item) => (
            <div key={item.name}>
              <div className="flex items-center justify-between">
                <Link
                  href={item.submenu ? "#" : item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-accent"
                  onClick={() => item.submenu && toggleSubmenu(item.name)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <button onClick={() => toggleSubmenu(item.name)} className="px-3 py-2 text-foreground">
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${activeSubmenu === item.name ? "rotate-180" : ""}`}
                    />
                  </button>
                )}
              </div>

              {item.submenu && activeSubmenu === item.name && (
                <div className="pl-4 space-y-1 mt-1">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.name}
                      href={subitem.href}
                      className="block px-3 py-2 text-sm font-medium text-foreground hover:text-accent"
                    >
                      {subitem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
