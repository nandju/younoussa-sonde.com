import Image from "next/image"

const menuItems = [
  { name: "Zinger Burger", price: "$6.99", image: "/placeholder.svg?height=120&width=120" },
  { name: "Chicken Bucket", price: "$19.99", image: "/placeholder.svg?height=120&width=120" },
  { name: "Twister Wrap", price: "$5.99", image: "/placeholder.svg?height=120&width=120" },
  { name: "Hot Wings", price: "$8.99", image: "/placeholder.svg?height=120&width=120" },
  { name: "Popcorn Chicken", price: "$4.99", image: "/placeholder.svg?height=120&width=120" },
  { name: "Double Down", price: "$7.99", image: "/placeholder.svg?height=120&width=120" },
]

export default function MenuItems() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">POPULAR MENU ITEMS</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="relative w-24 h-24 mb-2">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              <h3 className="font-medium text-sm">{item.name}</h3>
              <p className="text-red-600 font-bold mt-1">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
