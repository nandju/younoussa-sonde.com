"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Twitter, Instagram, Facebook, Youtube, Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "A PROPOS", href: "#propos" },
    { name: "SHOWREEL", href: "#showreel" },
    { name: "GALERIE", href: "#galerie" },
    { name: "FILMOGRAPHIE", href: "#filmographie" },
    { name: "CONTACTS", href: "#contacts" },
  ]

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
<motion.nav
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled
      ? "bg-[#3C3C3C]/95 backdrop-blur-md shadow-xl border-b border-[#474646]"
      : "bg-transparent"
  }`}
  style={{
    background: isScrolled
      ? 'linear-gradient(135deg, #3C3C3C 0%, #474646 100%)'
      : 'transparent',
  }}
>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="/"
              className="text-2xl lg:text-3xl font-light tracking-[0.2em] text-[#DCDCDC] hover:text-[#616161] transition-all duration-300 drop-shadow-sm"
            >
              LE PRINCE
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden font-poppins lg:flex items-center space-x-8">
            {/* Navigation Links */}
            <motion.div
              className="flex items-center space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm font-medium tracking-wider text-[#DCDCDC] hover:text-[#616161] transition-all duration-300 relative group px-2 py-1 rounded-md hover:bg-[#474646]/30"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-gradient-to-r from-[#616161] to-[#DCDCDC] transition-all duration-300 group-hover:w-[calc(100%-1rem)] rounded-full"></span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-4 ml-8 pl-8 border-l border-[#616161]/40"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-[#DCDCDC] hover:text-[#616161] transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-[#474646]/40 hover:shadow-lg"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-[#DCDCDC] hover:text-[#616161] transition-colors duration-300 p-2 rounded-lg hover:bg-[#474646]/40"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden overflow-hidden ${isMobileMenuOpen ? "max-h-96" : "max-h-0"}`}
          initial={false}
          animate={{
            maxHeight: isMobileMenuOpen ? 400 : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div 
            className="py-4 space-y-2 backdrop-blur-md rounded-xl mt-2 shadow-2xl border border-[#474646]/30"
            style={{
              background: 'linear-gradient(135deg, #474646 0%, #3C3C3C 100%)'
            }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block mx-3 px-4 py-3 text-sm font-medium tracking-wider text-[#DCDCDC] hover:text-[#616161] hover:bg-[#616161]/20 transition-all duration-300 rounded-lg border border-transparent hover:border-[#616161]/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              className="flex justify-center space-x-6 pt-4 border-t border-[#616161]/30 mx-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20,
              }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-[#DCDCDC] hover:text-[#616161] transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-[#616161]/20"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </motion.nav>
  )
}