import ActorGallery from "@/components/actor-gallery/actor-gallery"
import Hero from "@/components/hero-section/hero"
import Header from "@/components/navbar"
import ShortBio from "@/components/short-bio/short-bio"
import Showreel from "@/components/showreel/showreel"



export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ShortBio />
      <Showreel />
      <ActorGallery />
    </div>
  )
}
