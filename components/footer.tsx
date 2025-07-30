"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function FooterSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  
  return (
    <section id="propos" ref={containerRef} className="relative overflow-hidden py-16" style={{ backgroundColor: '#3C3C3C' }}>
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

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Decorative line above copyright */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="h-0.5"
            style={{ 
              background: `linear-gradient(to right, transparent 0%, #616161 30%, #DCDCDC 50%, #616161 70%, transparent 100%)` 
            }}
            initial={{ width: 0 }}
            animate={{ width: isInView ? 200 : 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          />
        </motion.div>

        {/* Copyright container with enhanced styling */}
        <motion.div
          className="backdrop-blur-sm p-8 rounded-2xl relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(71, 70, 70, 0.4) 0%, rgba(60, 60, 60, 0.4) 100%)',
            border: '1px solid rgba(220, 220, 220, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}
          initial={{ opacity: 0, scale: 0.9, filter: "blur(15px)" }}
          animate={{
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.9,
            filter: isInView ? "blur(0px)" : "blur(15px)",
          }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          {/* Subtle glow effect inside container */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `radial-gradient(circle at center, rgba(97, 97, 97, 0.1) 0%, transparent 70%)`
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 2, delay: 1.2 }}
          />

          {/* Copyright symbol with special animation */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.span
              className="text-2xl font-bold"
              style={{ color: '#616161' }}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: isInView ? 1 : 0, 
                rotate: isInView ? 0 : -180 
              }}
              transition={{ duration: 1, delay: 1.2, type: "spring", bounce: 0.4 }}
            >
              ©
            </motion.span>
            
            <motion.span
              className="text-xl font-semibold tracking-wider"
              style={{ color: '#DCDCDC' }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              {new Date().getFullYear()}
            </motion.span>
          </motion.div>

          {/* Main copyright text */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.p
              className="text-lg font-medium tracking-wide"
              style={{ color: '#DCDCDC' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              By{" "}
              <motion.span
                className="font-bold"
                style={{ color: '#616161' }}
                whileHover={{ 
                  color: '#DCDCDC',
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                Younoussa Sonde
              </motion.span>
            </motion.p>
            
            <motion.p
              className="text-sm opacity-80"
              style={{ color: '#DCDCDC' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 0.8 : 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Tous droits réservés
            </motion.p>
          </motion.div>

          {/* Animated underline */}
          <motion.div
            className="mt-6 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <motion.div
              className="h-0.5 rounded-full"
              style={{ 
                background: `linear-gradient(to right, #616161, #DCDCDC, #616161)` 
              }}
              initial={{ width: 0 }}
              animate={{ width: isInView ? 120 : 0 }}
              transition={{ duration: 1, delay: 1.9 }}
            />
          </motion.div>
        </motion.div>

        {/* Decorative line below copyright */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div
            className="h-0.5"
            style={{ 
              background: `linear-gradient(to right, transparent 0%, #616161 30%, #DCDCDC 50%, #616161 70%, transparent 100%)` 
            }}
            initial={{ width: 0 }}
            animate={{ width: isInView ? 160 : 0 }}
            transition={{ duration: 1, delay: 2.1 }}
          />
        </motion.div>
      </div>

      {/* Enhanced decorative floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-2 h-2 rounded-full shadow-lg"
        style={{ backgroundColor: 'rgba(97, 97, 97, 0.4)' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-3 h-3 rounded-full shadow-lg"
        style={{ backgroundColor: 'rgba(220, 220, 220, 0.3)' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 2.4 }}
        animate={{
          y: [0, 15, 0],
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 right-20 w-1 h-1 rounded-full shadow-md"
        style={{ backgroundColor: 'rgba(97, 97, 97, 0.6)' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 2.6 }}
        animate={{
          x: [0, -10, 0],
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: 'rgba(220, 220, 220, 0.4)' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 2.8 }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Bottom gradient fade */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to top, #3C3C3C 0%, transparent 100%)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      />
    </section>
  )
}