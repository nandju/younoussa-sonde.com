"use client"

import Image from "next/image"
import Link from "next/link"

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background with Image and Overlay */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/backgrounds/background-1.jpg" // Remplacez par le chemin de votre image
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Color Overlay */}
        {/* <div className="absolute inset-0" style={{ backgroundColor: 'rgba(37, 37, 37, 0.8)' }}> */}
          {/* Decorative Pattern */}
          {/* <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full" 
                 style={{ backgroundColor: '#EADD8E' }}></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full" 
                 style={{ backgroundColor: '#A07539' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full" 
                 style={{ backgroundColor: '#EADD8E' }}></div>
          </div> */}
        {/* </div> */}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Large Brand Text */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-6xl sm:text-8xl lg:text-9xl xl:text-[12rem] font-bold text-white leading-none tracking-tight drop-shadow-2xl">
                JOYA-IMMO
              </h2>
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium mt-4 drop-shadow-lg" 
                 style={{ color: '#EADD8E' }}>
                Votre partenaire immobilier en Côte d'Ivoire
              </p>
            </div>

            {/* Interactive Elements */}
            <div className="relative">
              {/* Nous Contacter */}
              <div className="absolute top-0 left-0 sm:top-[-100px] sm:left-[10%] lg:top-[-150px] lg:left-[15%]">
                <div className="flex items-center space-x-3 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2" 
                     style={{ 
                       backgroundColor: '#EADD8E',
                       borderColor: '#A07539'
                     }}>
                  <div className="w-3 h-3 rounded-full" 
                       style={{ backgroundColor: '#252525' }}></div>
                  <span className="text-sm font-medium" style={{ color: '#252525' }}>
                    Nous Contacter
                  </span>
                </div>
              </div>

              {/* Vendre un Bien */}
              <div className="absolute bottom-0 left-0 sm:bottom-[-50px] sm:left-[5%] lg:bottom-[-80px] lg:left-[10%]">
                <div className="flex items-center space-x-3 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2" 
                     style={{ 
                       backgroundColor: '#A07539',
                       borderColor: '#EADD8E'
                     }}>
                  <div className="w-3 h-3 rounded-full" 
                       style={{ backgroundColor: '#EADD8E' }}></div>
                  <span className="text-sm font-medium text-white">
                    Vendre un Bien
                  </span>
                </div>
              </div>

              {/* Louer un Bien */}
              <div className="absolute top-0 right-0 sm:top-[-50px] sm:right-[10%] lg:top-[-80px] lg:right-[15%]">
                <div className="flex items-center space-x-3 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2" 
                     style={{ 
                       backgroundColor: '#EADD8E',
                       borderColor: '#A07539'
                     }}>
                  <div className="w-3 h-3 rounded-full" 
                       style={{ backgroundColor: '#252525' }}></div>
                  <span className="text-sm font-medium" style={{ color: '#252525' }}>
                    Louer un Bien
                  </span>
                </div>
              </div>

              {/* Acheter un Bien */}
              <div className="absolute bottom-0 right-0 sm:bottom-[-80px] sm:right-[5%] lg:bottom-[-120px] lg:right-[10%]">
                <div className="flex items-center space-x-3 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2" 
                     style={{ 
                       backgroundColor: '#A07539',
                       borderColor: '#EADD8E'
                     }}>
                  <div className="w-3 h-3 rounded-full" 
                       style={{ backgroundColor: '#EADD8E' }}></div>
                  <span className="text-sm font-medium text-white">
                    Acheter un Bien
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="backdrop-blur-sm border-t-2" 
             style={{ 
               backgroundColor: 'rgba(234, 221, 142, 0.95)',
               borderColor: '#A07539'
             }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              {/* Main Navigation Links */}
              <nav className="flex flex-wrap justify-center lg:justify-start items-center gap-6 lg:gap-8">
                <Link
                  href="#"
                  className="font-medium transition-colors text-sm sm:text-base hover:underline"
                  style={{ color: '#252525' }}
                >
                  Vendre un Bien
                </Link>
                <Link
                  href="#"
                  className="font-medium transition-colors text-sm sm:text-base hover:underline"
                  style={{ color: '#252525' }}
                >
                  Acheter un Bien
                </Link>
                <Link
                  href="#"
                  className="font-medium transition-colors text-sm sm:text-base hover:underline"
                  style={{ color: '#252525' }}
                >
                  Location
                </Link>
                <Link
                  href="#"
                  className="font-medium transition-colors text-sm sm:text-base hover:underline"
                  style={{ color: '#252525' }}
                >
                  À Propos
                </Link>
                <Link
                  href="#"
                  className="font-medium transition-colors text-sm sm:text-base hover:underline"
                  style={{ color: '#252525' }}
                >
                  Nos Services
                </Link>
              </nav>

              {/* Social Media Links */}
              <nav className="flex items-center gap-6 lg:gap-8">
                <Link
                  href="#"
                  className="font-medium transition-colors text-sm sm:text-base hover:underline"
                  style={{ color: '#252525' }}
                >
                  Instagram
                </Link>
                <Link
                  href="#"
                  className="font-medium transition-colors text-sm sm:text-base hover:underline"
                  style={{ color: '#252525' }}
                >
                  LinkedIn
                </Link>
                <Link
                  href="#"
                  className="font-medium transition-colors text-sm sm:text-base hover:underline"
                  style={{ color: '#252525' }}
                >
                  Facebook
                </Link>
                <Link
                  href="#"
                  className="font-medium transition-colors text-sm sm:text-base hover:underline"
                  style={{ color: '#252525' }}
                >
                  WhatsApp
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{ backgroundColor: 'rgba(160, 117, 57, 0.95)' }} className="backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              {/* Copyright */}
              <div className="text-white text-sm font-medium">
                Copyright JOYAimmo © 2024 - Tous droits réservés
              </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-6">
                <Link href="#" className="text-white hover:text-gray-200 text-sm transition-colors font-medium">
                  Politique de Confidentialité
                </Link>
                <Link href="#" className="text-white hover:text-gray-200 text-sm transition-colors font-medium">
                  Conditions d'Utilisation
                </Link>
                <Link href="#" className="text-white hover:text-gray-200 text-sm transition-colors font-medium">
                  Mentions Légales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}