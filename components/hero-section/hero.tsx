"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const imageInView = useInView(imageRef, { once: true, margin: "-50px" })

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8])

  // Fonction pour gérer l'appel
  const handleCall = () => {
    window.open('tel:+225 01 42 22 33 43', '_self')
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Image de fond complète */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/backgrounds/background-black-gray.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay pour améliorer la lisibilité si nécessaire */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Image centrale */}
      <motion.div
        ref={imageRef}
        className="relative z-10 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: imageInView ? 1 : 0, scale: imageInView ? 1 : 0.8 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        style={{ y, opacity }}
      >
        {/* Container de l'image avec effet de blur */}
        <motion.div
          className="relative overflow-hidden rounded-2xl"
          initial={{ filter: "blur(20px)", scale: 0.9 }}
          animate={{
            filter: imageInView ? "blur(0px)" : "blur(20px)",
            scale: imageInView ? 1 : 0.9,
          }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0  z-10"
            // className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: imageInView ? 1 : 0 }}
            transition={{ duration: 1, delay: 1 }}
          />

          <Image
            src="/assets/images/illustrations/page-accueil/photo2-removebg-preview-Pica.png"
            alt="Leah Remini - Professional Portrait"
            width={600}
            height={800}
            className="w-full h-screen object-cover max-w-md lg:max-w-lg xl:max-w-xl"
            priority
          />
        </motion.div>

        {/* Éléments flottants */}
        {/* Premier élément flottant - Haut droit */}
        <motion.div
          className="absolute -top-4 -right-4 w-24 h-24 bg-white/30 backdrop-blur-md rounded-full"
          initial={{ opacity: 0, scale: 0, y: 0 }}
          animate={imageInView ? {
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          } : {
            opacity: 0,
            scale: 0,
            y: 0,
          }}
          transition={{ 
            duration: 3,
            delay: 1.2,
            repeat: imageInView ? Number.POSITIVE_INFINITY : 0,
            ease: "easeInOut",
          }}
        />

        {/* Deuxième élément flottant - Bas gauche */}
        <motion.div
          className="absolute -bottom-6 -left-6 w-16 h-16 bg-gray-800/20 backdrop-blur-md rounded-full"
          initial={{ opacity: 0, scale: 0, y: 0 }}
          animate={imageInView ? {
            opacity: 1,
            scale: 1,
            y: [0, 10, 0],
          } : {
            opacity: 0,
            scale: 0,
            y: 0,
          }}
          transition={{ 
            duration: 4,
            delay: 1.4,
            repeat: imageInView ? Number.POSITIVE_INFINITY : 0,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Bouton d'appel fixe - Bottom Right */}
      <motion.button
        onClick={handleCall}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl backdrop-blur-sm transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 flex items-center justify-center group"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
        whileHover={{ 
          boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.4)",
          y: -2
        }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Icône de téléphone */}
        <svg 
          className="w-7 h-7 transform group-hover:rotate-12 transition-transform duration-300" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.19 11.19 0 003.48.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.19 11.19 0 00.56 3.48 1 1 0 01-.27 1.11l-2.17 2.2z"/>
        </svg>

        {/* Animation de pulsation */}
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
      </motion.button>

      {/* Tooltip pour le bouton d'appel */}
      <motion.div
        className="fixed bottom-6 right-24 z-40 bg-black/80 text-white text-sm px-3 py-2 rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 0, x: 0 }}
      >
        Appelez-nous maintenant
        <div className="absolute top-1/2 -right-1 w-2 h-2 bg-black/80 rotate-45 transform -translate-y-1/2" />
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}