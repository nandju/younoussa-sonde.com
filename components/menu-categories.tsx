"use client"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const categories = [
  { name: "CHIPS SUCREE v1", icon: "/assets/images/illustrations/page-accueil/chips3.jpg" },
  { name: "CHIPS SUCREE v2", icon: "/assets/images/illustrations/page-accueil/chips4.jpg" },
  { name: "CHIPS SUCREE v3", icon: "/assets/images/illustrations/page-accueil/chips5.jpg" },
  { name: "CHIPS SUCREE v4", icon: "/assets/images/illustrations/page-accueil/chips6.jpg" },
  { name: "CHIPS SUCREE v5", icon: "/assets/images/illustrations/page-accueil/chips3-r.png.png" },
  { name: "CHIPS SUCREE v4", icon: "/assets/images/illustrations/page-accueil/chips6.jpg" },
  { name: "CHIPS SUCREE v5", icon: "/assets/images/illustrations/page-accueil/chips3-r.png.png" },
]

export default function MenuCategories() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftButton, setShowLeftButton] = useState(false)
  const [showRightButton, setShowRightButton] = useState(true)

  // Check if scroll buttons should be visible
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        // Show left button only if not at the start
        setShowLeftButton(scrollRef.current.scrollLeft > 0)
        
        // Show right button only if not at the end
        const isAtEnd = 
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= 
          scrollRef.current.scrollWidth - 10 // Small buffer for precision
        setShowRightButton(!isAtEnd)
      }
    }

    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll)
      // Initial check
      handleScroll()
      
      return () => {
        scrollElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollDistance = 300
      const currentScroll = scrollRef.current.scrollLeft
      
      scrollRef.current.scrollTo({
        left: direction === "left" 
          ? Math.max(0, currentScroll - scrollDistance)
          : currentScroll + scrollDistance,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="bg-white py-16 px-4 shadow-2xl relative">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Centered title */}
        <div className="flex justify-center mb-8 absolute inset-x-0 -top-8">
          <div className="bg-[#d0a825] px-12 py-4 rounded-full">
            <span className="font-bold text-white text-lg">MENU</span>
          </div>
        </div>

        {/* Container with relative positioning for scroll buttons */}
        <div className="relative px-10">
          {/* Left scroll button - conditionally visible */}
          {showLeftButton && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 transition-colors border border-gray-200"
              aria-label="Défiler vers la gauche"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
          )}

          {/* Right scroll button - conditionally visible */}
          {showRightButton && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 transition-colors border border-gray-200"
              aria-label="Défiler vers la droite"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          )}

          {/* Centered scrollable content */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar py-4 scroll-smooth justify-start"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category, index) => (
              <Link
                href="#"
                key={index}
                className="flex-shrink-0 w-44 flex flex-col items-center rounded-xl font-medium hover:font-extrabold shadow-lg py-12 px-8 transition-all hover:border-b-4 hover:border-[#744838] group bg-white"
              >
                <div className="relative w-28 h-28 mb-4 flex items-center justify-center">
                  <Image
                    src={category.icon || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform"
                    sizes="112px"
                  />
                </div>
                <span className="text-xs md:text-sm text-center">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}