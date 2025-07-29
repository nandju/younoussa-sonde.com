"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Play, Calendar, Award } from "lucide-react"

interface FilmItem {
  id: number
  title: string
  category: string
  year: string
  role: string
  poster: string
  trailer?: string
  description: string
  awards?: string[]
}

const filmItems: FilmItem[] = [
  {
    id: 1,
    title: "Beautiful Venice",
    category: "DRAMA",
    year: "2023",
    role: "Lead Actress",
    poster: "/assets/images/illustrations/page-accueil/item-4.png",
    trailer: "https://youtube.com/watch?v=example1",
    description: "A captivating drama set in the romantic canals of Venice, exploring love and loss.",
    awards: ["Best Actress - Venice Film Festival"],
  },
  {
    id: 2,
    title: "Lovely Room",
    category: "THRILLER",
    year: "2022",
    role: "Supporting",
    poster: "/assets/images/illustrations/page-accueil/item-4.png",
    trailer: "https://youtube.com/watch?v=example2",
    description: "A psychological thriller that unfolds within the confines of a single room.",
  },
  {
    id: 3,
    title: "Amazing Mountain",
    category: "ADVENTURE",
    year: "2024",
    role: "Lead Actress",
    poster: "/assets/images/illustrations/page-accueil/item-4.png",
    trailer: "https://youtube.com/watch?v=example3",
    description: "An epic adventure story set against the backdrop of majestic mountain ranges.",
    awards: ["Outstanding Performance - Mountain Film Festival"],
  },
]

export default function Filmography() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [selectedFilm, setSelectedFilm] = useState<FilmItem | null>(null)

  const openTrailer = (trailer: string) => {
    if (trailer) {
      window.open(trailer, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <section ref={containerRef} className="relative bg-gray-900 overflow-hidden">
      {/* Background texture */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Subtle pattern overlay */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "60px 60px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.05 : 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Filmography Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {filmItems.map((film, index) => (
            <motion.div
              key={film.id}
              className="group relative overflow-hidden cursor-pointer min-h-screen w-auto bg-gray-800"
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 50,
                filter: isInView ? "blur(0px)" : "blur(10px)",
              }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedFilm(film)}
            >
              {/* Film Poster */}
              <Image
                src={film.poster || `/placeholder.svg?height=400&width=600&query=${film.title} movie poster`}
                alt={`${film.title} - ${film.category}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                initial={false}
              />

              {/* Number Badge */}
              <motion.div
                className="absolute top-6 left-6 w-14 h-14 bg-yellow-400/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <span className="text-lg font-bold text-gray-900">{film.id.toString().padStart(2, "0")}</span>
              </motion.div>

              {/* Play Button */}
              <motion.div
                className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                whileHover={{ scale: 1.1 }}
                onClick={(e) => {
                  e.stopPropagation()
                  if (film.trailer) openTrailer(film.trailer)
                }}
              >
                <Play size={20} className="text-white ml-1" />
              </motion.div>

              {/* Year Badge */}
              <motion.div
                className="absolute top-6 right-20 px-3 py-1 bg-gray-900/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                initial={false}
              >
                <span className="text-sm text-white font-medium flex items-center gap-1">
                  <Calendar size={12} />
                  {film.year}
                </span>
              </motion.div>

              {/* Awards Badge */}
              {film.awards && (
                <motion.div
                  className="absolute top-20 right-6 px-3 py-1 bg-yellow-400/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"
                  initial={false}
                >
                  <span className="text-xs text-gray-900 font-medium flex items-center gap-1">
                    <Award size={10} />
                    AWARD
                  </span>
                </motion.div>
              )}

              {/* Film Information */}
              <motion.div className="absolute bottom-0 left-0 right-0 p-6" initial={false}>
                <motion.div
                  className="backdrop-blur-sm bg-black/40 p-6 rounded-xl border border-white/10"
                  initial={false}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-white font-bold text-xl lg:text-2xl mb-2 leading-tight">{film.title}</h3>
                      <p className="text-yellow-400 text-sm font-semibold tracking-wider mb-1">{film.category}</p>
                      <p className="text-gray-300 text-sm">{film.role}</p>
                    </div>
                  </div>

                  {/* Description - appears on hover */}
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    whileHover={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-300 text-sm leading-relaxed pt-3 border-t border-white/20">
                      {film.description}
                    </p>
                    {film.awards && (
                      <div className="mt-3 pt-3 border-t border-yellow-400/30">
                        <p className="text-yellow-400 text-xs font-medium">🏆 {film.awards.join(", ")}</p>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Film Detail Modal */}
      {selectedFilm && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedFilm(null)}
        >
          <motion.div
            className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-64 lg:h-80">
              <Image
                src={
                  selectedFilm.poster ||
                  `/placeholder.svg?height=400&width=800&query=${selectedFilm.title} movie poster`
                }
                alt={selectedFilm.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

              <button
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                onClick={() => setSelectedFilm(null)}
              >
                ×
              </button>

              {selectedFilm.trailer && (
                <button
                  className="absolute bottom-4 right-4 px-4 py-2 bg-yellow-400 text-gray-900 rounded-full font-medium flex items-center gap-2 hover:bg-yellow-300 transition-colors duration-300"
                  onClick={() => openTrailer(selectedFilm.trailer!)}
                >
                  <Play size={16} />
                  Watch Trailer
                </button>
              )}
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div>
                  <h3 className="text-white text-3xl font-bold mb-2">{selectedFilm.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="text-yellow-400 font-semibold">{selectedFilm.category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-300">{selectedFilm.year}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-300">{selectedFilm.role}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">{selectedFilm.description}</p>

              {selectedFilm.awards && (
                <div className="border-t border-gray-700 pt-6">
                  <h4 className="text-yellow-400 font-semibold mb-3 flex items-center gap-2">
                    <Award size={16} />
                    Awards & Recognition
                  </h4>
                  <ul className="space-y-2">
                    {selectedFilm.awards.map((award, index) => (
                      <li key={index} className="text-gray-300 text-sm">
                        🏆 {award}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-2 h-2 bg-yellow-400/30 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-3 h-3 bg-white/20 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.7 }}
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </section>
  )
}
