"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
} from "lucide-react"

export default function ProfessionalContact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
  }


  return (
    <section id="contacts" ref={containerRef} className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#3C3C3C' }}>
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
          backgroundSize: "50px 50px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.05 : 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center text-center">
          {/* Contact Form */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Accent line */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="w-16 h-0.5"
                style={{ 
                  background: `linear-gradient(to right, #616161, #DCDCDC)` 
                }}
                initial={{ width: 0 }}
                animate={{ width: isInView ? 64 : 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
            </motion.div>

            {/* Contact heading */}
            <motion.div
              className="text-center lg:text-left mb-12"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{
                opacity: isInView ? 1 : 0,
                filter: isInView ? "blur(0px)" : "blur(10px)",
              }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <motion.h2
                className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-[0.3em] mb-4"
                style={{ color: '#DCDCDC' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                ME CONTACTER
              </motion.h2>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="backdrop-blur-sm p-8 lg:p-10 rounded-2xl border"
              style={{ 
                backgroundColor: 'rgba(71, 70, 70, 0.3)',
                borderColor: 'rgba(220, 220, 220, 0.1)'
              }}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(15px)" }}
              animate={{
                opacity: isInView ? 1 : 0,
                scale: isInView ? 1 : 0.9,
                filter: isInView ? "blur(0px)" : "blur(15px)",
              }}
              transition={{ duration: 1.5, delay: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  className="relative font-poppins"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2" style={{ color: '#616161' }} size={18} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Nom *"
                      required
                      className="w-full bg-transparent border-b-2 py-4 pl-12 pr-4 transition-colors duration-300 focus:outline-none"
                      style={{ 
                        borderColor: '#616161',
                        color: '#DCDCDC'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#DCDCDC'}
                      onBlur={(e) => e.target.style.borderColor = '#616161'}
                    />
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  className="relative font-poppins"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2" style={{ color: '#616161' }} size={18} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email *"
                      required
                      className="w-full bg-transparent border-b-2 py-4 pl-12 pr-4 transition-colors duration-300 focus:outline-none"
                      style={{ 
                        borderColor: '#616161',
                        color: '#DCDCDC'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#DCDCDC'}
                      onBlur={(e) => e.target.style.borderColor = '#616161'}
                    />
                  </div>
                </motion.div>

                {/* Phone Field */}
                <motion.div
                  className="relative font-poppins"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2" style={{ color: '#616161' }} size={18} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Téléphone"
                      className="w-full bg-transparent border-b-2 py-4 pl-12 pr-4 transition-colors duration-300 focus:outline-none"
                      style={{ 
                        borderColor: '#616161',
                        color: '#DCDCDC'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#DCDCDC'}
                      onBlur={(e) => e.target.style.borderColor = '#616161'}
                    />
                  </div>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  className="relative font-poppins"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                >
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6" style={{ color: '#616161' }} size={18} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message *"
                      required
                      rows={4}
                      className="w-full bg-transparent border-b-2 py-4 pl-12 pr-4 transition-colors duration-300 focus:outline-none resize-none"
                      style={{ 
                        borderColor: '#616161',
                        color: '#DCDCDC'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#DCDCDC'}
                      onBlur={(e) => e.target.style.borderColor = '#616161'}
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  className="pt-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative px-8 py-3 border-2 font-medium tracking-[0.2em] text-sm transition-all duration-500 overflow-hidden flex items-center gap-3 mx-auto lg:mx-0"
                    style={{ 
                      borderColor: 'rgba(220, 220, 220, 0.3)',
                      color: '#DCDCDC'
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#DCDCDC'
                      e.currentTarget.style.color = '#616161'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(220, 220, 220, 0.3)'
                      e.currentTarget.style.color = '#DCDCDC'
                    }}
                  >
                    {/* Button background effect */}
                    <motion.div
                      className="absolute inset-0 font-playfair opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ backgroundColor: 'rgba(220, 220, 220, 0.1)' }}
                      initial={false}
                    />

                    <span className="relative z-10">{isSubmitting ? "ENVOI..." : "ENVOYER"}</span>
                    <Send size={16} className="relative z-10" />

                    {/* Hover line effect */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5"
                      style={{ 
                        background: `linear-gradient(to right, #616161, #DCDCDC)` 
                      }}
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>

          
          
        </div>
      </div>

    {/* Decorative floating elements - Version corrigée */}

    {/* Premier élément décoratif - Haut gauche */}
    <motion.div
      className="absolute top-20 left-10 w-3 h-3 rounded-full"
      style={{ backgroundColor: 'rgba(97, 97, 97, 0.3)' }}
      initial={{ opacity: 0, scale: 0, y: 0 }}
      animate={isInView ? {
        opacity: [0, 0.3, 0.7, 0.3],
        scale: 1,
        y: [0, -20, 0],
      } : {
        opacity: 0,
        scale: 0,
        y: 0,
      }}
      transition={{ 
        duration: 6,
        delay: 2,
        repeat: isInView ? Number.POSITIVE_INFINITY : 0,
        ease: "easeInOut",
      }}
    />

    {/* Deuxième élément décoratif - Bas droit */}
    <motion.div
      className="absolute bottom-20 right-10 w-2 h-2 rounded-full"
      style={{ backgroundColor: 'rgba(220, 220, 220, 0.4)' }}
      initial={{ opacity: 0, scale: 0, y: 0 }}
      animate={isInView ? {
        opacity: [0, 0.4, 0.8, 0.4],
        scale: 1,
        y: [0, 15, 0],
      } : {
        opacity: 0,
        scale: 0,
        y: 0,
      }}
      transition={{ 
        duration: 5,
        delay: 2.2,
        repeat: isInView ? Number.POSITIVE_INFINITY : 0,
        ease: "easeInOut",
      }}
    />
    </section>
  )
}