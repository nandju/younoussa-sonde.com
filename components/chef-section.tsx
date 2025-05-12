import Image from "next/image"
import Link from "next/link"

export default function ChefSection() {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              CRISPY AND
              <br />
              FRESH CHICKEN
              <br />
              MASTER CHEF
            </h2>
            <Link
              href="#"
              className="inline-block bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition-colors"
            >
              MEET REAL CHEFS
            </Link>
          </div>
          <div className="relative h-64 md:h-80">
            <div className="absolute inset-0 bg-yellow-100 rounded-full opacity-20"></div>
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="KFC Master Chef"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
