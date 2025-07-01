"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Menu, X, Home, Star } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [activeTab, setActiveTab] = useState("rent")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
          <Image
            src="/placeholder.svg?height=128&width=128"
            alt="Palm tree"
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-30">
          <Image
            src="/placeholder.svg?height=384&width=384"
            alt="Modern house"
            width={384}
            height={384}
            className="object-contain"
          />
        </div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="HOFIN Logo"
              width={120}
              height={40}
              className="h-8 w-auto sm:h-10"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-blue-100 transition-colors">
              Sell Property
            </a>
            <a href="#" className="text-white hover:text-blue-100 transition-colors">
              Buy Property
            </a>
            <a href="#" className="text-white hover:text-blue-100 transition-colors">
              Rent
            </a>
            <a href="#" className="text-white hover:text-blue-100 transition-colors">
              About us
            </a>
            <a href="#" className="text-white hover:text-blue-100 transition-colors">
              Resources
            </a>
          </div>

          {/* Login Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden sm:inline-flex bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Login
            </Button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-blue-600/95 backdrop-blur-sm border-t border-white/10">
            <div className="px-4 py-4 space-y-4">
              <a href="#" className="block text-white hover:text-blue-100 transition-colors">
                Sell Property
              </a>
              <a href="#" className="block text-white hover:text-blue-100 transition-colors">
                Buy Property
              </a>
              <a href="#" className="block text-white hover:text-blue-100 transition-colors">
                Rent
              </a>
              <a href="#" className="block text-white hover:text-blue-100 transition-colors">
                About us
              </a>
              <a href="#" className="block text-white hover:text-blue-100 transition-colors">
                Resources
              </a>
              <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                Login
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="flex items-center justify-center mb-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                We Bring New Experience
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
                of Your Dream
              </span>
              <div className="bg-white/20 p-2 rounded-lg">
                <Home className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
                Property
              </span>
            </div>

            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Helping you find your dream home, one property at a time. Your satisfaction is our priority.
            </p>

            {/* Interactive Dots */}
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-white text-sm">Buy Property</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                <span className="text-white/70 text-sm">Rent Property</span>
              </div>
            </div>
          </div>

          {/* Search Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl">
              {/* Tabs */}
              <div className="flex space-x-2 mb-6">
                <button
                  onClick={() => setActiveTab("rent")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === "rent" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Rent
                </button>
                <button
                  onClick={() => setActiveTab("buy")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === "buy" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Buy
                </button>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <Input placeholder="Select Location" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Villa House" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="villa">Villa House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Style</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Industrial" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="industrial">Industrial</SelectItem>
                      <SelectItem value="modern">Modern</SelectItem>
                      <SelectItem value="traditional">Traditional</SelectItem>
                      <SelectItem value="contemporary">Contemporary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <Input placeholder="$120,000-150,000" className="w-full" />
                </div>
              </div>

              {/* Search Button and Rating */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <Button className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">4.5</span>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                  </div>
                  <span className="text-xs text-gray-500">2k+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
