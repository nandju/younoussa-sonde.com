import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import MenuCategories from "@/components/menu-categories"
import OffersSection from "@/components/offers-section"
import ChefSection from "@/components/chef-section"
import AppSection from "@/components/app-section"
import MenuItems from "@/components/menu-items"
import VideoSection from "@/components/video-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <MenuCategories />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <OffersSection />
          <div className="bg-red-600 rounded-lg p-6 text-white flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold mb-2">FIND A KFC STORE NEAR YOU</h3>
            <button className="bg-white text-red-600 font-bold py-2 px-6 rounded-full mt-4 hover:bg-gray-100 transition-colors">
              FIND NOW
            </button>
          </div>
        </div>
      </div>
      <ChefSection />
      <AppSection />
      <MenuItems />
      <VideoSection />
      <Footer />
    </main>
  )
}
