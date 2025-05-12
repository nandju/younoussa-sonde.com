"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag, User } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#744838] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
                <Image
                src="/assets/images/icone1.png"
                alt="Gouter de la grace Logo"
                width={50} // Ajoutez la largeur (en pixels)
                height={50} // Ajoutez la hauteur (en pixels)
                priority // Optionnel, si vous voulez donner la priorité à ce chargement
                className="cursor-pointer" // Ajout de la classe pour le curseur
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="hover:text-gray-200 transition-colors">
              ACCUEIL
            </Link>
            <Link href="#" className="hover:text-gray-200 transition-colors">
              EQUIPE
            </Link>
            <Link href="#" className="hover:text-gray-200 transition-colors">
              SPECIALITE
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button aria-label="User account">
              <User className="h-5 w-5" />
            </button>
            <button aria-label="Shopping bag">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#"
                className="hover:bg-red-700 px-3 py-2 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                MENU
              </Link>
              <Link
                href="#"
                className="hover:bg-red-700 px-3 py-2 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <Link
                href="#"
                className="hover:bg-red-700 px-3 py-2 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FIND US
              </Link>
              <div className="flex space-x-4 px-3 py-2">
                <button aria-label="User account">
                  <User className="h-5 w-5" />
                </button>
                <button aria-label="Shopping bag">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
