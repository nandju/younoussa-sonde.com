"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { Heart, MapPin, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

const properties = [
  {
    id: 1,
    name: "Villa Moderne Cocody",
    location: "Cocody, Abidjan",
    price: "85.000.000 F CFA",
    image: "/assets/images/illustrations/page-properties/items-1.jpg",
    color: "from-[#EADD8E] to-[#A07539]",
  },
  {
    id: 2,
    name: "Résidence Plateau",
    location: "Plateau, Abidjan",
    price: "120.000.000 F CFA",
    image: "/assets/images/illustrations/page-properties/items-2.jpg",
    color: "from-[#A07539] to-[#252525]",
  },
  {
    id: 3,
    name: "Appartement Yopougon",
    location: "Yopougon, Abidjan",
    price: "45.000.000 F CFA",
    image: "/assets/images/illustrations/page-properties/items-3.jpg",
    color: "from-[#EADD8E]/80 to-[#A07539]/80",
  },
  {
    id: 4,
    name: "Villa Angré",
    location: "Angré, Abidjan",
    price: "95.000.000 F CFA",
    image: "/assets/images/illustrations/page-properties/items-4.jpg",
    color: "from-[#252525]/80 to-[#EADD8E]/60",
  },
  {
    id: 5,
    name: "Duplex Marcory",
    location: "Marcory, Abidjan",
    price: "65.000.000 F CFA",
    image: "/assets/images/illustrations/page-properties/items-5.jpg",
    color: "from-[#A07539]/80 to-[#252525]/60",
  },
  {
    id: 6,
    name: "Penthouse Deux Plateaux",
    location: "Deux Plateaux, Abidjan",
    price: "150.000.000 F CFA",
    image: "/assets/images/illustrations/page-properties/items-1.jpg",
    color: "from-[#EADD8E]/90 to-[#A07539]/70",
  },
]

export default function ExplorePropertiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [favorites, setFavorites] = useState<number[]>([])
  const [isDesktop, setIsDesktop] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const toggleFavorite = (propertyId: number) => {
    setFavorites((prev) => (prev.includes(propertyId) ? prev.filter((id) => id !== propertyId) : [...prev, propertyId]))
  }

  // Mobile/Tablet navigation
  const handleMobileScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.offsetWidth
      const scrollLeft = container.scrollLeft
      const newIndex = Math.round(scrollLeft / cardWidth)
      setCurrentIndex(newIndex)
    }
  }

  const scrollToMobileIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.offsetWidth
      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  const handleMobilePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : properties.length - 1
    scrollToMobileIndex(newIndex)
  }

  const handleMobileNext = () => {
    const newIndex = currentIndex < properties.length - 1 ? currentIndex + 1 : 0
    scrollToMobileIndex(newIndex)
  }

  // Desktop carousel navigation
  const handleDesktopPrevious = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = 320 + 24 // card width + gap
      container.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      })
    }
  }

  const handleDesktopNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = 320 + 24 // card width + gap
      container.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-[#EADD8E]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* EXPLORER Badge */}
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div className="inline-flex items-center px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-600 text-sm font-medium">
            EXPLORER
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl text-center sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-12 sm:mb-16 lg:mb-20">
          Découvrez nos dernières propriétés
        </h2>

        {/* Content Layout */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
          {/* Left Side - Nouvelles Opportunités */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="text-center lg:text-left lg:sticky lg:top-8 px-4 sm:px-6 lg:px-0">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#252525] mb-4 sm:mb-6">
                Nouvelles Opportunités
              </h3>
              <p className="text-[#252525]/70 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0">
                Restez à l'avant-garde avec nos dernières annonces immobilières. Des appartements modernes aux villas 
                de charme, nous avons une variété d'options pour répondre à vos besoins. Explorez nos nouveautés et 
                trouvez votre propriété idéale en Côte d'Ivoire.
              </p>
              <button className="inline-flex items-center text-[#A07539] font-semibold hover:text-[#252525] transition-colors group text-sm sm:text-base">
                Voir plus de propriétés
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side - Property Cards */}
          <div className="lg:col-span-8 xl:col-span-9">
            
            {/* Desktop View - Carousel horizontal */}
            <div className="hidden lg:block">
              <div className="relative">
                <div
                  ref={scrollContainerRef}
                  className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {properties.map((property) => (
                    <div key={property.id} className="flex-none w-80 group cursor-pointer">
                      <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white">
                        <div className="relative h-64 overflow-hidden">
                          <div className={`absolute inset-0 bg-gradient-to-br ${property.color} opacity-20 z-10`}></div>
                          <Image
                            src={property.image}
                            alt={property.name}
                            width={320}
                            height={256}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <button
                            onClick={() => toggleFavorite(property.id)}
                            className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors z-20 shadow-lg"
                          >
                            <Heart
                              className={`w-5 h-5 ${
                                favorites.includes(property.id) ? "text-red-500 fill-red-500" : "text-[#A07539]"
                              }`}
                            />
                          </button>
                        </div>
                        <div className="p-5 bg-white">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-bold text-[#252525] text-lg">{property.name}</h4>
                            <button className="p-1.5 hover:bg-[#EADD8E]/20 rounded-full transition-colors">
                              <ChevronRight className="w-4 h-4 text-[#A07539]" />
                            </button>
                          </div>
                          <div className="flex items-center text-[#A07539] mb-3">
                            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span className="text-sm font-medium">{property.location}</span>
                          </div>
                          <div className="text-xl font-bold text-[#252525]">{property.price}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop Navigation */}
                {/* <div className="flex items-center justify-center space-x-4 mt-8">
                  <button
                    onClick={handleDesktopPrevious}
                    className="p-3 rounded-full border-2 border-[#EADD8E] hover:bg-[#EADD8E] hover:text-[#252525] text-[#A07539] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleDesktopNext}
                    className="p-3 rounded-full border-2 border-[#EADD8E] hover:bg-[#EADD8E] hover:text-[#252525] text-[#A07539] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div> */}
              </div>
            </div>

            {/* Mobile/Tablet View - Une carte par page */}
            <div className="lg:hidden">
              <div className="relative">
                <div
                  ref={scrollContainerRef}
                  className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  onScroll={handleMobileScroll}
                >
                  {properties.map((property) => (
                    <div key={property.id} className="flex-none w-full snap-start px-4 sm:px-6">
                      <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white mx-auto max-w-sm sm:max-w-md">
                        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                          <div className={`absolute inset-0 bg-gradient-to-br ${property.color} opacity-20 z-10`}></div>
                          <Image
                            src={property.image}
                            alt={property.name}
                            width={400}
                            height={256}
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={() => toggleFavorite(property.id)}
                            className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors z-20 shadow-lg"
                          >
                            <Heart
                              className={`w-5 h-5 ${
                                favorites.includes(property.id) ? "text-red-500 fill-red-500" : "text-[#A07539]"
                              }`}
                            />
                          </button>
                        </div>
                        <div className="p-4 sm:p-5 bg-white">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-bold text-[#252525] text-base sm:text-lg">{property.name}</h4>
                            <button className="p-1.5 hover:bg-[#EADD8E]/20 rounded-full transition-colors">
                              <ChevronRight className="w-4 h-4 text-[#A07539]" />
                            </button>
                          </div>
                          <div className="flex items-center text-[#A07539] mb-3">
                            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span className="text-sm font-medium">{property.location}</span>
                          </div>
                          <div className="text-lg sm:text-xl font-bold text-[#252525]">{property.price}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile Navigation */}
                <div className="flex items-center justify-center space-x-4 mt-6 sm:mt-8">
                  <button
                    onClick={handleMobilePrevious}
                    className="p-2.5 sm:p-3 rounded-full border-2 border-[#EADD8E] hover:bg-[#EADD8E] hover:text-[#252525] text-[#A07539] transition-all duration-300 shadow-lg"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={handleMobileNext}
                    className="p-2.5 sm:p-3 rounded-full border-2 border-[#EADD8E] hover:bg-[#EADD8E] hover:text-[#252525] text-[#A07539] transition-all duration-300 shadow-lg"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 mt-4 sm:mt-6">
                  {properties.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToMobileIndex(index)}
                      className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "bg-[#A07539] scale-125" : "bg-[#EADD8E]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}