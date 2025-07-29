import Hero from "@/components/hero-section/hero"
import Header from "@/components/navbar"
import ShortBio from "@/components/short-bio/short-bio"



export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ShortBio />
    </div>
  )
}
