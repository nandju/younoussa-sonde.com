"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, MapPin, Play } from "lucide-react"
import { useState } from "react"

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-[#EADD8E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge À Propos */}
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border-2 border-[#A07539] bg-white text-[#252525] text-xs sm:text-sm font-bold tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            À PROPOS
          </div>
        </div>

        {/* Titre principal */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#252525] leading-tight max-w-6xl mx-auto px-2 sm:px-4">
            {"Nous sommes votre partenaire de confiance en immobilier. Basés en Côte d'Ivoire, notre équipe "}
            <span className="text-[#A07539]/80">
              {
                "d'experts se consacre à fournir un service personnalisé et à obtenir les meilleurs résultats possibles. De la recherche de votre maison de rêve à la vente de votre propriété au bon prix, nous sommes là pour vous guider à chaque étape."
              }
            </span>
          </h2>
        </div>

        {/* Vitrine Immobilière */}
        <div className="relative">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-2xl border border-[#EADD8E]/20">
            {/* Image principale de la propriété */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
              <Image
                src="/assets/images/illustrations/page-accueil/place-about.jpg"
                alt="Intérieur de maison moderne minimaliste"
                fill
                className="object-cover"
              />

              {/* Éléments interactifs */}
              <div className="absolute inset-0">
                {/* Balcon 2ème étage - Responsive positioning */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:top-12 lg:left-12">
                  <div className="flex items-center space-x-2 sm:space-x-3 bg-white/95 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 shadow-lg border border-[#EADD8E]/30 hover:shadow-xl transition-all duration-300">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#A07539] rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-semibold text-[#252525] whitespace-nowrap">
                      <span className="hidden sm:inline">Balcon 2ème Étage</span>
                      <span className="sm:hidden">Balcon</span>
                    </span>
                  </div>
                </div>

                {/* Vue coucher de soleil - Responsive positioning */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-12 lg:right-12">
                  <div className="flex items-center space-x-2 sm:space-x-3 bg-white/95 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 shadow-lg border border-[#EADD8E]/30 hover:shadow-xl transition-all duration-300">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#EADD8E] rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-semibold text-[#252525] whitespace-nowrap">
                      <span className="hidden sm:inline">Vue Coucher de Soleil</span>
                      <span className="sm:hidden">Vue</span>
                    </span>
                  </div>
                </div>

                {/* Piscine avec aperçu - Responsive positioning and sizing */}
                <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:translate-y-0">
                  <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-[#EADD8E]/30 hover:shadow-2xl transition-all duration-300">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#252525] rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-semibold text-[#252525] whitespace-nowrap">Belle vue</span>
                    <div className="relative w-12 h-8 sm:w-14 sm:h-10 md:w-16 md:h-12 rounded-md sm:rounded-lg overflow-hidden border-2 border-[#EADD8E]/50">
                      <Image
                        src="/assets/images/illustrations/page-accueil/place-about-exterieur.jpg"
                        alt="Aperçu de la piscine"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-[#252525]/20">
                        <div className="bg-[#EADD8E] rounded-full p-0.5 sm:p-1">
                          <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#252525]" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte d'informations de la propriété - Responsive positioning and sizing */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-7 shadow-2xl w-[calc(100%-24px)] sm:w-auto sm:max-w-[280px] md:max-w-xs lg:max-w-sm border border-[#EADD8E]/30 hover:shadow-3xl transition-all duration-300">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#252525] mb-2 sm:mb-3">Villa Platzaa IV</h3>

              <div className="flex items-center text-[#A07539] mb-3 sm:mb-4">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Abobo, Abidjan</span>
              </div>

              <p className="text-xs sm:text-sm text-[#252525]/70 mb-3 sm:mb-4 md:mb-5 leading-relaxed">
                Maison minimaliste en plein centre ville équipée d'installations de luxe dans sa catégorie
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <button className="p-1.5 sm:p-2 rounded-full border-2 border-[#EADD8E] hover:bg-[#EADD8E] hover:text-[#252525] text-[#A07539] transition-all duration-300">
                    <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <button className="p-1.5 sm:p-2 rounded-full border-2 border-[#EADD8E] hover:bg-[#EADD8E] hover:text-[#252525] text-[#A07539] transition-all duration-300">
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <div className="flex space-x-1.5 sm:space-x-2 ml-2 sm:ml-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#252525] rounded-full"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#A07539]/50 rounded-full"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#A07539]/50 rounded-full"></div>
                  </div>
                </div>

                <div className="text-right ml-2 sm:ml-0">
                  <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-[#252525]">
                    <span className="hidden sm:inline">69 500,00 F</span>
                    <span className="sm:hidden">69 500F</span>
                  </div>
                  <div className="text-xs text-[#A07539] font-medium">par mois</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}