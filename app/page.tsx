import ActorGallery from "@/components/actor-gallery/actor-gallery"
import Filmography from "@/components/filmography/filmography"
import FooterSection from "@/components/footer"
import Hero from "@/components/hero-section/hero"
import Header from "@/components/navbar"
import ProfessionalContact from "@/components/professional-contact/professional-contact"
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
      <Filmography />
      <ProfessionalContact />
      <FooterSection />
    </div>
  )
}
