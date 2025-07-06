"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Star, MapPin, Phone, Mail } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Formulaire soumis:", formData)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#252525' }}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Content */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              {/* Contact Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full border-2 text-sm font-medium mb-8 w-fit" 
                   style={{ 
                     borderColor: '#A07539',
                     backgroundColor: '#EADD8E',
                     color: '#252525'
                   }}>
                Contact
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-white leading-tight mb-6">
                Vous hésitez encore ? Contactez-nous et remplissez le formulaire.
              </h2>

              {/* Subtext */}
              <p className="text-gray-300 text-lg sm:text-xl mb-8 lg:mb-12 font-extralight">
                Contactez-nous et faites-nous savoir comment nous pouvons vous accompagner dans votre projet immobilier.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" 
                       style={{ backgroundColor: '#A07539' }}>
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300">Abidjan, Cocody - Riviera</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" 
                       style={{ backgroundColor: '#A07539' }}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300">+225 27 22 XX XX XX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" 
                       style={{ backgroundColor: '#A07539' }}>
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300">contact@agence-immobiliere.ci</span>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="flex items-center space-x-4">
                {/* User Avatars */}
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center" 
                       style={{ 
                         backgroundColor: '#A07539',
                         borderColor: '#252525'
                       }}>
                    <span className="text-white text-sm font-medium">K</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center" 
                       style={{ 
                         backgroundColor: '#EADD8E',
                         borderColor: '#252525'
                       }}>
                    <span className="text-sm font-medium" style={{ color: '#252525' }}>A</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center" 
                       style={{ 
                         backgroundColor: '#A07539',
                         borderColor: '#252525'
                       }}>
                    <span className="text-white text-sm font-medium">M</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-current" style={{ color: '#EADD8E' }} />
                  <span className="text-white font-medium">4.8</span>
                  <span className="text-gray-400">(250+ Avis clients)</span>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="p-8 sm:p-12 lg:p-16 flex items-center">
              <div className="w-full max-w-md mx-auto">
                <div className="bg-white rounded-2xl p-8 shadow-xl border-2" style={{ borderColor: '#A07539' }}>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#252525' }}>
                      Demande de contact
                    </h3>
                    <p className="text-gray-600">
                      Remplissez le formulaire ci-dessous
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name Field */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium mb-2" style={{ color: '#252525' }}>
                        Nom complet *
                      </label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Votre nom complet..."
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors"
                        style={{ 
                          borderColor: '#A07539',
                        //   focusBorderColor: '#252525'
                        }}
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#252525' }}>
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="votre.email@exemple.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors"
                        style={{ 
                          borderColor: '#A07539'
                        }}
                        required
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: '#252525' }}>
                        Téléphone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+225 XX XX XX XX XX"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors"
                        style={{ 
                          borderColor: '#A07539'
                        }}
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#252525' }}>
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Décrivez votre projet immobilier..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors resize-none"
                        style={{ 
                          borderColor: '#A07539'
                        }}
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full font-medium py-4 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2"
                      style={{ 
                        backgroundColor: '#A07539',
                        color: 'white'
                      }}
                    >
                      <span>Envoyer la demande</span>
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-xs text-gray-500">
                      Nous vous répondrons sous 24h maximum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}