"use client"

import Image from "next/image"
import { useState, useRef } from "react"
import { Heart, MapPin, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

const properties = [
  {
    id: 1,
    name: "Green Hangout Place",
    location: "Corona, Michigan",
    price: "$4,200.00",
    image: "/placeholder.svg?height=300&width=400",
    color: "from-green-400 to-teal-500",
  },
  {
    id: 2,
    name: "Vintage Offices",
    location: "Great Falls, Maryland",
    price: "$19,500.00",
    image: "/placeholder.svg?height=300&width=400",
    color: "from-blue-400 to-indigo-500",
  },
  {
    id: 3,
    name: "Blissful Office",
    location: "Coppell, Virginia",
    price: "$22,500.00",
    image: "/placeholder.svg?height=300&width=400",
    color: "from-cyan-400 to-blue-500",
  },
  {
    id: 4,
    name: "Modern Workspace",
    location: "Austin, Texas",
    price: "$18,750.00",
    image: "/placeholder.svg?height=300&width=400",
    color: "from-purple-400 to-pink-500",
  },
  {
    id: 5,
    name: "Urban Retreat",
    location: "Portland, Oregon",
    price: "$25,900.00",
    image: "/placeholder.svg?height=300&width=400",
    color: "from-orange-400 to-red-500",
  },
]

export default function ExplorePropertiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [favorites, setFavorites] = useState<number[]>([])
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const toggleFavorite = (propertyId: number) => {
    setFavorites((prev) => (prev.includes(propertyId) ? prev.filter((id) => id !== propertyId) : [...prev, propertyId]))
  }

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.scrollWidth / properties.length
      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : properties.length - 1
    scrollToIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex < properties.length - 1 ? currentIndex + 1 : 0
    scrollToIndex(newIndex)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* EXPLORE Badge */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-600 text-sm font-medium">
            EXPLORE
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 sm:mb-16 lg:mb-20">
          Explore our latest property
        </h2>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Side - Fresh Opportunities */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Fresh Opportunities</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Stay ahead of the curve with our latest property listings. From modern condos to charming houses, we
                have a variety of options to suit your needs. Explore our newest additions and find your perfect match.
              </p>
              <button className="inline-flex items-center text-gray-900 font-medium hover:text-blue-600 transition-colors group">
                Search more
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side - Property Cards */}
          <div className="lg:col-span-8 xl:col-span-9">
            {/* Desktop Grid View */}
            <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map((property) => (
                <div key={property.id} className="group cursor-pointer">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`absolute inset-0 bg-gradient-to-br ${property.color} opacity-90`}></div>
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <button
                      onClick={() => toggleFavorite(property.id)}
                      className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          favorites.includes(property.id) ? "text-red-500 fill-red-500" : "text-white"
                        }`}
                      />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{property.name}</h4>
                        <button className="p-1">
                          <ChevronRight className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                      <div className="flex items-center text-gray-500 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      <div className="text-xl font-bold text-gray-900">{property.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile/Tablet Carousel View */}
            <div className="lg:hidden">
              <div
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {properties.map((property) => (
                  <div key={property.id} className="flex-none w-80 sm:w-96 snap-start">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <div className={`absolute inset-0 bg-gradient-to-br ${property.color} opacity-90`}></div>
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.name}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                      <button
                        onClick={() => toggleFavorite(property.id)}
                        className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            favorites.includes(property.id) ? "text-red-500 fill-red-500" : "text-white"
                          }`}
                        />
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{property.name}</h4>
                          <button className="p-1">
                            <ChevronRight className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                        <div className="flex items-center text-gray-500 mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{property.location}</span>
                        </div>
                        <div className="text-xl font-bold text-gray-900">{property.price}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Navigation */}
              <div className="flex items-center justify-center space-x-4 mt-8">
                <button
                  onClick={handlePrevious}
                  className="p-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-4">
                {properties.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-gray-900" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
