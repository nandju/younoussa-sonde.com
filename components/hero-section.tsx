"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const contentItems = [
    {
      image: "/assets/images/illustrations/page-accueil/chips.png",
      title: "Goûtez la Grâce\nde nos Chips et Bananes",
      description:
        "Croquantes, dorées et irrésistibles – nos chips de pomme de terre et bananes sont faites maison, avec amour et tradition.",
      ctaText: "Commander maintenant",
    },
    {
      image: "/assets/images/illustrations/page-accueil/chips2-r.png",
      title: "Découvrez nos\nChips de Plantain",
      description:
        "Une saveur unique venue d'Afrique, nos chips de plantain mûr sont légèrement sucrées et parfaitement croustillantes.",
      ctaText: "Explorer la gamme",
    },
    {
      image: "/assets/images/illustrations/page-accueil/chips7-removebg-preview.png",
      title: "Bananes Séchées\n100% Naturelles",
      description:
        "Un en-cas sain et délicieux, nos bananes séchées sont préparées sans conservateurs ni sucres ajoutés.",
      ctaText: "Goûter maintenant",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = contentItems[currentIndex];

  return (
    <section
      className="relative bg-cover bg-center text-white py-12 md:py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/backgrounds/backgroun.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 container mx-auto px-4">
        <div
  key={currentIndex} // 👈 important : force le re-render pour déclencher l’animation
  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in"
>
  {/* Texte */}
  <div className="space-y-6">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md">
      {currentContent.title.split("\n").map((line, i) => (
        <span key={i}>
          {line}
          {i < currentContent.title.split("\n").length - 1 && <br />}
        </span>
      ))}
    </h1>
    <p className="text-base md:text-lg max-w-md text-white/90">
      {currentContent.description}
    </p>
    <Link
      href="#"
      className="inline-block bg-[#fbf6e9] text-black font-bold py-2 px-6 rounded-full hover:bg-[#ffefc6] transition"
    >
      {currentContent.ctaText}
    </Link>
  </div>

  {/* Image */}
  <div className="relative h-64 md:h-80 lg:h-96">
    <Image
      src={currentContent.image}
      alt={`Produit ${currentIndex + 1}`}
      fill
      className="object-contain rounded-2xl"
      sizes="(max-width: 768px) 100vw, 50vw"
      priority
    />
  </div>
</div>

      </div>
    </section>
  );
}
