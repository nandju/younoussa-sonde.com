import Image from "next/image"
import Link from "next/link"

export default function AppSection() {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-red-600 to-yellow-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="relative h-64 md:h-80 order-2 md:order-1">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="KFC Mobile App"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-4 order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Now You Can Place Order From
              <br />
              Every Place By Just
              <br />
              Downloading KFC Mobile App
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link href="#" className="inline-block">
                <Image
                  src="/placeholder.svg?height=50&width=150"
                  alt="Download on App Store"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>
              <Link href="#" className="inline-block">
                <Image
                  src="/placeholder.svg?height=50&width=150"
                  alt="Get it on Google Play"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
