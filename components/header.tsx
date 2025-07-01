"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Menu, X, Home, Star, MapPin, Building, Palette, DollarSign } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [activeTab, setActiveTab] = useState("location")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Image d'arrière-plan principale */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/backgrounds/background.jpg')",
          filter: "brightness(0.3)"
        }}
      />
      
      {/* Overlay avec dégradé pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#252525]/80 via-[#252525]/60 to-[#A07539]/40" />
      
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 opacity-20">
          <div 
            className="w-full h-full bg-cover bg-center rounded-full"
            style={{
              backgroundImage: "url('/assets/images/illustrations/page-accueil/mini-house.png')",
              filter: "sepia(100%) saturate(200%) hue-rotate(25deg)"
            }}
          />
        </div>
        
        {/* Formes géométriques décoratives */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#EADD8E]/10 rounded-full blur-xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#A07539]/10 rounded-lg rotate-45 blur-2xl" />
      </div>

      {/* Barre de navigation */}
      <nav className="relative z-50 px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-[#EADD8E] p-2 rounded-lg">
              <Home className="w-8 h-8 text-[#252525]" />
            </div>
            <span className="ml-3 text-2xl font-bold text-white">ImmoBel</span>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-[#EADD8E] transition-all duration-300 font-medium relative group">
              Vendre un Bien
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EADD8E] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#" className="text-white hover:text-[#EADD8E] transition-all duration-300 font-medium relative group">
              Acheter un Bien
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EADD8E] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#" className="text-white hover:text-[#EADD8E] transition-all duration-300 font-medium relative group">
              Location
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EADD8E] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#" className="text-white hover:text-[#EADD8E] transition-all duration-300 font-medium relative group">
              À Propos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EADD8E] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#" className="text-white hover:text-[#EADD8E] transition-all duration-300 font-medium relative group">
              Ressources
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EADD8E] transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          {/* Bouton de connexion & Menu mobile */}
          <div className="flex items-center space-x-4">
            <Button className="hidden sm:inline-flex bg-[#EADD8E] text-[#252525] hover:bg-[#A07539] hover:text-white transition-all duration-300 font-semibold px-6 py-2">
              Connexion
            </Button>

            {/* Bouton Menu Mobile */}
            <button 
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#252525]/95 backdrop-blur-md border-t border-[#EADD8E]/20">
            <div className="px-4 py-6 space-y-4">
              <a href="#" className="block text-white hover:text-[#EADD8E] transition-colors font-medium">
                Vendre un Bien
              </a>
              <a href="#" className="block text-white hover:text-[#EADD8E] transition-colors font-medium">
                Acheter un Bien
              </a>
              <a href="#" className="block text-white hover:text-[#EADD8E] transition-colors font-medium">
                Location
              </a>
              <a href="#" className="block text-white hover:text-[#EADD8E] transition-colors font-medium">
                À Propos
              </a>
              <a href="#" className="block text-white hover:text-[#EADD8E] transition-colors font-medium">
                Ressources
              </a>
              <Button className="w-full bg-[#EADD8E] text-[#252525] hover:bg-[#A07539] hover:text-white transition-all duration-300 font-semibold">
                Connexion
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Contenu principal */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto">
          {/* Titre principal */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="flex items-center justify-center mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
                Nous Apportons une Nouvelle
              </h1>
            </div>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#EADD8E]">
                Expérience de Votre
              </span>
              <div className="bg-[#EADD8E]/20 backdrop-blur-sm p-3 rounded-2xl border border-[#EADD8E]/30">
                <Home className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#EADD8E]" />
              </div>
            </div>
            <div className="mb-8">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
                Bien Immobilier de Rêve
              </span>
            </div>

            <p className="text-xl sm:text-2xl text-[#EADD8E]/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              Nous vous aidons à trouver la maison de vos rêves, une propriété à la fois. Votre satisfaction est notre priorité absolue.
            </p>

            {/* Indicateurs interactifs */}
            <div className="flex items-center justify-center space-x-12 mb-10">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-4 h-4 bg-[#EADD8E] rounded-full group-hover:scale-125 transition-transform" />
                <span className="text-white text-lg font-medium group-hover:text-[#EADD8E] transition-colors">Acheter une Propriété</span>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-4 h-4 bg-white/50 rounded-full group-hover:bg-[#A07539] group-hover:scale-125 transition-all" />
                <span className="text-white/70 text-lg font-medium group-hover:text-[#A07539] transition-colors">Louer une Propriété</span>
              </div>
            </div>
          </div>

          {/* Formulaire de recherche */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20">
              {/* Onglets */}
              <div className="flex space-x-3 mb-8">
                <button
                  onClick={() => setActiveTab("location")}
                  className={`px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                    activeTab === "location" 
                      ? "bg-[#252525] text-white shadow-lg transform scale-105" 
                      : "bg-gray-100 text-gray-600 hover:bg-[#EADD8E]/20 hover:text-[#252525]"
                  }`}
                >
                  Location
                </button>
                <button
                  onClick={() => setActiveTab("achat")}
                  className={`px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                    activeTab === "achat" 
                      ? "bg-[#252525] text-white shadow-lg transform scale-105" 
                      : "bg-gray-100 text-gray-600 hover:bg-[#EADD8E]/20 hover:text-[#252525]"
                  }`}
                >
                  Achat
                </button>
              </div>

              {/* Champs du formulaire */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="group">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                    <MapPin className="w-4 h-4 mr-2 text-[#A07539]" />
                    Localisation
                  </label>
                  <Input 
                    placeholder="Choisir une localisation" 
                    className="w-full h-12 border-2 border-gray-200 focus:border-[#EADD8E] rounded-xl transition-colors"
                  />
                </div>
                <div className="group">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                    <Building className="w-4 h-4 mr-2 text-[#A07539]" />
                    Type de Bien
                  </label>
                  <Select>
                    <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-[#EADD8E] rounded-xl">
                      <SelectValue placeholder="Maison Villa" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="villa">Maison Villa</SelectItem>
                      <SelectItem value="appartement">Appartement</SelectItem>
                      <SelectItem value="condo">Condominium</SelectItem>
                      <SelectItem value="maison-ville">Maison de Ville</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="group">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                    <Palette className="w-4 h-4 mr-2 text-[#A07539]" />
                    Style Architectural
                  </label>
                  <Select>
                    <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-[#EADD8E] rounded-xl">
                      <SelectValue placeholder="Industriel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="industriel">Industriel</SelectItem>
                      <SelectItem value="moderne">Moderne</SelectItem>
                      <SelectItem value="traditionnel">Traditionnel</SelectItem>
                      <SelectItem value="contemporain">Contemporain</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="group">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                    <DollarSign className="w-4 h-4 mr-2 text-[#A07539]" />
                    Gamme de Prix
                  </label>
                  <Input 
                    placeholder="120 000€ - 150 000€" 
                    className="w-full h-12 border-2 border-gray-200 focus:border-[#EADD8E] rounded-xl transition-colors"
                  />
                </div>
              </div>

              {/* Bouton de recherche et évaluations */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <Button className="w-full sm:w-auto bg-[#252525] hover:bg-[#A07539] text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <Search className="w-5 h-5 mr-3" />
                  Rechercher
                </Button>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 bg-[#EADD8E]/20 px-4 py-2 rounded-full">
                    <Star className="w-5 h-5 text-[#EADD8E] fill-current" />
                    <span className="text-base font-bold text-[#252525]">4.8</span>
                  </div>
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#EADD8E] to-[#A07539] border-3 border-white shadow-lg" />
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#A07539] to-[#252525] border-3 border-white shadow-lg" />
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#252525] to-[#EADD8E] border-3 border-white shadow-lg" />
                  </div>
                  <span className="text-sm text-gray-600 font-medium">3k+ avis clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}