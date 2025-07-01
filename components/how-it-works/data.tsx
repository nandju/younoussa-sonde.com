import { Search, ChevronDown, Heart, MapPin } from "lucide-react"
import Image from "next/image"

export const steps = [
  {
    id: "verify",
    number: "01",
    title: "Vérification",
    description: "Fournissez les documents nécessaires pour vérifier votre identité et assurer une transaction sécurisée.",
    content: (
      <div className="bg-white rounded-2xl p-6 shadow-xl border border-[#EADD8E]/20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-[#252525]">Vérification d'identité</h3>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#EADD8E] to-[#A07539]"></div>
            <span className="text-sm font-semibold text-[#252525]">Kofi Asante</span>
            <ChevronDown className="w-4 h-4 text-[#A07539]" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="p-5 border-2 border-dashed border-[#EADD8E] rounded-xl text-center bg-[#EADD8E]/5 hover:bg-[#EADD8E]/10 transition-colors">
            <div className="text-[#252525] font-semibold mb-2">Télécharger les Documents</div>
            <div className="text-sm text-[#A07539]">CNI, Justificatif de revenus, Relevés bancaires</div>
          </div>
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-[#EADD8E]/10 rounded-xl border border-green-200">
            <span className="text-sm text-green-700 font-semibold">✓ Identité Vérifiée</span>
            <span className="text-xs text-green-600 font-medium">Transaction Sécurisée Prête</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "search",
    number: "02",
    title: "Rechercher un bien",
    description:
      "Utilisez nos outils de recherche avancés pour filtrer les propriétés selon la localisation, le prix, la taille, le nombre de chambres et d'autres critères.",
    content: (
      <div className="bg-white rounded-2xl p-5 shadow-xl border border-[#EADD8E]/20">
        <div className="flex items-center justify-between mb-5">
          <div className="text-sm text-[#A07539] font-medium">Annonces Immobilières</div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#EADD8E] to-[#A07539]"></div>
            <span className="text-sm font-semibold text-[#252525]">Kofi Asante</span>
            <ChevronDown className="w-4 h-4 text-[#A07539]" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div>
            <label className="text-xs text-[#A07539] font-semibold mb-2 block">Type</label>
            <div className="flex items-center justify-between p-3 border-2 border-[#EADD8E]/30 rounded-lg hover:border-[#EADD8E] transition-colors">
              <span className="text-sm text-[#252525]">Choisir le type</span>
              <ChevronDown className="w-4 h-4 text-[#A07539]" />
            </div>
          </div>
          <div>
            <label className="text-xs text-[#A07539] font-semibold mb-2 block">Prix</label>
            <div className="flex items-center justify-between p-3 border-2 border-[#EADD8E]/30 rounded-lg hover:border-[#EADD8E] transition-colors">
              <span className="text-sm text-[#252525]">Fourchette de prix</span>
              <ChevronDown className="w-4 h-4 text-[#A07539]" />
            </div>
          </div>
        </div>

        <button className="w-full bg-[#252525] hover:bg-[#A07539] text-white py-3 rounded-xl mb-5 flex items-center justify-center font-semibold transition-all duration-300 hover:shadow-lg">
          <Search className="w-4 h-4 mr-2" />
          Rechercher
        </button>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative group">
            <Image
              src="/assets/images/illustrations/page-accueil/maison-interieur-blanc.png"
              alt="Villa Moderne Cocody"
              width={160}
              height={120}
              className="rounded-xl object-cover w-full group-hover:scale-105 transition-transform duration-300"
            />
            <Heart className="absolute top-2 right-2 w-4 h-4 text-white hover:text-[#EADD8E] transition-colors" />
            <div className="mt-3">
              <h4 className="font-semibold text-sm text-[#252525]">Villa Moderne Cocody</h4>
              <div className="flex items-center text-xs text-[#A07539] mb-1">
                <MapPin className="w-3 h-3 mr-1" />
                Cocody, Abidjan
              </div>
              <div className="font-bold text-sm text-[#252525]">45 000 000 FCFA</div>
            </div>
          </div>
          <div className="relative group">
            <Image
              src="/assets/images/illustrations/page-accueil/place-about.jpg"
              alt="Résidence Plateau"
              width={160}
              height={120}
              className="rounded-xl object-cover w-full group-hover:scale-105 transition-transform duration-300"
            />
            <Heart className="absolute top-2 right-2 w-4 h-4 text-white hover:text-[#EADD8E] transition-colors" />
            <div className="mt-3">
              <h4 className="font-semibold text-sm text-[#252525]">Résidence Plateau</h4>
              <div className="flex items-center text-xs text-[#A07539] mb-1">
                <MapPin className="w-3 h-3 mr-1" />
                Plateau, Abidjan
              </div>
              <div className="font-bold text-sm text-[#252525]">38 500 000 FCFA</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "deals",
    number: "03",
    title: "Finaliser l'affaire",
    description: "Une fois que vous avez trouvé votre maison idéale, soumettez une offre au vendeur via notre plateforme.",
    content: (
      <div className="bg-white rounded-2xl p-6 shadow-xl border border-[#EADD8E]/20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-[#252525]">Faire une Offre</h3>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#EADD8E] to-[#A07539]"></div>
            <span className="text-sm font-semibold text-[#252525]">Kofi Asante</span>
            <ChevronDown className="w-4 h-4 text-[#A07539]" />
          </div>
        </div>
        <div className="space-y-5">
          <div className="p-5 border-2 border-[#EADD8E]/30 rounded-xl hover:border-[#EADD8E] transition-colors">
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-[#252525]">Résidence Plateau</span>
              <span className="text-sm text-[#A07539] font-medium">Plateau, Abidjan</span>
            </div>
            <div className="text-sm text-[#A07539] font-semibold mb-4">Prix affiché: 38 500 000 FCFA</div>
            <div className="space-y-3">
              <input 
                type="text" 
                placeholder="Montant de votre offre (FCFA)" 
                className="w-full p-3 border-2 border-[#EADD8E]/30 rounded-lg focus:border-[#EADD8E] focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Conditions ou termes supplémentaires..."
                className="w-full p-3 border-2 border-[#EADD8E]/30 rounded-lg h-24 resize-none focus:border-[#EADD8E] focus:outline-none transition-colors"
              />
            </div>
          </div>
          <button className="w-full bg-gradient-to-r from-[#252525] to-[#A07539] hover:from-[#A07539] hover:to-[#252525] text-white py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-xl">
            Soumettre l'Offre
          </button>
          <div className="text-xs text-[#A07539] text-center font-medium">
            Votre offre sera envoyée directement au vendeur
          </div>
        </div>
      </div>
    ),
  },
]
