"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Eye, ExternalLink } from "lucide-react"

interface GalleryItem {
  id: number
  src: string
  title: string
  category: string
  description: string
  size: "small" | "medium" | "large"
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/assets/images/illustrations/page-accueil/item-1.png",
    title: "Regard Intense",
    category: "PORTRAIT",
    description: "Un regard qui en dit long, capturant la profondeur émotionnelle de Younoussa Sonde.",
    size: "large",
  },
  {
    id: 2,
    src: "/assets/images/illustrations/page-accueil/item-2.png",
    title: "Silhouette de Rôle",
    category: "PERSONNAGE",
    description: "Instant capturé d'un rôle poignant, entre ombre et lumière.",
    size: "medium",
  },
  {
    id: 3,
    src: "/assets/images/illustrations/page-accueil/item-3.png",
    title: "Lumière Ivoirienne",
    category: "CINÉMA AFRICAIN",
    description: "Hommage aux couleurs et ambiances du cinéma ivoirien.",
    size: "large",
  },
  {
    id: 4,
    src: "/assets/images/illustrations/page-accueil/item-4.png",
    title: "Scène de Vie",
    category: "THÉÂTRE",
    description: "Performance sur scène, où chaque geste compte.",
    size: "medium",
  },
  {
    id: 5,
    src: "/assets/images/illustrations/page-accueil/item-5.png",
    title: "Derrière le Rideau",
    category: "BACKSTAGE",
    description: "Un instant volé dans les coulisses, juste avant l'entrée en scène.",
    size: "small",
  },
  {
    id: 6,
    src: "/assets/images/illustrations/page-accueil/item-6.png",
    title: "La Ville en Rôle",
    category: "URBAIN",
    description: "Immersion dans un tournage en extérieur, au cœur d'Abidjan.",
    size: "medium",
  },
  {
    id: 7,
    src: "/assets/images/illustrations/page-accueil/item-7.png",
    title: "Travail en Studio",
    category: "STUDIO",
    description: "Séance photo professionnelle avec lumière maîtrisée.",
    size: "small",
  },
  {
    id: 8,
    src: "/assets/images/illustrations/page-accueil/item-8.png",
    title: "L'homme et la nature",
    category: "EXTÉRIEUR",
    description: "Harmonie entre expression artistique et environnement naturel.",
    size: "large",
  },
]


export default function ActorGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "small":
        return "col-span-1 row-span-1 h-64"
      case "medium":
        return "col-span-1 row-span-2 h-80"
      case "large":
        return "col-span-2 row-span-2 h-96"
      default:
        return "col-span-1 row-span-1 h-64"
    }
  }

  return (
    // <section ref={containerRef} className="relative py-24 lg:py-32 bg-[#DCDCDC] overflow-hidden">
      <section id="galerie" ref={containerRef} className="relative py-24 lg:py-32 bg-[#3C3C3C] overflow-hidden">
      {/* Background pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #3C3C3C 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.05 : 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Accent line with custom colors */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="w-16 h-0.5"
              style={{
                background: 'linear-gradient(to right, #616161, #474646)'
              }}
              initial={{ width: 0 }}
              animate={{ width: isInView ? 64 : 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          <motion.h2
            // className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-[0.2em] text-[#3C3C3C] mb-4 drop-shadow-sm"
            className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-[0.2em] text-[#DCDCDC] mb-4 drop-shadow-sm"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{
              opacity: isInView ? 1 : 0,
              filter: isInView ? "blur(0px)" : "blur(10px)",
            }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            GALERIE
          </motion.h2>

          <motion.p
            // className="text-lg text-[#474646] font-poppins max-w-2xl mx-auto"
            className="text-lg text-[#DCDCDC] font-poppins max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Une collection organisée de photographies professionnelles présentant diverses expressions artistiques et moments cinématographiques.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-min"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500 ${getSizeClasses(item.size)}`}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 50,
                filter: isInView ? "blur(0px)" : "blur(10px)",
              }}
              transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(item)}
            >
              {/* Image */}
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#3C3C3C]/80 via-[#3C3C3C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />

              {/* Number Badge */}
              <motion.div
                className="absolute top-4 left-4 w-12 h-12 bg-[#DCDCDC]/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <span className="text-sm font-bold text-[#3C3C3C]">{item.id.toString().padStart(2, "0")}</span>
              </motion.div>

              {/* View Icon */}
              <motion.div
                className="absolute top-4 right-4 w-10 h-10 bg-[#616161]/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                <Eye size={16} className="text-[#DCDCDC]" />
              </motion.div>

              {/* Content */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                initial={false}
              >
                <motion.div
                  className="backdrop-blur-sm p-4 rounded-lg shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #474646/20 0%, #3C3C3C/20 100%)',
                    border: '1px solid rgba(220, 220, 220, 0.2)'
                  }}
                  initial={false}
                >
                  <h3 className="text-[#DCDCDC] font-semibold text-lg mb-1 drop-shadow-sm">{item.title}</h3>
                  {/* <p className="text-[#616161] text-sm font-medium tracking-wider mb-2">{item.category}</p> */}
                  <p className="text-[#DCDCDC] text-sm font-medium tracking-wider font-poppins mb-2">{item.category}</p>
                  <p className="text-[#DCDCDC]/90 text-sm leading-relaxed font-poppins">{item.description}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.button
            // className="group relative px-8 py-4 border-2 border-[#3C3C3C] text-[#3C3C3C] font-medium tracking-[0.2em] text-sm hover:border-[#616161] hover:text-[#616161] transition-all duration-500 rounded-full overflow-hidden flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl"
            className="group relative px-8 py-4 border-2 border-[#616161]/50 text-[#DCDCDC] font-medium tracking-[0.2em] text-sm hover:border-[#DCDCDC] hover:text-[#616161] transition-all duration-500 overflow-hidden flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button background effect */}
            <motion.div
              // className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, #616161/10 0%, #474646/10 100%)'
              }}
              initial={false}
            />

            <span className="relative z-10">VOIR TOUTES LES IMAGES</span>
            <ExternalLink size={16} className="relative z-10" />

            {/* Hover line effect */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5"
              style={{
                background: 'linear-gradient(to right, #616161, #474646)'
              }}
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-[#3C3C3C]/90 backdrop-blur-sm flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.title}
              width={800}
              height={600}
              className="w-full h-auto object-contain rounded-lg shadow-2xl"
            />

            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 rounded-b-lg"
              style={{
                background: 'linear-gradient(to top, #3C3C3C/80 0%, transparent 100%)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-[#DCDCDC] text-2xl font-semibold mb-2 drop-shadow-lg">{selectedImage.title}</h3>
              <p className="text-[#DCDCDC] text-sm font-medium tracking-wider font-poppins mb-2">{selectedImage.category}</p>
              {/* <p className="text-[#616161] text-sm font-medium tracking-wider mb-2">{selectedImage.category}</p> */}
              <p className="text-[#DCDCDC]/90 leading-relaxed font-poppins">{selectedImage.description}</p>
            </motion.div>

            <button
              className="absolute top-4 right-4 w-10 h-10 bg-[#DCDCDC]/20 backdrop-blur-sm rounded-full flex items-center justify-center text-[#DCDCDC] hover:bg-[#DCDCDC]/30 transition-colors duration-300 shadow-lg"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Decorative floating elements with custom colors */}
      <motion.div
        className="absolute top-20 left-10 w-3 h-3 bg-[#616161]/40 rounded-full shadow-lg"
        initial={{ opacity: 0, scale: 0, y: 0 }}
        animate={isInView ? {
          opacity: [0, 0.4, 0.8, 0.4],
          scale: 1,
          y: [0, -20, 0],
        } : {
          opacity: 0,
          scale: 0,
          y: 0,
        }}
        transition={{ 
          duration: 5,
          delay: 2,
          repeat: isInView ? Number.POSITIVE_INFINITY : 0,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-2 h-2 bg-[#474646]/50 rounded-full shadow-lg"
        initial={{ opacity: 0, scale: 0, y: 0 }}
        animate={isInView ? {
          opacity: [0, 0.5, 0.8, 0.5],
          scale: 1,
          y: [0, 15, 0],
        } : {
          opacity: 0,
          scale: 0,
          y: 0,
        }}
        transition={{ 
          duration: 4,
          delay: 2.2,
          repeat: isInView ? Number.POSITIVE_INFINITY : 0,
          ease: "easeInOut",
        }}
      />
    </section>
  )
}