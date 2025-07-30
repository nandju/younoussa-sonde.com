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
    title: "Mon Unique Péché S2",
    category: "DRAMA",
    year: "2024",
    role: "Gangster",
    poster: "/assets/images/illustrations/page-accueil/film1.png",
    trailer: "https://web.facebook.com/sonde2barca/videos/1056131302591625",
    description: "Mon unique péché est une série de de 90 épisodes de 26 minutes chacun qui explore des thèmes et situations que vivent les populations ivoiriennes et même africaines au quotidien.",
    awards: ["Belle Prestation"],
  },
  {
    id: 2,
    title: "Isabelle",
    category: "THRILLER",
    year: "2023",
    role: "Voleur",
    poster: "/assets/images/illustrations/page-accueil/film2.png",
    trailer: "https://web.facebook.com/sonde2barca/videos/966481178060339",
    description: "« Nul ne résiste à la tentation », tel est le slogan qui décrit la quintessence de la trame de cette nouvelle production 100% locale. En effet, la série de 44 épisodes raconte les aventures d'Isabelle, une jeune fille moderne addicte aux réseaux sociaux. Cette dernière douée d'une intelligence fine, use de son charme pour résoudre des enquêtes 'spéciales' et de tout ordre.",
  },
  {
    id: 3,
    title: "NON A LA DROGUE",
    category: "ADVENTURE",
    year: "2024",
    role: "Drogué",
    poster: "/assets/images/illustrations/page-accueil/item-10.png",
    trailer: "https://web.facebook.com/sonde2barca/videos/1480450459545817",
    description: "court métrage contre la drogue : court et percutant",
    awards: ["Prestation digne d'un oscar"],
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
    <section id="filmographie" ref={containerRef} className="relative overflow-hidden" style={{ backgroundColor: '#3C3C3C' }}>
      {/* Background texture */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          background: `linear-gradient(135deg, #3C3C3C 0%, #474646 50%, #616161 100%)` 
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Subtle pattern overlay */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #DCDCDC 1px, transparent 0)`,
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
              className="group relative overflow-hidden cursor-pointer min-h-screen w-auto"
              style={{ backgroundColor: '#474646' }}
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
                className="absolute inset-0 opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                style={{ 
                  background: `linear-gradient(to top, rgba(60, 60, 60, 0.95) 0%, rgba(71, 70, 70, 0.4) 50%, transparent 100%)` 
                }}
                initial={false}
              />

              {/* Number Badge */}
              <motion.div
                className="absolute top-6 left-6 w-14 h-14 backdrop-blur-sm rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(220, 220, 220, 0.9)' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <span className="text-lg font-bold" style={{ color: '#3C3C3C' }}>
                  {film.id.toString().padStart(2, "0")}
                </span>
              </motion.div>

              {/* Play Button */}
              <motion.div
                className="absolute top-6 right-6 w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ backgroundColor: 'rgba(220, 220, 220, 0.2)' }}
                whileHover={{ scale: 1.1 }}
                onClick={(e) => {
                  e.stopPropagation()
                  if (film.trailer) openTrailer(film.trailer)
                }}
              >
                <Play size={20} style={{ color: '#DCDCDC' }} className="ml-1" />
              </motion.div>

              {/* Year Badge */}
              <motion.div
                className="absolute top-6 right-20 px-3 py-1 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ backgroundColor: 'rgba(60, 60, 60, 0.8)' }}
                initial={false}
              >
                <span className="text-sm font-medium flex items-center gap-1" style={{ color: '#DCDCDC' }}>
                  <Calendar size={12} />
                  {film.year}
                </span>
              </motion.div>

              {/* Awards Badge */}
              {film.awards && (
                <motion.div
                  className="absolute top-20 right-6 px-3 py-1 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"
                  style={{ backgroundColor: 'rgba(220, 220, 220, 0.9)' }}
                  initial={false}
                >
                  <span className="text-xs font-medium flex items-center gap-1" style={{ color: '#3C3C3C' }}>
                    <Award size={10} />
                    AWARD
                  </span>
                </motion.div>
              )}

              {/* Film Information */}
              <motion.div className="absolute bottom-0 left-0 right-0 p-6" initial={false}>
                <motion.div
                  className="backdrop-blur-sm p-6 rounded-xl border"
                  style={{ 
                    backgroundColor: 'rgba(60, 60, 60, 0.4)',
                    borderColor: 'rgba(220, 220, 220, 0.1)'
                  }}
                  initial={false}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-xl lg:text-2xl mb-2 leading-tight" style={{ color: '#DCDCDC' }}>
                        {film.title}
                      </h3>
                      <p className="text-sm font-semibold font-poppins tracking-wider mb-1" style={{ color: '#DCDCDC' }}>
                        {film.category}
                      </p>
                      <p className="text-sm font-poppins" style={{ color: '#DCDCDC' }}>
                        {film.role}
                      </p>
                    </div>
                  </div>

                  {/* Description - appears on hover */}
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    whileHover={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm leading-relaxed pt-3 border-t" 
                       style={{ 
                         color: '#DCDCDC',
                         borderColor: 'rgba(220, 220, 220, 0.2)'
                       }}>
                      {film.description}
                    </p>
                    {film.awards && (
                      <div className="mt-3 pt-3 border-t" style={{ borderColor: 'rgba(97, 97, 97, 0.3)' }}>
                        <p className="text-xs font-medium" style={{ color: '#616161' }}>
                          🏆 {film.awards.join(", ")}
                        </p>
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
          className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center p-6"
          style={{ backgroundColor: 'rgba(60, 60, 60, 0.95)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedFilm(null)}
        >
          <motion.div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
            style={{ backgroundColor: '#474646' }}
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
              <div 
                className="absolute inset-0"
                style={{ 
                  background: `linear-gradient(to top, #474646 0%, transparent 50%, transparent 100%)` 
                }}
              />

              <button
                className="absolute top-4 right-4 w-10 h-10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                style={{ 
                  backgroundColor: 'rgba(220, 220, 220, 0.2)',
                  color: '#DCDCDC'
                }}
                onClick={() => setSelectedFilm(null)}
              >
                ×
              </button>

              {selectedFilm.trailer && (
                <button
                  className="absolute bottom-4 right-4 px-4 py-2 rounded-full font-medium flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
                  style={{ 
                    backgroundColor: '#DCDCDC',
                    color: '#3C3C3C'
                  }}
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
                  <h3 className="text-3xl font-bold mb-2" style={{ color: '#DCDCDC' }}>
                    {selectedFilm.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="font-semibold" style={{ color: '#DCDCDC' }}>
                      {selectedFilm.category}
                    </span>
                    <span style={{ color: '#DCDCDC' }}>•</span>
                    <span style={{ color: '#DCDCDC' }}>{selectedFilm.year}</span>
                    <span style={{ color: '#DCDCDC' }}>•</span>
                    <span style={{ color: '#DCDCDC' }}>{selectedFilm.role}</span>
                  </div>
                </div>
              </div>

              <p className="leading-relaxed font-poppins mb-6" style={{ color: '#DCDCDC' }}>
                {selectedFilm.description}
              </p>

              {selectedFilm.awards && (
                <div className="border-t pt-6" style={{ borderColor: '#616161' }}>
                  <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: '#616161' }}>
                    <Award size={16} />
                    Awards & Recognition
                  </h4>
                  <ul className="space-y-2">
                    {selectedFilm.awards.map((award, index) => (
                      <li key={index} className="text-sm" style={{ color: '#DCDCDC' }}>
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
      className="absolute top-20 left-10 w-2 h-2 rounded-full"
      style={{ backgroundColor: 'rgba(97, 97, 97, 0.3)' }}
      initial={{ opacity: 0, scale: 0, y: 0 }}
      animate={isInView ? {
        opacity: [0, 0.3, 0.7, 0.3],
        scale: 1,
        y: [0, -15, 0],
      } : {
        opacity: 0,
        scale: 0,
        y: 0,
      }}
      transition={{ 
        duration: 4,
        delay: 1.5,
        repeat: isInView ? Number.POSITIVE_INFINITY : 0,
        ease: "easeInOut",
      }}
    />

    <motion.div
      className="absolute bottom-20 right-10 w-3 h-3 rounded-full"
      style={{ backgroundColor: 'rgba(220, 220, 220, 0.2)' }}
      initial={{ opacity: 0, scale: 0, y: 0 }}
      animate={isInView ? {
        opacity: [0, 0.2, 0.6, 0.2],
        scale: 1,
        y: [0, 20, 0],
      } : {
        opacity: 0,
        scale: 0,
        y: 0,
      }}
      transition={{ 
        duration: 5,
        delay: 1.7,
        repeat: isInView ? Number.POSITIVE_INFINITY : 0,
        ease: "easeInOut",
      }}
    />
    </section>
  )
}