import Image from "next/image"
import { Play } from "lucide-react"

export default function VideoSection() {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Get Dinner with 2<br />
              Tender Chicken
              <br />
              Bites
            </h2>
            <p className="text-gray-600">
              Try our new tender chicken bites with your choice of dipping sauce. Perfect for dinner or sharing with
              friends.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Tender Chicken Bites video thumbnail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white bg-opacity-80 rounded-full p-4 hover:bg-opacity-100 transition-all">
                <Play className="h-8 w-8 text-red-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
