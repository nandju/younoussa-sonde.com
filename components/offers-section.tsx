import Image from "next/image"
import Link from "next/link"

export default function OffersSection() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">ANY DAY OFFERS</h3>
      <div className="flex items-center space-x-4">
        <div className="relative w-24 h-24 flex-shrink-0">
          <Image
            src="/placeholder.svg?height=100&width=100"
            alt="Burger meal"
            fill
            className="object-contain"
            sizes="96px"
          />
        </div>
        <div>
          <p className="font-bold">NEW! ZINGER BURGER MEAL</p>
          <div className="flex items-center mt-2">
            <span className="text-red-600 font-bold text-lg">$8.99</span>
            <Link
              href="#"
              className="ml-4 bg-red-600 text-white text-xs font-bold py-1 px-3 rounded-full hover:bg-red-700 transition-colors"
            >
              ORDER NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
