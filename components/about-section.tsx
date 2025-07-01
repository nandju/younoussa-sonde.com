"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, MapPin, Play } from "lucide-react"
import { useState } from "react"

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-[#EADD8E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge À Propos */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-8 py-3 rounded-full border-2 border-[#A07539] bg-white text-[#252525] text-sm font-bold tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            À PROPOS
          </div>
        </div>

            {/* Titre principal */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#252525] leading-tight max-w-6xl mx-auto">
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
          <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl border border-[#EADD8E]/20">
            {/* Image principale de la propriété */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px]">
              <Image
                src="/assets/images/illustrations/page-accueil/place-about.jpg"
                alt="Intérieur de maison moderne minimaliste"
                fill
                className="object-cover"
              />

              {/* Éléments interactifs */}
              <div className="absolute inset-0">
                {/* Balcon 2ème étage */}
                <div className="absolute top-8 left-8 sm:top-12 sm:left-12">
                  <div className="flex items-center space-x-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-lg border border-[#EADD8E]/30 hover:shadow-xl transition-all duration-300">
                    <div className="w-3 h-3 bg-[#A07539] rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-[#252525]">Balcon 2ème Étage</span>
                  </div>
                </div>

                {/* Vue coucher de soleil */}
                <div className="absolute top-8 right-8 sm:top-12 sm:right-12">
                  <div className="flex items-center space-x-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-lg border border-[#EADD8E]/30 hover:shadow-xl transition-all duration-300">
                    <div className="w-3 h-3 bg-[#EADD8E] rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-[#252525]">Vue Coucher de Soleil</span>
                  </div>
                </div>

                {/* Piscine avec aperçu */}
                <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center space-x-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-[#EADD8E]/30 hover:shadow-2xl transition-all duration-300">
                    <div className="w-3 h-3 bg-[#252525] rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-[#252525]">Belle vue</span>
                    <div className="relative w-16 h-12 rounded-lg overflow-hidden border-2 border-[#EADD8E]/50">
                      <Image
                        src="/assets/images/illustrations/page-accueil/place-about-exterieur.jpg"
                        alt="Aperçu de la piscine"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-[#252525]/20">
                        <div className="bg-[#EADD8E] rounded-full p-1">
                          <Play className="w-3 h-3 text-[#252525]" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte d'informations de la propriété */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-7 shadow-2xl max-w-xs sm:max-w-sm border border-[#EADD8E]/30 hover:shadow-3xl transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-[#252525] mb-3">Villa Platzaa IV</h3>

              <div className="flex items-center text-[#A07539] mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Abobo, Abidjan</span>
              </div>

              <p className="text-sm text-[#252525]/70 mb-5 leading-relaxed">
                Maison minimaliste en plein centre ville équipée d'installations de luxe dans sa catégorie
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button className="p-2 rounded-full border-2 border-[#EADD8E] hover:bg-[#EADD8E] hover:text-[#252525] text-[#A07539] transition-all duration-300">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-full border-2 border-[#EADD8E] hover:bg-[#EADD8E] hover:text-[#252525] text-[#A07539] transition-all duration-300">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className="flex space-x-2 ml-3">
                    <div className="w-2 h-2 bg-[#252525] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#A07539]/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-[#A07539]/50 rounded-full"></div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xl sm:text-2xl font-bold text-[#252525]">69 500,00 F</div>
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