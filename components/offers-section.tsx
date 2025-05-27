import Image from "next/image"
import Link from "next/link"

export default function OffersSection() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">OFFRES DU JOUR</h3>
      <div className="flex items-center space-x-4">
                <div className="relative w-52 h-52 flex-shrink-0">
          <Image
            src="/assets/images/illustrations/page-accueil/projet-chips.png"
            alt="Chips Spécial"
            fill
            className="object-contain"
            sizes="128px"
          />
        </div>
        <div>
          <p className="font-bold">NOUVEAU ! SACHET DE CHIPS SUCRÉES</p>
          <div className="flex items-center mt-2">
            <span className="text-[#d0a825] font-bold text-lg">500 FCFA</span>
            <Link
              href="#"
              className="ml-4 bg-[#d0a825] text-white text-xs font-bold py-1 px-3 rounded-full hover:bg-[#fbf6e9] hover:text-black transition-colors"
            >
              COMMANDER
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
