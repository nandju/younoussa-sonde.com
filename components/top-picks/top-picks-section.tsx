"use client"

import Image from "next/image"
import { useState, useRef } from "react"
import { Heart, MapPin, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react"

import { properties } from "./data"

export default function TopPicksSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [favorites, setFavorites] = useState<number[]>([])
  const [expandedCard, setExpandedCard] = useState<number | null>(4) // Default to Happy Lagoon Farm
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const toggleFavorite = (propertyId: number) => {
    setFavorites((prev) => (prev.includes(propertyId) ? prev.filter((id) => id !== propertyId) : [...prev, propertyId]))
  }

  const toggleExpanded = (propertyId: number) => {
    setExpandedCard(expandedCard === propertyId ? null : propertyId)
  }

  const getVisibleProperties = () => {
    return properties.slice(currentIndex, currentIndex + 4)
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < properties.length - 4) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const canGoPrevious = currentIndex > 0
  const canGoNext = currentIndex < properties.length - 4

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-600 text-sm font-medium mb-4">
              POPULAIRE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900">Meilleurs choix de propriétés à louer</h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden sm:flex items-center space-x-2">
            <button
              onClick={handlePrevious}
              disabled={!canGoPrevious}
              className={`p-3 rounded-full border transition-colors ${
                canGoPrevious
                  ? "border-gray-300 hover:bg-gray-50 text-gray-600"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className={`p-3 rounded-full border transition-colors ${
                canGoNext
                  ? "border-gray-300 hover:bg-gray-50 text-gray-600"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {getVisibleProperties().map((property) => (
            <div key={property.id} className="group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Property Image */}
                <div className="relative h-64 sm:h-48 lg:h-56">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        favorites.includes(property.id) ? "text-red-500 fill-red-500" : "text-gray-600"
                      }`}
                    />
                  </button>
                </div>

                {/* Property Info */}
                <div className="bg-white p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 text-lg">{property.name}</h3>
                    <button
                      onClick={() => toggleExpanded(property.id)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                      {expandedCard === property.id ? (
                        <ChevronUp className="w-4 h-4 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-600" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center text-[#A07539] mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="text-xl font-bold text-gray-900 mb-3">{property.price}</div>

                  {/* Expanded Description */}
                  {expandedCard === property.id && (
                    <div className="border-t pt-3 mt-3 animate-in slide-in-from-top-2 duration-200">
                      <p className="text-sm text-gray-600 leading-relaxed">{property.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex sm:hidden items-center justify-center space-x-4 mt-8">
          <button
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            className={`p-3 rounded-full border transition-colors ${
              canGoPrevious
                ? "border-gray-300 hover:bg-gray-50 text-gray-600"
                : "border-gray-200 text-gray-300 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm text-gray-500">
            {currentIndex + 1}-{Math.min(currentIndex + 4, properties.length)} of {properties.length}
          </span>
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className={`p-3 rounded-full border transition-colors ${
              canGoNext
                ? "border-gray-300 hover:bg-gray-50 text-gray-600"
                : "border-gray-200 text-gray-300 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(properties.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 4)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentIndex / 4) === index ? "bg-gray-900" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
