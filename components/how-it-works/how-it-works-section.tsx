"use client"

import { useState, useEffect } from "react"
import { steps } from "./data"



export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-cycle every 5 seconds when not hovered
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setIsTransitioning(true)
        setTimeout(() => {
          setActiveStep((prev) => (prev + 1) % steps.length)
          setIsTransitioning(false)
        }, 150) // Blur duration
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [isHovered])

  const handleStepClick = (index: number) => {
    if (index !== activeStep) {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveStep(index)
        setIsTransitioning(false)
      }, 150)
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* HOW IT WORKS Badge */}
            <div className="mb-8 sm:mb-12">
            <div className="inline-flex items-center px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-600 text-sm font-medium">
                COMMENT ÇA MARCHE
            </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-12 sm:mb-16 lg:mb-20">
            Comment ça fonctionne ?
            </h2>


        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Steps */}
          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`cursor-pointer transition-all duration-300 ${
                  activeStep === index ? "opacity-100" : "opacity-60 hover:opacity-80"
                }`}
                onClick={() => handleStepClick(index)}
                onMouseEnter={() => {
                  setIsHovered(true)
                  handleStepClick(index)
                }}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`text-lg font-bold transition-colors duration-300 ${
                      activeStep === index ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h3
                      className={`text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 transition-colors duration-300 ${
                        activeStep === index ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-gray-600 leading-relaxed transition-colors duration-300 ${
                        activeStep === index ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Dynamic Content */}
          <div className="relative">
            <div
              className={`transition-all duration-300 ${isTransitioning ? "blur-sm opacity-50" : "blur-0 opacity-100"}`}
            >
              <div className="sticky top-8">{steps[activeStep].content}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
