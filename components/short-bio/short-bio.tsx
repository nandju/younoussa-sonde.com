"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function ShortBio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="propos" ref={containerRef} className="relative py-24 lg:py-32 bg-[#3C3C3C] overflow-hidden">
      {/* Background texture overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #3C3C3C 0%, #474646 50%, #3C3C3C 100%)'
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
          backgroundSize: "50px 50px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.05 : 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
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

        {/* Welcome heading */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{
            opacity: isInView ? 1 : 0,
            filter: isInView ? "blur(0px)" : "blur(10px)",
          }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-[0.3em] text-[#DCDCDC] mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            BIENVENU
          </motion.h2>
        </motion.div>

        {/* Bio text container with blur effect */}
        <motion.div
          className="backdrop-blur-sm p-8 lg:p-12  mb-12 "
          style={{
            background: 'linear-gradient(135deg, #474646/30 0%, #3C3C3C/30 100%)',
            border: '1px solid #616161/20'
          }}
          initial={{ opacity: 0, scale: 0.9, filter: "blur(15px)" }}
          animate={{
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.9,
            filter: isInView ? "blur(0px)" : "blur(15px)",
          }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <motion.p
            className="text-lg lg:text-xl text-[#DCDCDC] font-poppins leading-relaxed max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 0.9 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            
            Je suis <span className="italic text-2xl lg:text-3xl">Younoussa Sonde</span> , dit <span className="italic text-2xl lg:text-3xl">LE PRINCE</span> , un acteur ivoirien passionné par l’art de raconter. 
            Mon amour pour le cinéma s’exprime aussi bien en noir et blanc qu’en couleur. 
            Dès l’enfance, j’ai été captivé par la magie de l’écran et la puissance de l’interprétation. 
            Des rôles intimistes aux récits épiques, j’incarne chaque personnage avec intensité et vérité. 
            À travers chaque histoire, je cherche à transmettre une émotion authentique et marquante.

          </motion.p>
        </motion.div>

        {/* Read More button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            className="group relative px-8 py-3 border-2 border-[#616161]/50 text-[#DCDCDC] font-medium tracking-[0.2em] text-sm hover:border-[#DCDCDC] hover:text-[#616161] transition-all duration-500 overflow-hidden shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button background effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, #DCDCDC/10 0%, #616161/10 100%)'
              }}
              initial={false}
            />

            {/* Button text */}
            <span className="relative z-10">EN SAVOIR PLUS</span>

            {/* Hover line effect */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5"
              style={{
                background: 'linear-gradient(to right, #616161, #DCDCDC)'
              }}
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </motion.div>

        {/* Decorative floating elements with custom colors */}
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-[#616161]/40 rounded-full shadow-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-3 h-3 bg-[#DCDCDC]/30 rounded-full shadow-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/2 right-20 w-1 h-1 bg-[#616161]/60 rounded-full shadow-md"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          animate={{
            x: [0, -10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Additional decorative elements */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-[#DCDCDC]/40 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Bottom gradient fade */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to top, #3C3C3C 0%, transparent 100%)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
    </section>
  )
}