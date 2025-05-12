import Link from "next/link"
import { Phone, MapPin, Mail, Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#744838] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">EXPLORER</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Equipe
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Spécialité
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">LEGALE</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">DELICES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Chips Salées
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Chips Sucrées
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Plus
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">CONTACTEZ-NOUS</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+225 123 456 789 0</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@gouterdelagrace.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Plateau/Abidjan</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 hover:text-gray-200" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 hover:text-gray-200" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 hover:text-gray-200" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Goûter de la Grâce. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
