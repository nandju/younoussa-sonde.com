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

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Image de fond complète */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/backgrounds/background-horizontal.jpg"
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
            className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: imageInView ? 1 : 0 }}
            transition={{ duration: 1, delay: 1 }}
          />

          <Image
            src="/assets/images/illustrations/page-accueil/photo2-removebg-preview.png"
            alt="Leah Remini - Professional Portrait"
            width={600}
            height={800}
            className="w-full h-screen object-cover max-w-md lg:max-w-lg xl:max-w-xl"
            priority
          />
        </motion.div>

        {/* Éléments flottants */}
        <motion.div
          className="absolute -top-4 -right-4 w-24 h-24 bg-white/30 backdrop-blur-md rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: imageInView ? 1 : 0, scale: imageInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-6 -left-6 w-16 h-16 bg-gray-800/20 backdrop-blur-md rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: imageInView ? 1 : 0, scale: imageInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
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