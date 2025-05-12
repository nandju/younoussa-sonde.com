import Image from "next/image"
import Link from "next/link"

const categories = [
  { name: "BOX MEALS", icon: "/placeholder.svg?height=60&width=60" },
  { name: "BURGERS", icon: "/placeholder.svg?height=60&width=60" },
  { name: "BUCKETS", icon: "/placeholder.svg?height=60&width=60" },
  { name: "FRIES", icon: "/placeholder.svg?height=60&width=60" },
  { name: "DESSERTS", icon: "/placeholder.svg?height=60&width=60" },
]

export default function MenuCategories() {
  return (
    <section className="bg-white py-6 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="bg-yellow-400 px-8 py-2 rounded-full mb-4">
            <span className="font-bold text-black">MENU</span>
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 justify-items-center">
          {categories.map((category, index) => (
            <Link href="#" key={index} className="flex flex-col items-center group">
              <div className="relative w-16 h-16 mb-2">
                <Image
                  src={category.icon || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform"
                  sizes="64px"
                />
              </div>
              <span className="text-xs md:text-sm font-medium text-center">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
