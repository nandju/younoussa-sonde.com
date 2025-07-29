"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Play, Pause } from "lucide-react"

export default function Showreel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const openFacebookVideo = () => {
    window.open("https://www.facebook.com/sonde2barca/videos/1551979618656152", "_blank", "noopener,noreferrer")
  }

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-[#3C3C3C]">
      {/* Video Background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{
          scale: isInView ? 1 : 1.1,
          opacity: isInView ? 1 : 0,
        }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsPlaying(true)}
        >
          <source src="/assets/videos/perfomance-pro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video overlay for better text contrast */}
        <motion.div
          className="absolute inset-0 bg-[#3C3C3C]/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Accent line with custom colors */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="w-16 h-0.5"
              style={{
                background: 'linear-gradient(to right, #616161, #DCDCDC)'
              }}
              initial={{ width: 0 }}
              animate={{ width: isInView ? 64 : 0 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </motion.div>

          {/* Main Title */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{
              opacity: isInView ? 1 : 0,
              filter: isInView ? "blur(0px)" : "blur(10px)",
            }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <motion.h2
              className="text-5xl lg:text-7xl xl:text-8xl font-bold tracking-wider text-[#DCDCDC] mb-4 drop-shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              SHOW REEL
            </motion.h2>

            <motion.p
              className="text-lg lg:text-xl text-[#DCDCDC]/80 tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              JANVIER 2023
            </motion.p>
          </motion.div>

          {/* Buttons Container */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {/* Watch Here Button */}
            <motion.button
              onClick={openFacebookVideo}
              className="group relative px-8 py-4 border-2 border-[#DCDCDC] text-[#DCDCDC] font-medium tracking-[0.2em] text-sm hover:border-[#616161] hover:text-[#616161] transition-all duration-500 overflow-hidden flex items-center gap-3 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button background effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, #616161/10 0%, #DCDCDC/10 100%)'
                }}
                initial={false}
              />

              {/* Button content */}
              <span className="relative z-10">REGARDEZ ICI</span>
              <ExternalLink size={16} className="relative z-10" />

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

            {/* Play/Pause Control */}
            <motion.button
              onClick={toggleVideo}
              className="group relative p-4 border-2 border-[#DCDCDC]/50 text-[#DCDCDC] hover:border-[#616161] hover:text-[#616161] transition-all duration-500 rounded-full shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="absolute inset-0 bg-[#DCDCDC]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
                initial={false}
              />

              {isPlaying ? (
                <Pause size={20} className="relative z-10" />
              ) : (
                <Play size={20} className="relative z-10 ml-0.5" />
              )}
            </motion.button>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="mt-8 text-sm font-poppins text-[#DCDCDC]/60 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            Cliquez pour voir la bande démo complète sur Facebook
          </motion.p>
        </div>
      </div>

      {/* Decorative floating elements with custom colors */}
      <motion.div
        className="absolute top-20 left-10 w-3 h-3 bg-[#616161]/40 rounded-full shadow-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-2 h-2 bg-[#DCDCDC]/50 rounded-full shadow-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        animate={{
          y: [0, 25, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-20 w-1 h-1 bg-[#616161]/70 rounded-full shadow-md"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 2.4 }}
        animate={{
          x: [0, -15, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Bottom fade gradient */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to top, #3C3C3C 0%, #3C3C3C/50 50%, transparent 100%)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1, delay: 2 }}
      />
    </section>
  )
}